export declare const shell: {
    readonly gameTitle: import("../..").TextEntry<"Space Couch Command">;
    readonly pageTitle: import("../..").TextEntry<"Space Couch Command — Officer Terminal">;
    readonly app: {
        readonly connecting: import("../..").TextEntry<"connecting…">;
        readonly reconnecting: {
            readonly title: import("../..").TextEntry<"RECONNECTING…">;
            readonly sub: import("../..").TextEntry<"restoring your station">;
        } & import("../../types").TextGroup;
        readonly failed: import("../..").TextEntry<"connection failed">;
        readonly back: import("../..").TextEntry<"Back">;
        readonly left: import("../..").TextEntry<"disconnected from the bridge">;
        readonly rejoin: import("../..").TextEntry<"Rejoin">;
        readonly syncing: import("../..").TextEntry<"syncing bridge…">;
    } & import("../../types").TextGroup;
    readonly header: {
        readonly link: import("../..").TextEntry<"SHIPNET LINK // SB-OS 2.4">;
    } & import("../../types").TextGroup;
    readonly run: {
        readonly sector: import("../..").TextEntry<"SEC {n}">;
        readonly demo: import("../..").TextEntry<"DEMO">;
        readonly jump: import("../..").TextEntry<"jmp">;
        readonly hail: import("../..").TextEntry<"◍ hail">;
        readonly screen: import("../..").TextEntry<"◱ screen">;
        readonly sectorClear: import("../..").TextEntry<"✦ sector clear — spool the jump drive">;
    } & import("../../types").TextGroup;
    readonly settings: {
        readonly button: import("../..").TextEntry<"settings">;
        readonly title: import("../..").TextEntry<"settings">;
        readonly options: import("../..").TextEntry<"terminal options">;
        readonly close: import("../..").TextEntry<"close settings">;
        readonly fullscreen: import("../..").TextEntry<"⛶ full screen">;
        readonly enter: import("../..").TextEntry<"enter">;
        readonly exit: import("../..").TextEntry<"exit">;
        readonly notAvailable: import("../..").TextEntry<"n/a">;
        readonly fullscreenHint: import("../..").TextEntry<"This browser can't go full screen. Add the terminal to your home screen to get the bridge without browser bars.">;
        readonly stick: import("../..").TextEntry<"🕹 probe stick">;
        readonly stickLeft: import("../..").TextEntry<"left">;
        readonly stickRight: import("../..").TextEntry<"right">;
        readonly stickHint: import("../..").TextEntry<"The Probe stick defaults to the left. Right swaps it with the action buttons.">;
        readonly exitMain: import("../..").TextEntry<"📺 main screen">;
        readonly exitLeave: import("../..").TextEntry<"⏏ leave bridge">;
        readonly exitGo: import("../..").TextEntry<"go">;
        readonly exitSure: import("../..").TextEntry<"sure?">;
        readonly exitMainHint: import("../..").TextEntry<"The main screen comes back. Your Seat on this phone is not released: it is held for you for about two minutes.">;
        readonly exitLeaveHint: import("../..").TextEntry<"You leave this bridge and land on the start screen; the host can seat you again.">;
        readonly sound: import("../..").TextEntry<"🔊 sound">;
        readonly on: import("../..").TextEntry<"on">;
        readonly off: import("../..").TextEntry<"off">;
    } & import("../../types").TextGroup;
    readonly tacMap: {
        readonly anomaly: import("../..").TextEntry<"anomaly">;
    } & import("../../types").TextGroup;
    readonly roleMeta: {
        readonly gunnerLabel: import("../..").TextEntry<"Gunner">;
        readonly helmBlurb: import("../..").TextEntry<"Steer, evade & jump">;
        readonly tacticalBlurb: import("../..").TextEntry<"Weapons & shields">;
        readonly engineeringBlurb: import("../..").TextEntry<"Power & repair">;
        readonly scienceBlurb: import("../..").TextEntry<"Scan, plot & exploit">;
        readonly commsBlurb: import("../..").TextEntry<"Alert, hail & log">;
        readonly gunnerBlurb: import("../..").TextEntry<"Man a turret — big FIRE button">;
        readonly cupolaBlurb: import("../..").TextEntry<"the 360° swivel battery — you are the point defense">;
    } & import("../../types").TextGroup;
    readonly join: {
        readonly bootLine: import("../..").TextEntry<"SB-OS 2.4 // SHIPNET TERMINAL">;
        readonly linkLine: import("../..").TextEntry<"LINK ESTABLISHED: AWAITING OFFICER ID">;
        readonly subtitle: import("../..").TextEntry<"officer terminal">;
        readonly roomCode: import("../..").TextEntry<"Room code">;
        readonly roomCodePlaceholder: import("../..").TextEntry<"ABCD">;
        readonly yourName: import("../..").TextEntry<"Your name">;
        readonly namePlaceholder: import("../..").TextEntry<"Officer">;
        readonly board: import("../..").TextEntry<"Board ship">;
        readonly hint: import("../..").TextEntry<"Scan the QR on the viewscreen, or type the room code shown on the TV.">;
        readonly hintStreamer: import("../..").TextEntry<"Streamer mode hides the code on the TV. Join with the link the host shared.">;
    } & import("../../types").TextGroup;
    readonly boot: {
        readonly rows: {
            readonly header: import("../..").TextEntry<"SB-OS 2.4 // {station}">;
            readonly observerDeck: import("../..").TextEntry<"OBSERVER DECK">;
            readonly powerBus: import("../..").TextEntry<"POWER BUS">;
            readonly ok: import("../..").TextEntry<"OK">;
            readonly crtPhosphor: import("../..").TextEntry<"CRT PHOSPHOR">;
            readonly warm: import("../..").TextEntry<"WARM">;
            readonly shipnetUplink: import("../..").TextEntry<"SHIPNET UPLINK">;
            readonly sync: import("../..").TextEntry<"SYNC">;
            readonly module: import("../..").TextEntry<"{duty} MODULE">;
            readonly online: import("../..").TextEntry<"ONLINE">;
            readonly phaserBank: import("../..").TextEntry<"PHASER BANK">;
            readonly charging: import("../..").TextEntry<"CHARGING">;
            readonly selfTest: import("../..").TextEntry<"CONSOLE SELF-TEST">;
            readonly pass: import("../..").TextEntry<"PASS">;
            readonly stationBinding: import("../..").TextEntry<"STATION BINDING">;
            readonly none: import("../..").TextEntry<"NONE">;
            readonly readOnlyFeed: import("../..").TextEntry<"READ-ONLY FEED">;
            readonly live: import("../..").TextEntry<"LIVE">;
        } & import("../../types").TextGroup;
        readonly ready: {
            readonly title: import("../..").TextEntry<"◉ CONSOLE READY">;
            readonly waiting: import("../..").TextEntry<"waiting on crew ({ready}/{total})">;
            readonly standingBy: import("../..").TextEntry<"{station} standing by">;
            readonly mainScreen: import("../..").TextEntry<"▸ the main screen can start for everyone">;
        } & import("../../types").TextGroup;
        readonly selfTestTitle: import("../..").TextEntry<"◉ power-on self-test">;
        readonly hold: import("../..").TextEntry<"hold anywhere — report ready">;
        readonly crewReady: import("../..").TextEntry<"crew ready {ready}/{total}">;
        readonly crewSeated: import("../..").TextEntry<"{crew} · the main screen can start for everyone">;
        readonly spectator: import("../..").TextEntry<"spectator feed — no ready check needed">;
        readonly crewSpectator: import("../..").TextEntry<"{crew} · the bridge starts when all report">;
    } & import("../../types").TextGroup;
    readonly game: {
        readonly unknownDuty: import("../..").TextEntry<"Unknown duty. Watch the viewscreen.">;
        readonly jumping: {
            readonly title: import("../..").TextEntry<"JUMPING…">;
            readonly sub: import("../..").TextEntry<"hold on to something">;
        } & import("../../types").TextGroup;
        readonly demoComplete: {
            readonly title: import("../..").TextEntry<"DEMO COMPLETE">;
            readonly sub: import("../..").TextEntry<"Four sectors, one bridge, one couch.">;
        } & import("../../types").TextGroup;
        readonly shipLost: {
            readonly title: import("../..").TextEntry<"SHIP LOST">;
            readonly sub: import("../..").TextEntry<"The bridge goes dark.">;
        } & import("../../types").TextGroup;
        readonly summary: {
            readonly sectors: import("../..").TextEntry<"sectors">;
            readonly sector: import("../..").TextEntry<"sector">;
            readonly kills: import("../..").TextEntry<"kills">;
            readonly coloniesSaved: import("../..").TextEntry<"colonies saved">;
            readonly banked: import("../..").TextEntry<"banked">;
        } & import("../../types").TextGroup;
        readonly bankedNote: import("../..").TextEntry<"salvage banked to the ship's account: total">;
        readonly wishlist: import("../..").TextEntry<"◈ WISHLIST ON STEAM">;
        readonly restart: import("../..").TextEntry<"↻ RESTART RUN">;
        readonly returnToLobby: import("../..").TextEntry<"⌂ RETURN TO LOBBY">;
        readonly noStation: import("../..").TextEntry<"NO STATION">;
        readonly modFiles: import("../..").TextEntry<"DOWNLOADING MOD FILES · {percent}%">;
        readonly pickSeat: import("../..").TextEntry<"Take an open chair. Manned stations stay locked until the lobby.">;
        readonly manned: import("../..").TextEntry<"manned — {name}">;
        readonly reconnectingSeat: import("../..").TextEntry<"RECONNECTING ({name}) — tap to take over">;
        readonly vacant: import("../..").TextEntry<"vacant — tap to man">;
        readonly rejoinNote: import("../..").TextEntry<"Rejoined under your old name? Your chair re-binds automatically on boarding.">;
    } & import("../../types").TextGroup;
    readonly lobby: {
        readonly header: import("../..").TextEntry<"SHIPNET LINK // BRIDGE CREW">;
        readonly hull: import("../..").TextEntry<"Hull">;
        readonly ship: import("../..").TextEntry<"SHIP: {name}">;
        readonly crew: import("../..").TextEntry<"crew {n}">;
        readonly hullSelect: import("../..").TextEntry<"◀ the main screen selects the hull ▶">;
        readonly savedShips: import("../..").TextEntry<{
            readonly one: "{count} saved ship — continue from the viewscreen";
            readonly other: "{count} saved ships — continue from the viewscreen";
        }>;
        readonly savedShip: import("../..").TextEntry<"{name} · sec {sector} · {shipClass}">;
        readonly crewUnrecorded: import("../..").TextEntry<"crew unrecorded">;
        readonly codeHidden: import("../..").TextEntry<"••••">;
        readonly selectDuty: import("../..").TextEntry<"select duty station">;
        readonly optional: import("../..").TextEntry<"optional">;
        readonly required: import("../..").TextEntry<"required">;
        readonly needsLine: import("../..").TextEntry<"⚠ needed to launch: {seats}">;
        readonly switchHint: import("../..").TextEntry<"tap an open station to switch">;
        readonly cannoneerNote: import("../..").TextEntry<"for young crew · joins a crewed ship">;
        readonly swivel: import("../..").TextEntry<"360° swivel turret">;
        readonly reconnecting: import("../..").TextEntry<"reconnecting…">;
        readonly open: import("../..").TextEntry<"● open">;
        readonly tapToLeave: import("../..").TextEntry<"tap to leave">;
        readonly ready: import("../..").TextEntry<"Ready ✓">;
        readonly markReady: import("../..").TextEntry<"Mark ready">;
        readonly waiting: import("../..").TextEntry<"Waiting for the host to launch on the viewscreen.">;
        readonly modded: import("../..").TextEntry<"MODDED ROOM · {names}">;
        readonly modFiles: import("../..").TextEntry<"LOADING MOD FILES · {percent}%">;
        readonly stats: {
            readonly hull: import("../..").TextEntry<"hull">;
            readonly power: import("../..").TextEntry<"pwr">;
            readonly speed: import("../..").TextEntry<"spd">;
            readonly beam: import("../..").TextEntry<"beam">;
            readonly gun: import("../..").TextEntry<"gun">;
            readonly tube: import("../..").TextEntry<"tube">;
            readonly torp: import("../..").TextEntry<"torp">;
        } & import("../../types").TextGroup;
        readonly modules: {
            readonly mergedFireControl: import("../..").TextEntry<"merged fire-control">;
            readonly flareDefense: import("../..").TextEntry<"flare defense">;
            readonly autoJammer: import("../..").TextEntry<"auto-jammer {pct}%">;
            readonly autoRepair: import("../..").TextEntry<"auto-repair {pct}%">;
            readonly autoVent: import("../..").TextEntry<"auto-vent">;
        } & import("../../types").TextGroup;
        readonly outfitting: {
            readonly title: import("../..").TextEntry<"outfitting">;
            readonly hint: import("../..").TextEntry<"outfitting is on the viewscreen; the host equips the ship">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly takeover: {
        readonly bridge: import("../..").TextEntry<"bridge">;
        readonly bridgeAria: import("../..").TextEntry<"Step out to the bridge. The Probe holds still.">;
        readonly state: {
            readonly landing: import("../..").TextEntry<"landing">;
            readonly live: import("../..").TextEntry<"probe live">;
            readonly liveShort: import("../..").TextEntry<"live">;
            readonly extracting: import("../..").TextEntry<"extracting">;
            readonly lost: import("../..").TextEntry<"signal lost">;
            readonly recovered: import("../..").TextEntry<"recovered">;
        } & import("../../types").TextGroup;
        readonly swap: {
            readonly toRadar: import("../..").TextEntry<"radar">;
            readonly toPilot: import("../..").TextEntry<"pilot">;
            readonly toRadarAria: import("../..").TextEntry<"Swap to the radar. The stick stays live.">;
            readonly toPilotAria: import("../..").TextEntry<"Swap to the pilot view">;
        } & import("../../types").TextGroup;
        readonly stick: {
            readonly aria: import("../..").TextEntry<"Probe stick: drag to fly, release to stop">;
            readonly hint: import("../..").TextEntry<"drag to fly · release stops">;
        } & import("../../types").TextGroup;
        readonly standby: import("../..").TextEntry<"standby">;
        readonly abort: import("../..").TextEntry<"abort">;
        readonly hold: import("../..").TextEntry<"hold">;
        readonly abortAria: import("../..").TextEntry<"Abort the Probe: press and hold">;
        readonly chip: {
            readonly hail: import("../..").TextEntry<"hail">;
            readonly outage: import("../..").TextEntry<"outage">;
            readonly jam: import("../..").TextEntry<"jam">;
            readonly sweep: import("../..").TextEntry<"sweep">;
            readonly intercepts: import("../..").TextEntry<"sigint">;
            readonly quiet: import("../..").TextEntry<"bridge quiet">;
        } & import("../../types").TextGroup;
        readonly back: {
            readonly live: import("../..").TextEntry<"probe live">;
            readonly liveRadar: import("../..").TextEntry<"probe live">;
            readonly resume: import("../..").TextEntry<"return">;
            readonly recovered: import("../..").TextEntry<"probe recovered">;
            readonly lost: import("../..").TextEntry<"probe lost">;
            readonly ended: import("../..").TextEntry<"mission over">;
            readonly dismiss: import("../..").TextEntry<"Dismiss">;
        } & import("../../types").TextGroup;
        readonly held: {
            readonly title: import("../..").TextEntry<"probe held">;
            readonly sub: import("../..").TextEntry<"waiting for its pilot">;
            readonly aria: import("../..").TextEntry<"The Probe is held. Return to fly it.">;
        } & import("../../types").TextGroup;
        readonly endNote: import("../..").TextEntry<"back on the bridge in a moment">;
        readonly launch: {
            readonly title: import("../..").TextEntry<"probe away">;
            readonly sub: import("../..").TextEntry<"descending · signal static">;
        } & import("../../types").TextGroup;
        readonly mission: {
            readonly chip: import("../..").TextEntry<"mission mode">;
            readonly pilot: import("../..").TextEntry<"pilot">;
            readonly radar: import("../..").TextEntry<"probe radar">;
            readonly controls: import("../..").TextEntry<"Probe controls">;
            readonly keys: import("../..").TextEntry<"w/s throttle · a/d turn · e interact · q ping">;
            readonly log: import("../..").TextEntry<"system log">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly phone: {
        readonly tab: {
            readonly ship: import("../..").TextEntry<"ship">;
            readonly sweep: import("../..").TextEntry<"sweep">;
            readonly scope: import("../..").TextEntry<"scope">;
            readonly contact: import("../..").TextEntry<"contact">;
            readonly boards: import("../..").TextEntry<"boards">;
            readonly fly: import("../..").TextEntry<"fly">;
            readonly guns: import("../..").TextEntry<"guns">;
            readonly torps: import("../..").TextEntry<"torps">;
            readonly scan: import("../..").TextEntry<"scan">;
            readonly fire: import("../..").TextEntry<"fire">;
            readonly target: import("../..").TextEntry<"target">;
            readonly power: import("../..").TextEntry<"power">;
            readonly shields: import("../..").TextEntry<"shields">;
            readonly reactor: import("../..").TextEntry<"reactor">;
            readonly repair: import("../..").TextEntry<"repair">;
            readonly hail: import("../..").TextEntry<"hail">;
            readonly signal: import("../..").TextEntry<"signal">;
            readonly status: import("../..").TextEntry<"status">;
            readonly mod: import("../..").TextEntry<"mod">;
        } & import("../../types").TextGroup;
        readonly nav: import("../..").TextEntry<"Task tabs">;
        readonly seatCode: {
            readonly ops: import("../..").TextEntry<"OPS">;
            readonly pg: import("../..").TextEntry<"PG">;
            readonly sc: import("../..").TextEntry<"S&C">;
            readonly solo: import("../..").TextEntry<"SHM">;
            readonly helm: import("../..").TextEntry<"HLM">;
            readonly gun: import("../..").TextEntry<"GUN">;
            readonly tac: import("../..").TextEntry<"TAC">;
            readonly eng: import("../..").TextEntry<"ENG">;
            readonly sci: import("../..").TextEntry<"SCI">;
            readonly com: import("../..").TextEntry<"COM">;
        } & import("../../types").TextGroup;
        readonly alertLevel: {
            readonly green: import("../..").TextEntry<"GRN">;
            readonly yellow: import("../..").TextEntry<"YEL">;
            readonly red: import("../..").TextEntry<"RED">;
        } & import("../../types").TextGroup;
        readonly hullChip: import("../..").TextEntry<"Hull {pct}%">;
        readonly alert: {
            readonly closing: import("../..").TextEntry<"probe: contact closing">;
            readonly closingSub: import("../..").TextEntry<"tap to fly">;
            readonly outage: import("../..").TextEntry<"forced outage">;
            readonly outageSub: import("../..").TextEntry<"reroute power">;
            readonly jam: import("../..").TextEntry<"uplink jammed">;
            readonly jamSub: import("../..").TextEntry<"auto-jammer">;
            readonly hailIncoming: import("../..").TextEntry<"incoming hail">;
            readonly hailIncomingSub: import("../..").TextEntry<"answer">;
            readonly hailOpen: import("../..").TextEntry<"channel open">;
            readonly hailOpenSub: import("../..").TextEntry<"hail">;
            readonly probe: import("../..").TextEntry<"probe live">;
            readonly probeSub: import("../..").TextEntry<"tap to fly">;
            readonly sweep: import("../..").TextEntry<"scan live">;
            readonly sweepSub: import("../..").TextEntry<"on the sweep">;
            readonly sectorClear: import("../..").TextEntry<"sector clear">;
            readonly sectorClearSub: import("../..").TextEntry<"spool jump">;
        } & import("../../types").TextGroup;
        readonly sector: {
            readonly open: import("../..").TextEntry<"Run status">;
            readonly title: import("../..").TextEntry<"run status">;
            readonly encounter: import("../..").TextEntry<"encounter">;
            readonly objective: import("../..").TextEntry<"objective">;
            readonly quest: import("../..").TextEntry<"quest">;
            readonly salvage: import("../..").TextEntry<"salvage">;
            readonly jump: import("../..").TextEntry<"jump drive">;
            readonly none: import("../..").TextEntry<"nothing yet">;
        } & import("../../types").TextGroup;
        readonly dock: {
            readonly sigint: import("../..").TextEntry<"sigint">;
            readonly quiet: import("../..").TextEntry<"no intercepts">;
            readonly jam: import("../..").TextEntry<"jam">;
            readonly open: import("../..").TextEntry<"Open intercepts">;
            readonly close: import("../..").TextEntry<"Close intercepts">;
        } & import("../../types").TextGroup;
        readonly alertMore: import("../..").TextEntry<"+{n}">;
        readonly log: {
            readonly lip: import("../..").TextEntry<"log">;
            readonly title: import("../..").TextEntry<"system log">;
            readonly entries: import("../..").TextEntry<{
                readonly one: "{n} entry";
                readonly other: "{n} entries";
            }>;
            readonly empty: import("../..").TextEntry<"nothing logged yet">;
            readonly open: import("../..").TextEntry<"Open log">;
            readonly close: import("../..").TextEntry<"Close log">;
        } & import("../../types").TextGroup;
        readonly help: {
            readonly open: import("../..").TextEntry<"Help for this tab">;
            readonly close: import("../..").TextEntry<"Close">;
            readonly gotIt: import("../..").TextEntry<"Got it">;
            readonly title: import("../..").TextEntry<"{tab} · help">;
            readonly ops: {
                readonly ship1: import("../..").TextEntry<"Drag a bar to set how much power a system draws. Draw is demand × priority, and free power is what the reactor has left.">;
                readonly ship2: import("../..").TextEntry<"The cut key trips a breaker and remembers the setting. Tap it again to restore. Repairs are automatic and spend salvage.">;
                readonly ship3: import("../..").TextEntry<"Spool the jump drive when the sector is clear. The dial spreads the deflector evenly across all four arcs.">;
                readonly sweep1: import("../..").TextEntry<"The sweep shows every return around the ship. Tap one to scan it. Enemies reveal target points; derelicts yield salvage.">;
                readonly sweep2: import("../..").TextEntry<"PLOT mode pushes a firing solution to Tactical: drag to aim the bearing tool. It stays up while you look at other tabs, and leaving PLOT retracts it.">;
                readonly scope1: import("../..").TextEntry<"The scope puts the scanned return on the glass. Analysis climbs while the scan holds, and finished analysis unlocks its points of interest.">;
                readonly scope2: import("../..").TextEntry<"While a Probe Mission runs, the Probe takes over your whole screen. BRIDGE steps out to these tabs, and the Probe holds still until you return.">;
                readonly contact1: import("../..").TextEntry<"A hail opens a channel. The Captain decides what to say; you press the key.">;
                readonly contact2: import("../..").TextEntry<"Signal intercepts are enemy chatter only your seat can hear. Relay them out loud before they scroll off.">;
                readonly boards1: import("../..").TextEntry<"The survey learns what an anomaly is. Ship status, the ledger and the screen router are for the Captain's questions.">;
            } & import("../../types").TextGroup;
            readonly pg: {
                readonly fly1: import("../..").TextEntry<"Drag the throttle bar, or tap a detent, for speed. Drag the dial to turn: the bow answers at the hull's turn rate, and the ORD marker leads it.">;
                readonly fly2: import("../..").TextEntry<"Tap a return on the map to lock it. ROCKETS arms the pod: then a tap on the map fires a rocket at that bearing.">;
                readonly fly3: import("../..").TextEntry<"Flares are your point defense: torpedoes ignore them, so dodge those. Engineering spools the jump drive; you engage it once it is charged.">;
                readonly guns1: import("../..").TextEntry<"A beam fires at the lock. With no lock, tap a return on the map, pick one from the list, or press NEXT to cycle through what can be locked.">;
                readonly guns2: import("../..").TextEntry<"Missiles home on the lock. Rockets fly where you tap: arm them, then tap the map on the FLY tab.">;
                readonly torps1: import("../..").TextEntry<"Set the bearing and the arm delay, load a tube, then FIRE. A torpedo flies straight along its bearing and arms after its delay.">;
                readonly torps2: import("../..").TextEntry<"A very short arm delay arms the torpedo close to your own hull: keep it above the warning. Science's PLOT solution can be loaded with one tap.">;
            } & import("../../types").TextGroup;
            readonly mod: {
                readonly panel1: import("../..").TextEntry<"These pages come from the room's mods. Each one runs in a sealed frame and cannot see your device, only the ship.">;
                readonly panel2: import("../..").TextEntry<"A mod with more than one page shows a key for each at the top of this tab.">;
            } & import("../../types").TextGroup;
            readonly helm: {
                readonly fly1: import("../..").TextEntry<"Drag the throttle bar, or tap a detent, for speed. Drag the dial to turn: the bow answers at the hull's turn rate, and the ORD marker leads it.">;
                readonly fly2: import("../..").TextEntry<"MAP shows the sector and PARASCOPE is the flight view. In the parascope the arrow keys steer and set speed, FIRE shoots the railgun once it is armed, and RECENTER brings the look back to the bow.">;
                readonly fly3: import("../..").TextEntry<"Flares are your point defense: torpedoes ignore them, so dodge those. Engineering spools the jump drive; you engage it once it is charged.">;
            } & import("../../types").TextGroup;
            readonly gun: {
                readonly fire1: import("../..").TextEntry<"Tactical picks the target and you only shoot it. FIRE lights when your bank is charged and cool, and the lock is inside beam range.">;
                readonly fire2: import("../..").TextEntry<"CHARGE is your bank filling. HEAT climbs with every shot, and a bank at 100 cannot fire until it cools.">;
            } & import("../../types").TextGroup;
            readonly tac: {
                readonly target1: import("../..").TextEntry<"Tap a return on the scope to lock it, or pick one from the list under it. NEXT cycles through everything that can be locked.">;
                readonly target2: import("../..").TextEntry<"ROCKETS arms the pod: while it is armed, a tap on the scope fires a rocket at that bearing instead of locking. Tap a point on the target card to aim at one component.">;
                readonly guns1: import("../..").TextEntry<"A beam fires at the lock. A bank a Cannoneer has taken shows the cannon tag: they pull its trigger, you watch its charge and heat.">;
                readonly guns2: import("../..").TextEntry<"Missiles home on the lock. The turrets are automatic point defense: HOLD parks one and stops its power draw.">;
            } & import("../../types").TextGroup;
            readonly eng: {
                readonly power1: import("../..").TextEntry<"Drag a bar to set how much power a system draws. Draw is demand × priority, and free power is what the reactor has left.">;
                readonly power2: import("../..").TextEntry<"The cut key trips a breaker and remembers the setting. Tap it again to restore. A forced outage needs REROUTE: priority alone will not clear it.">;
                readonly shields1: import("../..").TextEntry<"Drag an arc to spread deflector power. A bar holds what you ask for, and the charge strip above it shows what has built up.">;
                readonly reactor1: import("../..").TextEntry<"Overclock trades heat for output, and the core takes damage past the red line. VENT sheds heat in a short cycle at half output.">;
                readonly reactor2: import("../..").TextEntry<"The flux trace is demand against output. Spool the jump drive when the sector is clear, and Helm engages it once it is charged.">;
                readonly repair1: import("../..").TextEntry<"Tap a damaged system to send the repair team, and again to recall it. Repairs draw reactor power and spend salvage. Tap a system on the schematic to jump to its power row.">;
            } & import("../../types").TextGroup;
            readonly sci: {
                readonly boards1: import("../..").TextEntry<"The survey learns what an anomaly is. The list is everything out there to scan: derelicts give salvage, hostiles reveal target points, and a scanned mine is marked for the whole bridge.">;
            } & import("../../types").TextGroup;
            readonly com: {
                readonly hail1: import("../..").TextEntry<"A hail opens a channel. The Captain decides what to say and you press the key, before the response window closes.">;
                readonly hail2: import("../..").TextEntry<"With no channel open, tune a passive signal to listen in. It is for listening only: there is nothing to say back.">;
                readonly signal1: import("../..").TextEntry<"The spectrum shows every carrier in range. When an enemy calls for reinforcements, drag the jammer after its carrier to hold the call.">;
                readonly signal2: import("../..").TextEntry<"Signal intercepts are enemy chatter only your seat can hear. Relay them out loud before they scroll off.">;
                readonly status1: import("../..").TextEntry<"Set the alert posture, read ship status and the ledger out for the Captain, and put a channel on the main screen with the router.">;
            } & import("../../types").TextGroup;
            readonly solo: {
                readonly fly3: import("../..").TextEntry<"Flares are your point defense: torpedoes ignore them, so dodge those. The jump key spools the drive once the sector is clear, then engages it.">;
                readonly guns1: import("../..").TextEntry<"A beam fires at the lock. The one tube takes a torpedo or a noisemaker: set the bearing and the arm delay, load it, then FIRE.">;
                readonly scan1: import("../..").TextEntry<"Sweep, scope and boards share this tab: the keys at the top pick between them. A deep scan that is running lights SWEEP while you are elsewhere.">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
        readonly ops: {
            readonly powerTitle: import("../..").TextEntry<"power distribution">;
            readonly systemsTitle: import("../..").TextEntry<"life support · jump · deflector">;
            readonly lifeShort: import("../..").TextEntry<"life">;
            readonly ventArmed: import("../..").TextEntry<"arm">;
            readonly ventSec: import("../..").TextEntry<"{sec}s">;
        } & import("../../types").TextGroup;
        readonly boards: {
            readonly others: import("../..").TextEntry<"other returns">;
            readonly noAnomalies: import("../..").TextEntry<"no anomalies in range">;
            readonly seg: {
                readonly survey: import("../..").TextEntry<"survey">;
                readonly status: import("../..").TextEntry<"status">;
                readonly ledger: import("../..").TextEntry<"ledger">;
                readonly screen: import("../..").TextEntry<"screen">;
            } & import("../../types").TextGroup;
            readonly nav: import("../..").TextEntry<"Ship desk">;
            readonly routerTitle: import("../..").TextEntry<"screen router">;
            readonly contacts: import("../..").TextEntry<"contacts">;
            readonly noContacts: import("../..").TextEntry<"nothing to scan">;
        } & import("../../types").TextGroup;
        readonly scan: {
            readonly nav: import("../..").TextEntry<"Scan view">;
        } & import("../../types").TextGroup;
        readonly flight: {
            readonly viewNav: import("../..").TextEntry<"Picture">;
            readonly rockets: import("../..").TextEntry<"rockets ×{n}">;
            readonly rocketsArmed: import("../..").TextEntry<"armed ×{n}">;
            readonly throttleAria: import("../..").TextEntry<"Throttle">;
            readonly noLock: import("../..").TextEntry<"no lock">;
            readonly next: import("../..").TextEntry<"next">;
            readonly nextAria: import("../..").TextEntry<"Lock the next target">;
            readonly aim: import("../..").TextEntry<"aim">;
            readonly aimAria: import("../..").TextEntry<"Choose what to aim at">;
            readonly targets: import("../..").TextEntry<"targets">;
            readonly noTargets: import("../..").TextEntry<"nothing to lock">;
            readonly dist: import("../..").TextEntry<"{n}u">;
            readonly brg: import("../..").TextEntry<"bearing">;
            readonly dly: import("../..").TextEntry<"delay">;
            readonly aimTitle: import("../..").TextEntry<"torpedo aim">;
            readonly fireTitle: import("../..").TextEntry<"fire control">;
        } & import("../../types").TextGroup;
        readonly screen: import("../..").TextEntry<"Screen">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
