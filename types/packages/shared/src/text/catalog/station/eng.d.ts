export declare const eng: {
    readonly header: {
        readonly hull: import("../..").TextEntry<"hull">;
    } & import("../../types").TextGroup;
    readonly system: {
        readonly reactor: import("../..").TextEntry<"Reactor">;
        readonly engines: import("../..").TextEntry<"Engines">;
        readonly sensors: import("../..").TextEntry<"Sensors">;
        readonly jumpDrive: import("../..").TextEntry<"Jump drive">;
        readonly shields: import("../..").TextEntry<"Shields">;
        readonly weapons: import("../..").TextEntry<"Weapons">;
    } & import("../../types").TextGroup;
    readonly arc: {
        readonly fore: import("../..").TextEntry<"Fore">;
        readonly aft: import("../..").TextEntry<"Aft">;
        readonly port: import("../..").TextEntry<"Port">;
        readonly stbd: import("../..").TextEntry<"Stbd">;
    } & import("../../types").TextGroup;
    readonly state: {
        readonly lockedOut: import("../..").TextEntry<"⚠ LOCKED OUT">;
        readonly notEnoughPower: import("../..").TextEntry<"NOT ENOUGH POWER">;
        readonly offline: import("../..").TextEntry<"OFFLINE">;
    } & import("../../types").TextGroup;
    readonly reroute: {
        readonly forcedOffline: import("../..").TextEntry<"{systems} FORCED OFFLINE">;
        readonly cause: import("../..").TextEntry<"intrusion/surge">;
        readonly button: import("../..").TextEntry<"⚡ Reroute power">;
        readonly systemFallback: import("../..").TextEntry<"system">;
        readonly dialogLabel: import("../..").TextEntry<"Reroute conduit routing: {system}">;
        readonly title: import("../..").TextEntry<"REROUTE — CONDUIT ROUTING · {system}">;
        readonly hint: import("../..").TextEntry<"rotate conduits · link SRC ▸ {abbr}">;
        readonly hide: import("../..").TextEntry<"hide panel — restore keeps running">;
        readonly close: import("../..").TextEntry<"close reroute panel">;
        readonly restore: import("../..").TextEntry<"restore">;
        readonly awaiting: import("../..").TextEntry<"AWAITING ROUTING TELEMETRY…">;
        readonly src: import("../..").TextEntry<"SRC">;
        readonly flowing: import("../..").TextEntry<"▸ POWER FLOWING — {system} RESTORING">;
        readonly incomplete: import("../..").TextEntry<"ROUTE INCOMPLETE">;
    } & import("../../types").TextGroup;
    readonly abbr: {
        readonly reactor: import("../..").TextEntry<"RCT">;
        readonly engines: import("../..").TextEntry<"ENG">;
        readonly jumpDrive: import("../..").TextEntry<"JMP">;
        readonly sensors: import("../..").TextEntry<"SEN">;
        readonly weapons: import("../..").TextEntry<"WPN">;
        readonly shields: import("../..").TextEntry<"SHD">;
        readonly fallback: import("../..").TextEntry<"SYS">;
    } & import("../../types").TextGroup;
    readonly schematic: {
        readonly title: import("../..").TextEntry<"Ship schematic">;
        readonly hint: import("../..").TextEntry<"tap node → power row">;
        readonly integ: import("../..").TextEntry<"integ {pct}%">;
    } & import("../../types").TextGroup;
    readonly damage: {
        readonly title: import("../..").TextEntry<"Damage control">;
        readonly salvage: import("../..").TextEntry<"salvage · repairs spend it">;
        readonly noSalvage: import("../..").TextEntry<"⚠ no salvage — repair teams can't start">;
        readonly hull: import("../..").TextEntry<"Hull">;
        readonly none: import("../..").TextEntry<"no system damage — teams standing by">;
        readonly rowActive: import("../..").TextEntry<"● repairing">;
        readonly rowDispatch: import("../..").TextEntry<"tap to dispatch">;
        readonly noFieldRepair: import("../..").TextEntry<"no field repair">;
        readonly btnActive: import("../..").TextEntry<"repairing…">;
        readonly btn: import("../..").TextEntry<"repair">;
        readonly recall: import("../..").TextEntry<"recall repair team">;
        readonly dispatch: import("../..").TextEntry<"dispatch repair team">;
    } & import("../../types").TextGroup;
    readonly gauges: {
        readonly title: import("../..").TextEntry<"Reactor gauges">;
        readonly output: import("../..").TextEntry<"OUTPUT">;
        readonly coreTemp: import("../..").TextEntry<"CORE TEMP">;
        readonly wpnHeat: import("../..").TextEntry<"WPN HEAT">;
        readonly contain: import("../..").TextEntry<"CONTAIN">;
    } & import("../../types").TextGroup;
    readonly reactor: {
        readonly title: import("../..").TextEntry<"Reactor core">;
        readonly overdrawn: import("../..").TextEntry<"⚠ power overdrawn — a system is starved">;
        readonly overclockBanner: import("../..").TextEntry<"⚡ overclock — building heat · signature loud">;
        readonly coreTemp: import("../..").TextEntry<"core temp · red line {line}">;
        readonly danger: import("../..").TextEntry<"▲ DANGER">;
        readonly redLineTip: import("../..").TextEntry<"red line — reactor takes damage past {line}">;
        readonly readoutOutput: import("../..").TextEntry<"output">;
        readonly readoutDemand: import("../..").TextEntry<"demand">;
        readonly readoutContainment: import("../..").TextEntry<"containment">;
        readonly unitPerSec: import("../..").TextEntry<"u/s">;
        readonly overclockOn: import("../..").TextEntry<"⚡ Overclock ON">;
        readonly overclock: import("../..").TextEntry<"Overclock">;
        readonly overclockHint: import("../..").TextEntry<"+{bonus}u output · builds heat">;
        readonly vent: import("../..").TextEntry<"❄ Vent ({sec}s, ½ output)">;
        readonly venting: import("../..").TextEntry<"venting… {sec}s · output halved">;
        readonly ventIdle: import("../..").TextEntry<"core {heat}% · wpn heat {wpn}">;
    } & import("../../types").TextGroup;
    readonly flux: {
        readonly title: import("../..").TextEntry<"Power flux">;
        readonly trace: import("../..").TextEntry<"demand trace · u/s">;
        readonly cap: import("../..").TextEntry<"▁▁ cap {output}">;
        readonly readout: import("../..").TextEntry<"{demand}u/s">;
    } & import("../../types").TextGroup;
    readonly jump: {
        readonly title: import("../..").TextEntry<"Jump drive">;
        readonly spooling: import("../..").TextEntry<"◉ Spooling">;
        readonly spool: import("../..").TextEntry<"Spool jump">;
        readonly charge: import("../..").TextEntry<"jump charge">;
        readonly charged: import("../..").TextEntry<"✦ charged: capacitor bleeding into the core. Jump soon or VENT through it.">;
        readonly starved: import("../..").TextEntry<"⚠ not enough free power (needs {need}u) — deallocate a system">;
        readonly throttled: import("../..").TextEntry<"drive throttled to {pct}% — spool is slower">;
        readonly draws: import("../..").TextEntry<"draws {rate} u/s while spooling">;
        readonly off: import("../..").TextEntry<"off — no power drawn">;
    } & import("../../types").TextGroup;
    readonly power: {
        readonly title: import("../..").TextEntry<"Power distribution">;
        readonly outputLine: import("../..").TextEntry<"OUTPUT {output}u/s">;
        readonly over: import("../..").TextEntry<"OVER {amount}">;
        readonly free: import("../..").TextEntry<"FREE {amount}">;
        readonly howTo: import("../..").TextEntry<"Draw = {formula}. Drag a bar to set it; fill = granted. Starved rows flash {alarm}. {cut} cuts to 0 and remembers.">;
        readonly formula: import("../..").TextEntry<"demand × priority">;
        readonly coreSource: import("../..").TextEntry<"core source — feeds bus">;
        readonly coreSourceShort: import("../..").TextEntry<"core source">;
        readonly reactorOutput: import("../..").TextEntry<"{output}u">;
        readonly lifeSupportNote: import("../..").TextEntry<"life support reserves {amount}u first while the breaker is ON. Shielding is the crew's health bar.">;
    } & import("../../types").TextGroup;
    readonly shields: {
        readonly title: import("../..").TextEntry<"Shield allocation">;
        readonly charge: import("../..").TextEntry<"chg">;
        readonly chargeTip: import("../..").TextEntry<"charge {charge}/{max}">;
        readonly alloc: import("../..").TextEntry<"{arc} shield allocation">;
        readonly note: import("../..").TextEntry<"arcs regenerate from SHIELDS power · total allocation drives its demand">;
    } & import("../../types").TextGroup;
    readonly lifeSupport: {
        readonly button: import("../..").TextEntry<"life support">;
        readonly on: import("../..").TextEntry<"◉ ON">;
        readonly off: import("../..").TextEntry<"○ OFF">;
        readonly openTip: import("../..").TextEntry<"open the life-support breaker (shielding bleeds)">;
        readonly closeTip: import("../..").TextEntry<"close the life-support breaker (shielding regens)">;
        readonly meter: import("../..").TextEntry<"radiation shielding">;
        readonly statusFence: import("../..").TextEntry<"☢ fence burning shielding — get back inside">;
        readonly statusOpen: import("../..").TextEntry<"breaker OPEN — the crew slowly cooks">;
        readonly statusStarved: import("../..").TextEntry<"⚠ starved/offline — no regen">;
        readonly statusShielded: import("../..").TextEntry<"crew shielded">;
        readonly statusRegen: import("../..").TextEntry<"regenerating +{rate}/s">;
    } & import("../../types").TextGroup;
    readonly row: {
        readonly priority: import("../..").TextEntry<"{system} power priority">;
        readonly breakerRestore: import("../..").TextEntry<"{system} breaker: restore">;
        readonly breakerCut: import("../..").TextEntry<"{system} breaker: cut">;
        readonly restoreTip: import("../..").TextEntry<"restore power (previous setting)">;
        readonly cutTip: import("../..").TextEntry<"cut power (priority 0)">;
        readonly cut: import("../..").TextEntry<"OFF">;
        readonly grantedTip: import("../..").TextEntry<"granted {granted} of {demand}u demand · priority {pct}%">;
        readonly integrityTip: import("../..").TextEntry<"integrity {pct}%">;
        readonly lockedTip: import("../..").TextEntry<"event-forced outage — reroute power to restore">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
