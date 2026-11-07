/** `german` -> `de`, `schinese` -> `zh-Hans`, `latam` -> `es-419`. Case-insensitive; null for a name Steam does not use. */
export declare function steamLanguageToBcp47(api: string): string | null;
