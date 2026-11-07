/** Silhouette mass proxy: radius² (documented on balance.collision). */
export declare function collisionMass(radius: number): number;
/** Ram damage taken by a body of mass `ownMass` hit at `closingSpeed` (u/s,
 * relative velocity along the contact normal) by a body of mass `otherMass`.
 * Pass `otherMassive: true` for effectively-infinite attackers (planet/mega):
 * the mass ratio then bypasses the clamp at balance.collision.massiveRatio. */
export declare function ramDamage(closingSpeed: number, ownMass: number, otherMass: number, otherMassive?: boolean): number;
