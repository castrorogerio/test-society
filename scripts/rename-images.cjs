const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery');

async function renameGalleryImages() {
    try {
        // Get all image files from the gallery directory
        const files = fs.readdirSync(GALLERY_DIR)
            .filter(file => file.toLowerCase().endsWith('.jpg'));

        console.log(`Found ${files.length} images to rename`);

        // Rename each image to a sequence starting from 1, all lowercase
        for (let i = 0; i < files.length; i++) {
            const oldPath = path.join(GALLERY_DIR, files[i]);
            const newFileName = `${i + 1}.jpg`;
            const newPath = path.join(GALLERY_DIR, newFileName);

            fs.renameSync(oldPath, newPath);
            console.log(`Renamed ${files[i]} to ${newFileName}`);
        }

        console.log('Image renaming completed!');
    } catch (error) {
        console.error('Error renaming images:', error);
    }
}

renameGalleryImages();
