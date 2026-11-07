export interface PdCandidate {
    id: string;
    x: number;
    y: number;
    /** True when this projectile threatens the ship (enemy-owned, or an own
     * ACTIVE round locked back onto the ship — e.g. a lured missile). PD only
     * engages hostiles, and only MISSILE/ROCKET kinds reach the candidate list
     * (owner counter rule: torpedoes are noisemaker business, never gunnable —
     * the server adapter's PD_KINDS gate feeds this module). */
    hostile: boolean;
}
/** Nearest hostile missile/rocket inside the PD envelope, or null. */
export declare function pdPickTarget(x: number, y: number, candidates: PdCandidate[], pdRange?: 340): PdCandidate | null;
/** Seconds between shots for a turret, scaled by weapons power (and unlocks). */
export declare function gunCooldown(powerRatio: number, cooldownMul?: number): number;
/** Gun damage for one shot (manned shots hit harder). */
export declare function gunDamage(manned: boolean): number;
/** Chance a gun shot destroys an interceptable round (PD roll; manned aims
 * better). Counter rule (owner): PD engages MISSILES and ROCKETS only —
 * torpedoes are countered by noisemakers/decoys, never shot down. The legacy
 * name (and balance.guns.mannedTorpedoHitMul) stays for wire/test compat; the
 * roll now rides the missile/rocket interception paths. */
export declare function gunTorpedoHitChance(manned: boolean): number;
