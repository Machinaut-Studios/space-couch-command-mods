import { type PluralForms } from "./types";
/** FNV-1a 32-bit over the UTF-8 bytes of `s`, as 8 hex digits. UTF-8 (not UTF-16 code units) so
 * a Language Pack tool in any language can reproduce the hash. */
export declare function fnv1a32(s: string): string;
/** FNV-1a 32 over the concatenation of `parts` (same result as fnv1a32(parts.join("")), without building it). */
export declare function fnv1a32Parts(parts: readonly string[]): string;
/** Plural entries hash the canonical JSON of their forms in CLDR order. */
export declare function hashEnglish(value: string | PluralForms): string;
