/** CLDR plural categories, in CLDR order (also the canonical order for hashing/export). */
export declare const PLURAL_CATEGORIES: readonly ["zero", "one", "two", "few", "many", "other"];
export type PluralCategory = (typeof PLURAL_CATEGORIES)[number];
/** A plural entry: keyed by CLDR category, `other` required. The selector is the `count` param. */
export type PluralForms = {
    readonly other: string;
} & {
    readonly [C in Exclude<PluralCategory, "other">]?: string;
};
/** `ui` = terse interface text (width-constrained, needs maxChars); `story` = narrative prose. */
export type TextCategory = "ui" | "story";
export interface EntryMeta {
    /** Translator note; becomes `_<entry>` in the export. Not inherited from groups. */
    note?: string;
    /** Hard length limit for translations (positive int). Inherited from the nearest group. */
    maxChars?: number;
    /** Inherited from the nearest group. */
    category?: TextCategory;
    /** Repo-relative path of the file the text appears in. Inherited from the nearest group. */
    source?: string;
}
/** A group's meta are defaults for the entries below it; its `note` becomes `_comment`. */
export type GroupMeta = EntryMeta;
declare const ENTRY: unique symbol;
declare const GROUP_META: unique symbol;
export interface TextEntry<T extends string | PluralForms = string | PluralForms> {
    readonly [ENTRY]: {
        readonly value: T;
        readonly meta: EntryMeta;
    };
}
export interface TextGroup {
    readonly [GROUP_META]: GroupMeta;
}
/** A leaf with metadata: `e("HELM", { maxChars: 8 })`. */
export declare function e<const T extends string | PluralForms>(value: T, meta?: EntryMeta): TextEntry<T>;
/** A group with default metadata: `group({ category: "ui", source: "…" }, { … })`. */
export declare function group<const T extends object>(meta: GroupMeta, body: T): T & TextGroup;
export declare function entryOf(v: unknown): {
    value: string | PluralForms;
    meta: EntryMeta;
} | undefined;
export declare function groupMetaOf(v: unknown): GroupMeta | undefined;
export {};
