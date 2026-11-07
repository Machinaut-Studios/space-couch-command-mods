import { type TextStr } from "@scc/shared/text/ref";
export interface OrderInput {
    id: string;
    requires: readonly string[];
    loadAfter: readonly string[];
    loadBefore: readonly string[];
}
export interface LoadOrder {
    /** Every input id, in Load Order (switched-off Mods included: they keep their place and their rules). */
    order: string[];
    /** Per Mod id: the Load Order problem lines (a cycle, an unmet requirement). */
    problems: Map<string, TextStr[]>;
    /** Mods that cannot run because a requirement is missing, off or itself blocked. */
    blocked: Set<string>;
}
export declare function resolveLoadOrder(inputs: readonly OrderInput[], saved: readonly string[], disabled: ReadonlySet<string>): LoadOrder;
