export type CreatureFsm = "DORMANT" | "PROWL" | "INVESTIGATE" | "STALK" | "HUNT";
export interface CreatureMap {
    tiles: string;
    cols: number;
    rows: number;
}
/** What the creature perceives of the probe each tick. */
export interface CreatureSense {
    x: number;
    y: number;
    headingRad: number;
    noise: number;
}
export interface Creature {
    x: number;
    y: number;
    fsm: CreatureFsm;
    /** Speed class (playtest wave): fast 1.0 / medium 0.5 / slow 0.25 — every gait scales. */
    speedMul: number;
    /** The phantom (playtest wave): all lunge, no bite — it hunts, brushes the
     * hull, and breaks off. The fear is the weapon (herds you into hazards). */
    phantom: boolean;
    aggro: number;
    aggroMul: number;
    /** Current movement goal (cell index) + its cached BFS depth field. */
    targetIdx: number;
    field: Int32Array | null;
    lastHeard: {
        x: number;
        y: number;
    } | null;
    timer: number;
    sinceContact: number;
    quietFor: number;
    wasVisible: boolean;
}
/** Edge-triggered outputs for BridgeRoom to turn into fx. */
export interface CreatureEvents {
    killed: boolean;
    wokeUp: boolean;
    glimpse: boolean;
    proximityTier: number;
}
export declare function spawnCreature(den: {
    c: number;
    r: number;
}, aggroMul: number, dormant: boolean, speedMul?: number, phantom?: boolean): Creature;
/** Straight-segment line of sight (opaque cells block; 0.25-tile march). */
export declare function creatureLos(map: CreatureMap, ax: number, ay: number, bx: number, by: number): boolean;
/** The manual radar ping: LOUD — it retargets straight at the probe and pays aggro. */
export declare function creatureHeardPing(cre: Creature, probe: CreatureSense, map: CreatureMap): void;
/**
 * One 20 Hz FSM tick. Mutates `cre`; returns edge/level events for fx.
 * `rng` is the room's probeRng (deterministic under test seeds).
 */
export declare function creatureTick(cre: Creature, probe: CreatureSense, dt: number, map: CreatureMap, rng: () => number): CreatureEvents;
