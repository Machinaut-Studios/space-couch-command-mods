# Victory Lap: a Code Mod

> **A Code Mod is a program. Once you approve it, it runs with the same access to your computer as you have: it can read, change and delete your files, use your network and run other programs. The game cannot check what it does.** Only approve a Code Mod from someone you trust, and read `main.js` first. This one is 38 lines and only touches the game.

Victory Lap shows four parts of the `game` API in one short file: events, `patchBalance`, `save` and `log`.

## What to look for

1. Turn it on at **Settings, MODS**. It shows **NEEDS APPROVAL**. Select it, read the screen, and choose **APPROVE AND TURN ON**. Approval is possible only in the desktop app.
2. Launch. The ship's log says **VICTORY LAP is on: beams hit 50% harder, and every kill pays 10 salvage.**
3. Destroy an enemy. The log says "Victory Lap: kill number 1, +10 salvage." and the run's salvage goes up by 10.
4. Jump. The log says "Sector 2. Kills so far: 1." Save, quit and CONTINUE, and it says "Victory Lap remembers 1 kills from the last time."

## How it works

```
code/
  mod.json              contributes: { "code": "main.js" }
  main.js               exports activate(game)
  jsconfig.json         type-checks main.js against ../../types
```

- `game.patchBalance({ combat: { weaponDamage: 36 } })` changes a number for everyone in the room, with the same rules as a balance file.
- `game.on("sectorArrival", ...)` and `game.on("enemyKilled", ...)` listen to events. They run on the game's simulation thread, so keep them short.
- `game.save.get()` and `game.save.set(json)` keep your Mod's data in the run's save, so CONTINUE brings the kill tally back.
- `game.log(text)` adds a line to the ship's log.

## Type checking

`jsconfig.json` points at the repository's `types/` folder, so an editor such as VS Code completes `game.` and flags mistakes. To check from the command line, run `npm install` and then `npm run typecheck` in the root of this repository. `main.js` tells the editor what `game` is with `/** @param {import("../../types").GameApi} game */`. In your own project, copy `types/` in and adjust that path.

See the [guide](../../GUIDE.md#code-mods) for every event and the approval rules.
