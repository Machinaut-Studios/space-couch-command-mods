# Neon Boing: a Reskin

A Reskin changes how the game looks and sounds, never how it plays, and it runs no code. This one recolours the themes, replaces three UI sound cues with two sounds, and gives six corsair captains a new face.

## What to look for

1. **Colours.** Turn the Mod on (MODS screen) and the main screen and the phones turn hot pink (the green theme). The amber theme turns violet and the mixed theme yellow.
2. **Sound.** Press any button on a phone or the main screen. You hear a rubber **boing** instead of the stock click. Confirm a choice for a short fanfare.
3. **Portrait.** When a corsair hails you (Vex Marrow, Mad Anya Voss, Silas Kade and the others), the face in the hail is a grinning pink-haired captain in sunglasses.

Every phone downloads these files from the host before launch, so only the host installs the Mod.

## How it works

```
reskin/
  mod.json
  audio/boing.wav       a sine wave with a wobble, made by tools/make-assets.mjs
  audio/fanfare.wav     four notes going up
  faces/captain.png     128 x 128, drawn by the same script
```

`contributes.reskin.assets` maps a **Logical Asset** (the path the stock game serves the file from, such as `sfx/ui-press-1.m4a`) to a file in your Mod. Here `boing.wav` replaces `ui-press-1` and `ui-press-2`, `fanfare.wav` replaces `ui-confirm-1`, and `captain.png` replaces the portraits `avatars/12.png`, `5.png`, `4.png`, `15.png`, `13.png` and `14.png`. The game tells a file's type by its first bytes, not its name, so a `.wav` can stand in for an `.m4a`. `palettes` recolours any slot of the `green`, `amber` and `mixed` themes with a six-digit hex colour. Slots you leave out keep the stock colour.

Press **EXPORT ENGLISH TEMPLATE** on the MODS screen for `_asset-list.txt`, the list of every file you can replace. See the [guide](../../GUIDE.md#reskins).

Every sound and image here was generated for this repository, so you may copy them freely. The game's own art and audio may not be redistributed, so this Mod does not use them as a starting point.
