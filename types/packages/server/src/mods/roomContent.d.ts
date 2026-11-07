import { type BalancePatch, type ModContent, type Palette, type RoomPanel, type ThemeName } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
import { type ModTexts, type ModTextDoc } from "@scc/shared/text";
import type { Applied } from "./modRuntime";
import type { ScannedAsset } from "./reskin";
import type { ReskinContribution } from "./manifest";
/** Most bytes of reskin files one room asks a phone to download. Past it, later Mods' files are dropped. */
export declare const TERMINAL_BUDGET: number;
/** An enabled, usable Mod as the plan needs it. `order` is Load Order. */
export interface PlanMod {
    id: string;
    name: string;
    assets: readonly ScannedAsset[];
    palettes: ReskinContribution["palettes"] | undefined;
    /** The Mod's balance patch, already checked against the stock table (empty or absent: it tunes nothing). */
    balance?: BalancePatch;
    /** The Mod's content entries that passed the scan (references to other entries are decided here, with the other Mods). */
    content?: ModContent;
    /** The Mod's text by normalised language tag; `en` is its English. */
    text?: ReadonlyMap<string, ModTexts>;
    /** The Mod's panels that passed the scan (step 7). */
    panels?: readonly RoomPanel[];
}
export interface Winner {
    modId: string;
    asset: ScannedAsset;
}
export interface ContentPlan {
    /** Logical Asset path -> the file that wins it. */
    assets: Map<string, Winner>;
    /** "theme\0slot" -> the colour that wins it. */
    palettes: Map<string, {
        modId: string;
        theme: ThemeName;
        slot: keyof Palette;
        value: string;
    }>;
    /** The balance patch that wins, merged in Load Order with its keys sorted. */
    balance: BalancePatch;
    /** The content that stands: every Mod's, in Load Order, the last to define an id winning it, nothing left that names what is not there. */
    content: ModContent;
    /** The Mods' text by language, keys sorted. */
    text: ModTextDoc;
    /** The Mods' panels in Load Order, at most MAX_PANELS across the room (the later ones are told they did not fit). */
    panels: RoomPanel[];
    /** The merged Mod English: what a Language Pack may cover and what the content's keys are checked against. */
    english: ModTexts;
    /** The Mods that contribute any of the above (the ones a "wait for the lobby" line belongs on). */
    contributors: Set<string>;
    /** Lines for the Mods screen, by Mod id. */
    lines: Map<string, TextStr[]>;
}
export declare function planRoomContent(mods: readonly PlanMod[]): ContentPlan;
/** Does the plan change anything at all? A plan with nothing in it means no Room Content (hash ""). */
export declare function planIsEmpty(plan: ContentPlan): boolean;
export interface Materialized extends Applied {
}
/**
 * Copy the plan's files into the cache and build the document. A file that no longer passes (the folder changed since
 * the scan) is left out: that game file stays stock. Null when nothing is left to serve.
 */
export declare function materializeRoomContent(owner: object, plan: ContentPlan): Promise<Materialized | null>;
