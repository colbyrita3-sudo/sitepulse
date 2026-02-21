import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const input = path.join(root, "public", "og-image.png");
const backup = path.join(root, "public", "og-image.backup.png");
const output = path.join(root, "public", "og-image.png");

async function main() {
  if (!fs.existsSync(input)) {
    console.error("❌ Cannot find: public/og-image.png");
    process.exit(1);
  }

  // Backup original once
  if (!fs.existsSync(backup)) {
    fs.copyFileSync(input, backup);
    console.log("✅ Backed up original to public/og-image.backup.png");
  } else {
    console.log("ℹ️ Backup already exists: public/og-image.backup.png");
  }

  const img = sharp(input);
  const meta = await img.metadata();

  console.log(`ℹ️ Current size: ${meta.width}×${meta.height}`);

  // Create exact 1200×630 without stretching:
  // - Resize to cover
  // - Center crop
  await img
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(output + ".tmp");

  fs.renameSync(output + ".tmp", output);

  console.log("✅ Done! public/og-image.png is now exactly 1200×630");
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});