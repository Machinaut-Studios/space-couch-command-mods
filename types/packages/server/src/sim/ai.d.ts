import { type GameState, type Contact } from "@scc/shared";
export interface AiHooks {
    /** Refused quarter (design §9.2) → they fight to the death, never fleeing. */
    noFlee?: Set<string>;
    /** Dev/test-only: override every class's fleeHullFraction (deterministic FLEE
     * tests — coarse phaser-only combat can't finesse a hull to a narrow flee
     * window, so suites widen it here rather than mutating shipped balance). */
    fleeFractionOverride?: number;
    /** The HUNTER elite's contact id — overrides its class profile ("" = none). */
    hunterId?: string;
    /** Torpedo stores (sniper "out of fish → close in", finisher-band checks). */
    stores?: Map<string, EnemyTorpedoState>;
    /** FLEE spool hit 100 — the room warps the contact out (departContact). */
    escape?: (c: Contact) => void;
    /** A live escape spool froze (JUMP_DRIVE knocked offline) — log flavor. */
    spoolHalted?: (c: Contact) => void;
}
export declare function updateAI(state: GameState, dt: number, cooldowns: Map<string, number>, fire: (attacker: Contact) => void, hooks?: AiHooks): void;
export interface EnemyTorpedoState {
    stock: number;
    cooldown: number;
    /** Noisemaker decoys (lazily seeded from enemyClasses.noisemakers). */
    nmStock?: number;
    nmCooldown?: number;
    /** One-shot flag: the escape spool froze (drive knocked offline mid-spool). */
    spoolHalted?: boolean;
    /** Missile rack (artillery — lazily seeded from enemyClasses.missiles). */
    msStock?: number;
    msCooldown?: number;
    msVolleyLeft?: number;
    msSpacing?: number;
    /** Rail magazine (artillery — lazily seeded from enemyClasses.rails). */
    railStock?: number;
    railCooldown?: number;
}
export declare function updateEnemyTorpedoes(state: GameState, dt: number, stores: Map<string, EnemyTorpedoState>, launch: (attacker: Contact, bearingDeg: number, activationDelay: number) => void, opts?: {
    decoy?: (attacker: Contact, bearingDeg: number) => void;
    hunterId?: string;
    /** Enemy MISSILE away (artillery volleys — the dart locks the SHIP; the
     * room spawns it with lockId SHIP_SOURCE_ID so ECM/flares/PD all apply).
     * volleyStart flags the first dart of a volley (one log beat per volley). */
    missile?: (attacker: Contact, bearingDeg: number, volleyStart: boolean) => void;
    /** Enemy RAIL slug away — a straight bow shot, no counter but dodging. */
    rail?: (attacker: Contact, bearingDeg: number) => void;
}): void;
