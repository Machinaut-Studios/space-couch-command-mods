import type { ScannedMod, ScannedPack } from "./index";
import { type LoadOrder } from "./loadOrder";
import type { ApprovedMod, Settings } from "./settings";
import { type Approval } from "./codeApproval";
/** The host's Mod settings, as the room holds them. */
export interface ModsState {
    order: readonly string[];
    disabled: ReadonlySet<string>;
    /** The Code Mods the host approved (step 6b). Absent = none: every Code Mod is off. */
    approved?: ReadonlyMap<string, ApprovedMod>;
}
export interface ResolvedMods extends LoadOrder {
    /**
     * The switched-off ids that count. A Mod that contributes only a language is never off here: the LANGUAGE row
     * controls it, so a Mod updated to language-only cannot be stuck off with no switch to turn it on.
     */
    disabled: ReadonlySet<string>;
    /** Every usable Code Mod's approval. A Code Mod that is not "approved" is in `disabled` whatever the host's switch says: this is where the gate is, because Mods are on by default. */
    approval: ReadonlyMap<string, Approval>;
}
/** Order the usable Mods and work out which are switched off or blocked. Pure. */
export declare function resolveMods(mods: readonly ScannedMod[], saved: ModsState): ResolvedMods;
/**
 * The packs the crew may actually use: the language Contribution of every Mod that is not switched off and
 * whose requirements are met. The ONE filter for the room's list, setLanguage and a remote guest's own load.
 * A Mod that is not usable (the demo build refusing it, say) offers no language even if its pack alone looks fine.
 */
export declare function effectivePacks(mods: readonly ScannedMod[], resolved: ResolvedMods): ScannedPack[];
/** The lower-case primary subtag of a BCP 47 tag ("pt-BR" -> "pt", "zh_Hans" -> "zh"). */
export declare function primaryTag(tag: string): string;
/** The pack's id when it can be selected: only ok packs (usable wire) are selectable. */
export declare function selectableId(p: ScannedPack): string | null;
/** The ok pack with this id, or null. (The scanner guarantees at most one ok pack per id.) */
export declare function findSelectable(packs: readonly ScannedPack[], id: string): ScannedPack | null;
/**
 * `choice` (the persisted setting) wins: a pack id selects that pack when it is installed and ok, otherwise
 * English; null is English on purpose. Only when nothing was ever chosen (undefined) does `defaultTag`
 * (SCC_DEFAULT_LANGUAGE, a BCP 47 tag) apply: the first ok pack whose language matches the full tag, else
 * the first whose primary subtag matches. English ("en") never selects a pack by default.
 */
export declare function resolveLanguage(choice: Settings["language"], defaultTag: string | undefined, packs: readonly ScannedPack[]): ScannedPack | null;
