import sharp from "sharp";
import { statSync } from "node:fs";

const dir = "C:/Users/Miguel Silva/Desktop/Work/portefolio/public/images/";

const targets = [
  { name: "hero-1", width: 550 },
  { name: "hero-6", width: 1000 },
  { name: "hero-5", width: 550 },
];

for (const { name, width } of targets) {
  const input = `${dir}${name}.jpg`;
  const output = `${dir}${name}.webp`;
  const before = statSync(input).size;
  const info = await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);
  const after = statSync(output).size;
  console.log(
    `${name}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB, ${info.width}x${info.height}`
  );
}
