export declare const run: {
    readonly probe: {
        readonly siteName: import("..").TextEntry<"{poi} · {site}">;
        readonly unchartedSite: import("..").TextEntry<"UNCHARTED SITE">;
    } & import("../types").TextGroup;
    readonly crew: {
        readonly member: import("..").TextEntry<"{name}·{role}">;
        readonly join: import("..").TextEntry<"{head} / {tail}">;
    } & import("../types").TextGroup;
} & import("../types").TextGroup;
