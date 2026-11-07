import type { CATALOG } from "./catalog";
import type { TextRef, RawText, TextStr } from "./ref";
import type { PluralCategory, TextEntry } from "./types";
/**
 * A client-side parameter. A plain string is ALREADY-FINAL text: never pseudoized. The `__textStr?: never`
 * member makes an encoded TextStr (JSON) a compile error here: render it first, or pass it as a TextRef.
 */
export type TextParam = (string & {
    readonly __textStr?: never;
}) | number | TextRef | RawText;
/** A wire parameter (ref()): player/legacy text must be wrapped in raw(); catalog text nested via ref(). */
export type WireParamIn = number | TextStr | RawText | TextRef;
type PluralLike = {
    readonly other: string;
};
/** The English value of a leaf (string or plural object), or never when `V` is a group. */
type LeafValue<V> = V extends string ? V : V extends TextEntry<infer X> ? X : V extends PluralLike ? V : never;
type SegKeys<T> = Extract<keyof T, string>;
type PathsOf<T, P extends string = ""> = {
    [K in SegKeys<T>]: [LeafValue<T[K]>] extends [never] ? PathsOf<T[K], `${P}${K}.`> : `${P}${K}`;
}[SegKeys<T>];
type ValueAt<T, K extends string> = K extends `${infer H}.${infer R}` ? H extends keyof T ? ValueAt<T[H], R> : never : K extends keyof T ? LeafValue<T[K]> : never;
/** `{name}` placeholders of a template string literal. */
type Placeholders<S extends string> = S extends `${string}{${infer N}}${infer Rest}` ? N | Placeholders<Rest> : never;
type NamesOfValue<E> = E extends string ? Placeholders<E> : E extends PluralLike ? Placeholders<E[PluralCategory & keyof E] & string> | "count" : never;
type IsPlural<E> = E extends string ? false : true;
/** `{ placeholder: V }`; `count` is always a number for plural entries. */
type ParamsFromValue<E, V> = {
    [P in NamesOfValue<E>]: P extends "count" ? (IsPlural<E> extends true ? number : V) : V;
};
type ArgsFromValue<E, V> = [NamesOfValue<E>] extends [never] ? [] : [params: ParamsFromValue<E, V>];
export type FlatCatalogOf<T> = {
    [K in PathsOf<T>]: ValueAt<T, K>;
};
export type TextKeyOf<T> = PathsOf<T>;
export type ParamsOfIn<T, K extends TextKeyOf<T>> = ParamsFromValue<FlatCatalogOf<T>[K], TextParam>;
/** NON-distributive: `[]` when every key in `K` has no params, else `[params]`. */
export type TextArgsOf<T, K extends TextKeyOf<T>> = ArgsFromValue<FlatCatalogOf<T>[K], TextParam>;
export type RefArgsOf<T, K extends TextKeyOf<T>> = ArgsFromValue<FlatCatalogOf<T>[K], WireParamIn>;
export type NoParamKeyOf<T> = {
    [K in TextKeyOf<T>]: [NamesOfValue<FlatCatalogOf<T>[K]>] extends [never] ? K : never;
}[TextKeyOf<T>];
export type KeysUnderOf<T, Prefix extends string> = Extract<TextKeyOf<T>, `${Prefix}${string}`>;
export type Catalog = typeof CATALOG;
export type FlatCatalog = FlatCatalogOf<Catalog>;
/** Every dotted leaf path in CATALOG. */
export type TextKey = TextKeyOf<Catalog>;
export type EntryValueOf<K extends TextKey> = FlatCatalog[K];
/** `{ [placeholder]: TextParam }` (+ `count: number` for plurals). */
export type ParamsOf<K extends TextKey> = ParamsOfIn<Catalog, K>;
export type TextArgs<K extends TextKey> = TextArgsOf<Catalog, K>;
export type RefArgs<K extends TextKey> = RefArgsOf<Catalog, K>;
/** Keys whose entry has no params: a data table typed `NoParamKey` can go to `text()` bare. */
export type NoParamKey = NoParamKeyOf<Catalog>;
/** `KeysUnder<"hail.corsairs.">` for data tables that name a family of keys. */
export type KeysUnder<Prefix extends string> = KeysUnderOf<Catalog, Prefix>;
/** Structural shape of an authored catalog tree (loose on purpose; the validator checks it). */
export type CatalogTree = object;
export {};
