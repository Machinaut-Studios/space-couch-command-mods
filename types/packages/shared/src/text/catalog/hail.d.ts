export declare const hail: {
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
