import { Schema, MapSchema, ArraySchema } from "@colyseus/schema";
import { Player } from "./Player";
import { Ship } from "./Ship";
import { Contact } from "./Contact";
import { Projectile } from "./Projectile";
import { RunState } from "./RunState";
import { ScreenState } from "./ScreenState";
import { LogEntry } from "./LogEntry";
import { MetaState } from "./MetaState";
import { HailState } from "./HailState";
import { JamSignal } from "./JamSignal";
import { StarSystem } from "./StarSystem";
import { RerouteState } from "./RerouteState";
import { Intercept } from "./Intercept";
import { ProbeState } from "./ProbeState";
import { SignalPlay } from "./SignalPlay";
export declare class GameState extends Schema {
    /** Server simulation tick; increments every 50ms (20 Hz, spec §7). */
    tick: number;
    /** Current game phase (spec §5). Starts in LOBBY. */
    phase: string;
    /** Human-facing room code (also a matchmaking filter, spec §6). */
    roomCode: string;
    /** sessionId of the viewport/TV host (the screen, not an officer). */
    hostId: string;
    /** Selected hull (ships.ts + balance.shipClasses key). Lobby-changeable. */
    shipClassId: string;
    /** Connected officer terminals, keyed by sessionId. */
    players: MapSchema<Player, string>;
    /** The one player ship. */
    ship: Ship;
    /** World contacts (asteroids/enemies/...), keyed by contact id. */
    contacts: MapSchema<Contact, string>;
    /** In-flight torpedoes & noisemakers, keyed by projectile id. */
    projectiles: MapSchema<Projectile, string>;
    /** The roguelike run: sector, salvage, encounter, jump drive (design §3). */
    run: RunState;
    /** The TV's swappable stage — "on screen" (design §4). */
    screen: ScreenState;
    /** The open comms channel with another ship, if any (design §9). */
    hail: HailState;
    /** The counter-signal duel (comms jamming minigame) — see JamSignal. */
    jam: JamSignal;
    /** The run's galaxy graph (star-map wave) — keyed by system id. */
    galaxy: MapSchema<StarSystem, string>;
    /** The engineer's conduit-routing restore minigame (offline-event wave). */
    reroute: RerouteState;
    /** SIGINT intercepts — the comms "ears" feed (short-lived; comms-only UI). */
    intercepts: ArraySchema<Intercept>;
    /** Ship's log (design §4): encounter beats, kills, jumps. Server-trimmed. */
    log: ArraySchema<LogEntry>;
    /** Host-profile meta: banked salvage + purchased unlocks (design §3.4). */
    meta: MetaState;
    /** The interactive probe mission (Duskers wave). APPENDED (wire convention). */
    probe: ProbeState;
    /** The passive signal Comms is monitoring (sound wave). APPENDED. */
    signalPlay: SignalPlay;
    /** DEMO BUILD: this room is running the capped Next Fest slice. Server-owned —
     * the clients cannot set it, they only read it for branding and the wishlist
     * CTA. Set once in onCreate; never flipped mid-run. APPENDED. */
    demo: boolean;
    /** DEMO BUILD: the run ended by reaching the sector cap rather than by dying.
     * Discriminates the two GAMEOVER endings so the end screens can say DEMO
     * COMPLETE instead of SHIP LOST without a new phase. APPENDED. */
    demoComplete: boolean;
}
