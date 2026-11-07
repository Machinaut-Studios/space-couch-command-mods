export declare const comms: {
    readonly common: {
        readonly ch: import("../..").TextEntry<"ch">;
        readonly mhz: import("../..").TextEntry<"MHz">;
        readonly seconds: import("../..").TextEntry<"{n}s">;
        readonly unknown: import("../..").TextEntry<"UNKNOWN">;
        readonly unknownSignal: import("../..").TextEntry<"UNKNOWN SIGNAL">;
        readonly unresolved: import("../..").TextEntry<"UNRESOLVED">;
    } & import("../../types").TextGroup;
    readonly console: {
        readonly title: import("../..").TextEntry<"Comms">;
        readonly alertCaption: import("../..").TextEntry<"alert">;
        readonly alertLamp: {
            readonly green: "Green";
            readonly yellow: "Yellow";
            readonly red: "Red";
        } & import("../../types").TextGroup;
        readonly alertName: {
            readonly green: "GREEN";
            readonly yellow: "YELLOW";
            readonly red: "RED";
        } & import("../../types").TextGroup;
        readonly alertLabel: import("../..").TextEntry<"condition">;
        readonly jump: {
            readonly incomingHail: "incoming hail — answer";
            readonly channelOpen: "channel open — hail";
            readonly hostileUplink: "hostile uplink — counter-signal";
            readonly probeLive: "probe sweep live — radar";
        } & import("../../types").TextGroup;
        readonly signals: {
            readonly title: import("../..").TextEntry<"enemy signals">;
            readonly none: import("../..").TextEntry<"no hostile emissions on the bands">;
            readonly hostile: import("../..").TextEntry<"hostile">;
            readonly reinforcement: import("../..").TextEntry<"◍ reinforcement uplink">;
            readonly spooling: import("../..").TextEntry<"⚠ escape jump spooling">;
        } & import("../../types").TextGroup;
        readonly status: {
            readonly title: import("../..").TextEntry<"ship status">;
            readonly relay: import("../..").TextEntry<"▸ relay to the captain">;
            readonly hull: import("../..").TextEntry<"hull">;
            readonly pwr: import("../..").TextEntry<"pwr">;
            readonly core: import("../..").TextEntry<"core">;
            readonly on: import("../..").TextEntry<"ON">;
            readonly off: import("../..").TextEntry<"OFF">;
            readonly locked: import("../..").TextEntry<"LOCKED">;
            readonly shdAvg: import("../..").TextEntry<"shd avg">;
            readonly alert: import("../..").TextEntry<"alert">;
            readonly threats: import("../..").TextEntry<"threats">;
            readonly tag: {
                readonly reactor: "RCT";
                readonly engines: "ENG";
                readonly jumpDrive: "JMP";
                readonly lifeSupport: "LIF";
                readonly sensors: "SNS";
                readonly weapons: "WPN";
                readonly shields: "SHD";
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
        readonly router: {
            readonly onScreen: import("../..").TextEntry<"on screen now:">;
            readonly setBy: import("../..").TextEntry<"· set by {who}">;
            readonly channelNumber: import("../..").TextEntry<"CH{n}">;
            readonly live: import("../..").TextEntry<"live">;
            readonly channel: {
                readonly map: {
                    readonly label: import("../..").TextEntry<"Tactical map">;
                    readonly hint: import("../..").TextEntry<"the default stage">;
                } & import("../../types").TextGroup;
                readonly science: {
                    readonly label: import("../..").TextEntry<"Scan card">;
                    readonly hint: import("../..").TextEntry<"the current scan target, big">;
                } & import("../../types").TextGroup;
                readonly comms: {
                    readonly label: import("../..").TextEntry<"Comms">;
                    readonly hint: import("../..").TextEntry<"the comms channel — hails + ship's log">;
                } & import("../../types").TextGroup;
                readonly parascope: {
                    readonly label: import("../..").TextEntry<"Parascope">;
                    readonly hint: import("../..").TextEntry<"Helm's 3D flight view">;
                } & import("../../types").TextGroup;
                readonly cupola: {
                    readonly label: import("../..").TextEntry<"Cupola">;
                    readonly hint: import("../..").TextEntry<"the cupola gunner's turret view">;
                } & import("../../types").TextGroup;
            } & import("../../types").TextGroup;
            readonly channelName: {
                readonly map: "MAP";
                readonly helm: "HELM";
                readonly science: "SCIENCE";
                readonly engineering: "ENGINEERING";
                readonly comms: "COMMS";
                readonly hail: "HAIL";
                readonly parascope: "PARASCOPE";
                readonly cupola: "CUPOLA";
                readonly probe: "PROBE";
                readonly probe_radar: "PROBE_RADAR";
                readonly chart: "CHART";
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly hail: {
        readonly bank: import("../..").TextEntry<"channel bank: the Captain decides, you speak">;
        readonly empty: import("../..").TextEntry<"NOTHING ON THE COMMS BANDS.">;
        readonly emptyHint: import("../..").TextEntry<"Carriers and passive signals will appear here.">;
        readonly noCarriers: import("../..").TextEntry<"no carriers — only the signals below">;
        readonly distance: import("../..").TextEntry<"{dist}u">;
        readonly distanceSurrendered: import("../..").TextEntry<"{dist}u · surrendered">;
        readonly hailButton: import("../..").TextEntry<"hail">;
        readonly tuneButton: import("../..").TextEntry<"tune">;
        readonly passiveHeading: import("../..").TextEntry<"passive signals — transmitting, not talking">;
        readonly passiveRow: import("../..").TextEntry<"◌ {label} — {designator}">;
        readonly enemyKnown: import("../..").TextEntry<"▲ {designator} · {shipClass}">;
        readonly enemyUnknown: import("../..").TextEntry<"▲ {designator} · Unknown hostile">;
        readonly friendly: import("../..").TextEntry<"○ {designator} · {shipClass}">;
        readonly friendlyFallback: import("../..").TextEntry<"Freighter">;
        readonly derelict: import("../..").TextEntry<"◆ {designator} · Derelict">;
        readonly incoming: import("../..").TextEntry<"incoming transmission — respond to answer">;
        readonly carrierLock: import("../..").TextEntry<"ch {mhz} MHz · carrier lock">;
        readonly unidentified: import("../..").TextEntry<"unidentified">;
        readonly channelLine: import("../..").TextEntry<"ch {mhz} MHz · {faction}">;
        readonly tone: {
            readonly friendly: "FRIENDLY";
            readonly neutral: "NEUTRAL";
            readonly hostile: "HOSTILE";
        } & import("../../types").TextGroup;
        readonly acquiring: import("../..").TextEntry<"acquiring visual…">;
        readonly audioOnly: import("../..").TextEntry<"audio only — no visual">;
        readonly relay: import("../..").TextEntry<"⇢ relay to the captain. This readout is comms only.">;
        readonly receiving: import("../..").TextEntry<"receiving…">;
        readonly doctrine: import("../..").TextEntry<"the Captain decides out loud; you press">;
        readonly end: import("../..").TextEntry<"✕ end transmission">;
        readonly responseWindow: import("../..").TextEntry<"response window">;
        readonly silence: import("../..").TextEntry<"silence is an answer">;
        readonly windowLine: import("../..").TextEntry<"response window · silence is an answer">;
    } & import("../../types").TextGroup;
    readonly monitor: {
        readonly header: import("../..").TextEntry<"ch {mhz} MHz · passive monitor">;
        readonly source: import("../..").TextEntry<"source {designator}">;
        readonly unresolved: import("../..").TextEntry<"unresolved">;
        readonly rxOnly: import("../..").TextEntry<"rx only">;
        readonly onAir: import("../..").TextEntry<"on air: audio plays on the main screen (comms)">;
        readonly silent: import("../..").TextEntry<"nothing to say back; it isn't talking to you">;
        readonly drop: import("../..").TextEntry<"✕ drop channel">;
    } & import("../../types").TextGroup;
    readonly strip: {
        readonly title: import("../..").TextEntry<"signal spectrum">;
        readonly axisMhz: import("../..").TextEntry<"{hi} MHz">;
        readonly monitoring: import("../..").TextEntry<{
            readonly one: "MONITORING · {count} CARRIER";
            readonly other: "MONITORING · {count} CARRIERS";
        }>;
        readonly incoming: import("../..").TextEntry<"◍ INCOMING CARRIER">;
        readonly lock: import("../..").TextEntry<"CARRIER LOCK · {speaker}">;
        readonly destabilizing: import("../..").TextEntry<"⚠ CARRIER DESTABILIZING">;
        readonly stable: import("../..").TextEntry<"CARRIER STABLE">;
    } & import("../../types").TextGroup;
    readonly jam: {
        readonly idle: import("../..").TextEntry<"counter-signal · no hostile uplink">;
        readonly title: import("../..").TextEntry<"counter-signal // freq-hop chase">;
        readonly strength: import("../..").TextEntry<"JAM STRENGTH J">;
        readonly blocked: import("../..").TextEntry<"BLOCKED {pct}%">;
        readonly uplink: import("../..").TextEntry<"ENEMY UPLINK">;
        readonly chance: import("../..").TextEntry<"REINF CHANCE {pct}%">;
        readonly callEnds: import("../..").TextEntry<"CALL ENDS">;
        readonly callTimer: import("../..").TextEntry<"T-{n}s">;
        readonly target: import("../..").TextEntry<"TGT {designator} · UPLINK">;
        readonly outOfRange: import("../..").TextEntry<"⚠ SIGNAL OUT OF RANGE">;
        readonly locked: import("../..").TextEntry<"◉ LOCK">;
        readonly seeking: import("../..").TextEntry<"◌ SEEKING">;
        readonly outOfRangeHint: import("../..").TextEntry<"caller beyond jammer reach; feed the SENSORS to extend it">;
        readonly dragHint: import("../..").TextEntry<"DRAG to steer the jammer onto the bright enemy carrier · hold the LOCK">;
    } & import("../../types").TextGroup;
    readonly intercepts: {
        readonly title: import("../..").TextEntry<"◍ sigint — ears on the void">;
        readonly none: import("../..").TextEntry<"monitoring — no intercepts">;
        readonly unknownSource: import("../..").TextEntry<"unknown source">;
        readonly footer: import("../..").TextEntry<"relay what matters; the bridge can't hear this">;
    } & import("../../types").TextGroup;
    readonly radar: {
        readonly titleCompact: import("../..").TextEntry<"probe sweep">;
        readonly title: import("../..").TextEntry<"probe radar">;
        readonly noCarrier: import("../..").TextEntry<"◌ no carrier">;
        readonly ping: import("../..").TextEntry<"◉ ping">;
        readonly pingCooldown: import("../..").TextEntry<"◌ ping · {n}s">;
        readonly screen: import("../..").TextEntry<"⧉ screen">;
        readonly warning: import("../..").TextEntry<"⚠ an active ping is loud; it will hear it">;
        readonly noReturns: import("../..").TextEntry<"▸ no returns; passive sweep only">;
        readonly echoLast: import("../..").TextEntry<"◌ last echo">;
        readonly echoFresh: import("../..").TextEntry<"◍ echo">;
        readonly echoLine: import("../..").TextEntry<"{tag} · brg {brg}° · rng {rng}% · {age}">;
        readonly ageNow: import("../..").TextEntry<"now">;
        readonly ageAgo: import("../..").TextEntry<"{n}s ago">;
    } & import("../../types").TextGroup;
    readonly log: {
        readonly title: import("../..").TextEntry<"system log">;
        readonly jumpLatestUp: import("../..").TextEntry<"↑ latest">;
        readonly jumpLatestDown: import("../..").TextEntry<"↓ latest">;
        readonly jumpTitle: import("../..").TextEntry<"Jump to the latest entry">;
        readonly orderNewestFirst: import("../..").TextEntry<"↑ new">;
        readonly orderNewestLast: import("../..").TextEntry<"↓ new">;
        readonly orderNewestFirstTitle: import("../..").TextEntry<"Newest first — tap for newest last">;
        readonly orderNewestLastTitle: import("../..").TextEntry<"Newest last — tap for newest first">;
        readonly empty: import("../..").TextEntry<"NO ENTRIES.">;
        readonly counter: import("../..").TextEntry<"log {n}">;
    } & import("../../types").TextGroup;
    readonly ledger: {
        readonly title: import("../..").TextEntry<"diplomatic ledger">;
        readonly caption: import("../..").TextEntry<"the ship's word, kept by comms">;
        readonly stance: {
            readonly hostile: "hostile";
            readonly wary: "wary";
            readonly neutral: "neutral";
            readonly respected: "respected";
            readonly feared: "feared";
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
