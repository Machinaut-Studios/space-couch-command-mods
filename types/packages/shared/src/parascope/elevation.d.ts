/** FNV-1a 32-bit hash of a string (deterministic across platforms). */
export declare function hashId(id: string): number;
/** hashId mapped to [0, 1]. */
export declare function hash01(id: string): number;
export declare const ELEV_MIN = -160;
export declare const ELEV_MAX = 160;
export interface ElevationBand {
    lo: number;
    hi: number;
}
/** Drawing/elevation category for a contact `kind` — accepts ContactType
 * values ("ENEMY"…), enemy classIds ("raptor", "swarm"…), anomaly visual ids
 * ("mega_station", "black_hole"…) AND anomaly def ids ("verdant_world",
 * "collapsed_star"… — what the consumers actually pass for ANOMALY contacts),
 * case-insensitively. */
export type BodyCategory = "planet" | "giant" | "comet" | "station" | "megaring" | "starcage" | "machine" | "whale" | "fighter" | "swarm" | "jellyfish" | "manta" | "crystal" | "coral" | "cloud" | "plasma" | "wormhole" | "blackhole" | "pulsar" | "friendly" | "derelict" | "asteroid" | "mine" | "anomaly" | "unknown";
export declare function categoryOf(kind: string): BodyCategory;
/** The elevation band an entity of this kind is hashed into. */
export declare function elevationBand(kind: string, isProjectile?: boolean): ElevationBand;
/** Stable synthesized elevation for an entity: hash(id) placed in the kind's
 * band. Always within [ELEV_MIN, ELEV_MAX]; positive = above the horizon. */
export declare function elevationFor(id: string, kind: string, isProjectile?: boolean): number;
