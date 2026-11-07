# Space Couch Command modding guide

This guide covers the folder formats for Language Packs, Reskins, Balance, new content, Code Mods and Mod Panels, how to install and publish them, and the rules the game checks. The [README](README.md) shows how to install and try the examples. This is the reference.

## Making a Language Pack

A **Language Pack** replaces the game's English text with another language. Any text your pack leaves out shows in English, so a pack can start small and grow. The host picks one language for the whole room: every phone and the main screen show it.

You need a text editor. There are no tools and nothing to build.

### Quick start

1. In the lobby, open **Settings**, choose **MODS**, then **EXPORT ENGLISH TEMPLATE**. The game writes a folder called `_english-template` into your mods folder (see "Where the mods folder is").
2. Copy that folder next to itself and rename the copy, for example `my-language`. The game ignores folders whose names start with `_` or `.`, so the copy must not start with one.
3. In the copy, rename `pack.template.json` to `pack.json` and fill it in (see below).
4. Translate the text in `en.json`. Delete the entries you have not translated yet.
5. Back in the game, press **REFRESH** on the MODS screen, then pick your pack in the **LANGUAGE** row of Settings.

When you edit a file and press REFRESH, the new text goes to every screen in the room. Language changes only in the lobby.

### Where the mods folder is

- **Desktop app:** the **OPEN MODS FOLDER** button on the MODS screen opens it. It is `mods` inside the app's user-data folder: on macOS `~/Library/Application Support/Space Couch Command/mods`, on Windows `%APPDATA%\Space Couch Command\mods`, on Linux `~/.config/Space Couch Command/mods`.
- **Phones that host the game** have no mods folder in this version, and the MODS screen says so. Host from the desktop app to use packs. Phones that only join a room get the pack from the host automatically.

### Folder layout

```
mods/
  my-language/
    pack.json        required: who and what the pack is
    en.json          any number of other .json files: your translated text
    ui.json          (they are merged; a key defined twice is reported, and the first file by name wins)
    MyFont.woff2     optional font, named in pack.json
```

The game reads only `.json` files directly in the pack folder. It ignores files starting with `.` (macOS creates `._` files on some drives). It never follows symbolic links: it skips a linked pack folder and rejects a linked file. A pack's text files may total 4 MiB.

### pack.json

```json
{
  "id": "de-community",
  "language": "de",
  "name": "Deutsch (Community)",
  "version": "1.2.0",
  "author": "Your Name",
  "gameVersion": "0.9.0",
  "font": "NotoSansJP.woff2",
  "sourceHashes": { "log.jump.charged": "3f9a01cc" }
}
```

| Field | Required | Meaning |
| --- | --- | --- |
| `id` | yes | Lower-case letters, digits, `.`, `_`, `-`; up to 64 characters, starting with a letter or digit. Must be unique. |
| `language` | yes | A BCP 47 tag such as `de`, `pt-BR`, `zh-Hans`. It also selects the plural rules. |
| `name` | yes | What the MODS screen and the language row show. Up to 64 characters. |
| `version` | yes | Your own version text, up to 32 characters. |
| `author` | no | Shown on the MODS screen. Up to 64 characters. |
| `gameVersion` | no | The game version the pack was written against. Up to 32 characters. |
| `font` | no | File name of a `.woff2` or `.ttf` in the pack folder; see Fonts. |
| `sourceHashes` | no | Text Key to the fingerprint of the English you translated from; see Stale entries. |

The game ignores unknown fields. If two folders use the same `id`, the first folder (sorted by name) wins and the other is listed as unusable.

### The text files

Text is nested JSON. Each level of nesting adds a dot to the key, so

```json
{ "log": { "jump": { "charged": "Sprung bereit" } } }
```

defines the Text Key `log.jump.charged`. You can also write a dotted key directly: `"log.jump.charged": "Sprung bereit"`. The exported `en.json` shows every key with its English.

- **Comments.** Any key that starts with `_` is ignored at every level. The export uses them for notes: `_charged` explains `charged`, and `_comment` explains a group and gives the maximum length. Add your own.
- **Not translated yet.** Delete the entry, or leave it as an empty string `""`. It shows in English.
- **Parameters.** Words in braces, such as `{count}` or `{sector}`, are filled in by the game. Spell each one exactly as in the English, and put it wherever your grammar wants it. The game drops an entry that adds a parameter the English does not have. It keeps an entry that leaves one out, with a warning.
- **Plurals.** An entry that depends on a number is an object of plural forms:

  ```json
  "ships": { "one": "{count} Schiff", "other": "{count} Schiffe" }
  ```

  The forms are the CLDR categories `zero`, `one`, `two`, `few`, `many` and `other`. `other` is required. Give every form your language uses; the checker tells you which are missing when the game can look them up. `_` notes may sit beside the forms.
- **Markup.** Text is plain. The game drops anything that looks like `<b>` or `&amp;`.
- **Length.** Interface text has to fit on buttons and gauges. The export notes the maximum for each entry. Longer text still loads, with a warning, and may be shortened with an ellipsis on screen. Hail lines should stay within 1.3 times the English length.

### Fonts

If your script needs a font the game does not have, add a `.woff2` or `.ttf` (at most 2 MiB) to the pack folder and name it in `pack.json`. The file must be a real font (the game checks its first bytes), must sit directly inside the pack folder, and must not be a link. The game registers it under a name it makes itself, so you never write CSS. A rejected font does not stop the translation from loading; the problem shows on the MODS screen.

Make sure the font's license allows redistribution with your pack.

### Stale entries

Put `sourceHashes` in `pack.json` (the exported `pack.template.json` has one for every key). When the English for a key changes in a later game version, the checker lists that key as stale, so you know what to re-read. Stale entries still load.

### Tips

- Start with the interface (`view.*`, `shell.*`) and the log lines you meet first, then the story text.
- Play a short run with the pack on. Crowded screens show clipped text first.
- Keep a copy of your pack outside the mods folder. The game never edits it.
- Idioms and rhythm matter more than word-for-word accuracy. The English is the meaning, not a template for your sentence order.
- A text editor that validates JSON saves time. The checker reports a file that is not valid JSON by name.

## Mods

A **Mod** is a folder in the mods folder that has a `mod.json`. The file says what the Mod contributes. This version understands seven kinds of contribution:

- `language`: a Language Pack inside the Mod.
- `reskin`: swaps the game's sounds, music and captain portraits and recolours the themes (see Reskins).
- `balance`: changes the game's numbers (see Balance).
- `text` and `content`: add captains, anomalies, quests, enemies and hulls, with the words to go with them (see New content and Mod text).
- `code`: runs your JavaScript in the host's game (see Code Mods, and read the warning there first).
- `panels`: your own HTML pages on the players' devices (see Mod Panels).

The MODS screen lists any other kind with a warning, and the game ignores it. The Mod's other contributions still load. A folder with a `pack.json` and no `mod.json` keeps working as described above, as a Mod that contributes a language.

```
mods/
  my-mod/
    mod.json         required: who and what the Mod is
    language/        the text files and the font of the language contribution
      en.json
      MyFont.woff2
```

```json
{
  "id": "de-community",
  "name": "Deutsch (Community)",
  "version": "1.2.0",
  "author": "Your Name",
  "gameVersion": "0.9.0",
  "requires": ["some-other-mod"],
  "loadAfter": ["another-mod"],
  "loadBefore": ["a-third-mod"],
  "contributes": {
    "language": {
      "tag": "de",
      "dir": "language",
      "font": "NotoSansJP.woff2",
      "sourceHashes": { "log.jump.charged": "3f9a01cc" }
    }
  }
}
```

`id`, `name`, `version`, `author` and `gameVersion` follow the same rules as in `pack.json`. `contributes` must hold at least one entry. `description` is optional free text, up to 8000 characters, that becomes the Workshop page text when you publish (see Steam Workshop). The game ignores unknown fields.

`id` is shared with Language Packs: if a `mod.json` folder and a `pack.json` folder use the same `id`, the first folder (sorted by name) that loads wins and the other is unusable. The MODS screen lists a `mod.json` that cannot be read or fails these checks as unusable, under its folder name.

**The language contribution.** `tag` is the BCP 47 tag, like `language` in `pack.json`. `dir` is the folder inside the Mod that holds the text files, and it defaults to `language`. It must be a plain folder name (no `/`, `\`, `.` or `..`) and a real folder, not a link. `font` and `sourceHashes` work as in `pack.json`, with the font in that folder. The text files, size limits and checks are the same as for a Language Pack. The Language Pack's id is the Mod's `id`.

**Relations.** `requires`, `loadAfter` and `loadBefore` are lists of up to 64 Mod ids. In `loadAfter` and `loadBefore`, the game ignores ids that are not installed. `requires` also means "load after". A Mod whose required Mod is missing, unusable or switched off cannot be used, and the MODS screen says which one is missing.

**Switching on and off.** Every Mod is on until the host switches it off on the MODS screen (ENTER, or tap the row), except a Code Mod, which stays off until the host approves it. A switched-off Mod's language is not offered. If it was the chosen language, the game shows English, and switching the Mod back on brings it back. A Mod that contributes only a language is not in this list. The **LANGUAGE** row in Settings controls it, as for any Language Pack.

**Load Order.** The MODS screen lists the Mods in their Load Order, and the host moves a Mod earlier or later with LEFT and RIGHT (or the buttons on the row). Where two Mods change the same thing, the later one wins. The host's machine saves the order. `loadAfter`, `loadBefore` and `requires` are always kept: the game skips a move that would break one. If the rules of two Mods contradict each other (A after B, B after A), the game keeps the saved order for those Mods and marks each one with a problem line.

## Reskins

A `reskin` contribution replaces game files and recolours the themes. It changes how the game looks and sounds, never how it plays, and it runs no code. Everyone in the room gets your files from the host, so only the host needs the Mod installed.

```
mods/
  my-reskin/
    mod.json
    audio/press.m4a
    faces/12.png
```

```json
{
  "id": "my-reskin",
  "name": "My Reskin",
  "version": "1.0.0",
  "contributes": {
    "reskin": {
      "assets": {
        "sfx/ui-press-1.m4a": "audio/press.m4a",
        "avatars/12.png": "faces/12.png",
        "music/hourglass.m4a": "audio/hourglass.mp3"
      },
      "palettes": {
        "green": { "primary": "#33ff99", "glow": "#33ff99" }
      }
    }
  }
}
```

**Which files can be replaced.** Each key in `assets` is a **Logical Asset** path: the path the stock game serves the file from, without the leading slash. To get the full list, press **EXPORT ENGLISH TEMPLATE** on the MODS screen and open `_asset-list.txt` in the `_english-template` folder. Each line gives the path and, in brackets, what kind of file it is and which screens load it. The list has sound cues and voices (`sfx/…`), the viewscreen's music (`music/…`, played on the main screen only) and captain portraits (`avatars/…`). The game ignores a path that is not on the list and shows a warning.

**The files.** The value is a path inside your Mod folder, with `/` between folders and no `..`. It must be a real file; links are refused. The game tells a file's type by its first bytes, not by its name:

| Replaces | Allowed types | Largest |
| --- | --- | --- |
| sounds (`sfx/…`) | m4a (AAC), mp3, wav | 8 MiB |
| music (`music/…`) | m4a (AAC), mp3, wav | 32 MiB |
| portraits (`avatars/…`) | png, webp, at most 2048 x 2048 | 4 MiB |

SVG, HTML and anything else are refused. The game skips a refused file with a warning on the MODS screen, the stock file stays, and the rest of the Mod still loads. Phones download at most 128 MiB of files for a room (music plays on the main screen only and does not count). Past that, the Mods that load last lose their files, with a warning.

**Palettes.** `palettes` recolours any of the themes `green`, `amber` and `mixed`. Each slot is one of the names in the game's palette (`bg0`, `bg1`, `bg2`, `line`, `ink`, `inkDim`, `inkFaint`, `primary`, `primaryDeep`, `ok`, `okDeep`, `warn`, `warnDeep`, `danger`, `dangerDeep`, `science`, `glow`), and its value is a six-digit hex colour such as `#33ff99`. Slots you leave out keep the stock colour. The game skips unknown themes, slots and malformed colours with a warning. The boot sequence stays amber.

**Clashes.** Where two Mods replace the same file or colour, the later Mod in the Load Order wins, and the earlier one shows a line on the MODS screen saying which Mod replaced it.

**In the room.** The lobby shows a MODDED ROOM badge with the Mods' names. Every device downloads the files before launch, and the lobby shows progress. If a device is slow, the host can press **LAUNCH ANYWAY**, and that device catches up while it plays. Someone who joins mid-run downloads the files before taking a seat. A device that cannot download a file plays the stock file. The host keeps a private copy of the files, so updating a Mod in the folder or through the Workshop never changes what a running room serves.

**When LAUNCH waits.** LAUNCH also waits, and LAUNCH ANYWAY does not skip the wait, in these cases:

- the game is still looking through the mods folder for the first time;
- the host's copy of the files is being made;
- Code Mods are loading;
- a game in another room on the same host is keeping the Mods from changing.

A run never starts without the Mods the host has switched on, with one exception. If the first look through the mods folder fails or takes over 30 seconds, the game looks once more. If the second try fails too (a minute at most), LAUNCH opens and the room flies without Mods, with a warning in the server log. The line under LAUNCH says which wait it is. If the host could not copy a Mod's files, or the copy took over a minute, LAUNCH stays unavailable and the line says to switch a Mod off on the MODS screen. Refreshing the list tries the copy again.

## Balance

A `balance` contribution changes numbers the game already has: how hard an enemy hits, how far a beam reaches, what an upgrade costs. It adds nothing new (new ships, enemies and quests are `content`) and it runs no code. Everyone in the room plays with the host's numbers. The host sends them with the rest of the Room Content, and every phone and the main screen apply them before the game starts.

```
mods/
  my-tuning/
    mod.json
    balance.json
```

```json
{
  "id": "my-tuning",
  "name": "My Tuning",
  "version": "1.0.0",
  "contributes": { "balance": "balance.json" }
}
```

`balance` names a file inside your Mod folder (`/` between folders, no `..`; links are refused). The game reads it as JSON, up to 1 MiB. The file is a nested copy of the part of the game's balance table you want to change, with your numbers in it:

```json
{
  "combat": { "weaponDamage": 30, "subsystemRevealAt": [0.4, 0.6, 0.9] },
  "enemyClasses": { "raptor": { "maxHull": 90, "damage": 9 } },
  "shipClasses": { "frigate": { "maxHull": 130 } },
  "unlocks": { "reactor_plus": { "cost": 100 } },
  "torpedo": { "currentDriftEnabled": true }
}
```

**Seeing every number.** Press **EXPORT ENGLISH TEMPLATE** on the MODS screen. Besides the Language Pack template, it writes `_balance-reference.json` into `_english-template`: the whole balance table as the game holds it, with the same keys your file uses. With Mods switched on it shows the numbers in force, theirs included, so switch them off first to see the stock game. The names in it say what each number does.

**What a file may change.**

- Only numbers, true or false values, and lists of numbers that the table already has, at the same place. The game skips a key it does not have, with a warning, so a typo cannot add a number nothing reads.
- A list of numbers (such as `subsystemRevealAt`) is replaced as a whole and must have as many entries as the game's list.
- Text in the table (such as an `anomalyId` or a text key) cannot be changed: a wrong one stops the game rather than tuning it. New text and new content come as `text` and `content` contributions (see New content and Mod text).
- A number that is above zero in the stock game cannot be made negative. Nothing may exceed 1000 times its stock value (or 1000, if the stock value is below 1).
- Counts and sizes (enemies in a fight, the galaxy, the probe grid, outage rows) must be whole numbers. The game skips a fraction as out of range.
- A few numbers must stay inside a range for the game to run at all: counts of things the game creates (asteroids, mines, enemies in a fight), the size of the galaxy and of the probe level, how many log lines and radio contacts the game keeps, and the numbers the game divides by (a hull, a shield, a charge time, a speed). The game skips a value outside its range, with a warning that names it. The tick rate cannot be changed.
- Everything else may be odd. A Mod can make beams cost nothing or enemies tougher than any ship could beat.

Each skipped entry shows on the MODS screen under your Mod, with its path (`sigint.maxLive`). The rest of the file still applies.

**Clashes.** Where two Mods set the same number, the later Mod in the Load Order wins that number, and the earlier one shows a line on the MODS screen saying which Mod replaced it. Numbers that only one Mod sets are all kept. A list of numbers counts as one number.

**When it takes effect.** The numbers apply when the host switches the Mod on or reorders it, in the lobby, and not before the host's machine and every device in the room has them. Mods can change only while every room on the host's machine is in the lobby. While a game runs in any room, the MODS screen shows "a game is running, so this Mod's changes wait until it ends" and the numbers stay as they were. Switching the Mod off, or closing the last room, puts the stock numbers back. The mods folder belongs to the whole host machine, so rooms started from one machine (for example by mistyping a room code on a second one) share the same Mods and the same numbers.

**Known limits.**

- The time limits on hails are story content, not balance. `hails.demandExpirySec`, `hails.distressExpirySec` and `hails.traderLingerSec` are in the table, but nothing reads them: each hail carries its own limit in its definition. Changing them does nothing yet. For the same reason, a hail whose text quotes a time ("two minutes") keeps saying so after a Mod changes a number.
- A demo build loads language Mods only.

## New content and Mod text

A `content` contribution adds things to the game, and a `text` contribution holds the words for them. Both are plain JSON and run no code. A Mod can add **captains** (hail personas), **anomalies**, **quests**, **enemy classes** and **hulls**. It cannot add new consoles, Duties, factions, anomaly kinds, outcome kinds, POI kinds, silhouettes, AI profiles or hail effects, and it cannot change THE VOID campaign. Everything a Mod adds is built from kinds the game already knows how to run, with your numbers and your words.

```
mods/
  ember/
    mod.json
    content.json
    text/
      en.json
      de.json
    faces/
      vex.png
```

```json
{
  "id": "ember",
  "name": "The Ember Thread",
  "version": "1.0.0",
  "contributes": { "text": "text", "content": "content.json", "balance": "balance.json" }
}
```

`text` names a folder. `content` names a file (`/` between folders, no `..`, links refused, up to 1 MiB).

### Text

`text` is a folder of `<language>.json` files, laid out like a Language Pack's text files (nested objects, dotted keys, plural objects with `one` and `other`). **Every key must start with `mod.<your Mod id>.`** so two Mods can never clash with each other or with the game. The game drops a key that does not and names it on the MODS screen. A key has no spaces and is at most 120 characters after the prefix. The rules are the same as for a pack: plain text only (no markup), `{name}` slots, plural forms. A Mod's text files may total 4 MiB, and a room accepts at most 20,000 Mod text keys, counted across languages. In your English, a plural entry may have only the forms `one` and `other`, and each form may be at most 2000 characters.

```json
{ "mod": { "ember": { "core": { "label": "Ember core", "m1": "It glows like a banked fire." } } } }
```

`en.json` is your Mod's English, and it is **required** when your content uses any text: a key your content names must be a key of the game or a key in your `en.json`. The game checks other languages (`de.json`, `pt-BR.json`) against your English the way it checks a Language Pack against the game: it drops a line that adds a `{slot}` or carries markup.

A player sees text from the first of these that has the key: the active Language Pack, your file for the active pack's language (`pt-BR`, then `pt`), your English. Your file for a language is used only while a Language Pack of that language is active. With no pack active, players see your English.

A Language Pack can cover your keys. A pack entry under `mod.ember.` is used when your Mod is on, and the game leaves it out without a word when your Mod is not installed.

### Content

`content.json` has up to five lists. The game leaves out each entry that fails a check, names it on the MODS screen with its id, and loads the rest of the file. New ids are lower-case letters, digits and underscores, start with a letter, run to at most 40 characters (`ember_core`), and **may not reuse a stock id**. A Mod may list at most 64 personas, 128 anomalies, 32 quests, 32 enemies and 16 hulls; the game drops the rest.

When two Mods define the same new id, the later Mod in the Load Order wins it, and the earlier one shows a line saying so. If an entry names something that does not exist (a quest, an enemy class, an anomaly), the game drops that entry and everything that named it, with a line saying what was missing. Nothing may name THE VOID campaign (`the_void`, `void_contact`, `sanctuary_berth`, `void_relay`).

```json
{
  "personas": [{ "faction": "corsairs", "speakerKey": "mod.ember.vex", "avatar": "faces/vex.png" }],
  "anomalies": [
    {
      "id": "ember_core",
      "prefixKey": "mod.ember.core.prefix",
      "labelKey": "mod.ember.core.label",
      "kind": "planet",
      "poolWeight": 1,
      "milestones": [
        { "at": 0.5, "textKey": "mod.ember.core.m1" },
        { "at": 1, "textKey": "mod.ember.core.m2" }
      ],
      "outcomes": [
        { "kind": "questClue", "questId": "ember_thread", "toStage": 1, "weight": 1, "logKey": "mod.ember.core.clue" },
        { "kind": "ambush", "classes": ["ironclad"], "weight": 1, "logKey": "mod.ember.core.ambush" }
      ]
    }
  ],
  "quests": [
    {
      "id": "ember_thread",
      "nameKey": "mod.ember.quest.name",
      "stages": [
        { "stage": 1, "logKey": "mod.ember.quest.s1", "journalKey": "mod.ember.quest.j1", "forceAnomalyId": "ember_site" },
        { "stage": 2, "logKey": "", "journalKey": "mod.ember.quest.j2", "salvage": 50 }
      ]
    }
  ],
  "enemies": [
    { "id": "ironclad", "labelKey": "mod.ember.ironclad", "basedOn": "reaver", "visual": "basilisk",
      "stats": { "maxHull": 200 }, "pool": { "weight": 2, "minSector": 3 } }
  ],
  "hulls": [
    { "id": "skiff", "labelKey": "mod.ember.skiff.label", "blurbKey": "mod.ember.skiff.blurb",
      "subtitleKey": "mod.ember.skiff.subtitle", "taglineKey": "mod.ember.skiff.tagline",
      "seatsFrom": "cutter", "statsFrom": "wren", "stats": { "maxHull": 99 } }
  ]
}
```

**personas.** A captain who answers a hail. `faction` is `corsairs`, `syndicate`, `guild` or `velshaar`, the factions whose captains the game draws from a pool. The game refuses the other factions: most speak with one fixed voice, and nothing draws from the Amalgam's pool, so a captain there would never appear. `avatar` is a `.png` file inside your Mod (at most 2048 pixels a side and 4 MiB). The game serves it to every screen as `avatars/mod.<id>.<file name>.png`, so the file name is lower-case letters, digits, `_` and `-`, and at most 40 characters. `speakerKey` is the captain's name.

**anomalies.** The fields of the game's own survey bodies:

- `kind` is `planet`, `wreck`, `phenomenon`, `organism`, `mega` or `comet`.
- `outcomes` (1 to 12; a weighted roll) use the game's outcome kinds: `salvageCache`, `torpedoCache`, `probeCache`, `ambush`, `radiationFlare`, `intel`, `hullBloom`, `questClue`, `wormhole` and `nothing`.
- `milestones` (1 to 6) ascend, and the last one is `1`.
- Optional `pois` and `poiOutcomes` use the game's POI kinds and outcome kinds.
- Optional `visual` is one of the drawings the game's anomalies already use. Optional `hazard` is `gravity`, `pulse` or `shroud`, and optional `behavior` is `skittish` or `drift`. Optional `minSector` is 1 to 100, and optional `questAdvance` names a quest stage.
- `poolWeight` is 0 to 100. A weight of 0 means only a quest places the anomaly.
- `prefixKey`, `labelKey`, each milestone `textKey` and every `logKey` are Text Keys.

**quests.** A strictly sequential list of 1 to 8 stages numbered from 1. The last stage has `"logKey": ""` and closes the thread. A stage's `logKey` is the objective the crew reads, and `journalKey` is the ship's-log line when the stage is reached. A stage may pay `salvage` (0 to 1000) and `probes` (0 to 10), may name a `forceAnomalyId` that appears on every arrival while the stage is open, and may set an `arrivalLogKey`, an objective that replaces `logKey` once that forced anomaly is on the plot. `fragments` is the campaign's own currency, and the game refuses it. **Every stage must be reachable:** some anomaly (yours, or any Mod's that is on) must open it with `questAdvance` or a `questClue` outcome, or the game drops the quest. A quest cannot open while another is open: one thread at a time.

**enemies.** `basedOn` is a stock enemy class that is not a boss (`collector`, `leviathan` and `chimera` cannot be cloned or replaced). The new class starts as a copy of it and then takes your `stats`, a partial of that class's block in the balance table, checked with the same rules as a balance file. It fights like the class it is based on. `visual` (default: the base's) is one of the hull silhouettes the game draws: `raptor`, `corsair`, `reaver`, `envoy`, `basilisk`, `chimera`, `swarm`, `collector` or `leviathan`. `pool` puts the class into ordinary encounters wherever the base class can appear (`raptor`, `corsair`, `reaver` or `basilisk`), at `weight` (up to 100) against the base's 1 and from sector `minSector` (default 1). On any other base, the entry stays but never appears in an encounter. Anomaly `ambush` outcomes and `awakening` outcomes can name the class by id. Hail scripts still treat only the stock pirate classes as captains who talk, so a clone does not open hails of its own.

**hulls.** `seatsFrom` is a stock hull whose seat layout is copied whole (seat ids, consoles and the auto-officer rules stay valid). `statsFrom` is a stock hull whose stat block is copied, and `stats` changes some of its numbers. Players pick the hull on the hull selector like any other.

**Tuning your own content.** A balance file in the same Mod can tune the numbers of a class or hull you added: `enemyClasses.ironclad.maxHull`, `shipClasses.skiff.reactorOutput`. The game checks a Mod's balance file against the stock table plus that Mod's own content only, so a balance file cannot tune another Mod's classes. A Code Mod's `patchBalance` is checked against all the content that is on, so it can.

**Saves need their Mods.** A saved run lists the Mods (other than languages) that were on when it was saved. The lobby lists a save whose Mods are not all installed, switched on and usable as `NEEDS: <Mod ids>`, and you cannot continue it until they are back. A save whose Mod has a different version loads, with a warning in the lobby and the log. If an update removed the quest the run was on, the game clears the quest with a log line. If an update removed the hull, the save counts as missing the Mod. A hull that goes away while the crew has it picked puts them back on the default hull, with seats cleared.

## Code Mods

**Read this first.** A Code Mod is a program. It runs inside the host's game server with the same access as the person who started the game: it can read, change and delete their files, use their network and run other programs. The game does not sandbox it and cannot check what it does. The only protection is the host's approval, so the game asks for it in plain words and keeps a Code Mod switched off until the host gives it. Approve a Mod only if you trust its author. As an author, never ask for approval for code you would not run yourself. Everything that does not need code (Reskins, Balance, new content, text) is plain JSON and needs no approval. Prefer it.

The game has no sandbox because a Code Mod needs the room's real objects to be useful, and a sandbox that gave it those would not protect anyone. The host's informed approval is the protection.

### Writing one

```json
{
  "id": "double-salvage",
  "name": "Double Salvage",
  "version": "1.0.0",
  "author": "Your Name",
  "gameVersion": "0.9.0",
  "contributes": { "code": "main.js" }
}
```

`code` names an ES module in the Mod folder (`.js`, `.mjs` or `.cjs`; a relative path, no `..`). It exports `activate(game)`, which may be `async`. Loading the module and running `activate` together have 10 seconds. If the Mod has no `package.json`, the game adds one that makes `.js` files ES modules; if it has one, the game uses yours. Put your dependencies in the Mod folder (a bundle is easiest). The whole Mod folder, assets and preview image included, may hold at most 8 MiB in 2000 files, nested at most 16 folders deep, with no symbolic links or other special files. The game does not copy files and folders whose names start with a dot.

```js
export function activate(game) {
  game.on("enemyKilled", ({ room }) => {
    room.state.run.salvage += 5;
  });
  game.on("sectorArrival", ({ sector }) => game.log(`Sector ${sector}. Good luck.`));
}
```

The [`types/`](types) folder of this repository holds TypeScript declarations for `game` (`index.d.ts`, with the real `BridgeRoom` declarations behind `game.room`). Copy the folder into your Mod project and extend its `tsconfig.paths.json`; the Code Mod examples show how. Only what this page documents is promised to stay the same between game versions. `game.room` and the shared tables are the real objects, and a refactor can break a Mod that reaches into them.

### The `game` argument

- `game.id`, `game.version`: from `mod.json`.
- `game.room`: the room that is running now, the real server object. It is a getter and throws when there is no room. The game loads a Mod **once per process** and every room in it shares the Mod, so keep per-room data on the `room` an event gives you, not in a variable. `game.log`, `game.save` and `game.send` use the room of the event or message being handled (otherwise the newest room). When there is no room they do nothing, with a line in the server log.
- `game.balance`: the live balance table. **Changing it directly changes the host's game only. Other devices are not told.** Use `patchBalance` for numbers the crew's screens also read.
- `game.patchBalance(partial)`: changes balance numbers for everyone, with the same rules and bounds as a balance file (only numbers the game has). The game applies it after every Mod's balance file, and it changes the Room Content, so devices fetch it like any other change. It works only while `activate` runs or in the lobby, and throws at any other time. It also throws if a number is refused, and the message says which.
- `game.log(textKeyOrText)`: adds a line to the ship's log (the game cuts longer text at 300 characters). A Text Key (the game's, or `mod.<your id>.…` from your text files) is translated; any other string is shown as written.
- `game.on(event, fn)`: listens to an event. Returns a function that stops listening.
- `game.save.get()` and `game.save.set(json)`: your Mod's data in the run's save. JSON only, up to 256 KiB per Mod. `set` throws over the limit or for something that is not JSON. The game saves the run at every sector arrival. A fresh launch and the trip back to the lobby start empty. CONTINUE brings the saved data back before the first event.
- `game.send(payload, client?)`: sends JSON (up to 16 KiB) to every device in the room, or to one client (a client object or its `sessionId`). Devices receive it as a room message named `modMessage`: `{ modId, payload }`.
- `game.onMessage(fn)`: calls `fn(payload, from)` for each message a device sends to your Mod, with `from` = `{ room, sessionId, host, name }`. A device sends the intent `{ t: "modMessage", modId, payload }`. Any device may send, at most 20 a second each and 16 KiB of JSON; a message to a Mod nobody is listening for is dropped. **This is the only way clients and Mods talk.**
- `game.content`: the game's shared tables (`anomalies`, `quests`, `captains`, `shipClass(id)`, `hasShipClass(id)`).

### Events

Events run **synchronously on the sim's thread**, so keep handlers short. A handler that takes more than 5 seconds counts as a hang (see "Crashes and hangs"). With no Code Mods, an event costs one comparison.

| event | when | payload |
| --- | --- | --- |
| `roomCreated` | a room exists (also for rooms that already exist when a Mod loads) | `{ room }` |
| `tick` | every tick (20 a second) in flight, after the encounter tick | `{ room, dt }` |
| `sectorArrival` | arriving in a sector, before the checkpoint is saved: after a jump, at launch and after CONTINUE | `{ room, sector, systemId, reason }` (`"jump"`, `"start"`, `"resume"`) |
| `jumpStart` | the jump drive fired | `{ room, sector }` |
| `combatStart` | the room went to RED ALERT | `{ room, reason }` |
| `enemyKilled` | an enemy ship was destroyed | `{ room, contactId, classId }` |
| `questStage` | a quest moved to a new stage | `{ room, questId, stage }` |
| `anomalyOutcome` | a survey paid out | `{ room, anomalyId, outcome }` |
| `poiOutcome` | an action on a point of interest paid out | `{ room, outcome }` |
| `lobby` | the room is back in the lobby | `{ room }` |

### Approval

A Code Mod is **off until the host approves it**. On the MODS screen it shows `NEEDS APPROVAL`. Selecting it opens a screen that names the Mod, its author, its id and where it came from (your mods folder or the Steam Workshop). The screen says the Mod runs with full access to this computer and offers CANCEL (the default) and APPROVE AND TURN ON.

The game always draws this screen in its own English text, font and colours, whatever Language Pack or Reskin is on. It ignores taps and ENTER for the first three quarters of a second after it opens. The game strips control and direction-changing characters from names, authors and versions wherever it shows them. Approval is made only in the desktop app, for the Mod's id and the code the screen was showing. It is not an intent a room accepts, so no guest and no other device can approve anything, and a browser, a phone or a guest viewport cannot open the approval screen at all.

- A Mod in the **mods folder** is approved once per id. Editing its code does not ask again, because you are the author.
- A **Steam Workshop** Mod is approved for that exact code. When an update changes any file the game copies from the Mod, it turns off again, with the line "This Mod's code changed since you approved it", until the host approves it again. That includes updates that only change an image or `mod.json`: the hash covers every copied file.
- Approval is for one source. Approving your folder copy does not approve a Workshop Mod with the same id. A Workshop approval is also for one Steam item: a different item that uses the same Mod id asks for approval as a new Mod.
- Where the screen cannot be used, for example on a developer's server with no app, add the approval to `settings.json` by hand: `{ "mods": { "approved": { "<id>": { "hash": "<code hash>", "source": "folder" } } } }`. The hash is the Mod's `codeHash` in the room's Mods list. For a folder Mod the game does not check the hash, but it must be 64 hex digits. A Workshop entry also needs `"workshopId": "<the Steam item id>"`, or the game ignores it.
- The game lists a Code Mod found in the **demo** or on a **phone host** as unusable and never loads it.
- A Mod made for an older `gameVersion` than the running game stays on and shows a warning line.

The game copies the Mod's folder into its private cache and hashes the copy. The host approves that hash, and the game loads that copy. Scanning, listing and approving never run any of the Mod's code. The game hashes the copy again before it loads the code.

### Removing and reordering

The game cannot unload code. Switching a running Code Mod off, moving it, or updating its code therefore **restarts the game server** about a second and a half after the change, and every device reconnects. If a game is running by then, the restart waits until the room is back in the lobby.

Switching on a new Code Mod just loads it, but only when it comes after every Code Mod that is already running. A new Code Mod ordered before a running one changes the order the running ones loaded in, so that restarts the server too. If you flip a switch back within that second and a half, nothing restarts.

Restarts like this have their own limit, separate from the crash limit below: at most six in ten minutes. Past it, the app stops restarting the server and tells the host. Under a developer's server with no desktop app, the game only says that a restart is needed.

### Crashes and hangs

A Mod can crash in these ways:

- it throws in `activate` or an event handler;
- it throws from a callback the game cannot attribute to it;
- a handler does not return for 5 seconds.

The game then stops its server, **turns that Mod off**, names it in the lobby and on the MODS screen, and restarts. Everyone is back in the lobby. The crashed Mod stays off until the host switches it on again, so a save flown with it is listed as `NEEDS: <Mod id>` and cannot be continued until then.

A watchdog thread detects a hang and kills the process. It does not run while a debugger is attached. A server that keeps dying (three exits in a minute) stops restarting and tells the host.

### A warning for players

Treat a Code Mod like any program you download. Approve it only if you know who made it and trust them. The game cannot tell a harmless Mod from a harmful one, and it does not review Workshop items. If you are not sure, leave the Mod off. Everything it does is also off, and nothing else in the game depends on it.

## Mod Panels

A **Mod Panel** is an HTML page of your own, shown on the players' screens: a scope, a tally, a custom readout. It runs in a sealed frame, so it can show the ship's state and talk to your Code Mod, and nothing else. Phones show panels on a **MOD** Task Tab. Every Seat gets one while the room has a panel for phones; on a desktop the key is at the bottom right. The TV shows panels in a side panel that stays closed until the host opens it from **Settings, MOD PANELS**.

```json
{
  "id": "scope-mod",
  "name": "Scope",
  "version": "1",
  "contributes": {
    "text": "text",
    "panels": [
      { "id": "scope", "titleKey": "mod.scope-mod.title", "file": "panels/scope.html", "on": ["terminal", "viewport"] }
    ]
  }
}
```

`panels` must list between 1 and 8 panels. A longer list, an empty one or a repeated panel `id` makes the whole Mod fail to load.

- `id` is yours: lower-case letters, digits and underscores, starting with a letter, at most 40 characters.
- `titleKey` is a Text Key: one of your `mod.<id>.` keys (English required) or one of the game's.
- `file` is an `.html` or `.htm` file inside the Mod. It must be UTF-8 and at most 1 MiB.
- `on` lists where the panel shows: `terminal` for phones and tablets, `viewport` for the TV.

A room shows at most 8 panels in all, across every Mod; the game drops the rest. The game sends the page to every device inline with the rest of the room's content, so devices download it before launch like a sound or a portrait.

A tiny page, `panels/scope.html`:

```html
<p id="out">waiting</p>
<button id="ping">PING</button>
<script>
  scc.on("state", function (s) {
    document.getElementById("out").textContent = "sector " + s.sector + ", hull " + s.hull + "%";
  });
  scc.on("message", function (m) {
    document.getElementById("out").textContent = "host says " + JSON.stringify(m);
  });
  document.getElementById("ping").onclick = function () {
    scc.send({ ping: Date.now() });
  };
</script>
```

Your Code Mod hears `scc.send` through `game.onMessage((payload, client) => ...)` and answers with `game.send(payload, client?)`. The page gets the answer as a `message` event. The game tags every message with your Mod's id, so one Mod's page can talk only to that Mod.

**`window.scc`**

| | |
|---|---|
| `scc.on("state", fn)` | called about four times a second with the state below, and once when the page is ready |
| `scc.on("message", fn)` | called with the payload of each `game.send` your Code Mod makes (to everyone, or to this device) |
| `scc.send(payload)` | sends JSON to your Code Mod (up to 16 KiB, 20 a second; the rest is dropped). Returns `false` if it is not JSON |
| `scc.state` | the latest state, `null` before the first |

`on` returns a function that stops listening. The state is a small slice of the game, for this device only:

- `phase`, `sector`, `salvage`, `language`;
- `hull` (0 to 100);
- `shields` (an object with each arc's charge, 0 to 100, keyed by arc);
- `seat` and `duties` (this device's Seat and its Duties; empty on the TV);
- `theme` (`{ name, colors }`, the palette in use, your Reskin's colours included).

It never has other players' names or anything about them.

**What the sandbox does.** The page runs in an `iframe` with `sandbox="allow-scripts"` and a Content-Security-Policy of its own, and the pages that hold the frame forbid every frame navigation. The page has no `fetch`, XHR, WebSocket, beacon or images from the network, no storage or cookies, no access to the page around it, no popups, no forms, no `<base>` and no way to move the frame to another address. Inline script and style work, and so do `data:` images and fonts. Everything your page needs has to be in the one file. The game removes a page that tries to navigate away and tells the player.

**What it does not do.**

- **A panel can freeze its own device.** Where a browser runs a frame on the same thread as the page around it (it often does for a `srcdoc` frame), a loop such as `while (1);` freezes the whole console or TV page it is on, not only the panel, until the player closes the tab. Keep your page's work small and never block.
- **A panel can still make a browser look something up.** The policy asks the browser to block WebRTC (`webrtc 'block'`) and a `prefetch` hint, but a browser may ignore it. Chrome 156 and WebKit ignore `webrtc 'block'`, so a panel can open a peer connection and send a STUN request to a server it names. Chrome also looks up the names in `<link rel="dns-prefetch">` and `preconnect` hints whatever the policy says. That tells a server of the panel's choice the device's network address, and it can carry a few bytes of the panel's own data in a host name. The panel still cannot read anything but the slim state above, which is also on the screen. Do not rely on a player's address staying private from a Mod that ships a panel.

**Where panels do not run.** The iOS and Android apps have Mod Panels switched **off** for now, until a real-device test shows a sandboxed frame cannot reach their native bridge. Until then the phone apps show a note on the MOD tab telling players to join in a web browser. Panels work in a web browser on any device, in the desktop app, and on the TV. Other builds can be made without panels too.

## The MODS screen

**MODS** is in Settings, in the lobby, for the host only. It lists the Mods it found in Load Order (name, version, what they contribute, on or off, and a problem count with the details). Below them it lists the Language Packs with their language, version, how much of the game they cover, and a problem count with the details. Problems are labelled with the key or file they are about.

- **Dropped** (not used in the game): unknown keys, entries with markup, entries that add a parameter, plural objects without `other`.
- **Warnings** (used, but check them): omitted parameters, missing plural forms, text over its length limit, long hail lines.
- **Stale**: the English changed since you wrote `sourceHashes`.
- **Cannot be used**: `pack.json` (or `mod.json`) missing or invalid, no usable entries, a duplicate `id`, or a pack too large to send.

**REFRESH** looks at the folder again, including edits to packs you already selected. **EXPORT ENGLISH TEMPLATE** rewrites `_english-template`, including `_asset-list.txt` (every game file a Reskin can replace) and `_balance-reference.json` (every number a balance file can change). **OPEN MODS FOLDER** appears in the desktop app.

## Steam Workshop

Mods and Language Packs travel through the Steam Workshop. It needs the desktop app, launched through Steam.

**Subscribing.** Subscribe to a Mod on its Workshop page and Steam downloads it. It appears on the MODS screen marked **WORKSHOP** (a Language Pack appears in the LANGUAGE row and the pack list). It uses the same Load Order and the same checks as a Mod from your folder. Steam does not tell the game when a download ends, so a Mod that is still arriving shows as **DOWNLOADING** and cannot be used yet. Press **REFRESH** (or re-enter the lobby) once it has finished. Updates reach the game the same way: after Steam has fetched them, press REFRESH. Unsubscribing removes the Mod when the game quits.

**A folder copy beats a Workshop copy.** If your mods folder and a subscribed Workshop item hold a Mod with the same `id`, the game uses the one in your folder and lists the Workshop copy as unusable. That way a Mod you are working on is never replaced by the published version of itself.

**Publishing.** In the desktop app, with Steam running, in the lobby and as the host: choose **MODS**, then **PUBLISH TO WORKSHOP**, then pick a Mod from your mods folder (ENTER, or tap). Mods you subscribed to are not offered. The game uploads a copy of the Mod folder, without dotfiles and dot-folders (such as `.git` and `.DS_Store`) and without links, and shows progress on the MODS screen. The folder may nest at most 32 levels deep.

- The Mod folder needs a **preview image**: `preview.png` or, if there is no `preview.png`, `preview.jpg`, a plain non-empty file under 1 MiB in the Mod's folder. Without it nothing is uploaded, and the screen says so.
- The Workshop title is the Mod's `name` (at most 128 bytes). The description is the optional `description` in `mod.json` (cut at 8000 bytes), else the name. The tags are the Mod's contribution kinds (a language is tagged "Language Pack"). The change note is `Version <version>`, so raise `version` when you publish an update.
- The game records which Workshop item belongs to which Mod in `mods-published.json`, in the app's user-data folder next to `mods`. The file is keyed by Steam app id and then Mod `id`. You may edit it by hand, for example to attach a Mod to an item you made earlier: `{ "<appId>": { "<modId>": { "itemId": "123456789" } } }`.
- **The first publish is Private.** Steam opens the item's Workshop page when the upload ends. There you accept Valve's [Workshop legal agreement](https://steamcommunity.com/sharedfiles/workshoplegalagreement) if you have not yet (the game says when Steam asks for it) and choose who can see the item. To go public, set its visibility to Public on that page. Later uploads update the same item and leave your choice of visibility alone.

The demo build has no Workshop. It neither lists subscribed Mods nor publishes, and it loads only Mods whose single contribution is a language.

**Automating uploads.** To publish from a script instead of the game, use Valve's `steamcmd` with a `workshop_build_item` VDF (see the Steamworks documentation, "Workshop Implementation Guide"):

```
"workshopitem"
{
  "appid"           "<the game's app id>"
  "publishedfileid" "<the item id, 0 to create a new item>"
  "contentfolder"   "C:\\path\\to\\my-mod"
  "previewfile"     "C:\\path\\to\\my-mod\\preview.png"
  "visibility"      "2"
  "title"           "My Mod"
  "description"     "What it does."
  "changenote"      "Version 1.2.0"
}
```

Run it as `steamcmd +login <account> +workshop_build_item <file>.vdf +quit`. Visibility `0` is Public, `2` is Private.
