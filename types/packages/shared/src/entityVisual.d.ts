/** The ship-like visual archetypes with a dedicated top-down silhouette. */
export type ShipVisualId = "raptor" | "corsair" | "reaver" | "envoy" | "basilisk" | "chimera" | "swarm" | "collector" | "leviathan" | "derelict" | "hauler";
/** A closed unit polygon (nose +x). Consumers translate/rotate/scale it. */
export type Silhouette = readonly (readonly [number, number])[];
/** The silhouette table — the single source of shape for every flat view. */
export declare const SHIP_SILHOUETTES: Record<ShipVisualId, Silhouette>;
/** The visuals an enemy class may draw: a Mod's enemy picks one of these (the hulls with a silhouette of their own). */
export declare const ENEMY_VISUAL_IDS: readonly ShipVisualId[];
/** Replace the Mod classes' visuals (an empty map clears them). */
export declare function setModClassVisuals(next: ReadonlyMap<string, ShipVisualId>): void;
/**
 * The ONE class -> visual lookup every class-keyed drawing asks (the silhouettes, the parascope hulls, the scan view's
 * boss drawings). A class a Mod added draws the visual it chose; any other id comes back normalised, as it always did,
 * so the callers' own tests ("collector", "swarm") and fallbacks keep working untouched.
 */
export declare function classVisual(classId: string | undefined): string;
/** Minimal contact shape the resolver needs (works with the schema Contact and
 * with the parascope's flattened contact alike). */
export interface VisualContactLike {
    type: string;
    classId?: string;
}
/**
 * The ONE resolver: which ship-like silhouette (if any) a contact draws.
 * Returns null for anomalies / mines / asteroids — those keep their own radial
 * or per-`visual` drawings (they are not hulls and don't orient by heading).
 */
export declare function shipVisualId(c: VisualContactLike): ShipVisualId | null;
/** Ship-like silhouettes all orient by the contact's heading (nose = heading).
 * (Kept as a helper so callers read as intent, not a magic `!== null` check.) */
export declare function isDirectional(id: ShipVisualId | null): id is ShipVisualId;
/** The silhouette polygon for an id (nose +x, unit space). */
export declare function silhouette(id: ShipVisualId): Silhouette;
/** Flat [x0,y0,x1,y1,…] screen points — feed straight to Pixi `g.poly(pts)` or
 * a Canvas2D path. `r` is the on-screen radius; callers clamp a legibility min. */
export declare function silhouettePoints(id: ShipVisualId, cx: number, cy: number, r: number, headingRad: number): number[];
/** Anything with moveTo/lineTo (a Canvas2D context or a Pixi Graphics). */
export interface PathSink {
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
}
/** Trace the silhouette onto a path sink (nose = heading, sized by r). The
 * caller owns beginPath/closePath + stroke/fill. */
export declare function traceSilhouette(sink: PathSink, id: ShipVisualId, cx: number, cy: number, r: number, headingRad: number): void;
