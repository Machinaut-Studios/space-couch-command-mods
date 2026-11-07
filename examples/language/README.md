# Pirate Talk: a tiny Language Pack

The smallest Mod there is: one `mod.json` and one text file. It turns the lobby and a few other lines into pirate talk, and everything it leaves out stays English. (A language-only Mod is a Language Pack.)

## What to look for

1. In the lobby, open **Settings** (ESC, or the menu button), choose **LANGUAGE**, and pick **Pirate Talk (example)**.
2. The lobby now reads **WAITING FOR SCALLYWAGS**, the launch button says **SET SAIL**, the room code is labelled **TREASURE CODE**, and the join QR code is captioned **SCAN, YE SCALLYWAGS**.
3. Seat a crew member. The status line reads like **2 OF 4 POSTS MANNED, ARR · 1 READY**.
4. Clear a fight, lose the ship, or return to the lobby. The log says "Scallywags cleared, standing down from red alert, arr", the defeat headline reads **DAVY JONES**, and, on returning to the lobby, the log says "Back in port, patch the hull and sail again".

## How it works

```
language/
  mod.json              contributes.language: { "tag": "en", "dir": "language" }
  language/en.json      the text; a key it leaves out shows in English
```

The text files nest: `view.lobby.launch.cta` is `{ "view": { "lobby": { "launch": { "cta": "..." } } } }`. Words in braces, such as `{seated}`, are filled in by the game and must be spelled as in the English. Text that depends on a number is an object with a `one` and an `other` form. `tag` is `en` because Pirate Talk keeps English grammar; a German Mod says `de`.

To make a real translation, press **EXPORT ENGLISH TEMPLATE** on the MODS screen. It writes every key and its English, with the maximum length of each, into your mods folder. See the [guide](../../GUIDE.md#making-a-language-pack).
