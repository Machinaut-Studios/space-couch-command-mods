export declare const parascope: {
    readonly range: import("..").TextEntry<"{dist}u">;
    readonly chevron: import("..").TextEntry<"{tag} {dist}u">;
    readonly lock: import("..").TextEntry<"◉ LOCK">;
    readonly tracking: import("..").TextEntry<"◌ TRACKING">;
    readonly threatScope: {
        readonly title: import("..").TextEntry<"THREAT SCOPE · 360°">;
        readonly view: import("..").TextEntry<"VIEW {deg}°">;
    } & import("../types").TextGroup;
    readonly nav: {
        readonly title: import("..").TextEntry<"NAV · TOP-DOWN">;
        readonly north: import("..").TextEntry<"N">;
        readonly heading: import("..").TextEntry<"HDG {deg}°">;
    } & import("../types").TextGroup;
    readonly projectile: {
        readonly torpedo: "TORPEDO";
        readonly missile: "MISSILE";
        readonly rocket: "ROCKET";
        readonly rail: "RAIL";
        readonly noisemaker: "NOISEMAKER";
        readonly flare: "FLARE";
    } & import("../types").TextGroup;
    readonly collision: {
        readonly banner: import("..").TextEntry<"⚠ collision course — {designator} {sec}s">;
        readonly unknown: import("..").TextEntry<"CONTACT">;
    } & import("../types").TextGroup;
    readonly spinal: {
        readonly armed: import("..").TextEntry<"SPINAL AXIS ▲ ARMED">;
        readonly fwd: import("..").TextEntry<"SPINAL AXIS ▲ FWD">;
        readonly edgeLeft: import("..").TextEntry<"◄ FWD AXIS">;
        readonly edgeRight: import("..").TextEntry<"FWD AXIS ►">;
        readonly lock: import("..").TextEntry<"◉ SPINAL LOCK — {name} {dist}u">;
    } & import("../types").TextGroup;
    readonly touch: {
        readonly steerLeft: "steer left";
        readonly steerRight: "steer right";
        readonly throttleUp: "throttle up";
        readonly throttleDown: "throttle down";
    } & import("../types").TextGroup;
    readonly trigger: {
        readonly fire: "fire";
        readonly rail: import("..").TextEntry<"rail">;
        readonly safe: import("..").TextEntry<"safe">;
    } & import("../types").TextGroup;
    readonly chip: {
        readonly recenter: "⌖ recenter";
        readonly freeLookOn: "☉ free-look on";
        readonly freeLookOff: "☉ free-look off";
        readonly gyro: "⌖ gyro";
        readonly railArmed: "⌁ rail armed";
        readonly armRail: "⌁ arm rail";
    } & import("../types").TextGroup;
    readonly hint: {
        readonly touch: import("..").TextEntry<"◄ ► steer · ▲ ▼ throttle · drag = glance · arm + tap = rail">;
        readonly keyboard: import("..").TextEntry<"a/d steer · w/s throttle · drag glance · r recenter · arm + space = rail">;
    } & import("../types").TextGroup;
} & import("../types").TextGroup;
