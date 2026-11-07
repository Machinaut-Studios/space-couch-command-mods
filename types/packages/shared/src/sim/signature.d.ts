export interface SignatureInputs {
    throttle: number;
    overclock: boolean;
    evasive: boolean;
}
export declare function shipSignature(inp: SignatureInputs): number;
