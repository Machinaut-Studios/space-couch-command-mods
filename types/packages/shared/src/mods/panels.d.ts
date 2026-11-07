/** Most panels one room carries, across all its Mods. */
export declare const MAX_PANELS = 8;
/** The largest panel page, in bytes of UTF-8. It travels inline in the Room Content document. */
export declare const MAX_PANEL_BYTES: number;
/** A panel's id inside its Mod. */
export declare const PANEL_ID_RE: RegExp;
export type PanelTarget = "terminal" | "viewport";
export declare const PANEL_TARGETS: readonly PanelTarget[];
/** One panel in the Room Content document. `modId` is the Mod that wrote it: the page can never say otherwise. */
export interface RoomPanel {
    modId: string;
    id: string;
    /** A Text Key: one of the Mod's own (its English has it) or one of the game's. */
    titleKey: string;
    /** The whole page, UTF-8 text, up to MAX_PANEL_BYTES. Never served as a file: it only ever goes into a frame's `srcdoc`. */
    html: string;
    /** The clients that show it: the phones and terminals ("terminal"), the TV ("viewport"). */
    on: PanelTarget[];
}
/** UTF-8 length of a string, without building the bytes. */
export declare function utf8Length(s: string): number;
/**
 * Read the `panels` list of a Room Content document, host or client side. Entries that do not fit are skipped (a bad id, a Text Key
 * that is neither a Mod key nor the game's, a page over the limit, no target left); the first MAX_PANELS that fit are kept, and the
 * same Mod never has two panels with one id.
 */
export declare function normalizePanels(raw: unknown): RoomPanel[];
/** The room's panels, as the applied Room Content `hash` carries them. ([] and "" = none.) A page remounts its frames when `hash` changes. */
export declare function setRoomPanels(hash: string, panels: readonly RoomPanel[]): void;
/** The hash of the Room Content the panels came from. */
export declare function roomPanelsHash(): string;
/** Every panel of the applied Room Content that `target` shows. The same array while nothing changes (usable with useSyncExternalStore). */
export declare function roomPanels(target: PanelTarget): readonly RoomPanel[];
export declare function subscribeRoomPanels(fn: () => void): () => void;
/** The frame key of a panel: a new Room Content hash remounts every frame, so a Mod's page starts over with its new content. */
export declare const panelKey: (hash: string, p: Pick<RoomPanel, "modId" | "id">) => string;
/** A `modMessage` room message arrived (`{ modId, payload }`). Each live panel takes the ones that are its Mod's (PanelSession.deliver). */
export declare function publishModMessage(msg: unknown): void;
export declare function subscribeModMessages(fn: (msg: unknown) => void): () => void;
