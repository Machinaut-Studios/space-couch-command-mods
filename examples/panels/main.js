// The Code Mod half of Echo Scope. A Mod Panel cannot reach the game, the network or anything else: its only way out is
// scc.send(), which arrives here in game.onMessage(), and its only way in (besides its own state) is game.send().
//
// A Code Mod runs with full access to the host's computer. This one only counts and answers, but the game cannot know that,
// so the host has to approve it first (see README.md).

/** Kills per room: the Mod is loaded once and shared by every room, so a variable must not be the tally. */
const kills = new WeakMap();

/** @param {import("../../types").GameApi} game */
export function activate(game) {
  game.on("enemyKilled", ({ room }) => {
    const n = (kills.get(room) ?? 0) + 1;
    kills.set(room, n);
    game.send({ kills: n }); // every device in the room: each panel receives it as a "message" event
  });

  // A device's scc.send({ ping }) arrives here. Answer that device only.
  game.onMessage((payload, from) => {
    const ping = payload && typeof payload === "object" && !Array.isArray(payload) ? payload.ping : null;
    const who = from.host ? "the TV" : from.name || from.sessionId.slice(0, 4);
    game.send({ pong: typeof ping === "number" ? ping : null, who, kills: kills.get(from.room) ?? 0 }, from.sessionId);
  });
}
