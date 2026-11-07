import { LogTone, type GameState } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
export declare const MINE_LOCKED = "LOCKED";
export declare function updateMines(state: GameState, dt: number, hooks: {
    fx: (msg: Record<string, unknown>) => void;
    log: (text: TextStr, tone: LogTone) => void;
}): void;
