/** Bump when the snapshot shape changes: a mismatched save loads as no-save.
 * v2: + stocks.cupolaGatling / stocks.cupolaRocket (the Cupola battery wave) —
 * a v1 save would silently continue with a dry cupola, so it loads as no-save
 * like every other shape change.
 * v3: + shipName (named multi-slot saves). EXCEPTION to the loads-as-no-save
 * rule (documented ruling): a v2 file is shape-identical minus the name, so
 * the pre-slot single file run-<profile>.json still loads — surfaced as the
 * ship "LEGACY" so an in-progress run isn't lost by the upgrade.
 * v3 + THE VOID wave (no bump — coordinated ruling): OPTIONAL run fields
 * unmakingFront / coloniesSaved / campaignStage / reputation. Missing =
 * defaults (front 0, no colonies, campaign stage 0, neutral ledger); always
 * written going forward. */
export declare const RUN_SAVE_VERSION = 3;
/** The migration slot name for a pre-v3 single-slot save. The name "LEGACY"
 * maps to the OLD un-suffixed path (fileFor), so the migrated run keeps
 * checkpointing — and hardcore-deleting — the same file it always lived in. */
export declare const LEGACY_SLOT = "LEGACY";
export interface RunSnapshotSystem {
    id: string;
    name: string;
    x: number;
    y: number;
    explored: boolean;
    signal: string;
    links: string[];
    wormholeTo: string;
    /** Environmental hazard ("" none / "debris") — OPTIONAL (hazard wave, the
     * VOID-fields ruling): missing on an older save = no hazard systems. */
    hazard?: string;
}
export interface RunSnapshot {
    v: number;
    app: string;
    savedAt: number;
    /** The save slot identity (v3): the crew-named ship, uppercase ≤18 chars
     * (setShipName sanitization). Never "" on disk — an unnamed launch is
     * auto-named by the room before its first checkpoint. A loaded v2 file
     * carries LEGACY_SLOT here (injected by loadRun). */
    shipName: string;
    shipClassId: string;
    run: {
        sector: number;
        salvage: number;
        kills: number;
        probes: number;
        questId: string;
        questStage: number;
        questLog: string;
        systemId: string;
        /** THE UNMAKING front 0..100 (default 0 — the pressure never recedes,
         * so it must survive a quit). */
        unmakingFront?: number;
        /** Colonies evacuated this run (default 0). */
        coloniesSaved?: number;
        /** THE VOID campaign stage 0..3 (default 0 — the room's campaign
         * director track; see shared/anomalies.ts VOID_CAMPAIGN). */
        campaignStage?: number;
        /** Faction reputation ledger (default {} → all factions neutral). */
        reputation?: Record<string, number>;
        /** Systems cleared this run (hazard wave, OPTIONAL — default 0): the
         * guild supply-line cadence must not reset on a quit-and-continue. */
        systemsCleared?: number;
    };
    ship: {
        hull: number;
        systems: Record<string, number>;
    };
    stocks: {
        torpedo: number;
        noisemaker: number;
        missile: number;
        rocket: number;
        rail: number;
        flare: number;
        cupolaGatling: number;
        cupolaRocket: number;
    };
    /** Officers aboard at this checkpoint (v3 OPTIONAL extension, same ruling as
     * THE VOID fields: a pre-crew save loads with the field missing — the lobby
     * shows "crew unrecorded" — and it is always written going forward). Holders
     * of a seat, connected or not; role is the seat's label on the saved hull. */
    crew?: {
        name: string;
        seatId: string;
        role: string;
    }[];
    galaxy: RunSnapshotSystem[];
    signalRolled: string[];
    curseArmed: boolean;
    /** Quest chains CLOSED this run (room-private ledger): advanceQuest refuses
     * to reopen them and the anomaly pool excludes their starter clues, so a
     * continued run can't re-farm a finished thread's payout. OPTIONAL for
     * back-compat within v2: a pre-ledger save loads as "no chains closed" —
     * the field is always written going forward. */
    completedQuestIds?: string[];
    /** The Mods that were on when this checkpoint was written, in Load Order (Mods step 5; no version bump — OPTIONAL: a save
     * without it was flown unmodded and needs no Mods). Language Mods are not listed: a language is the crew's choice. */
    mods?: RunMod[];
    /** What Code Mods keep with the run (Mods step 6b), by Mod id: JSON, up to 256 KiB each. OPTIONAL, no version bump: a save without it simply has none. */
    modData?: Record<string, unknown>;
}
/** One Mod a run was flown with. */
export interface RunMod {
    id: string;
    version: string;
}
/** The Mods a snapshot lists, defensively read (a hand-edited file must not crash the lobby). */
export declare function modsOf(snap: {
    mods?: unknown;
} | null | undefined): RunMod[];
/** Persist the arrival snapshot (temp-write + rename: no torn file on a crash). */
export declare function saveRun(profileId: string, shipName: string, snap: RunSnapshot): void;
/** Load the named ship's saved run, or null. A missing file is a quiet null; a
 * corrupt / version-mismatched / malformed one WARNs and is treated as
 * no-save — a bad file on disk must never crash the lobby. */
export declare function loadRun(profileId: string, shipName: string): RunSnapshot | null;
/** Delete the named ship's saved run (GAMEOVER / abandon — roguelike death is
 * death, and it takes exactly ONE slot with it). */
export declare function deleteRun(profileId: string, shipName: string): void;
/** Required-seat holders in a saved roster (the grandfathering count): optional cannoneer / cupola
 * holders were aboard but could not fly the ship, so they do not lower the resume bar. */
export declare function requiredCrewOf(shipClassId: string, crew: {
    seatId?: unknown;
}[] | undefined): number;
/**
 * What a saved run needs that is not here (Mods step 5). `active` is the Mods that are installed, switched on and usable now,
 * by id -> version. `missing` blocks the save: a Mod it was flown with is not active, or all are but the hull is not in the
 * table (an update removed it), in which case every Mod it was flown with is named, since the save does not say which owned
 * the hull. `updated` only warns: the Mod is here with another version.
 */
export declare function modGaps(mods: readonly RunMod[], shipClassId: string, active: ReadonlyMap<string, string>): {
    missing: string[];
    updated: string[];
};
/** One row of the lobby's SAVED SHIPS list (cheap headers off each slot file). */
export interface RunListing {
    name: string;
    sector: number;
    shipClassId: string;
    savedAt: number;
    /** Saved roster (see RunSnapshot.crew) — undefined on a pre-crew file. */
    crew?: {
        name: string;
        seatId: string;
        role: string;
    }[];
    /** Required seats of the hull the saved crew held (0 on a pre-crew file) — see resumeSeatsNeeded. */
    requiredCrew: number;
    /** The Mods the run was flown with (empty on a save from before Mods, or an unmodded run). */
    mods: RunMod[];
}
/** Every resumable slot for a profile, most recent first (the default
 * CONTINUE target). Reads headers only — unreadable/foreign files are
 * silently skipped (loadRun's warn covers the actual resume path). */
export declare function listRuns(profileId: string): RunListing[];
