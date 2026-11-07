export declare class EntityInterp {
    private buf;
    push(t: number, x: number, y: number, h: number): void;
    /** Sample at time t (typically now-100ms). Clamps to the buffer's ends. */
    sample(t: number): {
        x: number;
        y: number;
        h: number;
    } | null;
}
/** Bookkeeping map for a fleet of interpolated entities; prune what vanished. */
export declare class InterpPool {
    private pool;
    push(id: string, t: number, x: number, y: number, h: number): void;
    sample(id: string, t: number): {
        x: number;
        y: number;
        h: number;
    } | null;
    prune(liveIds: Set<string>): void;
}
