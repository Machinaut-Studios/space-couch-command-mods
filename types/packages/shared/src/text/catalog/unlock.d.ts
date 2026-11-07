export declare const unlock: {
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
