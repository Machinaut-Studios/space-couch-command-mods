import { type KeysUnder, type TextStr } from "./text/ref";
/** The NATO words as Text Keys (catalog `designator.nato.*`). ORDER is load-bearing: the RNG picks by index. */
export declare const NATO_ALPHABET: readonly KeysUnder<"designator.nato.">[];
export declare const DESIGNATOR_NUM_MIN = 1;
export declare const DESIGNATOR_NUM_MAX = 99;
/**
 * Produce a designator not already in `used` (mutates `used` to reserve it). Pass
 * the same set across all objects in a mission to keep them globally unique. `rng`
 * is injectable for tests. Falls back to a counter suffix only if the (large) pool
 * is somehow exhausted, so it can never return a duplicate.
 *
 * The result is a wire TextStr (`designator.callsign` with a nested NATO-word ref): uniqueness runs on the
 * encoded string, which is deterministic per (number, word).
 */
export declare function nextDesignator(used: Set<string>, rng?: () => number): TextStr;
