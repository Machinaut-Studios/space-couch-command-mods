interface SearchLike {
    search: string;
}
interface StorageLike {
    getItem(key: string): string | null;
}
/** `?pseudo=1` or localStorage `scc_pseudo === "1"` turns the Pseudo-locale on. Returns whether it is on. */
export declare function initTextFlags(loc?: SearchLike, storage?: StorageLike): boolean;
export {};
