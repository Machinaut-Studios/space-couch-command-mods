/** The URL to load a Logical Asset from: the Room's override, else the stock file. `logical` has no leading slash. */
export declare function assetUrl(logical: string): string;
/** Replace ALL overrides at once (an empty map clears them) and tell the listeners, once. */
export declare function setAssetOverrides(next: ReadonlyMap<string, string>): void;
/** Run `cb` whenever the overrides change. Returns the unsubscribe function. */
export declare function onAssetsChanged(cb: () => void): () => void;
