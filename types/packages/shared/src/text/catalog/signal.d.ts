export declare const signal: {
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
