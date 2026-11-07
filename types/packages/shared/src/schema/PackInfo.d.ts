import { ArraySchema, Schema } from "@colyseus/schema";
export declare class PackInfo extends Schema {
    id: string;
    /** BCP 47 tag from the pack's manifest. */
    language: string;
    /** Display name and version come from the pack author and are shown as written. */
    name: string;
    version: string;
    /** 0..1 of the catalog's keys the pack covers. */
    coverage: number;
    /** False when the pack cannot be used (broken manifest or no usable entries). */
    ok: boolean;
    /** How many problem lines the checker produced. */
    problems: number;
    /** A TextStr (wire ref, ADR 0001): the one-line verdict, rendered by each client. Never English. */
    summary: string;
    /** Pack author from the manifest, shown as written ("" = none). */
    author: string;
    /** TextStr problem lines (packProblemLines, capped at PACK_INFO_MAX_LINES): the offending key is a raw param. */
    lines: ArraySchema<string>;
    /** Where the pack was found: "folder" (the mods folder) or "workshop" (a subscribed Steam Workshop item). */
    source: string;
    /** The Workshop item id for source "workshop" ("" for a folder). */
    workshopId: string;
}
