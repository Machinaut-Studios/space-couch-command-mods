import { Role } from "./enums";
import type { NoParamKey } from "./text/keys";
export type ShipClassId = "wren" | "cutter" | "corvette" | "frigate" | "cruiser" | "dreadnought";
export interface SeatDef {
    /** Stable seat id — stored in Player.seatId. */
    id: string;
    /** Display name for the lobby seat grid — a Text Key (catalog `ship.seat.<id>`); render with text(). */
    labelKey: NoParamKey;
    /** Duties this seat may operate; intents validate against these. */
    duties: Role[];
    /** Optional seats never block launch and are hidden on the "recommended crew" count. */
    optional?: boolean;
    /** HYBRID console id (design update): when set, GameScreen renders ONE merged
     * slimmed console instead of full-duty tabs. The slim variants trade depth for
     * fit — the server runs "auto-officer modules" for what they drop (see
     * balance.hybrid): "helm_tac" (merged map, no PD), "sci_comms" (auto-jammer,
     * no spectrum/log/debris), "eng_sci_comms" (also slim engineering: auto-vent,
     * auto-repair, no overclock, single shield bar), "solo" (the WREN's
     * single-hand seat: merged fire-control PLUS both auto-officer stacks —
     * auto-jammer and slim engineering). */
    console?: "helm_tac" | "sci_comms" | "eng_sci_comms" | "solo";
    /** Small lobby footnote under the seat (e.g. the Cannoneer kid note) — a Text Key. */
    noteKey?: NoParamKey;
}
export interface ShipClassDef {
    id: ShipClassId;
    /** Hull name shown in the lobby, e.g. "SPARROW" — a Text Key (catalog `ship.class.<id>.label`). */
    labelKey: NoParamKey;
    /** One-line couch pitch — a Text Key (catalog `ship.class.<id>.blurb`). */
    blurbKey: NoParamKey;
    /** Capitalised crew-count line under the hull name in the ship lobby — a Text Key (catalog `ship.class.<id>.subtitle`). */
    subtitleKey: NoParamKey;
    /** Flavour sentence under the hull's stats in the ship lobby — a Text Key (catalog `ship.class.<id>.tagline`). */
    taglineKey: NoParamKey;
    seats: SeatDef[];
    /** A hull a Mod added (docs/MODS-PLAN.md step 5): the stock hull whose seat layout it copied whole. Absent on stock
     * hulls. Code that picks behaviour by a stock hull id asks `layoutOf(classId)` rather than comparing the id. */
    layoutOf?: ShipClassId;
}
export declare const DEFAULT_SHIP_CLASS: ShipClassId;
export declare const SHIP_CLASSES: Record<ShipClassId, ShipClassDef>;
export declare const SHIP_CLASS_IDS: ShipClassId[];
/** Does the table hold this hull? An own-key test: a Mod hull may be called anything, `constructor` included. */
export declare function hasShipClass(classId: string): boolean;
/** Resolve a class def, falling back to the default for unknown/legacy ids. */
export declare function shipClass(classId: string): ShipClassDef;
/** The stock hull whose seat layout this hull uses: itself for a stock hull, the hull it copied for a Mod's. */
export declare function layoutOf(classId: string): ShipClassId;
/** The seat def a player holds on a class, or undefined. */
export declare function seatOnClass(classId: string, seatId: string): SeatDef | undefined;
/** Does this seat carry the duty? (The duty check behind every intent gate.) */
export declare function seatHasDuty(classId: string, seatId: string, duty: Role): boolean;
/** First seat on the class carrying `duty` — the legacy claimRole mapping. */
export declare function seatForDuty(classId: string, duty: Role): SeatDef | undefined;
/** Cannoneer (GUNNER) seat ids on a class, in stable A→D order (cannoneer wave).
 * The order the server delegates phasers in: the first connected cannoneer
 * takes the last phaser bank, the next takes the one before it, and so on —
 * Tactical keeps the front banks. */
export declare function cannoneerSeatIds(classId: string): string[];
/** Required (non-optional) crew count — the lobby's "recommended crew". */
export declare function coreCrew(classId: string): number;
/** A hull one player can fly alone: it has exactly one required seat (only the WREN). */
export declare function isSoloHull(classId: string): boolean;
/** The launch gate: the hull's REQUIRED seats that no CONNECTED player holds, in
 * class order. Optional seats (cannoneers, cupola) never count either way — a
 * crew made only of them still launches nothing, so they cannot satisfy it. A
 * holder who dropped (connected: false) leaves their seat missing until someone
 * takes it. Empty = the ship can launch. Shared by the server (startGame /
 * continueRun) and the lobby, so the button and the rule can't disagree. */
export declare function missingRequiredSeats(classId: string, holders: Iterable<{
    seatId: string;
    connected: boolean;
}>): SeatDef[];
/** How many DISTINCT required seats of `classId` the given seat ids cover (optional seats never count) —
 * what a save records as `requiredCrew`, so a cannoneer or cupola holder is not mistaken for a pilot. */
export declare function requiredSeatsHeld(classId: string, seatIds: Iterable<string>): number;
/** Required seats a connected crew must hold to RESUME a save flown with `requiredCrew` of them: the whole
 * hull requirement, except that a save resumes with the crew it was flown with (never below one, never above
 * the hull's requirement). A full-crew save therefore needs everyone; a save from a short-handed run — one made
 * before the launch gate, or after a required player dropped mid-run and the next checkpoint recorded the
 * smaller bridge — needs that many. Shared by the server's continueRun and the lobby's RESUME button. */
export declare function resumeSeatsNeeded(classId: string, requiredCrew: number): number;
