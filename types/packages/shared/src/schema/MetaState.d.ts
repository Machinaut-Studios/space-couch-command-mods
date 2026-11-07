import { ArraySchema, Schema, MapSchema } from "@colyseus/schema";
import { SavedShip } from "./SavedShip";
import { PackInfo } from "./PackInfo";
import { ModInfo } from "./ModInfo";
import { ModDevice } from "./ModDevice";
export declare class MetaState extends Schema {
    banked: number;
    /** unlockId (balance.unlocks key) → owned. */
    unlocks: MapSchema<boolean, string>;
    /** A resumable run snapshot exists for the host profile. */
    hasSave: boolean;
    /** The saved run's sector (0 when hasSave is false). */
    saveSector: number;
    /** The saved run's hull class ("" when hasSave is false). */
    saveShipClass: string;
    /** Named save slots for this host profile (multi-slot; death deletes). */
    savedShips: ArraySchema<SavedShip>;
    /** Ossari archive fragments recovered across runs (the meta currency of the
     * long retreat — lore + story-gated unlocks). */
    archiveFragments: number;
    /** The active Language Pack's id ("" = English). */
    language: string;
    /** Wire hash of the active pack ("" = English). Arrives before the pack bytes: clients compare it with the
     * hash they have APPLIED and request the pack when they differ. Never key a re-render on this. */
    packHash: string;
    /** The installed packs found in the mods folder (rebuilt on every scan). */
    packs: ArraySchema<PackInfo>;
    /** This host has a mods folder (false on phone hosts), so the Mods screen can tell "no packs" from "no folder". */
    modsFolder: boolean;
    /** Hide the room code, QR and addresses on every screen. Machine-level: seeded from `settings.json` when the
     * room is created (synchronously, so the first state already masks) and written back by `setStreamerMode`. */
    streamerMode: boolean;
    /** The installed Mods in Load Order, then the ones that cannot be used (rebuilt on every scan and on every
     * host change). Mods whose only Contribution is a language are not here: they are in `packs`. */
    mods: ArraySchema<ModInfo>;
    /** Hash of the Room Content every client must hold for this room's enabled Mods ("" = none: nothing to fetch and
     * launch is not gated). Set only in the lobby. Clients compare it with the hash they have APPLIED. */
    contentHash: string;
    /** What each connected device reports it holds of the current Room Content. Rows go when the device leaves. */
    devices: ArraySchema<ModDevice>;
    /** The host is copying the Mods' files right now (a few hundred ms, or up to 60 s on a slow disk): LAUNCH waits and cannot be forced. */
    contentPreparing: boolean;
    /** A TextStr (wire ref) the lobby and the Mods screen show: a Code Mod crashed or hung the last server, and was turned off ("" = none). */
    modNotice: string;
    /** A TextStr (wire ref) saying why the Mods keep this room from launching, in words the host can act on: the first scan is still
     * running, a Mod's files could not be copied (switch that Mod off on the MODS screen), a game in another room blocks the change,
     * or Code Mods are loading or need a restart ("" = nothing; the copy in progress shows as contentPreparing instead). */
    modBlock: string;
}
