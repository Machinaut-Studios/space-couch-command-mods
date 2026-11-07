export declare const gunner: {
    readonly bank: {
        readonly lettered: import("../../..").TextEntry<"Phaser {letter}">;
        readonly none: import("../../..").TextEntry<"Phaser">;
    } & import("../../../types").TextGroup;
    readonly hits: import("../../..").TextEntry<"hits">;
    readonly lockedTarget: import("../../..").TextEntry<"locked target">;
    readonly phaserBank: import("../../..").TextEntry<"phaser bank">;
    readonly charge: import("../../..").TextEntry<"charge">;
    readonly heat: import("../../..").TextEntry<"heat">;
    readonly waitingForLock: import("../../..").TextEntry<"○ waiting for Tactical to lock a target">;
    readonly inRange: import("../../..").TextEntry<"{dist}u · in range">;
    readonly tooFarBeam: import("../../..").TextEntry<"{dist}u · too far (beam {beam}u)">;
    readonly status: {
        readonly noBank: import("../../..").TextEntry<"○ no bank">;
        readonly offline: import("../../..").TextEntry<"○ offline">;
        readonly overheated: import("../../..").TextEntry<"○ overheated">;
        readonly ready: import("../../..").TextEntry<"ready">;
        readonly charging: import("../../..").TextEntry<"◌ charging">;
    } & import("../../../types").TextGroup;
    readonly sub: {
        readonly noBank: import("../../..").TextEntry<"no phaser bank — waiting for a slot">;
        readonly weaponsOffline: import("../../..").TextEntry<"weapons offline — ask Engineering">;
        readonly overheated: import("../../..").TextEntry<"overheated — venting">;
        readonly charging: import("../../..").TextEntry<"charging…">;
        readonly noTarget: import("../../..").TextEntry<"waiting for Tactical to lock a target">;
        readonly target: import("../../..").TextEntry<"→ {designator}">;
        readonly tooFar: import("../../..").TextEntry<"too far — {dist}u / {beam}u">;
    } & import("../../../types").TextGroup;
    readonly feedback: {
        readonly hit: import("../../..").TextEntry<"✦ HIT!">;
        readonly streak: import("../../..").TextEntry<"HITS ×{streak}">;
    } & import("../../../types").TextGroup;
    readonly fire: import("../../..").TextEntry<"FIRE">;
} & import("../../../types").TextGroup;
