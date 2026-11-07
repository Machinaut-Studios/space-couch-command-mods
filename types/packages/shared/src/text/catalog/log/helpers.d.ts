/** A terse `ui` line: maxChars = ceil(English length x 1.3). */
export declare function ui<const T extends string>(s: T, note?: string): import("../..").TextEntry<T>;
/** A narrative `story` line. */
export declare function story<const T extends string>(s: T, note?: string): import("../..").TextEntry<T>;
/** A singular/plural `ui` pair (code is exactly `n === 1 ? singular : plural`); `{count}` is the selector. */
export declare function uiPlural<const O extends string, const P extends string>(one: O, other: P, note?: string): import("../..").TextEntry<{
    readonly one: O;
    readonly other: P;
}>;
/** A singular/plural `story` pair. */
export declare function storyPlural<const O extends string, const P extends string>(one: O, other: P, note?: string): import("../..").TextEntry<{
    readonly one: O;
    readonly other: P;
}>;
