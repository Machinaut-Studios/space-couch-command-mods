export interface SystemDemand {
    id: string;
    demand: number;
    priority: number;
}
export interface DistributeOptions {
    lifeSupportId: string;
    lifeSupportFloor: number;
}
export interface DistributeResult {
    /** Granted units/sec per system id. */
    allocated: Record<string, number>;
    /** Sum of REQUESTED draws (demand × priority) — compared to output for overdraw. */
    totalDemand: number;
    /** True when the requested draw exceeds output (something can't be funded). */
    scarce: boolean;
}
export declare function distributePower(reactorOutput: number, systems: SystemDemand[], // in funding order — discretionary sinks last
opts: DistributeOptions): DistributeResult;
