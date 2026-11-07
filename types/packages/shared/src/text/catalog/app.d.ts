export declare const app: {
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
