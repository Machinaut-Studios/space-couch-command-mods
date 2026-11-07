import { type EntryMeta, type PluralForms, type TextCategory } from "./types";
export interface FlatEntry {
    /** Dotted Text Key. */
    key: string;
    /** English: a template string or plural forms. */
    value: string | PluralForms;
    plural: boolean;
    category?: TextCategory;
    source?: string;
    maxChars?: number;
    note?: string;
}
/** A plural object: only CLDR category keys, string values, `other` present. */
export declare function isPluralObject(v: unknown): v is PluralForms;
export interface CatalogVisitor {
    /** A group node (the root has path ""). */
    group?(path: string, meta: EntryMeta): void;
    entry(entry: FlatEntry): void;
}
/** Visit every group and leaf of a catalog tree, in authoring order. */
export declare function walkCatalog(tree: object, visitor: CatalogVisitor): void;
/** Dotted key -> entry with inherited metadata resolved. */
export declare function flattenCatalog(tree: object): Map<string, FlatEntry>;
