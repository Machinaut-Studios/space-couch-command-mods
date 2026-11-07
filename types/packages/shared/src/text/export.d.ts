import type { PluralForms } from "./types";
export type ExportNode = {
    [name: string]: string | PluralForms | ExportNode;
};
export interface EnglishExport {
    en: ExportNode;
    hashes: Record<string, string>;
}
export declare function exportEnglish(tree?: object): EnglishExport;
