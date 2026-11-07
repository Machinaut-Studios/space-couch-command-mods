import { type BalancePatch } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
/** The largest balance file: the whole stock table is far smaller. */
export declare const MAX_BALANCE_BYTES: number;
export interface ScannedBalance {
    /** What passed: only numbers the game has, within their bounds. */
    patch: BalancePatch;
}
/** Read and judge `file` (a clean relative path) in the Mod folder `dir`. `realDir` is its realpath. Never throws. */
/** `stock` is the table the numbers are judged against: the stock table, or with the Mod's own classes in it (step 5). */
export declare function scanBalance(dir: string, realDir: string, file: string, stock?: unknown): Promise<{
    balance: ScannedBalance | null;
    problems: TextStr[];
}>;
