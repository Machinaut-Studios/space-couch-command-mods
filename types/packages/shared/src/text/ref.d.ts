import type { Catalog, TextKey, TextKeyOf, RefArgsOf, WireParamIn } from "./keys";
/** Text a player typed (crew and ship names) or legacy English: never translated, never pseudoized. */
export interface RawText {
    readonly t: string;
}
export interface TextRef {
    readonly k: string;
    readonly p?: {
        readonly [name: string]: WireParam;
    };
}
/** A decoded parameter value: a number, raw text, or a nested catalog ref. */
export type WireParam = number | RawText | TextRef;
/** An encoded TextRef. Assignable to schema `string` fields; a plain string is not assignable to it. */
export type TextStr = string & {
    readonly __textStr: true;
};
export type { WireParamIn };
export type { TextKey, NoParamKey, KeysUnder, RefArgs } from "./keys";
export type ParsedText = {
    kind: "empty";
} | {
    kind: "ref";
    ref: TextRef;
} | {
    kind: "legacy";
    text: string;
};
export declare function raw(text: string): RawText;
/** `v == null || v === ""`. Empty stays "", so existing `x === ""` checks keep working. */
export declare function isEmptyText(v: string | null | undefined): boolean;
/**
 * Classify a schema field value. Only values starting with `{` are tried as JSON, and the result
 * must validate recursively; anything else is legacy text. Unknown top-level fields are ignored
 * (forward compatibility).
 */
export declare function parseText(v: string): ParsedText;
/** Quote an existing schema field as a param: a ref nests, anything else (legacy English, "") is raw. */
export declare function fieldParam(v: string): WireParam;
/** Encode a TextRef as its field value. Key order is stable: `k`, then `p` in insertion order. */
export declare function encodeRef(r: TextRef): TextStr;
/** For keys chosen from data at runtime (use ref() when the key is a literal). */
export declare function refDyn(key: TextKey, params?: Record<string, WireParamIn>): TextStr;
/** `ref("hail.corsairs.greet", { speaker: ref("name.speaker.vexMarrow"), ship: raw(name) })`. */
export type RefFn<T> = <K extends TextKeyOf<T>>(key: K, ...args: RefArgsOf<T, K>) => TextStr;
export declare const ref: RefFn<Catalog>;
/** A ref() typed over another catalog tree (type tests and the 5000-key fixture). */
export declare function refFor<T>(): RefFn<T>;
