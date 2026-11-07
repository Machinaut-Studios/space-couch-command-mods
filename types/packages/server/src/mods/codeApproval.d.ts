import type { ApprovedMod } from "./settings";
export type Approval = "none" | "approved" | "changed";
/** What the verdict needs of a Mod. */
export interface ApprovalSubject {
    id: string;
    source: "folder" | "workshop";
    /** The hash of the Mod's private copy; null when this scan did not copy it. */
    codeHash: string | null;
    /** The Steam item for a Workshop Mod ("" for a folder Mod). */
    workshopId: string;
}
/** The approvals as a map, so an id such as `constructor` is just an id. */
export declare function approvalMap(approved: Readonly<Record<string, ApprovedMod>> | undefined): Map<string, ApprovedMod>;
export declare function approvalFor(mod: ApprovalSubject, approved: ReadonlyMap<string, ApprovedMod>): Approval;
