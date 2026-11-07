import type { NoParamKey } from "./text/keys";
/** What class of survey return this is — drives the glyph + the offered action. */
export type PoiKind = "mineral" | "relic" | "hatch" | "signal" | "organism" | "core";
/** The one action a kind invites. Probe-costing actions spend run.probes. */
export interface PoiActionDef {
    action: string;
    labelKey: NoParamKey;
    probe: boolean;
    blurbKey: NoParamKey;
}
export declare const POI_ACTIONS: Record<PoiKind, PoiActionDef>;
/** Scan-view glyphs (retro-terminal, one char each). */
export declare const POI_GLYPHS: Record<PoiKind, string>;
export declare function poiKindOf(kind: string): PoiKind | null;
