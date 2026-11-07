export interface HitResult {
    shield: number;
    health: number;
    shieldAbsorbed: number;
    healthDamage: number;
}
export declare function resolveHit(shield: number, health: number, damage: number): HitResult;
export declare function hitChance(range: number, opts: {
    maxRange: number;
    baseHitChance: number;
    minRangeFactor: number;
    evasive: boolean;
    evasionMultiplier: number;
}): number;
export declare function chargeIncrement(dt: number, opts: {
    chargeTimeSec: number;
    powerRatio: number;
    heat: number;
    heatMax: number;
}): number;
