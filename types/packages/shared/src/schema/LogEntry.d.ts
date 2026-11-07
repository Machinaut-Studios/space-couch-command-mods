import { Schema } from "@colyseus/schema";
export declare class LogEntry extends Schema {
    id: string;
    tick: number;
    text: string;
    tone: string;
}
