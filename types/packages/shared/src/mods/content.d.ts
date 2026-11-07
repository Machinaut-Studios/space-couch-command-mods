import { type AnomalyDef, type QuestDef } from "../anomalies";
import { type ShipVisualId } from "../entityVisual";
import { type ShipClassId } from "../ships";
import { type ModTextDoc } from "../text/modText";
import { type BalancePatch } from "./balancePatch";
import { POOLED_HAIL_FACTIONS } from "./unions";
type PooledFaction = (typeof POOLED_HAIL_FACTIONS)[number];
/** A captain a Mod adds to an existing faction's pool. `avatar` is the avatar id the clients draw (`mod.<modId>.<name>`). */
export interface ModPersona {
    faction: PooledFaction;
    speakerKey: string;
    avatar: string;
}
export interface ModEnemy {
    id: string;
    labelKey: string;
    /** The stock class this one is cloned from. */
    basedOn: string;
    visual: ShipVisualId;
    /** Numbers that differ from the clone, checked against the stock block like a balance patch. */
    stats: BalancePatch;
    /** Joins encounters wherever `basedOn` can appear, at `weight` against its 1. */
    pool?: {
        weight: number;
        minSector: number;
    };
}
export interface ModHull {
    id: string;
    labelKey: string;
    blurbKey: string;
    subtitleKey: string;
    taglineKey: string;
    /** The stock hull whose seat layout is copied whole (seat ids, consoles, auto-officer logic stay valid). */
    seatsFrom: ShipClassId;
    /** The stock hull whose stat block is cloned. */
    statsFrom: ShipClassId;
    stats: BalancePatch;
}
/** What a Mod (or the merge of all of them) adds. Each list is in Load Order. */
export interface ModContent {
    personas: ModPersona[];
    anomalies: AnomalyDef[];
    quests: QuestDef[];
    enemies: ModEnemy[];
    hulls: ModHull[];
}
export declare const emptyContent: () => ModContent;
export declare function contentIsEmpty(c: ModContent | null | undefined): boolean;
/** What the validator needs to know from the outside. */
export interface ContentCtx {
    /** May this Text Key be used? A key of the shipped catalog, or one of this Mod's own that its English has. */
    keyOk(key: string): boolean;
    /** Turn a persona's `avatar` as written into the avatar id the clients draw, or null when it is not usable. */
    avatar(value: unknown): string | null;
}
/** Something dropped. `what` names it (`anomalies.ember_core`, `enemies[2]`). */
export interface ContentProblem {
    kind: "content" | "unknownBalance" | "balanceRange";
    what: string;
}
/** A Mod's new ids: lower case, digits and underscores. `constructor` is a fine id; every lookup of one is an own-key lookup. */
export declare const CONTENT_ID_RE: RegExp;
/** Avatar ids and the names inside them. */
export declare const AVATAR_NAME_RE: RegExp;
/** Is this an id of a stock enemy class a Mod's content may name (not a boss)? */
export declare const isStockEnemy: (id: string) => boolean;
export declare const isStockAnomaly: (id: string) => boolean;
export declare const isStockQuest: (id: string) => boolean;
export declare const isStockHull: (id: string) => boolean;
/**
 * Check one Mod's content document list by list. Each entry that fails is left out and named in `problems`; the rest stands.
 * Never throws and never reads a key it has not checked: the document is the modder's.
 */
export declare function validateModContent(input: unknown, ctx: ContentCtx): {
    content: ModContent;
    problems: ContentProblem[];
};
export type ContentList = "anomalies" | "quests" | "enemies" | "hulls";
export interface ContentClash {
    /** `anomalies.ember_core` */
    what: string;
    loser: string;
    winner: string;
}
/**
 * Combine the Mods' content in Load Order. An id two different Mods define goes to the LAST (and is reported as a clash, told
 * to the Mod that lost). `owners` says which Mod an id ended with (`anomalies:ember_core` -> modId), so a later drop can be
 * told to the right Mod.
 */
export declare function mergeModContents(parts: readonly {
    modId: string;
    content: ModContent;
}[]): {
    content: ModContent;
    clashes: ContentClash[];
    owners: Map<string, string>;
    /** The Mod each captain in `content.personas` came from, in the same order. */
    personaOwners: string[];
};
/** One entry removed because of what it named. */
export interface DroppedEntry {
    list: ContentList;
    id: string;
    /** What it named that is not there, for the line (`quests.ember_thread`). */
    why: string;
}
/**
 * Drop every entry that names something that is not there, and then everything that named what was dropped, until nothing
 * dangles. A reference resolves to the game's own content or to an entry in this same content; the campaign's content never
 * resolves. A quest also needs every one of its stages to be reachable: some anomaly must open each, from the plot while the stage before
 * it is open (see stageReachable). Idempotent, so a client
 * can run it again on what the host sent.
 */
export declare function resolveContentReferences(input: ModContent): {
    content: ModContent;
    dropped: DroppedEntry[];
};
/**
 * The ONE reading of a Room Content document's Mod parts: the text first (a key the content names must be a game key or one the
 * Mods' English has), then the content entry by entry (the caps of each list, the ids, the kinds), then every reference. The
 * host runs it on what it merged and ships the result; every client runs it on what it received. Because it is the same function
 * and it is idempotent, a document the host sends is read unchanged, whatever the Mods were, and the tables cannot differ.
 */
export declare function normalizeModDocument(contentJson: unknown, textJson: unknown): {
    content: ModContent;
    text: ModTextDoc;
    problems: ContentProblem[];
    dropped: DroppedEntry[];
};
/**
 * The stock table with the classes of `content` added, as the table a balance patch is judged against (the numbers of a Mod's
 * own enemy or hull can be tuned by a balance file). The stock table itself when `content` adds no class.
 */
export declare function stockWithContent(content: ModContent | null | undefined): Readonly<Record<string, unknown>>;
/** The Mod enemy classes that stand beside `basedOn` in an encounter at `sector`, with their weights (`basedOn` itself weighs 1). */
export declare function modEnemyPool(basedOn: string, sector: number): {
    id: string;
    weight: number;
}[];
/** Remove exactly what applyContent added; every stock entry is as it was, and every array keeps its identity. */
export declare function restoreContent(): void;
/**
 * Make the game's tables the stock ones plus `content`: restore first, so a new document never stacks on an old one, then add
 * each entry in place. An id the table already holds (a stock id; the validator keeps those out, and this is the second lock)
 * is skipped. Call it before applyBalancePatch, never after.
 */
export declare function applyContent(content: ModContent | null | undefined): void;
/** The game's tables for a room: content first, then the balance patch, so a patch can tune what a Mod added. */
export declare function applyRoomTables(content: ModContent | null | undefined, patch: BalancePatch): void;
/** The stock tables again. */
export declare function clearRoomTables(): void;
export {};
