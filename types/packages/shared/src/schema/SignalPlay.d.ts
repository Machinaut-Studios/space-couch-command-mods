import { Schema } from "@colyseus/schema";
export declare class SignalPlay extends Schema {
    active: boolean;
    /** The emitting contact (for range/board context). */
    contactId: string;
    /** Display designator, e.g. "74 Delta". */
    designator: string;
    /** Family label for the header, e.g. "ANOMALOUS SIGNAL" (SIGNAL_LABELS). */
    label: string;
    /** SIGNAL_VOICE_FILES key — what everyone hears. */
    voice: string;
}
