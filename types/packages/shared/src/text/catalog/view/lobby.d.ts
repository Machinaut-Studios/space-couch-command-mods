export declare const lobby: {
    readonly wordmark: import("../..").TextEntry<"SPACE COUCH COMMAND">;
    readonly shop: {
        readonly button: import("../..").TextEntry<"UPGRADES">;
        readonly buttonBanked: import("../..").TextEntry<"UPGRADES ◈{banked}">;
    } & import("../../types").TextGroup;
    readonly back: import("../..").TextEntry<"BACK TO BRIDGE">;
    readonly key: {
        readonly enter: import("../..").TextEntry<"ENTER">;
        readonly esc: import("../..").TextEntry<"ESC">;
    } & import("../../types").TextGroup;
    readonly tabs: {
        readonly crew: import("../..").TextEntry<"CREW">;
        readonly crewCount: import("../..").TextEntry<"CREW {seated}/{core}">;
        readonly upgrades: import("../..").TextEntry<"UPGRADES">;
        readonly upgradesBanked: import("../..").TextEntry<"UPGRADES ◈{banked}">;
        readonly saved: import("../..").TextEntry<"SAVED">;
        readonly savedCount: import("../..").TextEntry<"SAVED {count}">;
    } & import("../../types").TextGroup;
    readonly pager: {
        readonly more: import("../..").TextEntry<"{n} MORE">;
        readonly top: import("../..").TextEntry<"BACK TO TOP">;
    } & import("../../types").TextGroup;
    readonly seat: {
        readonly short: {
            readonly helm: "HELM";
            readonly tactical: "TAC";
            readonly engineer: "ENG";
            readonly science: "SCI";
            readonly comms: "COMMS";
            readonly helm_tac: "PILOT";
            readonly ops: "OPS";
            readonly sci_comms: import("../..").TextEntry<"SCI·COM">;
            readonly sciops: import("../..").TextEntry<"SCI·COM">;
            readonly command: "SHIPMASTER";
            readonly cupola: "CUPOLA";
        } & import("../../types").TextGroup;
        readonly needed: import("../..").TextEntry<"⚠ NEEDED">;
        readonly open: import("../..").TextEntry<"open">;
        readonly cannoneers: import("../..").TextEntry<"CANNONEERS · OPTIONAL">;
        readonly cannoneersShort: import("../..").TextEntry<"CANNON">;
        readonly noGunners: import("../..").TextEntry<"0 OF {total}">;
        readonly gunnerMore: import("../..").TextEntry<"{name} +{more}">;
    } & import("../../types").TextGroup;
    readonly join: {
        readonly kickerRemote: import("../..").TextEntry<"REMOTE BRIDGE">;
        readonly kickerNoNetwork: import("../..").TextEntry<"NO NETWORK LINK">;
        readonly kickerRoomCode: import("../..").TextEntry<"ROOM CODE">;
        readonly kickerMirror: import("../..").TextEntry<"MIRROR THIS SCREEN">;
        readonly caption: import("../..").TextEntry<"SCAN TO JOIN">;
        readonly captionMirror: import("../..").TextEntry<"⚠ NOT FOR JOINING">;
        readonly remoteBody: import("../..").TextEntry<"TAKE A SEAT VIA MY STATION ABOVE">;
        readonly noLanBody: import("../..").TextEntry<"⚠ CONNECT THIS MACHINE AND YOUR PHONES TO THE SAME WI-FI, THEN RELAUNCH">;
        readonly kickerStreamer: import("../..").TextEntry<"STREAMER MODE">;
        readonly codeHidden: import("../..").TextEntry<"••••">;
        readonly streamerPlaque: import("../..").TextEntry<"JOIN CODES HIDDEN">;
        readonly streamerBody: import("../..").TextEntry<"USE COPY LINK TO INVITE PLAYERS">;
        readonly streamerBodyMirror: import("../..").TextEntry<"COPY LINK NOW COPIES THE MIRROR LINK">;
        readonly copyLink: import("../..").TextEntry<"COPY LINK">;
        readonly copied: import("../..").TextEntry<"COPIED ✓">;
        readonly castJoinQr: import("../..").TextEntry<"JOIN QR">;
        readonly castBackToJoinQr: import("../..").TextEntry<"BACK TO JOIN QR">;
        readonly castJoinLink: import("../..").TextEntry<"JOIN LINK">;
        readonly castBackToJoinLink: import("../..").TextEntry<"BACK TO JOIN LINK">;
        readonly castAnotherTv: import("../..").TextEntry<"ANOTHER TV">;
        readonly castShowOnAnotherTv: import("../..").TextEntry<"SHOW ON ANOTHER TV">;
    } & import("../../types").TextGroup;
    readonly crew: {
        readonly kicker: import("../..").TextEntry<"CREW">;
        readonly reconnecting: import("../..").TextEntry<"⚠ RECONNECTING…">;
        readonly solo: import("../..").TextEntry<"SOLO? PICK THE WREN · ONE SEAT, ALL DUTIES">;
        readonly kickerNobody: import("../..").TextEntry<"CREW · NOBODY SEATED YET">;
        readonly kickerPicks: import("../..").TextEntry<"CREW · PLAYERS PICK SEATS ON THEIR OWN DEVICES">;
        readonly kickerNobodyShort: import("../..").TextEntry<"NOBODY SEATED YET">;
        readonly guide: {
            readonly step1: import("../..").TextEntry<"OPEN YOUR STATION">;
            readonly step2: import("../..").TextEntry<"CHOOSE YOUR DUTY">;
            readonly step2Sub: import("../..").TextEntry<"ON YOUR DEVICE · EACH PLAYER PICKS ONE">;
            readonly soloSub: import("../..").TextEntry<"ONE SEAT · TAKE SHIPMASTER">;
            readonly step3Remote: import("../..").TextEntry<"THE HOST LAUNCHES THE MISSION">;
            readonly step3Local: import("../..").TextEntry<"PRESS LAUNCH">;
            readonly thisComputerStation: import("../..").TextEntry<"THIS COMPUTER · THE \"MY STATION\" TAB">;
            readonly thisPhoneMenu: import("../..").TextEntry<"THIS PHONE · ☰ MENU ▸ PLAY A STATION">;
            readonly everyoneScan: import("../..").TextEntry<"EVERYONE ELSE · SCAN THE QR CODE">;
            readonly phonesScan: import("../..").TextEntry<"PHONES & TABLETS · SCAN THE QR CODE">;
            readonly everyoneLinkStreamer: import("../..").TextEntry<"EVERYONE ELSE · OPEN THE LINK FROM COPY LINK">;
            readonly phonesLinkStreamer: import("../..").TextEntry<"PHONES & TABLETS · OPEN THE LINK FROM COPY LINK">;
            readonly openLink: import("../..").TextEntry<"OPEN THE LINK IN A NEW TAB">;
            readonly thisScreenOpenLink: import("../..").TextEntry<"THIS COMPUTER · OPEN THE LINK IN A NEW TAB">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly modded: {
        readonly badge: import("../..").TextEntry<"MODDED ROOM">;
    } & import("../../types").TextGroup;
    readonly launch: {
        readonly cta: import("../..").TextEntry<"LAUNCH">;
        readonly waiting: import("../..").TextEntry<"WAITING FOR CREW">;
        readonly crewed: import("../..").TextEntry<{
            readonly one: "{seated} OF {count} STATION CREWED · {ready} READY";
            readonly other: "{seated} OF {count} STATIONS CREWED · {ready} READY";
        }>;
        readonly crewedShort: import("../..").TextEntry<"{seated}/{core} CREWED · {ready} READY">;
        readonly gunners: import("../..").TextEntry<{
            readonly one: "+{count} CANNONEER";
            readonly other: "+{count} CANNONEERS";
        }>;
        readonly gunnersShort: import("../..").TextEntry<"+{n} CANNON">;
        readonly blocked: import("../..").TextEntry<"⚠ NOBODY IS SEATED — TAKE A STATION FIRST">;
        readonly reconnecting: import("../..").TextEntry<"⚠ {seat} RECONNECTING...">;
        readonly overwrites: import("../..").TextEntry<"⚠ LAUNCH OVERWRITES {name}'S SAVE">;
        readonly assets: import("../..").TextEntry<"LOADING MOD FILES · {done} OF {total} DEVICES · {percent}%">;
        readonly assetsShort: import("../..").TextEntry<"MOD FILES {percent}%">;
        readonly preparing: import("../..").TextEntry<"PREPARING MOD FILES...">;
        readonly anyway: import("../..").TextEntry<"LAUNCH ANYWAY">;
        readonly hostLaunches: import("../..").TextEntry<"THE HOST LAUNCHES THE MISSION">;
        readonly hostLaunchesShort: import("../..").TextEntry<"THE HOST LAUNCHES">;
        readonly openLinkTakeStation: import("../..").TextEntry<"OPEN THE LINK IN A NEW TAB TO TAKE A STATION">;
        readonly openLinkShort: import("../..").TextEntry<"OPEN THE LINK IN A NEW TAB">;
        readonly needs: import("../..").TextEntry<"⚠ NEEDS {seats}">;
        readonly needsCount: import("../..").TextEntry<"⚠ NEEDS {n} MORE CREW">;
        readonly smallerShip: import("../..").TextEntry<"◀ ▶ PICK A SMALLER SHIP">;
        readonly smallerShipShort: import("../..").TextEntry<"◀ ▶ SMALLER SHIP">;
        readonly smallerShipMini: import("../..").TextEntry<"◀ ▶ SMALLER">;
        readonly scanTakeStation: import("../..").TextEntry<"SCAN THE QR OR OPEN YOUR STATION">;
        readonly scanShort: import("../..").TextEntry<"SCAN QR OR OPEN YOUR STATION">;
        readonly linkTakeStation: import("../..").TextEntry<"COPY LINK OR OPEN YOUR STATION">;
        readonly linkShort: import("../..").TextEntry<"COPY LINK OR OPEN STATION">;
        readonly newRunAs: import("../..").TextEntry<"NEW RUN AS {name}">;
        readonly newRunUnnamed: import("../..").TextEntry<"NEW RUN · UNNAMED SHIP">;
        readonly toastHullLoaded: import("../..").TextEntry<"{name}'S HULL LOADED — CREW, RESEAT, THEN RESUME">;
        readonly toastHullChanged: import("../..").TextEntry<"HULL CHANGED — CREW, PICK YOUR SEATS AGAIN">;
    } & import("../../types").TextGroup;
    readonly saves: {
        readonly kicker: import("../..").TextEntry<"RESUME A SAVED SHIP">;
        readonly denyReason: import("../..").TextEntry<"⚠ NOBODY IS SEATED — SEAT CREW FIRST">;
        readonly loadWarning: import("../..").TextEntry<"⚠ SWITCHES TO {label} — CREW RESEATS, THEN RESUME">;
        readonly resume: import("../..").TextEntry<"RESUME {name}">;
        readonly load: import("../..").TextEntry<"LOAD {name}">;
        readonly crewCount: import("../..").TextEntry<"{n} CREW">;
        readonly crewUnrecorded: import("../..").TextEntry<"CREW UNRECORDED">;
        readonly sectorLine: import("../..").TextEntry<"SECTOR {sector} · {label} · {crew}">;
        readonly sectorLineShort: import("../..").TextEntry<"SECTOR {sector} · {label}">;
        readonly needsCrew: import("../..").TextEntry<"⚠ NEEDS {n} MORE CREW TO RESUME">;
        readonly seatCrewFirst: import("../..").TextEntry<"SEAT CREW FIRST">;
        readonly needsMods: import("../..").TextEntry<"⚠ NEEDS: {mods}">;
        readonly modsUpdated: import("../..").TextEntry<"⚠ MODS UPDATED: {mods}">;
    } & import("../../types").TextGroup;
    readonly ship: {
        readonly kicker: import("../..").TextEntry<"SHIP">;
        readonly nameKicker: import("../..").TextEntry<"SHIP NAME">;
        readonly draftStrip: import("../..").TextEntry<"SHIP NAME ▸ {draft}">;
        readonly stat: {
            readonly hull: import("../..").TextEntry<"HULL">;
            readonly reactor: import("../..").TextEntry<"REACTOR">;
            readonly beams: import("../..").TextEntry<"BEAMS">;
            readonly guns: import("../..").TextEntry<"GUNS">;
            readonly tubes: import("../..").TextEntry<"TUBES">;
            readonly torps: import("../..").TextEntry<"TORPS">;
        } & import("../../types").TextGroup;
        readonly statLineA: import("../..").TextEntry<"HULL {hull} · REACTOR {reactor} · BEAMS {beams}">;
        readonly statLineB: import("../..").TextEntry<"GUNS {guns} · TUBES {tubes} · TORPS {torps}">;
        readonly unseat: import("../..").TextEntry<"⚠ CHANGING SHIP UNSEATS {n} CREW">;
        readonly namePlaceholder: import("../..").TextEntry<"UNNAMED SHIP">;
        readonly verbName: import("../..").TextEntry<"NAME">;
        readonly verbRename: import("../..").TextEntry<"RENAME">;
        readonly keySave: import("../..").TextEntry<"SAVE">;
        readonly keyCancel: import("../..").TextEntry<"CANCEL">;
        readonly helperCollideEdit: import("../..").TextEntry<"⚠ A SAVED SHIP HAS THIS NAME — LAUNCH OVERWRITES IT">;
        readonly helperEditing: import("../..").TextEntry<"KEYBOARD ▸ DONE SAVES">;
        readonly helperCollide: import("../..").TextEntry<"⚠ LAUNCH OVERWRITES THIS SAVE">;
    } & import("../../types").TextGroup;
    readonly upgrades: {
        readonly kicker: import("../..").TextEntry<"UPGRADES">;
        readonly banked: import("../..").TextEntry<"◈ {banked} BANKED">;
        readonly earn: import("../..").TextEntry<"EARN ◈ SALVAGE ON MISSIONS">;
        readonly bankedEarn: import("../..").TextEntry<"◈ {banked} BANKED · EARN SALVAGE ON MISSIONS">;
        readonly installed: import("../..").TextEntry<"✓ INSTALLED">;
        readonly alreadyInstalled: import("../..").TextEntry<"✓ ALREADY INSTALLED">;
        readonly buy: import("../..").TextEntry<"BUY ◈ {cost}">;
        readonly buyPhone: import("../..").TextEntry<"BUY ◈{cost}">;
        readonly needPhone: import("../..").TextEntry<"NEED ◈{need}">;
        readonly need: import("../..").TextEntry<"NEED ◈ {need}">;
        readonly needMore: import("../..").TextEntry<"NEED ◈ {need} MORE">;
        readonly warnNeedMorePhone: import("../..").TextEntry<"⚠ NEED ◈{need} MORE">;
        readonly warnNeedMore: import("../..").TextEntry<"⚠ NEED ◈ {need} MORE">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
