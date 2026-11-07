export declare const shell: {
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
