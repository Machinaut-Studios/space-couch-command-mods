export declare const cupola: {
    readonly weapon: {
        readonly laser: import("../../..").TextEntry<"LASER">;
        readonly gatling: import("../../..").TextEntry<"GATLING">;
        readonly rocket: import("../../..").TextEntry<"ROCKET">;
    } & import("../../../types").TextGroup;
    readonly gyro: {
        readonly noSignal: import("../../..").TextEntry<"NO GYRO SIGNAL">;
        readonly denied: import("../../..").TextEntry<"GYRO DENIED">;
    } & import("../../../types").TextGroup;
    readonly banner: {
        readonly link: import("../../..").TextEntry<"SHIPNET LINK // SB-OS 2.4">;
        readonly title: import("../../..").TextEntry<"CUPOLA GUNNER">;
        readonly phoneTitle: import("../../..").TextEntry<"CUPOLA">;
        readonly freeLook: import("../../..").TextEntry<"TURRET FREE-LOOK · VIEW">;
    } & import("../../../types").TextGroup;
    readonly chip: {
        readonly lock: import("../../..").TextEntry<"◉ LOCK">;
        readonly range: import("../../..").TextEntry<"{range}u">;
        readonly closing: import("../../..").TextEntry<"closing {rate}u/s">;
        readonly opening: import("../../..").TextEntry<"opening {rate}u/s">;
        readonly holding: import("../../..").TextEntry<"holding">;
        readonly tracking: import("../../..").TextEntry<"◌ tracking — no lock">;
        readonly noLock: import("../../..").TextEntry<"◌ no lock">;
        readonly round: import("../../..").TextEntry<"ROUND">;
    } & import("../../../types").TextGroup;
    readonly hint: {
        readonly desktop: import("../../..").TextEntry<"drag to look · hold edges to spin · arm a weapon to fire">;
        readonly phone: import("../../..").TextEntry<"drag to look · flick to spin">;
    } & import("../../../types").TextGroup;
    readonly btn: {
        readonly recenter: import("../../..").TextEntry<"⌖ recenter">;
        readonly gyro: import("../../..").TextEntry<"⌖ gyro">;
        readonly screen: import("../../..").TextEntry<"⧉ screen">;
        readonly fire: import("../../..").TextEntry<"FIRE">;
    } & import("../../../types").TextGroup;
    readonly aria: {
        readonly recenter: import("../../..").TextEntry<"recenter">;
        readonly gyroAim: import("../../..").TextEntry<"gyro aim">;
        readonly promote: import("../../..").TextEntry<"promote to screen">;
    } & import("../../../types").TextGroup;
    readonly hud: {
        readonly heat: import("../../..").TextEntry<"heat">;
        readonly overheat: import("../../..").TextEntry<"overheat">;
        readonly gat: import("../../..").TextEntry<"gat">;
        readonly rkt: import("../../..").TextEntry<"rkt">;
    } & import("../../../types").TextGroup;
    readonly status: {
        readonly overheat: import("../../..").TextEntry<"OVERHEAT">;
        readonly heat: import("../../..").TextEntry<"heat {heat}">;
        readonly noAmmo: import("../../..").TextEntry<"NO AMMO">;
        readonly armed: import("../../..").TextEntry<"armed · {status}">;
    } & import("../../../types").TextGroup;
    readonly gate: {
        readonly noLink: import("../../..").TextEntry<"no link">;
        readonly disarmed: import("../../..").TextEntry<"DISARMED — arm a weapon">;
        readonly weaponsDark: import("../../..").TextEntry<"WEAPONS DARK — reroute power">;
        readonly beyond: import("../../..").TextEntry<"mark {dist}u — reach {range}u">;
        readonly overheat: import("../../..").TextEntry<"OVERHEAT — cools at {resumeAt}">;
        readonly holdBeam: import("../../..").TextEntry<"hold to fire — beam">;
        readonly noAmmoGatling: import("../../..").TextEntry<"NO AMMO — gatling dry">;
        readonly cycling: import("../../..").TextEntry<"CYCLING {sec}s">;
        readonly burstPd: import("../../..").TextEntry<"burst — point defense">;
        readonly holdBurst: import("../../..").TextEntry<"hold to fire — burst">;
        readonly noAmmoRocket: import("../../..").TextEntry<"NO AMMO — pod empty">;
        readonly unguided: import("../../..").TextEntry<"unguided — lead the mark">;
    } & import("../../../types").TextGroup;
} & import("../../../types").TextGroup;
