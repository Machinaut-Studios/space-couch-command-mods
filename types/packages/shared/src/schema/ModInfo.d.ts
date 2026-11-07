import { ArraySchema, Schema } from "@colyseus/schema";
export declare class ModInfo extends Schema {
    /** The Mod's id, or `folder:<dirname>` when it cannot be used (broken, duplicate): those rows are inert. */
    id: string;
    /** Display name and version come from the mod author and are shown as written. */
    name: string;
    version: string;
    /** Mod author from the manifest, shown as written ("" = none). */
    author: string;
    /** The Contribution kinds the manifest declares, shown as written (capped in count and length). */
    kinds: ArraySchema<string>;
    /** The host's switch. Every Mod is on until the host turns it off. */
    enabled: boolean;
    /** False when the Mod cannot be used: broken manifest or Contribution, duplicate id or a missing requirement. */
    ok: boolean;
    /** How many problem lines the scanner and the Load Order produced. */
    problems: number;
    /** TextStr problem lines (wire refs, ADR 0001), capped like PackInfo. */
    lines: ArraySchema<string>;
    /** Where the Mod was found: "folder" (the mods folder) or "workshop" (a subscribed Steam Workshop item). */
    source: string;
    /** The Workshop item id for source "workshop" ("" for a folder). Its id is `workshop:<id>` while the Mod cannot be used. */
    workshopId: string;
    /** A Workshop item Steam is still fetching: an inert placeholder row (REFRESH picks it up once it has arrived). */
    downloading: boolean;
    /** The Mod contributes code. Code Mods run with full access to the host's computer, so they stay off until the host approves them. */
    code: boolean;
    /** "none" (never approved: the Mod is off), "approved", or "changed" (a Workshop update changed the code the host approved: off until approved again). "" for a Mod with no code. */
    approval: string;
    /** The hash of the code the host is asked to approve ("" for a Mod with no code). The Mods screen sends it back, so an approval is for exactly this code. */
    codeHash: string;
}
