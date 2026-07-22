// Menggunakan gambar dari Unsplash sementara karena gambar asli (116KB) terlalu kecil (pecah)
import heroRefinery from "@/assets/hero-refinery.png";
import workerDetector from "@/assets/worker-detector.jpg";
import confinedSpace from "@/assets/confined-space.jpg";
import calibrationLab from "@/assets/calibration-lab.jpg";
import h2sService from "@/assets/h2s-service.jpg";
import productPortable from "@/assets/product-portable.jpg";

// Product images
import ventisPro5 from "@/assets/ventis_pro5.png";
import ventisMx4 from "@/assets/mx4.png";
import mx6Ibrid from "@/assets/MX6_iBrid.png";
import tangoTx2 from "@/assets/tango-tx2.png";
import tangoTx1 from "@/assets/tango-tx1.png";
import gasBadge from "@/assets/gasBadge.png";
import t40 from "@/assets/t40.png";
import radiusBz1 from "@/assets/radius-bz1.png";
import dsxDocking from "@/assets/dsx_docking_station.png";

import gtd2000ex from "@/assets/gtd-2000ex.png";
import gtd2000tx from "@/assets/gtd-2000tx.png";
import gtd3000ex from "@/assets/gtd-3000ex.png";
import gtd1000ex from "@/assets/gtd-1000ex.png";
import gir3000 from "@/assets/gir-3000.png";
import gFinderMulti from "@/assets/g-finder-multi.png";
import gFinderSingle from "@/assets/g-finder-single.png";
import gFinderPump from "@/assets/g-finder-pump-multi.png";
import gtf1100u from "@/assets/gtf-1100u.png";
import afc100 from "@/assets/afc-100.png";
import gtl200 from "@/assets/gtl-200.png";

export const img = {
  hero: heroRefinery,
  worker: workerDetector,
  confinedSpace,
  calibrationLab,
  h2sService,
  productPortable,
  ventisPro5,
  ventisMx4,
  mx6Ibrid,
  tangoTx2,
  tangoTx1,
  gasBadge,
  t40,
  radiusBz1,
  dsxDocking,
  gtd2000ex,
  gtd2000tx,
  gtd3000ex,
  gtd1000ex,
  gir3000,
  gFinderMulti,
  gFinderSingle,
  gFinderPump,
  gtf1100u,
  afc100,
  gtl200,
} as const;

export function resolveImg(key: string): string {
  const cleaned = key.replace(/^\/img\//, "").replace(/\.(jpg|png|webp)$/, "");
  switch (cleaned) {
    case "hero-refinery": return img.hero;
    case "worker-detector": return img.worker;
    case "confined-space": return img.confinedSpace;
    case "calibration-lab": return img.calibrationLab;
    case "h2s-service": return img.h2sService;
    case "product-portable": return img.productPortable;
    
    // Product slugs
    case "ventis-pro5": return img.ventisPro5;
    case "ventis-mx4": return img.ventisMx4;
    case "mx6-ibrid": return img.mx6Ibrid;
    case "tango-tx2": return img.tangoTx2;
    case "m40": return img.ventisMx4; 
    case "tango-tx1": return img.tangoTx1;
    case "gasbadge-pro": return img.gasBadge;
    case "t40-ii-rattler": return img.t40;
    case "radius-bz1": return img.radiusBz1;
    case "dsx-docking-station": return img.dsxDocking;
    case "t-dock": return img.dsxDocking; 
    
    case "gastron-gtd-2000ex": return img.gtd2000ex;
    case "gastron-gtd-2000tx": return img.gtd2000tx;
    case "gastron-gtd-2000voc": return img.gtd2000tx; 
    case "gastron-gtd-3000ex": return img.gtd3000ex;
    case "gastron-gtd-1000ex": return img.gtd1000ex;
    case "gastron-gtd-5000ex": return img.gtd3000ex; 
    case "gastron-gtd-5000f-ex": return img.gtd3000ex; 
    case "gastron-gtd-5000f-voc": return img.gtd3000ex; 
    case "gastron-gir-3000": return img.gir3000;
    case "gastron-gir-3000a": return img.gir3000; 
    case "gastron-g-finder-multi": return img.gFinderMulti;
    case "gastron-g-finder-single": return img.gFinderSingle;
    case "gastron-gfu-b1": return img.gFinderMulti; 
    case "gastron-g-finder-pump": return img.gFinderPump;
    case "gastron-gtf-1100u": return img.gtf1100u;
    case "gastron-asc-100": return img.afc100;
    case "gastron-gtl-200": return img.gtl200;

    default: return img.productPortable;
  }
}
