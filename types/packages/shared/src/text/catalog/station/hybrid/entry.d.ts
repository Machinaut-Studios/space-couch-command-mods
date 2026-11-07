export declare function ui<const T extends string>(english: T, opts?: {
    max?: number;
    note?: string;
}): import("../../..").TextEntry<T>;
export declare function story<const T extends string>(english: T, note?: string): import("../../..").TextEntry<T>;
