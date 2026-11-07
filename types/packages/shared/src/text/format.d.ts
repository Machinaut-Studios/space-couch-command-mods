/**
 * The saved-ship crew line is cut at 80 characters. The server used to cut before saving; the
 * cut now happens after rendering so every language is cut on what the player sees. Old saves
 * that already carry a pre-cut English line pass through unchanged.
 */
export declare function fitCrewLine(rendered: string): string;
