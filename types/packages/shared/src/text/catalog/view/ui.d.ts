export declare const ui: {
    readonly boot: {
        readonly skipHint: {
            readonly touch: import("../..").TextEntry<"HOLD TO SKIP">;
            readonly keyboard: import("../..").TextEntry<"HOLD [SPACE] TO SKIP">;
        } & import("../../types").TextGroup;
        readonly crewReady: import("../..").TextEntry<"CREW READY {ready}/{total}">;
        readonly test: {
            readonly mainframe: {
                readonly label: "ORACLE MAINFRAME 9";
                readonly status: import("../..").TextEntry<"ONLINE">;
            } & import("../../types").TextGroup;
            readonly memory: {
                readonly label: "CORE MEMORY 262144K";
                readonly status: import("../..").TextEntry<"VERIFIED">;
            } & import("../../types").TextGroup;
            readonly nav: {
                readonly label: "NAV COMPUTER";
                readonly status: import("../..").TextEntry<"NOMINAL">;
            } & import("../../types").TextGroup;
            readonly sensors: {
                readonly label: "SENSOR ARRAY";
                readonly status: import("../..").TextEntry<"CALIBRATED">;
            } & import("../../types").TextGroup;
            readonly weapons: {
                readonly label: "WEAPONS INTERLOCK";
                readonly status: import("../..").TextEntry<"SAFE">;
            } & import("../../types").TextGroup;
            readonly reactor: {
                readonly label: "REACTOR CONTAINMENT";
                readonly status: import("../..").TextEntry<"STABLE">;
            } & import("../../types").TextGroup;
            readonly lifeSupport: {
                readonly label: "LIFE SUPPORT";
            } & import("../../types").TextGroup;
            readonly cryo: {
                readonly label: "CRYO BAY";
                readonly status: import("../..").TextEntry<"{crew} OCCUPIED">;
            } & import("../../types").TextGroup;
            readonly cartography: {
                readonly label: "STELLAR CARTOGRAPHY";
                readonly status: import("../..").TextEntry<"LOADED">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
        readonly line: {
            readonly interfaceReady: "INTERFACE 2037 READY";
            readonly registry: import("../..").TextEntry<"UES {ship} // REGISTRY 47-ND-1120">;
            readonly crew: import("../..").TextEntry<"CREW {crew} · AI 01 · MISSION: [CLASSIFIED]">;
            readonly awaiting: import("../..").TextEntry<"> AWAITING PRIORITY TRAFFIC . . .">;
        } & import("../../types").TextGroup;
        readonly defaultShip: import("../..").TextEntry<"HERALD">;
        readonly signalDivider: import("../..").TextEntry<"── INCOMING SIGNAL ──">;
        readonly priorityHeader: import("../..").TextEntry<"◉ PRIORITY ONE — INCOMING TRANSMISSION // FLEET COMMAND">;
        readonly transmission: {
            readonly anomaly: import("../..").TextEntry<"Long-range sensors have detected an anomaly on a direct heading for the inner colonies: a moving VOID, a region of space that returns no mass, no light and no signal.">;
            readonly orders: import("../..").TextEntry<"Intercept it, find its origin, assess the threat and report back.">;
        } & import("../../types").TextGroup;
        readonly telemetry: {
            readonly line: import("../..").TextEntry<"> {line} ..... OK">;
            readonly plot: "PLOTTING INTERCEPT VECTOR";
            readonly paging: "PAGING NAV TABLES // SECTOR CHARTS";
            readonly align: "ALIGNING INERTIAL PLATFORM";
            readonly spool: "SPOOLING JUMP CAPACITOR TEST CELL";
            readonly crossCheck: "CROSS-CHECKING SENSOR BASELINE";
            readonly arming: "ARMING TELEMETRY BUS";
            readonly cryo: "CRYO REVIVAL CYCLE COMPLETE";
            readonly stations: "CREW STATIONS REPORTING IN";
            readonly uplink: "FLEET COMMAND UPLINK: LOCKED";
            readonly signalFloor: "SIGNAL FLOOR NOMINAL // NO RETURN FROM THE VOID";
        } & import("../../types").TextGroup;
        readonly solution: import("../..").TextEntry<"INTERCEPT SOLUTION {bar} {pct}%">;
        readonly ready: import("../..").TextEntry<"SYSTEMS READY">;
        readonly begin: import("../..").TextEntry<"► BEGIN MISSION">;
    } & import("../../types").TextGroup;
    readonly credits: {
        readonly header: import("../..").TextEntry<"SB-OS 2.4 // CREDITS">;
        readonly title: import("../..").TextEntry<"SPACE COUCH COMMAND">;
        readonly soundtrack: import("../..").TextEntry<"◇  ORIGINAL SOUNDTRACK  ◇">;
        readonly licence: import("../..").TextEntry<"Music licensed from White Bat Audio, used with permission.">;
        readonly copyright: import("../..").TextEntry<"© 2026 Machinaut Studios LLC. All rights reserved.">;
        readonly close: {
            readonly touch: import("../..").TextEntry<"TAP ANYWHERE TO CLOSE">;
            readonly keyboard: import("../..").TextEntry<"ESC / C — CLOSE">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly menuChip: {
        readonly label: import("../..").TextEntry<"MENU">;
    } & import("../../types").TextGroup;
    readonly controls: {
        readonly header: import("../..").TextEntry<"SB-OS 2.4 // CONTROLS">;
        readonly hint: {
            readonly keyboard: import("../..").TextEntry<"ESC OR ? CLOSE">;
            readonly touch: import("../..").TextEntry<"TAP ANYWHERE TO CLOSE">;
        } & import("../../types").TextGroup;
        readonly scope: {
            readonly anywhere: import("../..").TextEntry<"ANYWHERE">;
            readonly lobby: import("../..").TextEntry<"IN THE LOBBY">;
            readonly gameOver: import("../..").TextEntry<"GAME OVER">;
        } & import("../../types").TextGroup;
        readonly action: {
            readonly menu: "OPEN THE SETTINGS MENU";
            readonly controls: "SHOW THIS LIST OF KEYS";
            readonly mute: "MUTE THE BRIDGE SPEAKER";
            readonly theme: "CYCLE THE CRT PALETTE";
            readonly fullscreen: "FILL THE WHOLE DISPLAY";
            readonly hull: "PICK THE SHIP · PREVIOUS / NEXT";
            readonly launch: "LAUNCH WHEN READY";
            readonly upgrades: "OPEN THE UPGRADES PAGE";
            readonly buy: "BUY THE UPGRADE WITH THAT NUMBER";
            readonly name: "NAME THE SHIP";
            readonly savesStep: "STEP THROUGH SAVED SHIPS";
            readonly continue: "CONTINUE THE SELECTED SAVED SHIP";
            readonly credits: "SOUNDTRACK CREDITS";
            readonly restart: "START A NEW RUN";
            readonly toLobby: "RETURN TO THE LOBBY";
        } & import("../../types").TextGroup;
        readonly note: {
            readonly stations: import("../..").TextEntry<"CREW PLAY THEIR STATIONS ON PHONES OR TABLETS">;
            readonly stationsApp: import("../..").TextEntry<"CREW PLAY ON PHONES OR TABLETS · OR OPEN THE \"MY STATION\" TAB IN THIS APP">;
            readonly runKeys: import("../..").TextEntry<"ESC OPENS THE MENU · THE SHIP KEEPS FLYING">;
            readonly hostOnly: import("../..").TextEntry<"LOBBY AND RESULT KEYS ARE THE HOST'S">;
            readonly touch: import("../..").TextEntry<"KEYS NEED A KEYBOARD ON THIS SCREEN">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly settings: {
        readonly header: import("../..").TextEntry<"SB-OS 2.4 // HOST CONSOLE">;
        readonly hint: {
            readonly touch: "TAP A ROW · TAP OUTSIDE TO CLOSE";
            readonly keysClose: import("../..").TextEntry<"↑↓ SELECT · ENTER CONFIRM · ESC CLOSE">;
            readonly keysResume: import("../..").TextEntry<"↑↓ SELECT · ENTER CONFIRM · ESC RESUME">;
        } & import("../../types").TextGroup;
        readonly row: {
            readonly theme: import("../..").TextEntry<"THEME: {value}">;
            readonly themeWide: import("../..").TextEntry<"THEME: AMBER">;
            readonly sound: import("../..").TextEntry<"SOUND: {value}">;
            readonly soundWide: import("../..").TextEntry<"SOUND: OFF">;
            readonly streamer: import("../..").TextEntry<"STREAMER MODE: {value}">;
            readonly streamerWide: import("../..").TextEntry<"STREAMER MODE: OFF">;
            readonly fullscreen: import("../..").TextEntry<"FULLSCREEN: {value}">;
            readonly fullscreenWide: import("../..").TextEntry<"FULLSCREEN: OFF">;
            readonly station: import("../..").TextEntry<"PLAY A STATION ON THIS PHONE">;
            readonly joinHost: import("../..").TextEntry<"JOIN ANOTHER HOST">;
            readonly controls: import("../..").TextEntry<"CONTROLS">;
            readonly credits: "CREDITS";
            readonly close: import("../..").TextEntry<"CLOSE">;
            readonly resume: import("../..").TextEntry<"RESUME">;
            readonly restart: import("../..").TextEntry<"RESTART RUN">;
            readonly abandon: import("../..").TextEntry<"ABANDON RUN">;
        } & import("../../types").TextGroup;
        readonly desc: {
            readonly theme: "CYCLE THE CRT PALETTE (T)";
            readonly sound: "TOGGLE THE BRIDGE SPEAKER (M)";
            readonly streamer: import("../..").TextEntry<"HIDES THE CODE, QR AND ADDRESSES ON SCREEN">;
            readonly streamerBrowser: import("../..").TextEntry<"BROWSER BAR STILL SHOWS THE ADDRESS · USE THE APP">;
            readonly fullscreen: "FILL THE WHOLE DISPLAY (F)";
            readonly station: "SWAP THIS SCREEN FOR A CREW STATION";
            readonly joinHost: "STOP HOSTING — BACK TO THE HOST / JOIN SCREEN";
            readonly controls: "THE KEYS THIS SCREEN LISTENS FOR (?)";
            readonly credits: "SOUNDTRACK TRIBUTE — WHITE BAT AUDIO (C)";
            readonly closeLobby: "CLOSE THIS PANEL — BACK TO THE LOBBY";
            readonly resume: "CLOSE THIS PANEL — BACK TO THE BRIDGE";
            readonly restart: "RE-RUN FROM SECTOR 1";
            readonly abandon: "BANK SALVAGE — RETURN TO LOBBY";
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
