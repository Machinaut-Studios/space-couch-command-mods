import type { Client } from "colyseus";
import { type Intent } from "@scc/shared";
import { type BridgeRoom } from "./rooms/BridgeRoom";
export declare const REPAIRABLE: Set<string>;
export declare function applyIntent(room: BridgeRoom, client: Client, intent: Intent): void;
export declare function sanitizeName(raw: unknown): string;
