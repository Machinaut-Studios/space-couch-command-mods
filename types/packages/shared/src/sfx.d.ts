import type { KeysUnder } from "./text/keys";
/** UI + gameplay cue pools (terminal-first; viewport reuses the world ones). */
export declare const SFX_POOLS: {
    readonly uiPress: readonly ["ui-press-1", "ui-press-2"];
    readonly uiSelect: readonly ["ui-select-1", "ui-select-2"];
    readonly uiToggle: readonly ["ui-toggle-1", "ui-toggle-2"];
    readonly uiConfirm: readonly ["ui-confirm-1"];
    readonly uiDeny: readonly ["ui-deny-1"];
    readonly uiNotify: readonly ["ui-notify-1", "ui-notify-2"];
    readonly uiHover: readonly ["ui-hover-1"];
    readonly alertLoop: readonly ["alert-loop"];
    readonly lockout: readonly ["lockout-1"];
    readonly signalBurst: readonly ["signal-burst-1", "signal-burst-2"];
    readonly crash: readonly ["crash-1"];
    readonly glitch: readonly ["glitch-1"];
    readonly dashShort: readonly ["dash-short-1", "dash-short-2"];
    readonly dashLong: readonly ["dash-long-1"];
    readonly interferenceLoop: readonly ["interference-loop"];
    readonly bootActivate: readonly ["boot-activate-1", "boot-activate-2"];
    readonly workingLoop: readonly ["working-loop-1"];
    readonly bootOnline: readonly ["boot-online-1"];
    readonly beam: readonly ["wpn-beam-1", "wpn-beam-2"];
    readonly beamEnemy: readonly ["wpn-beam-enemy-1"];
    readonly turret: readonly ["wpn-turret-1", "wpn-turret-2"];
    readonly gatling: readonly ["wpn-gatling-1", "wpn-gatling-2"];
    readonly cupolaLaser: readonly ["wpn-cupola-laser-1"];
    readonly rail: readonly ["wpn-rail-1"];
    readonly missile: readonly ["wpn-missile-1", "wpn-missile-2"];
    readonly rocket: readonly ["wpn-rocket-1"];
    readonly flare: readonly ["wpn-flare-1"];
    readonly explosion: readonly ["explosion-1"];
    readonly bossArrival: readonly ["hit-boss-1"];
    readonly torpedoLaunch: readonly ["torpedo-launch-1"];
    readonly whoosh: readonly ["whoosh-1"];
    readonly whooshFlyby: readonly ["whoosh-flyby-1"];
    readonly energyConnect: readonly ["energy-connect-1"];
    readonly energyCharge: readonly ["energy-charge-1"];
    readonly energyFail: readonly ["energy-fail-1"];
    readonly energyAppear: readonly ["energy-appear-1"];
    readonly sparksLoop: readonly ["sparks-loop-1"];
    readonly mechBroken: readonly ["mech-broken-1"];
    readonly airlock: readonly ["airlock-1"];
    readonly deviceLaunch: readonly ["device-launch-1"];
    readonly roboticInterface: readonly ["robotic-interface-1"];
    readonly sensor: readonly ["sensor-1", "sensor-2"];
    readonly pickup: readonly ["pickup-1"];
    readonly hailAlien: readonly ["hail-alien-1", "hail-alien-2", "hail-alien-3"];
    readonly hailRobot: readonly ["hail-robot-1", "hail-robot-2"];
    readonly engAlarm: readonly ["eng-alarm-1"];
    readonly commsAlarm: readonly ["comms-alarm-1"];
};
export type SfxPoolName = keyof typeof SFX_POOLS;
/** Resolve a pool entry to its served path (a Room's Reskin may point it at another file: mods/assetUrl.ts). */
export declare const sfxUrl: (file: string) => string;
export declare const SIGNAL_VOICE_FILES: Record<string, string>;
/** Server assignment pools by source family (BridgeRoom rolls one at spawn). */
export declare const SIGNAL_VOICE_POOLS: Record<string, string[]>;
/** Comms-bank row label per family (no entity names — that's Science's scan). Text Keys (catalog `signal.label.*`). */
export declare const SIGNAL_LABELS: Record<string, KeysUnder<"signal.label.">>;
/** The ship's-log "Comms tunes a …" line per family (catalog `signal.tune.*`; param: designator). */
export declare const SIGNAL_TUNE_KEYS: Record<string, KeysUnder<"signal.tune.">>;
