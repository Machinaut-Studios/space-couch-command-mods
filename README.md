# Space Couch Command Mods

Example Mods for Space Couch Command, and a guide to making your own. A Mod is a folder you put in the game's mods folder. It can change the game's text, colours and sounds, numbers, ships and quests, or its code. This repository has one small example of each kind, and each one is obvious in the game within a minute of switching it on.

| Example | Folder | Kind | What you will notice |
| --- | --- | --- | --- |
| **Pirate Talk** | [`examples/language`](examples/language) | Language Pack | The lobby says "SET SAIL" and "WAITING FOR SCALLYWAGS". |
| **Neon Boing** | [`examples/reskin`](examples/reskin) | Reskin | Hot-pink themes, a rubber boing on every button press, a new corsair face. |
| **Glass Cannon** | [`examples/balance`](examples/balance) | Balance | Beams hit three times as hard; hulls are less than half as thick. |
| **The Ember Thread** | [`examples/content`](examples/content) | Content, Mod text | A new hull (Skiff), enemy (Ironclad), anomalies (Ember Core and Ember Site), captain (Vex Ember) and a two-stage quest, in English and German. |
| **Victory Lap** | [`examples/code`](examples/code) | **Code Mod** | Beams hit harder, every kill pays salvage, and the log keeps a tally across saves. **Runs code: read the warning below.** |
| **Echo Scope** | [`examples/panels`](examples/panels) | Mod Panel and **Code Mod** | A live ship readout on the TV and phones that talks to a Code Mod. **Runs code: read the warning below.** |

Each example has its own README that says what to look for. You can switch all of them on together. Where two change the same thing, the one later in the Load Order wins, and the MODS screen says so.

Only the host installs Mods. Everyone else in the room gets what they need from the host automatically. The host needs the desktop version of the game. Phones that host a game can't load Mods in this version.

## Install a Mod

### From the Steam Workshop

Subscribe to the Mod on its Workshop page and Steam downloads it. In the game, open **Settings** (ESC on the main screen, or the **☰** button), choose **MODS** and press **REFRESH**. The Mod is listed and marked **WORKSHOP**. While Steam is still fetching it, the row says **DOWNLOADING**; press REFRESH again when the download has finished. Updates arrive the same way. Unsubscribing removes the Mod when the game quits.

You must launch the game through Steam for this to work.

### Into your mods folder

#### 1. Download

On this page, click the green **Code** button, then **Download ZIP**, and unzip it. The Mods are in the `examples` folder.

#### 2. Find your mods folder

The easiest way is to start the game, press **ESC** on the main screen (or click **☰**) to open **Settings**, choose **MODS**, then **OPEN MODS FOLDER**. Your file manager opens in the right place.

Or open it yourself:

| System | Mods folder |
| --- | --- |
| Windows | `%APPDATA%\Space Couch Command\mods`<br>which is usually `C:\Users\<you>\AppData\Roaming\Space Couch Command\mods` |
| macOS | `~/Library/Application Support/Space Couch Command/mods`<br>which is `/Users/<you>/Library/Application Support/Space Couch Command/mods` |
| Linux | `~/.config/Space Couch Command/mods`<br>(or `$XDG_CONFIG_HOME/Space Couch Command/mods` if you set that variable) |
| Steam Deck | `/home/deck/.config/Space Couch Command/mods` |

Some of these folders are hidden:

- Windows: paste `%APPDATA%\Space Couch Command` into the File Explorer address bar.
- macOS: in Finder, choose **Go**, then **Go to Folder…** (Shift-Command-G), and paste the path.
- Linux and Steam Deck: press Ctrl+H in the file manager to show hidden folders such as `.config`.

The demo uses `Space Couch Command Demo` instead of `Space Couch Command`, and it loads only Language Packs. If there is no `mods` folder yet, start the game once or create the folder yourself.

#### 3. Copy the Mod in

Copy the Mod's folder, for example `reskin`, into `mods`. Its `mod.json` must sit directly inside it:

```
mods/
  reskin/
    mod.json
    audio/
    faces/
```

A common mistake is copying the whole download, which leaves the Mod too deep (`mods/space-couch-command-mods-main/examples/reskin/mod.json`). The game won't find it there. The game ignores folders whose names start with `_` or `.`.

#### 4. Switch it on

1. In the lobby, open **Settings**, choose **MODS** and press **REFRESH**. The Mod is listed with what it contributes and any problems (these examples have none). Mods are on until you switch them off (ENTER, or tap the row), except Code Mods, which stay off until you approve them. The order of the list is the Load Order: where two Mods change the same thing, the later one wins. LEFT and RIGHT move a Mod.
2. A Language Pack (Pirate Talk) is not in that list. Back in Settings, change the **LANGUAGE** row to it.
3. A Mod that contributes more than a language puts a **MODDED ROOM** badge with the Mods' names in the lobby, and every phone downloads what it needs before launch.

Mods change only in the lobby. To uninstall one, delete its folder from `mods`.

## Code Mods run code on your computer

**Read this before you approve one.** A Code Mod is a program. Once you approve it, it runs inside the game on the host's machine **with full access to everything the host's user account can reach**: it can read, change and delete the host's files, use their network and run other programs. The game does not sandbox it and cannot check what it does. Your approval is the only protection, so the game keeps a Code Mod off until you approve it, in plain words, in the desktop app.

- Approve a Code Mod only if you trust the person who made it, and read its code first. The two examples here (`code` and `panels`) are short on purpose.
- Everything that does not need code (Reskins, Balance, new content, text, and a Mod Panel's page) is plain data and needs no approval. Prefer it.
- A Code Mod in your mods folder is approved by its `id` only. If you edit its code later, the game does not ask again.
- A Code Mod from the Steam Workshop is approved for that exact code. When an update changes any file, the Mod turns off until you approve it again.
- A Mod Panel's page is sandboxed (no network, no storage, no way out except the Mod channel), but the Code Mod it talks to is not.
- If a Code Mod crashes or hangs, the game turns it off, names it, and puts everyone back in the lobby on their last save.

## Make your own

You need only a text editor. Most Mods have nothing to build or compile.

1. Copy the example closest to what you want into your mods folder and rename the folder.
2. Open its `mod.json` and give it your own `id` (lower-case letters, digits, `.`, `_` and `-`; it must differ from every other Mod's), `name`, `version` and `author`. In the content and panels examples, also rename the `mod.<old id>.` prefix in the text files and in the JSON that uses it.
3. Edit the files. After every change, press **REFRESH** on the MODS screen. The new text, colours or numbers go out to every screen in the room, and the MODS screen lists anything the game dropped or skipped, with the file and the reason.
4. One `mod.json` can hold several Contributions: `contributes` may hold `language`, `reskin`, `balance`, `text`, `content`, `code` and `panels` together. The [guide](GUIDE.md) gives the format of each, every field and limit, and the checks the game makes.

Keep a copy of your Mod outside the mods folder, use an editor that checks JSON as you type, and test with a short run.

### Type definitions for Code Mods

The [`types/`](types) folder holds TypeScript declarations for the `game` object a Code Mod receives: `GameApi`, the event payloads, and the real `BridgeRoom` and shared-table types behind `game.room`. You can write a Code Mod in plain JavaScript and still get completion and error checking in VS Code and other editors:

1. Copy `types/` into your Mod project, or next to your Mod as in this repository.
2. Add a `jsconfig.json` that extends `types/tsconfig.paths.json` and turns on `checkJs`. [`examples/code/jsconfig.json`](examples/code/jsconfig.json) is a working one.
3. Install TypeScript, the Node typings and the two packages the declarations import: `npm install --save-dev typescript @types/node colyseus @colyseus/schema`.
4. Annotate your entry point:

```js
/** @param {import("../../types").GameApi} game */
export function activate(game) {
  game.on("enemyKilled", ({ room }) => { room.state.run.salvage += 5; });
}
```

Adjust the `../../types` path to wherever you put the folder. `npm run typecheck` in this repository checks both Code Mod examples. Only what the guide documents is promised to stay the same between game versions. `game.room` is the real object, and a game update can break a Mod that reaches into it.

## Publish your Mod

From the desktop app, with Steam running and the game launched through Steam: **Settings**, **MODS**, **PUBLISH TO WORKSHOP**, then pick your Mod from your mods folder (ENTER, or tap). Mods you subscribed to are not offered.

- The Mod folder needs a `preview.png` (or `preview.jpg`) directly in it, a plain file under 1 MiB. Every example has one, drawn for this repository. Without it nothing is uploaded.
- The Workshop title is the Mod's `name`. The page text is the optional `description` in `mod.json` (up to 8000 bytes). The tags are the Mod's kinds. The change note is `Version <version>`, so raise `version` when you publish an update.
- The game uploads a copy of the folder without dotfiles and dot-folders (such as `.git` and `.DS_Store`) and without links.
- **The first publish is Private.** Steam opens the item's Workshop page when the upload ends. There you accept Valve's [Workshop legal agreement](https://steamcommunity.com/sharedfiles/workshoplegalagreement) if you have not yet, and choose who can see the item. Set it to Public on that page to share it. Later uploads update the same item and keep your choice of visibility.
- The game records which Workshop item belongs to which Mod in `mods-published.json`, in the app's user-data folder next to `mods`.

To publish from a script, see "Automating uploads" in the [guide](GUIDE.md#steam-workshop).

## Contents

- `examples/`: the six Mods.
- [`GUIDE.md`](GUIDE.md): the modding guide, the reference for every format.
- `types/`: declarations for Code Mods, generated from the game.
- `tools/make-assets.mjs`: generates every image and sound in this repository, with no packages: PNGs drawn pixel by pixel and WAVs made of sine waves. Nothing is taken from the game. The game's own art and audio are not licensed for redistribution, so don't copy them into a Mod you share; draw or record your own.

## License

The Mods, images, sounds, tools and the guide in this repository are under the [MIT License](LICENSE). The `types/` folder is generated from the game and is included only so that Mod authors can type-check their code. Mods you contribute are shared under the MIT License too.
