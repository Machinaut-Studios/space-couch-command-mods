/** The key this server was started with, or "" when it runs without one. */
export declare function requiredHostKey(env?: NodeJS.ProcessEnv): string;
/** Constant-time comparison. Both sides are hashed first so a different length cannot be told from a wrong value. */
export declare function hostKeyMatches(presented: unknown, expected: string): boolean;
