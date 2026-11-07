import { EncounterType } from "./enums";
/**
 * How many sectors the demo plays. The run ends on the jump OUT of this sector,
 * so the crew sees all four and `run.sector` never exceeds it.
 */
export declare const DEMO_SECTORS = 4;
/** Where the wishlist call-to-action points. */
export declare const STEAM_STORE_URL = "https://store.steampowered.com/app/5116650/";
/**
 * The curated run, by sector. Every demo crew sees exactly this, in this order.
 *
 *  1 SURVEY   — the peaceful opener the game already hard-codes. Flying, scanning,
 *               the power budget and the TV channel router, with nothing shooting.
 *  2 PATROL   — the first fight, and the right one: hostiles approach from range,
 *               so the crew gets runway to go red, move power and pick a target.
 *               AMBUSH opens hot and teaches nothing.
 *  3 DERELICT — the probe guarantee. A derelict always carries a `hatch` POI and a
 *               hatch is probe-able, so the Duskers-style interior is ALWAYS
 *               reachable here, and always affordable (ships start with 2 probes).
 *  4 HUNTER   — the climax, and it scores itself: the viewport's music director
 *               already routes HUNTER to the dedicated boss track.
 *
 * Chosen so that every sector-gated system fences ITSELF out with no extra code:
 * swarms need sector 3 with enemies (3 has none) or an eligible type (4 is not),
 * artillery is disabled on the HUNTER branch, and bosses/THE VOID/THE UNMAKING all
 * gate above sector 4.
 */
export declare const DEMO_SEQUENCE: readonly EncounterType[];
/**
 * The curated encounter for a sector, or `undefined` when the sector is outside
 * the demo. Undefined is deliberate and load-bearing: an out-of-range sector must
 * never resolve to a playable encounter, so a caller that somehow reaches sector 5
 * falls through to nothing rather than quietly getting more game.
 */
export declare function demoTypeFor(sector: number): EncounterType | undefined;
