const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const os = require('os');

async function main() {
  const outputDir = path.join(__dirname, '..', 'public', 'hero-frames');
  if (fs.existsSync(outputDir)) {
    // Clean old files
    const existing = fs.readdirSync(outputDir);
    for (const f of existing) {
      fs.unlinkSync(path.join(outputDir, f));
    }
  } else {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const scenes = ['scene-1', 'scene-2', 'scene-3', 'scene-4'];
  const allSourceFrames = [];

  for (let sIdx = 0; sIdx < scenes.length; sIdx++) {
    const sceneName = scenes[sIdx];
    const sceneDir = path.join(__dirname, '..', 'src', 'assets', 'scroll-animations', 'frame', sceneName);
    const files = fs.readdirSync(sceneDir).filter(f => f.endsWith('.png')).sort();

    const startIdx = sIdx === 0 ? 0 : 1;
    for (let i = startIdx; i < files.length; i++) {
      allSourceFrames.push(path.join(sceneDir, files[i]));
    }
  }

  const TOTAL_FRAMES = allSourceFrames.length;
  console.log(`Processing all ${TOTAL_FRAMES} full frames...`);

  const t0 = Date.now();
  let completed = 0;
  const CONCURRENCY = Math.max(os.cpus().length || 8, 8);
  console.log(`Using ${CONCURRENCY} parallel workers`);

  let currentIdx = 0;
  async function worker() {
    while (currentIdx < allSourceFrames.length) {
      const idx = currentIdx++;
      const srcPath = allSourceFrames[idx];
      const frameNum = idx + 1;
      const padNum = String(frameNum).padStart(4, '0');
      const outPath = path.join(outputDir, `frame-${padNum}.webp`);

      await sharp(srcPath)
        .webp({ quality: 75, effort: 3 })
        .toFile(outPath);

      completed++;
      if (completed % 100 === 0 || completed === TOTAL_FRAMES) {
        const pct = Math.round((completed / TOTAL_FRAMES) * 100);
        const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
        console.log(`Processed ${completed}/${TOTAL_FRAMES} frames (${pct}%) in ${elapsed}s`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  const duration = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`Successfully converted all ${TOTAL_FRAMES} frames in ${duration}s!`);

  const outFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.webp'));
  let totalBytes = 0;
  for (const f of outFiles) {
    totalBytes += fs.statSync(path.join(outputDir, f)).size;
  }
  console.log(`Total output size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB across ${outFiles.length} files.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
