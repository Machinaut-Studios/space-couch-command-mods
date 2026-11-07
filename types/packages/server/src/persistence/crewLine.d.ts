import { type TextStr } from "@scc/shared/text/ref";
/**
 * The lobby's saved-ship crew line ("Sulu·Helm / Riley·Tactical / …") as nested join refs, never a
 * server-side concat or cut: clients render it and fitCrewLine() it. A crew role is a seat-name
 * ref in new saves and finished English in saves written before the Text Catalog; fieldParam
 * nests the first and quotes the second raw, so both render as they always did.
 */
export declare function crewLineRef(crew: readonly {
    name: string;
    role: string;
}[]): TextStr | "";
