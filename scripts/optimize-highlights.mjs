import sharp from "sharp";
import { statSync } from "node:fs";

const dir = "C:/Users/Miguel Silva/Desktop/Work/portefolio/public/images/project/";

const phones = [
  "phone-1-login",
  "phone-1-login-dark",
  "phone-2-shops",
  "phone-2-shops-dark",
  "phone-3-professional",
  "phone-3-professional-dark",
  "phone-4-details",
  "phone-4-details-dark",
];

const dashboards = ["ipad-schedule-light", "ipad-schedule-dark"];

async function convert(name, targetWidth) {
  const input = `${dir}${name}.png`;
  const output = `${dir}${name}.webp`;
  const before = statSync(input).size;
  const img = sharp(input).resize({ width: targetWidth, withoutEnlargement: true });
  const info = await img.webp({ quality: 82 }).toFile(output);
  const after = statSync(output).size;
  console.log(
    `${name}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB, ${info.width}x${info.height}`
  );
}

for (const name of phones) {
  await convert(name, 440);
}
for (const name of dashboards) {
  await convert(name, 1906);
}
