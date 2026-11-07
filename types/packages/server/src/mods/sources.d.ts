/** One subscribed Workshop item as the provider sees it. */
export interface WorkshopItem {
    /** The Steam published file id, digits only (a 64-bit number does not fit a JS number). */
    workshopId: string;
    /** Where Steam installed it; null while there is nothing readable yet. */
    folder: string | null;
    /** Steam is still fetching it (or an update): it has no readable folder to scan. */
    downloading: boolean;
}
export type WorkshopProvider = () => Promise<WorkshopItem[]>;
/** The Electron main process installs its Workshop reader once, before the first scan. null removes it (tests). */
export declare function setWorkshopProvider(fn: WorkshopProvider | null): void;
/**
 * The Workshop items to scan, in workshopId order, one per id. Empty when there is no provider; a provider that
 * throws or returns nonsense reads as empty (logged), so a Steam hiccup can never break a scan. Never rejects.
 */
export declare function workshopItems(): Promise<WorkshopItem[]>;
