import type { NoParamKey } from "./text/keys";
export declare enum Role {
    CAPTAIN = "CAPTAIN",// legacy/wire compat — never claimable, owns no intents
    HELM = "HELM",
    TACTICAL = "TACTICAL",
    ENGINEERING = "ENGINEERING",
    SCIENCE = "SCIENCE",
    COMMS = "COMMS",
    GUNNER = "GUNNER",// "Cannoneer": the simple turret seat (big FIRE button, kid-friendly)
    /** The Cupola Gunner: the 360° pseudo-3D swivel-turret battery (design update).
     * A separate optional combat seat — additive to GUNNER, never a replacement. */
    CUPOLA = "CUPOLA"
}
export declare const PLAYABLE_ROLES: Role[];
/** Role -> Text Key (catalog `role.*`). */
export declare const ROLE_LABELS: Record<Role, NoParamKey>;
/** Human-readable station name for a Role value (or the raw string if unknown). CLIENT-side: resolves via text(). */
export declare function roleLabel(role: string): string;
export declare enum Phase {
    LOBBY = "LOBBY",
    EXPLORATION = "EXPLORATION",
    COMBAT = "COMBAT",
    JUMP = "JUMP",
    GAMEOVER = "GAMEOVER",
    BOOT = "BOOT"
}
export declare enum AlertLevel {
    GREEN = "GREEN",
    YELLOW = "YELLOW",
    RED = "RED"
}
export declare enum ScreenChannel {
    MAP = "MAP",// tactical map (default; owned by TACTICAL)
    HELM = "HELM",// nav: heading, jump charge, hazards
    SCIENCE = "SCIENCE",// big scan card of the current scan target
    ENGINEERING = "ENGINEERING",// systems/power schematic
    COMMS = "COMMS",// ship's log
    HAIL = "HAIL",// the other captain, on screen (design §9: avatar + message)
    PARASCOPE = "PARASCOPE",// Helm's pseudo-3D flight view (no combat) on the TV
    CUPOLA = "CUPOLA",// the Cupola Gunner's 360° turret view on the TV
    PROBE = "PROBE",// Science's probe-pilot view (top-down interior, vision cone)
    PROBE_RADAR = "PROBE_RADAR",// Comms' rotating probe sweep (the creature's only tell)
    CHART = "CHART"
}
/** Which duty may promote each channel to the main screen. */
export declare const CHANNEL_OWNER: Record<ScreenChannel, Role>;
export declare enum SystemId {
    REACTOR = "REACTOR",
    ENGINES = "ENGINES",
    JUMP_DRIVE = "JUMP_DRIVE",
    LIFE_SUPPORT = "LIFE_SUPPORT",
    SENSORS = "SENSORS",
    WEAPONS = "WEAPONS",
    SHIELDS = "SHIELDS"
}
export declare enum ContactType {
    ENEMY = "ENEMY",
    ASTEROID = "ASTEROID",
    ANOMALY = "ANOMALY",
    DERELICT = "DERELICT",
    MINE = "MINE",// proximity mine — faint until Science reveals; guns can pop it
    FRIENDLY = "FRIENDLY"
}
export declare enum ShieldArc {
    FORE = "FORE",
    AFT = "AFT",
    PORT = "PORT",
    STARBOARD = "STARBOARD"
}
export declare enum SubsystemType {
    ENGINES = "ENGINES",// disabled → enemy can't move
    SHIELD_GEN = "SHIELD_GEN",// disabled → enemy shield can't regenerate
    WEAPONS = "WEAPONS",// disabled → enemy can't fire
    JUMP_DRIVE = "JUMP_DRIVE"
}
/** SubsystemType -> Text Key (catalog `subsystem.*`). */
export declare const SUBSYSTEM_LABELS: Record<SubsystemType, NoParamKey>;
/** Human-readable subsystem name (or the raw id if unknown). CLIENT-side: resolves via text(). */
export declare function subsystemLabel(id: string): string;
export declare enum ProjectileKind {
    TORPEDO = "TORPEDO",
    NOISEMAKER = "NOISEMAKER",
    MISSILE = "MISSILE",// fast homing dart: frantic launch, then locks; PD/flare/noisemaker-counterable
    ROCKET = "ROCKET",// cheap unguided slug fired on a bearing; counterable
    RAIL = "RAIL",// helm-aimed forward spike: one-shots most hulls; dodge is the ONLY counter
    FLARE = "FLARE"
}
export declare enum ProjectilePhase {
    DUMB = "DUMB",// running straight, seeker off
    ACTIVE = "ACTIVE"
}
export declare enum TurretMode {
    PD = "PD",
    HOLD = "HOLD"
}
export declare enum EncounterType {
    SURVEY = "SURVEY",// peaceful first-light survey (sector 1): chart an anomaly — no hostiles
    PATROL = "PATROL",// enemies approach from afar (may open with a pirate demand)
    AMBUSH = "AMBUSH",// enemies spawn close, alert red instantly
    ASTEROID_FIELD = "ASTEROID_FIELD",// dense rocks + pirates
    DRIFT_FIELD = "DRIFT_FIELD",// MOVING, spinning rocks + pirates (semi-rare — dodge weather)
    DERELICT = "DERELICT",// slow deep-scan for salvage; 35% trap
    DISTRESS = "DISTRESS",// incoming mayday hail: respond (escort fight) or ignore
    MINEFIELD = "MINEFIELD",// mines + derelict bait at the center
    HUNTER = "HUNTER",// elite reaver + escorts, every 5th sector (opens with a taunt)
    FIRST_CONTACT = "FIRST_CONTACT",// a Vel'Shaar envoy — diplomacy or disaster (design §9)
    TRADER = "TRADER",// guild merchant — buy/sell/haggle; sometimes a q-ship trap
    /** THE LONG RETREAT (THE VOID wave): a colony convoy spooling to jump with
     * hostiles inbound. Never in the random weights table — the room swaps one
     * in once the Unmaking front is live (BridgeRoom.drawEncounter); suites pin
     * it via forceEncounter. Cover the convoy: ≥1 transport away = a colony saved. */
    EVACUATION = "EVACUATION",
    /** DEBRIS STORM (hazard wave): a rare chart-marked hazard system — fast rocks
     * everywhere (Helm threads the big ones, gunners shoot the small ones),
     * harder impacts, and a rich debris_heart anomaly at the core. Never in the
     * weights table: StarSystem.hazard === "debris" swaps the plan in at arrival
     * (BridgeRoom.drawEncounter); suites pin it via forceEncounter. */
    DEBRIS_STORM = "DEBRIS_STORM"
}
/** How the other captain is feeling — drives hail-screen framing/color. */
export declare enum HailTone {
    FRIENDLY = "FRIENDLY",
    NEUTRAL = "NEUTRAL",
    HOSTILE = "HOSTILE"
}
/** Tone for ship's-log entries (drives client styling). */
export declare enum LogTone {
    INFO = "INFO",
    OK = "OK",
    WARN = "WARN",
    DANGER = "DANGER"
}
