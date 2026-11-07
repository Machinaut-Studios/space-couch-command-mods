export declare const node: {
    readonly demand: {
        readonly text: import("../..").TextEntry<string>;
        readonly option: {
            readonly pay: {
                readonly label: import("../..").TextEntry<"TRANSFER {tribute} SALVAGE">;
                readonly detail: import("../..").TextEntry<"buy them off — no fight, no reward">;
            } & import("../../types").TextGroup;
            readonly refuse: {
                readonly label: import("../..").TextEntry<"OPEN FIRE ON THIS FREQUENCY">;
                readonly detail: import("../..").TextEntry<"defiance — they'll come shooting">;
            } & import("../../types").TextGroup;
            readonly bluff: {
                readonly label: import("../..").TextEntry<"THIS IS A VANGUARD WARSHIP">;
                readonly detail: import("../..").TextEntry<"a coin toss: they scatter, or they call it">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly demand_paid: {
        readonly text: "Pleasure doing business, citizen. Corsairs, spool out. Leave 'em their dignity.";
    } & import("../../types").TextGroup;
    readonly demand_broke: {
        readonly text: "Your hold's emptier than your threats. Nothing to take but the hull itself. BURN THEM.";
    } & import("../../types").TextGroup;
    readonly bluff_worked: {
        readonly text: "…Run that keel signature again. That's— all ships, SCATTER. Scatter NOW. Nobody dies for this haul.";
    } & import("../../types").TextGroup;
    readonly bluff_called: {
        readonly text: "Vanguard? Vanguard hulls don't rust, sweetheart. Nice try. GET THEM.";
    } & import("../../types").TextGroup;
    readonly fear_option_TEMPLATE: {
        readonly option: {
            readonly fear: {
                readonly label: import("../..").TextEntry<"RUN OUR KEEL SIGNATURE. THEN DECIDE.">;
                readonly detail: import("../..").TextEntry<"they know this ship — let the stories do the talking">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly fear_scatter: {
        readonly text: "…that keel. THAT keel. Check the ledger, check the— it's THEM. All ships, break off. BREAK OFF. Some cargo isn't worth the stories.";
    } & import("../../types").TextGroup;
    readonly fear_called: {
        readonly text: "I've heard the stories. I've also heard ghost stories. Guns don't believe in either. TAKE THEM.";
    } & import("../../types").TextGroup;
    readonly mock: {
        readonly text: "Surrender? To YOU? Save your breath for the vacuum, Federation.";
    } & import("../../types").TextGroup;
    readonly yield: {
        readonly text: import("../..").TextEntry<"HOLD FIRE, hold fire! Alright. ALRIGHT. Reactor's spiking and half my deck's on fire. We're powering down. Cargo's yours. Just leave my crew breathing.">;
        readonly option: {
            readonly accept: {
                readonly label: import("../..").TextEntry<"STAND DOWN — TAKE THE CARGO">;
                readonly detail: import("../..").TextEntry<"they go adrift; salvage bounty">;
            } & import("../../types").TextGroup;
            readonly refuse: {
                readonly label: import("../..").TextEntry<"NO QUARTER">;
                readonly detail: import("../..").TextEntry<"finish the job — they'll fight to the last">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly surrender_refused_them: {
        readonly text: "You'll have to hit a lot harder than that before I kneel to a couch full of tourists.";
    } & import("../../types").TextGroup;
    readonly no_quarter: {
        readonly text: "So that's how it is. You hear that, crew? No mercy from the do-gooders. DIE SWINGING.";
    } & import("../../types").TextGroup;
    readonly fake_surrender_sprung: {
        readonly text: "Powering down… powering down… FIRE EVERYTHING. Ha! Oldest trick on the spinward run!";
    } & import("../../types").TextGroup;
    readonly taunt: {
        readonly text: import("../..").TextEntry<string>;
        readonly option: {
            readonly taunt_back: {
                readonly label: import("../..").TextEntry<"YOUR WALL DIES WITH YOU">;
                readonly detail: import("../..").TextEntry<"goad them — anger makes mistakes">;
            } & import("../../types").TextGroup;
            readonly end: {
                readonly label: import("../..").TextEntry<"END TRANSMISSION">;
                readonly detail: import("../..").TextEntry<"let the guns talk">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly taunt_goaded: {
        readonly text: "RRAGH, you'll be FIRST then! ALL POWER TO— [their reactor howls across every band; Science has a clean read]";
    } & import("../../types").TextGroup;
    readonly taunt_contempt: {
        readonly text: "Bravado. Good. It reads better on the plaque.";
    } & import("../../types").TextGroup;
    readonly fc_open: {
        readonly text: import("../..").TextEntry<string>;
        readonly option: {
            readonly greet: {
                readonly label: import("../..").TextEntry<"WE COME IN PEACE">;
                readonly detail: import("../..").TextEntry<"diplomacy — they may test the claim">;
            } & import("../../types").TextGroup;
            readonly force: {
                readonly label: import("../..").TextEntry<"LOCK WEAPONS — SHOW STRENGTH">;
                readonly detail: import("../..").TextEntry<"some species respect it. most don't.">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly fc_kin_option_TEMPLATE: {
        readonly option: {
            readonly kin: {
                readonly label: import("../..").TextEntry<"MIRROR THEIR BIO-SIGNS">;
                readonly detail: import("../..").TextEntry<"Science's scan found the idiom of the deep">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly fc_peace_test: {
        readonly text: import("../..").TextEntry<"Peace. A word with teeth in it, in our experience. Your weapons hum, little ship. We hear them through the dark. Silence them, and we will believe you.">;
        readonly option: {
            readonly comply: {
                readonly label: import("../..").TextEntry<"SIGNAL: OUR GUNS GO COLD">;
                readonly detail: import("../..").TextEntry<"they will CHECK: beams below 20% charge, turrets on HOLD — coordinate with Tactical!">;
            } & import("../../types").TextGroup;
            readonly keep_hot: {
                readonly label: import("../..").TextEntry<"OUR GUNS STAY WARM">;
                readonly detail: import("../..").TextEntry<"honest caution — they may respect it">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly fc_gift: {
        readonly text: "Warmth honors warmth. Take this chitin-weld for your wounded hull, and a memory of us in your charts. Swim well.";
    } & import("../../types").TextGroup;
    readonly fc_offended: {
        readonly text: "Your words are soft. Your guns are loud. The Vel'Shaar have tasted this dish before. DECEIVER.";
    } & import("../../types").TextGroup;
    readonly fc_wary: {
        readonly text: import("../..").TextEntry<"Caution. Caution is honest, and we accept it. Then trade at claw's length: {fcCost} salvage for a hull-weld of living chitin.">;
        readonly option: {
            readonly buy: {
                readonly label: import("../..").TextEntry<"PAY {fcCost} — TAKE THE WELD">;
                readonly detail: import("../..").TextEntry<"repairs the hull">;
            } & import("../../types").TextGroup;
            readonly decline: {
                readonly label: import("../..").TextEntry<"DECLINE, WITH RESPECT">;
                readonly detail: import("../..").TextEntry<"part on good terms">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly fc_traded: {
        readonly text: "The weld sets. It will remember your hull's shape better than your builders did. Star-tides favor you, warm ones.";
    } & import("../../types").TextGroup;
    readonly fc_farewell: {
        readonly text: "Then part we do, unbitten both. Carry these current-charts. They map the near-deep. A small kindness, freely given.";
    } & import("../../types").TextGroup;
    readonly fc_respect: {
        readonly text: "Strength. The old tongue, spoken poorly, but spoken. We yield the lane, and tribute, as the old law demands. Do not linger.";
    } & import("../../types").TextGroup;
    readonly fc_kin: {
        readonly text: import("../..").TextEntry<"You speak as the deep speaks…?! KIN-WARM! Little ship of the dry worlds, singing tide-song! Take weld, take charts, take our regard, and be spoken of in the Below.">;
    } & import("../../types").TextGroup;
    readonly fc_broke: {
        readonly text: "Empty claws, warm words. No shame in it. Return heavier, and the weld is yours.";
        readonly option: {
            readonly decline: {
                readonly label: import("../..").TextEntry<"PART ON GOOD TERMS">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly trade_open: {
        readonly text: import("../..").TextEntry<"Guild freighter LONG HAUL, holds full and schedule tight. Buying and selling while the kettle's hot, friend. What'll it be?">;
    } & import("../../types").TextGroup;
    readonly trade_haggled: {
        readonly text: "…Fine. FINE. Family rates. If the Guild asks, you haggled like a drowning man. Don't spread it around.";
    } & import("../../types").TextGroup;
    readonly trade_offended: {
        readonly text: "Robbery?! These margins wouldn't feed a vac-rat. Channel's closed to you, deadbeat. Hail back when you've found manners.";
    } & import("../../types").TextGroup;
    readonly trade_broke: {
        readonly text: "Credit's no good past the relay line, friend. Salvage on the barrel or nothing.";
    } & import("../../types").TextGroup;
    readonly trade_last_call: {
        readonly text: "Schedule's a schedule and mine's screaming. Safe lanes, friend. The Guild remembers its customers.";
    } & import("../../types").TextGroup;
    readonly qship_reveal: {
        readonly text: "PREY ACQUISITION CONFIRMED. PAYMENT ACCEPTED WITH THANKS. TERMINATING COURTESY PROTOCOLS. DEPLOYING ESCORT.";
    } & import("../../types").TextGroup;
    readonly mayday: {
        readonly text: import("../..").TextEntry<"Mayday, mayday. Freighter KESTREL, engines dark, cargo full, raiders on approach! Anyone on this band, ANYONE. We have families aboard. Please.">;
        readonly option: {
            readonly respond: {
                readonly label: import("../..").TextEntry<"WE'RE COMING — HOLD ON">;
                readonly detail: import("../..").TextEntry<"defend her (salvage reward if she lives)">;
            } & import("../../types").TextGroup;
            readonly ignore: {
                readonly label: import("../..").TextEntry<"MAINTAIN COURSE">;
                readonly detail: import("../..").TextEntry<"not our problem">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly mayday_thanks: {
        readonly text: "You glorious lunatics, you actually came. Drinks are on the Guild for a decade. So is this. KESTREL out.";
    } & import("../../types").TextGroup;
    readonly mayday_faded: {
        readonly text: "…the mayday repeats twice more. Then the band goes quiet.";
    } & import("../../types").TextGroup;
    readonly beacon: {
        readonly text: import("../..").TextEntry<string>;
    } & import("../../types").TextGroup;
    readonly amalgam_overture: {
        readonly text: import("../..").TextEntry<"We heard your heartbeats from three light-seconds out. So few. So loud. So briefly yours. This is not a demand. It is an appraisal: your hull will be made contiguous with Ours, and your crew will be kept, whole and warm, and never alone again. Cut your drives. Open your locks. We are already reaching.">;
        readonly option: {
            readonly refuse: {
                readonly label: import("../..").TextEntry<"WE DECLINE — ALL GUNS FREE">;
                readonly detail: import("../..").TextEntry<"there is nothing here to negotiate with">;
            } & import("../../types").TextGroup;
            readonly ask: {
                readonly label: import("../..").TextEntry<"WHAT ARE WE, TO YOU?">;
                readonly detail: import("../..").TextEntry<"keep the chorus talking — every second is a scan">;
            } & import("../../types").TextGroup;
            readonly end: {
                readonly label: import("../..").TextEntry<"END TRANSMISSION">;
                readonly detail: import("../..").TextEntry<"they are coming either way">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly amalgam_inventory: {
        readonly text: import("../..").TextEntry<"Inventory: one hull, workable. One reactor, adequate. One crew: the only component that repairs itself. Do not mistake this for hunger. The harvest does not hate the field. Every voice We have ever taken is still singing, somewhere in Us. Listen. You will recognize the accents.">;
        readonly option: {
            readonly refuse: {
                readonly label: import("../..").TextEntry<"NO ONE IS JOINING TODAY">;
                readonly detail: import("../..").TextEntry<"open fire">;
            } & import("../../types").TextGroup;
            readonly end: {
                readonly label: import("../..").TextEntry<"END TRANSMISSION">;
                readonly detail: import("../..").TextEntry<"let the guns answer">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly amalgam_refused: {
        readonly text: import("../..").TextEntry<"Refusal: noted, filed, kept. We keep every refusal in the voice that made it, a courtesy so nothing of you is wasted. Yours are lovely. They will still be saying no, long after they are saying it in chorus.">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
export declare const trader: {
    readonly label: {
        readonly buyTorps: import("../..").TextEntry<"BUY: {torpCost} → +{torpN} TORPEDOES">;
        readonly buyMissiles: import("../..").TextEntry<"BUY: {missileCost} → +{missileN} MISSILES">;
        readonly buyRockets: import("../..").TextEntry<"BUY: {rocketCost} → +{rocketN} ROCKETS">;
        readonly buyRails: import("../..").TextEntry<"BUY: {railCost} → +{railN} RAIL SLUGS">;
        readonly buyHull: import("../..").TextEntry<"BUY: {hullCost} → HULL PATCH +{hullN}">;
        readonly buyProbes: import("../..").TextEntry<"BUY: {probeCost} → +{probeN} SURVEY PROBES">;
        readonly sellCharts: import("../..").TextEntry<"SELL SURVEY DATA: +{chartsPay}">;
        readonly haggle: import("../..").TextEntry<"GUILD RATES ARE ROBBERY">;
        readonly leave: import("../..").TextEntry<"SAFE LANES, GUILDMASTER">;
    } & import("../../types").TextGroup;
    readonly detail: {
        readonly missiles: import("../..").TextEntry<"seeker darts for the tactical rack">;
        readonly rockets: import("../..").TextEntry<"cheap and cheerful, no warranty">;
        readonly rails: import("../..").TextEntry<"spine-gun ammunition — handle with respect">;
        readonly probes: import("../..").TextEntry<"for the science bay's launch cradle">;
        readonly sellCharts: import("../..").TextEntry<"once per meeting">;
        readonly haggle: import("../..").TextEntry<"a coin toss: family rates, or a closed channel">;
        readonly leave: import("../..").TextEntry<"end transmission">;
        readonly familyRates: import("../..").TextEntry<"family rates apply">;
        readonly salvageOnBarrel: import("../..").TextEntry<"salvage on the barrel">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
