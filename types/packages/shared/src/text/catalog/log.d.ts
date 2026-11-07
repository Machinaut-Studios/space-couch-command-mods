export declare const log: {
    readonly testKnob: {
        readonly probeAutoLaunched: import("..").TextEntry<"TEST KNOB: probe mission auto-launched">;
    } & import("../types").TextGroup;
    readonly mods: {
        readonly summary: {
            readonly ok: import("..").TextEntry<"{missing} missing, {stale} stale, {warnings} warnings">;
            readonly unusable: import("..").TextEntry<"Cannot be used: {errors} errors">;
        } & import("../types").TextGroup;
        readonly crashed: import("..").TextEntry<"{name} stopped the game server, so it was disabled. Look for an update before you enable it again">;
        readonly restarting: import("..").TextEntry<"A Mod was removed or changed, so the game server is restarting. Everyone will reconnect in a moment">;
        readonly restartNeeded: import("..").TextEntry<"A Mod was removed or changed. Restart the game server to apply it">;
        readonly block: {
            readonly scanning: import("..").TextEntry<"CHECKING MODS...">;
            readonly copyFailed: import("..").TextEntry<"⚠ MOD FILES FAILED · SWITCH A MOD OFF IN MODS">;
            readonly gameRunning: import("..").TextEntry<"⚠ ANOTHER GAME IS RUNNING · MODS APPLY WHEN IT ENDS">;
            readonly codeLoading: import("..").TextEntry<"LOADING CODE MODS...">;
            readonly codeRestart: import("..").TextEntry<"⚠ CODE MODS CHANGED · THE SERVER MUST RESTART">;
        } & import("../types").TextGroup;
        readonly problem: {
            readonly unknownKey: import("..").TextEntry<"{key}: not a key the game has">;
            readonly placeholderAdded: import("..").TextEntry<"{key}: adds a placeholder the game does not have, so it was dropped">;
            readonly placeholderOmitted: import("..").TextEntry<"{key}: leaves out a placeholder the English has">;
            readonly pluralGap: import("..").TextEntry<"{key}: missing a plural form this language needs">;
            readonly pluralNoOther: import("..").TextEntry<"{key}: plural forms need an other form, so it was dropped">;
            readonly tooLong: import("..").TextEntry<"{key}: longer than the space allows ({max} characters)">;
            readonly hailTooLong: import("..").TextEntry<"{key}: much longer than the English hail line">;
            readonly markup: import("..").TextEntry<"{key}: contains markup, so it was dropped">;
            readonly badLeaf: import("..").TextEntry<"{key}: text must be a string or plural forms">;
            readonly badKey: import("..").TextEntry<"{key}: not a usable key">;
            readonly tooDeep: import("..").TextEntry<"{key}: nested too deeply">;
            readonly duplicateKey: import("..").TextEntry<"{key}: defined twice, the first one is used">;
            readonly stale: import("..").TextEntry<"{key}: the English changed since this was translated">;
            readonly manifest: import("..").TextEntry<"pack.json: {field} is missing or invalid">;
            readonly noUsable: import("..").TextEntry<"No usable text entries">;
            readonly fileUnreadable: import("..").TextEntry<"{file}: could not be read">;
            readonly fileBadJson: import("..").TextEntry<"{file}: is not valid JSON">;
            readonly fileTooBig: import("..").TextEntry<"{file}: is over the size limit">;
            readonly fontRejected: import("..").TextEntry<"{file}: rejected as a font">;
            readonly duplicateId: import("..").TextEntry<"Id {id} is already used by folder {folder}, so this one was skipped">;
            readonly packTooBig: import("..").TextEntry<"Too large to send to the crew's devices">;
            readonly modManifest: import("..").TextEntry<"mod.json: {field} is missing or invalid">;
            readonly unsupportedContribution: import("..").TextEntry<"{kind}: this game version cannot use this contribution yet, so it was ignored">;
            readonly badLanguageDir: import("..").TextEntry<"{dir}: not a usable language folder">;
            readonly loadOrderCycle: import("..").TextEntry<"Its load order rules form a loop, so the saved order was kept">;
            readonly missingRequirement: import("..").TextEntry<"Needs {id}, which is missing, broken or disabled">;
            readonly downloading: import("..").TextEntry<"Steam is still downloading this one. REFRESH once it has arrived">;
            readonly demoOnlyLanguage: import("..").TextEntry<"The demo can only use language Mods, so this one was not loaded">;
            readonly unknownAsset: import("..").TextEntry<"{path}: not a file the game uses, so it was ignored">;
            readonly assetRejected: import("..").TextEntry<"{file}: not a usable replacement file, so it was ignored">;
            readonly assetBudget: import("..").TextEntry<"{path}: over the room's file budget, so it was ignored">;
            readonly badPalette: import("..").TextEntry<"{what}: not a colour the game uses, so it was ignored">;
            readonly clash: import("..").TextEntry<"{what} is replaced by {by}, which loads later">;
            readonly unknownBalance: import("..").TextEntry<"{path}: not a balance number the game has, so it was ignored">;
            readonly balanceRange: import("..").TextEntry<"{path}: outside the range the game accepts, so it was ignored">;
            readonly runInProgress: import("..").TextEntry<"A game is running, so this Mod's changes wait until it ends">;
            readonly badTextKey: import("..").TextEntry<"{key}: a Mod's text keys start with mod. and its id, so this one was dropped">;
            readonly noEnglishText: import("..").TextEntry<"text: en.json is missing, so content that uses this Mod's text was ignored">;
            readonly badContent: import("..").TextEntry<"{what}: not usable content, so it was ignored">;
            readonly badReference: import("..").TextEntry<"{what}: names something that is not in the game, so it was dropped">;
            readonly codeNeedsApproval: import("..").TextEntry<"This Mod runs code on your computer. It stays off until you approve it">;
            readonly codeChanged: import("..").TextEntry<"This Mod's code changed since you approved it, so it is off until you approve it again">;
            readonly olderGame: import("..").TextEntry<"Made for game version {version}, which is older than this one, so it may not work">;
            readonly noCodeHere: import("..").TextEntry<"Mods that run code cannot run on this device, so this one was not loaded">;
            readonly codeUnsafe: import("..").TextEntry<"{file}: links and special files are not allowed in a Mod that runs code">;
            readonly codeTooBig: import("..").TextEntry<"{file}: a Mod that runs code can hold at most 8 MiB in 2000 files">;
            readonly codeMissing: import("..").TextEntry<"{file}: the code file is missing">;
            readonly codeUnreadable: import("..").TextEntry<"{file}: could not be copied">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly system: {
        readonly reactor: import("..").TextEntry<"REACTOR">;
        readonly engines: import("..").TextEntry<"ENGINES">;
        readonly jumpDrive: import("..").TextEntry<"JUMP DRIVE">;
        readonly lifeSupport: import("..").TextEntry<"LIFE SUPPORT">;
        readonly sensors: import("..").TextEntry<"SENSORS">;
        readonly weapons: import("..").TextEntry<"WEAPONS">;
        readonly shields: import("..").TextEntry<"SHIELDS">;
        readonly hull: import("..").TextEntry<"HULL">;
    } & import("../types").TextGroup;
    readonly jump: {
        readonly charged: import("..").TextEntry<"Jump drive charged — Helm may engage">;
        readonly fullSpool: import("..").TextEntry<"FULL SPOOL: the charged capacitor bleeds into the core. Jump soon, or Engineering vents through it">;
        readonly engaged: import("..").TextEntry<"Jump engaged — leaving sector {sector}">;
        readonly engagedAbandoned: import("..").TextEntry<"Jump engaged — leaving sector {sector} (objective abandoned)">;
        readonly transitOutrunsUplink: import("..").TextEntry<"Jump transit outruns the uplink, and the call fades behind us">;
        readonly lockout: import("..").TextEntry<"Jump drive lockout — the field coils refuse the order. Engineering: reroute power">;
        readonly lockoutResets: import("..").TextEntry<"The lockout resets in transit: jump static scrubs the intrusion off the bus">;
    } & import("../types").TextGroup;
    readonly redAlert: import("..").TextEntry<"RED ALERT — {reason}">;
    readonly alert: {
        readonly weaponsFire: import("..").TextEntry<"weapons fire from {designator}">;
        readonly torpedoLaunch: import("..").TextEntry<"torpedo launch from {designator}">;
        readonly missileLaunch: import("..").TextEntry<"missile launch from {designator}">;
        readonly railFire: import("..").TextEntry<"rail fire from {designator}">;
        readonly hostileClosing: import("..").TextEntry<"hostile {designator} closing">;
        readonly derelictAmbush: import("..").TextEntry<"ambush at the derelict">;
        readonly anomalyAmbush: import("..").TextEntry<"ambush at {designator}">;
        readonly voidGuardians: import("..").TextEntry<"the Void's guardians are awake">;
        readonly somethingVast: import("..").TextEntry<"something vast is awake at {designator}">;
        readonly snare: import("..").TextEntry<"the decoded signal was a snare">;
        readonly relicClaimants: import("..").TextEntry<"the cursed relic's claimants found us">;
        readonly reinforcements: import("..").TextEntry<"reinforcements answering {designator}'s call">;
        readonly sentinels: import("..").TextEntry<"the sentinel swarm has found us">;
        readonly leviathanAwake: import("..").TextEntry<"the leviathan is awake">;
    } & import("../types").TextGroup;
    readonly hostilesCleared: import("..").TextEntry<"Hostiles cleared — standing down from red alert">;
    readonly enemy: {
        readonly escapes: import("..").TextEntry<"{designator} escapes to jump — gone">;
        readonly spoolHalted: import("..").TextEntry<"{designator}'s jump drive goes dark — escape spool frozen">;
        readonly breaksOff: import("..").TextEntry<"{designator} breaks off and burns for deep space — escaped">;
        readonly torpedoLaunch: import("..").TextEntry<"TORPEDO IN THE WATER — {designator}">;
        readonly decoy: import("..").TextEntry<"{designator} spits a decoy — our fish may chase it">;
        readonly missilesInbound: import("..").TextEntry<"MISSILES INBOUND — {designator} volley away">;
        readonly railDischarge: import("..").TextEntry<"RAIL DISCHARGE — {designator} — evade the firing line!">;
        readonly destroyedAdrift: import("..").TextEntry<"{designator} destroyed adrift">;
        readonly destroyed: import("..").TextEntry<"{designator} destroyed (+{salvage} salvage)">;
        readonly destroyedTooSlow: import("..").TextEntry<"{who} destroyed — we were too slow">;
        readonly berthAway: import("..").TextEntry<"{shipClass} is AWAY — her berths ride the jump out of the fire">;
    } & import("../types").TextGroup;
    readonly auto: {
        readonly vent: import("..").TextEntry<"AUTO-VENT engaged — venting plasma, output halved for {sec}s">;
        readonly repairComplete: import("..").TextEntry<"AUTO-REPAIR complete — {system} restored">;
        readonly repairStalled: import("..").TextEntry<"AUTO-REPAIR stalled — no salvage ({system} at {pct}%)">;
    } & import("../types").TextGroup;
    readonly derelict: {
        readonly scanComplete: import("..").TextEntry<"Derelict scan complete — recovered {torpedoes} torpedoes">;
        readonly trap: import("..").TextEntry<"IT'S A TRAP — hostile contacts powering up!">;
    } & import("../types").TextGroup;
    readonly shipLost: import("..").TextEntry<"SHIP LOST in sector {sector}. {salvage} salvage banked.">;
    readonly demoComplete: import("..").TextEntry<"DEMO COMPLETE: {sectors} sectors flown, {salvage} salvage banked. Wishlist Space Couch Command to keep flying.">;
    readonly merchantArrives: import("..").TextEntry<"Guild freighter LONG HAUL warping in. The supply line caught up. Comms: hail when ready">;
    readonly freighterThanks: import("..").TextEntry<"KESTREL sends her thanks: salvage transferred">;
    readonly distressResponding: import("..").TextEntry<"Responding to KESTREL's distress call: hostiles inbound">;
    readonly objectiveComplete: import("..").TextEntry<"Objective complete: {label} (+{reward} salvage). Charge the jump drive when ready.">;
    readonly arrival: import("..").TextEntry<"Sector {sector}: {label} — {objective}">;
    readonly swarmSignatures: import("..").TextEntry<"SWARM SIGNATURES: {count} small returns moving as one organism. Guns will matter more than torpedoes">;
    readonly survey: {
        readonly unresolved: import("..").TextEntry<{
            readonly one: "SURVEY {designator} — {count} unresolved return on the scope";
            readonly other: "SURVEY {designator} — {count} unresolved returns on the scope";
        }>;
    } & import("../types").TextGroup;
    readonly nav: {
        readonly destinationCleared: import("..").TextEntry<"Destination cleared — next jump takes whatever lane is open">;
        readonly courseLaid: import("..").TextEntry<"Course laid in: the {system} system">;
        readonly courseLaidWormhole: import("..").TextEntry<"Course laid in: the {system} system — through the aperture">;
        readonly fixCharted: import("..").TextEntry<"Navigation fix: the {system} system — charted">;
        readonly fixRevisited: import("..").TextEntry<"Navigation fix: the {system} system — revisited; the neighborhood has moved on">;
    } & import("../types").TextGroup;
    readonly outage: {
        readonly decays: import("..").TextEntry<"{system} lockout decays. The intrusion pattern loses coherence">;
        readonly surgeGrounded: import("..").TextEntry<"Power surge grounded through the shield envelope. No systems lost">;
        readonly harvest: import("..").TextEntry<"HARVEST PROTOCOL — {designator} reaches into our bus and takes {system} for stock. Engineering: reroute power">;
        readonly intrusion: import("..").TextEntry<"INTRUSION BURST from {designator} — {system} lockout. Engineering: reroute power">;
        readonly anomalyFlare: import("..").TextEntry<"{designator} flares — the surge trips {system} offline. Engineering: reroute power">;
        readonly hazardEmissions: import("..").TextEntry<"{designator}'s emissions worm into the grid — {system} scrammed. Engineering: reroute power">;
        readonly strayLance: import("..").TextEntry<"A stray radiation lance scrams {system} — conduits fused. Engineering: reroute power">;
        readonly rerouteComplete: import("..").TextEntry<"REROUTE complete — {system} back on the bus">;
    } & import("../types").TextGroup;
    readonly probe: {
        readonly away: import("..").TextEntry<"Probe away toward {designator} — {remaining} remaining">;
        readonly telemetryLive: import("..").TextEntry<"Probe telemetry live — Science has the stick, Comms has the sweep (PROBE / PROBE RADAR on the main screen)">;
        readonly onPad: import("..").TextEntry<"Probe on the pad — extraction channel opening. Hold it still.">;
        readonly extractionInterrupted: import("..").TextEntry<"Extraction interrupted — the probe left the pad">;
        readonly recoveryManifest: import("..").TextEntry<{
            readonly one: "Recovery manifest — {count} salvage pod stripped to stores (+◈{pay})";
            readonly other: "Recovery manifest — {count} salvage pods stripped to stores (+◈{pay})";
        }>;
        readonly recovered: import("..").TextEntry<"Probe recovered and re-racked — good hands, Science">;
        readonly lostCaught: import("..").TextEntry<"SIGNAL LOST: the feed cuts to static. Something found it first.">;
        readonly lostAborted: import("..").TextEntry<"Probe scuttled on Science's order — SIGNAL LOST by our own hand">;
        readonly lostWrecked: import("..").TextEntry<"Probe hull zero — SIGNAL LOST in the dark">;
        readonly lostJump: import("..").TextEntry<"Jump transit snaps the probe tether — SIGNAL LOST, probe forfeited">;
        readonly signalLost: import("..").TextEntry<"SIGNAL LOST: the feed from {designator} collapses to static and stays there. Log closed, unresolved.">;
    } & import("../types").TextGroup;
    readonly outcome: {
        readonly staleSignalClue: import("..").TextEntry<"Signal coordinates match a thread SHIPNET already holds — no new data ({designator})">;
        readonly staleDecodedClue: import("..").TextEntry<"Decoded coordinates match a thread SHIPNET already holds — no new data ({designator})">;
        readonly apertureFizzles: import("..").TextEntry<"The aperture flexes… and collapses back to lensed starlight. The far mouth never resolves.">;
        readonly lurkerAnswers: import("..").TextEntry<"A lurker answers the ping: a powering-up signature off our beam">;
        readonly hullChewersEnd: import("..").TextEntry<"Damage control: the hull-chewers burn out — drain ended, plating holds">;
        readonly curseHeld: import("..").TextEntry<"Faint jump signatures loiter at the sector edge… holding off. Something out there unsettles them.">;
        readonly relicBeacon: import("..").TextEntry<"The relic's warmth was a beacon. Claimants drop out of jump, weapons hot">;
    } & import("../types").TextGroup;
    readonly contained: {
        readonly anomalyAmbush: import("..").TextEntry<"{designator}: motion trips every proximity alarm… then nothing. Whatever stirred has gone still.">;
        readonly guardians: import("..").TextEntry<"Machine signatures stir in the structure's wake… and hold at the sector edge. The song outside stays their count.">;
        readonly hatch: import("..").TextEntry<"{designator}: something vast stirs behind the hatch… and goes still. The song outside holds it.">;
        readonly snare: import("..").TextEntry<"The snare pings out into silence. Nothing answers while the song holds.">;
        readonly sentinels: import("..").TextEntry<"Jump signatures crowd the sector edge in perfect formation… and hold there. The song outside stays their count.">;
        readonly boss: import("..").TextEntry<"A vast signature crests the sector edge… and veers away. The song outside unsettles even the big things.">;
        readonly leviathan: import("..").TextEntry<"{designator} shudders in its sleep… and stills. The song outside holds it under.">;
    } & import("../types").TextGroup;
    readonly campaign: {
        readonly archiveFragment: import("..").TextEntry<"ARCHIVE FRAGMENT preserved to the ship's deep store: {total} recovered across all logs">;
        readonly longRetreat: import("..").TextEntry<"THE LONG RETREAT: new standing order, self-issued. Fall back system by system, and warn every colony the lanes still reach.">;
        readonly guardiansWake: import("..").TextEntry<"GUARDIANS: machine signatures wake across the structure's wake, moving as one. They were counting on someone coming">;
        readonly podFiled: import("..").TextEntry<"{designator} filed: STABILIZED. The lattice refuses the interface. The sleepers keep their own counsel.">;
        readonly archiveRepeats: import("..").TextEntry<"The woven record repeats what SHIPNET already holds: no new verses (the archive is patient)">;
        readonly severedRepeats: import("..").TextEntry<"The severed record replays its warning to the dark. SHIPNET holds every word already">;
    } & import("../types").TextGroup;
    readonly rep: {
        readonly killedAdrift: import("..").TextEntry<"Struck colors, killed adrift. The story is already on the raider bands, and it travels with our keel number">;
        readonly refuseWin: import("..").TextEntry<"Demand refused, demanders scrapped. The Corsair ledgers re-file this keel under EXPENSIVE">;
        readonly guildApology: import("..").TextEntry<"A Guild apology crosses the bonded band: the 'merchant' flew their flag falsely. Family rates stand open to this crew">;
    } & import("../types").TextGroup;
    readonly uplink: {
        readonly sourceDestroyed: import("..").TextEntry<"Uplink source destroyed — call dead">;
        readonly cut: import("..").TextEntry<"Uplink cut — {designator} is running">;
        readonly transmitting: import("..").TextEntry<"{designator} is transmitting a wide-band uplink — reinforcements. {cta}">;
        readonly ctaAuto: import("..").TextEntry<"auto-jammer answering ({pct}% block)">;
        readonly ctaComms: import("..").TextEntry<"Comms: jam it">;
        readonly reinforcementsArrive: import("..").TextEntry<"⚠ REINFORCEMENTS ON THE BOARD — the call got through (blocked {pct}%)">;
        readonly callDies: import("..").TextEntry<"The call dies in static — nothing heard us (blocked {pct}%)">;
    } & import("../types").TextGroup;
    readonly boss: {
        readonly collectorDown: import("..").TextEntry<"The harvest-lattice comes apart cell by cell. Its hoard is ours (+{salvage} salvage; a sealed survey probe among the plunder, +{probes} probe)">;
        readonly leviathanDown: import("..").TextEntry<"The leviathan's song ends. The Guild honors the carcass claim (+{salvage} salvage). The log does not record whether it was worth it">;
        readonly chimeraDown: import("..").TextEntry<"The chimera unknits: stolen keels shear loose of the biomass (+{salvage} salvage). Somewhere, several registries close old files">;
        readonly leviathanReturn: import("..").TextEntry<"MASSIVE BIOLOGIC RETURN: {designator}. Something the size of a hab-ring drifts at the sector edge, asleep. Science will want the survey. Tactical would rather not.">;
        readonly collectorContact: import("..").TextEntry<"MASSIVE CONTACT: {designator}. A harvest-lattice unfolds against the starfield, and it has already begun indexing our hull">;
        readonly cruiserContact: import("..").TextEntry<"MASSIVE CONTACT: {designator}. A biomech cruiser peels out of the dark, keel-first and hungry">;
        readonly leviathanSurvey: import("..").TextEntry<"Survey complete. A living deep-clade leviathan, recorded end to end while it slept. The xeno-archive pays for wonder (+{salvage} salvage)">;
        readonly leviathanWakes: import("..").TextEntry<"THE LEVIATHAN WAKES: {designator} turns its whole sky-length toward us. It remembers what shot it">;
        readonly broodlings: import("..").TextEntry<"Broodlings spill from its mantle vents. SWARM signatures are multiplying">;
        readonly keens: import("..").TextEntry<"{designator} KEENS: a second brood tears free of the wound">;
        readonly startles: import("..").TextEntry<"{designator} STARTLES: sail-wings flare full and it dives for deep sky. The survey window is closing">;
        readonly grazerGone: import("..").TextEntry<"{designator} is gone: a ripple of sail-dust where the grazer was. The dark keeps its wonders from the impatient">;
    } & import("../types").TextGroup;
    readonly hazard: {
        readonly gravityShear: import("..").TextEntry<"⚠ GRAVITY SHEAR — {designator} has our keel. Helm: burn out of the well NOW">;
        readonly gravityClear: import("..").TextEntry<"Clear of {designator}'s well — the hull stops groaning">;
        readonly radiationLash: import("..").TextEntry<"RADIATION LASH — {designator}'s beam sweeps the hull ({damage} vs the facing arc)">;
        readonly veilCloses: import("..").TextEntry<"The veil closes around us, and our wake goes quiet. Seekers will struggle to find a hull this soft">;
        readonly veilOpens: import("..").TextEntry<"Out of the veil. Our signature blooms back to honest noise">;
        readonly radiationZone: import("..").TextEntry<"⚠ HIGH RADIATION ZONE — shielding degrading. Helm: return to the sector">;
        readonly radiationNominal: import("..").TextEntry<"Radiation levels nominal — back inside the sector envelope">;
        readonly radiationCollapsed: import("..").TextEntry<"RADIATION SHIELDING COLLAPSED: the crew compartments are open to the storm. All hands lost.">;
    } & import("../types").TextGroup;
    readonly front: {
        readonly rearQuiet: import("..").TextEntry<"Fleet Command's rear-line channels have gone quiet. They aren't jammed; nobody is answering. Something is happening astern of us.">;
        readonly closing: import("..").TextEntry<"⚠ The boundary astern is closing on this system. Finish what the sector demands and JUMP">;
        readonly ownsSky: import("..").TextEntry<"⚠ The boundary astern already owns half this system's sky: a survival window, not a sector. Work fast and JUMP">;
        readonly huskSeen: import("..").TextEntry<"One raider reads wrong on every band. Its plating is layered like scar tissue, and its running lights repeat a pattern that isn't theirs. Something astern is re-using ships.">;
        readonly huskPrime: import("..").TextEntry<"A LARGE machine signature rides the pack. Its telemetry repeats itself, wrong, like an echo answering an echo">;
        readonly sentinelsCome: import("..").TextEntry<"THE SENTINELS COME: {count} machine signatures drop out of jump in perfect formation, one of them LARGE. The relay's handshake was a summons">;
        readonly evacBerths: import("..").TextEntry<"{count} colony transports on the plot, berths still loading. Hold the raiders off until every clock fills">;
        readonly evacBerthsFront: import("..").TextEntry<"{count} colony transports on the plot, berths still loading. Hold the raiders off until every clock fills. The front is here: every berth counts double">;
        readonly colonyAway: import("..").TextEntry<{
            readonly one: "COLONY AWAY: {count} transport made the jump (+{pay} salvage). The Guild logs a debt of gratitude. Colonies saved this run: {saved}";
            readonly other: "COLONY AWAY: {count} transports made the jump (+{pay} salvage). The Guild logs a debt of gratitude. Colonies saved this run: {saved}";
        }>;
        readonly lastTransportDies: import("..").TextEntry<"The last transport dies on her berth clock. The colony's channel keeps transmitting for a while. Then it doesn't.">;
    } & import("../types").TextGroup;
    readonly runAbandoned: import("..").TextEntry<"Run abandoned — {salvage} salvage banked">;
    readonly returnedToLobby: import("..").TextEntry<"Returned to lobby — refit and relaunch">;
    readonly save: {
        readonly beyondDemo: import("..").TextEntry<"That save is beyond the demo — the demo covers sectors 1–{max}.">;
        readonly flies: import("..").TextEntry<"Saved run flies the {shipClass} — stations reset; take your seats and CONTINUE again">;
        readonly continues: import("..").TextEntry<"The {ship} continues from her last jump arrival in the {system} system">;
        readonly needsMods: import("..").TextEntry<"Cannot continue — this ship needs {mods}">;
        readonly modsUpdated: import("..").TextEntry<"Mods changed since this ship was saved ({mods}) — loading anyway">;
        readonly questGone: import("..").TextEntry<"The quest this run was on is not in the game any more, so it was cleared">;
    } & import("../types").TextGroup;
    readonly uncharted: import("..").TextEntry<"uncharted">;
    readonly playerBack: import("..").TextEntry<"{player} is back at their station">;
} & import("../types").TextGroup;
