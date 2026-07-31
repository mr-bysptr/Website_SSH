import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { removeBackground } from '@imgly/background-removal-node';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target folder: src/assets
const assetsDir = path.join(__dirname, 'src', 'assets', 'logo_perusahaan');

async function processImages() {
  try {
    const files = fs.readdirSync(assetsDir);

    console.log('Memulai proses Hapus Background...');
    console.log('Catatan: Menyiapkan AI Model... (Mungkin memakan waktu sedikit lama untuk gambar pertama)\n');

    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp')) {
        const parsedPath = path.parse(file);

        // Lewati file yang sudah dihapus background-nya (yang berakhiran -nobg)
        if (parsedPath.name.endsWith('-nobg')) continue;

        const inputPath = path.join(assetsDir, file);
        // Output format harus .png agar mendukung transparansi (background hilang)
        const outputPath = path.join(assetsDir, `${parsedPath.name}-nobg.png`);

        console.log(`Sedang memproses: ${file}...`);

        const fileUrl = pathToFileURL(inputPath).href;

        // Memanggil fungsi hapus background dari img.ly
        const blob = await removeBackground(fileUrl);
        const buffer = Buffer.from(await blob.arrayBuffer());

        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ Tersimpan sebagai: ${parsedPath.name}-nobg.png\n`);

        // Hapus tanda komentar (//) di bawah ini jika Anda ingin langsung MENGHAPUS file aslinya
        // fs.unlinkSync(inputPath);
      }
    }

    console.log('🎉 Selesai! Semua background berhasil dihapus.');
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

processImages();
