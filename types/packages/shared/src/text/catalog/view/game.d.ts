export declare const game: {
    readonly documentTitle: import("../..").TextEntry<"Space Couch Command — Viewscreen">;
    readonly hud: {
        readonly sector: {
            readonly none: import("../..").TextEntry<"SECTOR —">;
            readonly line: import("../..").TextEntry<"SECTOR {n} — {label}">;
        } & import("../../types").TextGroup;
        readonly alert: {
            readonly green: import("../..").TextEntry<"ALERT GREEN">;
            readonly yellow: import("../..").TextEntry<"ALERT YELLOW">;
            readonly red: import("../..").TextEntry<"ALERT RED">;
        } & import("../../types").TextGroup;
        readonly sysLabel: import("../..").TextEntry<"SB-OS 2.4 // BRIDGE LINK">;
        readonly jump: {
            readonly charge: import("../..").TextEntry<"JUMP {pct}%">;
            readonly ready: import("../..").TextEntry<"JUMP READY">;
        } & import("../../types").TextGroup;
        readonly stats: import("../..").TextEntry<"SALVAGE {salvage} · KILLS {kills}">;
        readonly ribbon: import("../..").TextEntry<"◍ INCOMING TRANSMISSION — COMMS">;
        readonly ordnance: {
            readonly torpedo: import("../..").TextEntry<{
                readonly one: "⚠ TORPEDO INBOUND";
                readonly other: "⚠ TORPEDO ×{count} INBOUND";
            }>;
            readonly missile: import("../..").TextEntry<{
                readonly one: "⚠ MISSILE";
                readonly other: "⚠ MISSILES ×{count}";
            }>;
            readonly rail: import("../..").TextEntry<{
                readonly one: "⚠ RAIL SLUG";
                readonly other: "⚠ RAIL SLUGS ×{count}";
            }>;
            readonly rocket: import("../..").TextEntry<{
                readonly one: "⚠ ROCKET";
                readonly other: "⚠ ROCKETS ×{count}";
            }>;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly titleCard: import("../..").TextEntry<"SECTOR {n} — {label}">;
    readonly clear: {
        readonly title: import("../..").TextEntry<"SECTOR CLEAR">;
        readonly ready: import("../..").TextEntry<"JUMP DRIVE READY — HELM: ENGAGE">;
        readonly spool: import("../..").TextEntry<"SPOOL JUMP DRIVE TO CONTINUE — JUMP CHARGE {pct}%">;
    } & import("../../types").TextGroup;
    readonly gameOver: {
        readonly shipLost: import("../..").TextEntry<"SHIP LOST">;
        readonly demoComplete: import("../..").TextEntry<"DEMO COMPLETE">;
        readonly stats: {
            readonly sectorsFlown: import("../..").TextEntry<"SECTORS FLOWN">;
            readonly sectorsReached: import("../..").TextEntry<"SECTORS REACHED">;
            readonly salvageBanked: import("../..").TextEntry<"SALVAGE BANKED">;
            readonly kills: import("../..").TextEntry<"KILLS">;
            readonly coloniesSaved: import("../..").TextEntry<"COLONIES SAVED">;
        } & import("../../types").TextGroup;
        readonly restart: import("../..").TextEntry<"▶ NEW RUN  [ENTER]">;
        readonly lobby: import("../..").TextEntry<"▷ RETURN TO LOBBY  [L]">;
        readonly hint: import("../..").TextEntry<"ESC: MENU">;
        readonly cta: import("../..").TextEntry<"◈ WISHLIST SPACE COUCH COMMAND ON STEAM">;
    } & import("../../types").TextGroup;
    readonly boot: {
        readonly banner: import("../..").TextEntry<"SB-OS 2.4 // BRIDGE VIEWSCREEN">;
        readonly memory: import("../..").TextEntry<"MEMORY CHECK ............. OK">;
        readonly phosphor: import("../..").TextEntry<"PHOSPHOR ARRAY ........... OK">;
        readonly shipnet: import("../..").TextEntry<"SHIPNET UPLINK ........... SYNC">;
        readonly link: import("../..").TextEntry<"BRIDGE LINK ESTABLISHED">;
        readonly fault: import("../..").TextEntry<"LINK FAULT: {reason}">;
    } & import("../../types").TextGroup;
    readonly connection: {
        readonly lost: import("../..").TextEntry<"◍ SIGNAL LOST — RECONNECTING…">;
        readonly failed: import("../..").TextEntry<"◍ CONNECTION LOST — RELOAD THE PAGE">;
    } & import("../../types").TextGroup;
    readonly settingsValue: {
        readonly theme: {
            readonly green: "GREEN";
            readonly amber: "AMBER";
            readonly mixed: "MIXED";
        } & import("../../types").TextGroup;
        readonly on: import("../..").TextEntry<"ON">;
        readonly off: import("../..").TextEntry<"OFF">;
    } & import("../../types").TextGroup;
    readonly muteKey: import("../..").TextEntry<"M">;
    readonly music: {
        readonly artist: import("../..").TextEntry<"White Bat Audio">;
        readonly pack: {
            readonly la2077: import("../..").TextEntry<"LA 2077 Atmosphere Pack">;
            readonly darksynth: import("../..").TextEntry<"Darksynth">;
        } & import("../../types").TextGroup;
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
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
