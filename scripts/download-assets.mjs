import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const imagesDir = join(publicDir, 'images');
const seoDir = join(publicDir, 'seo');

// Ensure directories exist
[imagesDir, seoDir].forEach(dir => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
});

const assets = [
  // Copy center photos (swiper)
  { url: 'https://copy.ru/wp-content/uploads/2026/01/copy.ru-moskvasiti.webp', dest: join(imagesDir, 'copy-ru-moskvasiti.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2026/01/copy.ru-moskvasiti_2.webp', dest: join(imagesDir, 'copy-ru-moskvasiti_2.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2026/01/copy.ru-moskvasiti_1.webp', dest: join(imagesDir, 'copy-ru-moskvasiti_1.webp') },

  // Service card images
  { url: 'https://copy.ru/wp-content/uploads/2025/05/pereplet-400x256.webp', dest: join(imagesDir, 'pereplet-400x256.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2025/05/buklet-400x256.webp', dest: join(imagesDir, 'buklet-400x256.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2024/12/pechat-dokumentov-a3-i-a4-400x256.webp', dest: join(imagesDir, 'pechat-dokumentov-a3-i-a4-400x256.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2024/12/pechat-chertezhej.webp', dest: join(imagesDir, 'pechat-chertezhej.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2024/12/srochnaya-pechat-vizitok.webp', dest: join(imagesDir, 'srochnaya-pechat-vizitok.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2025/05/listovka-400x256.webp', dest: join(imagesDir, 'listovka-400x256.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2025/05/otkrytka-400x256.webp', dest: join(imagesDir, 'otkrytka-400x256.webp') },
  { url: 'https://copy.ru/wp-content/uploads/2025/05/naklejki.webp', dest: join(imagesDir, 'naklejki.webp') },

  // Telegram icon
  { url: 'https://copy.ru/wp-content/themes/copy/src/img/telegram2.svg', dest: join(imagesDir, 'telegram2.svg') },
  { url: 'https://copy.ru/wp-content/themes/copy/src/img/globe.svg', dest: join(imagesDir, 'globe.svg') },

  // Promo image
  { url: 'https://copy.ru/wp-content/uploads/2024/08/yelling.svg', dest: join(imagesDir, 'yelling.svg') },
];

async function downloadFile(url, dest) {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CloneBot/1.0)' }
    });
    if (!response.ok) {
      console.warn(`  ✗ ${basename(dest)} — HTTP ${response.status}`);
      return;
    }
    const buffer = await response.arrayBuffer();
    writeFileSync(dest, Buffer.from(buffer));
    console.log(`  ✓ ${basename(dest)} (${Math.round(buffer.byteLength / 1024)}KB)`);
  } catch (err) {
    console.warn(`  ✗ ${basename(dest)} — ${err.message}`);
  }
}

// Download in batches of 4
async function downloadBatch(batch) {
  await Promise.all(batch.map(({ url, dest }) => downloadFile(url, dest)));
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  for (let i = 0; i < assets.length; i += 4) {
    await downloadBatch(assets.slice(i, i + 4));
  }

  // Also try to get remaining service card images by guessing URLs
  const extraAttempts = [
    { url: 'https://copy.ru/wp-content/uploads/2025/05/stikerpaki.webp', dest: join(imagesDir, 'stikerpaki.webp') },
    { url: 'https://copy.ru/wp-content/uploads/2025/03/stikerpaki-400x256.webp', dest: join(imagesDir, 'stikerpaki-400x256.webp') },
    { url: 'https://copy.ru/wp-content/uploads/2024/12/pechat-na-kruzhkah.webp', dest: join(imagesDir, 'pechat-na-kruzhkah.webp') },
    { url: 'https://copy.ru/wp-content/uploads/2024/12/pechat-na-futbolkah.webp', dest: join(imagesDir, 'pechat-na-futbolkah.webp') },
    { url: 'https://copy.ru/wp-content/uploads/2024/12/pechat-fotografij.webp', dest: join(imagesDir, 'pechat-fotografij.webp') },
    { url: 'https://copy.ru/wp-content/uploads/2026/03/futbolka_pop-400x256.webp', dest: join(imagesDir, 'futbolka_pop-400x256.webp') },
  ];
  console.log('Trying extra service card images...');
  await downloadBatch(extraAttempts.slice(0,4));
  await downloadBatch(extraAttempts.slice(4));

  console.log('Done!');
}

main().catch(console.error);
