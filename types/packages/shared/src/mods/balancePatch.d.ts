/** A nested partial of the balance table. Leaves are numbers, booleans and arrays of numbers. */
export interface BalancePatch {
    [key: string]: number | boolean | readonly number[] | BalancePatch;
}
/** Why a path was left out: the game has no such number (or it is another kind of value), or the value is outside what the game accepts. */
export interface BalanceRefusal {
    path: string;
    kind: "unknown" | "range";
}
/** One row of the bounds table. `path` may use `*` for exactly one segment. */
interface BoundRule {
    path: string;
    /** Refused whatever the value: not a number a Mod may change. */
    locked?: true;
    min?: number;
    max?: number;
    /** A count or a grid size: it sizes a loop or an array, so a fraction (22.5 systems, 4.5 rows) is refused as out of range. */
    int?: true;
}
/**
 * Where a number must stay for the game to run at all (docs/MODS-PLAN.md D2). A bad number can hang the server rather
 * than just play badly, so every number that drives a loop, a capacity or a divisor is listed here. The audit looked
 * for loops and capacities with a bound read from the table (`while (x.length > balance...)`, spawn counts, grid and
 * generator sizes, ray steps) and for the table's numbers used as divisors. It is not a proof that no other number can
 * misplay: it is the set that can freeze or exhaust a process. The rules after this table apply to everything else.
 *
 * - A hang: `log.maxEntries` below 0 and `sigint.maxLive` of 0 make a trim loop that never ends; `vision.rayStepDeg` of
 *   0 asks for infinitely many rays.
 * - A flood: a spawn count of a million fills the room's state and stalls the tick. The same goes for the sentinel showdown
 *   wave, which is a count like the swarm's.
 * - A fraction where the game needs a whole number: a count or a grid size (`int`) that is not an integer throws when it sizes an
 *   array (22.5 systems, 4.5 outage rows), so it is refused as out of range.
 * - A divide by zero: the rest. It makes Infinity or NaN, and those spread into positions and turn loops.
 *
 * First matching row wins.
 */
export declare const BALANCE_BOUNDS: readonly BoundRule[];
/**
 * What a patch may set `path` to, given the stock number there. Beyond the table, two rules for every number:
 * a number that is positive in stock cannot go negative (a negative duration, range or chance runs the sim
 * backwards), and nothing may be more than 1000 times the stock value (at least 1000): products of such numbers still
 * stay finite, and turn and spawn loops stay short. Null when the number is locked.
 */
export declare function boundsFor(path: string, stock: number): {
    min: number;
    max: number;
    int: boolean;
} | null;
/**
 * Keep the entries of `input` that name a number the game has, with the same kind of value: a finite number (within
 * its bounds), a boolean, or an array of numbers of the length the game has. Strings and objects are never accepted:
 * a string in the table names an anomaly or a text key, and a wrong one stops the game rather than tuning it. New keys
 * are refused (new content comes in as content, not as a number to tune). Never throws, and never reads a key it has not checked against `stock`.
 * `prefix` is where `stock` sits in the table, so a Mod's enemy or hull block is judged by the same rows as the stock ones.
 */
export declare function validateBalancePatch(input: unknown, stock?: unknown, prefix?: string): {
    patch: BalancePatch;
    refused: BalanceRefusal[];
};
export interface BalanceClash {
    /** The leaf, dotted. */
    path: string;
    /** The Mod whose value was replaced. */
    loser: string;
    /** The Mod whose value stands. */
    winner: string;
}
/**
 * Combine the Mods' patches in Load Order: the last Mod to set a number wins it. A number two different Mods set is
 * reported as a clash, by leaf path (an array is one leaf). Only the winning leaves are in the result.
 */
export declare function mergeBalancePatches(mods: readonly {
    id: string;
    patch: BalancePatch;
}[]): {
    patch: BalancePatch;
    clashes: BalanceClash[];
};
/** Is there anything in the patch? */
export declare function balancePatchIsEmpty(patch: BalancePatch): boolean;
/** The stock table (read-only by convention: it is what `restoreBalance` copies back). */
export declare function stockBalance(): Readonly<Record<string, unknown>>;
/** Put every number a patch changed back to its stock value, in place. A no-op when nothing is patched. */
export declare function restoreBalance(): void;
/**
 * Make the live table stock plus `patch`: restore first, so a new patch never stacks on an old one, then set each leaf in
 * place. A leaf the live table does not have, or has as another kind of value, is skipped (the caller validated, and this
 * is the second lock). Nothing replaces a sub-object, and arrays keep their identity.
 */
export declare function applyBalancePatch(patch: BalancePatch): void;
export {};
