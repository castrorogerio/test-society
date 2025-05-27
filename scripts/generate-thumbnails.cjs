const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery');
const THUMBNAILS_DIR = path.join(GALLERY_DIR, 'thumbnails');
const THUMBNAIL_WIDTH = 300; // Width of thumbnails in pixels

async function generateThumbnails() {
    try {
        // Create thumbnails directory if it doesn't exist
        if (!fs.existsSync(THUMBNAILS_DIR)) {
            fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
        }

        // Get all jpg files from the gallery directory
        const files = fs.readdirSync(GALLERY_DIR)
            .filter(file => file.toLowerCase().endsWith('.jpg'));

        console.log(`Found ${files.length} images to process`);

        // Process each image
        for (const file of files) {
            const inputPath = path.join(GALLERY_DIR, file);
            const outputPath = path.join(THUMBNAILS_DIR, file);

            // Skip if thumbnail already exists
            if (fs.existsSync(outputPath)) {
                console.log(`Thumbnail already exists for ${file}`);
                continue;
            }

            console.log(`Processing ${file}...`);

            await sharp(inputPath)
                .resize(THUMBNAIL_WIDTH, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .jpeg({ quality: 80 })
                .toFile(outputPath);

            console.log(`Created thumbnail for ${file}`);
        }

        console.log('Thumbnail generation completed!');
    } catch (error) {
        console.error('Error generating thumbnails:', error);
    }
}

generateThumbnails();
