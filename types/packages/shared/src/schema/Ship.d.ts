import { Schema, MapSchema, ArraySchema } from "@colyseus/schema";
import { Vector } from "./Vector";
import { PowerState } from "./PowerState";
import { SystemState } from "./SystemState";
import { Weapon } from "./Weapon";
import { ShieldState } from "./ShieldState";
import { TorpedoTube } from "./TorpedoTube";
import { Turret } from "./Turret";
export declare class Ship extends Schema {
    hull: number;
    alert: string;
    pos: Vector;
    heading: number;
    throttle: number;
    evasive: boolean;
    velocity: Vector;
    power: PowerState;
    systems: MapSchema<SystemState, string>;
    /** SystemId (or "HULL") Engineering is actively repairing; "" = none. */
    repairTarget: string;
    weapons: ArraySchema<Weapon>;
    turrets: ArraySchema<Turret>;
    shields: ArraySchema<ShieldState>;
    /** Tactical's selected target contact id; "" = none. */
    targetId: string;
    /** Tactical's selected sub-target (a SubsystemType on the target); "" = hull. */
    subTargetId: string;
    /** Science's active scan target contact id; "" = none. */
    scanTargetId: string;
    tubes: ArraySchema<TorpedoTube>;
    torpedoStock: number;
    noisemakerStock: number;
    /** Homing attractiveness — DYNAMIC (design §2.2): throttle/overclock/evasive
     * make the ship louder; running dark drops it to the base. */
    signature: number;
    /** Comms' pushed firing solution (plot tab, off by default); bearing -1 = none. */
    solutionBearing: number;
    solutionRange: number;
    /** Helm's ORDERED heading (radians). The bow slews toward it at the class's
     * turnRateDeg — big hulls answer the helm slowly (inertia, design update).
     * APPENDED (wire-index convention: never insert mid-class). */
    orderedHeading: number;
    missileStock: number;
    rocketStock: number;
    railStock: number;
    railCooldown: number;
    flareStock: number;
    /** Helm ECM: while on, draws power and degrades hostile homing accuracy
     * inside its radius (balance.countermeasures). */
    ecmActive: boolean;
    cupolaYaw: number;
    cupolaPitch: number;
    cupolaHeat: number;
    cupolaGatlingAmmo: number;
    cupolaRocketAmmo: number;
    parascopeYaw: number;
    parascopePitch: number;
    /** Life support is a BREAKER now, not a power slider: ON draws its fixed
     * feed and regenerates the radiation shielding; OFF frees the power and the
     * crew slowly cooks. (Owner ruling: off = slow drain everywhere, radiation
     * exposure = fast drain, shielding 0 = the run ends.) */
    lifeSupportOn: boolean;
    /** Radiation shielding 0..100 — the crew's real health bar vs the fence. */
    radiationShield: number;
}
