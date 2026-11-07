import { type ContentProblem, type ModContent } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
import type { ModTexts } from "@scc/shared/text";
import { type ScannedAsset } from "./reskin";
/** The text files of one Mod may total this many bytes. */
export declare const MAX_MOD_TEXT_BYTES: number;
/** The content file: the lists are small (a few hundred entries at most). */
export declare const MAX_CONTENT_BYTES: number;
export interface ScannedText {
    /** Normalised language tag -> the entries that passed. `en` is the Mod's English. */
    byLang: Map<string, ModTexts>;
}
export interface ScannedContent {
    /** The entries that passed (references to other entries are not resolved yet). */
    content: ModContent;
    /** The captain portraits the personas name, checked like reskin files and served as `avatars/mod.<id>.<name>.png`. */
    assets: ScannedAsset[];
}
/** The lines for what the content validator dropped. */
export declare function contentLines(problems: readonly ContentProblem[]): TextStr[];
/** Read the Mod's text folder. `dir` is the Mod folder and `realDir` its realpath. Never throws. */
export declare function scanText(dir: string, realDir: string, folder: string, modId: string): Promise<{
    text: ScannedText | null;
    problems: TextStr[];
}>;
/** Read and judge the Mod's content file. `english` is the Mod's English (from scanText), whose keys its content may use. */
export declare function scanContent(dir: string, realDir: string, file: string, modId: string, english: ReadonlyMap<string, unknown>): Promise<{
    content: ScannedContent | null;
    problems: TextStr[];
}>;
