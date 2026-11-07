/**
 * CUPOLA GUNNER — the optional 360° pseudo-3D turret seat and its TV channel.
 *
 * OFF while the role is reworked (owner call, 2026-08). Turning it off removes
 * the seat from every hull, so nobody can claim Role.CUPOLA and the
 * ScreenChannel.CUPOLA view is unreachable — the implementation stays intact
 * behind this switch rather than being deleted.
 *
 * NOT affected: Helm's PARASCOPE (the pseudo-3D fly-through on the viewscreen)
 * is a separate channel owned by HELM and stays enabled — the store screenshots
 * depend on it.
 *
 * Enable for a dev session with SCC_CUPOLA=1.
 */
export declare const FEATURE_CUPOLA: boolean;
