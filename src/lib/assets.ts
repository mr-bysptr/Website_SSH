// Menggunakan gambar dari Unsplash sementara karena gambar asli (116KB) terlalu kecil (pecah)
import heroRefinery from "@/assets/hero-refinery.png";
import workerDetector from "@/assets/worker-detector.jpg";
import confinedSpace from "@/assets/confined-space.jpg";
import calibrationLab from "@/assets/calibration-lab.jpg";
import h2sService from "@/assets/h2s-service.jpg";
import productPortable from "@/assets/product-portable.jpg";

export const img = {
  hero: heroRefinery,
  worker: workerDetector,
  confinedSpace,
  calibrationLab,
  h2sService,
  productPortable,
} as const;

export function resolveImg(key: string): string {
  const cleaned = key.replace(/^\/img\//, "").replace(/\.jpg$/, "");
  switch (cleaned) {
    case "hero-refinery":
      return img.hero;
    case "worker-detector":
      return img.worker;
    case "confined-space":
      return img.confinedSpace;
    case "calibration-lab":
      return img.calibrationLab;
    case "h2s-service":
      return img.h2sService;
    case "product-portable":
      return img.productPortable;
    default:
      return img.hero;
  }
}
