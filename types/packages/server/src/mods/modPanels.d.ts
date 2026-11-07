import { type RoomPanel } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
import type { PanelDecl } from "./manifest";
export interface ScannedPanels {
    /** The panels that passed, in the order the manifest lists them. */
    panels: RoomPanel[];
}
/** Read the Mod's panel pages. `english` is the Mod's English (from scanText), whose keys a title may use. Never throws. */
export declare function scanPanels(dir: string, realDir: string, decls: readonly PanelDecl[], modId: string, english: ReadonlyMap<string, unknown>): Promise<{
    panels: ScannedPanels | null;
    problems: TextStr[];
}>;
