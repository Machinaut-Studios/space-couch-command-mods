import type { TextStr } from "./text/ref";
import type { Role, SystemId, AlertLevel, ShieldArc, ProjectileKind, ScreenChannel, TurretMode } from "./enums";
export declare const INTENT_CHANNEL: "intent";
/** `{ hash, index, count, data }`: one chunk of the active pack's wire JSON (<= 256 KiB). */
export declare const TEXT_PACK_CHUNK_MESSAGE: "textPackChunk";
/** No payload: switch to English (the pack was cleared or vanished). */
export declare const TEXT_PACK_CLEAR_MESSAGE: "textPackClear";
/** Per-client answer to `exportTemplate` (sent to the requesting host only): `{ text: TextStr }`, a wire ref the Mods
 * screen renders and shows (view.mods.exported with the written path as a raw param, or view.mods.exportFailed). */
export declare const MODS_NOTICE_MESSAGE: "modsNotice";
export interface ModsNotice {
    text: TextStr;
}
/** The one road between clients and Code Mods (mods step 6b). Client -> server it is the `modMessage` intent; a Code Mod's
 * `game.send` goes out as this room message, `{ modId, payload }` (JSON, up to MOD_MESSAGE_MAX_BYTES). */
export declare const MOD_MESSAGE: "modMessage";
export declare const MOD_MESSAGE_MAX_BYTES: number;
export type Intent = {
    t: "claimSeat";
    seatId: string;
} | {
    t: "releaseSeat";
} | {
    t: "claimRole";
    role: Role;
} | {
    t: "releaseRole";
} | {
    t: "setShipClass";
    classId: string;
} | {
    t: "setReady";
    ready: boolean;
} | {
    t: "setName";
    name: string;
} | {
    t: "startGame";
    force?: true;
} | {
    t: "restartGame";
} | {
    t: "returnToLobby";
} | {
    t: "continueRun";
    shipName?: string;
    force?: true;
} | {
    t: "abandonRun";
} | {
    t: "buyUnlock";
    unlockId: string;
} | {
    t: "setThrottle";
    value: number;
} | {
    t: "setHeading";
    radians: number;
} | {
    t: "evasive";
    on: boolean;
} | {
    t: "engageJump";
} | {
    t: "selectTarget";
    contactId: string;
} | {
    t: "selectSubTarget";
    subsystem: string;
} | {
    t: "fireWeapon";
    weaponId: string;
} | {
    t: "setShieldAlloc";
    arc: ShieldArc;
    value: number;
} | {
    t: "setTurretMode";
    turretId: string;
    mode: TurretMode;
} | {
    t: "fireTurret";
    turretId: string;
    targetId: string;
} | {
    t: "scanContact";
    contactId: string;
} | {
    t: "markFiringSolution";
    bearingDeg: number;
    rangeEstimate: number;
} | {
    t: "poiAction";
    contactId: string;
    poiId: string;
    action: string;
} | {
    t: "setOverclock";
    on: boolean;
} | {
    t: "repairSystem";
    system: string;
} | {
    t: "ventHeat";
} | {
    t: "setPowerPriority";
    system: SystemId;
    weight: number;
} | {
    t: "chargeJump";
    on: boolean;
} | {
    t: "setAlert";
    level: AlertLevel;
} | {
    t: "setJamFreq";
    value: number;
} | {
    t: "setDestination";
    systemId: string;
} | {
    t: "fireRailgun";
} | {
    t: "setEcm";
    on: boolean;
} | {
    t: "deployFlare";
} | {
    t: "fireMissile";
} | {
    t: "fireRocket";
    bearingDeg: number;
} | {
    t: "rerouteRotate";
    index: number;
} | {
    t: "setCupolaAim";
    yawDeg: number;
    pitchDeg: number;
} | {
    t: "setParascopeAim";
    yawDeg: number;
    pitchDeg: number;
} | {
    t: "setShipName";
    name: string;
} | {
    t: "cupolaFire";
    weapon: "laser" | "gatling" | "rocket";
    targetId?: string;
    projectileId?: string;
} | {
    t: "hailContact";
    contactId: string;
} | {
    t: "respondHail";
    optionId: string;
} | {
    t: "closeHail";
} | {
    t: "promoteToScreen";
    channel: ScreenChannel;
} | {
    t: "setScreen";
    channel: ScreenChannel;
} | {
    t: "loadTube";
    tubeId: string;
    kind: ProjectileKind;
} | {
    t: "launchProjectile";
    tubeId: string;
    bearingDeg: number;
    activationDelay: number;
} | {
    t: "probeSteer";
    throttle: number;
    headingRad: number;
} | {
    t: "probeInteract";
} | {
    t: "probeAbort";
} | {
    t: "probePing";
} | {
    t: "bootSkip";
} | {
    t: "playSignal";
    contactId: string;
} | {
    t: "stopSignal";
} | {
    t: "setLifeSupport";
    on: boolean;
} | {
    t: "setLanguage";
    packId: string | null;
} | {
    t: "rescanPacks";
} | {
    t: "exportTemplate";
} | {
    t: "requestPack";
} | {
    t: "setStreamerMode";
    on: boolean;
} | {
    t: "setModEnabled";
    id: string;
    on: boolean;
} | {
    t: "moveMod";
    id: string;
    delta: -1 | 1;
} | {
    t: "modAssets";
    hash: string;
    done: number;
    total: number;
} | {
    t: "modMessage";
    modId: string;
    payload: unknown;
};
/** Narrow an unknown wire payload to an Intent tag (server-side guard). */
export type IntentTag = Intent["t"];
