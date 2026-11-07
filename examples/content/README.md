# The Ember Thread: a Content Mod

A Content Mod adds things to the game, built only from kinds the game already knows how to run, with your numbers and your words, and no code. This one adds a hull, an enemy, two anomalies, a captain and a short quest, with English text and a German translation.

## What to look for

1. **The hull.** The lobby's hull selector has a new **SKIFF**. It has the seats of a Cutter and the stats of a Wren, changed to 80 hull and `speedMul` 1.6.
2. **The anomaly.** Soon after launch a planet called **Ember Core** turns up among the sector's bodies. Its pool weight is 50, so you will almost always find one. Survey it with Science. About three surveys in four end with "The Ember Core pulses and points at a wreck in the next sector."
3. **The quest.** That starts **THE EMBER THREAD**. Jump on: the **Ember Site** wreck is guaranteed in the next sector. Survey it and the thread ends, paying 50 salvage and 2 probes. The run's journal tells the story.
4. **The enemy.** The other surveys of the Ember Core raise an **IRONCLAD**: a Reaver with 200 hull, drawn with a Basilisk's silhouette. Ironclads also join ordinary fights wherever a Reaver can appear, at six times the Reaver's weight.
5. **The captain.** Vex Ember, in a new orange portrait, joins the corsairs who hail you.
6. **The translation.** Choose a German Language Pack (any pack whose language is `de`) in the LANGUAGE row, and the Mod's words switch to `text/de.json`. With no pack active, the Mod shows its English.

## How it works

```
content/
  mod.json              contributes: text and content
  content.json          personas, anomalies, quests, enemies, hulls
  text/en.json          the Mod's own words (required); every key starts with mod.example-ember.
  text/de.json          a translation, checked against the English
  faces/vex.png         the captain's portrait, served as avatars/mod.example-ember.vex.png
```

Everything the content names (a quest, an enemy, an anomaly, a Text Key) must exist, or the game drops that entry and the MODS screen says which. Every stage of a quest must be reachable: here the Ember Core opens stage 1 and the Ember Site opens stage 2. If you rename the Mod's `id`, rename the `mod.example-ember.` prefix in the text files and `content.json` too. See the [guide](../../GUIDE.md#new-content-and-mod-text).
