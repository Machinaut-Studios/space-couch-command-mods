# Code Mod types

Generated from the game's source by `pnpm mods:types` in the Space Couch Command repository. Copy this folder into your Mod project.

- `index.d.ts` exports `GameApi`, `CodeModModule`, the event types (`ModEvents`, `ModEventName`), `ModClient` and `Json`.
- `tsconfig.paths.json` maps `@scc/shared` to the copied declarations. Extend it from your tsconfig.
- The declarations import types from `colyseus` and `@colyseus/schema`. Add them as dev dependencies.

`GameApi` is the documented surface. `game.room` is the real `BridgeRoom`, so its declarations are here too. Only what [GUIDE.md](../GUIDE.md) documents is promised to stay the same between releases.
