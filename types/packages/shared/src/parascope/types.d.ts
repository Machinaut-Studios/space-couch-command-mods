/** Structural CanvasGradient (has only addColorStop — all we ever call). */
export interface CanvasGradientLike {
    addColorStop(offset: number, color: string): void;
}
/** Structural subset of CanvasRenderingContext2D (the shared package compiles
 * without the DOM lib — see tsconfig "lib": ["ES2021"]). Both a real on-screen
 * 2D context and an OffscreenCanvas 2D context satisfy this shape. */
export interface Canvas2D {
    save(): void;
    restore(): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
    rotate(rad: number): void;
    scale(x: number, y: number): void;
    clip(): void;
    strokeStyle: string | object;
    fillStyle: string | object;
    lineWidth: number;
    globalAlpha: number;
    /** "source-over" | "lighter" | … (string on the real type's union). */
    globalCompositeOperation: string;
    shadowColor: string;
    shadowBlur: number;
    font: string;
    textAlign: string;
    textBaseline: string;
    setLineDash(segments: number[]): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradientLike;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradientLike;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    arc(x: number, y: number, r: number, a0: number, a1: number, ccw?: boolean): void;
    ellipse(x: number, y: number, rx: number, ry: number, rot: number, a0: number, a1: number, ccw?: boolean): void;
    stroke(): void;
    fill(): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    fillText(text: string, x: number, y: number): void;
    drawImage(image: object, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}
/** Renderer color set. Cupola passes a red-accented palette, Parascope passes
 * helm-cyan; the drawing grammar itself never hardcodes a hue. All values are
 * "#rrggbb" hex strings. */
export interface ParascopePalette {
    bg: string;
    ink: string;
    dim: string;
    accent: string;
    warn: string;
    danger: string;
    ok: string;
}
export type ParascopeMode = "parascope" | "cupola";
export interface ParascopeViewport {
    /** CSS-pixel size of the view. The canvas backing store is w*dpr × h*dpr;
     * renderParascope sets the transform to dpr and works in CSS pixels. */
    w: number;
    h: number;
    dpr: number;
    /** Animation clock in ms (monotonic; e.g. performance.now()). All motion —
     * tunnel scroll, sweep lines, tentacle wobble — derives from this, so the
     * renderer stays stateless and deterministic. */
    nowMs: number;
    /** Free-look yaw offset from the ship's bow, degrees (turret traverse). */
    viewYawDeg: number;
    /** Free-look pitch, degrees; shifts the horizon (clamped to ±25°). */
    viewPitchDeg: number;
    mode: ParascopeMode;
    palette: ParascopePalette;
}
export interface ParascopeShip {
    x: number;
    y: number;
    /** Compass bearing degrees: 0 = north (-y), clockwise — same convention as
     * sim/projectiles.ts bearingToHeading. */
    headingDeg: number;
    throttle01: number;
    speed: number;
}
export interface ParascopeContact {
    id: string;
    /** ContactType ("ENEMY", "ASTEROID", …), an enemy classId ("raptor",
     * "swarm", "leviathan", …) or an anomaly def id ("verdant_world",
     * "collapsed_star", … — resolved to its science-scan silhouette family via
     * the ANOMALIES table). Case-insensitive. */
    kind: string;
    designator: string;
    x: number;
    y: number;
    radius: number;
    hull01?: number;
    hostile?: boolean;
    scanned?: boolean;
}
export interface ParascopeProjectile {
    id: string;
    /** ProjectileKind string: TORPEDO | MISSILE | ROCKET | RAIL | NOISEMAKER | FLARE. */
    kind: string;
    x: number;
    y: number;
    headingDeg: number;
    hostile: boolean;
}
/** Transient beam/tracer fx (weapon fire). Endpoints in world coordinates; an
 * endpoint within ~40u of the ship is drawn from the own-gun muzzle anchor at
 * the bottom-center of the view (the camera cannot project itself). */
export interface ParascopeBeam {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    color?: "accent" | "danger";
    ageMs: number;
}
/** Cupola-only soft-lock reticle; parascope frames pass no reticle. */
export interface ParascopeReticle {
    screenX01: number;
    /** 0..1 down the view, anchored to the BORESIGHT: the renderer maps 0.5 to
     * the projection center (h·BORESIGHT_Y01 — where the aim ray actually
     * lands at every pitch), never to raw h·0.5. */
    screenY01: number;
    lockedId?: string;
}
export interface ParascopeFrame {
    view: ParascopeViewport;
    ship: ParascopeShip;
    contacts: ParascopeContact[];
    projectiles: ParascopeProjectile[];
    beams: ParascopeBeam[];
    reticle?: ParascopeReticle;
    /** Optional in-canvas HUD trim: absent = both corner scopes at full size
     * (the desk/TV look). Cramped consumers veto or shrink them — e.g. the
     * phone cupola drops the nav minimap (nav is Helm's job; the corner
     * belongs to the FIRE thumb) and scales the threat scope down. */
    hud?: {
        minimap?: boolean;
        threatScope?: boolean;
        scale?: number;
    };
    /** Seed for the per-system deep-space sky panorama (skybox.ts) — consumers
     * pass the CURRENT star system id, so every system hangs its own sky and a
     * jump changes it. Absent/"" = legacy starfield only. */
    skySeed?: string;
}
/** One projected, on-screen entity — returned so the CONSUMER implements
 * soft-lock picking (nearest to reticle) without duplicating projection math. */
export interface ParascopeHit {
    id: string;
    screenX: number;
    screenY: number;
    screenR: number;
    kind: string;
    isProjectile: boolean;
}
export interface PickOptions {
    projectilesOnly?: boolean;
    contactsOnly?: boolean;
}
