export declare const defs: {
    readonly verdant_world: {
        readonly prefix: import("../..").TextEntry<"UNCHARTED BODY">;
        readonly label: import("../..").TextEntry<"Verdant world — biotic">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Atmosphere reads warm and wet. Chlorophyll analog on every band: the whole world is photosynthesizing.">;
            readonly m70: import("../..").TextEntry<"Surface resolves: reef-towers of living glass, kilometers tall, growing in patterns. The patterns repeat.">;
            readonly m100: import("../..").TextEntry<"The towers pulse in sequence as we pass overhead. SHIPNET files it as a greeting. Science files it as weather. Logging both.">;
        };
        readonly outcome: {
            readonly hullBloom: import("../..").TextEntry<"Spore-fall settles into our micrometeorite scarring and sets like weld (hull +{hull})">;
            readonly salvageCacheSmall: import("../..").TextEntry<"An aerobraking skim nets refined organics (+{salvage} salvage)">;
            readonly nothing: import("../..").TextEntry<"No landing. Some gardens are not ours to walk. Survey archived.">;
        };
    };
    readonly cinder_world: {
        readonly prefix: import("../..").TextEntry<"UNCHARTED BODY">;
        readonly label: import("../..").TextEntry<"Cinder world — dead forge">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Surface temperature nominal for slag. Tectonic scarring in perfect concentric rings. This was industry, once.">;
            readonly m70: import("../..").TextEntry<"Orbital debris ring: foundry frames, mass-driver rails, all cold. Whoever worked this forge shipped out and never came back.">;
            readonly m100: import("../..").TextEntry<"Deep radar shows the mantle hollowed into hexagonal galleries all the way down. The whole world was the forge.">;
        };
        readonly outcome: {
            readonly salvageCacheLarge: import("../..").TextEntry<"The debris ring gives up intact alloy stock (+{salvage} salvage)">;
            readonly radiationFlare: import("../..").TextEntry<"A dormant mass-driver capacitor discharges as we pass: {damage} hull across the facing arc">;
            readonly nothing: import("../..").TextEntry<"The galleries are empty. Even the ghosts clocked out. Survey archived.">;
        };
    };
    readonly shrouded_giant: {
        readonly prefix: import("../..").TextEntry<"UNCHARTED BODY">;
        readonly label: import("../..").TextEntry<"Shrouded giant — deep transmitter">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Hydrogen shroud, storm cells the size of moons. Under the noise: a carrier wave. Artificial. Patient.">;
            readonly m70: import("../..").TextEntry<"The carrier wave is indexing us: hull class, mass, weapons load. Something down there keeps very old books.">;
            readonly m100: import("../..").TextEntry<"The transmission ends with a data burst aimed straight at our array. It isn't hostile: it's a ledger of everything else in this sector.">;
        };
        readonly outcome: {
            readonly intel: import("../..").TextEntry<"The ledger decompiles clean: every hostile in the sector, tagged and typed. Sensors are lit.">;
            readonly nothing: import("../..").TextEntry<"The ledger is ciphered beyond us. We log the librarian and move on.">;
            readonly radiationFlare: import("../..").TextEntry<"A storm cell arcs to our keel as the burst ends: {damage} hull. The librarian charges a fee.">;
        };
    };
    readonly hollow_moon: {
        readonly prefix: import("../..").TextEntry<"UNCHARTED BODY">;
        readonly label: import("../..").TextEntry<"Hollow moonlet — resonant">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A cracked moonlet. Density scan says WRONG: eighty percent void, walls of perfect thickness.">;
            readonly m70: import("../..").TextEntry<"The void spaces resonate with our engine harmonics. It isn't echoing us. It's answering in kind.">;
            readonly m100: import("../..").TextEntry<"Resonance map complete: the interior is one chamber, shaped like nothing, tuned like a bell. We will not ring it twice.">;
        };
        readonly outcome: {
            readonly nothing: import("../..").TextEntry<"SHIPNET files the recording under UNRESOLVED. Some mysteries keep their own counsel.">;
            readonly intel: import("../..").TextEntry<"The bell's standing wave carries every engine note in the sector back to us. Contacts resolved.">;
            readonly salvageCacheSmall: import("../..").TextEntry<"Survey rights on a resonant body fetch a finder's fee from the Guild registry (+{salvage} salvage)">;
        };
    };
    readonly ringed_giant: {
        readonly prefix: import("../..").TextEntry<"UNCHARTED BODY">;
        readonly label: import("../..").TextEntry<"Ringed colossus — banded giant">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"The ring system runs four hundred thousand kilometers rim to rim: braided ice herded by shepherd moonlets, grinding through a billion slow collisions. The bands beneath turn like poured bronze.">;
            readonly m70: import("../..").TextEntry<"A storm older than our species rides the third band: an anticyclone the size of an ocean, amber against the ammonia. It has been closing and reopening the same eye for ten thousand years.">;
            readonly m100: import("../..").TextEntry<"Survey complete. The rings archive everything the system ever broke: moons, comets, visitors. Somewhere in the braid there is always something worth craning aboard.">;
        };
        readonly outcome: {
            readonly salvageCacheLarge: import("../..").TextEntry<"Ring-braid salvage: ice-locked wreck fragments and shepherd-moon ore, craned from the braid (+{salvage} salvage)">;
            readonly torpedoCache: import("../..").TextEntry<"A munitions pod rides the outer braid, ice-glazed and intact. Torpedo stores +{torpedoes}">;
            readonly radiationFlare: import("../..").TextEntry<"The magnetosphere snaps a whip of charged ring-dust across our bow">;
            readonly nothing: import("../..").TextEntry<"The giant keeps its rings and its weather. Survey archived. The couch will want the pictures.">;
        };
    };
    readonly icefall_comet: {
        readonly prefix: import("../..").TextEntry<"FAST RETURN">;
        readonly label: import("../..").TextEntry<"Icefall comet — long-period wanderer">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Nucleus of primordial ice, off-gassing hard on the sunward side. The tail runs a thousand kilometers of glitter behind it. It is not slowing down for us.">;
            readonly m70: import("../..").TextEntry<"Spectrometry through the coma shows water ice, methane and organics, and a vein of something refined. This snowball has hit things and kept the pieces.">;
            readonly m100: import("../..").TextEntry<"Full series in the can. It has been falling since before the colonies, and it will still be falling when the log is dust. Match velocity if you want what it carries.">;
        };
        readonly outcome: {
            readonly salvageCacheSmall: import("../..").TextEntry<"Volatile ices flash-processed in the hold. The Guild pays for clean reaction mass (+{salvage} salvage)">;
            readonly probeCache: import("../..").TextEntry<"An old survey probe rides the nucleus, ice-welded and dormant. Refit crews recover +{probes} probes">;
            readonly nothing: import("../..").TextEntry<"It keeps falling. We keep flying. The pictures alone were worth the chase.">;
        };
    };
    readonly leviathan_husk: {
        readonly prefix: import("../..").TextEntry<"MASSIVE RETURN">;
        readonly label: import("../..").TextEntry<"Leviathan husk — deep-clade">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Organic hull, grown not built. The Vel'Shaar clade-markers are wrong. Older. A deep-clade the envoys don't sing about.">;
            readonly m70: import("../..").TextEntry<"Wound analysis: it died fighting. The weapon that opened its flank is in no SHIPNET registry. It fled here to die.">;
            readonly m100: import("../..").TextEntry<"Heart-chambers cold. Marrow-holds sealed honestly. Whatever killed it never got inside.">;
        };
        readonly outcome: {
            readonly salvageCacheLarge: import("../..").TextEntry<"The marrow-holds open to a patient hand: dense biometal, intact (+{salvage} salvage)">;
            readonly ambush: import("../..").TextEntry<"Movement in the wound channels. Scavengers were nesting in the carcass, and we woke them.">;
            readonly torpedoCache: import("../..").TextEntry<"Bone-racks hold crystallized ordnance: {torpedoes} warshots adapted to our tubes.">;
            readonly nothing: import("../..").TextEntry<"The husk keeps its dead. We seal the survey and let it drift.">;
        };
    };
    readonly precursor_ring: {
        readonly prefix: import("../..").TextEntry<"GEOMETRIC RETURN">;
        readonly label: import("../..").TextEntry<"Precursor ring — fractured">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A broken ring, far too regular to be rock. Material returns no spectrum SHIPNET has a name for.">;
            readonly m70: import("../..").TextEntry<"The fracture faces are polished. It wasn't broken; it was closed. Something didn't want this door used twice.">;
            readonly m100: import("../..").TextEntry<"The inner face repeats one glyph-chain a million times. Best translation: an arrow, pointing away. From what?">;
        };
        readonly outcome: {
            readonly intel: import("../..").TextEntry<"A dormant sentry lattice wakes for one sweep and hands us its eyes. Every contact resolved.">;
            readonly salvageCacheSmall: import("../..").TextEntry<"Fracture spall is refinable. Exotic stock recovered (+{salvage} salvage)">;
            readonly nothing: import("../..").TextEntry<"The ring gives nothing else. The arrow points away. We take the hint.">;
        };
    };
    readonly guild_cache: {
        readonly prefix: import("../..").TextEntry<"CARGO CLUSTER">;
        readonly label: import("../..").TextEntry<"Guild cargo pods — jettisoned">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Cargo pods in a slow spiral, transponders stripped. Free Haulers jettison pattern: dumped in a hurry, meant to be found.">;
            readonly m70: import("../..").TextEntry<"Pod seals intact. Guild manifest ghosts recoverable. Owner: whoever asks the dark first.">;
            readonly m100: import("../..").TextEntry<"Manifest decrypts: 'IF FOUND, KEEP IT. BETTER YOU THAN THEM.' The Guild writes honest ledgers.">;
        };
        readonly outcome: {
            readonly salvageCacheSmall: import("../..").TextEntry<"Pods cracked and craned aboard (+{salvage} salvage). Better us than them.">;
            readonly torpedoCache: import("../..").TextEntry<"One pod is a Guild munitions crate: {torpedoes} torpedoes in transit cradles">;
            readonly probeCache: import("../..").TextEntry<"One pod is a Guild survey kit with seals unbroken: {probes} probe re-slotted for our bay">;
            readonly ambush: import("../..").TextEntry<"Claim-jumpers were parked dark in the spiral, waiting for someone else to do the opening">;
        };
    };
    readonly siren_wreck: {
        readonly prefix: import("../..").TextEntry<"AUTOMATED ALL-CLEAR">;
        readonly label: import("../..").TextEntry<"Wreck — false transponder">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A wreck broadcasting a Guild ALL-CLEAR on loop. For the record, wrecks don't usually report themselves fine.">;
            readonly m70: import("../..").TextEntry<"Transponder checksum fails. The all-clear is spliced from three different ships. Somebody composed this lullaby.">;
            readonly m100: import("../..").TextEntry<"Under the loop, a second channel: a tally. It has counted forty-one approaches before ours.">;
        };
        readonly outcome: {
            readonly ambush: import("../..").TextEntry<"The lullaby stops mid-note. Powering-up signatures all around us: the tally wanted a round number">;
            readonly salvageCacheSmall: import("../..").TextEntry<"The bait was seeded with real cargo. We swept it aboard fast (+{salvage} salvage)">;
            readonly nothing: import("../..").TextEntry<"The trap is long abandoned; only its patience is left. We add ourselves to the tally and leave.">;
        };
    };
    readonly molt_husk: {
        readonly prefix: import("../..").TextEntry<"ORGANIC RETURN">;
        readonly label: import("../..").TextEntry<"Vel'Shaar molt-husk">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Organic lattice, hollow, kilometer-scale. Vel'Shaar clade-song reads dormant: this is no ship, it's a shed skin.">;
            readonly m70: import("../..").TextEntry<"The molt still carries living weld-spores in its seams. The Vel'Shaar leave nothing behind by accident.">;
            readonly m100: import("../..").TextEntry<"Clade-marker translation: a gift-glyph. The deep leaves its old coats where the cold ones drift.">;
        };
        readonly outcome: {
            readonly hullBloom: import("../..").TextEntry<"Weld-spores migrate to our seams and set. Plating mended (hull +{hull})">;
            readonly intel: import("../..").TextEntry<"The husk's sensory pits still function. Borrowing them lights every hunter in the dark.">;
            readonly nothing: import("../..").TextEntry<"The spores sleep too deep to wake. We log the gift we couldn't take.">;
        };
    };
    readonly radiant_rift: {
        readonly prefix: import("../..").TextEntry<"SENSOR ANOMALY">;
        readonly label: import("../..").TextEntry<"Radiant rift — spatial shear">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A seam of light where space folds wrong. The instruments disagree about its distance. All of them.">;
            readonly m70: import("../..").TextEntry<"The rift's edge sheds charged plumes on a slow cycle. Beautiful, and ionizing. Crew off the observation glass.">;
            readonly m100: import("../..").TextEntry<"For one frame of the scan, the rift showed a starfield that is not ours. Archived. Flagged. Not discussed.">;
        };
        readonly outcome: {
            readonly radiationFlare: import("../..").TextEntry<"A plume snaps across our bow: {damage} hull ablated. Risky science.">;
            readonly intel: import("../..").TextEntry<"Refraction through the shear bends the whole sector into focus. Every contact resolved.">;
            readonly nothing: import("../..").TextEntry<"The rift closes its eye. The survey holds more questions than it started with.">;
        };
    };
    readonly munitions_grave: {
        readonly prefix: import("../..").TextEntry<"DEBRIS FIELD">;
        readonly label: import("../..").TextEntry<"War-cache — scuttled munitions">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Drifting ordnance casings, decades cold. Fleet scuttle pattern: someone ended a war out here and dumped the leftovers.">;
            readonly m70: import("../..").TextEntry<"Casing serials burn-filed. Warheads inert... mostly. Handling protocol: gently.">;
            readonly m100: import("../..").TextEntry<"Cache core reached: stabilized warshots in Guild-compatible cradles. The war is over. Ammunition keeps.">;
        };
        readonly outcome: {
            readonly torpedoCache: import("../..").TextEntry<"Recovered ordnance winched aboard: {torpedoes} torpedoes re-cradled for our tubes.">;
            readonly radiationFlare: import("../..").TextEntry<"A degraded warhead cooks off during extraction: {damage} hull across the facing arc.">;
            readonly nothing: import("../..").TextEntry<"Every cradle we reach is spent. Someone gentler got here first.">;
        };
    };
    readonly wormhole_aperture: {
        readonly prefix: import("../..").TextEntry<"LENSING RETURN">;
        readonly label: import("../..").TextEntry<"Wormhole aperture — frozen starlight">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A ring of light hangs where no mass should be: starlight, bent and held. The stars inside the ring are years older than the sky around them.">;
            readonly m70: import("../..").TextEntry<"The lens is a throat. Something keeps it open: the survey reads structure in the curvature, patient as architecture.">;
            readonly m100: import("../..").TextEntry<"Aperture charted and slaved to the nav plot. The far mouth is real, and it is far. The bridge will hold for as long as we care to use it.">;
        };
        readonly outcome: {
            readonly wormhole: import("../..").TextEntry<"The aperture stabilizes. The far mouth resolves in the {system} system. Helm may jump the bridge.">;
        };
    };
    readonly ghost_signal: {
        readonly prefix: import("../..").TextEntry<"REPEATING SIGNAL">;
        readonly label: import("../..").TextEntry<"Ghost beacon — repeating">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A distress pattern on a dead band, repeating. The encryption is Guild-standard... six revisions obsolete.">;
            readonly m70: import("../..").TextEntry<"The pattern degrades mid-loop and restarts. That's not a beacon cycling. That's a beacon failing. It has been calling a long time.">;
            readonly m100: import("../..").TextEntry<"The signal repeats... it's old. Origin triangulated: one jump out. Someone is still waiting to be found.">;
        };
        readonly outcome: {
            readonly questClue: import("../..").TextEntry<"Coordinates decoded and slaved to the jump plot. Thread GHOST BEACON is open">;
            readonly nothing: import("../..").TextEntry<"The loop collapses into static before the origin resolves. The dark keeps this one.">;
        };
    };
    readonly beacon_wreck: {
        readonly prefix: import("../..").TextEntry<"COLD RETURN">;
        readonly label: import("../..").TextEntry<"Silent vessel — beacon source">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"There it is. A hull of grown chitin, engines dark, keel snapped by something patient. The beacon still cries from a dead throat.">;
            readonly m70: import("../..").TextEntry<"Interior sweep: crew spaces sealed from the inside. They rationed, and they waited. The math on the bulkheads counts nine hundred days.">;
            readonly m100: import("../..").TextEntry<"The last log-glyph, scorched into the throat of the beacon, reads: WE HELD. The holds are intact. Release the survey drones.">;
        };
        readonly outcome: {
            readonly salvageCacheLarge: import("../..").TextEntry<"The holds crack open clean: refined alloys, sealed cores (+{salvage} salvage)">;
            readonly ambush: import("../..").TextEntry<"The beacon wasn't only calling us. Salvage-runners drop in hot with claim-charges armed">;
        };
    };
    readonly sleeper_vault: {
        readonly prefix: import("../..").TextEntry<"WORKED-STONE RETURN">;
        readonly label: import("../..").TextEntry<"Precursor vault — the sleeper seam">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A seam of worked stone a kilometer long, stitched shut with metal that predates every catalog. The relic's coordinates end here.">;
            readonly m70: import("../..").TextEntry<"Seismic return: the seam is hollow, and the hollow is warm. Power still cycles in there, slow as a sleeping pulse.">;
            readonly m100: import("../..").TextEntry<"Survey complete. One access point: a core node breathing under the seam. The vault will open for a tap. Nothing in the survey says what closes it.">;
        };
        readonly outcome: {
            readonly nothing: import("../..").TextEntry<"The seam holds its breath. The core node waits on our nerve.">;
            readonly intel: import("../..").TextEntry<"Cresting the seam, our sensors ride its watch-lattice for one sweep. Every contact in the sector resolves">;
        };
        readonly poiOutcome: {
            readonly core: {
                readonly salvageVault: import("../..").TextEntry<"The core opens like a seed-vault: precursor stock beyond honest appraisal (+{salvage} salvage)">;
                readonly awakening: import("../..").TextEntry<"The seam was never a vault. It was a cradle, and the tap reads as a birth-cry. The GUARDIAN wakes">;
            };
        };
    };
    readonly debris_heart: {
        readonly prefix: import("../..").TextEntry<"DENSE CORE RETURN">;
        readonly label: import("../..").TextEntry<"Foundry hulk — the storm's heart">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Every rock in this storm assays the same: slag, one pour, one furnace. The furnace is still ahead of us.">;
            readonly m70: import("../..").TextEntry<"Resolve: a foundry ship, broken-backed, holds still shedding. The storm isn't weather. It's a wound that never clotted.">;
            readonly m100: import("../..").TextEntry<"Survey complete. The forge-hold is cold and sealed, but one retrieval seam reads INTACT. Whatever she was pouring when she broke is still in there.">;
        };
        readonly outcome: {
            readonly nothing: import("../..").TextEntry<"The hulk holds its heading through its own debris, dead center of the storm it made.">;
            readonly salvageCacheLarge: import("../..").TextEntry<"The survey pass skims her outer spill: graded foundry stock, free-floating (+{salvage} salvage)">;
        };
        readonly poiOutcome: {
            readonly relic: {
                readonly salvageVault: import("../..").TextEntry<"The seam opens on the last pour, cooled in its cradle: alloy beyond honest appraisal (+{salvage} salvage)">;
                readonly salvageJackpot: import("../..").TextEntry<"The probe walks the seam and lifts ingot after ingot, each one stamped with a dead fleet's mark (+{salvage} salvage)">;
                readonly torpedoes: import("../..").TextEntry<"The seam isn't holding ingots. It's a magazine, dry-racked and intact: {torpedoes} torpedoes re-tubed">;
                readonly awakening: import("../..").TextEntry<"The pour never finished. The crew stopped it and welded the hold shut from outside. The seam opens. Something pours out">;
            };
        };
    };
    readonly ice_moon: {
        readonly prefix: import("../..").TextEntry<"UNCHARTED BODY">;
        readonly label: import("../..").TextEntry<"Ice moon — cryovolcanic">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A shell of blue-white ice, fracture-scarred pole to pole. Under the crust: liquid. Warm liquid. Something is keeping it warm.">;
            readonly m70: import("../..").TextEntry<"Cryo-geysers vent on a slow rhythm, too slow for tides and too regular for weather. The subsurface sea has a heartbeat.">;
            readonly m100: import("../..").TextEntry<"Deep sonar returns from under the ice: long shapes, moving with intent, keeping pace with our orbit. The sea is watching us back. Survey sealed.">;
        };
        readonly outcome: {
            readonly salvageCacheSmall: import("../..").TextEntry<"A geyser throws refined brine-metals clear of the gravity well. They're skimmed and racked (+{salvage} salvage)">;
            readonly radiationFlare: import("../..").TextEntry<"A cryo-plume detonates off our bow: flash-frozen shrapnel across the facing arc ({damage} hull)">;
            readonly nothing: import("../..").TextEntry<"The ice keeps its sea and the sea keeps its shapes. We keep our distance. Survey archived.">;
        };
    };
    readonly worldring: {
        readonly prefix: import("../..").TextEntry<"COLOSSAL RETURN">;
        readonly label: import("../..").TextEntry<"Worldring — habitable band">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"The return is a ring: a band of worked matter wide enough to walk continents on, spinning for gravity. Nobody builds this. Somebody built this.">;
            readonly m70: import("../..").TextEntry<"The inner face holds soil, dry seas, and cities gone to glass. Atmosphere retention walls still stand. The lights are off but the floor is warm.">;
            readonly m100: import("../..").TextEntry<"Spin-bearing analysis: the ring has been decelerating for ten thousand years. Somebody is letting it wind down gently. A long goodbye, tended by something patient.">;
        };
        readonly outcome: {
            readonly salvageCacheLarge: import("../..").TextEntry<"A retainer-wall breach gives up structural alloy no forge of ours can pour (+{salvage} salvage)">;
            readonly intel: import("../..").TextEntry<"The ring's traffic lattice still watches its sky, and for one sweep, so do we. Every contact resolved">;
            readonly radiationFlare: import("../..").TextEntry<"A spin-bearing arcs as we cross its shadow. Discharge rakes the facing arc ({damage} hull)">;
            readonly nothing: import("../..").TextEntry<"Ten thousand years of goodbye, and we are not part of it. Survey archived with respect.">;
        };
    };
    readonly war_sphere: {
        readonly prefix: import("../..").TextEntry<"COLOSSAL RETURN">;
        readonly label: import("../..").TextEntry<"Battle sphere — cold fortress">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A sphere of armor a hundred ships across, dark on every band. The equatorial trench is a weapons row. All of it is pointed at nothing now.">;
            readonly m70: import("../..").TextEntry<"The focus dish at the crown could crack a moon. Capacitor banks read spent, not drained. This fortress fired everything it had, once.">;
            readonly m100: import("../..").TextEntry<"Battle ledger recovered from the trench: it fired everything, at everything, and when it was done it was alone. The garrison walked into the dark rather than count the cost. Holds intact.">;
        };
        readonly outcome: {
            readonly torpedoCache: import("../..").TextEntry<"The magazine decks hold stabilized warshots on cradles our tubes accept: {torpedoes} torpedoes recovered">;
            readonly ambush: import("../..").TextEntry<"The trench was not empty. Squatters run powered-down reactors in the gun galleries, and we just knocked on their door">;
            readonly salvageCacheLarge: import("../..").TextEntry<"Armor spall from the great trench refines beautifully (+{salvage} salvage)">;
            readonly nothing: import("../..").TextEntry<"The fortress keeps its silence. Some victories should stay unexamined. Survey archived.">;
        };
    };
    readonly star_cradle: {
        readonly prefix: import("../..").TextEntry<"IMPOSSIBLE RETURN">;
        readonly label: import("../..").TextEntry<"Stellar enclosure — the star cradle">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"The sensors report a star where no star shows. It is there, caged behind a lattice of panels the size of worlds, drinking its light down to a whisper.">;
            readonly m70: import("../..").TextEntry<"The lattice is incomplete: one aperture gate stands open, wide enough for a fleet. Light pours out of it like a wound. The builders left the door open.">;
            readonly m100: import("../..").TextEntry<"Power draw analysis: the cage is not harvesting the star. It is keeping it, banked low like a hearth-fire against a winter that has not come yet. Filed under: prepare.">;
        };
        readonly outcome: {
            readonly intel: import("../..").TextEntry<"Riding the cage's collector lattice for one sweep lights the whole sector. Every contact resolved">;
            readonly salvageCacheLarge: import("../..").TextEntry<"A shed collector panel, kilometers of it, cuts down into hold-stock (+{salvage} salvage)">;
            readonly radiationFlare: import("../..").TextEntry<"The aperture gate flares as we cross its throw. Caged starlight rakes the facing arc ({damage} hull)">;
            readonly nothing: import("../..").TextEntry<"The hearth is banked and the winter has not come. We leave the door as we found it. Survey archived.">;
        };
    };
    readonly haven_station: {
        readonly prefix: import("../..").TextEntry<"STRUCTURED RETURN">;
        readonly label: import("../..").TextEntry<"Freeport ring — silent anchorage">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A wheel station on a slow, perfect spin. Docking arms extended, approach lights cycling green, with no traffic and no chatter. An open door in the dark.">;
            readonly m70: import("../..").TextEntry<"The habitat ring is pressurized and warm. Registry ghosts name it a Free Haulers waystation, abandoned in good order with its docks bonded and stores sealed. Guild custom: stocked for whoever needs it.">;
            readonly m100: import("../..").TextEntry<"The dockmaster's ledger closes with a standing entry: 'BERTH FREE. TAKE WHAT KEEPS YOU FLYING. LOG WHAT YOU TAKE. THE ROAD PROVIDES.' The road provides.">;
        };
        readonly outcome: {
            readonly salvageCacheSmall: import("../..").TextEntry<"Loose deck cargo winched across on the courtesy line (+{salvage} salvage). The road provides.">;
            readonly intel: import("../..").TextEntry<"The anchorage's traffic control still keeps honest books. Every hull it has pinged resolves on our plot">;
            readonly nothing: import("../..").TextEntry<"We log our visit in the dockmaster's ledger, as custom asks. The anchorage spins on, patient for the next keel.">;
        };
        readonly poiOutcome: {
            readonly hatch: {
                readonly salvageJackpot: import("../..").TextEntry<"The bonded dock takes our clamps like an old friend. Sealed Guild stores are released to the manifest (+{salvage} salvage)">;
                readonly salvageLarge: import("../..").TextEntry<"The freight lock cycles clean: palletized stock, ours by dock custom (+{salvage} salvage)">;
                readonly torpedoes: import("../..").TextEntry<"The quartermaster's cage holds warshots on Guild-standard cradles: {torpedoes} torpedoes re-tubed">;
            };
            readonly core: {
                readonly reactorFlush: import("../..").TextEntry<"Shore power takes our load while the tap runs. Reactor core flushed cold: +{reactor} core health">;
                readonly salvageLarge: import("../..").TextEntry<"The anchorage's fuel bunker meters us a full draw without complaint (+{salvage} salvage)">;
                readonly torpedoes: import("../..").TextEntry<"The ordnance bunker answers our tap code: {torpedoes} torpedoes craned aboard">;
            };
        };
    };
    readonly ring_pilgrim: {
        readonly prefix: import("../..").TextEntry<"COHERENT DRIVE PLUME">;
        readonly label: import("../..").TextEntry<"Ring-drive pilgrim — passing wonder">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A vessel under way: a slim hull threading a drive ring wider than a city. Its wake is clean: no exhaust, no debris, no noise. Just bent space, politely returned.">;
            readonly m70: import("../..").TextEntry<"It has seen us. The ring's light dips once, slowly and deliberately, then resumes. Cross-referencing every contact protocol on file: closest match is a bow.">;
            readonly m100: import("../..").TextEntry<"Full survey complete, and it allowed it. It held course and speed the whole read, hiding nothing. Whoever they are, they wanted to be understood. The archive will outlive us all.">;
        };
        readonly outcome: {
            readonly salvageCacheLarge: import("../..").TextEntry<"A crate detaches from the pilgrim's wake and drifts to our bow, ceremonially slow: a gift, given without a word (+{salvage} salvage)">;
            readonly intel: import("../..").TextEntry<"The pilgrim opens its charts to our array for one long moment. Every contact in the sector resolves.">;
            readonly probeCache: import("../..").TextEntry<"It returns something we lost: a survey probe, decades dead by its serial, cleaned and working (+{probes} probe). We never flew this probe.">;
            readonly nothing: import("../..").TextEntry<"The ring dips once more and the pilgrim passes on, unhurried, outbound to somewhere the charts end. Safe roads, stranger.">;
        };
    };
    readonly collapsed_star: {
        readonly prefix: import("../..").TextEntry<"GRAVITIC ANOMALY">;
        readonly label: import("../..").TextEntry<"Collapsed star — accretion furnace">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"The instruments agree on nothing near the return except this: light goes in and does not come out. Accretion ring at full furnace. Helm: mind the drift.">;
            readonly m70: import("../..").TextEntry<"The ring is chewing a captured convoy. Hull fragments are smeared into light around the horizon. Some of those keels are still signaling as they go down.">;
            readonly m100: import("../..").TextEntry<"Survey complete from a respectful arc. The well keeps what it takes. The frozen last light of everything it has eaten hangs at the horizon like a museum. We took pictures and kept our distance.">;
        };
        readonly outcome: {
            readonly intel: import("../..").TextEntry<"Gravitational lensing bends the whole sector into our array, and every contact is resolved in the well's terrible glass">;
            readonly salvageCacheLarge: import("../..").TextEntry<"Frame-dragged debris rides stable orbits at the ring's edge. A careful skim pays out (+{salvage} salvage)">;
            readonly radiationFlare: import("../..").TextEntry<"The furnace belches relativistic spray across the facing arc ({damage} hull)">;
            readonly nothing: import("../..").TextEntry<"The well holds its dead and its light. Survey archived; the helm's hands were steady.">;
        };
    };
    readonly spindle_star: {
        readonly prefix: import("../..").TextEntry<"PERIODIC EMITTER">;
        readonly label: import("../..").TextEntry<"Neutron beacon — millisecond spindle">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A dead star spun up to a scream, sweeping the sector with a radiation lash on a clockwork cycle. Every pass hammers the hull. Count the beat, Helm.">;
            readonly m70: import("../..").TextEntry<"The beat is perfect. Navigators used this spindle as a lighthouse once. Old jump-charts triangulate off it. We are somewhere ships used to be.">;
            readonly m100: import("../..").TextEntry<"Survey complete between lashes. The spindle will keep its beat for a billion years, marking a road nobody sails anymore. The lighthouse outlived its sea.">;
        };
        readonly outcome: {
            readonly intel: import("../..").TextEntry<"The lash backlights every hull in the sector like a flashbulb. Contacts resolved">;
            readonly radiationFlare: import("../..").TextEntry<"Mistimed by half a beat. The lash catches us square ({damage} hull)">;
            readonly nothing: import("../..").TextEntry<"The beat goes on, indifferent. Survey archived; our timing was good.">;
        };
    };
    readonly ember_veil: {
        readonly prefix: import("../..").TextEntry<"DIFFUSE RETURN">;
        readonly label: import("../..").TextEntry<"Emission nebula — ember veil">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A standing bank of ionized dust, lit from inside by a protostar's first light. Sensor returns soften at its skirts: ours and everyone else's.">;
            readonly m70: import("../..").TextEntry<"Inside the veil our wake goes quiet: the dust drinks our signature. A ship could hide in here. Ships have, too. The dust holds old hull-shadows like fossils.">;
            readonly m100: import("../..").TextEntry<"Survey complete. The protostar will light for real in a hundred millennia and burn this hiding place away. Until then, the veil keeps secrets for anyone quiet enough to deserve them.">;
        };
        readonly outcome: {
            readonly salvageCacheSmall: import("../..").TextEntry<"Dust-lane condensate, electrostatically caked on our hull, assays as refined stock (+{salvage} salvage)">;
            readonly probeCache: import("../..").TextEntry<"One of the fossil hull-shadows is real: a lost survey probe adrift in the lane, re-slotted for our bay (+{probes} probe)">;
            readonly nothing: import("../..").TextEntry<"The veil keeps its fossils and its quiet. We log the hiding place. A crew remembers where the covers are.">;
        };
    };
    readonly drift_medusa: {
        readonly prefix: import("../..").TextEntry<"SOFT RETURN">;
        readonly label: import("../..").TextEntry<"Void medusa — drifting gas-bag">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"The return has no hull. It breathes: a translucent bell the size of a corvette, pulsing on the solar wind, trailing kilometers of glowing frond.">;
            readonly m70: import("../..").TextEntry<"It is grazing the sector's dust lane, harmless as weather. The fronds sting anything that touches them, and nothing out here is foolish enough to try.">;
            readonly m100: import("../..").TextEntry<"Full biological series recorded. It drifted through our shadow as we finished, bell-light rippling, the closest thing to a greeting a gas-bag has. Logged as: neighborly.">;
        };
        readonly outcome: {
            readonly hullBloom: import("../..").TextEntry<"Sloughed bell-membrane settles over our scarring and sets like lacquer (hull +{hull})">;
            readonly salvageCacheSmall: import("../..").TextEntry<"Shed frond-lipids, cold-slotted for the Guild's xeno-desk (+{salvage} salvage)">;
            readonly nothing: import("../..").TextEntry<"It pulses on down the dust lane, unbothered. Some encounters are just two travelers passing.">;
        };
    };
    readonly crystal_choir: {
        readonly prefix: import("../..").TextEntry<"FACETED RETURN">;
        readonly label: import("../..").TextEntry<"Crystalline entity — lattice choir">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A branching lattice of living crystal, kilometers of it, growing in the open void. Every facet rings at a different pitch. Together they make a chord.">;
            readonly m70: import("../..").TextEntry<"The chord changes as we approach. Our engine harmonics are being folded into the song. It is singing about us. The feeding field at its core flexes.">;
            readonly m100: import("../..").TextEntry<"Survey complete: silicon-lattice life, mineral-rich beyond any honest seam, and it sang our hull number back to us as we left. The Guild has no form for this. Filing under both.">;
        };
        readonly outcome: {
            readonly salvageCacheLarge: import("../..").TextEntry<"Shed facets drift free of the choir: near-pure lattice stock, sung loose and gathered gently (+{salvage} salvage)">;
            readonly radiationFlare: import("../..").TextEntry<"The feeding field flexes our way. A resonance spike shears across the facing arc ({damage} hull)">;
            readonly nothing: import("../..").TextEntry<"The choir sings on, indifferent to appraisal. We leave before it learns our whole song.">;
        };
    };
    readonly solar_grazer: {
        readonly prefix: import("../..").TextEntry<"BIOLOGIC RETURN">;
        readonly label: import("../..").TextEntry<"Stellar manta — sail-wing grazer">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Wings. Living solar sails, a kilometer tip to tip, banking on the light pressure. It grazes the photon flux the way herd-beasts graze a plain.">;
            readonly m70: import("../..").TextEntry<"It tolerates our shadow at survey range, barely. Flight-response analysis: one act of aggression and it dives for deep sky. Guns cold, everyone.">;
            readonly m100: import("../..").TextEntry<"Full xeno-biology series: feeding, banking, the long slow wing-song of a thing that has never needed to fear anything. The archive pays for wonder like this. Weapons stayed cold. Well flown.">;
        };
        readonly outcome: {
            readonly salvageCacheLarge: import("../..").TextEntry<"The Guild xeno-desk pays a full-series premium for a living grazer study (+{salvage} salvage)">;
            readonly hullBloom: import("../..").TextEntry<"Sail-dust from its wake settles into our plating and sets (hull +{hull})">;
        };
    };
    readonly reef_bloom: {
        readonly prefix: import("../..").TextEntry<"SCATTERED BIOMASS">;
        readonly label: import("../..").TextEntry<"Void coral bloom — drifting reef">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A forest with no world under it: branching calcite colonies anchored to a gravel of dead comets, polyps open to the starlight.">;
            readonly m70: import("../..").TextEntry<"The reef is growing toward the nearest star at a meter a century. Patience as a survival strategy. The polyp-light ripples when our floodlights cross it.">;
            readonly m100: import("../..").TextEntry<"Survey complete. In ten million years this will be a wall across the sky. We were here when it was a garden. The log will remember for us.">;
        };
        readonly outcome: {
            readonly hullBloom: import("../..").TextEntry<"Reef polyps colonize our micrometeorite scarring and set like poured stone (hull +{hull})">;
            readonly salvageCacheSmall: import("../..").TextEntry<"Dead calcite frond, dense as good ore, craned aboard (+{salvage} salvage)">;
            readonly nothing: import("../..").TextEntry<"The garden grows at its own pace and keeps its own counsel. Survey archived.">;
        };
    };
    readonly mistweaver: {
        readonly prefix: import("../..").TextEntry<"IONIZED HAZE">;
        readonly label: import("../..").TextEntry<"Mistweaver — sentient plasma">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A drifting bank of plasma that will not hold a classification. It reorganizes every time the survey window closes. It is neither weather nor machinery. It is deliberate.">;
            readonly m70: import("../..").TextEntry<"It is weaving our sensor pulses back at us, reordered and restructured, almost syntax. The linguistics package flags a 92% match for one form: interrogative.">;
            readonly m100: import("../..").TextEntry<"The weave resolves at last: one pattern held steady across the whole bank, patient as a teacher with a slow student. It is a question, and it is waiting for our answer.">;
        };
        readonly outcome: {
            readonly questClue: import("../..").TextEntry<"The question unfolds into coordinates, woven and folded like cloth, now logged. Thread THE WEAVER'S QUESTION is open">;
            readonly nothing: import("../..").TextEntry<"The weave disperses mid-pattern, its question unasked, or withdrawn. The haze drifts on, and we are not sure which of us failed the interview.">;
        };
    };
    readonly weaver_loom: {
        readonly prefix: import("../..").TextEntry<"WOVEN RETURN">;
        readonly label: import("../..").TextEntry<"The Weaver's loom — precursor lattice">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"The coordinates end at a loom: a lattice of worked space wider than a moon, threads of bent light strung taut between anchor-masses. The mistweaver's question came from here.">;
            readonly m70: import("../..").TextEntry<"The loom is running, slowly. It is weaving something out of vacuum and patience, and it is most of the way done. The pattern-signal at its heart is the question again, louder.">;
            readonly m100: import("../..").TextEntry<"Survey complete. One access point: the woven signal at the heart-shuttle. Decode it and we answer the question. Nothing in the survey says what the loom does with a wrong answer.">;
        };
        readonly outcome: {
            readonly nothing: import("../..").TextEntry<"The loom holds its thread. The heart-shuttle waits on our answer.">;
            readonly intel: import("../..").TextEntry<"Cresting the anchor-masses, our sensors ride the loom's warp-threads for one sweep. Every contact in the sector resolves">;
        };
        readonly poiOutcome: {
            readonly signal: {
                readonly salvageVault: import("../..").TextEntry<"The loom accepts the answer and weaves payment: sheets of stable exotic lattice spool into our hold (+{salvage} salvage)">;
                readonly awakening: import("../..").TextEntry<"The loom accepts the answer, and asks a harder question. The warden unfolds from the lattice: the CHIMERA takes our measure">;
            };
        };
    };
    readonly sentinel_signal: {
        readonly prefix: import("../..").TextEntry<"PATTERNED EMISSION">;
        readonly label: import("../..").TextEntry<"Sentinel signal — patient chirp">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A mechanical chirp repeating on a band nobody licenses. It is no distress loop and no beacon. It is a tally, counting something patiently.">;
            readonly m70: import("../..").TextEntry<"Registry sweep complete: nothing. The encoding predates every catalog SHIPNET can reach, older than the Guild and older than the charts. And it is not degrading.">;
            readonly m100: import("../..").TextEntry<"The chirp is not broadcast at the dark. It reports to something, on a schedule kept longer than recorded history. The return path triangulates clean: a dead relay, one jump deeper in.">;
        };
        readonly outcome: {
            readonly questClue: import("../..").TextEntry<"Return path slaved to the jump plot. The signal triangulates to a dead relay in the next system. Thread THE SENTINEL SIGNAL is open">;
        };
    };
    readonly sentinel_relay: {
        readonly prefix: import("../..").TextEntry<"DEAD MACHINE RETURN">;
        readonly label: import("../..").TextEntry<"Sentinel relay — dormant switchboard">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"The return path ends at a lattice: antenna vanes kilometers long, machine-grown, cold on every band. The chirp's home switchboard, dark at its post.">;
            readonly m70: import("../..").TextEntry<"Not dead. Dormant. Trickle power cycles under the vanes, slow as a wintering pulse. The chirp routes through this place, outbound, to somewhere deeper than the charts go.">;
            readonly m100: import("../..").TextEntry<"Survey complete. One access point: the routing signal at the heart of the lattice. Decode it and we learn who is listening. Nothing in the survey says what listening costs.">;
        };
        readonly outcome: {
            readonly nothing: import("../..").TextEntry<"The lattice holds its winter pulse. The routing signal waits on our nerve.">;
            readonly intel: import("../..").TextEntry<"Cresting the antenna vanes, our sensors ride the relay's watch-net for one sweep. Every contact in the sector resolves.">;
        };
        readonly poiOutcome: {
            readonly signal: {
                readonly lore: import("../..").TextEntry<"The decode threads clean and the relay wakes long enough to route it: one handshake, outbound. Then the chirp stops. After centuries of counting, silence. Something heard us. Something answered back.">;
            };
        };
    };
    readonly void_contact: {
        readonly prefix: import("../..").TextEntry<"NULL RETURN">;
        readonly label: import("../..").TextEntry<"The Void — structured absence">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"The instruments agree for once, and what they agree on is nothing: no mass, no light and no signal. It is a hole in the sky with a heading. Holes do not have headings.">;
            readonly m70: import("../..").TextEntry<"Occlusion mapping: background stars wink out along its leading edge and return along its trailing one. The nothing has a length. And a bow.">;
            readonly m100: import("../..").TextEntry<"Integration complete. The Void is a hull, kilometers of it, cloaked beyond anything on the books and underway, holding course for the inner colonies. It is not an anomaly. It is a ship.">;
        };
        readonly outcome: {
            readonly nothing: import("../..").TextEntry<"The survey seals with one addendum, machine-flagged low confidence: the hull's wake reads colder than vacuum. As if it were saving every joule it has for the running.">;
        };
    };
    readonly sanctuary_berth: {
        readonly prefix: import("../..").TextEntry<"OCCLUDED COLOSSUS">;
        readonly label: import("../..").TextEntry<"The ark — cloaked, underway">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"Up close the cloak thins to a shimmer: hull plating grown, not milled, in courses older than any registry. The ark does not hail, does not slow, does not care that we are here.">;
            readonly m70: import("../..").TextEntry<"Deep radar through an open lattice-work flank shows berths: thousands upon thousands, racked like honeycomb, each one holding a faceted crystal form. They are not cargo. They have pulses. Slow ones.">;
            readonly m100: import("../..").TextEntry<"Survey complete. A sleeper ark under full cloak, crewed by no one awake, running hard from the direction it will not point its sensors at. Amidships, one system still speaks: a woven record, transmitting to nobody. The survey does not say who they are. The record might.">;
        };
        readonly outcome: {
            readonly nothing: import("../..").TextEntry<"The ark holds her course and her silence. The berths pulse on, slow as winter.">;
            readonly intel: import("../..").TextEntry<"Cresting her dorsal courses, our sensors ride the ark's own watch-lattice for one sweep. Every contact in the sector resolves.">;
        };
        readonly poiOutcome: {
            readonly relic: {
                readonly lore: import("../..").TextEntry<"The probe lifts a graven panel from the hull course. The glyph-chain repeats one sequence, over and over, the way a hand writes a name it is afraid of forgetting.">;
                readonly salvageLarge: import("../..").TextEntry<"A sheared stanchion of grown hull-metal, drifting in the ark's wake. No forge of ours can pour it, and the registry pays for that (+{salvage} salvage)">;
            };
        };
    };
    readonly void_relay: {
        readonly prefix: import("../..").TextEntry<"TRAILING RETURN">;
        readonly label: import("../..").TextEntry<"Archive relay — jettisoned">;
        readonly scan: {
            readonly m35: import("../..").TextEntry<"A drum of grown metal tumbling in the ark's old wake, dropped like a breadcrumb, or a black box. The weave-signal from the ark's record terminates here.">;
            readonly m70: import("../..").TextEntry<"The drum is a relay. It has been re-transmitting the ark's record outward, on a loop, for longer than our charts have names. Not a distress call. A warning, addressed to whoever comes after.">;
            readonly m100: import("../..").TextEntry<"Survey complete. The record's tail section lives in this drum, the part the ark stopped transmitting. One access point: the severed record. Decode it and the story ends. Nothing in the survey says we will like the ending.">;
        };
        readonly outcome: {
            readonly nothing: import("../..").TextEntry<"The drum tumbles on, patient. The severed record waits on our nerve.">;
            readonly salvageCacheSmall: import("../..").TextEntry<"The relay's shed casing panels assay as exotic stock (+{salvage} salvage)">;
        };
    };
};
