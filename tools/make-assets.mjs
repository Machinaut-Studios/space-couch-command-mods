// Writes every image and sound in examples/ from nothing: PNGs drawn with a tiny rasteriser, WAVs made of sine waves.
// Nothing here is copied from the game or from anywhere else, so the files are as free as the rest of the repository (MIT).
// The output is committed; run this only if you want to change an image or a sound:
//
//   node tools/make-assets.mjs
//
// Needs Node.js 18 or newer and no packages.
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = (...p) => {
  const file = path.join(root, ...p);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  return file;
};

// ── PNG ───────────────────────────────────────────────────────────────────────────────────────────────────────

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const head = Buffer.alloc(8);
  head.writeUInt32BE(data.length, 0);
  head.write(type, 4, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([head.subarray(4), data])), 0);
  return Buffer.concat([head, data, crc]);
};

/** A canvas of w x h RGBA pixels with a few drawing calls. */
class Canvas {
  constructor(w, h, bg = [0, 0, 0, 255]) {
    this.w = w;
    this.h = h;
    this.px = Buffer.alloc(w * h * 4);
    for (let i = 0; i < w * h; i++) this.px.set(bg, i * 4);
  }
  set(x, y, c) {
    x = Math.round(x);
    y = Math.round(y);
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
    this.px.set(c, (y * this.w + x) * 4);
  }
  rect(x, y, w, h, c) {
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) this.set(x + i, y + j, c);
  }
  disc(cx, cy, r, c) {
    for (let y = Math.floor(cy - r); y <= cy + r; y++) for (let x = Math.floor(cx - r); x <= cx + r; x++) if ((x - cx) ** 2 + (y - cy) ** 2 <= r * r) this.set(x, y, c);
  }
  /** A vertical gradient from `a` (top) to `b` (bottom). */
  fade(a, b) {
    for (let y = 0; y < this.h; y++) {
      const t = y / (this.h - 1);
      this.rect(0, y, this.w, 1, a.map((v, i) => Math.round(v + (b[i] - v) * t)));
    }
  }
  /** Text in the 5x7 font below, each font pixel `s` pixels wide. */
  text(str, x, y, s, c) {
    for (const ch of str) {
      const g = FONT[ch];
      if (g) g.forEach((row, j) => [...row].forEach((on, i) => on === "#" && this.rect(x + i * s, y + j * s, s, s, c)));
      x += 6 * s;
    }
  }
  textWidth(str, s) {
    return str.length * 6 * s - s;
  }
  png() {
    const raw = Buffer.alloc((this.w * 4 + 1) * this.h);
    for (let y = 0; y < this.h; y++) {
      raw[y * (this.w * 4 + 1)] = 0;
      this.px.copy(raw, y * (this.w * 4 + 1) + 1, y * this.w * 4, (y + 1) * this.w * 4);
    }
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(this.w, 0);
    ihdr.writeUInt32BE(this.h, 4);
    ihdr[8] = 8; // bit depth
    ihdr[9] = 6; // RGBA
    return Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), chunk("IHDR", ihdr), chunk("IDAT", zlib.deflateSync(raw, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
  }
}

// A 5x7 capital-letter font, enough for the words on the preview pictures.
const FONT = Object.fromEntries(
  Object.entries({
    A: [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
    B: ["####.", "#...#", "#...#", "####.", "#...#", "#...#", "####."],
    C: [".####", "#....", "#....", "#....", "#....", "#....", ".####"],
    D: ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."],
    E: ["#####", "#....", "#....", "####.", "#....", "#....", "#####"],
    G: [".####", "#....", "#....", "#.###", "#...#", "#...#", ".###."],
    I: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "#####"],
    K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
    L: ["#....", "#....", "#....", "#....", "#....", "#....", "#####"],
    N: ["#...#", "##..#", "#.#.#", "#..##", "#...#", "#...#", "#...#"],
    O: [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
    P: ["####.", "#...#", "#...#", "####.", "#....", "#....", "#...."],
    R: ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
    S: [".####", "#....", "#....", ".###.", "....#", "....#", "####."],
    T: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
    U: ["#...#", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
    " ": [".....", ".....", ".....", ".....", ".....", ".....", "....."],
  }),
);

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)).concat(255);

/** The 512x512 picture the Workshop page shows: a colour field, a drawing, the kind in big letters. */
function preview(file, { top, bottom, ink, word, draw }) {
  const c = new Canvas(512, 512);
  c.fade(hex(top), hex(bottom));
  for (let y = 0; y < 512; y += 4) c.rect(0, y, 512, 1, [0, 0, 0, 40]); // scanlines
  draw(c, hex(ink));
  const s = 12;
  c.text(word, Math.round((512 - c.textWidth(word, s)) / 2) + 4, 400 + 4, s, [0, 0, 0, 255]);
  c.text(word, Math.round((512 - c.textWidth(word, s)) / 2), 400, s, hex(ink));
  fs.writeFileSync(out(file), c.png());
}

const star = (c, cx, cy, r, ink) => {
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    for (let t = 0; t <= r; t += 1) c.set(cx + Math.cos(a) * t, cy + Math.sin(a) * t, ink);
  }
  c.disc(cx, cy, r / 4, ink);
};

preview("examples/language/preview.png", {
  top: "#10243d",
  bottom: "#05080f",
  ink: "#ffd34d",
  word: "LANGUAGE",
  draw: (c, ink) => {
    // a speech bubble with three lines of "text"
    c.rect(96, 90, 320, 200, ink);
    c.rect(128, 290, 40, 40, ink);
    c.rect(112, 306, 48, 24, hex("#05080f"));
    for (let i = 0; i < 3; i++) c.rect(130, 130 + i * 52, 252 - i * 50, 20, hex("#10243d"));
  },
});
preview("examples/reskin/preview.png", {
  top: "#3b0a45",
  bottom: "#0e0214",
  ink: "#ff3fd0",
  word: "RESKIN",
  draw: (c, ink) => {
    // a paint swatch fan
    const cols = ["#ff3fd0", "#8f3dff", "#3fd0ff", "#ffe14d"];
    cols.forEach((h, i) => c.rect(70 + i * 90, 100 + i * 12, 70, 230 - i * 24, hex(h)));
    c.disc(256, 60, 18, ink);
  },
});
preview("examples/balance/preview.png", {
  top: "#4a1010",
  bottom: "#120303",
  ink: "#ff6a4d",
  word: "BALANCE",
  draw: (c, ink) => {
    // a long thin ship carrying a very large gun
    c.rect(100, 230, 150, 34, ink);
    c.rect(250, 190, 170, 114, ink);
    c.rect(420, 220, 70, 14, hex("#ffe14d"));
    c.rect(420, 258, 70, 14, hex("#ffe14d"));
    c.disc(120, 247, 12, hex("#120303"));
  },
});
preview("examples/content/preview.png", {
  top: "#4a2205",
  bottom: "#100600",
  ink: "#ff9a2b",
  word: "CONTENT",
  draw: (c, ink) => {
    // an ember planet with a ring
    c.disc(256, 200, 100, ink);
    c.disc(226, 170, 30, hex("#ffd34d"));
    c.rect(100, 190, 312, 14, hex("#ffd34d"));
    for (let i = 0; i < 20; i++) c.set(60 + ((i * 97) % 400), 40 + ((i * 53) % 300), hex("#ffffff"));
  },
});
preview("examples/code/preview.png", {
  top: "#06331f",
  bottom: "#010d06",
  ink: "#2bff88",
  word: "CODE",
  draw: (c, ink) => {
    // < / >
    for (let i = 0; i < 100; i++) {
      c.rect(120 + (100 - i) * 0.8, 120 + i * 1.2, 22, 4, ink);
      c.rect(120 + (100 - i) * 0.8, 360 - i * 1.2, 22, 4, ink);
      c.rect(392 - (100 - i) * 0.8, 120 + i * 1.2, 22, 4, ink);
      c.rect(392 - (100 - i) * 0.8, 360 - i * 1.2, 22, 4, ink);
    }
    for (let i = 0; i < 200; i++) c.rect(272 - i * 0.15, 100 + i * 1.3, 18, 4, ink);
  },
});
preview("examples/panels/preview.png", {
  top: "#062a33",
  bottom: "#010b0d",
  ink: "#2fe0ff",
  word: "PANELS",
  draw: (c, ink) => {
    // a round scope with a sweep line and two blips
    c.disc(256, 200, 120, ink);
    c.disc(256, 200, 108, hex("#010b0d"));
    c.disc(256, 200, 60, ink);
    c.disc(256, 200, 50, hex("#010b0d"));
    for (let t = 0; t < 108; t++) c.set(256 + t * 0.8, 200 - t * 0.6, ink);
    star(c, 310, 150, 14, hex("#ffe14d"));
    star(c, 205, 245, 10, hex("#ffe14d"));
  },
});

// The captain's portrait: a 128x128 pixel-art face, drawn on a 32x32 grid and scaled four times, like the game's own portraits.
{
  const g = new Canvas(32, 32, hex("#2a0a3a"));
  g.fade(hex("#5a1470"), hex("#1a0626"));
  const skin = hex("#ffc89a");
  const hair = hex("#ff3fd0");
  g.disc(16, 17, 11, skin); // head
  g.rect(5, 6, 22, 7, hair); // fringe
  g.disc(7, 14, 4, hair);
  g.disc(25, 14, 4, hair);
  g.rect(10, 15, 5, 3, hex("#101018")); // sunglasses
  g.rect(17, 15, 5, 3, hex("#101018"));
  g.rect(15, 16, 2, 1, hex("#101018"));
  g.rect(11, 15, 2, 1, hex("#ffffff"));
  g.rect(18, 15, 2, 1, hex("#ffffff"));
  for (let x = 11; x <= 21; x++) g.set(x, 22 + (Math.abs(x - 16) > 3 ? 0 : 1), hex("#7a1c3a")); // grin
  g.set(10, 21, hex("#7a1c3a"));
  g.set(22, 21, hex("#7a1c3a"));
  g.rect(14, 25, 4, 2, hex("#7a1c3a"));
  g.rect(11, 28, 10, 4, hex("#3fd0ff")); // collar
  const big = new Canvas(128, 128);
  for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) big.set(x, y, [...g.px.subarray(((y >> 2) * 32 + (x >> 2)) * 4, ((y >> 2) * 32 + (x >> 2)) * 4 + 4)]);
  fs.writeFileSync(out("examples/reskin/faces/captain.png"), big.png());
  // The content example's captain is a different face: the same drawing in orange.
  const orange = new Canvas(128, 128);
  for (let i = 0; i < 128 * 128; i++) {
    const [r, gr, b, a] = big.px.subarray(i * 4, i * 4 + 4);
    orange.px.set([Math.min(255, Math.round(b * 0.4 + gr * 0.2 + r * 0.6)), Math.round(r * 0.5), Math.round(b * 0.1), a], i * 4);
  }
  fs.writeFileSync(out("examples/content/faces/vex.png"), orange.png());
}

// ── WAV ───────────────────────────────────────────────────────────────────────────────────────────────────────

const RATE = 22050;
function wav(file, seconds, sample) {
  const n = Math.round(seconds * RATE);
  const data = Buffer.alloc(n * 2);
  for (let i = 0; i < n; i++) {
    const t = i / RATE;
    const v = Math.max(-1, Math.min(1, sample(t, seconds)));
    data.writeInt16LE(Math.round(v * 30000), i * 2);
  }
  const head = Buffer.alloc(44);
  head.write("RIFF", 0);
  head.writeUInt32LE(36 + data.length, 4);
  head.write("WAVEfmt ", 8);
  head.writeUInt32LE(16, 16);
  head.writeUInt16LE(1, 20); // PCM
  head.writeUInt16LE(1, 22); // mono
  head.writeUInt32LE(RATE, 24);
  head.writeUInt32LE(RATE * 2, 28);
  head.writeUInt16LE(2, 32);
  head.writeUInt16LE(16, 34);
  head.write("data", 36);
  head.writeUInt32LE(data.length, 40);
  fs.writeFileSync(out(file), Buffer.concat([head, data]));
}

// A rubber "boing" for every button press: a sine sliding down while a slow wobble rides on it. Impossible to mistake for the stock click.
wav("examples/reskin/audio/boing.wav", 0.42, (t, len) => {
  const wobble = 1 + 0.45 * Math.sin(2 * Math.PI * 22 * t);
  const phase = 2 * Math.PI * (700 / 4.2) * (1 - Math.exp(-t * 4.2)) + 2 * Math.PI * 140 * t;
  return 0.8 * Math.sin(phase) * wobble * Math.min(1, t * 400) * Math.max(0, 1 - t / len) ** 1.5;
});

// A rising four-note fanfare for the confirm sound.
wav("examples/reskin/audio/fanfare.wav", 0.6, (t, len) => {
  const notes = [523.25, 659.25, 783.99, 1046.5];
  const i = Math.min(3, Math.floor(t / 0.13));
  const local = t - i * 0.13;
  const f = notes[i];
  const body = Math.sin(2 * Math.PI * f * t) + 0.4 * Math.sin(2 * Math.PI * f * 2 * t) + 0.2 * Math.sin(2 * Math.PI * f * 3 * t);
  const env = Math.min(1, local * 300) * Math.exp(-local * (i === 3 ? 3 : 14)) * (i === 3 ? 1 : 0.9);
  return 0.5 * body * env * Math.max(0, 1 - (t / len) ** 4);
});

console.log("wrote the previews, the two portraits and the two sounds under examples/");
