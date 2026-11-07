export declare const CATALOG: {
    readonly galaxy: {
        readonly name: import("..").TextEntry<"{lead} {tail}">;
        readonly fallbackName: import("..").TextEntry<"SYSTEM {n}">;
        readonly lead: {
            readonly kessler: "KESSLER";
            readonly haldane: "HALDANE";
            readonly varga: "VARGA";
            readonly calder: "CALDER";
            readonly merrow: "MERROW";
            readonly okonjo: "OKONJO";
            readonly thiele: "THIELE";
            readonly brandt: "BRANDT";
            readonly sorrel: "SORREL";
            readonly ivey: "IVEY";
            readonly quince: "QUINCE";
            readonly marlow: "MARLOW";
            readonly danner: "DANNER";
            readonly vesper: "VESPER";
            readonly harrow: "HARROW";
            readonly lowell: "LOWELL";
            readonly fenn: "FENN";
            readonly asher: "ASHER";
            readonly riggs: "RIGGS";
            readonly tamsin: "TAMSIN";
            readonly cole: "COLE";
            readonly paley: "PALEY";
        } & import("../types").TextGroup;
        readonly tail: {
            readonly drift: "DRIFT";
            readonly reach: "REACH";
            readonly expanse: "EXPANSE";
            readonly shoals: "SHOALS";
            readonly gate: "GATE";
            readonly anchorage: "ANCHORAGE";
            readonly verge: "VERGE";
            readonly passage: "PASSAGE";
            readonly spindle: "SPINDLE";
            readonly hollow: "HOLLOW";
            readonly crossing: "CROSSING";
            readonly deep: "DEEP";
            readonly spur: "SPUR";
            readonly strait: "STRAIT";
            readonly bank: "BANK";
            readonly wake: "WAKE";
            readonly threshold: "THRESHOLD";
            readonly gyre: "GYRE";
            readonly march: "MARCH";
            readonly falls: "FALLS";
        } & import("../types").TextGroup;
        readonly solo: {
            readonly theNarrows: "THE NARROWS";
            readonly theShallows: "THE SHALLOWS";
            readonly theAnvil: "THE ANVIL";
            readonly theQuiet: "THE QUIET";
            readonly theLadder: "THE LADDER";
            readonly theMoorings: "THE MOORINGS";
            readonly theRookery: "THE ROOKERY";
            readonly thePale: "THE PALE";
        } & import("../types").TextGroup;
        readonly signal: {
            readonly faintCarrier: "faint carrier wave";
            readonly mineralReturns: "mineral-rich returns";
            readonly wreckageField: "wreckage field";
            readonly biosign: "BIOSIGN?";
            readonly ionWake: "ion wake, weeks old";
            readonly regularPulse: "regular pulse — artificial?";
            readonly gravShadow: "gravimetric shadow";
            readonly drivePlumes: "drive plumes, long cold";
        } & import("../types").TextGroup;
        readonly wormholeMouth: import("..").TextEntry<"WORMHOLE MOUTH">;
    } & import("../types").TextGroup;
    readonly poi: {
        readonly action: {
            readonly mineral: {
                readonly label: import("..").TextEntry<"EXTRACT">;
                readonly blurb: import("..").TextEntry<"beam-cut the seam and haul it aboard">;
            };
            readonly relic: {
                readonly label: import("..").TextEntry<"RETRIEVE">;
                readonly blurb: import("..").TextEntry<"send a probe to lift the object">;
            };
            readonly hatch: {
                readonly label: import("..").TextEntry<"SEND PROBE">;
                readonly blurb: import("..").TextEntry<"put a probe through the opening">;
            };
            readonly signal: {
                readonly label: import("..").TextEntry<"DECODE">;
                readonly blurb: import("..").TextEntry<"run the pattern through the decoder">;
            };
            readonly organism: {
                readonly label: import("..").TextEntry<"SAMPLE">;
                readonly blurb: import("..").TextEntry<"take a remote biological sample">;
            };
            readonly core: {
                readonly label: import("..").TextEntry<"TAP">;
                readonly blurb: import("..").TextEntry<"siphon the cell before it destabilizes">;
            };
        } & import("../types").TextGroup;
        readonly campaign: {
            readonly sleeperPodRows: "CRYSTAL SLEEPER POD — ROW ON ROW";
            readonly sleeperPodPulse: "CRYSTAL SLEEPER POD — FAINT PULSE";
            readonly archive: "THE ARCHIVE — woven record";
            readonly severedRecord: "SEVERED RECORD — archive tail";
        } & import("../types").TextGroup;
        readonly log: {
            readonly surveyResolves: import("..").TextEntry<"Survey resolves {designator} — {label} ({action} available)">;
            readonly reviewAction: import("..").TextEntry<"REVIEW">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly signal: {
        readonly label: {
            readonly phenomenon: "ANOMALOUS SIGNAL";
            readonly organism: "BIOLOGIC SIGNAL";
            readonly creatureSite: "REPEATING SIGNAL";
            readonly mega: "STRUCTURED CARRIER";
            readonly beacon: "AUTOMATED BEACON";
        } & import("../types").TextGroup;
        readonly tune: {
            readonly phenomenon: import("..").TextEntry<"Comms tunes a anomalous signal — {designator} on the bands">;
            readonly organism: "Comms tunes a biologic signal — {designator} on the bands";
            readonly creatureSite: "Comms tunes a repeating signal — {designator} on the bands";
            readonly mega: "Comms tunes a structured carrier — {designator} on the bands";
            readonly beacon: import("..").TextEntry<"Comms tunes a automated beacon — {designator} on the bands">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly encounter: {
        readonly survey: {
            readonly label: import("..").TextEntry<"FIRST LIGHT SURVEY">;
            readonly objective: "Survey the system: chart an anomaly to a full scan";
        };
        readonly patrol: {
            readonly label: import("..").TextEntry<"PIRATE PATROL">;
            readonly objective: "Destroy all hostiles";
        };
        readonly ambush: {
            readonly label: import("..").TextEntry<"PIRATE AMBUSH">;
            readonly objective: "Destroy all hostiles";
        };
        readonly asteroidField: {
            readonly label: import("..").TextEntry<"ASTEROID FIELD">;
            readonly objective: "Destroy the pirates hiding in the rocks";
        };
        readonly driftField: {
            readonly label: import("..").TextEntry<"DRIFT FIELD">;
            readonly objective: "Destroy the pirates adrift in the moving rocks";
        };
        readonly derelict: {
            readonly label: import("..").TextEntry<"DERELICT HULK">;
            readonly objective: "Deep-scan the derelict for salvage";
        };
        readonly distress: {
            readonly label: import("..").TextEntry<"DISTRESS CALL">;
            readonly objective: "Comms: answer the mayday";
            readonly defendObjective: import("..").TextEntry<"Defend the freighter: destroy all hostiles">;
        };
        readonly minefield: {
            readonly label: import("..").TextEntry<"MINEFIELD">;
            readonly objective: "Reach and scan the derelict inside the field";
        };
        readonly hunter: {
            readonly label: import("..").TextEntry<"HUNTER-KILLER">;
            readonly objective: "Destroy the elite hunter";
        };
        readonly firstContact: {
            readonly label: import("..").TextEntry<"FIRST CONTACT">;
            readonly objective: "Comms: open a channel";
        };
        readonly trader: {
            readonly label: import("..").TextEntry<"GUILD MERCHANT">;
            readonly objective: "Comms: hail the merchant";
        };
        readonly debrisStorm: {
            readonly label: import("..").TextEntry<"DEBRIS STORM">;
            readonly objective: "Thread the storm and survey the return at its heart";
        };
        readonly evacuation: {
            readonly label: import("..").TextEntry<"COLONY EVACUATION">;
            readonly objective: import("..").TextEntry<"Cover the convoy until the transports jump">;
        };
    } & import("../types").TextGroup;
    readonly designator: {
        readonly callsign: import("..").TextEntry<"{num} {word}">;
        readonly callsignSuffix: import("..").TextEntry<"{num} {word}-{i}">;
        readonly poi: import("..").TextEntry<"P-{n} {word}">;
        readonly nato: {
            readonly alpha: "Alpha";
            readonly bravo: "Bravo";
            readonly charlie: "Charlie";
            readonly delta: "Delta";
            readonly echo: "Echo";
            readonly foxtrot: "Foxtrot";
            readonly golf: "Golf";
            readonly hotel: "Hotel";
            readonly india: "India";
            readonly juliett: "Juliett";
            readonly kilo: "Kilo";
            readonly lima: "Lima";
            readonly mike: "Mike";
            readonly november: "November";
            readonly oscar: "Oscar";
            readonly papa: "Papa";
            readonly quebec: "Quebec";
            readonly romeo: "Romeo";
            readonly sierra: "Sierra";
            readonly tango: "Tango";
            readonly uniform: "Uniform";
            readonly victor: "Victor";
            readonly whiskey: "Whiskey";
            readonly xray: "X-ray";
            readonly yankee: "Yankee";
            readonly zulu: "Zulu";
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly contact: {
        readonly class: {
            readonly raptor: "Raptor-class fighter";
            readonly corsair: "Corsair interceptor";
            readonly reaver: "Reaver skiff";
            readonly envoy: import("..").TextEntry<"Vel'Shaar envoy">;
            readonly basilisk: "Basilisk artillery lance";
            readonly swarm: "Sentinel swarm drone";
            readonly collector: "Collector harvest-lattice";
            readonly leviathan: "Star leviathan — living deep-clade";
            readonly chimera: "Chimera biomech cruiser";
        } & import("../types").TextGroup;
        readonly derelictHulk: import("..").TextEntry<"Derelict hulk">;
        readonly guildFreighter: import("..").TextEntry<"Guild freighter LONG HAUL">;
        readonly freighterKestrel: import("..").TextEntry<"Freighter KESTREL">;
        readonly voidGuardian: import("..").TextEntry<"Sentinel drone — void guardian">;
        readonly sentinelPrime: import("..").TextEntry<"SENTINEL PRIME — swarm nexus">;
        readonly husk: import("..").TextEntry<"HUSK {class}">;
        readonly huskSentinelPrime: import("..").TextEntry<"HUSK SENTINEL PRIME — corrupted nexus">;
        readonly transport: {
            readonly meridian: "Colony transport MERIDIAN";
            readonly larkspur: "Colony transport LARKSPUR";
            readonly halcyonDawn: "Colony transport HALCYON DAWN";
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly role: {
        readonly captain: "Captain";
        readonly helm: "Helm";
        readonly tactical: "Tactical";
        readonly engineering: "Engineering";
        readonly science: "Science";
        readonly comms: "Comms";
        readonly cannoneer: import("..").TextEntry<"Cannoneer">;
        readonly cupolaGunner: "Cupola Gunner";
        readonly host: import("..").TextEntry<"Host">;
        readonly shipnet: import("..").TextEntry<"SHIPNET">;
    } & import("../types").TextGroup;
    readonly subsystem: {
        readonly engines: "Engines";
        readonly shieldGen: "Shield Gen";
        readonly weapons: "Weapons";
        readonly jumpDrive: "Jump Drive";
    } & import("../types").TextGroup;
    readonly ship: {
        readonly class: {
            readonly wren: {
                readonly label: import("..").TextEntry<"WREN">;
                readonly blurb: import("..").TextEntry<"1-crew skiff: one seat, and every duty aboard is yours.">;
                readonly subtitle: import("..").TextEntry<"1-CREW SKIFF">;
                readonly tagline: import("..").TextEntry<"One seat, and every duty aboard is yours.">;
            };
            readonly cutter: {
                readonly label: import("..").TextEntry<"SPARROW">;
                readonly blurb: import("..").TextEntry<"2-crew cutter: fast, fragile, and everyone does everything.">;
                readonly subtitle: import("..").TextEntry<"2-CREW CUTTER">;
                readonly tagline: import("..").TextEntry<"Fast, fragile, and everyone does everything.">;
            };
            readonly corvette: {
                readonly label: import("..").TextEntry<"TALON">;
                readonly blurb: import("..").TextEntry<"3-crew corvette: the captain flies and talks.">;
                readonly subtitle: import("..").TextEntry<"3-CREW CORVETTE">;
                readonly tagline: import("..").TextEntry<"The captain flies and talks.">;
            };
            readonly frigate: {
                readonly label: import("..").TextEntry<"VANGUARD">;
                readonly blurb: import("..").TextEntry<"4-crew frigate: a dedicated hand on every core system.">;
                readonly subtitle: import("..").TextEntry<"4-CREW FRIGATE">;
                readonly tagline: import("..").TextEntry<"A dedicated hand on every core system.">;
            };
            readonly cruiser: {
                readonly label: import("..").TextEntry<"SOVEREIGN">;
                readonly blurb: import("..").TextEntry<"5-crew cruiser: the classic bridge, with the Captain leading from the couch.">;
                readonly subtitle: import("..").TextEntry<"5-CREW CRUISER">;
                readonly tagline: import("..").TextEntry<"The classic bridge, with the Captain leading from the couch.">;
            };
            readonly dreadnought: {
                readonly label: import("..").TextEntry<"COLOSSUS">;
                readonly blurb: import("..").TextEntry<"6+ crew dreadnought: slow and heavy, with manned gun turrets.">;
                readonly subtitle: import("..").TextEntry<"6+ CREW DREADNOUGHT">;
                readonly tagline: import("..").TextEntry<"Slow and heavy, with manned gun turrets.">;
            };
        } & import("../types").TextGroup;
        readonly seat: {
            readonly command: "Shipmaster";
            readonly helm_tac: "Pilot-Gunner";
            readonly ops: "Operations";
            readonly sci_comms: "Science & Comms";
            readonly engineer: "Engineering";
            readonly helm: "Helm";
            readonly tactical: "Tactical";
            readonly sciops: "Science & Comms";
            readonly science: "Science";
            readonly comms: "Comms";
            readonly cupola: "Cupola Gunner";
            readonly cannoneer_a: import("..").TextEntry<"Cannoneer — Phaser I">;
            readonly cannoneer_b: import("..").TextEntry<"Cannoneer — Phaser II">;
            readonly cannoneer_c: import("..").TextEntry<"Cannoneer — Phaser III">;
            readonly cannoneer_d: import("..").TextEntry<"Cannoneer — Phaser IV">;
        } & import("../types").TextGroup;
        readonly cannoneerNote: import("..").TextEntry<"designed for young crew members">;
    } & import("../types").TextGroup;
    readonly unlock: {
        readonly reactor_plus: {
            readonly label: "Aux Reactor";
            readonly detail: "+10 reactor output";
        };
        readonly hull_plating: {
            readonly label: "Hull Plating";
            readonly detail: "+20 max hull";
        };
        readonly torpedo_reserve: {
            readonly label: "Torpedo Reserve";
            readonly detail: "+4 torpedoes";
        };
        readonly pd_suite: {
            readonly label: import("..").TextEntry<"PD Suite">;
            readonly detail: "Turret cooldown ×0.75";
        };
        readonly deep_scanner: {
            readonly label: "Deep Scanner";
            readonly detail: "Scan rate ×1.3";
        };
    } & import("../types").TextGroup;
    readonly hail: {
        readonly persona: {
            readonly vexMarrow: import("..").TextEntry<"Vex Marrow">;
            readonly madAnyaVoss: import("..").TextEntry<"Mad Anya Voss">;
            readonly silasKade: import("..").TextEntry<"Silas Kade">;
            readonly gravedigger: import("..").TextEntry<"The Gravedigger">;
            readonly ripCallister: import("..").TextEntry<"Rip Callister">;
            readonly hollowJack: import("..").TextEntry<"Hollow Jack">;
            readonly skrell: import("..").TextEntry<"Skrell the Unpaid">;
            readonly grash: import("..").TextEntry<"Grash Nine-Knives">;
            readonly ulli: import("..").TextEntry<"Ulli of the Wreck-Court">;
            readonly borrowedWarmaster: import("..").TextEntry<"The Borrowed Warmaster">;
            readonly weThatJoin: import("..").TextEntry<"WE-THAT-JOIN">;
            readonly dredge: import("..").TextEntry<"Warmaster Dredge">;
            readonly kaalTheRed: import("..").TextEntry<"Kaal the Red">;
            readonly sstKaresh: import("..").TextEntry<"Sst-Karesh, Oathbreaker">;
            readonly mantidPrince: import("..").TextEntry<"The Mantid Prince">;
            readonly threnody: import("..").TextEntry<"Envoy Threnody">;
            readonly elderSsiv: import("..").TextEntry<"Elder Ssiv">;
            readonly chorus: import("..").TextEntry<"The Chorus">;
            readonly kyx: import("..").TextEntry<"Broodmother Kyx">;
            readonly zsst: import("..").TextEntry<"Zsst-of-the-Deep">;
            readonly whisper: import("..").TextEntry<"Whisper-in-the-Brine">;
            readonly vossKhe: import("..").TextEntry<"Elder Voss-Khe">;
            readonly paleChoir: import("..").TextEntry<"The Pale Choir">;
            readonly okoye: import("..").TextEntry<"Guildmaster Okoye">;
            readonly tuck: import("..").TextEntry<"Foreman Tuck">;
            readonly ratchet: import("..").TextEntry<"Cog-Captain Ratchet">;
            readonly hal: import("..").TextEntry<"Unit HL-3 'Hal'">;
            readonly yezz: import("..").TextEntry<"Broker Yezz of the Nine Arms">;
            readonly carapace: import("..").TextEntry<"Old Carapace">;
            readonly strandedScientist: import("..").TextEntry<"Dr. Imari Solen — SURVEY TEAM 7">;
            readonly derelictSurvivor: import("..").TextEntry<"…something answers">;
            readonly qship: import("..").TextEntry<"SALVOR-PATTERN INTELLIGENCE">;
            readonly kestrel: import("..").TextEntry<"Captain Reyes — KESTREL">;
            readonly beacon: import("..").TextEntry<"AUTOMATED BEACON">;
        } & import("../types").TextGroup;
        readonly faction: {
            readonly corsairs: import("..").TextEntry<"Crimson Corsairs">;
            readonly syndicate: import("..").TextEntry<"Ashfall Syndicate">;
            readonly guild: import("..").TextEntry<"Free Haulers Guild">;
            readonly velshaar: import("..").TextEntry<"The Vel'Shaar">;
            readonly amalgam: import("..").TextEntry<"The Amalgam">;
            readonly stranded: import("..").TextEntry<"Stranded">;
            readonly unknown: import("..").TextEntry<"Unknown">;
            readonly unregistered: import("..").TextEntry<"Unregistered">;
            readonly derelict: import("..").TextEntry<"Derelict">;
        } & import("../types").TextGroup;
        readonly node: {
            readonly demand: {
                readonly text: import("..").TextEntry<string>;
                readonly option: {
                    readonly pay: {
                        readonly label: import("..").TextEntry<"TRANSFER {tribute} SALVAGE">;
                        readonly detail: import("..").TextEntry<"buy them off — no fight, no reward">;
                    } & import("../types").TextGroup;
                    readonly refuse: {
                        readonly label: import("..").TextEntry<"OPEN FIRE ON THIS FREQUENCY">;
                        readonly detail: import("..").TextEntry<"defiance — they'll come shooting">;
                    } & import("../types").TextGroup;
                    readonly bluff: {
                        readonly label: import("..").TextEntry<"THIS IS A VANGUARD WARSHIP">;
                        readonly detail: import("..").TextEntry<"a coin toss: they scatter, or they call it">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly demand_paid: {
                readonly text: "Pleasure doing business, citizen. Corsairs, spool out. Leave 'em their dignity.";
            } & import("../types").TextGroup;
            readonly demand_broke: {
                readonly text: "Your hold's emptier than your threats. Nothing to take but the hull itself. BURN THEM.";
            } & import("../types").TextGroup;
            readonly bluff_worked: {
                readonly text: "…Run that keel signature again. That's— all ships, SCATTER. Scatter NOW. Nobody dies for this haul.";
            } & import("../types").TextGroup;
            readonly bluff_called: {
                readonly text: "Vanguard? Vanguard hulls don't rust, sweetheart. Nice try. GET THEM.";
            } & import("../types").TextGroup;
            readonly fear_option_TEMPLATE: {
                readonly option: {
                    readonly fear: {
                        readonly label: import("..").TextEntry<"RUN OUR KEEL SIGNATURE. THEN DECIDE.">;
                        readonly detail: import("..").TextEntry<"they know this ship — let the stories do the talking">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly fear_scatter: {
                readonly text: "…that keel. THAT keel. Check the ledger, check the— it's THEM. All ships, break off. BREAK OFF. Some cargo isn't worth the stories.";
            } & import("../types").TextGroup;
            readonly fear_called: {
                readonly text: "I've heard the stories. I've also heard ghost stories. Guns don't believe in either. TAKE THEM.";
            } & import("../types").TextGroup;
            readonly mock: {
                readonly text: "Surrender? To YOU? Save your breath for the vacuum, Federation.";
            } & import("../types").TextGroup;
            readonly yield: {
                readonly text: import("..").TextEntry<"HOLD FIRE, hold fire! Alright. ALRIGHT. Reactor's spiking and half my deck's on fire. We're powering down. Cargo's yours. Just leave my crew breathing.">;
                readonly option: {
                    readonly accept: {
                        readonly label: import("..").TextEntry<"STAND DOWN — TAKE THE CARGO">;
                        readonly detail: import("..").TextEntry<"they go adrift; salvage bounty">;
                    } & import("../types").TextGroup;
                    readonly refuse: {
                        readonly label: import("..").TextEntry<"NO QUARTER">;
                        readonly detail: import("..").TextEntry<"finish the job — they'll fight to the last">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly surrender_refused_them: {
                readonly text: "You'll have to hit a lot harder than that before I kneel to a couch full of tourists.";
            } & import("../types").TextGroup;
            readonly no_quarter: {
                readonly text: "So that's how it is. You hear that, crew? No mercy from the do-gooders. DIE SWINGING.";
            } & import("../types").TextGroup;
            readonly fake_surrender_sprung: {
                readonly text: "Powering down… powering down… FIRE EVERYTHING. Ha! Oldest trick on the spinward run!";
            } & import("../types").TextGroup;
            readonly taunt: {
                readonly text: import("..").TextEntry<string>;
                readonly option: {
                    readonly taunt_back: {
                        readonly label: import("..").TextEntry<"YOUR WALL DIES WITH YOU">;
                        readonly detail: import("..").TextEntry<"goad them — anger makes mistakes">;
                    } & import("../types").TextGroup;
                    readonly end: {
                        readonly label: import("..").TextEntry<"END TRANSMISSION">;
                        readonly detail: import("..").TextEntry<"let the guns talk">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly taunt_goaded: {
                readonly text: "RRAGH, you'll be FIRST then! ALL POWER TO— [their reactor howls across every band; Science has a clean read]";
            } & import("../types").TextGroup;
            readonly taunt_contempt: {
                readonly text: "Bravado. Good. It reads better on the plaque.";
            } & import("../types").TextGroup;
            readonly fc_open: {
                readonly text: import("..").TextEntry<string>;
                readonly option: {
                    readonly greet: {
                        readonly label: import("..").TextEntry<"WE COME IN PEACE">;
                        readonly detail: import("..").TextEntry<"diplomacy — they may test the claim">;
                    } & import("../types").TextGroup;
                    readonly force: {
                        readonly label: import("..").TextEntry<"LOCK WEAPONS — SHOW STRENGTH">;
                        readonly detail: import("..").TextEntry<"some species respect it. most don't.">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly fc_kin_option_TEMPLATE: {
                readonly option: {
                    readonly kin: {
                        readonly label: import("..").TextEntry<"MIRROR THEIR BIO-SIGNS">;
                        readonly detail: import("..").TextEntry<"Science's scan found the idiom of the deep">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly fc_peace_test: {
                readonly text: import("..").TextEntry<"Peace. A word with teeth in it, in our experience. Your weapons hum, little ship. We hear them through the dark. Silence them, and we will believe you.">;
                readonly option: {
                    readonly comply: {
                        readonly label: import("..").TextEntry<"SIGNAL: OUR GUNS GO COLD">;
                        readonly detail: import("..").TextEntry<"they will CHECK: beams below 20% charge, turrets on HOLD — coordinate with Tactical!">;
                    } & import("../types").TextGroup;
                    readonly keep_hot: {
                        readonly label: import("..").TextEntry<"OUR GUNS STAY WARM">;
                        readonly detail: import("..").TextEntry<"honest caution — they may respect it">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly fc_gift: {
                readonly text: "Warmth honors warmth. Take this chitin-weld for your wounded hull, and a memory of us in your charts. Swim well.";
            } & import("../types").TextGroup;
            readonly fc_offended: {
                readonly text: "Your words are soft. Your guns are loud. The Vel'Shaar have tasted this dish before. DECEIVER.";
            } & import("../types").TextGroup;
            readonly fc_wary: {
                readonly text: import("..").TextEntry<"Caution. Caution is honest, and we accept it. Then trade at claw's length: {fcCost} salvage for a hull-weld of living chitin.">;
                readonly option: {
                    readonly buy: {
                        readonly label: import("..").TextEntry<"PAY {fcCost} — TAKE THE WELD">;
                        readonly detail: import("..").TextEntry<"repairs the hull">;
                    } & import("../types").TextGroup;
                    readonly decline: {
                        readonly label: import("..").TextEntry<"DECLINE, WITH RESPECT">;
                        readonly detail: import("..").TextEntry<"part on good terms">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly fc_traded: {
                readonly text: "The weld sets. It will remember your hull's shape better than your builders did. Star-tides favor you, warm ones.";
            } & import("../types").TextGroup;
            readonly fc_farewell: {
                readonly text: "Then part we do, unbitten both. Carry these current-charts. They map the near-deep. A small kindness, freely given.";
            } & import("../types").TextGroup;
            readonly fc_respect: {
                readonly text: "Strength. The old tongue, spoken poorly, but spoken. We yield the lane, and tribute, as the old law demands. Do not linger.";
            } & import("../types").TextGroup;
            readonly fc_kin: {
                readonly text: import("..").TextEntry<"You speak as the deep speaks…?! KIN-WARM! Little ship of the dry worlds, singing tide-song! Take weld, take charts, take our regard, and be spoken of in the Below.">;
            } & import("../types").TextGroup;
            readonly fc_broke: {
                readonly text: "Empty claws, warm words. No shame in it. Return heavier, and the weld is yours.";
                readonly option: {
                    readonly decline: {
                        readonly label: import("..").TextEntry<"PART ON GOOD TERMS">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly trade_open: {
                readonly text: import("..").TextEntry<"Guild freighter LONG HAUL, holds full and schedule tight. Buying and selling while the kettle's hot, friend. What'll it be?">;
            } & import("../types").TextGroup;
            readonly trade_haggled: {
                readonly text: "…Fine. FINE. Family rates. If the Guild asks, you haggled like a drowning man. Don't spread it around.";
            } & import("../types").TextGroup;
            readonly trade_offended: {
                readonly text: "Robbery?! These margins wouldn't feed a vac-rat. Channel's closed to you, deadbeat. Hail back when you've found manners.";
            } & import("../types").TextGroup;
            readonly trade_broke: {
                readonly text: "Credit's no good past the relay line, friend. Salvage on the barrel or nothing.";
            } & import("../types").TextGroup;
            readonly trade_last_call: {
                readonly text: "Schedule's a schedule and mine's screaming. Safe lanes, friend. The Guild remembers its customers.";
            } & import("../types").TextGroup;
            readonly qship_reveal: {
                readonly text: "PREY ACQUISITION CONFIRMED. PAYMENT ACCEPTED WITH THANKS. TERMINATING COURTESY PROTOCOLS. DEPLOYING ESCORT.";
            } & import("../types").TextGroup;
            readonly mayday: {
                readonly text: import("..").TextEntry<"Mayday, mayday. Freighter KESTREL, engines dark, cargo full, raiders on approach! Anyone on this band, ANYONE. We have families aboard. Please.">;
                readonly option: {
                    readonly respond: {
                        readonly label: import("..").TextEntry<"WE'RE COMING — HOLD ON">;
                        readonly detail: import("..").TextEntry<"defend her (salvage reward if she lives)">;
                    } & import("../types").TextGroup;
                    readonly ignore: {
                        readonly label: import("..").TextEntry<"MAINTAIN COURSE">;
                        readonly detail: import("..").TextEntry<"not our problem">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly mayday_thanks: {
                readonly text: "You glorious lunatics, you actually came. Drinks are on the Guild for a decade. So is this. KESTREL out.";
            } & import("../types").TextGroup;
            readonly mayday_faded: {
                readonly text: "…the mayday repeats twice more. Then the band goes quiet.";
            } & import("../types").TextGroup;
            readonly beacon: {
                readonly text: import("..").TextEntry<string>;
            } & import("../types").TextGroup;
            readonly amalgam_overture: {
                readonly text: import("..").TextEntry<"We heard your heartbeats from three light-seconds out. So few. So loud. So briefly yours. This is not a demand. It is an appraisal: your hull will be made contiguous with Ours, and your crew will be kept, whole and warm, and never alone again. Cut your drives. Open your locks. We are already reaching.">;
                readonly option: {
                    readonly refuse: {
                        readonly label: import("..").TextEntry<"WE DECLINE — ALL GUNS FREE">;
                        readonly detail: import("..").TextEntry<"there is nothing here to negotiate with">;
                    } & import("../types").TextGroup;
                    readonly ask: {
                        readonly label: import("..").TextEntry<"WHAT ARE WE, TO YOU?">;
                        readonly detail: import("..").TextEntry<"keep the chorus talking — every second is a scan">;
                    } & import("../types").TextGroup;
                    readonly end: {
                        readonly label: import("..").TextEntry<"END TRANSMISSION">;
                        readonly detail: import("..").TextEntry<"they are coming either way">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly amalgam_inventory: {
                readonly text: import("..").TextEntry<"Inventory: one hull, workable. One reactor, adequate. One crew: the only component that repairs itself. Do not mistake this for hunger. The harvest does not hate the field. Every voice We have ever taken is still singing, somewhere in Us. Listen. You will recognize the accents.">;
                readonly option: {
                    readonly refuse: {
                        readonly label: import("..").TextEntry<"NO ONE IS JOINING TODAY">;
                        readonly detail: import("..").TextEntry<"open fire">;
                    } & import("../types").TextGroup;
                    readonly end: {
                        readonly label: import("..").TextEntry<"END TRANSMISSION">;
                        readonly detail: import("..").TextEntry<"let the guns answer">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly amalgam_refused: {
                readonly text: import("..").TextEntry<"Refusal: noted, filed, kept. We keep every refusal in the voice that made it, a courtesy so nothing of you is wasted. Yours are lovely. They will still be saying no, long after they are saying it in chorus.">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly trader: {
            readonly label: {
                readonly buyTorps: import("..").TextEntry<"BUY: {torpCost} → +{torpN} TORPEDOES">;
                readonly buyMissiles: import("..").TextEntry<"BUY: {missileCost} → +{missileN} MISSILES">;
                readonly buyRockets: import("..").TextEntry<"BUY: {rocketCost} → +{rocketN} ROCKETS">;
                readonly buyRails: import("..").TextEntry<"BUY: {railCost} → +{railN} RAIL SLUGS">;
                readonly buyHull: import("..").TextEntry<"BUY: {hullCost} → HULL PATCH +{hullN}">;
                readonly buyProbes: import("..").TextEntry<"BUY: {probeCost} → +{probeN} SURVEY PROBES">;
                readonly sellCharts: import("..").TextEntry<"SELL SURVEY DATA: +{chartsPay}">;
                readonly haggle: import("..").TextEntry<"GUILD RATES ARE ROBBERY">;
                readonly leave: import("..").TextEntry<"SAFE LANES, GUILDMASTER">;
            } & import("../types").TextGroup;
            readonly detail: {
                readonly missiles: import("..").TextEntry<"seeker darts for the tactical rack">;
                readonly rockets: import("..").TextEntry<"cheap and cheerful, no warranty">;
                readonly rails: import("..").TextEntry<"spine-gun ammunition — handle with respect">;
                readonly probes: import("..").TextEntry<"for the science bay's launch cradle">;
                readonly sellCharts: import("..").TextEntry<"once per meeting">;
                readonly haggle: import("..").TextEntry<"a coin toss: family rates, or a closed channel">;
                readonly leave: import("..").TextEntry<"end transmission">;
                readonly familyRates: import("..").TextEntry<"family rates apply">;
                readonly salvageOnBarrel: import("..").TextEntry<"salvage on the barrel">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly log: {
            readonly incomingDemand: import("..").TextEntry<"INCOMING HAIL — {designator} demands tribute">;
            readonly incomingHunter: import("..").TextEntry<"INCOMING HAIL: the hunter {designator} has words for us">;
            readonly incomingMayday: import("..").TextEntry<"INCOMING HAIL — mayday from freighter KESTREL">;
            readonly incomingEnvoy: import("..").TextEntry<"INCOMING HAIL: the Vel'Shaar envoy grew tired of waiting">;
            readonly offerStrike: import("..").TextEntry<"{designator} is hailing — they're offering to strike their colors">;
            readonly channelLost: import("..").TextEntry<"Channel lost — {speaker} is gone">;
            readonly noResponse: import("..").TextEntry<"NO RESPONSE from {designator}">;
            readonly huskCarrier: import("..").TextEntry<"{designator} answers on a channel no living voice would use: a flat carrier, one fragment of signal, repeating and repeating">;
            readonly dormantLeviathan: import("..").TextEntry<"{designator} does not answer. The channel fills with a slow biologic rhythm, vast and asleep">;
            readonly envoySlams: import("..").TextEntry<"The envoy slams the channel shut">;
            readonly envoyFades: import("..").TextEntry<"The envoy's song fades as the Vel'Shaar withdraw into the deep">;
            readonly scienceCracked: import("..").TextEntry<"Science cracked the Vel'Shaar idiom. A new response is open">;
            readonly rememberedWake: import("..").TextEntry<"The envoy tastes a remembered wake. The Below has spoken of this hull before">;
            readonly envoyDamaged: import("..").TextEntry<"Weapons fire on the envoy. The Vel'Shaar answer in kind">;
            readonly envoyForce: import("..").TextEntry<"The show of force offends the Vel'Shaar">;
            readonly envoyGuns: import("..").TextEntry<"They heard our guns humming, and the Vel'Shaar strike">;
            readonly silence: import("..").TextEntry<"The channel stays silent. Silence is an answer">;
            readonly channelClosedCorsairs: import("..").TextEntry<"Channel closed on the Corsairs. They take it as a no">;
            readonly negotiationsOver: import("..").TextEntry<"Negotiations over — weapons free">;
            readonly holdTooLight: import("..").TextEntry<"Hold's too light to pay the tribute. The Corsairs attack">;
            readonly paidTribute: import("..").TextEntry<"Paid {tribute} salvage in tribute. The Corsairs spool out">;
            readonly bluffWorked: import("..").TextEntry<"They bought the bluff. Pirate contacts scattering">;
            readonly bluffCalled: import("..").TextEntry<"Bluff called. The Corsairs attack">;
            readonly fearScatter: import("..").TextEntry<"They know this ship. Pirate contacts scattering">;
            readonly fearFailed: import("..").TextEntry<"The stories weren't enough. The Corsairs attack">;
            readonly repEasyMark: import("..").TextEntry<"The Corsair bands log an easy mark. Word like that travels">;
            readonly repFear: import("..").TextEntry<"The scatter call went out on an open band. This keel just entered the stories">;
            readonly fakeSurrender: import("..").TextEntry<"FAKE SURRENDER: {designator} opens fire at point blank!">;
            readonly strikesColors: import("..").TextEntry<"{designator} strikes their colors; cargo seized (+{salvage} salvage)">;
            readonly noQuarter: import("..").TextEntry<"No quarter for {designator}. They'll fight to the last">;
            readonly goaded: import("..").TextEntry<"{designator} goaded. Their reactor howls; full sensor picture acquired">;
            readonly forceYield: import("..").TextEntry<"The Vel'Shaar yield the lane. Tribute received (+{salvage} salvage)">;
            readonly chitinSets: import("..").TextEntry<"The chitin-weld sets. Hull mended, gifts received (+{salvage} salvage)">;
            readonly paidWeld: import("..").TextEntry<"Paid {salvage} salvage for the hull-weld. It holds">;
            readonly partedGoodTerms: import("..").TextEntry<"Parted with the Vel'Shaar on good terms (+{salvage} salvage in charts)">;
            readonly kinWarm: import("..").TextEntry<"KIN-WARM: the Vel'Shaar sing back (+{salvage} salvage, hull mended)">;
            readonly purchasedTorpedoes: import("..").TextEntry<"Purchased {count} torpedoes (−{cost} salvage)">;
            readonly purchasedProbes: import("..").TextEntry<"Purchased {count} survey probes (−{cost} salvage)">;
            readonly purchasedMissiles: import("..").TextEntry<"Purchased {count} missiles (−{cost} salvage)">;
            readonly purchasedRockets: import("..").TextEntry<"Purchased {count} rockets (−{cost} salvage)">;
            readonly purchasedRails: import("..").TextEntry<"Purchased {count} rail slugs (−{cost} salvage)">;
            readonly hullPatch: import("..").TextEntry<"Hull patch applied (+{repair}, −{cost} salvage)">;
            readonly chartsAlready: import("..").TextEntry<"The Guild already holds our survey data. One sale per meeting">;
            readonly chartsSold: import("..").TextEntry<"Sold survey data to the Guild (+{salvage} salvage)">;
            readonly haggleWorked: import("..").TextEntry<"Family rates secured — Guild prices cut">;
            readonly haggleOffended: import("..").TextEntry<"The Guildmaster took offense — channel closing">;
            readonly merchantLeaves: import("..").TextEntry<"The merchant spools her drive — safe lanes">;
            readonly qship: import("..").TextEntry<"Q-SHIP: the merchant was bait! Escorts powering up!">;
            readonly distressIgnored: import("..").TextEntry<"Distress call ignored. KESTREL is on her own.">;
        } & import("../types").TextGroup;
        readonly escalate: {
            readonly tributeRefused: import("..").TextEntry<"tribute demand refused">;
            readonly hostile: import("..").TextEntry<"hail turned hostile">;
            readonly tooBroke: import("..").TextEntry<"too broke to buy off the pirates">;
            readonly bluffCalled: import("..").TextEntry<"bluff called">;
            readonly fearFailed: import("..").TextEntry<"fear check failed">;
            readonly fakedSurrender: import("..").TextEntry<"a faked surrender">;
            readonly envoyHostile: import("..").TextEntry<"the Vel'Shaar envoy turned hostile">;
            readonly qship: import("..").TextEntry<"a q-ship trap">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly anomaly: {
        readonly def: {
            readonly verdant_world: {
                readonly prefix: import("..").TextEntry<"UNCHARTED BODY">;
                readonly label: import("..").TextEntry<"Verdant world — biotic">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Atmosphere reads warm and wet. Chlorophyll analog on every band: the whole world is photosynthesizing.">;
                    readonly m70: import("..").TextEntry<"Surface resolves: reef-towers of living glass, kilometers tall, growing in patterns. The patterns repeat.">;
                    readonly m100: import("..").TextEntry<"The towers pulse in sequence as we pass overhead. SHIPNET files it as a greeting. Science files it as weather. Logging both.">;
                };
                readonly outcome: {
                    readonly hullBloom: import("..").TextEntry<"Spore-fall settles into our micrometeorite scarring and sets like weld (hull +{hull})">;
                    readonly salvageCacheSmall: import("..").TextEntry<"An aerobraking skim nets refined organics (+{salvage} salvage)">;
                    readonly nothing: import("..").TextEntry<"No landing. Some gardens are not ours to walk. Survey archived.">;
                };
            };
            readonly cinder_world: {
                readonly prefix: import("..").TextEntry<"UNCHARTED BODY">;
                readonly label: import("..").TextEntry<"Cinder world — dead forge">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Surface temperature nominal for slag. Tectonic scarring in perfect concentric rings. This was industry, once.">;
                    readonly m70: import("..").TextEntry<"Orbital debris ring: foundry frames, mass-driver rails, all cold. Whoever worked this forge shipped out and never came back.">;
                    readonly m100: import("..").TextEntry<"Deep radar shows the mantle hollowed into hexagonal galleries all the way down. The whole world was the forge.">;
                };
                readonly outcome: {
                    readonly salvageCacheLarge: import("..").TextEntry<"The debris ring gives up intact alloy stock (+{salvage} salvage)">;
                    readonly radiationFlare: import("..").TextEntry<"A dormant mass-driver capacitor discharges as we pass: {damage} hull across the facing arc">;
                    readonly nothing: import("..").TextEntry<"The galleries are empty. Even the ghosts clocked out. Survey archived.">;
                };
            };
            readonly shrouded_giant: {
                readonly prefix: import("..").TextEntry<"UNCHARTED BODY">;
                readonly label: import("..").TextEntry<"Shrouded giant — deep transmitter">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Hydrogen shroud, storm cells the size of moons. Under the noise: a carrier wave. Artificial. Patient.">;
                    readonly m70: import("..").TextEntry<"The carrier wave is indexing us: hull class, mass, weapons load. Something down there keeps very old books.">;
                    readonly m100: import("..").TextEntry<"The transmission ends with a data burst aimed straight at our array. It isn't hostile: it's a ledger of everything else in this sector.">;
                };
                readonly outcome: {
                    readonly intel: import("..").TextEntry<"The ledger decompiles clean: every hostile in the sector, tagged and typed. Sensors are lit.">;
                    readonly nothing: import("..").TextEntry<"The ledger is ciphered beyond us. We log the librarian and move on.">;
                    readonly radiationFlare: import("..").TextEntry<"A storm cell arcs to our keel as the burst ends: {damage} hull. The librarian charges a fee.">;
                };
            };
            readonly hollow_moon: {
                readonly prefix: import("..").TextEntry<"UNCHARTED BODY">;
                readonly label: import("..").TextEntry<"Hollow moonlet — resonant">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A cracked moonlet. Density scan says WRONG: eighty percent void, walls of perfect thickness.">;
                    readonly m70: import("..").TextEntry<"The void spaces resonate with our engine harmonics. It isn't echoing us. It's answering in kind.">;
                    readonly m100: import("..").TextEntry<"Resonance map complete: the interior is one chamber, shaped like nothing, tuned like a bell. We will not ring it twice.">;
                };
                readonly outcome: {
                    readonly nothing: import("..").TextEntry<"SHIPNET files the recording under UNRESOLVED. Some mysteries keep their own counsel.">;
                    readonly intel: import("..").TextEntry<"The bell's standing wave carries every engine note in the sector back to us. Contacts resolved.">;
                    readonly salvageCacheSmall: import("..").TextEntry<"Survey rights on a resonant body fetch a finder's fee from the Guild registry (+{salvage} salvage)">;
                };
            };
            readonly ringed_giant: {
                readonly prefix: import("..").TextEntry<"UNCHARTED BODY">;
                readonly label: import("..").TextEntry<"Ringed colossus — banded giant">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"The ring system runs four hundred thousand kilometers rim to rim: braided ice herded by shepherd moonlets, grinding through a billion slow collisions. The bands beneath turn like poured bronze.">;
                    readonly m70: import("..").TextEntry<"A storm older than our species rides the third band: an anticyclone the size of an ocean, amber against the ammonia. It has been closing and reopening the same eye for ten thousand years.">;
                    readonly m100: import("..").TextEntry<"Survey complete. The rings archive everything the system ever broke: moons, comets, visitors. Somewhere in the braid there is always something worth craning aboard.">;
                };
                readonly outcome: {
                    readonly salvageCacheLarge: import("..").TextEntry<"Ring-braid salvage: ice-locked wreck fragments and shepherd-moon ore, craned from the braid (+{salvage} salvage)">;
                    readonly torpedoCache: import("..").TextEntry<"A munitions pod rides the outer braid, ice-glazed and intact. Torpedo stores +{torpedoes}">;
                    readonly radiationFlare: import("..").TextEntry<"The magnetosphere snaps a whip of charged ring-dust across our bow">;
                    readonly nothing: import("..").TextEntry<"The giant keeps its rings and its weather. Survey archived. The couch will want the pictures.">;
                };
            };
            readonly icefall_comet: {
                readonly prefix: import("..").TextEntry<"FAST RETURN">;
                readonly label: import("..").TextEntry<"Icefall comet — long-period wanderer">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Nucleus of primordial ice, off-gassing hard on the sunward side. The tail runs a thousand kilometers of glitter behind it. It is not slowing down for us.">;
                    readonly m70: import("..").TextEntry<"Spectrometry through the coma shows water ice, methane and organics, and a vein of something refined. This snowball has hit things and kept the pieces.">;
                    readonly m100: import("..").TextEntry<"Full series in the can. It has been falling since before the colonies, and it will still be falling when the log is dust. Match velocity if you want what it carries.">;
                };
                readonly outcome: {
                    readonly salvageCacheSmall: import("..").TextEntry<"Volatile ices flash-processed in the hold. The Guild pays for clean reaction mass (+{salvage} salvage)">;
                    readonly probeCache: import("..").TextEntry<"An old survey probe rides the nucleus, ice-welded and dormant. Refit crews recover +{probes} probes">;
                    readonly nothing: import("..").TextEntry<"It keeps falling. We keep flying. The pictures alone were worth the chase.">;
                };
            };
            readonly leviathan_husk: {
                readonly prefix: import("..").TextEntry<"MASSIVE RETURN">;
                readonly label: import("..").TextEntry<"Leviathan husk — deep-clade">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Organic hull, grown not built. The Vel'Shaar clade-markers are wrong. Older. A deep-clade the envoys don't sing about.">;
                    readonly m70: import("..").TextEntry<"Wound analysis: it died fighting. The weapon that opened its flank is in no SHIPNET registry. It fled here to die.">;
                    readonly m100: import("..").TextEntry<"Heart-chambers cold. Marrow-holds sealed honestly. Whatever killed it never got inside.">;
                };
                readonly outcome: {
                    readonly salvageCacheLarge: import("..").TextEntry<"The marrow-holds open to a patient hand: dense biometal, intact (+{salvage} salvage)">;
                    readonly ambush: import("..").TextEntry<"Movement in the wound channels. Scavengers were nesting in the carcass, and we woke them.">;
                    readonly torpedoCache: import("..").TextEntry<"Bone-racks hold crystallized ordnance: {torpedoes} warshots adapted to our tubes.">;
                    readonly nothing: import("..").TextEntry<"The husk keeps its dead. We seal the survey and let it drift.">;
                };
            };
            readonly precursor_ring: {
                readonly prefix: import("..").TextEntry<"GEOMETRIC RETURN">;
                readonly label: import("..").TextEntry<"Precursor ring — fractured">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A broken ring, far too regular to be rock. Material returns no spectrum SHIPNET has a name for.">;
                    readonly m70: import("..").TextEntry<"The fracture faces are polished. It wasn't broken; it was closed. Something didn't want this door used twice.">;
                    readonly m100: import("..").TextEntry<"The inner face repeats one glyph-chain a million times. Best translation: an arrow, pointing away. From what?">;
                };
                readonly outcome: {
                    readonly intel: import("..").TextEntry<"A dormant sentry lattice wakes for one sweep and hands us its eyes. Every contact resolved.">;
                    readonly salvageCacheSmall: import("..").TextEntry<"Fracture spall is refinable. Exotic stock recovered (+{salvage} salvage)">;
                    readonly nothing: import("..").TextEntry<"The ring gives nothing else. The arrow points away. We take the hint.">;
                };
            };
            readonly guild_cache: {
                readonly prefix: import("..").TextEntry<"CARGO CLUSTER">;
                readonly label: import("..").TextEntry<"Guild cargo pods — jettisoned">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Cargo pods in a slow spiral, transponders stripped. Free Haulers jettison pattern: dumped in a hurry, meant to be found.">;
                    readonly m70: import("..").TextEntry<"Pod seals intact. Guild manifest ghosts recoverable. Owner: whoever asks the dark first.">;
                    readonly m100: import("..").TextEntry<"Manifest decrypts: 'IF FOUND, KEEP IT. BETTER YOU THAN THEM.' The Guild writes honest ledgers.">;
                };
                readonly outcome: {
                    readonly salvageCacheSmall: import("..").TextEntry<"Pods cracked and craned aboard (+{salvage} salvage). Better us than them.">;
                    readonly torpedoCache: import("..").TextEntry<"One pod is a Guild munitions crate: {torpedoes} torpedoes in transit cradles">;
                    readonly probeCache: import("..").TextEntry<"One pod is a Guild survey kit with seals unbroken: {probes} probe re-slotted for our bay">;
                    readonly ambush: import("..").TextEntry<"Claim-jumpers were parked dark in the spiral, waiting for someone else to do the opening">;
                };
            };
            readonly siren_wreck: {
                readonly prefix: import("..").TextEntry<"AUTOMATED ALL-CLEAR">;
                readonly label: import("..").TextEntry<"Wreck — false transponder">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A wreck broadcasting a Guild ALL-CLEAR on loop. For the record, wrecks don't usually report themselves fine.">;
                    readonly m70: import("..").TextEntry<"Transponder checksum fails. The all-clear is spliced from three different ships. Somebody composed this lullaby.">;
                    readonly m100: import("..").TextEntry<"Under the loop, a second channel: a tally. It has counted forty-one approaches before ours.">;
                };
                readonly outcome: {
                    readonly ambush: import("..").TextEntry<"The lullaby stops mid-note. Powering-up signatures all around us: the tally wanted a round number">;
                    readonly salvageCacheSmall: import("..").TextEntry<"The bait was seeded with real cargo. We swept it aboard fast (+{salvage} salvage)">;
                    readonly nothing: import("..").TextEntry<"The trap is long abandoned; only its patience is left. We add ourselves to the tally and leave.">;
                };
            };
            readonly molt_husk: {
                readonly prefix: import("..").TextEntry<"ORGANIC RETURN">;
                readonly label: import("..").TextEntry<"Vel'Shaar molt-husk">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Organic lattice, hollow, kilometer-scale. Vel'Shaar clade-song reads dormant: this is no ship, it's a shed skin.">;
                    readonly m70: import("..").TextEntry<"The molt still carries living weld-spores in its seams. The Vel'Shaar leave nothing behind by accident.">;
                    readonly m100: import("..").TextEntry<"Clade-marker translation: a gift-glyph. The deep leaves its old coats where the cold ones drift.">;
                };
                readonly outcome: {
                    readonly hullBloom: import("..").TextEntry<"Weld-spores migrate to our seams and set. Plating mended (hull +{hull})">;
                    readonly intel: import("..").TextEntry<"The husk's sensory pits still function. Borrowing them lights every hunter in the dark.">;
                    readonly nothing: import("..").TextEntry<"The spores sleep too deep to wake. We log the gift we couldn't take.">;
                };
            };
            readonly radiant_rift: {
                readonly prefix: import("..").TextEntry<"SENSOR ANOMALY">;
                readonly label: import("..").TextEntry<"Radiant rift — spatial shear">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A seam of light where space folds wrong. The instruments disagree about its distance. All of them.">;
                    readonly m70: import("..").TextEntry<"The rift's edge sheds charged plumes on a slow cycle. Beautiful, and ionizing. Crew off the observation glass.">;
                    readonly m100: import("..").TextEntry<"For one frame of the scan, the rift showed a starfield that is not ours. Archived. Flagged. Not discussed.">;
                };
                readonly outcome: {
                    readonly radiationFlare: import("..").TextEntry<"A plume snaps across our bow: {damage} hull ablated. Risky science.">;
                    readonly intel: import("..").TextEntry<"Refraction through the shear bends the whole sector into focus. Every contact resolved.">;
                    readonly nothing: import("..").TextEntry<"The rift closes its eye. The survey holds more questions than it started with.">;
                };
            };
            readonly munitions_grave: {
                readonly prefix: import("..").TextEntry<"DEBRIS FIELD">;
                readonly label: import("..").TextEntry<"War-cache — scuttled munitions">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Drifting ordnance casings, decades cold. Fleet scuttle pattern: someone ended a war out here and dumped the leftovers.">;
                    readonly m70: import("..").TextEntry<"Casing serials burn-filed. Warheads inert... mostly. Handling protocol: gently.">;
                    readonly m100: import("..").TextEntry<"Cache core reached: stabilized warshots in Guild-compatible cradles. The war is over. Ammunition keeps.">;
                };
                readonly outcome: {
                    readonly torpedoCache: import("..").TextEntry<"Recovered ordnance winched aboard: {torpedoes} torpedoes re-cradled for our tubes.">;
                    readonly radiationFlare: import("..").TextEntry<"A degraded warhead cooks off during extraction: {damage} hull across the facing arc.">;
                    readonly nothing: import("..").TextEntry<"Every cradle we reach is spent. Someone gentler got here first.">;
                };
            };
            readonly wormhole_aperture: {
                readonly prefix: import("..").TextEntry<"LENSING RETURN">;
                readonly label: import("..").TextEntry<"Wormhole aperture — frozen starlight">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A ring of light hangs where no mass should be: starlight, bent and held. The stars inside the ring are years older than the sky around them.">;
                    readonly m70: import("..").TextEntry<"The lens is a throat. Something keeps it open: the survey reads structure in the curvature, patient as architecture.">;
                    readonly m100: import("..").TextEntry<"Aperture charted and slaved to the nav plot. The far mouth is real, and it is far. The bridge will hold for as long as we care to use it.">;
                };
                readonly outcome: {
                    readonly wormhole: import("..").TextEntry<"The aperture stabilizes. The far mouth resolves in the {system} system. Helm may jump the bridge.">;
                };
            };
            readonly ghost_signal: {
                readonly prefix: import("..").TextEntry<"REPEATING SIGNAL">;
                readonly label: import("..").TextEntry<"Ghost beacon — repeating">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A distress pattern on a dead band, repeating. The encryption is Guild-standard... six revisions obsolete.">;
                    readonly m70: import("..").TextEntry<"The pattern degrades mid-loop and restarts. That's not a beacon cycling. That's a beacon failing. It has been calling a long time.">;
                    readonly m100: import("..").TextEntry<"The signal repeats... it's old. Origin triangulated: one jump out. Someone is still waiting to be found.">;
                };
                readonly outcome: {
                    readonly questClue: import("..").TextEntry<"Coordinates decoded and slaved to the jump plot. Thread GHOST BEACON is open">;
                    readonly nothing: import("..").TextEntry<"The loop collapses into static before the origin resolves. The dark keeps this one.">;
                };
            };
            readonly beacon_wreck: {
                readonly prefix: import("..").TextEntry<"COLD RETURN">;
                readonly label: import("..").TextEntry<"Silent vessel — beacon source">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"There it is. A hull of grown chitin, engines dark, keel snapped by something patient. The beacon still cries from a dead throat.">;
                    readonly m70: import("..").TextEntry<"Interior sweep: crew spaces sealed from the inside. They rationed, and they waited. The math on the bulkheads counts nine hundred days.">;
                    readonly m100: import("..").TextEntry<"The last log-glyph, scorched into the throat of the beacon, reads: WE HELD. The holds are intact. Release the survey drones.">;
                };
                readonly outcome: {
                    readonly salvageCacheLarge: import("..").TextEntry<"The holds crack open clean: refined alloys, sealed cores (+{salvage} salvage)">;
                    readonly ambush: import("..").TextEntry<"The beacon wasn't only calling us. Salvage-runners drop in hot with claim-charges armed">;
                };
            };
            readonly sleeper_vault: {
                readonly prefix: import("..").TextEntry<"WORKED-STONE RETURN">;
                readonly label: import("..").TextEntry<"Precursor vault — the sleeper seam">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A seam of worked stone a kilometer long, stitched shut with metal that predates every catalog. The relic's coordinates end here.">;
                    readonly m70: import("..").TextEntry<"Seismic return: the seam is hollow, and the hollow is warm. Power still cycles in there, slow as a sleeping pulse.">;
                    readonly m100: import("..").TextEntry<"Survey complete. One access point: a core node breathing under the seam. The vault will open for a tap. Nothing in the survey says what closes it.">;
                };
                readonly outcome: {
                    readonly nothing: import("..").TextEntry<"The seam holds its breath. The core node waits on our nerve.">;
                    readonly intel: import("..").TextEntry<"Cresting the seam, our sensors ride its watch-lattice for one sweep. Every contact in the sector resolves">;
                };
                readonly poiOutcome: {
                    readonly core: {
                        readonly salvageVault: import("..").TextEntry<"The core opens like a seed-vault: precursor stock beyond honest appraisal (+{salvage} salvage)">;
                        readonly awakening: import("..").TextEntry<"The seam was never a vault. It was a cradle, and the tap reads as a birth-cry. The GUARDIAN wakes">;
                    };
                };
            };
            readonly debris_heart: {
                readonly prefix: import("..").TextEntry<"DENSE CORE RETURN">;
                readonly label: import("..").TextEntry<"Foundry hulk — the storm's heart">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Every rock in this storm assays the same: slag, one pour, one furnace. The furnace is still ahead of us.">;
                    readonly m70: import("..").TextEntry<"Resolve: a foundry ship, broken-backed, holds still shedding. The storm isn't weather. It's a wound that never clotted.">;
                    readonly m100: import("..").TextEntry<"Survey complete. The forge-hold is cold and sealed, but one retrieval seam reads INTACT. Whatever she was pouring when she broke is still in there.">;
                };
                readonly outcome: {
                    readonly nothing: import("..").TextEntry<"The hulk holds its heading through its own debris, dead center of the storm it made.">;
                    readonly salvageCacheLarge: import("..").TextEntry<"The survey pass skims her outer spill: graded foundry stock, free-floating (+{salvage} salvage)">;
                };
                readonly poiOutcome: {
                    readonly relic: {
                        readonly salvageVault: import("..").TextEntry<"The seam opens on the last pour, cooled in its cradle: alloy beyond honest appraisal (+{salvage} salvage)">;
                        readonly salvageJackpot: import("..").TextEntry<"The probe walks the seam and lifts ingot after ingot, each one stamped with a dead fleet's mark (+{salvage} salvage)">;
                        readonly torpedoes: import("..").TextEntry<"The seam isn't holding ingots. It's a magazine, dry-racked and intact: {torpedoes} torpedoes re-tubed">;
                        readonly awakening: import("..").TextEntry<"The pour never finished. The crew stopped it and welded the hold shut from outside. The seam opens. Something pours out">;
                    };
                };
            };
            readonly ice_moon: {
                readonly prefix: import("..").TextEntry<"UNCHARTED BODY">;
                readonly label: import("..").TextEntry<"Ice moon — cryovolcanic">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A shell of blue-white ice, fracture-scarred pole to pole. Under the crust: liquid. Warm liquid. Something is keeping it warm.">;
                    readonly m70: import("..").TextEntry<"Cryo-geysers vent on a slow rhythm, too slow for tides and too regular for weather. The subsurface sea has a heartbeat.">;
                    readonly m100: import("..").TextEntry<"Deep sonar returns from under the ice: long shapes, moving with intent, keeping pace with our orbit. The sea is watching us back. Survey sealed.">;
                };
                readonly outcome: {
                    readonly salvageCacheSmall: import("..").TextEntry<"A geyser throws refined brine-metals clear of the gravity well. They're skimmed and racked (+{salvage} salvage)">;
                    readonly radiationFlare: import("..").TextEntry<"A cryo-plume detonates off our bow: flash-frozen shrapnel across the facing arc ({damage} hull)">;
                    readonly nothing: import("..").TextEntry<"The ice keeps its sea and the sea keeps its shapes. We keep our distance. Survey archived.">;
                };
            };
            readonly worldring: {
                readonly prefix: import("..").TextEntry<"COLOSSAL RETURN">;
                readonly label: import("..").TextEntry<"Worldring — habitable band">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"The return is a ring: a band of worked matter wide enough to walk continents on, spinning for gravity. Nobody builds this. Somebody built this.">;
                    readonly m70: import("..").TextEntry<"The inner face holds soil, dry seas, and cities gone to glass. Atmosphere retention walls still stand. The lights are off but the floor is warm.">;
                    readonly m100: import("..").TextEntry<"Spin-bearing analysis: the ring has been decelerating for ten thousand years. Somebody is letting it wind down gently. A long goodbye, tended by something patient.">;
                };
                readonly outcome: {
                    readonly salvageCacheLarge: import("..").TextEntry<"A retainer-wall breach gives up structural alloy no forge of ours can pour (+{salvage} salvage)">;
                    readonly intel: import("..").TextEntry<"The ring's traffic lattice still watches its sky, and for one sweep, so do we. Every contact resolved">;
                    readonly radiationFlare: import("..").TextEntry<"A spin-bearing arcs as we cross its shadow. Discharge rakes the facing arc ({damage} hull)">;
                    readonly nothing: import("..").TextEntry<"Ten thousand years of goodbye, and we are not part of it. Survey archived with respect.">;
                };
            };
            readonly war_sphere: {
                readonly prefix: import("..").TextEntry<"COLOSSAL RETURN">;
                readonly label: import("..").TextEntry<"Battle sphere — cold fortress">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A sphere of armor a hundred ships across, dark on every band. The equatorial trench is a weapons row. All of it is pointed at nothing now.">;
                    readonly m70: import("..").TextEntry<"The focus dish at the crown could crack a moon. Capacitor banks read spent, not drained. This fortress fired everything it had, once.">;
                    readonly m100: import("..").TextEntry<"Battle ledger recovered from the trench: it fired everything, at everything, and when it was done it was alone. The garrison walked into the dark rather than count the cost. Holds intact.">;
                };
                readonly outcome: {
                    readonly torpedoCache: import("..").TextEntry<"The magazine decks hold stabilized warshots on cradles our tubes accept: {torpedoes} torpedoes recovered">;
                    readonly ambush: import("..").TextEntry<"The trench was not empty. Squatters run powered-down reactors in the gun galleries, and we just knocked on their door">;
                    readonly salvageCacheLarge: import("..").TextEntry<"Armor spall from the great trench refines beautifully (+{salvage} salvage)">;
                    readonly nothing: import("..").TextEntry<"The fortress keeps its silence. Some victories should stay unexamined. Survey archived.">;
                };
            };
            readonly star_cradle: {
                readonly prefix: import("..").TextEntry<"IMPOSSIBLE RETURN">;
                readonly label: import("..").TextEntry<"Stellar enclosure — the star cradle">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"The sensors report a star where no star shows. It is there, caged behind a lattice of panels the size of worlds, drinking its light down to a whisper.">;
                    readonly m70: import("..").TextEntry<"The lattice is incomplete: one aperture gate stands open, wide enough for a fleet. Light pours out of it like a wound. The builders left the door open.">;
                    readonly m100: import("..").TextEntry<"Power draw analysis: the cage is not harvesting the star. It is keeping it, banked low like a hearth-fire against a winter that has not come yet. Filed under: prepare.">;
                };
                readonly outcome: {
                    readonly intel: import("..").TextEntry<"Riding the cage's collector lattice for one sweep lights the whole sector. Every contact resolved">;
                    readonly salvageCacheLarge: import("..").TextEntry<"A shed collector panel, kilometers of it, cuts down into hold-stock (+{salvage} salvage)">;
                    readonly radiationFlare: import("..").TextEntry<"The aperture gate flares as we cross its throw. Caged starlight rakes the facing arc ({damage} hull)">;
                    readonly nothing: import("..").TextEntry<"The hearth is banked and the winter has not come. We leave the door as we found it. Survey archived.">;
                };
            };
            readonly haven_station: {
                readonly prefix: import("..").TextEntry<"STRUCTURED RETURN">;
                readonly label: import("..").TextEntry<"Freeport ring — silent anchorage">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A wheel station on a slow, perfect spin. Docking arms extended, approach lights cycling green, with no traffic and no chatter. An open door in the dark.">;
                    readonly m70: import("..").TextEntry<"The habitat ring is pressurized and warm. Registry ghosts name it a Free Haulers waystation, abandoned in good order with its docks bonded and stores sealed. Guild custom: stocked for whoever needs it.">;
                    readonly m100: import("..").TextEntry<"The dockmaster's ledger closes with a standing entry: 'BERTH FREE. TAKE WHAT KEEPS YOU FLYING. LOG WHAT YOU TAKE. THE ROAD PROVIDES.' The road provides.">;
                };
                readonly outcome: {
                    readonly salvageCacheSmall: import("..").TextEntry<"Loose deck cargo winched across on the courtesy line (+{salvage} salvage). The road provides.">;
                    readonly intel: import("..").TextEntry<"The anchorage's traffic control still keeps honest books. Every hull it has pinged resolves on our plot">;
                    readonly nothing: import("..").TextEntry<"We log our visit in the dockmaster's ledger, as custom asks. The anchorage spins on, patient for the next keel.">;
                };
                readonly poiOutcome: {
                    readonly hatch: {
                        readonly salvageJackpot: import("..").TextEntry<"The bonded dock takes our clamps like an old friend. Sealed Guild stores are released to the manifest (+{salvage} salvage)">;
                        readonly salvageLarge: import("..").TextEntry<"The freight lock cycles clean: palletized stock, ours by dock custom (+{salvage} salvage)">;
                        readonly torpedoes: import("..").TextEntry<"The quartermaster's cage holds warshots on Guild-standard cradles: {torpedoes} torpedoes re-tubed">;
                    };
                    readonly core: {
                        readonly reactorFlush: import("..").TextEntry<"Shore power takes our load while the tap runs. Reactor core flushed cold: +{reactor} core health">;
                        readonly salvageLarge: import("..").TextEntry<"The anchorage's fuel bunker meters us a full draw without complaint (+{salvage} salvage)">;
                        readonly torpedoes: import("..").TextEntry<"The ordnance bunker answers our tap code: {torpedoes} torpedoes craned aboard">;
                    };
                };
            };
            readonly ring_pilgrim: {
                readonly prefix: import("..").TextEntry<"COHERENT DRIVE PLUME">;
                readonly label: import("..").TextEntry<"Ring-drive pilgrim — passing wonder">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A vessel under way: a slim hull threading a drive ring wider than a city. Its wake is clean: no exhaust, no debris, no noise. Just bent space, politely returned.">;
                    readonly m70: import("..").TextEntry<"It has seen us. The ring's light dips once, slowly and deliberately, then resumes. Cross-referencing every contact protocol on file: closest match is a bow.">;
                    readonly m100: import("..").TextEntry<"Full survey complete, and it allowed it. It held course and speed the whole read, hiding nothing. Whoever they are, they wanted to be understood. The archive will outlive us all.">;
                };
                readonly outcome: {
                    readonly salvageCacheLarge: import("..").TextEntry<"A crate detaches from the pilgrim's wake and drifts to our bow, ceremonially slow: a gift, given without a word (+{salvage} salvage)">;
                    readonly intel: import("..").TextEntry<"The pilgrim opens its charts to our array for one long moment. Every contact in the sector resolves.">;
                    readonly probeCache: import("..").TextEntry<"It returns something we lost: a survey probe, decades dead by its serial, cleaned and working (+{probes} probe). We never flew this probe.">;
                    readonly nothing: import("..").TextEntry<"The ring dips once more and the pilgrim passes on, unhurried, outbound to somewhere the charts end. Safe roads, stranger.">;
                };
            };
            readonly collapsed_star: {
                readonly prefix: import("..").TextEntry<"GRAVITIC ANOMALY">;
                readonly label: import("..").TextEntry<"Collapsed star — accretion furnace">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"The instruments agree on nothing near the return except this: light goes in and does not come out. Accretion ring at full furnace. Helm: mind the drift.">;
                    readonly m70: import("..").TextEntry<"The ring is chewing a captured convoy. Hull fragments are smeared into light around the horizon. Some of those keels are still signaling as they go down.">;
                    readonly m100: import("..").TextEntry<"Survey complete from a respectful arc. The well keeps what it takes. The frozen last light of everything it has eaten hangs at the horizon like a museum. We took pictures and kept our distance.">;
                };
                readonly outcome: {
                    readonly intel: import("..").TextEntry<"Gravitational lensing bends the whole sector into our array, and every contact is resolved in the well's terrible glass">;
                    readonly salvageCacheLarge: import("..").TextEntry<"Frame-dragged debris rides stable orbits at the ring's edge. A careful skim pays out (+{salvage} salvage)">;
                    readonly radiationFlare: import("..").TextEntry<"The furnace belches relativistic spray across the facing arc ({damage} hull)">;
                    readonly nothing: import("..").TextEntry<"The well holds its dead and its light. Survey archived; the helm's hands were steady.">;
                };
            };
            readonly spindle_star: {
                readonly prefix: import("..").TextEntry<"PERIODIC EMITTER">;
                readonly label: import("..").TextEntry<"Neutron beacon — millisecond spindle">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A dead star spun up to a scream, sweeping the sector with a radiation lash on a clockwork cycle. Every pass hammers the hull. Count the beat, Helm.">;
                    readonly m70: import("..").TextEntry<"The beat is perfect. Navigators used this spindle as a lighthouse once. Old jump-charts triangulate off it. We are somewhere ships used to be.">;
                    readonly m100: import("..").TextEntry<"Survey complete between lashes. The spindle will keep its beat for a billion years, marking a road nobody sails anymore. The lighthouse outlived its sea.">;
                };
                readonly outcome: {
                    readonly intel: import("..").TextEntry<"The lash backlights every hull in the sector like a flashbulb. Contacts resolved">;
                    readonly radiationFlare: import("..").TextEntry<"Mistimed by half a beat. The lash catches us square ({damage} hull)">;
                    readonly nothing: import("..").TextEntry<"The beat goes on, indifferent. Survey archived; our timing was good.">;
                };
            };
            readonly ember_veil: {
                readonly prefix: import("..").TextEntry<"DIFFUSE RETURN">;
                readonly label: import("..").TextEntry<"Emission nebula — ember veil">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A standing bank of ionized dust, lit from inside by a protostar's first light. Sensor returns soften at its skirts: ours and everyone else's.">;
                    readonly m70: import("..").TextEntry<"Inside the veil our wake goes quiet: the dust drinks our signature. A ship could hide in here. Ships have, too. The dust holds old hull-shadows like fossils.">;
                    readonly m100: import("..").TextEntry<"Survey complete. The protostar will light for real in a hundred millennia and burn this hiding place away. Until then, the veil keeps secrets for anyone quiet enough to deserve them.">;
                };
                readonly outcome: {
                    readonly salvageCacheSmall: import("..").TextEntry<"Dust-lane condensate, electrostatically caked on our hull, assays as refined stock (+{salvage} salvage)">;
                    readonly probeCache: import("..").TextEntry<"One of the fossil hull-shadows is real: a lost survey probe adrift in the lane, re-slotted for our bay (+{probes} probe)">;
                    readonly nothing: import("..").TextEntry<"The veil keeps its fossils and its quiet. We log the hiding place. A crew remembers where the covers are.">;
                };
            };
            readonly drift_medusa: {
                readonly prefix: import("..").TextEntry<"SOFT RETURN">;
                readonly label: import("..").TextEntry<"Void medusa — drifting gas-bag">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"The return has no hull. It breathes: a translucent bell the size of a corvette, pulsing on the solar wind, trailing kilometers of glowing frond.">;
                    readonly m70: import("..").TextEntry<"It is grazing the sector's dust lane, harmless as weather. The fronds sting anything that touches them, and nothing out here is foolish enough to try.">;
                    readonly m100: import("..").TextEntry<"Full biological series recorded. It drifted through our shadow as we finished, bell-light rippling, the closest thing to a greeting a gas-bag has. Logged as: neighborly.">;
                };
                readonly outcome: {
                    readonly hullBloom: import("..").TextEntry<"Sloughed bell-membrane settles over our scarring and sets like lacquer (hull +{hull})">;
                    readonly salvageCacheSmall: import("..").TextEntry<"Shed frond-lipids, cold-slotted for the Guild's xeno-desk (+{salvage} salvage)">;
                    readonly nothing: import("..").TextEntry<"It pulses on down the dust lane, unbothered. Some encounters are just two travelers passing.">;
                };
            };
            readonly crystal_choir: {
                readonly prefix: import("..").TextEntry<"FACETED RETURN">;
                readonly label: import("..").TextEntry<"Crystalline entity — lattice choir">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A branching lattice of living crystal, kilometers of it, growing in the open void. Every facet rings at a different pitch. Together they make a chord.">;
                    readonly m70: import("..").TextEntry<"The chord changes as we approach. Our engine harmonics are being folded into the song. It is singing about us. The feeding field at its core flexes.">;
                    readonly m100: import("..").TextEntry<"Survey complete: silicon-lattice life, mineral-rich beyond any honest seam, and it sang our hull number back to us as we left. The Guild has no form for this. Filing under both.">;
                };
                readonly outcome: {
                    readonly salvageCacheLarge: import("..").TextEntry<"Shed facets drift free of the choir: near-pure lattice stock, sung loose and gathered gently (+{salvage} salvage)">;
                    readonly radiationFlare: import("..").TextEntry<"The feeding field flexes our way. A resonance spike shears across the facing arc ({damage} hull)">;
                    readonly nothing: import("..").TextEntry<"The choir sings on, indifferent to appraisal. We leave before it learns our whole song.">;
                };
            };
            readonly solar_grazer: {
                readonly prefix: import("..").TextEntry<"BIOLOGIC RETURN">;
                readonly label: import("..").TextEntry<"Stellar manta — sail-wing grazer">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Wings. Living solar sails, a kilometer tip to tip, banking on the light pressure. It grazes the photon flux the way herd-beasts graze a plain.">;
                    readonly m70: import("..").TextEntry<"It tolerates our shadow at survey range, barely. Flight-response analysis: one act of aggression and it dives for deep sky. Guns cold, everyone.">;
                    readonly m100: import("..").TextEntry<"Full xeno-biology series: feeding, banking, the long slow wing-song of a thing that has never needed to fear anything. The archive pays for wonder like this. Weapons stayed cold. Well flown.">;
                };
                readonly outcome: {
                    readonly salvageCacheLarge: import("..").TextEntry<"The Guild xeno-desk pays a full-series premium for a living grazer study (+{salvage} salvage)">;
                    readonly hullBloom: import("..").TextEntry<"Sail-dust from its wake settles into our plating and sets (hull +{hull})">;
                };
            };
            readonly reef_bloom: {
                readonly prefix: import("..").TextEntry<"SCATTERED BIOMASS">;
                readonly label: import("..").TextEntry<"Void coral bloom — drifting reef">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A forest with no world under it: branching calcite colonies anchored to a gravel of dead comets, polyps open to the starlight.">;
                    readonly m70: import("..").TextEntry<"The reef is growing toward the nearest star at a meter a century. Patience as a survival strategy. The polyp-light ripples when our floodlights cross it.">;
                    readonly m100: import("..").TextEntry<"Survey complete. In ten million years this will be a wall across the sky. We were here when it was a garden. The log will remember for us.">;
                };
                readonly outcome: {
                    readonly hullBloom: import("..").TextEntry<"Reef polyps colonize our micrometeorite scarring and set like poured stone (hull +{hull})">;
                    readonly salvageCacheSmall: import("..").TextEntry<"Dead calcite frond, dense as good ore, craned aboard (+{salvage} salvage)">;
                    readonly nothing: import("..").TextEntry<"The garden grows at its own pace and keeps its own counsel. Survey archived.">;
                };
            };
            readonly mistweaver: {
                readonly prefix: import("..").TextEntry<"IONIZED HAZE">;
                readonly label: import("..").TextEntry<"Mistweaver — sentient plasma">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A drifting bank of plasma that will not hold a classification. It reorganizes every time the survey window closes. It is neither weather nor machinery. It is deliberate.">;
                    readonly m70: import("..").TextEntry<"It is weaving our sensor pulses back at us, reordered and restructured, almost syntax. The linguistics package flags a 92% match for one form: interrogative.">;
                    readonly m100: import("..").TextEntry<"The weave resolves at last: one pattern held steady across the whole bank, patient as a teacher with a slow student. It is a question, and it is waiting for our answer.">;
                };
                readonly outcome: {
                    readonly questClue: import("..").TextEntry<"The question unfolds into coordinates, woven and folded like cloth, now logged. Thread THE WEAVER'S QUESTION is open">;
                    readonly nothing: import("..").TextEntry<"The weave disperses mid-pattern, its question unasked, or withdrawn. The haze drifts on, and we are not sure which of us failed the interview.">;
                };
            };
            readonly weaver_loom: {
                readonly prefix: import("..").TextEntry<"WOVEN RETURN">;
                readonly label: import("..").TextEntry<"The Weaver's loom — precursor lattice">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"The coordinates end at a loom: a lattice of worked space wider than a moon, threads of bent light strung taut between anchor-masses. The mistweaver's question came from here.">;
                    readonly m70: import("..").TextEntry<"The loom is running, slowly. It is weaving something out of vacuum and patience, and it is most of the way done. The pattern-signal at its heart is the question again, louder.">;
                    readonly m100: import("..").TextEntry<"Survey complete. One access point: the woven signal at the heart-shuttle. Decode it and we answer the question. Nothing in the survey says what the loom does with a wrong answer.">;
                };
                readonly outcome: {
                    readonly nothing: import("..").TextEntry<"The loom holds its thread. The heart-shuttle waits on our answer.">;
                    readonly intel: import("..").TextEntry<"Cresting the anchor-masses, our sensors ride the loom's warp-threads for one sweep. Every contact in the sector resolves">;
                };
                readonly poiOutcome: {
                    readonly signal: {
                        readonly salvageVault: import("..").TextEntry<"The loom accepts the answer and weaves payment: sheets of stable exotic lattice spool into our hold (+{salvage} salvage)">;
                        readonly awakening: import("..").TextEntry<"The loom accepts the answer, and asks a harder question. The warden unfolds from the lattice: the CHIMERA takes our measure">;
                    };
                };
            };
            readonly sentinel_signal: {
                readonly prefix: import("..").TextEntry<"PATTERNED EMISSION">;
                readonly label: import("..").TextEntry<"Sentinel signal — patient chirp">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A mechanical chirp repeating on a band nobody licenses. It is no distress loop and no beacon. It is a tally, counting something patiently.">;
                    readonly m70: import("..").TextEntry<"Registry sweep complete: nothing. The encoding predates every catalog SHIPNET can reach, older than the Guild and older than the charts. And it is not degrading.">;
                    readonly m100: import("..").TextEntry<"The chirp is not broadcast at the dark. It reports to something, on a schedule kept longer than recorded history. The return path triangulates clean: a dead relay, one jump deeper in.">;
                };
                readonly outcome: {
                    readonly questClue: import("..").TextEntry<"Return path slaved to the jump plot. The signal triangulates to a dead relay in the next system. Thread THE SENTINEL SIGNAL is open">;
                };
            };
            readonly sentinel_relay: {
                readonly prefix: import("..").TextEntry<"DEAD MACHINE RETURN">;
                readonly label: import("..").TextEntry<"Sentinel relay — dormant switchboard">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"The return path ends at a lattice: antenna vanes kilometers long, machine-grown, cold on every band. The chirp's home switchboard, dark at its post.">;
                    readonly m70: import("..").TextEntry<"Not dead. Dormant. Trickle power cycles under the vanes, slow as a wintering pulse. The chirp routes through this place, outbound, to somewhere deeper than the charts go.">;
                    readonly m100: import("..").TextEntry<"Survey complete. One access point: the routing signal at the heart of the lattice. Decode it and we learn who is listening. Nothing in the survey says what listening costs.">;
                };
                readonly outcome: {
                    readonly nothing: import("..").TextEntry<"The lattice holds its winter pulse. The routing signal waits on our nerve.">;
                    readonly intel: import("..").TextEntry<"Cresting the antenna vanes, our sensors ride the relay's watch-net for one sweep. Every contact in the sector resolves.">;
                };
                readonly poiOutcome: {
                    readonly signal: {
                        readonly lore: import("..").TextEntry<"The decode threads clean and the relay wakes long enough to route it: one handshake, outbound. Then the chirp stops. After centuries of counting, silence. Something heard us. Something answered back.">;
                    };
                };
            };
            readonly void_contact: {
                readonly prefix: import("..").TextEntry<"NULL RETURN">;
                readonly label: import("..").TextEntry<"The Void — structured absence">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"The instruments agree for once, and what they agree on is nothing: no mass, no light and no signal. It is a hole in the sky with a heading. Holes do not have headings.">;
                    readonly m70: import("..").TextEntry<"Occlusion mapping: background stars wink out along its leading edge and return along its trailing one. The nothing has a length. And a bow.">;
                    readonly m100: import("..").TextEntry<"Integration complete. The Void is a hull, kilometers of it, cloaked beyond anything on the books and underway, holding course for the inner colonies. It is not an anomaly. It is a ship.">;
                };
                readonly outcome: {
                    readonly nothing: import("..").TextEntry<"The survey seals with one addendum, machine-flagged low confidence: the hull's wake reads colder than vacuum. As if it were saving every joule it has for the running.">;
                };
            };
            readonly sanctuary_berth: {
                readonly prefix: import("..").TextEntry<"OCCLUDED COLOSSUS">;
                readonly label: import("..").TextEntry<"The ark — cloaked, underway">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"Up close the cloak thins to a shimmer: hull plating grown, not milled, in courses older than any registry. The ark does not hail, does not slow, does not care that we are here.">;
                    readonly m70: import("..").TextEntry<"Deep radar through an open lattice-work flank shows berths: thousands upon thousands, racked like honeycomb, each one holding a faceted crystal form. They are not cargo. They have pulses. Slow ones.">;
                    readonly m100: import("..").TextEntry<"Survey complete. A sleeper ark under full cloak, crewed by no one awake, running hard from the direction it will not point its sensors at. Amidships, one system still speaks: a woven record, transmitting to nobody. The survey does not say who they are. The record might.">;
                };
                readonly outcome: {
                    readonly nothing: import("..").TextEntry<"The ark holds her course and her silence. The berths pulse on, slow as winter.">;
                    readonly intel: import("..").TextEntry<"Cresting her dorsal courses, our sensors ride the ark's own watch-lattice for one sweep. Every contact in the sector resolves.">;
                };
                readonly poiOutcome: {
                    readonly relic: {
                        readonly lore: import("..").TextEntry<"The probe lifts a graven panel from the hull course. The glyph-chain repeats one sequence, over and over, the way a hand writes a name it is afraid of forgetting.">;
                        readonly salvageLarge: import("..").TextEntry<"A sheared stanchion of grown hull-metal, drifting in the ark's wake. No forge of ours can pour it, and the registry pays for that (+{salvage} salvage)">;
                    };
                };
            };
            readonly void_relay: {
                readonly prefix: import("..").TextEntry<"TRAILING RETURN">;
                readonly label: import("..").TextEntry<"Archive relay — jettisoned">;
                readonly scan: {
                    readonly m35: import("..").TextEntry<"A drum of grown metal tumbling in the ark's old wake, dropped like a breadcrumb, or a black box. The weave-signal from the ark's record terminates here.">;
                    readonly m70: import("..").TextEntry<"The drum is a relay. It has been re-transmitting the ark's record outward, on a loop, for longer than our charts have names. Not a distress call. A warning, addressed to whoever comes after.">;
                    readonly m100: import("..").TextEntry<"Survey complete. The record's tail section lives in this drum, the part the ark stopped transmitting. One access point: the severed record. Decode it and the story ends. Nothing in the survey says we will like the ending.">;
                };
                readonly outcome: {
                    readonly nothing: import("..").TextEntry<"The drum tumbles on, patient. The severed record waits on our nerve.">;
                    readonly salvageCacheSmall: import("..").TextEntry<"The relay's shed casing panels assay as exotic stock (+{salvage} salvage)">;
                };
            };
        } & import("../types").TextGroup;
        readonly poiLabel: {
            readonly mineral: {
                readonly magnetiteSeam: import("..").TextEntry<"MAGNETITE SEAM">;
                readonly iridiumBloom: import("..").TextEntry<"IRIDIUM BLOOM">;
                readonly crystalShearField: import("..").TextEntry<"CRYSTAL SHEAR FIELD">;
                readonly rareEarthVein: import("..").TextEntry<"RARE-EARTH VEIN">;
            };
            readonly relic: {
                readonly precursorShard: import("..").TextEntry<"PRECURSOR SHARD">;
                readonly gravenMonolith: import("..").TextEntry<"GRAVEN MONOLITH">;
                readonly sealedReliquary: import("..").TextEntry<"SEALED RELIQUARY">;
                readonly glyphCutPlate: import("..").TextEntry<"GLYPH-CUT PLATE">;
            };
            readonly hatch: {
                readonly sealedAirlock: import("..").TextEntry<"SEALED AIRLOCK">;
                readonly weldedBlastHatch: import("..").TextEntry<"WELDED BLAST HATCH">;
                readonly breachedCargoMaw: import("..").TextEntry<"BREACHED CARGO MAW">;
            };
            readonly signal: {
                readonly repeatingEmitter: import("..").TextEntry<"REPEATING EMITTER">;
                readonly buriedBlackBox: import("..").TextEntry<"BURIED BLACK BOX">;
                readonly coherentEchoSource: import("..").TextEntry<"COHERENT ECHO SOURCE">;
            };
            readonly organism: {
                readonly sporeBloom: import("..").TextEntry<"SPORE BLOOM">;
                readonly dormantBiomass: import("..").TextEntry<"DORMANT BIOMASS">;
                readonly thingInTheIce: import("..").TextEntry<"THING IN THE ICE">;
                readonly reefPolypCluster: import("..").TextEntry<"REEF POLYP CLUSTER">;
            };
            readonly core: {
                readonly livePowerCore: import("..").TextEntry<"LIVE POWER CORE">;
                readonly fuelCellCache: import("..").TextEntry<"FUEL CELL CACHE">;
                readonly hummingCapacitorBank: import("..").TextEntry<"HUMMING CAPACITOR BANK">;
            };
        } & import("../types").TextGroup;
        readonly poiOutcome: {
            readonly mineral: {
                readonly salvageSmall: import("..").TextEntry<"Beam-cutters bite clean. {salvage} salvage of graded ore winched aboard">;
                readonly salvageLarge: import("..").TextEntry<"The seam runs deeper than the survey guessed: {salvage} salvage of dense stock recovered">;
                readonly salvageJackpot: import("..").TextEntry<"ASSAY FLAG: rare-earth lattice, near-pure. The hold takes {salvage} salvage and the Guild will want to know where">;
                readonly tremor: import("..").TextEntry<"The seam destabilizes mid-cut. A tremor shears debris across our beam mounts ({damage} hull)">;
            };
            readonly relic: {
                readonly salvageLarge: import("..").TextEntry<"The probe lifts it whole. Precursor work: the registry pays {salvage} salvage for provenance alone">;
                readonly questClue: import("..").TextEntry<"Under the patina: coordinates, cut to outlast stars. The relic is a key, and its coordinates are logged. Thread SLEEPER SEAM is open">;
                readonly cursed: import("..").TextEntry<"The probe cradles it aboard. Every instrument on the ship stutters once, together. The relic is warm. It should not be warm.">;
                readonly salvageSmall: import("..").TextEntry<"It crumbles in the probe's clamps, but the fragments still assay well (+{salvage} salvage)">;
            };
            readonly hatch: {
                readonly salvageJackpot: import("..").TextEntry<"The probe threads the dark and finds the crew's last cache: sealed, intact, unclaimed (+{salvage} salvage)">;
                readonly lore: import("..").TextEntry<"The probe's lamp crosses a log slate bolted by the hatch. The last entry is one word, carved deep enough to split the stylus: BELOW.">;
                readonly probeLost: import("..").TextEntry<"Probe telemetry: interior breach… ambient heat rising… movement return. Rechecking. Rechecking.">;
                readonly awakening: import("..").TextEntry<"The hold was occupied. A brood-thing uncoils from the dark and exits through the hull">;
            };
            readonly signal: {
                readonly intel: import("..").TextEntry<"Decoder locks the pattern: it's a WATCH-NET, and we're inside it looking out. Every hostile in the sector resolves">;
                readonly questClue: import("..").TextEntry<"The signal unbraids into nav-verse: old coordinates, still singing, now logged. Thread SLEEPER SEAM is open">;
                readonly trapPing: import("..").TextEntry<"The decode handshakes back. It was a snare-line, and we just pulled it">;
                readonly salvageSmall: import("..").TextEntry<"It's a Guild claim-buoy, decades stale. Registering the claim as ours pays {salvage} salvage">;
            };
            readonly organism: {
                readonly hullPatch: import("..").TextEntry<"The sample takes to our scarred plating like it missed us. Weld-growth sets (hull +{hull})">;
                readonly salvageSmall: import("..").TextEntry<"Culture sealed and cold-slotted. The Guild's xeno-desk pays {salvage} salvage, sight unseen">;
                readonly infestation: import("..").TextEntry<"The sample was a swarm seed. Hull-chewers in the return line! Damage control burning them out ({drain} hull/s for {duration}s)">;
            };
            readonly core: {
                readonly reactorFlush: import("..").TextEntry<"The cell drinks our waste heat as it drains. Reactor core flushed cold, +{reactor} core health">;
                readonly torpedoes: import("..").TextEntry<"Inside the housing: warshot cradles on Guild standard. {torpedoes} torpedoes re-tubed">;
                readonly salvageLarge: import("..").TextEntry<"Capacitor banks siphoned to the last coulomb (+{salvage} salvage)">;
                readonly tremor: import("..").TextEntry<"The cell destabilizes under the tap. Discharge arcs across the hull ({damage} hull)">;
            };
        } & import("../types").TextGroup;
        readonly terminal: {
            readonly wreck: {
                readonly line1: import("..").TextEntry<"…day 61: the knocking in the aft trunk keeps perfect time with the reactor. Chief says resonance. Chief is wrong.">;
                readonly line2: import("..").TextEntry<"CARGO MANIFEST (amended): 40t ore, 12 cryo berths, 11 OCCUPIED. Do not open berth 7.">;
                readonly line3: import("..").TextEntry<"auto-log: inner airlock cycled 214 times in one watch. No suit checked out.">;
                readonly line4: import("..").TextEntry<"…we sealed C-deck and welded the frames. If you are reading this, do not trust the quiet.">;
                readonly line5: import("..").TextEntry<"MED BAY: crew complaints of 'being counted'. Prescribed rest. Complaints stopped. All of them.">;
                readonly line6: import("..").TextEntry<"final entry: it learned the door codes. We never taught it the door codes.">;
            };
            readonly cave: {
                readonly line1: import("..").TextEntry<"SURVEY TEAM 3: the seams glitter wrong down here. Assay says nothing. Assay is blind.">;
                readonly line2: import("..").TextEntry<"…drill head came back polished. Not worn. Polished.">;
                readonly line3: import("..").TextEntry<"auto-beacon: seismic event 4.1, pattern repeats every 47 minutes. Exactly.">;
                readonly line4: import("..").TextEntry<"camp log: Ilsa counted the lamps twice. Nineteen. We packed twelve.">;
                readonly line5: import("..").TextEntry<"…the tunnels are warmer the deeper we go. Nobody wants to say 'breathing'.">;
            };
            readonly organic: {
                readonly line1: import("..").TextEntry<"BIOPSY 12: the tissue heals around the sampler. It keeps the sampler.">;
                readonly line2: import("..").TextEntry<"…acoustics team says the hum is digestion. They are joking. Please let them be joking.">;
                readonly line3: import("..").TextEntry<"field note: the walls flinch from the lamps now. Day one they didn't.">;
                readonly line4: import("..").TextEntry<"…do not run. It notices running. Walk to the boats and it will only watch.">;
            };
            readonly halls: {
                readonly line1: import("..").TextEntry<"DOCENT RECORD: gallery 9 is missing. Not closed; missing. The corridor is shorter now.">;
                readonly line2: import("..").TextEntry<"…the builders scaled every arch to something four times our height, and every door handle to ours.">;
                readonly line3: import("..").TextEntry<"maintenance: lights in the great hall re-order themselves at night. The pattern is a countdown.">;
                readonly line4: import("..").TextEntry<"…we found the inhabitants' last message. It is one word, repeated the height of the wall: STILL.">;
            };
        } & import("../types").TextGroup;
        readonly log: {
            readonly scanMilestone: import("..").TextEntry<"SCAN {pct}% {designator}: {text}">;
            readonly podLore: import("..").TextEntry<"{designator}: {lore}">;
            readonly probeTerminal: import("..").TextEntry<"Probe interfaces a cold terminal: {line}">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly quest: {
        readonly ghost_beacon: {
            readonly name: import("..").TextEntry<"GHOST BEACON">;
            readonly stage1: {
                readonly log: import("..").TextEntry<"GHOST BEACON: jump out and find the source of the signal">;
                readonly journal: import("..").TextEntry<"GHOST BEACON: the coordinates hold. Whatever sent this is one jump away, and it is still transmitting.">;
            };
            readonly stage2: {
                readonly journal: import("..").TextEntry<"GHOST BEACON closed. The crew of the silent vessel is answered at last. Salvage claim honored (+{salvage} salvage). Her survey probe still answers diagnostics, re-slotted for our bay (+{probes} probe).">;
            };
        };
        readonly sleeper_seam: {
            readonly name: import("..").TextEntry<"SLEEPER SEAM">;
            readonly stage1: {
                readonly log: import("..").TextEntry<"SLEEPER SEAM: coordinates locked. Jump to the next sector to reveal the site">;
                readonly arrivalLog: import("..").TextEntry<"SLEEPER SEAM: site revealed. Science: survey the WORKED-STONE RETURN (Precursor vault) to 100%">;
                readonly journal: import("..").TextEntry<"SLEEPER SEAM: the coordinates chart clean, and nothing is left to decode. Whatever fits this key shows itself on the next arrival. It has been patient for a very long time. Engineering charges, Helm jumps, Science surveys the worked-stone return.">;
            };
            readonly stage2: {
                readonly log: import("..").TextEntry<"SLEEPER SEAM: select the marker offering TAP on the scan scope and press it within range, if the crew dares">;
                readonly arrivalLog: import("..").TextEntry<"SLEEPER SEAM: the vault is back. Survey the WORKED-STONE RETURN, then select the TAP marker on the scan scope and press it within range">;
                readonly journal: import("..").TextEntry<"SLEEPER SEAM: the vault is real, and warm. Science: select the marker offering TAP on the scan scope and press it within range. No probe goes out, so Comms stands by. The survey does not say what the seam took that made it need sealing like this.">;
            };
            readonly stage3: {
                readonly journal: import("..").TextEntry<"SLEEPER SEAM closed: the seam is unsealed. What it kept, it no longer keeps.">;
            };
        };
        readonly weaver_question: {
            readonly name: import("..").TextEntry<"THE WEAVER'S QUESTION">;
            readonly stage1: {
                readonly log: import("..").TextEntry<"THE WEAVER'S QUESTION: coordinates unfolded. Jump to the next sector to reveal the loom">;
                readonly arrivalLog: import("..").TextEntry<"THE WEAVER'S QUESTION: loom revealed. Science: survey the WOVEN RETURN (Weaver's loom) to 100%">;
                readonly journal: import("..").TextEntry<"THE WEAVER'S QUESTION: the coordinates unfold clean, and there is nothing more to work out. Whatever asked it shows itself on the next arrival. It has been waiting for a student worth the lesson. Engineering charges, Helm jumps, Science surveys the woven return.">;
            };
            readonly stage2: {
                readonly log: import("..").TextEntry<"THE WEAVER'S QUESTION: put our answer to the loom. Select the marker offering DECODE on the scan scope and press it within range, if the crew dares">;
                readonly arrivalLog: import("..").TextEntry<"THE WEAVER'S QUESTION: the loom is back. Survey the WOVEN RETURN, then select the DECODE marker on the scan scope and press it within range">;
                readonly journal: import("..").TextEntry<"THE WEAVER'S QUESTION: the loom is real, and running. Science: select the marker offering DECODE on the scan scope and press it within range. No probe goes out, so Comms stands by. The survey does not say what the loom does with a wrong answer.">;
            };
            readonly stage3: {
                readonly journal: import("..").TextEntry<"THE WEAVER'S QUESTION closed: asked, answered, and paid for. One way or the other.">;
            };
        };
        readonly sentinel_signal: {
            readonly name: import("..").TextEntry<"THE SENTINEL SIGNAL">;
            readonly stage1: {
                readonly log: import("..").TextEntry<"THE SENTINEL SIGNAL: find the dead relay and decode the signal it keeps">;
                readonly journal: import("..").TextEntry<"THE SENTINEL SIGNAL: the return path holds. The relay is one jump deeper in, and the chirp keeps counting, patient as winter.">;
            };
            readonly stage2: {
                readonly log: import("..").TextEntry<"THE SENTINEL SIGNAL: the handshake was heard. Jump when ready, and arrive at battle stations">;
                readonly journal: import("..").TextEntry<"THE SENTINEL SIGNAL: the relay routed our decode, and something past the charts answered it. The handshake carried our hull number. The next arrival will not be quiet.">;
            };
            readonly stage3: {
                readonly log: import("..").TextEntry<"THE SENTINEL SIGNAL: the sentinels have come. Destroy the swarm">;
                readonly journal: import("..").TextEntry<"THE SENTINEL SIGNAL: the answer arrives in numbers. The tally was always a targeting ledger.">;
            };
            readonly stage4: {
                readonly journal: import("..").TextEntry<"THE SENTINEL SIGNAL closed: the swarm is scrap and the old count is broken. Salvage rights on machine-wreck this ancient pay in full (+{salvage} salvage). One carcass cradled an intact survey probe (+{probes} probe).">;
            };
        };
        readonly the_void: {
            readonly orders: import("..").TextEntry<"◉ PRIORITY ONE, FLEET COMMAND: long-range sensors are tracking a moving VOID on a direct heading for the inner colonies. It returns no mass, no light and no signal. Intercept it, find its origin, assess the threat and report back.">;
            readonly name: import("..").TextEntry<"THE VOID">;
            readonly stage1: {
                readonly log: import("..").TextEntry<"THE VOID: close with the structure and put a full survey on its hull">;
                readonly journal: import("..").TextEntry<"THE VOID: Fleet Command's anomaly has a hull. It is a ship beyond registry scale, cloaked, holding course for the inner colonies... and around our survey wake, old machines are stirring. Whatever it is, it is guarded.">;
            };
            readonly stage2: {
                readonly log: import("..").TextEntry<"THE VOID: the record is cut short. Find the relay trailing in her wake">;
                readonly journal: import("..").TextEntry<"ARCHIVE FRAGMENT recovered. The woven record decodes in pieces: a people called the OSSARI, oceans of them asleep in crystal, and a homeland UNMADE behind them, its matter taken apart and repurposed by something that does not stop. The record breaks off mid-entry.">;
            };
            readonly stage3: {
                readonly journal: import("..").TextEntry<"ARCHIVE FRAGMENT recovered: the record's tail. It ends mid-sentence, and the last completed line is a bearing: the wake they fled. We plotted it. The wake it fled is IN OUR SKY, behind us, between home and here.">;
            };
            readonly podLore: {
                readonly attempt1: import("..").TextEntry<"The tap seats clean, and the pod refuses it: stabilized, the lattice re-weaving around our interface faster than it can bite. The pulse inside slows, settles... deeper.">;
                readonly attempt2: import("..").TextEntry<"Second attempt. The lattice reads our tap this time and answers with a pattern. The linguistics package flags one form at low confidence: 'not yet'. The pod's pulse holds. Ours skipped.">;
                readonly attempt3: import("..").TextEntry<"Final attempt. The interface glasses over the moment it touches. The pod seals itself with our tool inside the weld, gently, the way you close a door on a sleeping child. The survey marks it: stabilized. Whatever wakes them, it is not us. Perhaps nothing should.">;
            };
            readonly unmaking: {
                readonly band25: import("..").TextEntry<"Long-range plots astern are going quiet. The stars are still there; everything that used to fly between them is gone. And some of what still flies... reads wrong.">;
                readonly band50: import("..").TextEntry<"The raider bands astern have changed dialect: more traffic, shorter calls, and every one of them answered. Something back there is very organized now, and it is closer than it was.">;
                readonly band75: import("..").TextEntry<"Spectrograph, rear arc: the starlight itself is losing lines. Whole frequencies are simply not arriving anymore. The record used one word for this. We stopped translating it aloud.">;
                readonly band100: import("..").TextEntry<"The rear plot ends at an edge: a moving boundary past which our instruments return the same nothing the Void once did. It is in this sky. Run, warn the colonies, and do not stop.">;
            };
        };
    } & import("../types").TextGroup;
    readonly log: {
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
    readonly run: {
        readonly probe: {
            readonly siteName: import("..").TextEntry<"{poi} · {site}">;
            readonly unchartedSite: import("..").TextEntry<"UNCHARTED SITE">;
        } & import("../types").TextGroup;
        readonly crew: {
            readonly member: import("..").TextEntry<"{name}·{role}">;
            readonly join: import("..").TextEntry<"{head} / {tail}">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly intercept: {
        readonly callHome: import("..").TextEntry<"Coded burst on the raider band. Someone is winding up to call home.">;
        readonly fleeSpool: import("..").TextEntry<"…engine harmonics shifting. She's winding up a jump. Kill the drive or lose the bounty.">;
        readonly railCharging: import("..").TextEntry<"Capacitor whine on the lattice: rail charging. Helm, do not fly the line.">;
        readonly huskChatter: import("..").TextEntry<"The signal is… wrong. It repeats itself. It repeats itself. It repe—">;
        readonly convoyPlea: import("..").TextEntry<"—berths still loading, we are NOT leaving people on the pad. Hold them off. Please—">;
    } & import("../types").TextGroup;
    readonly sim: {
        readonly power: {
            readonly reactorCritical: import("..").TextEntry<"REACTOR CRITICAL — core temperature past the red line">;
            readonly heatVented: import("..").TextEntry<"Heat vented — output restored">;
            readonly reactorRecovered: import("..").TextEntry<"Reactor core back below the red line">;
        } & import("../types").TextGroup;
        readonly mines: {
            readonly detonation: import("..").TextEntry<"Mine detonation — hull integrity {pct}%">;
            readonly lock: import("..").TextEntry<"Mine lock — {designator} inbound!">;
        } & import("../types").TextGroup;
        readonly eng: {
            readonly venting: import("..").TextEntry<"Venting plasma — output halved for {sec}s">;
        } & import("../types").TextGroup;
        readonly screen: {
            readonly setByName: import("..").TextEntry<"{name}">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly probe: {
        readonly bracket: {
            readonly loot: "SALVAGE POD";
            readonly prize: "CORE SAMPLE";
            readonly terminal: "TERMINAL";
            readonly terminalRead: import("..").TextEntry<"TERMINAL·READ">;
            readonly exitPad: "EXIT PAD";
            readonly arc: import("..").TextEntry<"ARC HAZARD">;
            readonly vent: import("..").TextEntry<"VENT">;
            readonly collapse: import("..").TextEntry<"COLLAPSING PLATE">;
        } & import("../types").TextGroup;
        readonly card: {
            readonly landing: {
                readonly acquiring: import("..").TextEntry<"TELEMETRY ACQUIRING{dots}">;
            } & import("../types").TextGroup;
            readonly lost: {
                readonly title: import("..").TextEntry<"SIGNAL LOST">;
                readonly noReason: import("..").TextEntry<"carrier dropped — no telemetry">;
            } & import("../types").TextGroup;
            readonly recovered: {
                readonly title: import("..").TextEntry<"PROBE RECOVERED">;
                readonly archived: import("..").TextEntry<"telemetry archived">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly endReason: {
            readonly caught: "contact lost — something found it";
            readonly aborted: "probe scuttled";
            readonly jump: "tether severed by jump transit";
            readonly wrecked: "hull integrity zero";
        } & import("../types").TextGroup;
        readonly hud: {
            readonly recovery: import("..").TextEntry<"RECOVERY {carried}/{total}">;
            readonly recoveryPrize: import("..").TextEntry<"RECOVERY {carried}/{total} · ✦ CORE SAMPLE SECURED">;
            readonly noise: import("..").TextEntry<"NOISE">;
            readonly hull: import("..").TextEntry<"HULL">;
            readonly extraction: import("..").TextEntry<"EXTRACTION CHANNEL ▸ {pct}%">;
        } & import("../types").TextGroup;
        readonly radar: {
            readonly contact: import("..").TextEntry<"CONTACT">;
            readonly contactLost: import("..").TextEntry<"CONTACT LOST">;
            readonly pingReady: import("..").TextEntry<"PING READY">;
            readonly extracting: import("..").TextEntry<"EXTRACTION IN PROGRESS">;
        } & import("../types").TextGroup;
        readonly standby: {
            readonly view: {
                readonly title: import("..").TextEntry<"NO PROBE TELEMETRY">;
                readonly hint: import("..").TextEntry<"launch from a survey return">;
            } & import("../types").TextGroup;
            readonly radar: {
                readonly title: import("..").TextEntry<"SWEEP OFFLINE">;
                readonly hint: import("..").TextEntry<"no probe on the wire">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly parascope: {
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
    readonly view: {
        readonly lobby: {
            readonly wordmark: import("..").TextEntry<"SPACE COUCH COMMAND">;
            readonly shop: {
                readonly button: import("..").TextEntry<"UPGRADES">;
                readonly buttonBanked: import("..").TextEntry<"UPGRADES ◈{banked}">;
            } & import("../types").TextGroup;
            readonly back: import("..").TextEntry<"BACK TO BRIDGE">;
            readonly key: {
                readonly enter: import("..").TextEntry<"ENTER">;
                readonly esc: import("..").TextEntry<"ESC">;
            } & import("../types").TextGroup;
            readonly tabs: {
                readonly crew: import("..").TextEntry<"CREW">;
                readonly crewCount: import("..").TextEntry<"CREW {seated}/{core}">;
                readonly upgrades: import("..").TextEntry<"UPGRADES">;
                readonly upgradesBanked: import("..").TextEntry<"UPGRADES ◈{banked}">;
                readonly saved: import("..").TextEntry<"SAVED">;
                readonly savedCount: import("..").TextEntry<"SAVED {count}">;
            } & import("../types").TextGroup;
            readonly pager: {
                readonly more: import("..").TextEntry<"{n} MORE">;
                readonly top: import("..").TextEntry<"BACK TO TOP">;
            } & import("../types").TextGroup;
            readonly seat: {
                readonly short: {
                    readonly helm: "HELM";
                    readonly tactical: "TAC";
                    readonly engineer: "ENG";
                    readonly science: "SCI";
                    readonly comms: "COMMS";
                    readonly helm_tac: "PILOT";
                    readonly ops: "OPS";
                    readonly sci_comms: import("..").TextEntry<"SCI·COM">;
                    readonly sciops: import("..").TextEntry<"SCI·COM">;
                    readonly command: "SHIPMASTER";
                    readonly cupola: "CUPOLA";
                } & import("../types").TextGroup;
                readonly needed: import("..").TextEntry<"⚠ NEEDED">;
                readonly open: import("..").TextEntry<"open">;
                readonly cannoneers: import("..").TextEntry<"CANNONEERS · OPTIONAL">;
                readonly cannoneersShort: import("..").TextEntry<"CANNON">;
                readonly noGunners: import("..").TextEntry<"0 OF {total}">;
                readonly gunnerMore: import("..").TextEntry<"{name} +{more}">;
            } & import("../types").TextGroup;
            readonly join: {
                readonly kickerRemote: import("..").TextEntry<"REMOTE BRIDGE">;
                readonly kickerNoNetwork: import("..").TextEntry<"NO NETWORK LINK">;
                readonly kickerRoomCode: import("..").TextEntry<"ROOM CODE">;
                readonly kickerMirror: import("..").TextEntry<"MIRROR THIS SCREEN">;
                readonly caption: import("..").TextEntry<"SCAN TO JOIN">;
                readonly captionMirror: import("..").TextEntry<"⚠ NOT FOR JOINING">;
                readonly remoteBody: import("..").TextEntry<"TAKE A SEAT VIA MY STATION ABOVE">;
                readonly noLanBody: import("..").TextEntry<"⚠ CONNECT THIS MACHINE AND YOUR PHONES TO THE SAME WI-FI, THEN RELAUNCH">;
                readonly kickerStreamer: import("..").TextEntry<"STREAMER MODE">;
                readonly codeHidden: import("..").TextEntry<"••••">;
                readonly streamerPlaque: import("..").TextEntry<"JOIN CODES HIDDEN">;
                readonly streamerBody: import("..").TextEntry<"USE COPY LINK TO INVITE PLAYERS">;
                readonly streamerBodyMirror: import("..").TextEntry<"COPY LINK NOW COPIES THE MIRROR LINK">;
                readonly copyLink: import("..").TextEntry<"COPY LINK">;
                readonly copied: import("..").TextEntry<"COPIED ✓">;
                readonly castJoinQr: import("..").TextEntry<"JOIN QR">;
                readonly castBackToJoinQr: import("..").TextEntry<"BACK TO JOIN QR">;
                readonly castJoinLink: import("..").TextEntry<"JOIN LINK">;
                readonly castBackToJoinLink: import("..").TextEntry<"BACK TO JOIN LINK">;
                readonly castAnotherTv: import("..").TextEntry<"ANOTHER TV">;
                readonly castShowOnAnotherTv: import("..").TextEntry<"SHOW ON ANOTHER TV">;
            } & import("../types").TextGroup;
            readonly crew: {
                readonly kicker: import("..").TextEntry<"CREW">;
                readonly reconnecting: import("..").TextEntry<"⚠ RECONNECTING…">;
                readonly solo: import("..").TextEntry<"SOLO? PICK THE WREN · ONE SEAT, ALL DUTIES">;
                readonly kickerNobody: import("..").TextEntry<"CREW · NOBODY SEATED YET">;
                readonly kickerPicks: import("..").TextEntry<"CREW · PLAYERS PICK SEATS ON THEIR OWN DEVICES">;
                readonly kickerNobodyShort: import("..").TextEntry<"NOBODY SEATED YET">;
                readonly guide: {
                    readonly step1: import("..").TextEntry<"OPEN YOUR STATION">;
                    readonly step2: import("..").TextEntry<"CHOOSE YOUR DUTY">;
                    readonly step2Sub: import("..").TextEntry<"ON YOUR DEVICE · EACH PLAYER PICKS ONE">;
                    readonly soloSub: import("..").TextEntry<"ONE SEAT · TAKE SHIPMASTER">;
                    readonly step3Remote: import("..").TextEntry<"THE HOST LAUNCHES THE MISSION">;
                    readonly step3Local: import("..").TextEntry<"PRESS LAUNCH">;
                    readonly thisComputerStation: import("..").TextEntry<"THIS COMPUTER · THE \"MY STATION\" TAB">;
                    readonly thisPhoneMenu: import("..").TextEntry<"THIS PHONE · ☰ MENU ▸ PLAY A STATION">;
                    readonly everyoneScan: import("..").TextEntry<"EVERYONE ELSE · SCAN THE QR CODE">;
                    readonly phonesScan: import("..").TextEntry<"PHONES & TABLETS · SCAN THE QR CODE">;
                    readonly everyoneLinkStreamer: import("..").TextEntry<"EVERYONE ELSE · OPEN THE LINK FROM COPY LINK">;
                    readonly phonesLinkStreamer: import("..").TextEntry<"PHONES & TABLETS · OPEN THE LINK FROM COPY LINK">;
                    readonly openLink: import("..").TextEntry<"OPEN THE LINK IN A NEW TAB">;
                    readonly thisScreenOpenLink: import("..").TextEntry<"THIS COMPUTER · OPEN THE LINK IN A NEW TAB">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly modded: {
                readonly badge: import("..").TextEntry<"MODDED ROOM">;
            } & import("../types").TextGroup;
            readonly launch: {
                readonly cta: import("..").TextEntry<"LAUNCH">;
                readonly waiting: import("..").TextEntry<"WAITING FOR CREW">;
                readonly crewed: import("..").TextEntry<{
                    readonly one: "{seated} OF {count} STATION CREWED · {ready} READY";
                    readonly other: "{seated} OF {count} STATIONS CREWED · {ready} READY";
                }>;
                readonly crewedShort: import("..").TextEntry<"{seated}/{core} CREWED · {ready} READY">;
                readonly gunners: import("..").TextEntry<{
                    readonly one: "+{count} CANNONEER";
                    readonly other: "+{count} CANNONEERS";
                }>;
                readonly gunnersShort: import("..").TextEntry<"+{n} CANNON">;
                readonly blocked: import("..").TextEntry<"⚠ NOBODY IS SEATED — TAKE A STATION FIRST">;
                readonly reconnecting: import("..").TextEntry<"⚠ {seat} RECONNECTING...">;
                readonly overwrites: import("..").TextEntry<"⚠ LAUNCH OVERWRITES {name}'S SAVE">;
                readonly assets: import("..").TextEntry<"LOADING MOD FILES · {done} OF {total} DEVICES · {percent}%">;
                readonly assetsShort: import("..").TextEntry<"MOD FILES {percent}%">;
                readonly preparing: import("..").TextEntry<"PREPARING MOD FILES...">;
                readonly anyway: import("..").TextEntry<"LAUNCH ANYWAY">;
                readonly hostLaunches: import("..").TextEntry<"THE HOST LAUNCHES THE MISSION">;
                readonly hostLaunchesShort: import("..").TextEntry<"THE HOST LAUNCHES">;
                readonly openLinkTakeStation: import("..").TextEntry<"OPEN THE LINK IN A NEW TAB TO TAKE A STATION">;
                readonly openLinkShort: import("..").TextEntry<"OPEN THE LINK IN A NEW TAB">;
                readonly needs: import("..").TextEntry<"⚠ NEEDS {seats}">;
                readonly needsCount: import("..").TextEntry<"⚠ NEEDS {n} MORE CREW">;
                readonly smallerShip: import("..").TextEntry<"◀ ▶ PICK A SMALLER SHIP">;
                readonly smallerShipShort: import("..").TextEntry<"◀ ▶ SMALLER SHIP">;
                readonly smallerShipMini: import("..").TextEntry<"◀ ▶ SMALLER">;
                readonly scanTakeStation: import("..").TextEntry<"SCAN THE QR OR OPEN YOUR STATION">;
                readonly scanShort: import("..").TextEntry<"SCAN QR OR OPEN YOUR STATION">;
                readonly linkTakeStation: import("..").TextEntry<"COPY LINK OR OPEN YOUR STATION">;
                readonly linkShort: import("..").TextEntry<"COPY LINK OR OPEN STATION">;
                readonly newRunAs: import("..").TextEntry<"NEW RUN AS {name}">;
                readonly newRunUnnamed: import("..").TextEntry<"NEW RUN · UNNAMED SHIP">;
                readonly toastHullLoaded: import("..").TextEntry<"{name}'S HULL LOADED — CREW, RESEAT, THEN RESUME">;
                readonly toastHullChanged: import("..").TextEntry<"HULL CHANGED — CREW, PICK YOUR SEATS AGAIN">;
            } & import("../types").TextGroup;
            readonly saves: {
                readonly kicker: import("..").TextEntry<"RESUME A SAVED SHIP">;
                readonly denyReason: import("..").TextEntry<"⚠ NOBODY IS SEATED — SEAT CREW FIRST">;
                readonly loadWarning: import("..").TextEntry<"⚠ SWITCHES TO {label} — CREW RESEATS, THEN RESUME">;
                readonly resume: import("..").TextEntry<"RESUME {name}">;
                readonly load: import("..").TextEntry<"LOAD {name}">;
                readonly crewCount: import("..").TextEntry<"{n} CREW">;
                readonly crewUnrecorded: import("..").TextEntry<"CREW UNRECORDED">;
                readonly sectorLine: import("..").TextEntry<"SECTOR {sector} · {label} · {crew}">;
                readonly sectorLineShort: import("..").TextEntry<"SECTOR {sector} · {label}">;
                readonly needsCrew: import("..").TextEntry<"⚠ NEEDS {n} MORE CREW TO RESUME">;
                readonly seatCrewFirst: import("..").TextEntry<"SEAT CREW FIRST">;
                readonly needsMods: import("..").TextEntry<"⚠ NEEDS: {mods}">;
                readonly modsUpdated: import("..").TextEntry<"⚠ MODS UPDATED: {mods}">;
            } & import("../types").TextGroup;
            readonly ship: {
                readonly kicker: import("..").TextEntry<"SHIP">;
                readonly nameKicker: import("..").TextEntry<"SHIP NAME">;
                readonly draftStrip: import("..").TextEntry<"SHIP NAME ▸ {draft}">;
                readonly stat: {
                    readonly hull: import("..").TextEntry<"HULL">;
                    readonly reactor: import("..").TextEntry<"REACTOR">;
                    readonly beams: import("..").TextEntry<"BEAMS">;
                    readonly guns: import("..").TextEntry<"GUNS">;
                    readonly tubes: import("..").TextEntry<"TUBES">;
                    readonly torps: import("..").TextEntry<"TORPS">;
                } & import("../types").TextGroup;
                readonly statLineA: import("..").TextEntry<"HULL {hull} · REACTOR {reactor} · BEAMS {beams}">;
                readonly statLineB: import("..").TextEntry<"GUNS {guns} · TUBES {tubes} · TORPS {torps}">;
                readonly unseat: import("..").TextEntry<"⚠ CHANGING SHIP UNSEATS {n} CREW">;
                readonly namePlaceholder: import("..").TextEntry<"UNNAMED SHIP">;
                readonly verbName: import("..").TextEntry<"NAME">;
                readonly verbRename: import("..").TextEntry<"RENAME">;
                readonly keySave: import("..").TextEntry<"SAVE">;
                readonly keyCancel: import("..").TextEntry<"CANCEL">;
                readonly helperCollideEdit: import("..").TextEntry<"⚠ A SAVED SHIP HAS THIS NAME — LAUNCH OVERWRITES IT">;
                readonly helperEditing: import("..").TextEntry<"KEYBOARD ▸ DONE SAVES">;
                readonly helperCollide: import("..").TextEntry<"⚠ LAUNCH OVERWRITES THIS SAVE">;
            } & import("../types").TextGroup;
            readonly upgrades: {
                readonly kicker: import("..").TextEntry<"UPGRADES">;
                readonly banked: import("..").TextEntry<"◈ {banked} BANKED">;
                readonly earn: import("..").TextEntry<"EARN ◈ SALVAGE ON MISSIONS">;
                readonly bankedEarn: import("..").TextEntry<"◈ {banked} BANKED · EARN SALVAGE ON MISSIONS">;
                readonly installed: import("..").TextEntry<"✓ INSTALLED">;
                readonly alreadyInstalled: import("..").TextEntry<"✓ ALREADY INSTALLED">;
                readonly buy: import("..").TextEntry<"BUY ◈ {cost}">;
                readonly buyPhone: import("..").TextEntry<"BUY ◈{cost}">;
                readonly needPhone: import("..").TextEntry<"NEED ◈{need}">;
                readonly need: import("..").TextEntry<"NEED ◈ {need}">;
                readonly needMore: import("..").TextEntry<"NEED ◈ {need} MORE">;
                readonly warnNeedMorePhone: import("..").TextEntry<"⚠ NEED ◈{need} MORE">;
                readonly warnNeedMore: import("..").TextEntry<"⚠ NEED ◈ {need} MORE">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly science: {
            readonly idle: {
                readonly title: import("..").TextEntry<"NO ACTIVE SCAN">;
                readonly hint: import("..").TextEntry<"SCIENCE: SELECT A CONTACT TO SCAN">;
            } & import("../types").TextGroup;
            readonly analysisCaption: import("..").TextEntry<"ANALYSIS">;
            readonly targetPointsCaption: import("..").TextEntry<"TARGET POINTS">;
            readonly vitals: {
                readonly hull: import("..").TextEntry<"HULL {cur}/{max}">;
                readonly shield: import("..").TextEntry<"SHIELD {cur}/{max}">;
            } & import("../types").TextGroup;
            readonly spoolWarn: import("..").TextEntry<"⚠ JUMP SPOOL DETECTED — ESCAPE DRIVE {pct}%">;
            readonly probesAboard: import("..").TextEntry<"PROBES ABOARD {count}">;
            readonly classText: {
                readonly unresolved: import("..").TextEntry<"UNRESOLVED RETURN">;
                readonly unknown: import("..").TextEntry<"CLASS UNKNOWN — SCAN IN PROGRESS">;
            } & import("../types").TextGroup;
            readonly typeWord: {
                readonly derelict: "DERELICT HULK";
                readonly mine: "PROXIMITY MINE";
                readonly friendly: "CIVILIAN FREIGHTER";
                readonly asteroid: "ASTEROID";
                readonly unknown: "UNKNOWN OBJECT";
            } & import("../types").TextGroup;
            readonly subRow: {
                readonly online: import("..").TextEntry<"◈ {designator}">;
                readonly offline: import("..").TextEntry<"◈ {designator}  [OFFLINE]">;
                readonly empty: import("..").TextEntry<"NO TARGET POINTS LOCATED — KEEP SCANNING">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly ui: {
            readonly boot: {
                readonly skipHint: {
                    readonly touch: import("..").TextEntry<"HOLD TO SKIP">;
                    readonly keyboard: import("..").TextEntry<"HOLD [SPACE] TO SKIP">;
                } & import("../types").TextGroup;
                readonly crewReady: import("..").TextEntry<"CREW READY {ready}/{total}">;
                readonly test: {
                    readonly mainframe: {
                        readonly label: "ORACLE MAINFRAME 9";
                        readonly status: import("..").TextEntry<"ONLINE">;
                    } & import("../types").TextGroup;
                    readonly memory: {
                        readonly label: "CORE MEMORY 262144K";
                        readonly status: import("..").TextEntry<"VERIFIED">;
                    } & import("../types").TextGroup;
                    readonly nav: {
                        readonly label: "NAV COMPUTER";
                        readonly status: import("..").TextEntry<"NOMINAL">;
                    } & import("../types").TextGroup;
                    readonly sensors: {
                        readonly label: "SENSOR ARRAY";
                        readonly status: import("..").TextEntry<"CALIBRATED">;
                    } & import("../types").TextGroup;
                    readonly weapons: {
                        readonly label: "WEAPONS INTERLOCK";
                        readonly status: import("..").TextEntry<"SAFE">;
                    } & import("../types").TextGroup;
                    readonly reactor: {
                        readonly label: "REACTOR CONTAINMENT";
                        readonly status: import("..").TextEntry<"STABLE">;
                    } & import("../types").TextGroup;
                    readonly lifeSupport: {
                        readonly label: "LIFE SUPPORT";
                    } & import("../types").TextGroup;
                    readonly cryo: {
                        readonly label: "CRYO BAY";
                        readonly status: import("..").TextEntry<"{crew} OCCUPIED">;
                    } & import("../types").TextGroup;
                    readonly cartography: {
                        readonly label: "STELLAR CARTOGRAPHY";
                        readonly status: import("..").TextEntry<"LOADED">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
                readonly line: {
                    readonly interfaceReady: "INTERFACE 2037 READY";
                    readonly registry: import("..").TextEntry<"UES {ship} // REGISTRY 47-ND-1120">;
                    readonly crew: import("..").TextEntry<"CREW {crew} · AI 01 · MISSION: [CLASSIFIED]">;
                    readonly awaiting: import("..").TextEntry<"> AWAITING PRIORITY TRAFFIC . . .">;
                } & import("../types").TextGroup;
                readonly defaultShip: import("..").TextEntry<"HERALD">;
                readonly signalDivider: import("..").TextEntry<"── INCOMING SIGNAL ──">;
                readonly priorityHeader: import("..").TextEntry<"◉ PRIORITY ONE — INCOMING TRANSMISSION // FLEET COMMAND">;
                readonly transmission: {
                    readonly anomaly: import("..").TextEntry<"Long-range sensors have detected an anomaly on a direct heading for the inner colonies: a moving VOID, a region of space that returns no mass, no light and no signal.">;
                    readonly orders: import("..").TextEntry<"Intercept it, find its origin, assess the threat and report back.">;
                } & import("../types").TextGroup;
                readonly telemetry: {
                    readonly line: import("..").TextEntry<"> {line} ..... OK">;
                    readonly plot: "PLOTTING INTERCEPT VECTOR";
                    readonly paging: "PAGING NAV TABLES // SECTOR CHARTS";
                    readonly align: "ALIGNING INERTIAL PLATFORM";
                    readonly spool: "SPOOLING JUMP CAPACITOR TEST CELL";
                    readonly crossCheck: "CROSS-CHECKING SENSOR BASELINE";
                    readonly arming: "ARMING TELEMETRY BUS";
                    readonly cryo: "CRYO REVIVAL CYCLE COMPLETE";
                    readonly stations: "CREW STATIONS REPORTING IN";
                    readonly uplink: "FLEET COMMAND UPLINK: LOCKED";
                    readonly signalFloor: "SIGNAL FLOOR NOMINAL // NO RETURN FROM THE VOID";
                } & import("../types").TextGroup;
                readonly solution: import("..").TextEntry<"INTERCEPT SOLUTION {bar} {pct}%">;
                readonly ready: import("..").TextEntry<"SYSTEMS READY">;
                readonly begin: import("..").TextEntry<"► BEGIN MISSION">;
            } & import("../types").TextGroup;
            readonly credits: {
                readonly header: import("..").TextEntry<"SB-OS 2.4 // CREDITS">;
                readonly title: import("..").TextEntry<"SPACE COUCH COMMAND">;
                readonly soundtrack: import("..").TextEntry<"◇  ORIGINAL SOUNDTRACK  ◇">;
                readonly licence: import("..").TextEntry<"Music licensed from White Bat Audio, used with permission.">;
                readonly copyright: import("..").TextEntry<"© 2026 Machinaut Studios LLC. All rights reserved.">;
                readonly close: {
                    readonly touch: import("..").TextEntry<"TAP ANYWHERE TO CLOSE">;
                    readonly keyboard: import("..").TextEntry<"ESC / C — CLOSE">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly menuChip: {
                readonly label: import("..").TextEntry<"MENU">;
            } & import("../types").TextGroup;
            readonly controls: {
                readonly header: import("..").TextEntry<"SB-OS 2.4 // CONTROLS">;
                readonly hint: {
                    readonly keyboard: import("..").TextEntry<"ESC OR ? CLOSE">;
                    readonly touch: import("..").TextEntry<"TAP ANYWHERE TO CLOSE">;
                } & import("../types").TextGroup;
                readonly scope: {
                    readonly anywhere: import("..").TextEntry<"ANYWHERE">;
                    readonly lobby: import("..").TextEntry<"IN THE LOBBY">;
                    readonly gameOver: import("..").TextEntry<"GAME OVER">;
                } & import("../types").TextGroup;
                readonly action: {
                    readonly menu: "OPEN THE SETTINGS MENU";
                    readonly controls: "SHOW THIS LIST OF KEYS";
                    readonly mute: "MUTE THE BRIDGE SPEAKER";
                    readonly theme: "CYCLE THE CRT PALETTE";
                    readonly fullscreen: "FILL THE WHOLE DISPLAY";
                    readonly hull: "PICK THE SHIP · PREVIOUS / NEXT";
                    readonly launch: "LAUNCH WHEN READY";
                    readonly upgrades: "OPEN THE UPGRADES PAGE";
                    readonly buy: "BUY THE UPGRADE WITH THAT NUMBER";
                    readonly name: "NAME THE SHIP";
                    readonly savesStep: "STEP THROUGH SAVED SHIPS";
                    readonly continue: "CONTINUE THE SELECTED SAVED SHIP";
                    readonly credits: "SOUNDTRACK CREDITS";
                    readonly restart: "START A NEW RUN";
                    readonly toLobby: "RETURN TO THE LOBBY";
                } & import("../types").TextGroup;
                readonly note: {
                    readonly stations: import("..").TextEntry<"CREW PLAY THEIR STATIONS ON PHONES OR TABLETS">;
                    readonly stationsApp: import("..").TextEntry<"CREW PLAY ON PHONES OR TABLETS · OR OPEN THE \"MY STATION\" TAB IN THIS APP">;
                    readonly runKeys: import("..").TextEntry<"ESC OPENS THE MENU · THE SHIP KEEPS FLYING">;
                    readonly hostOnly: import("..").TextEntry<"LOBBY AND RESULT KEYS ARE THE HOST'S">;
                    readonly touch: import("..").TextEntry<"KEYS NEED A KEYBOARD ON THIS SCREEN">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly settings: {
                readonly header: import("..").TextEntry<"SB-OS 2.4 // HOST CONSOLE">;
                readonly hint: {
                    readonly touch: "TAP A ROW · TAP OUTSIDE TO CLOSE";
                    readonly keysClose: import("..").TextEntry<"↑↓ SELECT · ENTER CONFIRM · ESC CLOSE">;
                    readonly keysResume: import("..").TextEntry<"↑↓ SELECT · ENTER CONFIRM · ESC RESUME">;
                } & import("../types").TextGroup;
                readonly row: {
                    readonly theme: import("..").TextEntry<"THEME: {value}">;
                    readonly themeWide: import("..").TextEntry<"THEME: AMBER">;
                    readonly sound: import("..").TextEntry<"SOUND: {value}">;
                    readonly soundWide: import("..").TextEntry<"SOUND: OFF">;
                    readonly streamer: import("..").TextEntry<"STREAMER MODE: {value}">;
                    readonly streamerWide: import("..").TextEntry<"STREAMER MODE: OFF">;
                    readonly fullscreen: import("..").TextEntry<"FULLSCREEN: {value}">;
                    readonly fullscreenWide: import("..").TextEntry<"FULLSCREEN: OFF">;
                    readonly station: import("..").TextEntry<"PLAY A STATION ON THIS PHONE">;
                    readonly joinHost: import("..").TextEntry<"JOIN ANOTHER HOST">;
                    readonly controls: import("..").TextEntry<"CONTROLS">;
                    readonly credits: "CREDITS";
                    readonly close: import("..").TextEntry<"CLOSE">;
                    readonly resume: import("..").TextEntry<"RESUME">;
                    readonly restart: import("..").TextEntry<"RESTART RUN">;
                    readonly abandon: import("..").TextEntry<"ABANDON RUN">;
                } & import("../types").TextGroup;
                readonly desc: {
                    readonly theme: "CYCLE THE CRT PALETTE (T)";
                    readonly sound: "TOGGLE THE BRIDGE SPEAKER (M)";
                    readonly streamer: import("..").TextEntry<"HIDES THE CODE, QR AND ADDRESSES ON SCREEN">;
                    readonly streamerBrowser: import("..").TextEntry<"BROWSER BAR STILL SHOWS THE ADDRESS · USE THE APP">;
                    readonly fullscreen: "FILL THE WHOLE DISPLAY (F)";
                    readonly station: "SWAP THIS SCREEN FOR A CREW STATION";
                    readonly joinHost: "STOP HOSTING — BACK TO THE HOST / JOIN SCREEN";
                    readonly controls: "THE KEYS THIS SCREEN LISTENS FOR (?)";
                    readonly credits: "SOUNDTRACK TRIBUTE — WHITE BAT AUDIO (C)";
                    readonly closeLobby: "CLOSE THIS PANEL — BACK TO THE LOBBY";
                    readonly resume: "CLOSE THIS PANEL — BACK TO THE BRIDGE";
                    readonly restart: "RE-RUN FROM SECTOR 1";
                    readonly abandon: "BANK SALVAGE — RETURN TO LOBBY";
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly game: {
            readonly documentTitle: import("..").TextEntry<"Space Couch Command — Viewscreen">;
            readonly hud: {
                readonly sector: {
                    readonly none: import("..").TextEntry<"SECTOR —">;
                    readonly line: import("..").TextEntry<"SECTOR {n} — {label}">;
                } & import("../types").TextGroup;
                readonly alert: {
                    readonly green: import("..").TextEntry<"ALERT GREEN">;
                    readonly yellow: import("..").TextEntry<"ALERT YELLOW">;
                    readonly red: import("..").TextEntry<"ALERT RED">;
                } & import("../types").TextGroup;
                readonly sysLabel: import("..").TextEntry<"SB-OS 2.4 // BRIDGE LINK">;
                readonly jump: {
                    readonly charge: import("..").TextEntry<"JUMP {pct}%">;
                    readonly ready: import("..").TextEntry<"JUMP READY">;
                } & import("../types").TextGroup;
                readonly stats: import("..").TextEntry<"SALVAGE {salvage} · KILLS {kills}">;
                readonly ribbon: import("..").TextEntry<"◍ INCOMING TRANSMISSION — COMMS">;
                readonly ordnance: {
                    readonly torpedo: import("..").TextEntry<{
                        readonly one: "⚠ TORPEDO INBOUND";
                        readonly other: "⚠ TORPEDO ×{count} INBOUND";
                    }>;
                    readonly missile: import("..").TextEntry<{
                        readonly one: "⚠ MISSILE";
                        readonly other: "⚠ MISSILES ×{count}";
                    }>;
                    readonly rail: import("..").TextEntry<{
                        readonly one: "⚠ RAIL SLUG";
                        readonly other: "⚠ RAIL SLUGS ×{count}";
                    }>;
                    readonly rocket: import("..").TextEntry<{
                        readonly one: "⚠ ROCKET";
                        readonly other: "⚠ ROCKETS ×{count}";
                    }>;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly titleCard: import("..").TextEntry<"SECTOR {n} — {label}">;
            readonly clear: {
                readonly title: import("..").TextEntry<"SECTOR CLEAR">;
                readonly ready: import("..").TextEntry<"JUMP DRIVE READY — HELM: ENGAGE">;
                readonly spool: import("..").TextEntry<"SPOOL JUMP DRIVE TO CONTINUE — JUMP CHARGE {pct}%">;
            } & import("../types").TextGroup;
            readonly gameOver: {
                readonly shipLost: import("..").TextEntry<"SHIP LOST">;
                readonly demoComplete: import("..").TextEntry<"DEMO COMPLETE">;
                readonly stats: {
                    readonly sectorsFlown: import("..").TextEntry<"SECTORS FLOWN">;
                    readonly sectorsReached: import("..").TextEntry<"SECTORS REACHED">;
                    readonly salvageBanked: import("..").TextEntry<"SALVAGE BANKED">;
                    readonly kills: import("..").TextEntry<"KILLS">;
                    readonly coloniesSaved: import("..").TextEntry<"COLONIES SAVED">;
                } & import("../types").TextGroup;
                readonly restart: import("..").TextEntry<"▶ NEW RUN  [ENTER]">;
                readonly lobby: import("..").TextEntry<"▷ RETURN TO LOBBY  [L]">;
                readonly hint: import("..").TextEntry<"ESC: MENU">;
                readonly cta: import("..").TextEntry<"◈ WISHLIST SPACE COUCH COMMAND ON STEAM">;
            } & import("../types").TextGroup;
            readonly boot: {
                readonly banner: import("..").TextEntry<"SB-OS 2.4 // BRIDGE VIEWSCREEN">;
                readonly memory: import("..").TextEntry<"MEMORY CHECK ............. OK">;
                readonly phosphor: import("..").TextEntry<"PHOSPHOR ARRAY ........... OK">;
                readonly shipnet: import("..").TextEntry<"SHIPNET UPLINK ........... SYNC">;
                readonly link: import("..").TextEntry<"BRIDGE LINK ESTABLISHED">;
                readonly fault: import("..").TextEntry<"LINK FAULT: {reason}">;
            } & import("../types").TextGroup;
            readonly connection: {
                readonly lost: import("..").TextEntry<"◍ SIGNAL LOST — RECONNECTING…">;
                readonly failed: import("..").TextEntry<"◍ CONNECTION LOST — RELOAD THE PAGE">;
            } & import("../types").TextGroup;
            readonly settingsValue: {
                readonly theme: {
                    readonly green: "GREEN";
                    readonly amber: "AMBER";
                    readonly mixed: "MIXED";
                } & import("../types").TextGroup;
                readonly on: import("..").TextEntry<"ON">;
                readonly off: import("..").TextEntry<"OFF">;
            } & import("../types").TextGroup;
            readonly muteKey: import("..").TextEntry<"M">;
            readonly music: {
                readonly artist: import("..").TextEntry<"White Bat Audio">;
                readonly pack: {
                    readonly la2077: import("..").TextEntry<"LA 2077 Atmosphere Pack">;
                    readonly darksynth: import("..").TextEntry<"Darksynth">;
                } & import("../types").TextGroup;
                readonly track: {
                    readonly theMessage: "The Message";
                    readonly hourglass: "Hourglass";
                    readonly implantChip: "Implant Chip";
                    readonly lostInAStrangeCity: "Lost in a Strange City";
                    readonly neonAlley: "Neon Alley";
                    readonly policeWork: "Police Work";
                    readonly project31: "Project #31";
                    readonly itsAlmostDawn: "It's Almost Dawn";
                    readonly youreBeingFollowed: "You're Being Followed";
                    readonly surveillance: "Surveillance";
                    readonly corruption: "Corruption";
                    readonly ghostInTheMachine: "Ghost in the Machine";
                    readonly theHunter: "The Hunter";
                    readonly theNightstalkerOfChiba: "The Nightstalker of Chiba";
                    readonly upload: "Upload";
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly stage: {
            readonly comms: {
                readonly idle: {
                    readonly title: import("..").TextEntry<"CHANNEL MONITOR">;
                    readonly sub: import("..").TextEntry<"— NO ACTIVE TRANSMISSION —">;
                    readonly none: import("..").TextEntry<"NO TRAFFIC LOGGED">;
                    readonly last: import("..").TextEntry<"LAST TRANSMISSION: {contact}">;
                } & import("../types").TextGroup;
                readonly live: {
                    readonly label: import("..").TextEntry<"LIVE TRANSMISSION">;
                    readonly unknownContact: import("..").TextEntry<"UNKNOWN CONTACT">;
                    readonly contactFaction: import("..").TextEntry<"{speaker} — {faction}">;
                    readonly receiving: import("..").TextEntry<"◍ RECEIVING TRANSMISSION…">;
                    readonly respCaption: import("..").TextEntry<"RESPONSE OPTIONS — COMMS IS RESPONDING…">;
                    readonly endTransmission: import("..").TextEntry<"◈ END TRANSMISSION">;
                    readonly expiryCaption: import("..").TextEntry<"RESPONSE WINDOW">;
                    readonly expirySecs: import("..").TextEntry<"{secs}s">;
                } & import("../types").TextGroup;
                readonly signal: {
                    readonly title: import("..").TextEntry<"{label} — {designator}">;
                    readonly unknownSignal: import("..").TextEntry<"UNKNOWN SIGNAL">;
                    readonly sub: import("..").TextEntry<"PASSIVE MONITOR — RECEIVE ONLY · NO RETURN CHANNEL">;
                    readonly listening: import("..").TextEntry<"· · · LISTENING">;
                    readonly carrierBurst: import("..").TextEntry<"◍ CARRIER BURST">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly chart: {
                readonly caption: import("..").TextEntry<"NAV CHART // GALAXY">;
                readonly sysTitle: import("..").TextEntry<"SYS: {name}">;
                readonly legend: import("..").TextEntry<"● CHARTED · ◌ SIGNAL FRONTIER · FAINT = BEYOND SENSORS">;
                readonly dest: import("..").TextEntry<"DEST ▸ {name}">;
                readonly destRandom: import("..").TextEntry<"RANDOM LINKED">;
                readonly destLocked: import("..").TextEntry<"LOCKED">;
                readonly uncharted: import("..").TextEntry<"UNCHARTED">;
                readonly destTag: import("..").TextEntry<"▸ DEST">;
                readonly debris: import("..").TextEntry<"⚠ DEBRIS">;
                readonly idle: {
                    readonly title: import("..").TextEntry<"AWAITING CHARTS">;
                    readonly sub: import("..").TextEntry<"LONG-RANGE SURVEY IN PROGRESS">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly helm: {
                readonly heading: import("..").TextEntry<"HEADING">;
                readonly evasive: import("..").TextEntry<"EVASIVE">;
                readonly throttle: import("..").TextEntry<"THROTTLE">;
                readonly jumpCharge: import("..").TextEntry<"JUMP CHARGE">;
                readonly jumpReady: import("..").TextEntry<"READY">;
                readonly jumpEngage: import("..").TextEntry<"JUMP CHARGE — HELM: ENGAGE">;
                readonly jumpSpooling: import("..").TextEntry<"JUMP CHARGE — SPOOLING">;
                readonly hazards: {
                    readonly caption: import("..").TextEntry<"NEAREST HAZARDS">;
                    readonly captionLock: import("..").TextEntry<"NEAREST HAZARDS — MINE LOCK">;
                    readonly captionNone: import("..").TextEntry<"NEAREST HAZARDS — NONE">;
                    readonly asteroid: import("..").TextEntry<"AST   {designator} {dist}u">;
                    readonly mine: import("..").TextEntry<"MINE  {name} {dist}u">;
                    readonly mineLock: import("..").TextEntry<"MINE  {name} {dist}u ◀ LOCK">;
                    readonly unknownMine: import("..").TextEntry<"unknown">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly eng: {
                readonly headline: import("..").TextEntry<"REACTOR {out} u/s · DEMAND {demand} u/s">;
                readonly overclock: import("..").TextEntry<"⚠ OVERCLOCK">;
                readonly colSystem: import("..").TextEntry<"SYSTEM">;
                readonly colIntegrity: import("..").TextEntry<"INTEGRITY">;
                readonly colPower: import("..").TextEntry<"POWER ALLOC / DEMAND">;
                readonly system: {
                    readonly reactor: "REACTOR";
                    readonly engines: "ENGINES";
                    readonly jumpDrive: "JUMP DRIVE";
                    readonly lifeSupport: "LIFE SUPPORT";
                    readonly sensors: "SENSORS";
                    readonly weapons: "WEAPONS";
                    readonly shields: "SHIELDS";
                } & import("../types").TextGroup;
                readonly rowOffline: import("..").TextEntry<"{system}  [OFFLINE]">;
                readonly power: import("..").TextEntry<"{alloc}/{dem} u/s">;
                readonly idle: import("..").TextEntry<"idle">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly mods: {
            readonly title: import("..").TextEntry<"MODS">;
            readonly language: import("..").TextEntry<"LANGUAGE">;
            readonly languageRow: import("..").TextEntry<"LANGUAGE ▸ {value}">;
            readonly desc: {
                readonly language: import("..").TextEntry<"CHOOSE THE GAME'S LANGUAGE">;
                readonly mods: import("..").TextEntry<"INSTALLED MODS, LANGUAGE PACKS AND THE MODS FOLDER">;
            } & import("../types").TextGroup;
            readonly close: {
                readonly touch: import("..").TextEntry<"TAP A MOD TO SWITCH IT — TAP OUTSIDE TO CLOSE">;
                readonly keyboard: import("..").TextEntry<"UP / DOWN — ENTER ON / OFF — LEFT / RIGHT MOVES — ESC CLOSES">;
            } & import("../types").TextGroup;
            readonly english: import("..").TextEntry<"English">;
            readonly refresh: import("..").TextEntry<"REFRESH">;
            readonly exportTemplate: import("..").TextEntry<"EXPORT ENGLISH TEMPLATE">;
            readonly openFolder: import("..").TextEntry<"OPEN MODS FOLDER">;
            readonly empty: import("..").TextEntry<"No Mods or Language Packs installed.">;
            readonly noFolder: import("..").TextEntry<"This device has no mods folder.">;
            readonly loading: import("..").TextEntry<"LOADING LANGUAGE…">;
            readonly exported: import("..").TextEntry<"Template written to {path}">;
            readonly exportFailed: import("..").TextEntry<"Could not write the template">;
            readonly lobbyOnly: import("..").TextEntry<"LANGUAGE CHANGES IN THE LOBBY">;
            readonly publish: {
                readonly action: import("..").TextEntry<"PUBLISH TO WORKSHOP">;
                readonly heading: import("..").TextEntry<"PUBLISH WHICH MOD?">;
                readonly empty: import("..").TextEntry<"No Mods in your mods folder can be published.">;
                readonly back: import("..").TextEntry<"◂ BACK">;
                readonly closeKeyboard: import("..").TextEntry<"UP / DOWN — ENTER PUBLISHES — ESC GOES BACK">;
                readonly closeTouch: import("..").TextEntry<"TAP A MOD TO PUBLISH IT — TAP BACK TO RETURN">;
                readonly progress: {
                    readonly preparing: import("..").TextEntry<"Preparing {name}…">;
                    readonly uploading: import("..").TextEntry<"Uploading {name}… {percent}%">;
                    readonly preview: import("..").TextEntry<"Uploading the preview image…">;
                    readonly committing: import("..").TextEntry<"Finishing the upload…">;
                } & import("../types").TextGroup;
                readonly done: import("..").TextEntry<"Published {name}. Steam opened its Workshop page: set who can see it there.">;
                readonly agreement: import("..").TextEntry<"Uploaded {name}, but Steam needs you to accept the Workshop agreement. Its Workshop page is open.">;
                readonly savedFailed: import("..").TextEntry<"Uploaded {name}, but the record of it could not be saved, so a later PUBLISH may make it private again. Its Workshop page is open.">;
                readonly failed: {
                    readonly notHere: import("..").TextEntry<"Publishing needs the desktop app, as the host, with Steam running.">;
                    readonly busy: import("..").TextEntry<"Another upload is still running.">;
                    readonly notFound: import("..").TextEntry<"That Mod is not in your mods folder, or it cannot be used.">;
                    readonly previewMissing: import("..").TextEntry<"Add a preview.png or preview.jpg to the Mod's folder first.">;
                    readonly previewInvalid: import("..").TextEntry<"The preview image must be a plain preview.png or preview.jpg under 1 MB.">;
                    readonly badTitle: import("..").TextEntry<"The Mod's name is too long or has odd characters for a Workshop title.">;
                    readonly badItemId: import("..").TextEntry<"mods-published.json has a bad Workshop id for {id}.">;
                    readonly ledger: import("..").TextEntry<"Could not read mods-published.json in the app's data folder.">;
                    readonly staging: import("..").TextEntry<"Could not copy the Mod's files to upload them.">;
                    readonly steam: import("..").TextEntry<"Steam refused the upload: {why}">;
                    readonly timeout: import("..").TextEntry<"Steam did not answer in time. Try again later.">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly section: {
                readonly mods: import("..").TextEntry<"MODS IN LOAD ORDER">;
                readonly packs: import("..").TextEntry<"LANGUAGE PACKS">;
            } & import("../types").TextGroup;
            readonly row: {
                readonly coverage: import("..").TextEntry<"{percent}% TRANSLATED">;
                readonly version: import("..").TextEntry<"v{version}">;
                readonly author: import("..").TextEntry<"by {author}">;
                readonly clean: import("..").TextEntry<"NO PROBLEMS">;
                readonly problems: import("..").TextEntry<{
                    readonly one: "{count} PROBLEM";
                    readonly other: "{count} PROBLEMS";
                }>;
                readonly unusable: import("..").TextEntry<"CANNOT BE USED">;
                readonly more: import("..").TextEntry<"+{count} MORE">;
                readonly on: import("..").TextEntry<"ON">;
                readonly off: import("..").TextEntry<"OFF">;
                readonly earlier: import("..").TextEntry<"◂ EARLIER">;
                readonly later: import("..").TextEntry<"LATER ▸">;
                readonly workshop: import("..").TextEntry<"WORKSHOP">;
                readonly downloading: import("..").TextEntry<"DOWNLOADING">;
                readonly code: import("..").TextEntry<"CODE">;
                readonly needsApproval: import("..").TextEntry<"NEEDS APPROVAL">;
            } & import("../types").TextGroup;
            readonly approve: {
                readonly title: import("..").TextEntry<"APPROVE THIS MOD?">;
                readonly who: import("..").TextEntry<"{name} by {author}">;
                readonly whoAnonymous: import("..").TextEntry<"{name} (no author given)">;
                readonly idSource: import("..").TextEntry<"Id: {id} · from {source}">;
                readonly sourceFolder: import("..").TextEntry<"your mods folder">;
                readonly sourceWorkshop: import("..").TextEntry<"Steam Workshop">;
                readonly warning: import("..").TextEntry<"This Mod runs code with full access to this computer. It can read or change your files, and the game cannot check what it does.">;
                readonly advice: import("..").TextEntry<"Only approve a Mod from someone you trust. If a Steam Workshop update changes its code, you will be asked again.">;
                readonly changed: import("..").TextEntry<"Its code has changed since you last approved it.">;
                readonly cancel: import("..").TextEntry<"CANCEL">;
                readonly approve: import("..").TextEntry<"APPROVE AND TURN ON">;
                readonly closeKeyboard: import("..").TextEntry<"UP / DOWN — ENTER CHOOSES — ESC CANCELS">;
                readonly closeTouch: import("..").TextEntry<"TAP CANCEL OR APPROVE">;
                readonly notHere: import("..").TextEntry<"Mods that run code can only be approved in the desktop app. See MODDING.md for how to approve one by hand.">;
                readonly done: import("..").TextEntry<"Approved. The Mod is on.">;
                readonly failed: import("..").TextEntry<"Could not approve it. Press REFRESH and try again.">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly modpanel: {
            readonly row: import("..").TextEntry<"MOD PANELS">;
            readonly desc: import("..").TextEntry<"PAGES THE MODS IN THIS ROOM ADD">;
            readonly close: import("..").TextEntry<"CLOSE">;
            readonly frame: import("..").TextEntry<"Mod panel: {title}">;
            readonly removed: import("..").TextEntry<"{title} tried to leave its frame, so it was closed.">;
            readonly useBrowser: import("..").TextEntry<"Mod panels do not run in this app. Join this room in a web browser to use them.">;
            readonly empty: import("..").TextEntry<"This room has no mod panels.">;
        } & import("../types").TextGroup;
    };
    readonly station: {
        readonly helm: {
            readonly console: {
                readonly title: import("..").TextEntry<"HELM">;
                readonly header: {
                    readonly link: import("..").TextEntry<"SHIPNET LINK // SB-OS 2.4 ·">;
                    readonly clock: import("..").TextEntry<"T+{clock}">;
                } & import("../types").TextGroup;
                readonly chip: {
                    readonly speed: import("..").TextEntry<"spd">;
                    readonly throttle: import("..").TextEntry<"thr">;
                    readonly heading: import("..").TextEntry<"hdg">;
                    readonly ordered: import("..").TextEntry<"ord">;
                    readonly mine: import("..").TextEntry<"⚠ mine">;
                    readonly hazard: import("..").TextEntry<"haz">;
                } & import("../types").TextGroup;
                readonly hull: import("..").TextEntry<"hull">;
                readonly view: {
                    readonly map: import("..").TextEntry<"map">;
                    readonly parascope: import("..").TextEntry<"parascope">;
                } & import("../types").TextGroup;
                readonly promote: {
                    readonly scope: import("..").TextEntry<"⧉ screen">;
                    readonly chart: import("..").TextEntry<"⧉ chart on screen">;
                } & import("../types").TextGroup;
                readonly radiation: import("..").TextEntry<"☢ high radiation — hull ablating">;
                readonly evasive: {
                    readonly on: import("..").TextEntry<"⤨ EVASIVE ON">;
                    readonly off: import("..").TextEntry<"Evasive">;
                    readonly hint: import("..").TextEntry<"harder to hit · louder">;
                } & import("../types").TextGroup;
                readonly jump: {
                    readonly engage: import("..").TextEntry<"⭍ ENGAGE JUMP">;
                    readonly idle: import("..").TextEntry<"Jump drive">;
                    readonly ready: import("..").TextEntry<"spooled — punch it (core is heating)">;
                    readonly locked: import("..").TextEntry<"drive locked out — reroute power">;
                    readonly waiting: import("..").TextEntry<"engineering spools the charge">;
                } & import("../types").TextGroup;
                readonly rail: {
                    readonly label: import("..").TextEntry<"⌁ rail">;
                    readonly noSlugs: import("..").TextEntry<"no slugs">;
                    readonly armedScope: import("..").TextEntry<"ARMED — helm fires from the view">;
                    readonly armed: import("..").TextEntry<"◉ ARMED — tap to fire">;
                    readonly cycling: import("..").TextEntry<"CYCLING {sec}s">;
                    readonly pressArm: import("..").TextEntry<"press to arm">;
                    readonly pressArmSteer: import("..").TextEntry<"press to arm · steer to aim">;
                    readonly bears: import("..").TextEntry<"rail bears on bow {bearing}° — steer to aim">;
                } & import("../types").TextGroup;
                readonly ecm: {
                    readonly on: import("..").TextEntry<"≋ ECM ON">;
                    readonly off: import("..").TextEntry<"ECM">;
                    readonly hintOn: import("..").TextEntry<"draws power · loud">;
                    readonly hintOff: import("..").TextEntry<"scrambles homing">;
                } & import("../types").TextGroup;
                readonly flare: {
                    readonly label: import("..").TextEntry<"✺ flare">;
                    readonly hintReady: import("..").TextEntry<"not torpedoes">;
                    readonly hintSpent: import("..").TextEntry<"spent">;
                } & import("../types").TextGroup;
                readonly chart: {
                    readonly label: import("..").TextEntry<"⌖ chart">;
                    readonly plotCourse: import("..").TextEntry<"plot course">;
                    readonly locked: import("..").TextEntry<"LOCKED">;
                } & import("../types").TextGroup;
                readonly throttle: {
                    readonly label: import("..").TextEntry<"throttle">;
                    readonly order: {
                        readonly allStop: import("..").TextEntry<"ALL STOP">;
                        readonly aheadThird: import("..").TextEntry<"AHEAD 1/3">;
                        readonly aheadTwoThirds: import("..").TextEntry<"AHEAD 2/3">;
                        readonly aheadFull: import("..").TextEntry<"AHEAD FULL">;
                    } & import("../types").TextGroup;
                    readonly detent: {
                        readonly stop: import("..").TextEntry<"STOP">;
                        readonly third: import("..").TextEntry<"1/3">;
                        readonly twoThirds: import("..").TextEntry<"2/3">;
                        readonly full: import("..").TextEntry<"FULL">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
                readonly engines: {
                    readonly label: import("..").TextEntry<"engines">;
                    readonly offline: import("..").TextEntry<"OFFLN">;
                    readonly idle: import("..").TextEntry<"idle">;
                    readonly starved: import("..").TextEntry<"⚠ power-starved — thrust degraded">;
                } & import("../types").TextGroup;
                readonly caption: {
                    readonly ordered: import("..").TextEntry<"ord">;
                    readonly bow: import("..").TextEntry<"bow">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly compass: {
                readonly cardinal: {
                    readonly north: import("..").TextEntry<"N">;
                    readonly east: import("..").TextEntry<"E">;
                    readonly south: import("..").TextEntry<"S">;
                    readonly west: import("..").TextEntry<"W">;
                } & import("../types").TextGroup;
                readonly heading: import("..").TextEntry<"HDG">;
                readonly ordered: import("..").TextEntry<"ORD">;
                readonly slew: import("..").TextEntry<"{dir} {delta}° @ {rate}°/s {dir}">;
            } & import("../types").TextGroup;
            readonly starMap: {
                readonly awaiting: import("..").TextEntry<"AWAITING CHARTS">;
                readonly surveying: import("..").TextEntry<"long-range survey in progress">;
                readonly debris: import("..").TextEntry<"⚠ DEBRIS">;
                readonly dest: import("..").TextEntry<"▸ DEST">;
                readonly header: {
                    readonly title: import("..").TextEntry<"NAV CHART // GALAXY">;
                    readonly system: import("..").TextEntry<"SYS: {name}">;
                    readonly uncharted: import("..").TextEntry<"UNCHARTED">;
                    readonly legend: import("..").TextEntry<"● charted · ◌ signal frontier · faint = beyond sensors">;
                    readonly close: import("..").TextEntry<"close chart">;
                } & import("../types").TextGroup;
                readonly hint: import("..").TextEntry<"tap a linked system to lock destination · tap again to release">;
                readonly footer: {
                    readonly dest: import("..").TextEntry<"dest">;
                    readonly random: import("..").TextEntry<"RANDOM LINKED">;
                    readonly locked: import("..").TextEntry<"LOCKED">;
                    readonly jump: import("..").TextEntry<"jump">;
                    readonly clear: import("..").TextEntry<"clear">;
                    readonly engage: import("..").TextEntry<"⭍ engage jump">;
                    readonly driveLocked: import("..").TextEntry<"⚠ drive locked out">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly tactical: {
            readonly arc: {
                readonly fore: import("..").TextEntry<"fore">;
                readonly aft: import("..").TextEntry<"aft">;
                readonly port: import("..").TextEntry<"port">;
                readonly stbd: import("..").TextEntry<"stbd">;
            };
            readonly weapon: {
                readonly phaser: "phaser";
            } & import("../types").TextGroup;
            readonly scopePanel: {
                readonly title: import("..").TextEntry<"targeting scope">;
                readonly titleArmed: import("..").TextEntry<"targeting scope · weapons free">;
                readonly armedBanner: import("..").TextEntry<"ROCKETS ARMED — tap to fire">;
            };
            readonly chip: {
                readonly target: import("..").TextEntry<"● {designator}">;
                readonly targetClass: import("..").TextEntry<"● {designator} · {shipClass}">;
                readonly bearingRange: import("..").TextEntry<"BRG {brg}° · RNG {rng}u">;
                readonly closing: import("..").TextEntry<"CLS {rate}u/s">;
                readonly noLockArmed: import("..").TextEntry<"○ NO LOCK — taps fire rockets">;
                readonly noLock: import("..").TextEntry<"○ NO TARGET LOCK — tap a contact">;
            };
            readonly ranges: {
                readonly gun: import("..").TextEntry<"gun {n}u">;
                readonly beam: import("..").TextEntry<"beam {n}u">;
                readonly seeker: import("..").TextEntry<"seeker {n}u">;
            };
            readonly threat: {
                readonly title: import("..").TextEntry<"threat board">;
                readonly empty: import("..").TextEntry<"— no hostiles on the board —">;
                readonly colId: import("..").TextEntry<"id">;
                readonly colClass: import("..").TextEntry<"class">;
                readonly colRng: import("..").TextEntry<"rng">;
                readonly colBrg: import("..").TextEntry<"brg">;
                readonly unidentified: import("..").TextEntry<"unidentified">;
                readonly mineLocked: import("..").TextEntry<"mine · locked">;
                readonly mine: import("..").TextEntry<"mine">;
                readonly debris: import("..").TextEntry<"debris">;
            };
            readonly target: {
                readonly title: import("..").TextEntry<"target data">;
                readonly scan: import("..").TextEntry<"scan {pct}%">;
                readonly shield: import("..").TextEntry<"shield">;
                readonly hull: import("..").TextEntry<"hull">;
                readonly subTarget: import("..").TextEntry<"sub-target">;
                readonly shieldUp: import("..").TextEntry<"shield up — drop it first">;
                readonly aim: import("..").TextEntry<"aim ▸">;
                readonly aimHull: import("..").TextEntry<"HULL">;
                readonly hullDestroyed: import("..").TextEntry<"HULL — {designator} destroyed">;
                readonly pointsLocated: import("..").TextEntry<{
                    readonly one: "{count} point located";
                    readonly other: "{count} points located";
                }>;
                readonly noPoints: import("..").TextEntry<"no target points located — have Science scan it">;
                readonly noLock: import("..").TextEntry<"no target lock — tap a contact on the scope">;
            };
            readonly deflector: {
                readonly title: import("..").TextEntry<"deflector status">;
                readonly allocation: import("..").TextEntry<"arc power allocation → engineering">;
            };
            readonly ordnance: {
                readonly title: import("..").TextEntry<"ordnance">;
                readonly torpedoes: import("..").TextEntry<"torpedoes">;
                readonly noisemakers: import("..").TextEntry<"noisemakers">;
                readonly missiles: import("..").TextEntry<"missiles">;
                readonly rockets: import("..").TextEntry<"rockets">;
                readonly railgun: import("..").TextEntry<"railgun → helm">;
                readonly railLine: import("..").TextEntry<"RAIL {stock} · {status}">;
            };
            readonly rail: {
                readonly cycling: import("..").TextEntry<"CYCLING {sec}s">;
                readonly ready: import("..").TextEntry<"READY">;
                readonly cyclingLc: import("..").TextEntry<"cycling {sec}s">;
                readonly readyLc: import("..").TextEntry<"ready">;
            };
            readonly launchers: {
                readonly title: import("..").TextEntry<"launchers">;
                readonly stripMissiles: import("..").TextEntry<"missiles {n}">;
                readonly stripRail: import("..").TextEntry<"rail {n} · {status}">;
                readonly missileRack: import("..").TextEntry<"missile rack">;
                readonly homing: import("..").TextEntry<"homing · spam to volley">;
                readonly noMissiles: import("..").TextEntry<"NO MISSILES">;
                readonly noLock: import("..").TextEntry<"NO LOCK">;
                readonly fireMissile: import("..").TextEntry<"FIRE MISSILE ▸ {designator}">;
                readonly missilesExpended: import("..").TextEntry<"missile rack expended">;
                readonly missileNeedsLock: import("..").TextEntry<"missiles fly to the current lock: tap a contact first">;
                readonly rocketPod: import("..").TextEntry<"rocket pod">;
                readonly looseTracking: import("..").TextEntry<"loose-tracking · tap scope">;
                readonly noRockets: import("..").TextEntry<"NO ROCKETS">;
                readonly armedDisarm: import("..").TextEntry<"◉ ARMED ×{n} — DISARM">;
                readonly armRockets: import("..").TextEntry<"ARM ROCKETS ×{n}">;
                readonly podExpended: import("..").TextEntry<"rocket pod expended">;
                readonly armedHint: import("..").TextEntry<"taps on the scope fire at that bearing; disarm to restore tap-to-lock">;
                readonly idleHint: import("..").TextEntry<"while armed, taps on the targeting scope fire instead of locking">;
            };
            readonly beams: {
                readonly title: import("..").TextEntry<"beam banks">;
                readonly chargeHeat: import("..").TextEntry<"charge · heat">;
                readonly range: import("..").TextEntry<"range {n}u">;
                readonly heat: import("..").TextEntry<"heat {n}">;
                readonly cannoneer: import("..").TextEntry<"cannoneer">;
                readonly hot: import("..").TextEntry<"HOT">;
                readonly far: import("..").TextEntry<"FAR">;
                readonly fire: import("..").TextEntry<"FIRE">;
                readonly delegatedNote: import("..").TextEntry<"phaser banks marked {mark} are manned by a Cannoneer">;
                readonly outOfRange: import("..").TextEntry<"target out of beam range ({dist}u) — close to {range}u">;
            };
            readonly turrets: {
                readonly pdToCupola: import("..").TextEntry<"point defense → cupola gunner">;
                readonly hold: import("..").TextEntry<"HOLD">;
                readonly pd: import("..").TextEntry<"PD">;
                readonly holdSheds: import("..").TextEntry<"HOLD sheds gun power">;
                readonly title: import("..").TextEntry<"gun turrets">;
                readonly pdAuto: import("..").TextEntry<"pd auto · power">;
                readonly pdRange: import("..").TextEntry<"pd {n}u">;
                readonly heat: import("..").TextEntry<"heat {n}">;
                readonly rdy: import("..").TextEntry<"rdy {sec}s">;
                readonly offline: import("..").TextEntry<"offline">;
                readonly ready: import("..").TextEntry<"ready">;
                readonly holdNote: import("..").TextEntry<"HOLD sheds gun power. Auto-PD supersedes it (torpedoes uninterceptable).">;
            };
            readonly torpedo: {
                readonly title: import("..").TextEntry<"torpedo room">;
                readonly magazine: import("..").TextEntry<"magazine">;
                readonly magTorpedoes: import("..").TextEntry<"torpedoes {n}">;
                readonly magNoisemakers: import("..").TextEntry<"noisemakers {n}">;
                readonly solutionTitle: import("..").TextEntry<"◈ FIRING SOLUTION">;
                readonly solutionReadout: import("..").TextEntry<"— brg {brg}° · rng {rng}">;
                readonly solutionTap: import("..").TextEntry<"· tap to load">;
                readonly bearing: import("..").TextEntry<"bearing">;
                readonly estRunTarget: import("..").TextEntry<"est. run to {designator}: ~{sec}s">;
                readonly estRunMark: import("..").TextEntry<"est. run to mark: ~{sec}s">;
                readonly fishSpeed: import("..").TextEntry<"fish speed {n}u/s">;
                readonly armDelay: import("..").TextEntry<"arm delay">;
                readonly armsOut: import("..").TextEntry<"arms ~{n}u out">;
                readonly noIff: import("..").TextEntry<"⚠ may arm near own ship (no IFF)">;
                readonly noise: import("..").TextEntry<"noise">;
                readonly torpedo: import("..").TextEntry<"torpedo">;
                readonly fire: import("..").TextEntry<"FIRE">;
                readonly loadTorp: import("..").TextEntry<"load torp">;
                readonly loadNoise: import("..").TextEntry<"load noise">;
                readonly inFlight: import("..").TextEntry<"in flight">;
            };
            readonly flight: {
                readonly missile: import("..").TextEntry<"MISSILE">;
                readonly rocket: import("..").TextEntry<"ROCKET">;
                readonly rail: import("..").TextEntry<"RAIL">;
                readonly noise: import("..").TextEntry<"NOISE">;
                readonly flare: import("..").TextEntry<"FLARE">;
                readonly torp: import("..").TextEntry<"TORP">;
                readonly chasingLock: import("..").TextEntry<"chasing lock">;
                readonly fizzled: import("..").TextEntry<"fizzled">;
                readonly wild: import("..").TextEntry<"wild">;
                readonly looseTracking: import("..").TextEntry<"loose-tracking">;
                readonly running: import("..").TextEntry<"running">;
                readonly luring: import("..").TextEntry<"luring">;
                readonly decoying: import("..").TextEntry<"decoying">;
                readonly lock: import("..").TextEntry<"● LOCK">;
                readonly seeking: import("..").TextEntry<"seeking">;
                readonly active: import("..").TextEntry<"active">;
                readonly arm: import("..").TextEntry<"arm {sec}s">;
            };
            readonly unit: {
                readonly sec: import("..").TextEntry<"{n}s">;
            };
            readonly header: {
                readonly hull: import("..").TextEntry<"hull">;
            };
            readonly scopeCanvas: {
                readonly ringGun: import("..").TextEntry<"GUN">;
                readonly ringBeam: import("..").TextEntry<"BEAM">;
                readonly ringSeeker: import("..").TextEntry<"SKR">;
                readonly arm: import("..").TextEntry<"ARM">;
                readonly rangeButton: import("..").TextEntry<"rng">;
            } & import("../types").TextGroup;
            readonly schematic: {
                readonly mineCasing: import("..").TextEntry<"MINE CASING — HULL SHOTS ONLY">;
                readonly aimHull: import("..").TextEntry<"AIM: HULL">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly scan: {
            readonly glass: {
                readonly noPower: import("..").TextEntry<"NO POWER TO SENSORS">;
                readonly noPowerHint: import("..").TextEntry<"route power to SENSORS to light the dish">;
                readonly noReturn: import("..").TextEntry<"NO RETURN ON SCOPE">;
                readonly noReturnHint: import("..").TextEntry<"sweep a contact to put it on the glass">;
                readonly spentPoint: import("..").TextEntry<"{label} ✓">;
            } & import("../types").TextGroup;
            readonly status: {
                readonly target: import("..").TextEntry<"TGT {name}">;
                readonly targetClassed: import("..").TextEntry<"{designator} · {shipClass}">;
                readonly targetAnomaly: import("..").TextEntry<"{designator} · {anomaly}">;
                readonly unresolvedReturn: import("..").TextEntry<"UNRESOLVED RETURN">;
                readonly spin: import("..").TextEntry<"SPIN {deg}°">;
                readonly res: import("..").TextEntry<"RES {pct}%">;
            } & import("../types").TextGroup;
            readonly analysis: import("..").TextEntry<"analysis">;
            readonly poi: {
                readonly unresolvedPoint: import("..").TextEntry<"UNRESOLVED POINT">;
                readonly spent: import("..").TextEntry<"already actioned — the point is spent">;
                readonly resolving: import("..").TextEntry<"still resolving — keep the deep scan on it to survey this point">;
                readonly noProbes: import("..").TextEntry<"⚠ no probes aboard — merchants sell them">;
                readonly probesAboard: import("..").TextEntry<"probes aboard: {count}">;
                readonly outOfRange: import("..").TextEntry<"⚠ out of action range — close to ~{range}u ({distance}u now)">;
                readonly actioned: import("..").TextEntry<"✓ actioned">;
                readonly surveyToUnlock: import("..").TextEntry<"survey to unlock">;
                readonly oneProbe: import("..").TextEntry<"· 1 probe">;
                readonly pointsOfInterest: import("..").TextEntry<{
                    readonly one: "{count} point of interest on the glass — tap a marker to review its action";
                    readonly other: "{count} points of interest on the glass — tap a marker to review its action";
                }>;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly science: {
            readonly common: {
                readonly noPower: import("..").TextEntry<"⚠ NO POWER TO SENSORS">;
                readonly distanceU: import("..").TextEntry<"{n}u">;
                readonly scanning: import("..").TextEntry<"scanning…">;
            } & import("../types").TextGroup;
            readonly console: {
                readonly title: import("..").TextEntry<"Science">;
                readonly headerChip: {
                    readonly contacts: import("..").TextEntry<"contacts">;
                    readonly unsurveyed: import("..").TextEntry<"unsurveyed">;
                    readonly probes: import("..").TextEntry<"probes">;
                } & import("../types").TextGroup;
                readonly onScreen: {
                    readonly probe: import("..").TextEntry<"⧉ probe on screen">;
                    readonly scan: import("..").TextEntry<"⧉ scan on screen">;
                } & import("../types").TextGroup;
                readonly probeActiveJump: import("..").TextEntry<"PROBE ACTIVE — take the stick">;
                readonly sweep: {
                    readonly title: import("..").TextEntry<"sensor sweep">;
                    readonly titlePlot: import("..").TextEntry<"sensor sweep · plot">;
                } & import("../types").TextGroup;
                readonly plot: {
                    readonly bearing: import("..").TextEntry<"BRG">;
                    readonly range: import("..").TextEntry<"RNG">;
                    readonly delay: import("..").TextEntry<"DLY">;
                    readonly delayValue: import("..").TextEntry<"{sec}s">;
                    readonly solutionLive: import("..").TextEntry<"● SOLUTION LIVE — drag to aim">;
                    readonly hint: import("..").TextEntry<"drag to aim · call brg + dly to tactical">;
                    readonly retract: import("..").TextEntry<"mode off retracts">;
                } & import("../types").TextGroup;
                readonly status: {
                    readonly scanning: import("..").TextEntry<"▸ SCAN {designator} · {pct}%">;
                    readonly outOfRange: import("..").TextEntry<"⚠ OUT OF RANGE">;
                    readonly passive: import("..").TextEntry<"○ PASSIVE SWEEP — tap a return to scan">;
                } & import("../types").TextGroup;
                readonly mode: {
                    readonly label: import("..").TextEntry<"mode">;
                    readonly plot: import("..").TextEntry<"◉ PLOT">;
                    readonly scan: import("..").TextEntry<"○ SCAN">;
                } & import("../types").TextGroup;
                readonly foot: {
                    readonly noPower: import("..").TextEntry<"⚠ no power to sensors">;
                    readonly bite: import("..").TextEntry<"sensor bite {range}u">;
                    readonly pinned: import("..").TextEntry<"far returns pin to rim">;
                } & import("../types").TextGroup;
                readonly activeScan: {
                    readonly title: import("..").TextEntry<"active scan">;
                    readonly headline: {
                        readonly derelict: import("..").TextEntry<"Scanning {designator} — derelict hulk">;
                        readonly identified: import("..").TextEntry<"Scanning {designator} — {shipClass}">;
                        readonly anomaly: import("..").TextEntry<"Scanning {designator} — {name}">;
                        readonly unknown: import("..").TextEntry<"Scanning {designator} (unknown)">;
                    } & import("../types").TextGroup;
                    readonly unresolvedFallback: import("..").TextEntry<"unresolved return">;
                    readonly stop: import("..").TextEntry<"stop">;
                    readonly noPowerLong: import("..").TextEntry<"⚠ NO POWER TO SENSORS — ask Engineering to feed the dish">;
                    readonly outOfRangeLong: import("..").TextEntry<"⚠ OUT OF SENSOR RANGE — Helm must close to {range}u ({dist}u now)">;
                    readonly derelictSlow: import("..").TextEntry<"deep scan is slow; salvage & torpedoes recovered at 100%">;
                    readonly identified: import("..").TextEntry<"◇ identified: {shipClass}">;
                    readonly jumpSpool: import("..").TextEntry<"⚠ jump spool detected — escape drive at {pct}%">;
                    readonly targetPoints: import("..").TextEntry<"⚑ target points — call these to Tactical">;
                    readonly keepScanning: import("..").TextEntry<"Keep scanning to locate target points…">;
                    readonly selectHint: import("..").TextEntry<"Select a contact to scan. Enemies reveal target points; derelicts yield salvage; mines get marked for Helm.">;
                } & import("../types").TextGroup;
                readonly hero: {
                    readonly probePilot: import("..").TextEntry<"probe pilot">;
                    readonly sensorScan: import("..").TextEntry<"sensor scan">;
                } & import("../types").TextGroup;
                readonly derelict: {
                    readonly title: import("..").TextEntry<"◆ DERELICT {designator}">;
                    readonly range: import("..").TextEntry<"{n} units">;
                    readonly stripped: import("..").TextEntry<"✦ stripped — salvage recovered">;
                    readonly pending: import("..").TextEntry<"salvage on full scan (slow deep scan)">;
                    readonly deepScan: import("..").TextEntry<"deep scan">;
                } & import("../types").TextGroup;
                readonly hostiles: {
                    readonly title: import("..").TextEntry<"hostiles">;
                    readonly identified: import("..").TextEntry<"{designator} · {shipClass}">;
                    readonly unknown: import("..").TextEntry<"{designator} · Unknown hostile">;
                } & import("../types").TextGroup;
                readonly mines: {
                    readonly title: import("..").TextEntry<"minefield · {n} visible">;
                    readonly marked: import("..").TextEntry<"⚠ {designator} · {dist}u">;
                    readonly faint: import("..").TextEntry<"· faint contact · {dist}u">;
                    readonly markedBadge: import("..").TextEntry<"marked">;
                    readonly marking: import("..").TextEntry<"marking…">;
                    readonly scanToMark: import("..").TextEntry<"scan to mark">;
                } & import("../types").TextGroup;
                readonly friendly: {
                    readonly label: import("..").TextEntry<"○ {designator} · Freighter">;
                } & import("../types").TextGroup;
                readonly contactRow: {
                    readonly range: import("..").TextEntry<"{distance} units · scan {pct}%">;
                    readonly scan: import("..").TextEntry<"scan">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly survey: {
                readonly questThread: import("..").TextEntry<"◈ quest thread">;
                readonly board: {
                    readonly title: import("..").TextEntry<"anomaly survey">;
                    readonly subtitle: import("..").TextEntry<"deep-scan the unknown">;
                    readonly unsurveyed: import("..").TextEntry<"{n} of {total} unsurveyed">;
                    readonly allSurveyed: import("..").TextEntry<"sector surveyed ✦">;
                } & import("../types").TextGroup;
                readonly card: {
                    readonly nameFallback: import("..").TextEntry<"anomaly">;
                    readonly unresolvedName: import("..").TextEntry<"UNRESOLVED RETURN">;
                    readonly kind: {
                        readonly planet: import("..").TextEntry<"planet">;
                        readonly wreck: import("..").TextEntry<"wreck">;
                        readonly phenomenon: import("..").TextEntry<"phenomenon">;
                        readonly organism: import("..").TextEntry<"organism">;
                        readonly mega: import("..").TextEntry<"mega">;
                        readonly comet: import("..").TextEntry<"comet">;
                    } & import("../types").TextGroup;
                    readonly designatorDist: import("..").TextEntry<"{designator} · {dist}u">;
                    readonly unresolvedHint: import("..").TextEntry<"unresolved return: survey to learn what's out there">;
                    readonly outOfRange: import("..").TextEntry<"⚠ out of sensor range — Helm must close to {range}u">;
                    readonly status: {
                        readonly complete: import("..").TextEntry<"✦ survey complete — archived">;
                        readonly running: import("..").TextEntry<"deep scan running…">;
                        readonly nextMilestone: import("..").TextEntry<"next milestone at {pct}%">;
                        readonly awaiting: import("..").TextEntry<"awaiting survey">;
                    } & import("../types").TextGroup;
                    readonly surveying: import("..").TextEntry<"surveying…">;
                    readonly survey: import("..").TextEntry<"survey">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly systemLog: {
                readonly title: import("..").TextEntry<"system log">;
                readonly order: {
                    readonly newestFirst: import("..").TextEntry<"Newest first — tap for newest last">;
                    readonly newestLast: import("..").TextEntry<"Newest last — tap for newest first">;
                } & import("../types").TextGroup;
                readonly badge: {
                    readonly up: import("..").TextEntry<"↑ new">;
                    readonly down: import("..").TextEntry<"↓ new">;
                } & import("../types").TextGroup;
                readonly empty: import("..").TextEntry<"LOG BUFFER EMPTY — AWAITING TRAFFIC">;
                readonly counter: import("..").TextEntry<"log {n}">;
            } & import("../types").TextGroup;
            readonly probe: {
                readonly siteFallback: import("..").TextEntry<"uncharted interior">;
                readonly phase: {
                    readonly landing: import("..").TextEntry<"descent — telemetry acquiring">;
                    readonly exploring: import("..").TextEntry<"link stable — quiet is survival">;
                    readonly extracting: import("..").TextEntry<"extraction channel {pct}%">;
                    readonly extracted: import("..").TextEntry<"probe recovered">;
                    readonly lost: import("..").TextEntry<"signal lost">;
                } & import("../types").TextGroup;
                readonly interact: {
                    readonly channeling: import("..").TextEntry<"CHANNELING {pct}%">;
                    readonly loot: import("..").TextEntry<"RECOVER ▸ salvage pod">;
                    readonly prize: import("..").TextEntry<"RECOVER ▸ ✦ core sample">;
                    readonly terminal: import("..").TextEntry<"READ ▸ terminal">;
                    readonly exit: import("..").TextEntry<"EXTRACT ▸ pad">;
                    readonly nothing: import("..").TextEntry<"— nothing in reach">;
                } & import("../types").TextGroup;
                readonly recovery: import("..").TextEntry<"RECOVERY">;
                readonly prizeCarried: import("..").TextEntry<"✦ core sample">;
                readonly throttle: import("..").TextEntry<"THR {pct}%">;
                readonly ping: {
                    readonly ready: import("..").TextEntry<"ping ready · comms">;
                    readonly cooldown: import("..").TextEntry<"ping {sec}s · comms">;
                } & import("../types").TextGroup;
                readonly abort: import("..").TextEntry<"hold·abort">;
                readonly help: {
                    readonly drag: import("..").TextEntry<"drag the glass to fly · release stops">;
                    readonly keys: import("..").TextEntry<"w/s throttle · a/d turn">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly sweep: {
                readonly sns: import("..").TextEntry<"SNS {n}">;
                readonly returns: import("..").TextEntry<"RETURNS {n}">;
                readonly anomalyFallback: import("..").TextEntry<"anomaly">;
                readonly blipIdentified: import("..").TextEntry<"{designator} {shipClass}">;
                readonly zoomOut: import("..").TextEntry<"zoom out (wider range)">;
                readonly zoomIn: import("..").TextEntry<"zoom in (narrower range)">;
                readonly rng: import("..").TextEntry<"rng">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly eng: {
            readonly header: {
                readonly hull: import("..").TextEntry<"hull">;
            } & import("../types").TextGroup;
            readonly system: {
                readonly reactor: import("..").TextEntry<"Reactor">;
                readonly engines: import("..").TextEntry<"Engines">;
                readonly sensors: import("..").TextEntry<"Sensors">;
                readonly jumpDrive: import("..").TextEntry<"Jump drive">;
                readonly shields: import("..").TextEntry<"Shields">;
                readonly weapons: import("..").TextEntry<"Weapons">;
            } & import("../types").TextGroup;
            readonly arc: {
                readonly fore: import("..").TextEntry<"Fore">;
                readonly aft: import("..").TextEntry<"Aft">;
                readonly port: import("..").TextEntry<"Port">;
                readonly stbd: import("..").TextEntry<"Stbd">;
            } & import("../types").TextGroup;
            readonly state: {
                readonly lockedOut: import("..").TextEntry<"⚠ LOCKED OUT">;
                readonly notEnoughPower: import("..").TextEntry<"NOT ENOUGH POWER">;
                readonly offline: import("..").TextEntry<"OFFLINE">;
            } & import("../types").TextGroup;
            readonly reroute: {
                readonly forcedOffline: import("..").TextEntry<"{systems} FORCED OFFLINE">;
                readonly cause: import("..").TextEntry<"intrusion/surge">;
                readonly button: import("..").TextEntry<"⚡ Reroute power">;
                readonly systemFallback: import("..").TextEntry<"system">;
                readonly dialogLabel: import("..").TextEntry<"Reroute conduit routing: {system}">;
                readonly title: import("..").TextEntry<"REROUTE — CONDUIT ROUTING · {system}">;
                readonly hint: import("..").TextEntry<"rotate conduits · link SRC ▸ {abbr}">;
                readonly hide: import("..").TextEntry<"hide panel — restore keeps running">;
                readonly close: import("..").TextEntry<"close reroute panel">;
                readonly restore: import("..").TextEntry<"restore">;
                readonly awaiting: import("..").TextEntry<"AWAITING ROUTING TELEMETRY…">;
                readonly src: import("..").TextEntry<"SRC">;
                readonly flowing: import("..").TextEntry<"▸ POWER FLOWING — {system} RESTORING">;
                readonly incomplete: import("..").TextEntry<"ROUTE INCOMPLETE">;
            } & import("../types").TextGroup;
            readonly abbr: {
                readonly reactor: import("..").TextEntry<"RCT">;
                readonly engines: import("..").TextEntry<"ENG">;
                readonly jumpDrive: import("..").TextEntry<"JMP">;
                readonly sensors: import("..").TextEntry<"SEN">;
                readonly weapons: import("..").TextEntry<"WPN">;
                readonly shields: import("..").TextEntry<"SHD">;
                readonly fallback: import("..").TextEntry<"SYS">;
            } & import("../types").TextGroup;
            readonly schematic: {
                readonly title: import("..").TextEntry<"Ship schematic">;
                readonly hint: import("..").TextEntry<"tap node → power row">;
                readonly integ: import("..").TextEntry<"integ {pct}%">;
            } & import("../types").TextGroup;
            readonly damage: {
                readonly title: import("..").TextEntry<"Damage control">;
                readonly salvage: import("..").TextEntry<"salvage · repairs spend it">;
                readonly noSalvage: import("..").TextEntry<"⚠ no salvage — repair teams can't start">;
                readonly hull: import("..").TextEntry<"Hull">;
                readonly none: import("..").TextEntry<"no system damage — teams standing by">;
                readonly rowActive: import("..").TextEntry<"● repairing">;
                readonly rowDispatch: import("..").TextEntry<"tap to dispatch">;
                readonly noFieldRepair: import("..").TextEntry<"no field repair">;
                readonly btnActive: import("..").TextEntry<"repairing…">;
                readonly btn: import("..").TextEntry<"repair">;
                readonly recall: import("..").TextEntry<"recall repair team">;
                readonly dispatch: import("..").TextEntry<"dispatch repair team">;
            } & import("../types").TextGroup;
            readonly gauges: {
                readonly title: import("..").TextEntry<"Reactor gauges">;
                readonly output: import("..").TextEntry<"OUTPUT">;
                readonly coreTemp: import("..").TextEntry<"CORE TEMP">;
                readonly wpnHeat: import("..").TextEntry<"WPN HEAT">;
                readonly contain: import("..").TextEntry<"CONTAIN">;
            } & import("../types").TextGroup;
            readonly reactor: {
                readonly title: import("..").TextEntry<"Reactor core">;
                readonly overdrawn: import("..").TextEntry<"⚠ power overdrawn — a system is starved">;
                readonly overclockBanner: import("..").TextEntry<"⚡ overclock — building heat · signature loud">;
                readonly coreTemp: import("..").TextEntry<"core temp · red line {line}">;
                readonly danger: import("..").TextEntry<"▲ DANGER">;
                readonly redLineTip: import("..").TextEntry<"red line — reactor takes damage past {line}">;
                readonly readoutOutput: import("..").TextEntry<"output">;
                readonly readoutDemand: import("..").TextEntry<"demand">;
                readonly readoutContainment: import("..").TextEntry<"containment">;
                readonly unitPerSec: import("..").TextEntry<"u/s">;
                readonly overclockOn: import("..").TextEntry<"⚡ Overclock ON">;
                readonly overclock: import("..").TextEntry<"Overclock">;
                readonly overclockHint: import("..").TextEntry<"+{bonus}u output · builds heat">;
                readonly vent: import("..").TextEntry<"❄ Vent ({sec}s, ½ output)">;
                readonly venting: import("..").TextEntry<"venting… {sec}s · output halved">;
                readonly ventIdle: import("..").TextEntry<"core {heat}% · wpn heat {wpn}">;
            } & import("../types").TextGroup;
            readonly flux: {
                readonly title: import("..").TextEntry<"Power flux">;
                readonly trace: import("..").TextEntry<"demand trace · u/s">;
                readonly cap: import("..").TextEntry<"▁▁ cap {output}">;
                readonly readout: import("..").TextEntry<"{demand}u/s">;
            } & import("../types").TextGroup;
            readonly jump: {
                readonly title: import("..").TextEntry<"Jump drive">;
                readonly spooling: import("..").TextEntry<"◉ Spooling">;
                readonly spool: import("..").TextEntry<"Spool jump">;
                readonly charge: import("..").TextEntry<"jump charge">;
                readonly charged: import("..").TextEntry<"✦ charged: capacitor bleeding into the core. Jump soon or VENT through it.">;
                readonly starved: import("..").TextEntry<"⚠ not enough free power (needs {need}u) — deallocate a system">;
                readonly throttled: import("..").TextEntry<"drive throttled to {pct}% — spool is slower">;
                readonly draws: import("..").TextEntry<"draws {rate} u/s while spooling">;
                readonly off: import("..").TextEntry<"off — no power drawn">;
            } & import("../types").TextGroup;
            readonly power: {
                readonly title: import("..").TextEntry<"Power distribution">;
                readonly outputLine: import("..").TextEntry<"OUTPUT {output}u/s">;
                readonly over: import("..").TextEntry<"OVER {amount}">;
                readonly free: import("..").TextEntry<"FREE {amount}">;
                readonly howTo: import("..").TextEntry<"Draw = {formula}. Drag a bar to set it; fill = granted. Starved rows flash {alarm}. {cut} cuts to 0 and remembers.">;
                readonly formula: import("..").TextEntry<"demand × priority">;
                readonly coreSource: import("..").TextEntry<"core source — feeds bus">;
                readonly coreSourceShort: import("..").TextEntry<"core source">;
                readonly reactorOutput: import("..").TextEntry<"{output}u">;
                readonly lifeSupportNote: import("..").TextEntry<"life support reserves {amount}u first while the breaker is ON. Shielding is the crew's health bar.">;
            } & import("../types").TextGroup;
            readonly shields: {
                readonly title: import("..").TextEntry<"Shield allocation">;
                readonly charge: import("..").TextEntry<"chg">;
                readonly chargeTip: import("..").TextEntry<"charge {charge}/{max}">;
                readonly alloc: import("..").TextEntry<"{arc} shield allocation">;
                readonly note: import("..").TextEntry<"arcs regenerate from SHIELDS power · total allocation drives its demand">;
            } & import("../types").TextGroup;
            readonly lifeSupport: {
                readonly button: import("..").TextEntry<"life support">;
                readonly on: import("..").TextEntry<"◉ ON">;
                readonly off: import("..").TextEntry<"○ OFF">;
                readonly openTip: import("..").TextEntry<"open the life-support breaker (shielding bleeds)">;
                readonly closeTip: import("..").TextEntry<"close the life-support breaker (shielding regens)">;
                readonly meter: import("..").TextEntry<"radiation shielding">;
                readonly statusFence: import("..").TextEntry<"☢ fence burning shielding — get back inside">;
                readonly statusOpen: import("..").TextEntry<"breaker OPEN — the crew slowly cooks">;
                readonly statusStarved: import("..").TextEntry<"⚠ starved/offline — no regen">;
                readonly statusShielded: import("..").TextEntry<"crew shielded">;
                readonly statusRegen: import("..").TextEntry<"regenerating +{rate}/s">;
            } & import("../types").TextGroup;
            readonly row: {
                readonly priority: import("..").TextEntry<"{system} power priority">;
                readonly breakerRestore: import("..").TextEntry<"{system} breaker: restore">;
                readonly breakerCut: import("..").TextEntry<"{system} breaker: cut">;
                readonly restoreTip: import("..").TextEntry<"restore power (previous setting)">;
                readonly cutTip: import("..").TextEntry<"cut power (priority 0)">;
                readonly cut: import("..").TextEntry<"OFF">;
                readonly grantedTip: import("..").TextEntry<"granted {granted} of {demand}u demand · priority {pct}%">;
                readonly integrityTip: import("..").TextEntry<"integrity {pct}%">;
                readonly lockedTip: import("..").TextEntry<"event-forced outage — reroute power to restore">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly solo: {
            readonly unit: {
                readonly sec: import("..").TextEntry<"{n}s">;
                readonly dist: import("..").TextEntry<"{n}u">;
            } & import("../types").TextGroup;
            readonly detent: {
                readonly stop: "STOP";
                readonly third: import("..").TextEntry<"1/3">;
                readonly twoThirds: import("..").TextEntry<"2/3">;
                readonly full: "FULL";
            } & import("../types").TextGroup;
            readonly throttleOrder: {
                readonly allStop: "ALL STOP";
                readonly ahead13: import("..").TextEntry<"AHEAD 1/3">;
                readonly ahead23: import("..").TextEntry<"AHEAD 2/3">;
                readonly aheadFull: "AHEAD FULL";
            } & import("../types").TextGroup;
            readonly shipmaster: import("..").TextEntry<"SHIPMASTER">;
            readonly chip: {
                readonly spd: import("..").TextEntry<"spd">;
                readonly hdg: import("..").TextEntry<"hdg">;
                readonly ord: import("..").TextEntry<"ord">;
                readonly mine: import("..").TextEntry<"⚠ mine">;
                readonly haz: import("..").TextEntry<"haz">;
            } & import("../types").TextGroup;
            readonly label: {
                readonly hull: import("..").TextEntry<"hull">;
                readonly shield: import("..").TextEntry<"shield">;
            } & import("../types").TextGroup;
            readonly view: {
                readonly map: "map";
                readonly parascope: "parascope";
                readonly promote: import("..").TextEntry<"⧉ screen">;
            } & import("../types").TextGroup;
            readonly lock: {
                readonly rocketsArmed: import("..").TextEntry<"ROCKETS ARMED — tap the map to fire">;
                readonly brgRng: import("..").TextEntry<"BRG {brg}° · RNG {rng}u">;
                readonly closing: import("..").TextEntry<"CLS {sign}{speed}u/s">;
                readonly none: import("..").TextEntry<"○ NO LOCK — tap a contact">;
            } & import("../types").TextGroup;
            readonly radiation: import("..").TextEntry<"☢ high radiation — hull ablating">;
            readonly evasive: {
                readonly on: "⤨ EVASIVE ON";
                readonly off: "Evasive";
                readonly hint: import("..").TextEntry<"harder to hit · louder">;
            } & import("../types").TextGroup;
            readonly jump: {
                readonly engage: "⭍ ENGAGE JUMP";
                readonly spooling: "◉ Spooling";
                readonly spool: "Spool jump";
                readonly punch: import("..").TextEntry<"spooled — punch it">;
                readonly locked: import("..").TextEntry<"drive locked out">;
                readonly tapCharge: import("..").TextEntry<"tap to charge the drive">;
            } & import("../types").TextGroup;
            readonly flare: {
                readonly label: import("..").TextEntry<"flare">;
                readonly ready: import("..").TextEntry<"your point defense">;
                readonly expended: import("..").TextEntry<"PD expended">;
            } & import("../types").TextGroup;
            readonly ecm: {
                readonly on: "≋ ECM ON";
                readonly off: "ECM";
                readonly hintOn: import("..").TextEntry<"draws power · loud">;
                readonly hintOff: import("..").TextEntry<"scrambles homing">;
            } & import("../types").TextGroup;
            readonly rail: {
                readonly label: import("..").TextEntry<"⌁ rail">;
                readonly noSlugs: import("..").TextEntry<"no slugs">;
                readonly armedView: import("..").TextEntry<"ARMED — fire from the view">;
                readonly armedTap: import("..").TextEntry<"◉ ARMED — tap to fire">;
                readonly cycling: import("..").TextEntry<"CYC {sec}s">;
                readonly pressArm: import("..").TextEntry<"press to arm">;
                readonly pressArmSteer: import("..").TextEntry<"press to arm · steer to aim">;
            } & import("../types").TextGroup;
            readonly chart: {
                readonly label: "⌖ chart";
                readonly plot: import("..").TextEntry<"plot course">;
                readonly destFallback: import("..").TextEntry<"LOCKED">;
            } & import("../types").TextGroup;
            readonly throttle: {
                readonly label: "throttle";
                readonly engines: "engines";
                readonly offline: import("..").TextEntry<"OFFLN">;
                readonly idle: import("..").TextEntry<"idle">;
                readonly starved: import("..").TextEntry<"⚠ power-starved — thrust degraded">;
            } & import("../types").TextGroup;
            readonly heading: {
                readonly ord: import("..").TextEntry<"ord">;
                readonly bow: import("..").TextEntry<"bow">;
            } & import("../types").TextGroup;
            readonly fire: {
                readonly title: "fire control";
                readonly beam: import("..").TextEntry<"beam {range}u">;
                readonly torp: import("..").TextEntry<"torp {n}">;
                readonly noise: import("..").TextEntry<"noise {n}">;
                readonly heat: import("..").TextEntry<"heat {n}">;
                readonly hot: import("..").TextEntry<"HOT">;
                readonly far: import("..").TextEntry<"FAR">;
                readonly go: import("..").TextEntry<"FIRE">;
                readonly cannoneer: import("..").TextEntry<"cannoneer">;
                readonly cannoneerTitle: import("..").TextEntry<"delegated to a Cannoneer">;
                readonly manned: import("..").TextEntry<"⇢ manned by a Cannoneer">;
                readonly noLockHint: import("..").TextEntry<"no lock — tap a contact on the map">;
                readonly outOfRange: import("..").TextEntry<"out of beam range ({dist}u) — close to {range}u">;
                readonly solution: import("..").TextEntry<"◈ FIRING SOLUTION">;
                readonly solutionDetail: import("..").TextEntry<"— brg {brg}° · rng {rng}">;
                readonly tapLoad: import("..").TextEntry<"· tap to load">;
                readonly brg: import("..").TextEntry<"brg">;
                readonly dly: import("..").TextEntry<"dly">;
                readonly arms: import("..").TextEntry<"arms ~{n}u">;
                readonly runTo: import("..").TextEntry<"run to {what} ~{sec}s">;
                readonly runMark: import("..").TextEntry<"mark">;
                readonly fish: import("..").TextEntry<"fish {speed}u/s">;
                readonly armsNear: import("..").TextEntry<"⚠ arms near own ship">;
            } & import("../types").TextGroup;
            readonly weapon: {
                readonly phaser: "phaser";
            } & import("../types").TextGroup;
            readonly tube: {
                readonly noise: import("..").TextEntry<"noise">;
                readonly torpedo: "torpedo";
                readonly loadTorp: "load torp";
                readonly loadNoise: "load noise";
            } & import("../types").TextGroup;
            readonly rack: {
                readonly missileTitleAt: import("..").TextEntry<"fire missile at {target}">;
                readonly missileTitleNone: import("..").TextEntry<"missiles fly to the lock — tap a map contact">;
                readonly noMissiles: "NO MISSILES";
                readonly missileNoLock: "MSL · NO LOCK";
                readonly missileFire: import("..").TextEntry<"MSL ▸ {target}">;
                readonly rocketTitle: import("..").TextEntry<"arm, then tap the map to fire a rocket at that bearing">;
                readonly noRockets: "NO ROCKETS";
                readonly mapToArm: import("..").TextEntry<"MAP TO ARM">;
                readonly armed: import("..").TextEntry<"◉ ARMED ×{n}">;
                readonly arm: import("..").TextEntry<"ARM RKTS ×{n}">;
                readonly hint: import("..").TextEntry<"rockets: arm, then tap the map to fire · missiles home on the lock">;
                readonly torps: import("..").TextEntry<"torps">;
                readonly noiseStock: import("..").TextEntry<"noise">;
                readonly msls: import("..").TextEntry<"msls">;
                readonly rkts: import("..").TextEntry<"rkts">;
            } & import("../types").TextGroup;
            readonly target: {
                readonly title: "target data";
                readonly scan: import("..").TextEntry<"scan {pct}%">;
                readonly subTarget: import("..").TextEntry<"sub-target">;
                readonly shieldUp: import("..").TextEntry<"shield up — drop it first">;
                readonly aim: import("..").TextEntry<"aim ▸">;
                readonly aimHull: import("..").TextEntry<"HULL">;
                readonly aimDestroyed: import("..").TextEntry<"HULL — {part} destroyed">;
                readonly located: import("..").TextEntry<"{n} located">;
                readonly scanReveals: import("..").TextEntry<"scan reveals points">;
                readonly none: import("..").TextEntry<"no lock — target data on lock">;
            } & import("../types").TextGroup;
            readonly jumpStrip: {
                readonly outage: "forced outage — reroute power";
                readonly hailIncoming: "incoming hail — answer";
                readonly hailOpen: "channel open — hail";
                readonly probe: import("..").TextEntry<"probe active — stick">;
            } & import("../types").TextGroup;
            readonly power: {
                readonly title: import("..").TextEntry<"systems · auto-officers">;
                readonly forcedOffline: import("..").TextEntry<"{systems} FORCED OFFLINE">;
                readonly reroute: "⚡ Reroute";
                readonly salvageTitle: import("..").TextEntry<"salvage — auto-repairs spend it">;
                readonly repChip: import("..").TextEntry<"rep {pct}%">;
                readonly repTitle: import("..").TextEntry<"auto-repair module — runs itself, spends salvage">;
                readonly ventingChip: import("..").TextEntry<"venting {sec}s">;
                readonly vent: import("..").TextEntry<"vent">;
                readonly ventingTitle: import("..").TextEntry<"auto-vent — output halved">;
                readonly ventArmedTitle: import("..").TextEntry<"auto-vent armed — trips at core {heat}">;
                readonly coreChip: import("..").TextEntry<"core {pct}%">;
                readonly coreTitle: import("..").TextEntry<"reactor core temperature">;
                readonly stalled: import("..").TextEntry<"⚠ auto-repair stalled">;
                readonly output: import("..").TextEntry<"OUTPUT {n}u/s">;
                readonly over: import("..").TextEntry<"OVER {n}">;
                readonly free: import("..").TextEntry<"FREE {n}">;
                readonly integrity: import("..").TextEntry<"{system} — integrity {pct}%">;
                readonly bus: import("..").TextEntry<"bus">;
                readonly lockedOut: import("..").TextEntry<"⚠ LOCKED OUT">;
                readonly offline: "OFFLINE";
                readonly priorityLabel: import("..").TextEntry<"{system} power priority">;
                readonly granted: import("..").TextEntry<"granted {granted} of {demand}u demand · priority {pct}%">;
                readonly restoreTitle: import("..").TextEntry<"restore power (previous setting)">;
                readonly cutTitle: import("..").TextEntry<"cut power (priority 0)">;
                readonly breakerRestore: import("..").TextEntry<"{system} breaker: restore">;
                readonly breakerCut: import("..").TextEntry<"{system} breaker: cut">;
                readonly off: import("..").TextEntry<"OFF">;
            } & import("../types").TextGroup;
            readonly sysTag: {
                readonly reactor: import("..").TextEntry<"RCT">;
                readonly engines: import("..").TextEntry<"ENG">;
                readonly sensors: import("..").TextEntry<"SNS">;
                readonly jumpDrive: import("..").TextEntry<"JMP">;
                readonly shields: import("..").TextEntry<"SHD">;
                readonly weapons: import("..").TextEntry<"WPN">;
            } & import("../types").TextGroup;
            readonly spool: {
                readonly on: import("..").TextEntry<"◉ spool">;
                readonly off: import("..").TextEntry<"spool">;
                readonly label: "jump";
                readonly charged: import("..").TextEntry<"✦ charged — engage from the flight dock">;
                readonly starved: import("..").TextEntry<"⚠ not enough free power (needs {n}u)">;
                readonly throttled: import("..").TextEntry<"drive throttled to {pct}%">;
            } & import("../types").TextGroup;
            readonly shield: {
                readonly tag: import("..").TextEntry<"DFL">;
                readonly title: import("..").TextEntry<"deflector — one dial, four arcs">;
                readonly chargeTitle: import("..").TextEntry<"charge {charge}/{max}">;
                readonly allocation: import("..").TextEntry<"shield allocation — all arcs">;
                readonly average: import("..").TextEntry<"average charge">;
            } & import("../types").TextGroup;
            readonly signals: {
                readonly probePilot: "probe pilot";
                readonly sensors: "sensors";
                readonly faceSweep: import("..").TextEntry<"sweep">;
                readonly faceScan: import("..").TextEntry<"scan">;
                readonly faceProbe: import("..").TextEntry<"probe">;
                readonly surveys: import("..").TextEntry<"◈ surveys ×{n}">;
                readonly closeSurvey: import("..").TextEntry<"✕ close survey board">;
            } & import("../types").TextGroup;
            readonly sweep: {
                readonly brg: import("..").TextEntry<"BRG">;
                readonly rng: import("..").TextEntry<"RNG">;
                readonly dly: import("..").TextEntry<"DLY {sec}s">;
                readonly solutionLive: import("..").TextEntry<"● SOLUTION LIVE — drag to aim">;
                readonly scanning: import("..").TextEntry<"▸ SCAN {target} · {pct}%">;
                readonly outOfRange: import("..").TextEntry<"⚠ OUT OF RANGE">;
                readonly passive: import("..").TextEntry<"○ PASSIVE SWEEP — tap a return to scan">;
                readonly mode: import("..").TextEntry<"mode">;
                readonly modePlot: import("..").TextEntry<"◉ PLOT">;
                readonly modeScan: import("..").TextEntry<"○ SCAN">;
            } & import("../types").TextGroup;
            readonly scanStrip: {
                readonly stop: import("..").TextEntry<"stop">;
                readonly passive: import("..").TextEntry<"passive sweep · tap to scan">;
                readonly outOfRange: import("..").TextEntry<"⚠ OUT OF SENSOR RANGE — close to {range}u ({dist}u now)">;
                readonly jumpSpool: import("..").TextEntry<"⚠ jump spool detected — escape drive at {pct}%">;
            } & import("../types").TextGroup;
            readonly ledger: {
                readonly label: "ledger";
                readonly title: import("..").TextEntry<"diplomatic ledger — moved by how you answer hails">;
                readonly factionTitle: import("..").TextEntry<"{faction}: {value}">;
                readonly faction: {
                    readonly corsairs: "CORSAIRS";
                    readonly syndicate: "SYNDICATE";
                    readonly guild: "GUILD";
                    readonly velshaar: "VEL'SHAAR";
                } & import("../types").TextGroup;
                readonly stance: {
                    readonly hostile: "hostile";
                    readonly wary: "wary";
                    readonly neutral: "neutral";
                    readonly respected: "respected";
                    readonly feared: "feared";
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly hybrid: {
            readonly helmTac: {
                readonly seconds: import("..").TextEntry<"{sec}s">;
                readonly title: import("..").TextEntry<"PILOT-GUNNER">;
                readonly detent: {
                    readonly stop: import("..").TextEntry<"STOP">;
                    readonly third: import("..").TextEntry<"1/3">;
                    readonly twoThirds: import("..").TextEntry<"2/3">;
                    readonly full: import("..").TextEntry<"FULL">;
                } & import("../types").TextGroup;
                readonly order: {
                    readonly allStop: import("..").TextEntry<"ALL STOP">;
                    readonly ahead13: import("..").TextEntry<"AHEAD 1/3">;
                    readonly ahead23: import("..").TextEntry<"AHEAD 2/3">;
                    readonly aheadFull: import("..").TextEntry<"AHEAD FULL">;
                } & import("../types").TextGroup;
                readonly chip: {
                    readonly spd: import("..").TextEntry<"spd">;
                    readonly hdg: import("..").TextEntry<"hdg">;
                    readonly ord: import("..").TextEntry<"ord">;
                    readonly mine: import("..").TextEntry<"⚠ mine">;
                    readonly haz: import("..").TextEntry<"haz">;
                    readonly hull: import("..").TextEntry<"hull">;
                } & import("../types").TextGroup;
                readonly view: {
                    readonly map: import("..").TextEntry<"map">;
                    readonly parascope: import("..").TextEntry<"parascope">;
                    readonly screen: import("..").TextEntry<"⧉ screen">;
                } & import("../types").TextGroup;
                readonly lock: {
                    readonly rocketsArmed: import("..").TextEntry<"ROCKETS ARMED — tap the map to fire">;
                    readonly brgRng: import("..").TextEntry<"BRG {brg}° · RNG {rng}u">;
                    readonly closing: import("..").TextEntry<"CLS {sign}{rate}u/s">;
                    readonly none: import("..").TextEntry<"○ NO LOCK — tap a contact">;
                    readonly radiation: import("..").TextEntry<"☢ high radiation — hull ablating">;
                } & import("../types").TextGroup;
                readonly evasive: {
                    readonly on: import("..").TextEntry<"⤨ EVASIVE ON">;
                    readonly off: import("..").TextEntry<"Evasive">;
                    readonly hint: import("..").TextEntry<"harder to hit · louder">;
                } & import("../types").TextGroup;
                readonly jump: {
                    readonly engage: import("..").TextEntry<"⭍ ENGAGE JUMP">;
                    readonly label: import("..").TextEntry<"Jump drive">;
                    readonly spooled: import("..").TextEntry<"spooled — punch it">;
                    readonly locked: import("..").TextEntry<"drive locked out">;
                    readonly opsSpools: import("..").TextEntry<"ops spools the charge">;
                } & import("../types").TextGroup;
                readonly flare: {
                    readonly label: import("..").TextEntry<"✺ flare">;
                    readonly pointDefense: import("..").TextEntry<"your point defense">;
                    readonly expended: import("..").TextEntry<"PD expended">;
                } & import("../types").TextGroup;
                readonly ecm: {
                    readonly on: import("..").TextEntry<"≋ ECM ON">;
                    readonly off: import("..").TextEntry<"ECM">;
                    readonly drawsPower: import("..").TextEntry<"draws power · loud">;
                    readonly scrambles: import("..").TextEntry<"scrambles homing">;
                } & import("../types").TextGroup;
                readonly rail: {
                    readonly label: import("..").TextEntry<"⌁ rail">;
                    readonly noSlugs: import("..").TextEntry<"no slugs">;
                    readonly armedView: import("..").TextEntry<"ARMED — helm fires from the view">;
                    readonly armedTap: import("..").TextEntry<"◉ ARMED — tap to fire">;
                    readonly cycle: import("..").TextEntry<"CYC {sec}s">;
                    readonly pressToArm: import("..").TextEntry<"press to arm">;
                    readonly pressToArmSteer: import("..").TextEntry<"press to arm · steer to aim">;
                } & import("../types").TextGroup;
                readonly chart: {
                    readonly label: import("..").TextEntry<"⌖ chart">;
                    readonly plot: import("..").TextEntry<"plot course">;
                    readonly locked: import("..").TextEntry<"LOCKED">;
                } & import("../types").TextGroup;
                readonly throttle: {
                    readonly label: import("..").TextEntry<"throttle">;
                    readonly engines: import("..").TextEntry<"engines">;
                    readonly offline: import("..").TextEntry<"OFFLN">;
                    readonly idle: import("..").TextEntry<"idle">;
                    readonly starved: import("..").TextEntry<"⚠ power-starved — thrust degraded">;
                } & import("../types").TextGroup;
                readonly dial: {
                    readonly ord: import("..").TextEntry<"ord">;
                    readonly bow: import("..").TextEntry<"· bow">;
                } & import("../types").TextGroup;
                readonly beam: {
                    readonly title: import("..").TextEntry<"beam banks">;
                    readonly chargeHeat: import("..").TextEntry<"charge · heat">;
                    readonly range: import("..").TextEntry<"range {n}u">;
                    readonly heat: import("..").TextEntry<"heat {n}">;
                    readonly delegatedTitle: import("..").TextEntry<"delegated to a Cannoneer">;
                    readonly cannoneer: import("..").TextEntry<"cannoneer">;
                    readonly hot: import("..").TextEntry<"HOT">;
                    readonly far: import("..").TextEntry<"FAR">;
                    readonly fire: import("..").TextEntry<"FIRE">;
                    readonly manned: import("..").TextEntry<"⇢ manned by a Cannoneer">;
                    readonly noLock: import("..").TextEntry<"no lock — tap a contact on the map">;
                    readonly outOfRange: import("..").TextEntry<"target out of beam range ({dist}u) — close to {range}u">;
                } & import("../types").TextGroup;
                readonly torpedo: {
                    readonly title: import("..").TextEntry<"torpedo room">;
                    readonly magazine: import("..").TextEntry<"magazine">;
                    readonly torpedoes: import("..").TextEntry<"torpedoes {n}">;
                    readonly noisemakers: import("..").TextEntry<"noisemakers {n}">;
                    readonly solutionTitle: import("..").TextEntry<"◈ FIRING SOLUTION">;
                    readonly solutionReadout: import("..").TextEntry<"— brg {brg}° · rng {rng}">;
                    readonly tapToLoad: import("..").TextEntry<"· tap to load">;
                    readonly bearing: import("..").TextEntry<"bearing">;
                    readonly runTo: import("..").TextEntry<"est. run to {who}: ~{sec}s">;
                    readonly mark: import("..").TextEntry<"mark">;
                    readonly fishSpeed: import("..").TextEntry<"fish speed {n}u/s">;
                    readonly noRockets: import("..").TextEntry<"NO ROCKETS">;
                    readonly mapToArm: import("..").TextEntry<"MAP TO ARM">;
                    readonly armedDisarm: import("..").TextEntry<"◉ ARMED ×{n} — DISARM">;
                    readonly armRockets: import("..").TextEntry<"ARM ROCKETS ×{n}">;
                    readonly looseTracking: import("..").TextEntry<"loose-tracking">;
                    readonly tapMapToFire: import("..").TextEntry<"tap map to fire">;
                    readonly armDelay: import("..").TextEntry<"arm delay">;
                    readonly arms: import("..").TextEntry<"arms ~{n}u out">;
                    readonly unsafe: import("..").TextEntry<"⚠ may arm near own ship (no IFF)">;
                    readonly noise: import("..").TextEntry<"noise">;
                    readonly torp: import("..").TextEntry<"torpedo">;
                    readonly fire: import("..").TextEntry<"FIRE">;
                    readonly loadTorp: import("..").TextEntry<"load torp">;
                    readonly loadNoise: import("..").TextEntry<"load noise">;
                } & import("../types").TextGroup;
                readonly ordnance: {
                    readonly title: import("..").TextEntry<"ordnance">;
                    readonly torpedoes: import("..").TextEntry<"torpedoes">;
                    readonly noisemakers: import("..").TextEntry<"noisemakers">;
                    readonly missiles: import("..").TextEntry<"missiles">;
                    readonly rockets: import("..").TextEntry<"rockets">;
                    readonly missileRack: import("..").TextEntry<"missile rack">;
                    readonly homing: import("..").TextEntry<"homing · spam to volley">;
                    readonly noMissiles: import("..").TextEntry<"NO MISSILES">;
                    readonly noLock: import("..").TextEntry<"NO LOCK">;
                    readonly fireMissile: import("..").TextEntry<"FIRE MISSILE ▸ {designator}">;
                    readonly expended: import("..").TextEntry<"missile rack expended">;
                    readonly fliesToLock: import("..").TextEntry<"missiles fly to the lock — tap a map contact">;
                } & import("../types").TextGroup;
                readonly target: {
                    readonly title: import("..").TextEntry<"target data">;
                    readonly scan: import("..").TextEntry<"scan {pct}%">;
                    readonly shield: import("..").TextEntry<"shield">;
                    readonly hull: import("..").TextEntry<"hull">;
                    readonly subTarget: import("..").TextEntry<"sub-target">;
                    readonly shieldUp: import("..").TextEntry<"shield up — drop it first">;
                    readonly aim: import("..").TextEntry<"aim ▸">;
                    readonly aimHull: import("..").TextEntry<"HULL">;
                    readonly aimHullDestroyed: import("..").TextEntry<"HULL — {designator} destroyed">;
                    readonly points: import("..").TextEntry<{
                        readonly one: "{count} point located";
                        readonly other: "{count} points located";
                    }>;
                    readonly noPoints: import("..").TextEntry<"no target points located. Science's scan reveals them.">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly sci: {
                readonly sweep: {
                    readonly title: import("..").TextEntry<"sensor sweep">;
                    readonly titlePlot: import("..").TextEntry<"sensor sweep · plot">;
                    readonly brg: import("..").TextEntry<"BRG">;
                    readonly rng: import("..").TextEntry<"RNG">;
                    readonly dly: import("..").TextEntry<"DLY">;
                    readonly solutionLive: import("..").TextEntry<"● SOLUTION LIVE — drag to aim">;
                    readonly scanLine: import("..").TextEntry<"▸ SCAN {designator} · {pct}%">;
                    readonly noPower: import("..").TextEntry<"⚠ NO POWER TO SENSORS">;
                    readonly outOfRange: import("..").TextEntry<"⚠ OUT OF RANGE">;
                    readonly passive: import("..").TextEntry<"○ PASSIVE SWEEP — tap a return to scan">;
                    readonly mode: import("..").TextEntry<"mode">;
                    readonly modePlot: import("..").TextEntry<"◉ PLOT">;
                    readonly modeScan: import("..").TextEntry<"○ SCAN">;
                } & import("../types").TextGroup;
                readonly active: {
                    readonly title: import("..").TextEntry<"active scan">;
                    readonly derelict: import("..").TextEntry<"Scanning {designator} — derelict hulk">;
                    readonly classified: import("..").TextEntry<"Scanning {designator} — {shipClass}">;
                    readonly anomaly: import("..").TextEntry<"Scanning {designator} — {what}">;
                    readonly unknown: import("..").TextEntry<"Scanning {designator} (unknown)">;
                    readonly unresolved: import("..").TextEntry<"unresolved return">;
                    readonly stop: import("..").TextEntry<"stop">;
                    readonly sensorsDead: import("..").TextEntry<"⚠ NO POWER TO SENSORS — feed the dish from the power board">;
                    readonly outOfSensorRange: import("..").TextEntry<"⚠ OUT OF SENSOR RANGE — close to {range}u ({now}u now)">;
                    readonly derelictSlow: import("..").TextEntry<"deep scan is slow; salvage & torpedoes recovered at 100%">;
                    readonly identified: import("..").TextEntry<"◇ identified: {shipClass}">;
                    readonly jumpSpool: import("..").TextEntry<"⚠ jump spool detected — escape drive at {pct}%">;
                    readonly targetPoints: import("..").TextEntry<"⚑ target points — call these to fire control">;
                    readonly keepScanning: import("..").TextEntry<"Keep scanning to locate target points…">;
                    readonly idleHelp: import("..").TextEntry<"Tap a sweep return to scan. Enemies reveal target points; derelicts yield salvage; mines get marked for the pilot.">;
                } & import("../types").TextGroup;
                readonly scope: {
                    readonly probePilot: import("..").TextEntry<"probe pilot">;
                    readonly sensorScan: import("..").TextEntry<"sensor scan">;
                } & import("../types").TextGroup;
                readonly derelict: {
                    readonly title: import("..").TextEntry<"◆ DERELICT {designator}">;
                    readonly units: import("..").TextEntry<"{n} units">;
                    readonly stripped: import("..").TextEntry<"✦ stripped — salvage recovered">;
                    readonly salvageOnFull: import("..").TextEntry<"salvage on full scan (slow deep scan)">;
                    readonly scanning: import("..").TextEntry<"scanning…">;
                    readonly deepScan: import("..").TextEntry<"deep scan">;
                } & import("../types").TextGroup;
                readonly hostile: {
                    readonly title: import("..").TextEntry<"hostiles">;
                    readonly classified: import("..").TextEntry<"{designator} · {shipClass}">;
                    readonly unknown: import("..").TextEntry<"{designator} · Unknown hostile">;
                    readonly distScan: import("..").TextEntry<"{dist} units · scan {pct}%">;
                    readonly scanning: import("..").TextEntry<"scanning…">;
                    readonly scan: import("..").TextEntry<"scan">;
                } & import("../types").TextGroup;
                readonly mine: {
                    readonly title: import("..").TextEntry<"minefield · {n} visible">;
                    readonly marked: import("..").TextEntry<"⚠ {designator} · {dist}u">;
                    readonly faint: import("..").TextEntry<"· faint contact · {dist}u">;
                    readonly markedTag: import("..").TextEntry<"marked">;
                    readonly marking: import("..").TextEntry<"marking…">;
                    readonly scanToMark: import("..").TextEntry<"scan to mark">;
                } & import("../types").TextGroup;
                readonly friendly: import("..").TextEntry<"○ {designator} · Freighter">;
                readonly seconds: import("..").TextEntry<"{sec}s">;
                readonly distU: import("..").TextEntry<"{n}u">;
            } & import("../types").TextGroup;
            readonly comms: {
                readonly autoJam: {
                    readonly idle: import("..").TextEntry<"auto-jammer module — armed · no hostile uplink">;
                    readonly active: import("..").TextEntry<"AUTO-JAMMER — module active">;
                    readonly outOfRange: import("..").TextEntry<"out of range — feed the sensors">;
                    readonly block: import("..").TextEntry<"{pct}% uplink block">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly gunnery: {
            readonly gunner: {
                readonly bank: {
                    readonly lettered: import("..").TextEntry<"Phaser {letter}">;
                    readonly none: import("..").TextEntry<"Phaser">;
                } & import("../types").TextGroup;
                readonly hits: import("..").TextEntry<"hits">;
                readonly lockedTarget: import("..").TextEntry<"locked target">;
                readonly phaserBank: import("..").TextEntry<"phaser bank">;
                readonly charge: import("..").TextEntry<"charge">;
                readonly heat: import("..").TextEntry<"heat">;
                readonly waitingForLock: import("..").TextEntry<"○ waiting for Tactical to lock a target">;
                readonly inRange: import("..").TextEntry<"{dist}u · in range">;
                readonly tooFarBeam: import("..").TextEntry<"{dist}u · too far (beam {beam}u)">;
                readonly status: {
                    readonly noBank: import("..").TextEntry<"○ no bank">;
                    readonly offline: import("..").TextEntry<"○ offline">;
                    readonly overheated: import("..").TextEntry<"○ overheated">;
                    readonly ready: import("..").TextEntry<"ready">;
                    readonly charging: import("..").TextEntry<"◌ charging">;
                } & import("../types").TextGroup;
                readonly sub: {
                    readonly noBank: import("..").TextEntry<"no phaser bank — waiting for a slot">;
                    readonly weaponsOffline: import("..").TextEntry<"weapons offline — ask Engineering">;
                    readonly overheated: import("..").TextEntry<"overheated — venting">;
                    readonly charging: import("..").TextEntry<"charging…">;
                    readonly noTarget: import("..").TextEntry<"waiting for Tactical to lock a target">;
                    readonly target: import("..").TextEntry<"→ {designator}">;
                    readonly tooFar: import("..").TextEntry<"too far — {dist}u / {beam}u">;
                } & import("../types").TextGroup;
                readonly feedback: {
                    readonly hit: import("..").TextEntry<"✦ HIT!">;
                    readonly streak: import("..").TextEntry<"HITS ×{streak}">;
                } & import("../types").TextGroup;
                readonly fire: import("..").TextEntry<"FIRE">;
            } & import("../types").TextGroup;
            readonly cupola: {
                readonly weapon: {
                    readonly laser: import("..").TextEntry<"LASER">;
                    readonly gatling: import("..").TextEntry<"GATLING">;
                    readonly rocket: import("..").TextEntry<"ROCKET">;
                } & import("../types").TextGroup;
                readonly gyro: {
                    readonly noSignal: import("..").TextEntry<"NO GYRO SIGNAL">;
                    readonly denied: import("..").TextEntry<"GYRO DENIED">;
                } & import("../types").TextGroup;
                readonly banner: {
                    readonly link: import("..").TextEntry<"SHIPNET LINK // SB-OS 2.4">;
                    readonly title: import("..").TextEntry<"CUPOLA GUNNER">;
                    readonly phoneTitle: import("..").TextEntry<"CUPOLA">;
                    readonly freeLook: import("..").TextEntry<"TURRET FREE-LOOK · VIEW">;
                } & import("../types").TextGroup;
                readonly chip: {
                    readonly lock: import("..").TextEntry<"◉ LOCK">;
                    readonly range: import("..").TextEntry<"{range}u">;
                    readonly closing: import("..").TextEntry<"closing {rate}u/s">;
                    readonly opening: import("..").TextEntry<"opening {rate}u/s">;
                    readonly holding: import("..").TextEntry<"holding">;
                    readonly tracking: import("..").TextEntry<"◌ tracking — no lock">;
                    readonly noLock: import("..").TextEntry<"◌ no lock">;
                    readonly round: import("..").TextEntry<"ROUND">;
                } & import("../types").TextGroup;
                readonly hint: {
                    readonly desktop: import("..").TextEntry<"drag to look · hold edges to spin · arm a weapon to fire">;
                    readonly phone: import("..").TextEntry<"drag to look · flick to spin">;
                } & import("../types").TextGroup;
                readonly btn: {
                    readonly recenter: import("..").TextEntry<"⌖ recenter">;
                    readonly gyro: import("..").TextEntry<"⌖ gyro">;
                    readonly screen: import("..").TextEntry<"⧉ screen">;
                    readonly fire: import("..").TextEntry<"FIRE">;
                } & import("../types").TextGroup;
                readonly aria: {
                    readonly recenter: import("..").TextEntry<"recenter">;
                    readonly gyroAim: import("..").TextEntry<"gyro aim">;
                    readonly promote: import("..").TextEntry<"promote to screen">;
                } & import("../types").TextGroup;
                readonly hud: {
                    readonly heat: import("..").TextEntry<"heat">;
                    readonly overheat: import("..").TextEntry<"overheat">;
                    readonly gat: import("..").TextEntry<"gat">;
                    readonly rkt: import("..").TextEntry<"rkt">;
                } & import("../types").TextGroup;
                readonly status: {
                    readonly overheat: import("..").TextEntry<"OVERHEAT">;
                    readonly heat: import("..").TextEntry<"heat {heat}">;
                    readonly noAmmo: import("..").TextEntry<"NO AMMO">;
                    readonly armed: import("..").TextEntry<"armed · {status}">;
                } & import("../types").TextGroup;
                readonly gate: {
                    readonly noLink: import("..").TextEntry<"no link">;
                    readonly disarmed: import("..").TextEntry<"DISARMED — arm a weapon">;
                    readonly weaponsDark: import("..").TextEntry<"WEAPONS DARK — reroute power">;
                    readonly beyond: import("..").TextEntry<"mark {dist}u — reach {range}u">;
                    readonly overheat: import("..").TextEntry<"OVERHEAT — cools at {resumeAt}">;
                    readonly holdBeam: import("..").TextEntry<"hold to fire — beam">;
                    readonly noAmmoGatling: import("..").TextEntry<"NO AMMO — gatling dry">;
                    readonly cycling: import("..").TextEntry<"CYCLING {sec}s">;
                    readonly burstPd: import("..").TextEntry<"burst — point defense">;
                    readonly holdBurst: import("..").TextEntry<"hold to fire — burst">;
                    readonly noAmmoRocket: import("..").TextEntry<"NO AMMO — pod empty">;
                    readonly unguided: import("..").TextEntry<"unguided — lead the mark">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly engSciComms: {
                readonly station: import("..").TextEntry<"Operations">;
                readonly hull: import("..").TextEntry<"hull">;
                readonly outage: {
                    readonly banner: import("..").TextEntry<"{systems} FORCED OFFLINE">;
                    readonly systemFallback: import("..").TextEntry<"system">;
                    readonly reroute: import("..").TextEntry<"⚡ Reroute power">;
                } & import("../types").TextGroup;
                readonly power: {
                    readonly title: import("..").TextEntry<"power distribution · ops modules">;
                    readonly salvageTitle: import("..").TextEntry<"salvage — auto-repairs spend it">;
                    readonly salvageUnit: import("..").TextEntry<"· salvage">;
                    readonly noSalvage: import("..").TextEntry<"⚠ no salvage — auto-repair stalled">;
                    readonly output: import("..").TextEntry<"OUTPUT {output}u/s">;
                    readonly over: import("..").TextEntry<"OVER {amount}">;
                    readonly free: import("..").TextEntry<"FREE {amount}">;
                    readonly coach: import("..").TextEntry<"Draw = {formula}. Drag a bar to set priority. {cut} cuts to 0 and remembers. Repairs are automatic ({pct}% rate); they spend salvage.">;
                    readonly coachFormula: import("..").TextEntry<"demand × priority">;
                    readonly benchCoach: import("..").TextEntry<"draw = demand × priority · ✂ cuts & remembers">;
                } & import("../types").TextGroup;
                readonly module: {
                    readonly autoRepair: import("..").TextEntry<"auto-repair {pct}%">;
                    readonly runsItself: import("..").TextEntry<"runs itself">;
                    readonly autoVentVenting: import("..").TextEntry<"auto-vent — venting {sec}s">;
                    readonly autoVentArmed: import("..").TextEntry<"auto-vent armed">;
                    readonly outputHalved: import("..").TextEntry<"output halved">;
                    readonly tripsAt: import("..").TextEntry<"trips at core {heat}">;
                    readonly core: import("..").TextEntry<"core {pct}%">;
                    readonly temp: import("..").TextEntry<"temp">;
                } & import("../types").TextGroup;
                readonly reactor: {
                    readonly coreSource: import("..").TextEntry<"core source — feeds bus">;
                    readonly bus: import("..").TextEntry<"bus">;
                    readonly lockedOut: import("..").TextEntry<"⚠ LOCKED OUT">;
                    readonly offline: import("..").TextEntry<"OFFLINE">;
                    readonly output: import("..").TextEntry<"{output}u">;
                } & import("../types").TextGroup;
                readonly jump: {
                    readonly title: import("..").TextEntry<"jump drive · deflector">;
                    readonly spooling: import("..").TextEntry<"◉ Spooling">;
                    readonly spool: import("..").TextEntry<"Spool jump">;
                    readonly charge: import("..").TextEntry<"jump charge">;
                    readonly charged: import("..").TextEntry<"✦ charged — the pilot can engage">;
                    readonly starved: import("..").TextEntry<"⚠ not enough free power (needs {need}u) — deallocate a system">;
                    readonly throttled: import("..").TextEntry<"drive throttled to {pct}% — spool is slower">;
                    readonly draws: import("..").TextEntry<"draws {rate} u/s while spooling">;
                    readonly off: import("..").TextEntry<"off — no power drawn">;
                } & import("../types").TextGroup;
                readonly shield: {
                    readonly title: import("..").TextEntry<"Deflector — all arcs">;
                    readonly chg: import("..").TextEntry<"chg">;
                    readonly chargeTitle: import("..").TextEntry<"charge {cur}/{max}">;
                    readonly allocLabel: import("..").TextEntry<"shield allocation — all arcs">;
                    readonly caption: import("..").TextEntry<"one dial, four arcs; power spreads equally · allocation drives SHIELDS demand">;
                } & import("../types").TextGroup;
                readonly ping: {
                    readonly title: import("..").TextEntry<"active ping — reveals the interior AND attracts it (LOUD)">;
                    readonly noCarrier: import("..").TextEntry<"◌ no carrier">;
                    readonly ready: import("..").TextEntry<"◉ ping">;
                    readonly cooldown: import("..").TextEntry<"◌ ping {sec}s">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly sciComms: {
                readonly station: import("..").TextEntry<"Science & Comms">;
                readonly hull: import("..").TextEntry<"hull">;
                readonly strip: {
                    readonly incomingHail: import("..").TextEntry<"incoming hail — answer">;
                    readonly channelOpen: import("..").TextEntry<"channel open — hail">;
                    readonly probeActive: import("..").TextEntry<"probe active — stick">;
                    readonly sweepLive: import("..").TextEntry<"sweep live — radar">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly comms: {
            readonly common: {
                readonly ch: import("..").TextEntry<"ch">;
                readonly mhz: import("..").TextEntry<"MHz">;
                readonly seconds: import("..").TextEntry<"{n}s">;
                readonly unknown: import("..").TextEntry<"UNKNOWN">;
                readonly unknownSignal: import("..").TextEntry<"UNKNOWN SIGNAL">;
                readonly unresolved: import("..").TextEntry<"UNRESOLVED">;
            } & import("../types").TextGroup;
            readonly console: {
                readonly title: import("..").TextEntry<"Comms">;
                readonly alertCaption: import("..").TextEntry<"alert">;
                readonly alertLamp: {
                    readonly green: "Green";
                    readonly yellow: "Yellow";
                    readonly red: "Red";
                } & import("../types").TextGroup;
                readonly alertName: {
                    readonly green: "GREEN";
                    readonly yellow: "YELLOW";
                    readonly red: "RED";
                } & import("../types").TextGroup;
                readonly alertLabel: import("..").TextEntry<"condition">;
                readonly jump: {
                    readonly incomingHail: "incoming hail — answer";
                    readonly channelOpen: "channel open — hail";
                    readonly hostileUplink: "hostile uplink — counter-signal";
                    readonly probeLive: "probe sweep live — radar";
                } & import("../types").TextGroup;
                readonly signals: {
                    readonly title: import("..").TextEntry<"enemy signals">;
                    readonly none: import("..").TextEntry<"no hostile emissions on the bands">;
                    readonly hostile: import("..").TextEntry<"hostile">;
                    readonly reinforcement: import("..").TextEntry<"◍ reinforcement uplink">;
                    readonly spooling: import("..").TextEntry<"⚠ escape jump spooling">;
                } & import("../types").TextGroup;
                readonly status: {
                    readonly title: import("..").TextEntry<"ship status">;
                    readonly relay: import("..").TextEntry<"▸ relay to the captain">;
                    readonly hull: import("..").TextEntry<"hull">;
                    readonly pwr: import("..").TextEntry<"pwr">;
                    readonly core: import("..").TextEntry<"core">;
                    readonly on: import("..").TextEntry<"ON">;
                    readonly off: import("..").TextEntry<"OFF">;
                    readonly locked: import("..").TextEntry<"LOCKED">;
                    readonly shdAvg: import("..").TextEntry<"shd avg">;
                    readonly alert: import("..").TextEntry<"alert">;
                    readonly threats: import("..").TextEntry<"threats">;
                    readonly tag: {
                        readonly reactor: "RCT";
                        readonly engines: "ENG";
                        readonly jumpDrive: "JMP";
                        readonly lifeSupport: "LIF";
                        readonly sensors: "SNS";
                        readonly weapons: "WPN";
                        readonly shields: "SHD";
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
                readonly router: {
                    readonly onScreen: import("..").TextEntry<"on screen now:">;
                    readonly setBy: import("..").TextEntry<"· set by {who}">;
                    readonly channelNumber: import("..").TextEntry<"CH{n}">;
                    readonly live: import("..").TextEntry<"live">;
                    readonly channel: {
                        readonly map: {
                            readonly label: import("..").TextEntry<"Tactical map">;
                            readonly hint: import("..").TextEntry<"the default stage">;
                        } & import("../types").TextGroup;
                        readonly science: {
                            readonly label: import("..").TextEntry<"Scan card">;
                            readonly hint: import("..").TextEntry<"the current scan target, big">;
                        } & import("../types").TextGroup;
                        readonly comms: {
                            readonly label: import("..").TextEntry<"Comms">;
                            readonly hint: import("..").TextEntry<"the comms channel — hails + ship's log">;
                        } & import("../types").TextGroup;
                        readonly parascope: {
                            readonly label: import("..").TextEntry<"Parascope">;
                            readonly hint: import("..").TextEntry<"Helm's 3D flight view">;
                        } & import("../types").TextGroup;
                        readonly cupola: {
                            readonly label: import("..").TextEntry<"Cupola">;
                            readonly hint: import("..").TextEntry<"the cupola gunner's turret view">;
                        } & import("../types").TextGroup;
                    } & import("../types").TextGroup;
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
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly hail: {
                readonly bank: import("..").TextEntry<"channel bank: the Captain decides, you speak">;
                readonly empty: import("..").TextEntry<"NOTHING ON THE COMMS BANDS.">;
                readonly emptyHint: import("..").TextEntry<"Carriers and passive signals will appear here.">;
                readonly noCarriers: import("..").TextEntry<"no carriers — only the signals below">;
                readonly distance: import("..").TextEntry<"{dist}u">;
                readonly distanceSurrendered: import("..").TextEntry<"{dist}u · surrendered">;
                readonly hailButton: import("..").TextEntry<"hail">;
                readonly tuneButton: import("..").TextEntry<"tune">;
                readonly passiveHeading: import("..").TextEntry<"passive signals — transmitting, not talking">;
                readonly passiveRow: import("..").TextEntry<"◌ {label} — {designator}">;
                readonly enemyKnown: import("..").TextEntry<"▲ {designator} · {shipClass}">;
                readonly enemyUnknown: import("..").TextEntry<"▲ {designator} · Unknown hostile">;
                readonly friendly: import("..").TextEntry<"○ {designator} · {shipClass}">;
                readonly friendlyFallback: import("..").TextEntry<"Freighter">;
                readonly derelict: import("..").TextEntry<"◆ {designator} · Derelict">;
                readonly incoming: import("..").TextEntry<"incoming transmission — respond to answer">;
                readonly carrierLock: import("..").TextEntry<"ch {mhz} MHz · carrier lock">;
                readonly unidentified: import("..").TextEntry<"unidentified">;
                readonly channelLine: import("..").TextEntry<"ch {mhz} MHz · {faction}">;
                readonly tone: {
                    readonly friendly: "FRIENDLY";
                    readonly neutral: "NEUTRAL";
                    readonly hostile: "HOSTILE";
                } & import("../types").TextGroup;
                readonly acquiring: import("..").TextEntry<"acquiring visual…">;
                readonly audioOnly: import("..").TextEntry<"audio only — no visual">;
                readonly relay: import("..").TextEntry<"⇢ relay to the captain. This readout is comms only.">;
                readonly receiving: import("..").TextEntry<"receiving…">;
                readonly doctrine: import("..").TextEntry<"the Captain decides out loud; you press">;
                readonly end: import("..").TextEntry<"✕ end transmission">;
                readonly responseWindow: import("..").TextEntry<"response window">;
                readonly silence: import("..").TextEntry<"silence is an answer">;
                readonly windowLine: import("..").TextEntry<"response window · silence is an answer">;
            } & import("../types").TextGroup;
            readonly monitor: {
                readonly header: import("..").TextEntry<"ch {mhz} MHz · passive monitor">;
                readonly source: import("..").TextEntry<"source {designator}">;
                readonly unresolved: import("..").TextEntry<"unresolved">;
                readonly rxOnly: import("..").TextEntry<"rx only">;
                readonly onAir: import("..").TextEntry<"on air: audio plays on the main screen (comms)">;
                readonly silent: import("..").TextEntry<"nothing to say back; it isn't talking to you">;
                readonly drop: import("..").TextEntry<"✕ drop channel">;
            } & import("../types").TextGroup;
            readonly strip: {
                readonly title: import("..").TextEntry<"signal spectrum">;
                readonly axisMhz: import("..").TextEntry<"{hi} MHz">;
                readonly monitoring: import("..").TextEntry<{
                    readonly one: "MONITORING · {count} CARRIER";
                    readonly other: "MONITORING · {count} CARRIERS";
                }>;
                readonly incoming: import("..").TextEntry<"◍ INCOMING CARRIER">;
                readonly lock: import("..").TextEntry<"CARRIER LOCK · {speaker}">;
                readonly destabilizing: import("..").TextEntry<"⚠ CARRIER DESTABILIZING">;
                readonly stable: import("..").TextEntry<"CARRIER STABLE">;
            } & import("../types").TextGroup;
            readonly jam: {
                readonly idle: import("..").TextEntry<"counter-signal · no hostile uplink">;
                readonly title: import("..").TextEntry<"counter-signal // freq-hop chase">;
                readonly strength: import("..").TextEntry<"JAM STRENGTH J">;
                readonly blocked: import("..").TextEntry<"BLOCKED {pct}%">;
                readonly uplink: import("..").TextEntry<"ENEMY UPLINK">;
                readonly chance: import("..").TextEntry<"REINF CHANCE {pct}%">;
                readonly callEnds: import("..").TextEntry<"CALL ENDS">;
                readonly callTimer: import("..").TextEntry<"T-{n}s">;
                readonly target: import("..").TextEntry<"TGT {designator} · UPLINK">;
                readonly outOfRange: import("..").TextEntry<"⚠ SIGNAL OUT OF RANGE">;
                readonly locked: import("..").TextEntry<"◉ LOCK">;
                readonly seeking: import("..").TextEntry<"◌ SEEKING">;
                readonly outOfRangeHint: import("..").TextEntry<"caller beyond jammer reach; feed the SENSORS to extend it">;
                readonly dragHint: import("..").TextEntry<"DRAG to steer the jammer onto the bright enemy carrier · hold the LOCK">;
            } & import("../types").TextGroup;
            readonly intercepts: {
                readonly title: import("..").TextEntry<"◍ sigint — ears on the void">;
                readonly none: import("..").TextEntry<"monitoring — no intercepts">;
                readonly unknownSource: import("..").TextEntry<"unknown source">;
                readonly footer: import("..").TextEntry<"relay what matters; the bridge can't hear this">;
            } & import("../types").TextGroup;
            readonly radar: {
                readonly titleCompact: import("..").TextEntry<"probe sweep">;
                readonly title: import("..").TextEntry<"probe radar">;
                readonly noCarrier: import("..").TextEntry<"◌ no carrier">;
                readonly ping: import("..").TextEntry<"◉ ping">;
                readonly pingCooldown: import("..").TextEntry<"◌ ping · {n}s">;
                readonly screen: import("..").TextEntry<"⧉ screen">;
                readonly warning: import("..").TextEntry<"⚠ an active ping is loud; it will hear it">;
                readonly noReturns: import("..").TextEntry<"▸ no returns; passive sweep only">;
                readonly echoLast: import("..").TextEntry<"◌ last echo">;
                readonly echoFresh: import("..").TextEntry<"◍ echo">;
                readonly echoLine: import("..").TextEntry<"{tag} · brg {brg}° · rng {rng}% · {age}">;
                readonly ageNow: import("..").TextEntry<"now">;
                readonly ageAgo: import("..").TextEntry<"{n}s ago">;
            } & import("../types").TextGroup;
            readonly log: {
                readonly title: import("..").TextEntry<"system log">;
                readonly jumpLatestUp: import("..").TextEntry<"↑ latest">;
                readonly jumpLatestDown: import("..").TextEntry<"↓ latest">;
                readonly jumpTitle: import("..").TextEntry<"Jump to the latest entry">;
                readonly orderNewestFirst: import("..").TextEntry<"↑ new">;
                readonly orderNewestLast: import("..").TextEntry<"↓ new">;
                readonly orderNewestFirstTitle: import("..").TextEntry<"Newest first — tap for newest last">;
                readonly orderNewestLastTitle: import("..").TextEntry<"Newest last — tap for newest first">;
                readonly empty: import("..").TextEntry<"NO ENTRIES.">;
                readonly counter: import("..").TextEntry<"log {n}">;
            } & import("../types").TextGroup;
            readonly ledger: {
                readonly title: import("..").TextEntry<"diplomatic ledger">;
                readonly caption: import("..").TextEntry<"the ship's word, kept by comms">;
                readonly stance: {
                    readonly hostile: "hostile";
                    readonly wary: "wary";
                    readonly neutral: "neutral";
                    readonly respected: "respected";
                    readonly feared: "feared";
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly shell: {
            readonly gameTitle: import("..").TextEntry<"Space Couch Command">;
            readonly pageTitle: import("..").TextEntry<"Space Couch Command — Officer Terminal">;
            readonly app: {
                readonly connecting: import("..").TextEntry<"connecting…">;
                readonly reconnecting: {
                    readonly title: import("..").TextEntry<"RECONNECTING…">;
                    readonly sub: import("..").TextEntry<"restoring your station">;
                } & import("../types").TextGroup;
                readonly failed: import("..").TextEntry<"connection failed">;
                readonly back: import("..").TextEntry<"Back">;
                readonly left: import("..").TextEntry<"disconnected from the bridge">;
                readonly rejoin: import("..").TextEntry<"Rejoin">;
                readonly syncing: import("..").TextEntry<"syncing bridge…">;
            } & import("../types").TextGroup;
            readonly header: {
                readonly link: import("..").TextEntry<"SHIPNET LINK // SB-OS 2.4">;
            } & import("../types").TextGroup;
            readonly run: {
                readonly sector: import("..").TextEntry<"SEC {n}">;
                readonly demo: import("..").TextEntry<"DEMO">;
                readonly jump: import("..").TextEntry<"jmp">;
                readonly hail: import("..").TextEntry<"◍ hail">;
                readonly screen: import("..").TextEntry<"◱ screen">;
                readonly sectorClear: import("..").TextEntry<"✦ sector clear — spool the jump drive">;
            } & import("../types").TextGroup;
            readonly settings: {
                readonly button: import("..").TextEntry<"settings">;
                readonly title: import("..").TextEntry<"settings">;
                readonly options: import("..").TextEntry<"terminal options">;
                readonly close: import("..").TextEntry<"close settings">;
                readonly fullscreen: import("..").TextEntry<"⛶ full screen">;
                readonly enter: import("..").TextEntry<"enter">;
                readonly exit: import("..").TextEntry<"exit">;
                readonly notAvailable: import("..").TextEntry<"n/a">;
                readonly fullscreenHint: import("..").TextEntry<"This browser can't go full screen. Add the terminal to your home screen to get the bridge without browser bars.">;
                readonly stick: import("..").TextEntry<"🕹 probe stick">;
                readonly stickLeft: import("..").TextEntry<"left">;
                readonly stickRight: import("..").TextEntry<"right">;
                readonly stickHint: import("..").TextEntry<"The Probe stick defaults to the left. Right swaps it with the action buttons.">;
                readonly exitMain: import("..").TextEntry<"📺 main screen">;
                readonly exitLeave: import("..").TextEntry<"⏏ leave bridge">;
                readonly exitGo: import("..").TextEntry<"go">;
                readonly exitSure: import("..").TextEntry<"sure?">;
                readonly exitMainHint: import("..").TextEntry<"The main screen comes back. Your Seat on this phone is not released: it is held for you for about two minutes.">;
                readonly exitLeaveHint: import("..").TextEntry<"You leave this bridge and land on the start screen; the host can seat you again.">;
                readonly sound: import("..").TextEntry<"🔊 sound">;
                readonly on: import("..").TextEntry<"on">;
                readonly off: import("..").TextEntry<"off">;
            } & import("../types").TextGroup;
            readonly tacMap: {
                readonly anomaly: import("..").TextEntry<"anomaly">;
            } & import("../types").TextGroup;
            readonly roleMeta: {
                readonly gunnerLabel: import("..").TextEntry<"Gunner">;
                readonly helmBlurb: import("..").TextEntry<"Steer, evade & jump">;
                readonly tacticalBlurb: import("..").TextEntry<"Weapons & shields">;
                readonly engineeringBlurb: import("..").TextEntry<"Power & repair">;
                readonly scienceBlurb: import("..").TextEntry<"Scan, plot & exploit">;
                readonly commsBlurb: import("..").TextEntry<"Alert, hail & log">;
                readonly gunnerBlurb: import("..").TextEntry<"Man a turret — big FIRE button">;
                readonly cupolaBlurb: import("..").TextEntry<"the 360° swivel battery — you are the point defense">;
            } & import("../types").TextGroup;
            readonly join: {
                readonly bootLine: import("..").TextEntry<"SB-OS 2.4 // SHIPNET TERMINAL">;
                readonly linkLine: import("..").TextEntry<"LINK ESTABLISHED: AWAITING OFFICER ID">;
                readonly subtitle: import("..").TextEntry<"officer terminal">;
                readonly roomCode: import("..").TextEntry<"Room code">;
                readonly roomCodePlaceholder: import("..").TextEntry<"ABCD">;
                readonly yourName: import("..").TextEntry<"Your name">;
                readonly namePlaceholder: import("..").TextEntry<"Officer">;
                readonly board: import("..").TextEntry<"Board ship">;
                readonly hint: import("..").TextEntry<"Scan the QR on the viewscreen, or type the room code shown on the TV.">;
                readonly hintStreamer: import("..").TextEntry<"Streamer mode hides the code on the TV. Join with the link the host shared.">;
            } & import("../types").TextGroup;
            readonly boot: {
                readonly rows: {
                    readonly header: import("..").TextEntry<"SB-OS 2.4 // {station}">;
                    readonly observerDeck: import("..").TextEntry<"OBSERVER DECK">;
                    readonly powerBus: import("..").TextEntry<"POWER BUS">;
                    readonly ok: import("..").TextEntry<"OK">;
                    readonly crtPhosphor: import("..").TextEntry<"CRT PHOSPHOR">;
                    readonly warm: import("..").TextEntry<"WARM">;
                    readonly shipnetUplink: import("..").TextEntry<"SHIPNET UPLINK">;
                    readonly sync: import("..").TextEntry<"SYNC">;
                    readonly module: import("..").TextEntry<"{duty} MODULE">;
                    readonly online: import("..").TextEntry<"ONLINE">;
                    readonly phaserBank: import("..").TextEntry<"PHASER BANK">;
                    readonly charging: import("..").TextEntry<"CHARGING">;
                    readonly selfTest: import("..").TextEntry<"CONSOLE SELF-TEST">;
                    readonly pass: import("..").TextEntry<"PASS">;
                    readonly stationBinding: import("..").TextEntry<"STATION BINDING">;
                    readonly none: import("..").TextEntry<"NONE">;
                    readonly readOnlyFeed: import("..").TextEntry<"READ-ONLY FEED">;
                    readonly live: import("..").TextEntry<"LIVE">;
                } & import("../types").TextGroup;
                readonly ready: {
                    readonly title: import("..").TextEntry<"◉ CONSOLE READY">;
                    readonly waiting: import("..").TextEntry<"waiting on crew ({ready}/{total})">;
                    readonly standingBy: import("..").TextEntry<"{station} standing by">;
                    readonly mainScreen: import("..").TextEntry<"▸ the main screen can start for everyone">;
                } & import("../types").TextGroup;
                readonly selfTestTitle: import("..").TextEntry<"◉ power-on self-test">;
                readonly hold: import("..").TextEntry<"hold anywhere — report ready">;
                readonly crewReady: import("..").TextEntry<"crew ready {ready}/{total}">;
                readonly crewSeated: import("..").TextEntry<"{crew} · the main screen can start for everyone">;
                readonly spectator: import("..").TextEntry<"spectator feed — no ready check needed">;
                readonly crewSpectator: import("..").TextEntry<"{crew} · the bridge starts when all report">;
            } & import("../types").TextGroup;
            readonly game: {
                readonly unknownDuty: import("..").TextEntry<"Unknown duty. Watch the viewscreen.">;
                readonly jumping: {
                    readonly title: import("..").TextEntry<"JUMPING…">;
                    readonly sub: import("..").TextEntry<"hold on to something">;
                } & import("../types").TextGroup;
                readonly demoComplete: {
                    readonly title: import("..").TextEntry<"DEMO COMPLETE">;
                    readonly sub: import("..").TextEntry<"Four sectors, one bridge, one couch.">;
                } & import("../types").TextGroup;
                readonly shipLost: {
                    readonly title: import("..").TextEntry<"SHIP LOST">;
                    readonly sub: import("..").TextEntry<"The bridge goes dark.">;
                } & import("../types").TextGroup;
                readonly summary: {
                    readonly sectors: import("..").TextEntry<"sectors">;
                    readonly sector: import("..").TextEntry<"sector">;
                    readonly kills: import("..").TextEntry<"kills">;
                    readonly coloniesSaved: import("..").TextEntry<"colonies saved">;
                    readonly banked: import("..").TextEntry<"banked">;
                } & import("../types").TextGroup;
                readonly bankedNote: import("..").TextEntry<"salvage banked to the ship's account: total">;
                readonly wishlist: import("..").TextEntry<"◈ WISHLIST ON STEAM">;
                readonly restart: import("..").TextEntry<"↻ RESTART RUN">;
                readonly returnToLobby: import("..").TextEntry<"⌂ RETURN TO LOBBY">;
                readonly noStation: import("..").TextEntry<"NO STATION">;
                readonly modFiles: import("..").TextEntry<"DOWNLOADING MOD FILES · {percent}%">;
                readonly pickSeat: import("..").TextEntry<"Take an open chair. Manned stations stay locked until the lobby.">;
                readonly manned: import("..").TextEntry<"manned — {name}">;
                readonly reconnectingSeat: import("..").TextEntry<"RECONNECTING ({name}) — tap to take over">;
                readonly vacant: import("..").TextEntry<"vacant — tap to man">;
                readonly rejoinNote: import("..").TextEntry<"Rejoined under your old name? Your chair re-binds automatically on boarding.">;
            } & import("../types").TextGroup;
            readonly lobby: {
                readonly header: import("..").TextEntry<"SHIPNET LINK // BRIDGE CREW">;
                readonly hull: import("..").TextEntry<"Hull">;
                readonly ship: import("..").TextEntry<"SHIP: {name}">;
                readonly crew: import("..").TextEntry<"crew {n}">;
                readonly hullSelect: import("..").TextEntry<"◀ the main screen selects the hull ▶">;
                readonly savedShips: import("..").TextEntry<{
                    readonly one: "{count} saved ship — continue from the viewscreen";
                    readonly other: "{count} saved ships — continue from the viewscreen";
                }>;
                readonly savedShip: import("..").TextEntry<"{name} · sec {sector} · {shipClass}">;
                readonly crewUnrecorded: import("..").TextEntry<"crew unrecorded">;
                readonly codeHidden: import("..").TextEntry<"••••">;
                readonly selectDuty: import("..").TextEntry<"select duty station">;
                readonly optional: import("..").TextEntry<"optional">;
                readonly required: import("..").TextEntry<"required">;
                readonly needsLine: import("..").TextEntry<"⚠ needed to launch: {seats}">;
                readonly switchHint: import("..").TextEntry<"tap an open station to switch">;
                readonly cannoneerNote: import("..").TextEntry<"for young crew · joins a crewed ship">;
                readonly swivel: import("..").TextEntry<"360° swivel turret">;
                readonly reconnecting: import("..").TextEntry<"reconnecting…">;
                readonly open: import("..").TextEntry<"● open">;
                readonly tapToLeave: import("..").TextEntry<"tap to leave">;
                readonly ready: import("..").TextEntry<"Ready ✓">;
                readonly markReady: import("..").TextEntry<"Mark ready">;
                readonly waiting: import("..").TextEntry<"Waiting for the host to launch on the viewscreen.">;
                readonly modded: import("..").TextEntry<"MODDED ROOM · {names}">;
                readonly modFiles: import("..").TextEntry<"LOADING MOD FILES · {percent}%">;
                readonly stats: {
                    readonly hull: import("..").TextEntry<"hull">;
                    readonly power: import("..").TextEntry<"pwr">;
                    readonly speed: import("..").TextEntry<"spd">;
                    readonly beam: import("..").TextEntry<"beam">;
                    readonly gun: import("..").TextEntry<"gun">;
                    readonly tube: import("..").TextEntry<"tube">;
                    readonly torp: import("..").TextEntry<"torp">;
                } & import("../types").TextGroup;
                readonly modules: {
                    readonly mergedFireControl: import("..").TextEntry<"merged fire-control">;
                    readonly flareDefense: import("..").TextEntry<"flare defense">;
                    readonly autoJammer: import("..").TextEntry<"auto-jammer {pct}%">;
                    readonly autoRepair: import("..").TextEntry<"auto-repair {pct}%">;
                    readonly autoVent: import("..").TextEntry<"auto-vent">;
                } & import("../types").TextGroup;
                readonly outfitting: {
                    readonly title: import("..").TextEntry<"outfitting">;
                    readonly hint: import("..").TextEntry<"outfitting is on the viewscreen; the host equips the ship">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly takeover: {
                readonly bridge: import("..").TextEntry<"bridge">;
                readonly bridgeAria: import("..").TextEntry<"Step out to the bridge. The Probe holds still.">;
                readonly state: {
                    readonly landing: import("..").TextEntry<"landing">;
                    readonly live: import("..").TextEntry<"probe live">;
                    readonly liveShort: import("..").TextEntry<"live">;
                    readonly extracting: import("..").TextEntry<"extracting">;
                    readonly lost: import("..").TextEntry<"signal lost">;
                    readonly recovered: import("..").TextEntry<"recovered">;
                } & import("../types").TextGroup;
                readonly swap: {
                    readonly toRadar: import("..").TextEntry<"radar">;
                    readonly toPilot: import("..").TextEntry<"pilot">;
                    readonly toRadarAria: import("..").TextEntry<"Swap to the radar. The stick stays live.">;
                    readonly toPilotAria: import("..").TextEntry<"Swap to the pilot view">;
                } & import("../types").TextGroup;
                readonly stick: {
                    readonly aria: import("..").TextEntry<"Probe stick: drag to fly, release to stop">;
                    readonly hint: import("..").TextEntry<"drag to fly · release stops">;
                } & import("../types").TextGroup;
                readonly standby: import("..").TextEntry<"standby">;
                readonly abort: import("..").TextEntry<"abort">;
                readonly hold: import("..").TextEntry<"hold">;
                readonly abortAria: import("..").TextEntry<"Abort the Probe: press and hold">;
                readonly chip: {
                    readonly hail: import("..").TextEntry<"hail">;
                    readonly outage: import("..").TextEntry<"outage">;
                    readonly jam: import("..").TextEntry<"jam">;
                    readonly sweep: import("..").TextEntry<"sweep">;
                    readonly intercepts: import("..").TextEntry<"sigint">;
                    readonly quiet: import("..").TextEntry<"bridge quiet">;
                } & import("../types").TextGroup;
                readonly back: {
                    readonly live: import("..").TextEntry<"probe live">;
                    readonly liveRadar: import("..").TextEntry<"probe live">;
                    readonly resume: import("..").TextEntry<"return">;
                    readonly recovered: import("..").TextEntry<"probe recovered">;
                    readonly lost: import("..").TextEntry<"probe lost">;
                    readonly ended: import("..").TextEntry<"mission over">;
                    readonly dismiss: import("..").TextEntry<"Dismiss">;
                } & import("../types").TextGroup;
                readonly held: {
                    readonly title: import("..").TextEntry<"probe held">;
                    readonly sub: import("..").TextEntry<"waiting for its pilot">;
                    readonly aria: import("..").TextEntry<"The Probe is held. Return to fly it.">;
                } & import("../types").TextGroup;
                readonly endNote: import("..").TextEntry<"back on the bridge in a moment">;
                readonly launch: {
                    readonly title: import("..").TextEntry<"probe away">;
                    readonly sub: import("..").TextEntry<"descending · signal static">;
                } & import("../types").TextGroup;
                readonly mission: {
                    readonly chip: import("..").TextEntry<"mission mode">;
                    readonly pilot: import("..").TextEntry<"pilot">;
                    readonly radar: import("..").TextEntry<"probe radar">;
                    readonly controls: import("..").TextEntry<"Probe controls">;
                    readonly keys: import("..").TextEntry<"w/s throttle · a/d turn · e interact · q ping">;
                    readonly log: import("..").TextEntry<"system log">;
                } & import("../types").TextGroup;
            } & import("../types").TextGroup;
            readonly phone: {
                readonly tab: {
                    readonly ship: import("..").TextEntry<"ship">;
                    readonly sweep: import("..").TextEntry<"sweep">;
                    readonly scope: import("..").TextEntry<"scope">;
                    readonly contact: import("..").TextEntry<"contact">;
                    readonly boards: import("..").TextEntry<"boards">;
                    readonly fly: import("..").TextEntry<"fly">;
                    readonly guns: import("..").TextEntry<"guns">;
                    readonly torps: import("..").TextEntry<"torps">;
                    readonly scan: import("..").TextEntry<"scan">;
                    readonly fire: import("..").TextEntry<"fire">;
                    readonly target: import("..").TextEntry<"target">;
                    readonly power: import("..").TextEntry<"power">;
                    readonly shields: import("..").TextEntry<"shields">;
                    readonly reactor: import("..").TextEntry<"reactor">;
                    readonly repair: import("..").TextEntry<"repair">;
                    readonly hail: import("..").TextEntry<"hail">;
                    readonly signal: import("..").TextEntry<"signal">;
                    readonly status: import("..").TextEntry<"status">;
                    readonly mod: import("..").TextEntry<"mod">;
                } & import("../types").TextGroup;
                readonly nav: import("..").TextEntry<"Task tabs">;
                readonly seatCode: {
                    readonly ops: import("..").TextEntry<"OPS">;
                    readonly pg: import("..").TextEntry<"PG">;
                    readonly sc: import("..").TextEntry<"S&C">;
                    readonly solo: import("..").TextEntry<"SHM">;
                    readonly helm: import("..").TextEntry<"HLM">;
                    readonly gun: import("..").TextEntry<"GUN">;
                    readonly tac: import("..").TextEntry<"TAC">;
                    readonly eng: import("..").TextEntry<"ENG">;
                    readonly sci: import("..").TextEntry<"SCI">;
                    readonly com: import("..").TextEntry<"COM">;
                } & import("../types").TextGroup;
                readonly alertLevel: {
                    readonly green: import("..").TextEntry<"GRN">;
                    readonly yellow: import("..").TextEntry<"YEL">;
                    readonly red: import("..").TextEntry<"RED">;
                } & import("../types").TextGroup;
                readonly hullChip: import("..").TextEntry<"Hull {pct}%">;
                readonly alert: {
                    readonly closing: import("..").TextEntry<"probe: contact closing">;
                    readonly closingSub: import("..").TextEntry<"tap to fly">;
                    readonly outage: import("..").TextEntry<"forced outage">;
                    readonly outageSub: import("..").TextEntry<"reroute power">;
                    readonly jam: import("..").TextEntry<"uplink jammed">;
                    readonly jamSub: import("..").TextEntry<"auto-jammer">;
                    readonly hailIncoming: import("..").TextEntry<"incoming hail">;
                    readonly hailIncomingSub: import("..").TextEntry<"answer">;
                    readonly hailOpen: import("..").TextEntry<"channel open">;
                    readonly hailOpenSub: import("..").TextEntry<"hail">;
                    readonly probe: import("..").TextEntry<"probe live">;
                    readonly probeSub: import("..").TextEntry<"tap to fly">;
                    readonly sweep: import("..").TextEntry<"scan live">;
                    readonly sweepSub: import("..").TextEntry<"on the sweep">;
                    readonly sectorClear: import("..").TextEntry<"sector clear">;
                    readonly sectorClearSub: import("..").TextEntry<"spool jump">;
                } & import("../types").TextGroup;
                readonly sector: {
                    readonly open: import("..").TextEntry<"Run status">;
                    readonly title: import("..").TextEntry<"run status">;
                    readonly encounter: import("..").TextEntry<"encounter">;
                    readonly objective: import("..").TextEntry<"objective">;
                    readonly quest: import("..").TextEntry<"quest">;
                    readonly salvage: import("..").TextEntry<"salvage">;
                    readonly jump: import("..").TextEntry<"jump drive">;
                    readonly none: import("..").TextEntry<"nothing yet">;
                } & import("../types").TextGroup;
                readonly dock: {
                    readonly sigint: import("..").TextEntry<"sigint">;
                    readonly quiet: import("..").TextEntry<"no intercepts">;
                    readonly jam: import("..").TextEntry<"jam">;
                    readonly open: import("..").TextEntry<"Open intercepts">;
                    readonly close: import("..").TextEntry<"Close intercepts">;
                } & import("../types").TextGroup;
                readonly alertMore: import("..").TextEntry<"+{n}">;
                readonly log: {
                    readonly lip: import("..").TextEntry<"log">;
                    readonly title: import("..").TextEntry<"system log">;
                    readonly entries: import("..").TextEntry<{
                        readonly one: "{n} entry";
                        readonly other: "{n} entries";
                    }>;
                    readonly empty: import("..").TextEntry<"nothing logged yet">;
                    readonly open: import("..").TextEntry<"Open log">;
                    readonly close: import("..").TextEntry<"Close log">;
                } & import("../types").TextGroup;
                readonly help: {
                    readonly open: import("..").TextEntry<"Help for this tab">;
                    readonly close: import("..").TextEntry<"Close">;
                    readonly gotIt: import("..").TextEntry<"Got it">;
                    readonly title: import("..").TextEntry<"{tab} · help">;
                    readonly ops: {
                        readonly ship1: import("..").TextEntry<"Drag a bar to set how much power a system draws. Draw is demand × priority, and free power is what the reactor has left.">;
                        readonly ship2: import("..").TextEntry<"The cut key trips a breaker and remembers the setting. Tap it again to restore. Repairs are automatic and spend salvage.">;
                        readonly ship3: import("..").TextEntry<"Spool the jump drive when the sector is clear. The dial spreads the deflector evenly across all four arcs.">;
                        readonly sweep1: import("..").TextEntry<"The sweep shows every return around the ship. Tap one to scan it. Enemies reveal target points; derelicts yield salvage.">;
                        readonly sweep2: import("..").TextEntry<"PLOT mode pushes a firing solution to Tactical: drag to aim the bearing tool. It stays up while you look at other tabs, and leaving PLOT retracts it.">;
                        readonly scope1: import("..").TextEntry<"The scope puts the scanned return on the glass. Analysis climbs while the scan holds, and finished analysis unlocks its points of interest.">;
                        readonly scope2: import("..").TextEntry<"While a Probe Mission runs, the Probe takes over your whole screen. BRIDGE steps out to these tabs, and the Probe holds still until you return.">;
                        readonly contact1: import("..").TextEntry<"A hail opens a channel. The Captain decides what to say; you press the key.">;
                        readonly contact2: import("..").TextEntry<"Signal intercepts are enemy chatter only your seat can hear. Relay them out loud before they scroll off.">;
                        readonly boards1: import("..").TextEntry<"The survey learns what an anomaly is. Ship status, the ledger and the screen router are for the Captain's questions.">;
                    } & import("../types").TextGroup;
                    readonly pg: {
                        readonly fly1: import("..").TextEntry<"Drag the throttle bar, or tap a detent, for speed. Drag the dial to turn: the bow answers at the hull's turn rate, and the ORD marker leads it.">;
                        readonly fly2: import("..").TextEntry<"Tap a return on the map to lock it. ROCKETS arms the pod: then a tap on the map fires a rocket at that bearing.">;
                        readonly fly3: import("..").TextEntry<"Flares are your point defense: torpedoes ignore them, so dodge those. Engineering spools the jump drive; you engage it once it is charged.">;
                        readonly guns1: import("..").TextEntry<"A beam fires at the lock. With no lock, tap a return on the map, pick one from the list, or press NEXT to cycle through what can be locked.">;
                        readonly guns2: import("..").TextEntry<"Missiles home on the lock. Rockets fly where you tap: arm them, then tap the map on the FLY tab.">;
                        readonly torps1: import("..").TextEntry<"Set the bearing and the arm delay, load a tube, then FIRE. A torpedo flies straight along its bearing and arms after its delay.">;
                        readonly torps2: import("..").TextEntry<"A very short arm delay arms the torpedo close to your own hull: keep it above the warning. Science's PLOT solution can be loaded with one tap.">;
                    } & import("../types").TextGroup;
                    readonly mod: {
                        readonly panel1: import("..").TextEntry<"These pages come from the room's mods. Each one runs in a sealed frame and cannot see your device, only the ship.">;
                        readonly panel2: import("..").TextEntry<"A mod with more than one page shows a key for each at the top of this tab.">;
                    } & import("../types").TextGroup;
                    readonly helm: {
                        readonly fly1: import("..").TextEntry<"Drag the throttle bar, or tap a detent, for speed. Drag the dial to turn: the bow answers at the hull's turn rate, and the ORD marker leads it.">;
                        readonly fly2: import("..").TextEntry<"MAP shows the sector and PARASCOPE is the flight view. In the parascope the arrow keys steer and set speed, FIRE shoots the railgun once it is armed, and RECENTER brings the look back to the bow.">;
                        readonly fly3: import("..").TextEntry<"Flares are your point defense: torpedoes ignore them, so dodge those. Engineering spools the jump drive; you engage it once it is charged.">;
                    } & import("../types").TextGroup;
                    readonly gun: {
                        readonly fire1: import("..").TextEntry<"Tactical picks the target and you only shoot it. FIRE lights when your bank is charged and cool, and the lock is inside beam range.">;
                        readonly fire2: import("..").TextEntry<"CHARGE is your bank filling. HEAT climbs with every shot, and a bank at 100 cannot fire until it cools.">;
                    } & import("../types").TextGroup;
                    readonly tac: {
                        readonly target1: import("..").TextEntry<"Tap a return on the scope to lock it, or pick one from the list under it. NEXT cycles through everything that can be locked.">;
                        readonly target2: import("..").TextEntry<"ROCKETS arms the pod: while it is armed, a tap on the scope fires a rocket at that bearing instead of locking. Tap a point on the target card to aim at one component.">;
                        readonly guns1: import("..").TextEntry<"A beam fires at the lock. A bank a Cannoneer has taken shows the cannon tag: they pull its trigger, you watch its charge and heat.">;
                        readonly guns2: import("..").TextEntry<"Missiles home on the lock. The turrets are automatic point defense: HOLD parks one and stops its power draw.">;
                    } & import("../types").TextGroup;
                    readonly eng: {
                        readonly power1: import("..").TextEntry<"Drag a bar to set how much power a system draws. Draw is demand × priority, and free power is what the reactor has left.">;
                        readonly power2: import("..").TextEntry<"The cut key trips a breaker and remembers the setting. Tap it again to restore. A forced outage needs REROUTE: priority alone will not clear it.">;
                        readonly shields1: import("..").TextEntry<"Drag an arc to spread deflector power. A bar holds what you ask for, and the charge strip above it shows what has built up.">;
                        readonly reactor1: import("..").TextEntry<"Overclock trades heat for output, and the core takes damage past the red line. VENT sheds heat in a short cycle at half output.">;
                        readonly reactor2: import("..").TextEntry<"The flux trace is demand against output. Spool the jump drive when the sector is clear, and Helm engages it once it is charged.">;
                        readonly repair1: import("..").TextEntry<"Tap a damaged system to send the repair team, and again to recall it. Repairs draw reactor power and spend salvage. Tap a system on the schematic to jump to its power row.">;
                    } & import("../types").TextGroup;
                    readonly sci: {
                        readonly boards1: import("..").TextEntry<"The survey learns what an anomaly is. The list is everything out there to scan: derelicts give salvage, hostiles reveal target points, and a scanned mine is marked for the whole bridge.">;
                    } & import("../types").TextGroup;
                    readonly com: {
                        readonly hail1: import("..").TextEntry<"A hail opens a channel. The Captain decides what to say and you press the key, before the response window closes.">;
                        readonly hail2: import("..").TextEntry<"With no channel open, tune a passive signal to listen in. It is for listening only: there is nothing to say back.">;
                        readonly signal1: import("..").TextEntry<"The spectrum shows every carrier in range. When an enemy calls for reinforcements, drag the jammer after its carrier to hold the call.">;
                        readonly signal2: import("..").TextEntry<"Signal intercepts are enemy chatter only your seat can hear. Relay them out loud before they scroll off.">;
                        readonly status1: import("..").TextEntry<"Set the alert posture, read ship status and the ledger out for the Captain, and put a channel on the main screen with the router.">;
                    } & import("../types").TextGroup;
                    readonly solo: {
                        readonly fly3: import("..").TextEntry<"Flares are your point defense: torpedoes ignore them, so dodge those. The jump key spools the drive once the sector is clear, then engages it.">;
                        readonly guns1: import("..").TextEntry<"A beam fires at the lock. The one tube takes a torpedo or a noisemaker: set the bearing and the arm delay, load it, then FIRE.">;
                        readonly scan1: import("..").TextEntry<"Sweep, scope and boards share this tab: the keys at the top pick between them. A deep scan that is running lights SWEEP while you are elsewhere.">;
                    } & import("../types").TextGroup;
                } & import("../types").TextGroup;
                readonly ops: {
                    readonly powerTitle: import("..").TextEntry<"power distribution">;
                    readonly systemsTitle: import("..").TextEntry<"life support · jump · deflector">;
                    readonly lifeShort: import("..").TextEntry<"life">;
                    readonly ventArmed: import("..").TextEntry<"arm">;
                    readonly ventSec: import("..").TextEntry<"{sec}s">;
                } & import("../types").TextGroup;
                readonly boards: {
                    readonly others: import("..").TextEntry<"other returns">;
                    readonly noAnomalies: import("..").TextEntry<"no anomalies in range">;
                    readonly seg: {
                        readonly survey: import("..").TextEntry<"survey">;
                        readonly status: import("..").TextEntry<"status">;
                        readonly ledger: import("..").TextEntry<"ledger">;
                        readonly screen: import("..").TextEntry<"screen">;
                    } & import("../types").TextGroup;
                    readonly nav: import("..").TextEntry<"Ship desk">;
                    readonly routerTitle: import("..").TextEntry<"screen router">;
                    readonly contacts: import("..").TextEntry<"contacts">;
                    readonly noContacts: import("..").TextEntry<"nothing to scan">;
                } & import("../types").TextGroup;
                readonly scan: {
                    readonly nav: import("..").TextEntry<"Scan view">;
                } & import("../types").TextGroup;
                readonly flight: {
                    readonly viewNav: import("..").TextEntry<"Picture">;
                    readonly rockets: import("..").TextEntry<"rockets ×{n}">;
                    readonly rocketsArmed: import("..").TextEntry<"armed ×{n}">;
                    readonly throttleAria: import("..").TextEntry<"Throttle">;
                    readonly noLock: import("..").TextEntry<"no lock">;
                    readonly next: import("..").TextEntry<"next">;
                    readonly nextAria: import("..").TextEntry<"Lock the next target">;
                    readonly aim: import("..").TextEntry<"aim">;
                    readonly aimAria: import("..").TextEntry<"Choose what to aim at">;
                    readonly targets: import("..").TextEntry<"targets">;
                    readonly noTargets: import("..").TextEntry<"nothing to lock">;
                    readonly dist: import("..").TextEntry<"{n}u">;
                    readonly brg: import("..").TextEntry<"bearing">;
                    readonly dly: import("..").TextEntry<"delay">;
                    readonly aimTitle: import("..").TextEntry<"torpedo aim">;
                    readonly fireTitle: import("..").TextEntry<"fire control">;
                } & import("../types").TextGroup;
                readonly screen: import("..").TextEntry<"Screen">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
    };
    readonly app: {
        readonly fatal: {
            readonly missingWebBuild: {
                readonly title: import("..").TextEntry<"Missing web build">;
                readonly message: import("..").TextEntry<"No SPA build at {dir}. Run: pnpm -F @scc/{name} build">;
            } & import("../types").TextGroup;
            readonly portInUse: {
                readonly title: import("..").TextEntry<"Port already in use">;
                readonly message: import("..").TextEntry<"Port {port} ({label}) is already in use, probably by another copy of Space Couch Command or a dev stack. Host mode needs these exact ports so phones on your network can join.">;
            } & import("../types").TextGroup;
            readonly connectionLost: {
                readonly title: import("..").TextEntry<"Connection lost">;
                readonly message: import("..").TextEntry<"{why}\nAsk the host for a fresh invite.">;
            } & import("../types").TextGroup;
            readonly joinFailed: {
                readonly title: import("..").TextEntry<"Join failed">;
                readonly message: import("..").TextEntry<"The host's lobby has no room code. Is their bridge still up?">;
            } & import("../types").TextGroup;
            readonly steamJoinUnavailable: {
                readonly title: import("..").TextEntry<"Steam join unavailable">;
                readonly message: import("..").TextEntry<"Open Steam and launch this edition from your library, then try the invite again.">;
            } & import("../types").TextGroup;
            readonly wrongEdition: {
                readonly title: import("..").TextEntry<"Wrong Steam edition">;
                readonly message: import("..").TextEntry<"Both players must use the demo, or both the full game.">;
                readonly inviteMessage: import("..").TextEntry<"This invite is for another edition. Both players must use the demo, or both the full game.">;
            } & import("../types").TextGroup;
            readonly serverStopped: {
                readonly title: import("..").TextEntry<"Game server stopped">;
                readonly message: import("..").TextEntry<"The game server stopped unexpectedly several times in a row and could not be restarted. Close Space Couch Command and start it again.\n\n{why}">;
            } & import("../types").TextGroup;
            readonly startupFailed: {
                readonly title: import("..").TextEntry<"Startup failed">;
            } & import("../types").TextGroup;
        } & import("../types").TextGroup;
        readonly portLabel: {
            readonly gameServer: "game server";
            readonly mainScreen: "main screen";
            readonly stations: "stations";
        } & import("../types").TextGroup;
        readonly joinPrompt: {
            readonly message: import("..").TextEntry<"Join your friend's bridge?">;
            readonly detail: import("..").TextEntry<"This bridge shuts down (any phones on the local network disconnect) and Space Couch Command restarts as a remote crew member.">;
            readonly stay: import("..").TextEntry<"Stay here">;
            readonly leave: import("..").TextEntry<"Leave & join">;
        } & import("../types").TextGroup;
        readonly window: {
            readonly mainScreenTitle: import("..").TextEntry<"{title} — Main Screen">;
        } & import("../types").TextGroup;
        readonly steam: {
            readonly p2pFailed: import("..").TextEntry<"Steam P2P session failed (code {code})">;
            readonly lobbyMissingData: import("..").TextEntry<"This bridge's lobby is missing its room data.">;
            readonly hostLeft: import("..").TextEntry<"The host has left this bridge.">;
            readonly unavailable: import("..").TextEntry<"Steam unavailable">;
            readonly linkUnavailable: import("..").TextEntry<"STEAM IS UNAVAILABLE — OPEN STEAM AND LAUNCH THE GAME FROM YOUR LIBRARY">;
            readonly linkWrongEdition: import("..").TextEntry<"THIS STEAM LINK IS FOR A DIFFERENT EDITION — BOTH PLAYERS MUST USE THE DEMO, OR BOTH THE FULL GAME">;
            readonly invalidLink: import("..").TextEntry<"INVALID STEAM INVITE LINK — COPY THE WHOLE LINK FROM INVITE FRIENDS">;
            readonly joinNotHere: import("..").TextEntry<"CANNOT JOIN A STEAM BRIDGE FROM THIS SCREEN">;
            readonly joinFailed: import("..").TextEntry<"STEAM JOIN FAILED — CHECK THAT STEAM IS ONLINE AND TRY AGAIN">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly shell: {
        readonly brand: import("..").TextEntry<"Space Couch Command">;
        readonly picker: {
            readonly hint: import("..").TextEntry<"HOST A GAME ON THIS MACHINE, OR JOIN ONE ON ANOTHER">;
            readonly hostButton: import("..").TextEntry<"▶ HOST A GAME">;
            readonly joinButton: import("..").TextEntry<"JOIN A GAME">;
        } & import("../types").TextGroup;
        readonly join: {
            readonly go: import("..").TextEntry<"JOIN">;
            readonly back: import("..").TextEntry<"BACK">;
            readonly anyway: import("..").TextEntry<"JOIN ANYWAY">;
            readonly addressLabel: {
                readonly desktop: "Steam invite link or host address";
                readonly mobile: import("..").TextEntry<"Host address">;
            } & import("../types").TextGroup;
            readonly addressPlaceholder: import("..").TextEntry<"Steam invite link or 192.168.1.70">;
            readonly hint: {
                readonly desktop: import("..").TextEntry<"PASTE A STEAM INVITE LINK, OR TYPE THE HOST'S LOCAL NETWORK ADDRESS OR LINK">;
                readonly mobile: import("..").TextEntry<"HOST ADDRESS FROM THEIR LOBBY: IP, IP:PORT, OR THE WHOLE LINK">;
            } & import("../types").TextGroup;
            readonly needAddr: import("..").TextEntry<"ENTER THE HOST'S ADDRESS — e.g. 192.168.1.70">;
            readonly noIpv6: import("..").TextEntry<"IPv6 ADDRESSES CAN'T BE USED HERE. ASK THE HOST FOR THEIR IPv4 ADDRESS (e.g. 192.168.1.70)">;
            readonly looking: import("..").TextEntry<"LOOKING FOR {host} …">;
            readonly portSeparator: import("..").TextEntry<" OR ">;
            readonly silent: {
                readonly desktop: import("..").TextEntry<"NOTHING ANSWERED AT {host} ON {ports}. CHECK THE ADDRESS, MAKE SURE BOTH MACHINES ARE ON THE SAME NETWORK, AND CHECK THE HOST'S FIREWALL">;
                readonly mobile: import("..").TextEntry<"NOTHING ANSWERED AT {host} ON {ports}. CHECK THE ADDRESS, MAKE SURE BOTH DEVICES ARE ON THE SAME WI-FI, AND ALLOW ANY LOCAL-NETWORK PROMPT">;
            } & import("../types").TextGroup;
            readonly listener: import("..").TextEntry<"SOMETHING IS ANSWERING AT {address} BUT DID NOT IDENTIFY ITSELF AS A BRIDGE. TRYING IT ANYWAY; YOUR CONSOLE WILL ASK FOR THE ROOM CODE">;
            readonly found: import("..").TextEntry<"FOUND ROOM {room} AT {host} — STAND BY">;
            readonly foundNoRoom: import("..").TextEntry<"HOST FOUND AT {host}. YOUR CONSOLE WILL ASK FOR THE ROOM CODE">;
            readonly unverified: import("..").TextEntry<"DIALLING {address} UNVERIFIED. IF NOTHING IS THERE, YOUR CONSOLE WILL SIT ON ITS JOIN SCREEN">;
            readonly steamJoining: import("..").TextEntry<"JOINING THE STEAM BRIDGE …">;
            readonly steamRestarting: import("..").TextEntry<"JOINING THE STEAM BRIDGE — RESTARTING AS REMOTE CREW">;
        } & import("../types").TextGroup;
        readonly standby: {
            readonly hostDesktop: import("..").TextEntry<"HOSTING ON THIS MACHINE — STAND BY">;
            readonly hostPhone: import("..").TextEntry<"HOSTING ON THIS PHONE — STAND BY">;
            readonly leaving: import("..").TextEntry<"LEAVING THIS BRIDGE — STANDING DOWN">;
        } & import("../types").TextGroup;
        readonly toolbar: {
            readonly mainTab: import("..").TextEntry<"MAIN SCREEN">;
            readonly stationTab: import("..").TextEntry<"MY STATION">;
            readonly popout: import("..").TextEntry<"POP OUT">;
            readonly popoutTitle: import("..").TextEntry<"Open the main screen in a separate window">;
            readonly popoutShow: import("..").TextEntry<"SHOW POPOUT">;
            readonly popoutRetry: import("..").TextEntry<"TRY POPOUT AGAIN">;
            readonly join: import("..").TextEntry<"JOIN A GAME">;
            readonly joinTitle: import("..").TextEntry<"Stop hosting and join another host's bridge">;
            readonly leave: import("..").TextEntry<"LEAVE BRIDGE">;
            readonly invite: import("..").TextEntry<"INVITE FRIENDS">;
            readonly streamerOn: import("..").TextEntry<"STREAMER MODE ON">;
            readonly codeHidden: import("..").TextEntry<"••••">;
            readonly lanPhones: import("..").TextEntry<"PHONES: {phones} · MAIN SCREEN: {main}">;
            readonly lanRemote: import("..").TextEntry<"REMOTE BRIDGE · ROOM {room}">;
            readonly lanJoined: import("..").TextEntry<"JOINED {host} · ROOM {room}">;
            readonly askOnConsole: import("..").TextEntry<"ASK ON YOUR CONSOLE">;
            readonly mainFrameTitle: import("..").TextEntry<"Main screen">;
            readonly stationFrameTitle: import("..").TextEntry<"My station">;
            readonly bridgeMissing: import("..").TextEntry<"shell bridge missing — preload failed to load">;
        } & import("../types").TextGroup;
        readonly steam: {
            readonly offline: import("..").TextEntry<"STEAM OFFLINE">;
            readonly online: import("..").TextEntry<"ONLINE">;
            readonly named: import("..").TextEntry<"STEAM: {name}">;
            readonly inviteFailed: "STEAM: INVITE FAILED";
            readonly friendsOpen: "STEAM: FRIENDS OPEN";
        } & import("../types").TextGroup;
        readonly boot: {
            readonly poweringBridge: import("..").TextEntry<"POWERING BRIDGE">;
            readonly startingCore: import("..").TextEntry<"STARTING NODE CORE">;
            readonly unpacking: import("..").TextEntry<"UNPACKING GAME DATA">;
            readonly unpackingPercent: import("..").TextEntry<"UNPACKING GAME DATA · {pct}%">;
            readonly firstLaunchOnly: import("..").TextEntry<"first launch only — later starts are quick">;
            readonly waiting: import("..").TextEntry<"WAITING FOR BRIDGE SYSTEMS">;
            readonly elapsed: import("..").TextEntry<"{line} · {seconds}s">;
            readonly checkingLan: import("..").TextEntry<"CHECKING LAN REACH">;
            readonly bridgeUp: import("..").TextEntry<"BRIDGE UP">;
            readonly joining: import("..").TextEntry<"JOINING BRIDGE">;
            readonly leaving: import("..").TextEntry<"LEAVING THIS BRIDGE">;
            readonly leavingDetail: import("..").TextEntry<"standing down">;
            readonly standingBy: import("..").TextEntry<"BRIDGE STANDING BY">;
            readonly standingByDetail: import("..").TextEntry<"host this game, or join another">;
            readonly coreStopped: import("..").TextEntry<"BRIDGE CORE STOPPED">;
            readonly coreUnresponsive: import("..").TextEntry<"BRIDGE CORE UNRESPONSIVE">;
            readonly coreLost: import("..").TextEntry<"BRIDGE CORE LOST IN BACKGROUND">;
            readonly forceClose: import("..").TextEntry<"force-close the app and relaunch">;
        } & import("../types").TextGroup;
        readonly chip: {
            readonly frameTitle: import("..").TextEntry<"Space Couch Command main screen">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
};
