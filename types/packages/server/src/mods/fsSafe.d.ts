/** `size` is the file's whole size (`mtimeMs` its modification time); `bytes` is all of it, or just the first `head` bytes when only the start was asked for. */
export type Read = {
    ok: true;
    bytes: Buffer;
    size: number;
    mtimeMs: number;
} | {
    ok: false;
    why: "unreadable" | "tooBig";
};
/** Open flags: never follow a symlink swapped in after the checks, never block on a FIFO swapped in either. */
export declare const OPEN_FLAGS: number;
/**
 * Read one regular file that lives inside `realDir`. Rejects symlinks (lstat), anything whose realpath
 * leaves the pack folder, non-files, and files over `max` bytes. The file is then opened with O_NOFOLLOW |
 * O_NONBLOCK and the HANDLE must be the same regular file the lstat saw (dev/ino) and still within `max`,
 * so a swap between the checks and the read cannot redirect or stall the scan. With `head`, only that many leading
 * bytes are read (the size cap still applies to the whole file): enough to tell a file's type without loading it.
 */
export declare function readContained(realDir: string, file: string, max: number, head?: number): Promise<Read>;
