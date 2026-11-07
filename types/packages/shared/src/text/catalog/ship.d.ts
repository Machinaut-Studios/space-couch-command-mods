export declare const ship: {
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
