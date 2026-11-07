export declare const gunnery: {
    readonly gunner: {
        readonly bank: {
            readonly lettered: import("../..").TextEntry<"Phaser {letter}">;
            readonly none: import("../..").TextEntry<"Phaser">;
        } & import("../../types").TextGroup;
        readonly hits: import("../..").TextEntry<"hits">;
        readonly lockedTarget: import("../..").TextEntry<"locked target">;
        readonly phaserBank: import("../..").TextEntry<"phaser bank">;
        readonly charge: import("../..").TextEntry<"charge">;
        readonly heat: import("../..").TextEntry<"heat">;
        readonly waitingForLock: import("../..").TextEntry<"○ waiting for Tactical to lock a target">;
        readonly inRange: import("../..").TextEntry<"{dist}u · in range">;
        readonly tooFarBeam: import("../..").TextEntry<"{dist}u · too far (beam {beam}u)">;
        readonly status: {
            readonly noBank: import("../..").TextEntry<"○ no bank">;
            readonly offline: import("../..").TextEntry<"○ offline">;
            readonly overheated: import("../..").TextEntry<"○ overheated">;
            readonly ready: import("../..").TextEntry<"ready">;
            readonly charging: import("../..").TextEntry<"◌ charging">;
        } & import("../../types").TextGroup;
        readonly sub: {
            readonly noBank: import("../..").TextEntry<"no phaser bank — waiting for a slot">;
            readonly weaponsOffline: import("../..").TextEntry<"weapons offline — ask Engineering">;
            readonly overheated: import("../..").TextEntry<"overheated — venting">;
            readonly charging: import("../..").TextEntry<"charging…">;
            readonly noTarget: import("../..").TextEntry<"waiting for Tactical to lock a target">;
            readonly target: import("../..").TextEntry<"→ {designator}">;
            readonly tooFar: import("../..").TextEntry<"too far — {dist}u / {beam}u">;
        } & import("../../types").TextGroup;
        readonly feedback: {
            readonly hit: import("../..").TextEntry<"✦ HIT!">;
            readonly streak: import("../..").TextEntry<"HITS ×{streak}">;
        } & import("../../types").TextGroup;
        readonly fire: import("../..").TextEntry<"FIRE">;
    } & import("../../types").TextGroup;
    readonly cupola: {
        readonly weapon: {
            readonly laser: import("../..").TextEntry<"LASER">;
            readonly gatling: import("../..").TextEntry<"GATLING">;
            readonly rocket: import("../..").TextEntry<"ROCKET">;
        } & import("../../types").TextGroup;
        readonly gyro: {
            readonly noSignal: import("../..").TextEntry<"NO GYRO SIGNAL">;
            readonly denied: import("../..").TextEntry<"GYRO DENIED">;
        } & import("../../types").TextGroup;
        readonly banner: {
            readonly link: import("../..").TextEntry<"SHIPNET LINK // SB-OS 2.4">;
            readonly title: import("../..").TextEntry<"CUPOLA GUNNER">;
            readonly phoneTitle: import("../..").TextEntry<"CUPOLA">;
            readonly freeLook: import("../..").TextEntry<"TURRET FREE-LOOK · VIEW">;
        } & import("../../types").TextGroup;
        readonly chip: {
            readonly lock: import("../..").TextEntry<"◉ LOCK">;
            readonly range: import("../..").TextEntry<"{range}u">;
            readonly closing: import("../..").TextEntry<"closing {rate}u/s">;
            readonly opening: import("../..").TextEntry<"opening {rate}u/s">;
            readonly holding: import("../..").TextEntry<"holding">;
            readonly tracking: import("../..").TextEntry<"◌ tracking — no lock">;
            readonly noLock: import("../..").TextEntry<"◌ no lock">;
            readonly round: import("../..").TextEntry<"ROUND">;
        } & import("../../types").TextGroup;
        readonly hint: {
            readonly desktop: import("../..").TextEntry<"drag to look · hold edges to spin · arm a weapon to fire">;
            readonly phone: import("../..").TextEntry<"drag to look · flick to spin">;
        } & import("../../types").TextGroup;
        readonly btn: {
            readonly recenter: import("../..").TextEntry<"⌖ recenter">;
            readonly gyro: import("../..").TextEntry<"⌖ gyro">;
            readonly screen: import("../..").TextEntry<"⧉ screen">;
            readonly fire: import("../..").TextEntry<"FIRE">;
        } & import("../../types").TextGroup;
        readonly aria: {
            readonly recenter: import("../..").TextEntry<"recenter">;
            readonly gyroAim: import("../..").TextEntry<"gyro aim">;
            readonly promote: import("../..").TextEntry<"promote to screen">;
        } & import("../../types").TextGroup;
        readonly hud: {
            readonly heat: import("../..").TextEntry<"heat">;
            readonly overheat: import("../..").TextEntry<"overheat">;
            readonly gat: import("../..").TextEntry<"gat">;
            readonly rkt: import("../..").TextEntry<"rkt">;
        } & import("../../types").TextGroup;
        readonly status: {
            readonly overheat: import("../..").TextEntry<"OVERHEAT">;
            readonly heat: import("../..").TextEntry<"heat {heat}">;
            readonly noAmmo: import("../..").TextEntry<"NO AMMO">;
            readonly armed: import("../..").TextEntry<"armed · {status}">;
        } & import("../../types").TextGroup;
        readonly gate: {
            readonly noLink: import("../..").TextEntry<"no link">;
            readonly disarmed: import("../..").TextEntry<"DISARMED — arm a weapon">;
            readonly weaponsDark: import("../..").TextEntry<"WEAPONS DARK — reroute power">;
            readonly beyond: import("../..").TextEntry<"mark {dist}u — reach {range}u">;
            readonly overheat: import("../..").TextEntry<"OVERHEAT — cools at {resumeAt}">;
            readonly holdBeam: import("../..").TextEntry<"hold to fire — beam">;
            readonly noAmmoGatling: import("../..").TextEntry<"NO AMMO — gatling dry">;
            readonly cycling: import("../..").TextEntry<"CYCLING {sec}s">;
            readonly burstPd: import("../..").TextEntry<"burst — point defense">;
            readonly holdBurst: import("../..").TextEntry<"hold to fire — burst">;
            readonly noAmmoRocket: import("../..").TextEntry<"NO AMMO — pod empty">;
            readonly unguided: import("../..").TextEntry<"unguided — lead the mark">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly engSciComms: {
        readonly station: import("../..").TextEntry<"Operations">;
        readonly hull: import("../..").TextEntry<"hull">;
        readonly outage: {
            readonly banner: import("../..").TextEntry<"{systems} FORCED OFFLINE">;
            readonly systemFallback: import("../..").TextEntry<"system">;
            readonly reroute: import("../..").TextEntry<"⚡ Reroute power">;
        } & import("../../types").TextGroup;
        readonly power: {
            readonly title: import("../..").TextEntry<"power distribution · ops modules">;
            readonly salvageTitle: import("../..").TextEntry<"salvage — auto-repairs spend it">;
            readonly salvageUnit: import("../..").TextEntry<"· salvage">;
            readonly noSalvage: import("../..").TextEntry<"⚠ no salvage — auto-repair stalled">;
            readonly output: import("../..").TextEntry<"OUTPUT {output}u/s">;
            readonly over: import("../..").TextEntry<"OVER {amount}">;
            readonly free: import("../..").TextEntry<"FREE {amount}">;
            readonly coach: import("../..").TextEntry<"Draw = {formula}. Drag a bar to set priority. {cut} cuts to 0 and remembers. Repairs are automatic ({pct}% rate); they spend salvage.">;
            readonly coachFormula: import("../..").TextEntry<"demand × priority">;
            readonly benchCoach: import("../..").TextEntry<"draw = demand × priority · ✂ cuts & remembers">;
        } & import("../../types").TextGroup;
        readonly module: {
            readonly autoRepair: import("../..").TextEntry<"auto-repair {pct}%">;
            readonly runsItself: import("../..").TextEntry<"runs itself">;
            readonly autoVentVenting: import("../..").TextEntry<"auto-vent — venting {sec}s">;
            readonly autoVentArmed: import("../..").TextEntry<"auto-vent armed">;
            readonly outputHalved: import("../..").TextEntry<"output halved">;
            readonly tripsAt: import("../..").TextEntry<"trips at core {heat}">;
            readonly core: import("../..").TextEntry<"core {pct}%">;
            readonly temp: import("../..").TextEntry<"temp">;
        } & import("../../types").TextGroup;
        readonly reactor: {
            readonly coreSource: import("../..").TextEntry<"core source — feeds bus">;
            readonly bus: import("../..").TextEntry<"bus">;
            readonly lockedOut: import("../..").TextEntry<"⚠ LOCKED OUT">;
            readonly offline: import("../..").TextEntry<"OFFLINE">;
            readonly output: import("../..").TextEntry<"{output}u">;
        } & import("../../types").TextGroup;
        readonly jump: {
            readonly title: import("../..").TextEntry<"jump drive · deflector">;
            readonly spooling: import("../..").TextEntry<"◉ Spooling">;
            readonly spool: import("../..").TextEntry<"Spool jump">;
            readonly charge: import("../..").TextEntry<"jump charge">;
            readonly charged: import("../..").TextEntry<"✦ charged — the pilot can engage">;
            readonly starved: import("../..").TextEntry<"⚠ not enough free power (needs {need}u) — deallocate a system">;
            readonly throttled: import("../..").TextEntry<"drive throttled to {pct}% — spool is slower">;
            readonly draws: import("../..").TextEntry<"draws {rate} u/s while spooling">;
            readonly off: import("../..").TextEntry<"off — no power drawn">;
        } & import("../../types").TextGroup;
        readonly shield: {
            readonly title: import("../..").TextEntry<"Deflector — all arcs">;
            readonly chg: import("../..").TextEntry<"chg">;
            readonly chargeTitle: import("../..").TextEntry<"charge {cur}/{max}">;
            readonly allocLabel: import("../..").TextEntry<"shield allocation — all arcs">;
            readonly caption: import("../..").TextEntry<"one dial, four arcs; power spreads equally · allocation drives SHIELDS demand">;
        } & import("../../types").TextGroup;
        readonly ping: {
            readonly title: import("../..").TextEntry<"active ping — reveals the interior AND attracts it (LOUD)">;
            readonly noCarrier: import("../..").TextEntry<"◌ no carrier">;
            readonly ready: import("../..").TextEntry<"◉ ping">;
            readonly cooldown: import("../..").TextEntry<"◌ ping {sec}s">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly sciComms: {
        readonly station: import("../..").TextEntry<"Science & Comms">;
        readonly hull: import("../..").TextEntry<"hull">;
        readonly strip: {
            readonly incomingHail: import("../..").TextEntry<"incoming hail — answer">;
            readonly channelOpen: import("../..").TextEntry<"channel open — hail">;
            readonly probeActive: import("../..").TextEntry<"probe active — stick">;
            readonly sweepLive: import("../..").TextEntry<"sweep live — radar">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
