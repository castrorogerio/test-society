import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import heicConvert from 'heic-convert';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.join(__dirname, '../public/gallery');
const THUMBNAILS_DIR = path.join(__dirname, '../public/gallery/thumbnails');

// Ensure thumbnails directory exists
if (!fs.existsSync(THUMBNAILS_DIR)) {
  fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
}

// Convert HEIC to JPEG Buffer
async function heicToJpeg(inputBuffer) {
  return await heicConvert({
    buffer: inputBuffer,
    format: 'JPEG',
    quality: 0.8
  });
}

// Process each image
const processImages = async () => {
  const files = fs.readdirSync(GALLERY_DIR);
  
  for (const file of files) {
    if (file.endsWith('.HEIC')) {
      const inputPath = path.join(GALLERY_DIR, file);
      const outputName = file.replace('.HEIC', '.jpg');
      const outputPath = path.join(GALLERY_DIR, outputName);
      const thumbnailPath = path.join(THUMBNAILS_DIR, outputName);

      try {
        // Read HEIC file
        const inputBuffer = fs.readFileSync(inputPath);
        
        // Convert HEIC to JPEG
        const jpegBuffer = await heicToJpeg(inputBuffer);
        
        // Save full-size image
        await sharp(jpegBuffer)
          .resize(1200, null, { withoutEnlargement: true })
          .jpeg({ quality: 80 })
          .toFile(outputPath);

        // Create thumbnail
        await sharp(jpegBuffer)
          .resize(500, null, { withoutEnlargement: true })
          .jpeg({ quality: 70 })
          .toFile(thumbnailPath);

        console.log(`✓ Processed ${file} -> ${outputName}`);
      } catch (error) {
        console.error(`✗ Error processing ${file}:`, error);
      }
    }
  }
};

// Run the processing
processImages().then(() => {
  console.log('Image processing complete!');
}).catch((error) => {
  console.error('Error during image processing:', error);
}); 