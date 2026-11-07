import { MOD_KEY_PREFIX, type PackReport } from "./pack";
import { type TextStr } from "./ref";
import { type PluralForms } from "./types";
export { MOD_KEY_PREFIX };
/** Language tag (lower-cased, `-`) -> Text Key -> text. English is `en`. */
export type ModTextDoc = Record<string, Record<string, string | PluralForms>>;
export type ModTexts = Map<string, string | PluralForms>;
/** Most keys one Room Content document carries (a Mod's text is small; this keeps a hostile host from sending millions). */
export declare const MAX_MOD_TEXT_KEYS = 20000;
/** `Pt_BR` -> `pt-br`: how a language file is named and looked up. */
export declare const normalizeLang: (tag: string) => string;
/** The prefix every key of the Mod `modId` starts with. */
export declare const modKeyPrefix: (modId: string) => string;
/** Is this key one a client may hold as a Mod's? (Shape only: whose it is, the host decided.) */
export declare const isModKey: (key: string) => boolean;
/**
 * The Mod's English. Kept: plain text with `{name}` slots and nothing else; a plural entry is `one` + `other`, with the same slots
 * in each. Dropped, with a line each: markup, a stray brace, a form that is too long, a plural with other categories or forms that
 * disagree on their slots. (The game's own catalog is held to the same rules by its tests.)
 */
export declare function validateModEnglish(texts: ReadonlyMap<string, string | PluralForms>): {
    usable: ModTexts;
    problems: TextStr[];
};
/**
 * A catalog tree (the shape validatePack and the resolver walk) holding the game's catalog plus the Mod English in `english`
 * (`withGame` false: the Mod English alone). The Mod keys are single tree segments with dots in them, so the flattened key is
 * the key as written; the first character of each is checked, so no segment can be a prototype name.
 */
export declare function modCatalog(english: ReadonlyMap<string, string | PluralForms>, withGame?: boolean): object;
/**
 * A language file other than English, checked against the Mod's English like a Language Pack is checked against the game:
 * unknown keys are dropped, an entry that adds a placeholder or carries markup is dropped, the rest is kept with warnings.
 */
export declare function validateModTranslation(language: string, texts: ReadonlyMap<string, string | PluralForms>, english: ReadonlyMap<string, string | PluralForms>): {
    report: PackReport;
    problems: TextStr[];
};
/** A Mod's texts as the wire document carries them: keys sorted, so the same text is the same JSON (and hash). */
export declare function modTextToRecord(texts: ReadonlyMap<string, string | PluralForms>): Record<string, string | PluralForms>;
/**
 * Check a Room Content document's `text` field (it came from the host). The same rules the host ran: the English first, then
 * every other language against it. Returns only what passes; a document with nothing usable returns an empty object.
 */
export declare function parseModTextDoc(json: unknown): ModTextDoc;
/** The language file that serves `language` (a BCP 47 tag): the exact tag, else its primary subtag, else none. */
export declare function pickModLanguage<T>(byLang: ReadonlyMap<string, T>, language: string): T | undefined;
