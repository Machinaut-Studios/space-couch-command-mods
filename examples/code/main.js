// Victory Lap: a small Code Mod that uses four parts of the `game` API.
//
//   events        game.on("sectorArrival" | "enemyKilled", ...)
//   patchBalance  beams hit 50% harder, for every screen in the room
//   save          the kill tally lives in the run's save, so CONTINUE brings it back
//   log           lines in the ship's log
//
// A Code Mod runs with full access to the host's computer. Nothing here uses it, but the game cannot tell, so the host has to
// approve the Mod first (see README.md).

const SALVAGE_PER_KILL = 10;

/** The kill tally from the run's save (0 on a fresh launch). */
function killsSoFar(/** @type {import("../../types").GameApi} */ game) {
  const saved = game.save.get();
  return saved && typeof saved === "object" && !Array.isArray(saved) && typeof saved.kills === "number" ? saved.kills : 0;
}

/** @param {import("../../types").GameApi} game */
export function activate(game) {
  // Balance: the same rules as a balance file, but chosen by code. Allowed while activate runs, and in the lobby.
  game.patchBalance({ combat: { weaponDamage: 36 } });

  // A sector arrival: "start" is the launch, "resume" is CONTINUE, "jump" is every jump after that.
  game.on("sectorArrival", ({ sector, reason }) => {
    if (reason === "start") game.log("VICTORY LAP is on: beams hit 50% harder, and every kill pays 10 salvage.");
    else if (reason === "resume") game.log(`Victory Lap remembers ${killsSoFar(game)} kills from the last time.`);
    else game.log(`Sector ${sector}. Kills so far: ${killsSoFar(game)}.`);
  });

  // An enemy ship was destroyed. `room` is the real room, so the run's salvage is one assignment away.
  game.on("enemyKilled", ({ room }) => {
    const kills = killsSoFar(game) + 1;
    room.state.run.salvage += SALVAGE_PER_KILL;
    game.save.set({ kills });
    game.log(`Victory Lap: kill number ${kills}, +${SALVAGE_PER_KILL} salvage.`);
  });
}
