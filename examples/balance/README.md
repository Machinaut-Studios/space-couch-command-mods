# Glass Cannon: a Balance Mod

A Balance Mod changes numbers the game already has and adds nothing new. This one makes every beam hit three times as hard, recharge faster and reach farther, and makes every hull less than half as thick.

## What to look for

1. In the lobby with the Mod on, look at the hull selector. The Sovereign (the 5-crew cruiser) shows **HULL 55** instead of 120. Launch, and the hull gauge is tiny.
2. Fire the beams at a Raptor. A shot or two destroys it (72 damage a shot, against its 60 hull and 30 shield).
3. The enemies' hulls are as stock, but yours is thin, so a few hits and the bridge goes dark. Shields matter much more.

The host sends the numbers, and every phone and the main screen use the same ones. They change only in the lobby.

## How it works

```
balance/
  mod.json              contributes: { "balance": "balance.json" }
  balance.json          a nested copy of the part of the balance table you want to change
```

`balance.json` holds only what changes: `combat.weaponDamage` (24 to 72), `combat.chargeTimeSec` (2.4 to 1.6), `combat.maxWeaponRange` (720 to 900) and the `maxHull` of each of the six `shipClasses`. Press **EXPORT ENGLISH TEMPLATE** on the MODS screen for `_balance-reference.json`, the whole table with every number. The MODS screen reports a key the game does not have (a typo) and ignores it. It skips a number outside its safe range with a line that names it. See the [guide](../../GUIDE.md#balance).
