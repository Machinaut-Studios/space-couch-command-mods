import type { Catalog, TextArgsOf, TextKeyOf, TextParam } from "./keys";
import { type ModTextDoc } from "./modText";
import type { PluralForms } from "./types";
export interface ResolverOptions {
    /** BCP 47 tag for plural rules; default "en". */
    pluralLocale?: string;
}
/** A Language Pack as the resolver holds it: dotted Text Key -> replacement text. Keys the pack leaves out
 * (or that the catalog does not have) show in English. */
export interface ResolverPack {
    id: string;
    /** BCP 47 tag; becomes the plural locale. */
    language: string;
    texts: ReadonlyMap<string, string | PluralForms>;
}
export interface Resolver<T> {
    /** Resolve a typed key. A mistyped key or a missing/extra param is a compile error. */
    text<K extends TextKeyOf<T>>(key: K, ...args: TextArgsOf<T, K>): string;
    /** Untyped escape hatch for keys that arrive over the wire. */
    textDyn(key: string, params?: Record<string, TextParam>): string;
    /** Does the shipped catalog or the room's Mod text have this key? */
    hasText(key: string): boolean;
    /** Does the shipped catalog (and only it) have this key? What a Mod's content is checked against. */
    hasCatalogText(key: string): boolean;
    /** Render a schema field: empty -> "", ref -> resolved, legacy English -> verbatim. */
    renderText(fieldValue: string): string;
    setPseudo(on: boolean): void;
    isPseudo(): boolean;
    setPluralLocale(locale: string): void;
    /** Install (or clear, with null) a Language Pack. Lookup order is pack form -> English. Also sets the plural
     * locale to the pack's language (English again -> the resolver's initial locale, "en" by default). */
    setPack(pack: ResolverPack | null): void;
    activePack(): {
        id: string;
        language: string;
    } | null;
    /**
     * Install (or clear, with an empty document) the text of the room's Mods: language tag (normalised) -> key -> text. A Mod key
     * is looked up in this order: the active Language Pack, the Mod's file for the pack's language (the exact tag, else its
     * primary subtag), the Mod's English. The pack's own entries are kept as they came, so a pack that arrives before the Mod
     * text does not lose the Mod keys it covers; the overlay is rebuilt and the listeners told.
     */
    setModText(doc: ModTextDoc): void;
    /** Subscribe to text changes (setPack, setPseudo, setModText). Returns the unsubscribe function. */
    onTextChange(fn: () => void): () => void;
}
export declare function createResolver<T extends object>(tree: T, opts?: ResolverOptions): Resolver<T>;
export declare const text: Resolver<Catalog>["text"];
export declare const textDyn: (key: string, params?: Record<string, TextParam>) => string;
export declare const hasText: (key: string) => boolean;
export declare const hasCatalogText: (key: string) => boolean;
export declare const renderText: (fieldValue: string) => string;
export declare const setPseudo: (on: boolean) => void;
export declare const isPseudo: () => boolean;
export declare const setPluralLocale: (locale: string) => void;
export declare const setPack: (pack: ResolverPack | null) => void;
export declare const setModText: (doc: ModTextDoc) => void;
export declare const activePack: () => {
    id: string;
    language: string;
} | null;
export declare const onTextChange: (fn: () => void) => () => void;
/** Like renderText, but always the English text: ignores the Pseudo-locale and any language pack. */
export declare const renderEnglish: (fieldValue: string) => string;
/**
 * Like text(), but always the shipped English: no Language Pack and no Pseudo-locale. For the screen that asks the host to approve
 * a Code Mod (docs/adr/0002): a Language Pack needs no approval and can be selected on its own, so it must not be able to reword the
 * warning, swap the buttons or drop the Mod's name from it.
 */
export declare const textEnglish: Resolver<Catalog>["text"];
