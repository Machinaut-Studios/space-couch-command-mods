export type ThemeName = "green" | "amber" | "mixed";
export interface Palette {
    bg0: string;
    bg1: string;
    bg2: string;
    line: string;
    ink: string;
    inkDim: string;
    inkFaint: string;
    primary: string;
    primaryDeep: string;
    ok: string;
    okDeep: string;
    warn: string;
    warnDeep: string;
    danger: string;
    dangerDeep: string;
    science: string;
    glow: string;
}
export declare const THEMES: Record<ThemeName, Palette>;
/** A palette colour: six hex digits, as every slot above is written. */
export declare const PALETTE_HEX: RegExp;
/** Every colour slot of a palette, in the order the type lists them. */
export declare const PALETTE_SLOTS: (keyof Palette)[];
export declare const THEME_ORDER: ThemeName[];
export declare function isThemeName(v: unknown): v is ThemeName;
export declare function nextTheme(t: ThemeName): ThemeName;
/** Resolve the active theme from ?theme= → localStorage → default ("green"). */
export declare function resolveTheme(): ThemeName;
/** A Reskin's palette changes: per theme, the slots it recolours. */
export type PalettePatch = Partial<Record<ThemeName, Partial<Palette>>>;
/**
 * Recolour THEMES in place (both clients read it live) for a Room's Reskin. An empty patch restores the shipped
 * colours. Each call starts from the shipped colours, so patches never stack. Unknown themes and slots are ignored
 * (the server has already dropped them; this stays safe against a hand-made document).
 */
export declare function applyPalettePatch(patch: PalettePatch): void;
/**
 * The shipped colours of the theme `p` belongs to, whatever a Reskin has patched. For the screen that asks the host to approve a Code
 * Mod: a Reskin needs no approval, so it must not be able to hide the warning or the buttons (a palette recoloured to the same
 * colour as the background). A palette that is not one of THEMES is returned as it is.
 */
export declare function stockPalette(p: Palette): Palette;
/** "#2bff88" → 0x2bff88 for PixiJS. */
export declare function hexNum(hex: string): number;
