export declare const TEMPLATE_DIR = "_english-template";
/**
 * Every Logical Asset path, one per line, for a modder writing a reskin: the left side of `contributes.reskin.assets`.
 * A file for the modder, not game text. `#` lines are notes.
 */
export declare function assetListFile(): string;
/**
 * The whole balance table as the game holds it now, for a modder writing a balance Contribution: the keys of
 * `balance.json` are these keys, and a Mod changes the numbers. Read from the live table, so it cannot fall behind the
 * game (with Mods on it shows the numbers in force). Text keys and ids in it are not changeable and are left out of any patch.
 */
export declare function balanceReferenceFile(): string;
/**
 * Write the template; returns the folder it was written to. Throws on I/O failure (the caller reports it), and
 * refuses when the template folder or any file in it is a symlink: the host must not be tricked into
 * overwriting something elsewhere through a link planted in the mods folder.
 */
export declare function writeTemplate(modsFolder: string): Promise<string>;
