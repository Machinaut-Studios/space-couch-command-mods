# Echo Scope: a Mod Panel

A Mod Panel is an HTML page of your own, shown on the players' devices in a sealed frame. It can show the ship's state and talk to a Code Mod, and nothing else. Echo Scope is a panel plus the small Code Mod it talks to.

> **The Code Mod half runs with full access to your computer once you approve it** (see the warning in the [Code Mod example](../code/README.md)). This one only counts kills and answers pings. Read `main.js` before you approve it. The panel itself is sandboxed: no network, no storage, no access to the page around it.

## What to look for

1. Turn the Mod on at **Settings, MODS** and approve its code (**NEEDS APPROVAL**, then **APPROVE AND TURN ON**).
2. On the **main screen**, **Settings, MOD PANELS** opens the Echo Scope in a side panel with its own CLOSE key. On a **phone**, a **MOD** tab appears on every seat.
3. Launch. The panel shows the sector, the hull (a percentage and a bar) and the salvage. It updates several times a second, in the colours of the game's theme (try it together with the Neon Boing Reskin).
4. Press **PING THE CODE MOD**. The page says "Code Mod answered Ann in 12 ms." That message went from the panel to `main.js` and back. On the TV the answer names "the TV".
5. Destroy an enemy. The big **ENEMIES DESTROYED** number goes up on every device at once.

## How it works

```
panels/
  mod.json              contributes: text, code and panels
  main.js               the Code Mod: game.onMessage and game.send
  panels/scope.html     the page: one file, with its style and script inline
  text/en.json          the panel's title (a Text Key of the Mod's own)
  jsconfig.json         type-checks main.js against ../../types
```

In the page, `window.scc` is the whole connection to the game: `scc.on("state", fn)` for the ship's state, `scc.on("message", fn)` for what the Code Mod sends with `game.send`, and `scc.send(payload)` for the way back. The game tags every message with the Mod's id, so a page can only talk to its own Mod. The page cannot load anything, so everything it needs has to be in the one file.

See the [guide](../../GUIDE.md#mod-panels).
