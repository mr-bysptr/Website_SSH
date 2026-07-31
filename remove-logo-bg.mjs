import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target folder (memperbaiki nama folder yang menggunakan spasi)
const assetsDir = path.join(__dirname, 'src', 'assets', 'logo perusahaan');

async function processLogos() {
    const files = fs.readdirSync(assetsDir);
    
    console.log('Memulai proses hapus background LOGO (Versi Pintar / Smart Edge)...');
    console.log('Fitur Baru: Anti-aliasing (tepi halus), Color Recovery (hilangkan efek halo putih), dan Auto-Crop.\n');
    
    for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp')) {
            const parsedPath = path.parse(file);
            
            const inputPath = path.join(assetsDir, file);
            
            // Ekstensi output (jpg tidak bisa transparan, ubah ke png)
            let outExt = parsedPath.ext.toLowerCase();
            if (outExt === '.jpg' || outExt === '.jpeg') outExt = '.png';
            
            const outputPath = path.join(assetsDir, `${parsedPath.name}${outExt}`);
            const tempPath = path.join(assetsDir, `temp_${parsedPath.name}${outExt}`);
            
            console.log(`Memproses: ${file}...`);
            
            try {
                // Ambil piksel mentah dari gambar
                const { data, info } = await sharp(inputPath)
                    .ensureAlpha()
                    .raw()
                    .toBuffer({ resolveWithObject: true });
                
                const width = info.width;
                const height = info.height;
                const channels = info.channels;
                
                // Gunakan pojok kiri atas sebagai warna background acuan utama
                const bgR = data[0];
                const bgG = data[1];
                const bgB = data[2];

                // Toleransi Pintar
                // Toleransi Pintar (Dinaikkan agar bisa menembus noise/bintik JPEG)
                const strictTolerance = 30; // Warna yang dianggap 100% background (akan dihapus)
                const looseTolerance = 110;  // Warna bayangan/tepi logo (akan dibuat semi-transparan / tepi halus)

                // Fungsi menghitung kedekatan warna
                const getColorDistance = (r, g, b) => {
                    return Math.max(Math.abs(r - bgR), Math.abs(g - bgG), Math.abs(b - bgB));
                };

                // Kita tidak lagi menggunakan algoritma merayap (BFS) dari luar.
                // Kita gunakan mode "Global" (Non-Contiguous) agar warna di dalam lubang (seperti di huruf A, P, R) ikut terhapus.
                for (let i = 0; i < data.length; i += channels) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    const a = data[i + 3];
                    
                    if (a === 0) continue;
                    
                    const distance = getColorDistance(r, g, b);
                    
                    if (distance <= strictTolerance) {
                        // 100% Background -> Hapus total
                        data[i + 3] = 0; 
                    } 
                    else if (distance <= looseTolerance) {
                        // Tepi Logo (Anti-aliasing)
                        const ratio = (distance - strictTolerance) / (looseTolerance - strictTolerance);
                        
                        // [Color Recovery] Menghilangkan efek "White Halo"
                        if (bgR > 220 && bgG > 220 && bgB > 220) { 
                            const alphaFloat = ratio;
                            if (alphaFloat > 0.05) {
                                data[i] = Math.max(0, Math.min(255, (r - bgR * (1 - alphaFloat)) / alphaFloat));
                                data[i + 1] = Math.max(0, Math.min(255, (g - bgG * (1 - alphaFloat)) / alphaFloat));
                                data[i + 2] = Math.max(0, Math.min(255, (b - bgB * (1 - alphaFloat)) / alphaFloat));
                            }
                        }
                        
                        // Setel alpha-nya agar semi-transparan (halus)
                        data[i + 3] = Math.floor(ratio * 255);
                    }
                }
                
                // Simpan ke file sementara (temp), menggunakan format yang sesuai
                let imagePipeline = sharp(data, {
                    raw: { width, height, channels }
                }).trim();
                
                if (outExt === '.webp') {
                    imagePipeline = imagePipeline.webp({ quality: 100 });
                } else {
                    imagePipeline = imagePipeline.png();
                }
                
                await imagePipeline.toFile(tempPath);
                
                // Hapus file asli / bekasnya
                fs.unlinkSync(inputPath); 
                
                // Rename file temp ke nama asli
                fs.renameSync(tempPath, outputPath);
                
                console.log(`✅ Berhasil: ${parsedPath.name}${outExt}`);
            } catch (err) {
                // Bersihkan file temp jika gagal
                const tempErrPath = path.join(assetsDir, `temp_${path.parse(file).name}.png`);
                if (fs.existsSync(tempErrPath)) fs.unlinkSync(tempErrPath);
                const tempErrPath2 = path.join(assetsDir, `temp_${path.parse(file).name}.webp`);
                if (fs.existsSync(tempErrPath2)) fs.unlinkSync(tempErrPath2);
                
                console.error(`❌ Gagal memproses ${file}: ${err.message}`);
            }
        }
    }
    console.log('\n🎉 Selesai! Coba cek hasilnya, pastikan garis tepi logo sudah rapi dan ruang kosongnya terpotong.');
}

processLogos();
