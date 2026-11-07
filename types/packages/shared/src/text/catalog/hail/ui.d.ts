/** A terse `ui` entry whose maxChars is the plan's default slack: ceil(English length x 1.3).
 * The literal type of `s` survives (so placeholders are visible to the type-level key walker). */
export declare function u<const T extends string>(s: T, note?: string): import("../..").TextEntry<T>;
