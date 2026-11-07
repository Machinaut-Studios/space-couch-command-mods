import { SystemId, type GameState, type Ship, type Contact } from "@scc/shared";
export declare function powerRatio(ship: Ship, id: SystemId): number;
export declare function initCombat(state: GameState, cannoneerCount?: number): void;
export declare function updateCombat(state: GameState, dt: number): void;
export declare function enemyFireOnShip(state: GameState, attacker: Contact, damageMul?: number): boolean;
export declare function enemyFireOnContact(state: GameState, attacker: Contact, target: Contact, damageMul?: number): boolean;
export declare function damageShipAt(ship: Ship, x: number, y: number, amount: number): void;
export declare function damageContact(contact: Contact, amount: number): void;
export declare function damageContactWithSubTarget(state: GameState, contact: Contact, amount: number): boolean;
