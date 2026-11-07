import { type Palette } from "../theme";
import { type RoomPanel } from "./panels";
/** The iframe's `sandbox` attribute. Do not add to it. */
export declare const PANEL_SANDBOX = "allow-scripts";
/** The page's own policy, first in its srcdoc. It applies to everything after it, which is the bridge and the Mod's page. */
export declare const PANEL_CSP = "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; font-src data:; connect-src 'none'; form-action 'none'; base-uri 'none'; webrtc 'block'";
export { HOST_FRAME_CSP } from "./hostFrame";
/** Every message between the page and a frame carries `scc: PANEL_TAG`; anything else is not ours. */
export declare const PANEL_TAG = "scc.panel";
/** A message the parent may send into the frame. */
export type ToFrame = {
    scc: typeof PANEL_TAG;
    kind: "state";
    state: PanelView;
} | {
    scc: typeof PANEL_TAG;
    kind: "message";
    payload: unknown;
};
/**
 * The script that runs first inside the frame and gives the page `window.scc`:
 *   scc.on("state" | "message", fn)  subscribe; returns an unsubscribe function
 *   scc.send(payload)                 send JSON to the Mod's code on the host (false when it is not JSON)
 *   scc.state                         the latest slim view (null until the first one arrives)
 * It listens only to its parent window and speaks only to it. No `</script>` may appear in it.
 */
export declare const PANEL_BRIDGE: string;
/** The whole `srcdoc` of a panel: our policy, our bridge, then the Mod's page. */
export declare function buildPanelSrcdoc(html: string): string;
/** The slim view of the game a panel sees: this device's own ship and Seat, nothing about the other players. */
export interface PanelView {
    phase: string;
    sector: number;
    /** 0..100, of the hull's maximum. */
    hull: number;
    /** Charge of each deflector arc, 0..100, by arc. */
    shields: Record<string, number>;
    salvage: number;
    /** The Seat this device holds ("" = none) and the Duties it carries. */
    seat: string;
    duties: string[];
    /** The language the page shows (a tag), and the theme with its colours (Reskin colours included). */
    language: string;
    theme: {
        name: string;
        colors: Palette;
    };
}
/** The part of the room's state the view reads (the Colyseus schema satisfies it). */
export interface PanelStateLike {
    phase: string;
    shipClassId: string;
    run?: {
        sector: number;
        salvage: number;
    } | null;
    ship?: {
        hull: number;
        shields: Iterable<{
            arc: string;
            charge: number;
        }>;
    } | null;
    meta?: {
        unlocks?: {
            get(key: string): boolean | undefined;
        } | null;
    } | null;
    players?: {
        get(sessionId: string): {
            seatId: string;
        } | undefined;
    } | null;
}
/** Build the slim view for one device. `look` is what only the page knows: its language and its theme name. */
export declare function panelViewOf(state: PanelStateLike, sessionId: string | null, look: {
    language: string;
    theme: string;
}): PanelView;
/** Most messages one frame may send a second (each is also a potential intent): the rest are dropped. */
export declare const PANEL_SENDS_PER_SEC = 20;
/** What the parent forwards to the room for a frame's `scc.send`: the `modMessage` intent, tagged with the panel's Mod id. */
export interface PanelIntent {
    t: "modMessage";
    modId: string;
    payload: unknown;
}
export type PanelEvent = {
    kind: "ready";
} | {
    kind: "send";
    intent: PanelIntent;
};
/**
 * The parent's door for ONE frame. Accepts a message only when it came from that frame's own window, counts every message from it
 * against the rate (so a flood of junk is dropped as cheaply as a flood of real ones), and for a `send` takes the JSON payload under
 * the 16 KiB limit and nothing else from the message: the intent is tagged with the Mod id this gate was made with, never with
 * anything the page wrote.
 */
export declare class PanelGate {
    private readonly modId;
    private readonly frameWindow;
    private readonly now;
    private windowStart;
    private count;
    constructor(modId: string, frameWindow: () => unknown, now?: () => number);
    accept(ev: {
        source: unknown;
        data: unknown;
    }): PanelEvent | null;
}
/** A message from the Mod's code for the frame of Mod `modId`: its payload when it is JSON under the limit, else null. */
export declare function incomingPayload(msg: unknown, modId: string): {
    payload: unknown;
} | null;
/**
 * Counts a frame's `load` events. A frame loads once, from its srcdoc; a second load means it navigated (it set `location.href`, or
 * followed a link), which the policy above is meant to stop and this catches if it ever does not: the page removes the frame and
 * says so (`second()` is true on the second and every later load).
 */
export declare class FrameLoads {
    private n;
    second(): boolean;
}
/** How often the frame is told the state. */
export declare const PANEL_STATE_HZ = 4;
export interface PanelWindow {
    postMessage(message: unknown, targetOrigin: string): void;
}
export interface PanelSessionOptions {
    panel: Pick<RoomPanel, "modId">;
    /** The frame's window, or null when it is not there (yet). */
    frameWindow(): PanelWindow | null;
    /** Subscribe to `message` events on the page's window; returns the unsubscribe. */
    listen(fn: (ev: {
        source: unknown;
        data: unknown;
    }) => void): () => void;
    /** Send an intent to the room. */
    send(intent: PanelIntent): void;
    view(): PanelView;
    /** setInterval; returns the cancel. */
    every(fn: () => void, ms: number): () => void;
    now?: () => number;
}
/**
 * The parent's side of one panel: listens to the frame through its gate, forwards `send` to the room, tells the frame the state
 * four times a second once it has said it is ready, and passes it the Mod's messages. A frame's targetOrigin is "*" because a
 * sandboxed frame's origin is opaque; what is posted is the slim view and the Mod's own JSON, nothing else.
 */
export declare class PanelSession {
    private readonly o;
    private readonly gate;
    private stops;
    private ready;
    constructor(o: PanelSessionOptions);
    start(): void;
    stop(): void;
    private post;
    private postState;
    /** A `modMessage` from the room: passed on when it is this Mod's. */
    deliver(msg: unknown): void;
}
