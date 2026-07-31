import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

async function convertImages() {
  try {
    const files = fs.readdirSync(assetsDir);
    
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const inputPath = path.join(assetsDir, file);
        const parsedPath = path.parse(file);
        const outputPath = path.join(assetsDir, `${parsedPath.name}.webp`);
        
        console.log(`Converting ${file} to webp...`);
        
        await sharp(inputPath)
          .webp({ quality: 100, lossless: true }) // Using lossless/high quality
          .toFile(outputPath);
          
        // Delete original file after successful conversion
        fs.unlinkSync(inputPath);
        console.log(`Deleted original file: ${file}`);
      }
    }
    
    console.log('\n✅ All images converted to WebP successfully!');
  } catch (error) {
    console.error('Error during image conversion:', error);
  }
}

convertImages();
