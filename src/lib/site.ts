import {
  ShieldCheck,
  Wind,
  HardHat,
  Gauge,
  Package,
  Factory,
  Fuel,
  Mountain,
  Ship,
  Wrench,
  Hammer,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Surya Segara Hana",
  short: "SSH",
  tagline: "Industrial Safety Support Services",
  description:
    "Specialist H2S services, confined space entry, gas detector rental, sales and calibration for oil & gas, petrochemical, mining, marine, manufacturing, construction and energy operators across Indonesia.",
  phone: "021 75676868",
  whatsapp: "+62 87777265623",
  email: "indonesia@sshcompany.co.id",
  address: "Jakarta, Indonesia",
  hours: "Mon–Sat · 08:00 – 18:00 WIB",
  years: 11,
  projects: 500,
  clients: 120,
  manHours: "2.4M+",
};

export function buildWhatsAppUrl(message: string) {
  const cleanNumber = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function buildEmailUrl(
  subject = `Permintaan Informasi — ${site.name}`,
  body = "",
) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type Service = {
  slug: string;
  title: string;
  short: string;
  overview: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
  scope: string[];
  process: { title: string; body: string }[];
  equipment: string[];
  faqs: { q: string; a: string }[];
};

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  short: string;
  challenges: string[];
  solutions: string[];
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  type: "Portable" | "Fixed";
  detectorType: "Single Gas" | "Multi Gas" | "Area Monitor" | "Fixed System";
  gases: string[];
  image: string;
  short: string;
  features: string[];
  specs: { label: string; value: string }[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  scope: string;
  image: string;
  metrics: { label: string; value: string }[];
  summary: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readMinutes: number;
  image: string;
  body: string[];
};

export const industries: Industry[] = [
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    icon: Fuel,
    short: "Upstream, midstream and downstream operators trust us for H2S and confined-space coverage on rigs, tanks and pipelines.",
    challenges: [
      "High H2S and volatile hydrocarbon exposure",
      "Tank cleaning and vessel entry with tight schedules",
      "Remote offshore locations with narrow response windows",
    ],
    solutions: [
      "24/7 standby H2S safety technicians and detection arrays",
      "Turnkey confined space entry teams with rescue capability",
      "Rental fleets of Dräger and MSA multi-gas detectors, calibrated on-site",
    ],
  },
  {
    slug: "petrochemical",
    name: "Petrochemical",
    icon: Factory,
    short: "Calibrated detection and CSE for reactors, storage and turnarounds.",
    challenges: [
      "Complex chemical inventories requiring multi-gas sensing",
      "Shutdown turnarounds under aggressive timelines",
      "Strict regulatory documentation",
    ],
    solutions: [
      "Custom multi-gas rental packages with data logging",
      "Certified CSE teams for reactor and column entries",
      "Full ISO 17025-aligned calibration records",
    ],
  },
  {
    slug: "mining",
    name: "Mining",
    icon: Mountain,
    short: "Underground and open-pit gas monitoring, refuge chamber testing and rescue standby.",
    challenges: [
      "Methane, CO and low oxygen risks underground",
      "Long distances between working faces",
      "Explosion-proof equipment requirements",
    ],
    solutions: [
      "IECEx and ATEX certified fixed and portable detectors",
      "On-site calibration and bump-testing programs",
      "Confined space and rescue teams for shafts and stopes",
    ],
  },
  {
    slug: "marine",
    name: "Marine",
    icon: Ship,
    short: "Cargo hold, ballast and bunker tank certification for vessels in Indonesian waters.",
    challenges: [
      "Hot work permits in enclosed spaces",
      "Tanker gas-free certification",
      "Port turnaround pressure",
    ],
    solutions: [
      "Certified marine chemist-style gas-free surveys",
      "Portable multi-gas rental with delivery to port",
      "24/7 attendants for hot work and tank entry",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Wrench,
    short: "Process safety cover for chemical plants, coating lines and warehouses.",
    challenges: [
      "Solvent vapor and toxic gas leaks",
      "Confined-space maintenance on tanks and reactors",
      "Detector fleet management across sites",
    ],
    solutions: [
      "Fixed detection design, installation and commissioning",
      "Managed rental with scheduled calibration",
      "CSE crews on demand",
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: Hammer,
    short: "Excavations, tunnels and utility works secured with atmosphere monitoring and standby rescue.",
    challenges: [
      "Underground utility vaults and manholes",
      "Sewer and drainage tie-ins",
      "Short-duration jobs across many sites",
    ],
    solutions: [
      "Daily and weekly detector rental with courier delivery",
      "Standby confined-space attendants",
      "Toolbox training on atmospheric hazards",
    ],
  },
  {
    slug: "energy",
    name: "Energy",
    icon: Zap,
    short: "Power generation, geothermal and renewables plants — gas and vessel safety end to end.",
    challenges: [
      "SF6, H2S and ammonia risks",
      "Vessel entries during outages",
      "Multi-site fleet compliance",
    ],
    solutions: [
      "Specialist detection for geothermal H2S",
      "Turnaround CSE and rescue standby",
      "Managed calibration programs",
    ],
  },
];

export const services: Service[] = [
  {
    slug: "h2s",
    title: "H2S Safety Services",
    short: "Hydrogen sulfide standby, monitoring and emergency response for high-risk operations.",
    overview:
      "Hydrogen sulfide is odorless above 100 ppm and lethal within seconds. Our H2S service places certified safety technicians, calibrated detection arrays and full breathing-air support alongside your crew — so drilling, workover, well-testing and turnaround activities move forward without exposure incidents.",
    icon: Wind,
    image: "/img/h2s-service.jpg",
    benefits: [
      "Continuous atmospheric monitoring with wind-direction awareness",
      "Certified H2S technicians available 24/7 across Indonesia",
      "Full SCBA and cascade breathing-air packages",
      "Rescue-capable teams with documented ERPs",
    ],
    scope: [
      "Site H2S risk assessment and ERP development",
      "Deployment of fixed and portable H2S detectors",
      "Wind sock, wind station and briefing area setup",
      "H2S safety technician standby (shift-based)",
      "SCBA, cascade systems and escape sets supply",
      "Post-job reporting with calibration and log records",
    ],
    process: [
      { title: "Assess", body: "Site survey, hazard identification and equipment sizing." },
      { title: "Mobilize", body: "Certified crew and calibrated detection to site within 24 hours." },
      { title: "Monitor", body: "Continuous atmospheric monitoring with shift handovers." },
      { title: "Respond", body: "Rescue-ready team with documented ERP drills." },
      { title: "Report", body: "Full documentation pack for HSE and client audit." },
    ],
    equipment: [
      "Dräger X-am 5000 / 8000 multi-gas detectors",
      "MSA Altair 4XR / 5X portables",
      "Area monitors with telemetry",
      "SCBA and 300-bar cascade systems",
    ],
    faqs: [
      {
        q: "How quickly can you mobilize an H2S standby team?",
        a: "Standard mobilization is 24 hours anywhere in Indonesia; emergency response can start within 6 hours in Java and Kalimantan.",
      },
      {
        q: "Are your technicians certified?",
        a: "All H2S technicians hold OPITO or equivalent H2S training plus IADC / RigPass and are refreshed annually.",
      },
      {
        q: "Do you provide breathing air?",
        a: "Yes — SCBA, escape sets and 300-bar cascade systems are all part of our standard package.",
      },
    ],
  },
  {
    slug: "confined-space-entry",
    title: "Confined Space Entry",
    short: "Turnkey CSE teams — permit control, atmospheric testing, attendants and rescue standby.",
    overview:
      "Every year Indonesian operators lose crews inside tanks, vessels and vaults. Our CSE service brings the full control set — permit-to-work, atmospheric testing, attendant coverage and vertical rescue — so entry work stays within regulation and comes back home safe.",
    icon: HardHat,
    image: "/img/confined-space.jpg",
    benefits: [
      "OSHA and Permenaker-aligned permit control",
      "Pre-entry and continuous gas testing",
      "Trained attendants and entry supervisors",
      "Vertical and confined space rescue standby",
    ],
    scope: [
      "Permit-to-work issuance and control",
      "Atmospheric testing before and during entry",
      "Attendant and entry supervisor deployment",
      "Rescue team with tripods, winches and SRLs",
      "Toolbox talks and JSA facilitation",
      "Post-job entry log and incident-free reporting",
    ],
    process: [
      { title: "Plan", body: "Space classification, JSA and rescue plan development." },
      { title: "Isolate", body: "LOTO verification and ventilation setup." },
      { title: "Test", body: "Atmospheric testing with calibrated multi-gas detectors." },
      { title: "Attend", body: "Continuous attendant coverage and communications." },
      { title: "Rescue", body: "Standby vertical rescue and casualty extraction capability." },
    ],
    equipment: [
      "Tripods and davit arms with 3-way retrieval",
      "Full-body harnesses and self-retracting lifelines",
      "Multi-gas detectors and sample pumps",
      "Blowers, ducting and communications sets",
    ],
    faqs: [
      {
        q: "Do you supply the rescue team as well as attendants?",
        a: "Yes. Every CSE crew includes attendants, entry supervisor and a rescue-capable team with vertical extraction gear.",
      },
      {
        q: "Which regulations do you work to?",
        a: "OSHA 1910.146, ANSI Z117.1 and Kepmenaker 1978 / Permenaker 09/2016.",
      },
      {
        q: "Can you support turnaround shutdowns?",
        a: "Absolutely — from single-tank entries to full refinery turnarounds with dozens of concurrent permits.",
      },
    ],
  },
  {
    slug: "gas-detector-calibration",
    title: "Gas Detector Calibration",
    short: "Certified calibration and bump testing for portable and fixed detection fleets.",
    overview:
      "A detector is only as good as its last calibration. Our lab and on-site calibration service keeps your Dräger, MSA, Honeywell, RKI and BW fleets responsive and audit-ready — with traceable certificates and configurable service intervals.",
    icon: Gauge,
    image: "/img/calibration-lab.jpg",
    benefits: [
      "Traceable calibration to ISO 17025-aligned procedures",
      "OEM-approved gas mixtures and flow controllers",
      "On-site and workshop options",
      "Digital certificates and fleet reporting",
    ],
    scope: [
      "Bump testing and full span calibration",
      "Sensor diagnostics and replacement",
      "Firmware updates and configuration",
      "Docking-station managed programs",
      "Certificate issuance and fleet register",
    ],
    process: [
      { title: "Collect", body: "Pickup or delivery of your detector fleet." },
      { title: "Diagnose", body: "Function check, sensor life review and firmware update." },
      { title: "Calibrate", body: "Span calibration with traceable OEM gas mixtures." },
      { title: "Certify", body: "Digital certificate issued for each unit." },
      { title: "Return", body: "Detectors returned service-ready with fleet report." },
    ],
    equipment: [
      "Certified calibration gas cylinders (H2S, CO, O2, LEL, CO2, SO2, NH3, Cl2)",
      "OEM docking stations (Dräger X-dock, MSA GALAXY, Honeywell IntelliDoX)",
      "Digital flow controllers",
      "ISO 17025-aligned procedures",
    ],
    faqs: [
      {
        q: "Which brands do you calibrate?",
        a: "Dräger, MSA, Honeywell / BW, RKI, Riken Keiki, GfG, Crowcon and Industrial Scientific.",
      },
      {
        q: "How long does calibration take?",
        a: "Workshop turnaround is 24–48 hours; on-site programs run same-day.",
      },
      {
        q: "Do you supply calibration gas?",
        a: "Yes — full range of certified gas mixtures with regulators and flow controllers.",
      },
    ],
  },
];

export const products: Product[] = [
  // ISC Portable Multi-Gas
  {
    slug: "ventis-pro5",
    name: "Ventis Pro5",
    brand: "Industrial Scientific",
    type: "Portable",
    detectorType: "Multi Gas",
    gases: ["H2S", "CO", "O2", "LEL", "CO2", "SO2"],
    image: "/img/ventis-pro5.png",
    short: "Flexible multi-gas detector with advanced connectivity and man-down alarms.",
    features: ["Up to 5 gases monitored simultaneously", "Man-down alarm and panic button", "Wireless connectivity for live monitoring"],
    specs: [{ label: "Sensors", value: "Up to 5" }, { label: "Ingress protection", value: "IP68" }]
  },
  {
    slug: "ventis-mx4",
    name: "Ventis MX4",
    brand: "Industrial Scientific",
    type: "Portable",
    detectorType: "Multi Gas",
    gases: ["H2S", "CO", "O2", "LEL"],
    image: "/img/ventis-mx4.png",
    short: "Reliable 4-gas monitor for personal safety.",
    features: ["Detects up to four gases", "Rugged and durable", "Compatible with DSX Docking Station"],
    specs: [{ label: "Sensors", value: "1-4 gases" }, { label: "Ingress protection", value: "IP67" }]
  },
  {
    slug: "mx6-ibrid",
    name: "MX6 iBrid",
    brand: "Industrial Scientific",
    type: "Portable",
    detectorType: "Multi Gas",
    gases: ["H2S", "CO", "O2", "LEL", "VOC", "NH3"],
    image: "/img/mx6-ibrid.png",
    short: "Advanced 6-gas detector with full color display.",
    features: ["Monitors up to 6 gases", "Full color LCD display", "24 sensor options including PID and IR"],
    specs: [{ label: "Sensors", value: "Up to 6" }, { label: "Display", value: "Color LCD" }]
  },
  {
    slug: "tango-tx2",
    name: "Tango TX2",
    brand: "Industrial Scientific",
    type: "Portable",
    detectorType: "Multi Gas",
    gases: ["H2S", "CO", "O2", "SO2", "NO2"],
    image: "/img/tango-tx2.png",
    short: "Two-gas monitor with individual sensors for enhanced accuracy.",
    features: ["Two-gas detection", "DualSense technology", "Ultra-compact design"],
    specs: [{ label: "Sensors", value: "2 individual sensors" }]
  },

  // ISC Portable Single-Gas
  {
    slug: "tango-tx1",
    name: "Tango TX1",
    brand: "Industrial Scientific",
    type: "Portable",
    detectorType: "Single Gas",
    gases: ["H2S", "CO", "SO2", "NO2"],
    image: "/img/tango-tx1.png",
    short: "Single-gas monitor utilizing DualSense technology.",
    features: ["DualSense technology for redundant sensing", "Guaranteed for Life warranty", "Always-on operation"],
    specs: [{ label: "Sensors", value: "Single gas (Dual redundant)" }]
  },
  {
    slug: "gasbadge-pro",
    name: "GasBadge Pro",
    brand: "Industrial Scientific",
    type: "Portable",
    detectorType: "Single Gas",
    gases: ["H2S", "CO", "O2", "NH3", "Cl2", "ClO2", "HCN", "NO2", "PH3", "SO2"],
    image: "/img/gasbadge-pro.png",
    short: "Interchangeable sensor single-gas monitor.",
    features: ["Interchangeable smart sensors", "Lifetime warranty", "IR communications"],
    specs: [{ label: "Sensors", value: "Single gas (Interchangeable)" }]
  },
  {
    slug: "t40-ii-rattler",
    name: "T40 II Rattler",
    brand: "Industrial Scientific",
    type: "Portable",
    detectorType: "Single Gas",
    gases: ["H2S", "CO"],
    image: "/img/t40-ii-rattler.png",
    short: "Compact, robust, and reliable single-gas monitor.",
    features: ["2-year run time", "Ultra-fast response time", "IP68 water and dust resistant"],
    specs: [{ label: "Sensors", value: "H2S or CO" }, { label: "Battery", value: "2 years" }]
  },

  // ISC Area Monitors & Docking
  {
    slug: "radius-bz1",
    name: "Radius BZ1",
    brand: "Industrial Scientific",
    type: "Portable",
    detectorType: "Area Monitor",
    gases: ["H2S", "CO", "O2", "LEL", "NH3", "Cl2", "VOCs"],
    image: "/img/radius-bz1.png",
    short: "Rugged area monitor with industry-leading battery life and LENS Wireless.",
    features: ["7 days of continuous run time", "LENS Wireless", "108 dB alarms", "DualSense Technology"],
    specs: [{ label: "Sensors", value: "Up to 7 gases" }, { label: "Runtime", value: "168 hours" }]
  },
  {
    slug: "dsx-docking-station",
    name: "DSX Docking Station",
    brand: "Industrial Scientific",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Calibration"],
    image: "/img/dsx-docking-station.png",
    short: "Automated maintenance, record keeping, and fleet management.",
    features: ["Bump testing and calibration", "Automatic record keeping", "Cloud-based or local software options"],
    specs: [{ label: "Function", value: "Calibration / Docking" }]
  },

  // Gastron Fixed Gas Detectors
  {
    slug: "gastron-gtd-2000ex",
    name: "GTD-2000Ex",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Flammable", "LEL"],
    image: "/img/gastron-gtd-2000ex.png",
    short: "Explosion-proof flammable gas detector.",
    features: ["Catalytic combustion sensor", "Explosion-proof structure", "4-20mA output"],
    specs: [{ label: "Detection", value: "Flammable Gas" }]
  },
  {
    slug: "gastron-gtd-2000tx",
    name: "GTD-2000Tx",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Toxic", "O2"],
    image: "/img/gastron-gtd-2000tx.png",
    short: "Explosion-proof toxic and oxygen gas detector.",
    features: ["Electrochemical sensor", "Fast response time", "Explosion proof"],
    specs: [{ label: "Detection", value: "Toxic / Oxygen" }]
  },
  {
    slug: "gastron-gtd-3000ex",
    name: "GTD-3000Ex",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Flammable", "Toxic", "O2"],
    image: "/img/gastron-gtd-3000ex.png",
    short: "Smart type explosion-proof gas detector with local display.",
    features: ["Built-in local display", "One-man calibration", "Explosion-proof structure"],
    specs: [{ label: "Display", value: "OLED / LCD" }]
  },
  {
    slug: "gastron-gtd-1000ex",
    name: "GTD-1000Ex",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Flammable"],
    image: "/img/gastron-gtd-1000ex.png",
    short: "Standard explosion-proof flammable gas detector.",
    features: ["Catalytic sensor", "Explosion-proof structure"],
    specs: [{ label: "Detection", value: "Flammable" }]
  },
  {
    slug: "gastron-gir-3000",
    name: "GIR-3000",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["CO2", "Flammable"],
    image: "/img/gastron-gir-3000.png",
    short: "Infrared gas detector for reliable and long-life detection.",
    features: ["NDIR sensor technology", "5+ years sensor life", "Immune to poisoning"],
    specs: [{ label: "Sensor", value: "Infrared (NDIR)" }]
  },

  // Gastron Portable Gas Detectors
  {
    slug: "gastron-g-finder-multi",
    name: "G-Finder Multi",
    brand: "Gastron",
    type: "Portable",
    detectorType: "Multi Gas",
    gases: ["H2S", "CO", "O2", "LEL"],
    image: "/img/gastron-g-finder-multi.png",
    short: "Compact and lightweight 4-gas portable detector for personal safety.",
    features: ["Monitors 4 gases simultaneously", "One-button operation", "IP67 rating"],
    specs: [{ label: "Sensors", value: "Up to 4" }]
  },
  {
    slug: "gastron-g-finder-single",
    name: "G-Finder Single",
    brand: "Gastron",
    type: "Portable",
    detectorType: "Single Gas",
    gases: ["H2S", "CO", "O2"],
    image: "/img/gastron-g-finder-single.png",
    short: "Reliable single-gas detector for personal protection.",
    features: ["Single gas monitoring", "Replaceable battery and sensor", "Compact design"],
    specs: [{ label: "Sensors", value: "1 Gas" }]
  },
  {
    slug: "gastron-g-finder-pump",
    name: "G-Finder Pump",
    brand: "Gastron",
    type: "Portable",
    detectorType: "Multi Gas",
    gases: ["Sampling"],
    image: "/img/gastron-g-finder-pump.png",
    short: "Motorized pump module for G-Finder detectors.",
    features: ["Motorized sampling pump", "Confined space entry capable", "Easy attachment"],
    specs: [{ label: "Function", value: "Sampling Pump" }]
  },

  // Gastron Fire & Safety / Controllers
  {
    slug: "gastron-gtf-1100u",
    name: "GTF-1100U",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Flame"],
    image: "/img/gastron-gtf-1100u.png",
    short: "UV/IR flame detector for high-risk areas.",
    features: ["Dual UV and IR sensing", "High immunity to false alarms", "Explosion-proof"],
    specs: [{ label: "Detection", value: "Flame (UV/IR)" }]
  },
  {
    slug: "gastron-asc-100",
    name: "ASC-100",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Controller"],
    image: "/img/gastron-asc-100.png",
    short: "Alarm and status controller for gas detection systems.",
    features: ["Multi-channel inputs", "Visual and audible alarms", "Relay outputs"],
    specs: [{ label: "Function", value: "Controller" }]
  },
  {
    slug: "gastron-gtl-200",
    name: "GTL-200",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Controller"],
    image: "/img/gastron-gtl-200.png",
    short: "Advanced multi-channel gas detector controller.",
    features: ["Supports multiple gas detector inputs", "Touchscreen interface", "Network communication"],
    specs: [{ label: "Function", value: "Multi-channel Controller" }]
  }
];


export const projects: Project[] = [
  {
    slug: "kalimantan-turnaround",
    title: "Refinery turnaround CSE coverage — East Kalimantan",
    client: "National Oil Operator",
    industry: "Oil & Gas",
    scope: "H2S standby, confined space entry, rescue standby",
    image: "/img/hero-refinery.jpg",
    metrics: [
      { label: "Duration", value: "42 days" },
      { label: "Concurrent entries", value: "24 / shift" },
      { label: "Incidents", value: "Zero LTI" },
    ],
    summary:
      "Full-scope turnaround coverage for a 60-permit-per-day shutdown, mobilising 48 technicians and 60 portable detectors with zero recordable incidents.",
  },
  {
    slug: "geothermal-h2s-monitoring",
    title: "Geothermal H2S monitoring — West Java",
    client: "Indonesian Geothermal Producer",
    industry: "Energy",
    scope: "Fixed H2S detection design, commissioning and calibration",
    image: "/img/h2s-service.jpg",
    metrics: [
      { label: "Detectors deployed", value: "36" },
      { label: "Site uptime", value: "99.97%" },
      { label: "Response time", value: "< 6 s" },
    ],
    summary:
      "Designed, installed and commissioned a fixed H2S detection grid across a 55 MW geothermal facility, plus a rolling calibration program.",
  },
  {
    slug: "port-tank-clean-marine",
    title: "Port tank-cleaning campaign — Tanjung Priok",
    client: "International Shipping Line",
    industry: "Marine",
    scope: "Gas-free surveys, CSE attendants, portable rental",
    image: "/img/confined-space.jpg",
    metrics: [
      { label: "Vessels served", value: "18" },
      { label: "Detectors on hire", value: "42" },
      { label: "Turnaround", value: "24 h avg." },
    ],
    summary:
      "Provided gas-free certification and CSE cover for a fleet-wide tank cleaning campaign, keeping every vessel to schedule.",
  },
];

export const posts: Post[] = [
  {
    slug: "why-continuous-h2s-monitoring-matters",
    title: "Why continuous H2S monitoring matters more than single-shot readings",
    excerpt:
      "Hydrogen sulfide readings shift by the minute. Here's why compliance-grade programs rely on continuous, logged detection rather than spot tests.",
    date: "2026-05-12",
    author: "SSH HSE Team",
    readMinutes: 6,
    image: "/img/h2s-service.jpg",
    body: [
      "Hydrogen sulfide is heavier than air, drifts with the wind and reaches lethal concentrations within seconds. A single-shot reading tells you the atmosphere was safe at 10:03; it says nothing about 10:04.",
      "Modern H2S programs run continuous personal monitoring, area monitors with telemetry and site-wide logging. This is how operators demonstrate compliance in an audit — and how they intervene before workers are exposed.",
      "In our own field records, more than 60% of alarm events on drilling and workover sites happen within seconds of a stable reading. Continuous detection catches those spikes. Spot testing misses them.",
    ],
  },
  {
    slug: "confined-space-entry-checklist",
    title: "A field-tested confined space entry checklist for Indonesian operators",
    excerpt:
      "A concise CSE checklist mapped to Permenaker 09/2016 and OSHA 1910.146 — with the field-level detail that keeps entries incident-free.",
    date: "2026-03-30",
    author: "SSH Operations",
    readMinutes: 8,
    image: "/img/confined-space.jpg",
    body: [
      "Confined space entry incidents almost never come down to one broken control; they come down to a chain of small omissions. A rigorous checklist stops that chain.",
      "Before entry: classify the space, verify LOTO, ventilate and test the atmosphere. During entry: keep continuous communications with an attendant who stays outside. After entry: log gas readings and reconcile the permit.",
      "The Permenaker 09/2016 framework is compatible with OSHA 1910.146 — most Indonesian operators run to whichever is stricter. A single procedure covering both keeps documentation simple and audits painless.",
    ],
  },
];

export const trustBadges = [
  "ISO 9001:2015",
  "ISO 45001:2018",
  "ISO 14001:2015",
  "Migas Certified",
  "Kemnaker Registered",
  "IADC Member",
];

export const certifications = [
  {
    name: "ISO 9001:2015",
    body: "Quality management system for consistent service delivery.",
    icon: ShieldCheck,
  },
  {
    name: "ISO 45001:2018",
    body: "Occupational health and safety management standard.",
    icon: HardHat,
  },
  {
    name: "ISO 14001:2015",
    body: "Environmental management alignment across operations.",
    icon: Wind,
  },
  {
    name: "Migas Certified",
    body: "Ministry of Energy and Mineral Resources equipment certification.",
    icon: Fuel,
  },
  {
    name: "Kemnaker Registered",
    body: "Ministry of Manpower registered personnel and equipment.",
    icon: Package,
  },
  {
    name: "IECEx / ATEX",
    body: "Hazardous-area rated detection portfolio across every service.",
    icon: Gauge,
  },
];

export const testimonials = [
  {
    quote:
      "Their H2S standby crew mobilised inside 24 hours for a well-testing job in South Sumatra. Documentation was perfect and we finished ahead of plan.",
    author: "HSE Manager",
    company: "Upstream oil operator",
  },
  {
    quote:
      "We managed 60 concurrent permits during a turnaround with zero LTIs. Their attendants were the calmest people on site.",
    author: "Turnaround Lead",
    company: "National refinery",
  },
  {
    quote:
      "Calibration turnaround dropped from a week to 48 hours after we moved to their program. Fleet compliance is finally under control.",
    author: "Procurement Manager",
    company: "Petrochemical producer",
  },
  {
    quote:
      "The team knows geothermal H2S. Our fixed detection grid has been up 99.97% since commissioning.",
    author: "Plant Manager",
    company: "Geothermal producer",
  },
];

export const faqs = [
  {
    q: "How quickly can Surya Segara Hana mobilise a safety team?",
    a: "Standard mobilisation is within 24 hours across Indonesia; emergency response can start within 6 hours in Java and Kalimantan.",
  },
  {
    q: "Do you cover offshore locations?",
    a: "Yes. Our crews and detection fleets are regularly deployed to offshore platforms, FSOs and jack-up rigs across the archipelago.",
  },
  {
    q: "Which detector brands do you rent, sell and calibrate?",
    a: "Dräger, MSA, Honeywell / BW, RKI, Riken Keiki, GfG, Crowcon and Industrial Scientific — plus fixed systems from Dräger Polytron and MSA General Monitors.",
  },
  {
    q: "Are your technicians certified?",
    a: "Every technician holds H2S, CSE and rescue certifications, refreshed annually. Documentation is provided with every mobilisation.",
  },
  {
    q: "Can you handle full turnaround shutdowns?",
    a: "Yes — from a single tank entry to a refinery-wide turnaround with dozens of concurrent permits and a full rescue team.",
  },
  {
    q: "How do rental packages work?",
    a: "Daily, weekly and monthly rates with courier delivery, pre-calibration and post-return service. Ask for our current rental catalogue.",
  },
];

import type { Language } from "./language-context";

export function getLocalizedSite(lang: Language) {
  if (lang === "en") return site;
  return {
    ...site,
    tagline: "Layanan Dukungan Keselamatan Industri",
    description:
      "Layanan H2S spesialis, pekerjaan ruang terbatas (confined space), sewa, penjualan, dan kalibrasi detektor gas untuk minyak & gas, petrokimia, pertambangan, maritim, manufaktur, konstruksi, dan energi di Indonesia.",
    hours: "Senin–Sabtu · 08:00 – 18:00 WIB · Layanan Darurat 24/7",
  };
}

export function getLocalizedIndustries(lang: Language): Industry[] {
  if (lang === "en") return industries;
  return [
    {
      slug: "oil-gas",
      name: "Minyak & Gas",
      icon: Fuel,
      short: "Operator hulu, antara, dan hilir mempercayakan penanganan H2S dan ruang terbatas pada anjungan, tangki, dan jaringan pipa.",
      challenges: [
        "Paparan H2S tinggi dan hidrokarbon volatil",
        "Pembersihan tangki dan masuk bejana dengan jadwal ketat",
        "Lokasi lepas pantai terpencil dengan jendela respon terbatas",
      ],
      solutions: [
        "Teknisi keselamatan H2S siaga 24/7 dan susunan detektor",
        "Tim ruang terbatas siap pakai dengan kemampuan penyelamatan",
        "Armada sewa detektor multi-gas Dräger dan MSA, dikalibrasi di lokasi",
      ],
    },
    {
      slug: "petrochemical",
      name: "Petrokimia",
      icon: Factory,
      short: "Deteksi terkalibrasi dan CSE untuk reaktor, penyimpanan, dan turnaround.",
      challenges: [
        "Inventaris bahan kimia kompleks yang membutuhkan deteksi multi-gas",
        "Shutdown turnaround dalam tenggat waktu yang ketat",
        "Dokumentasi regulasi yang sangat ketat",
      ],
      solutions: [
        "Paket sewa multi-gas khusus dengan pencatatan data",
        "Tim CSE tersertifikasi untuk masuk reaktor dan kolom",
        "Catatan kalibrasi penuh yang selaras dengan ISO 17025",
      ],
    },
    {
      slug: "mining",
      name: "Pertambangan",
      icon: Mountain,
      short: "Pemantauan gas tambang bawah tanah dan terbuka, pengujian ruang pengungsian, dan siaga penyelamatan.",
      challenges: [
        "Risiko metana, CO, dan oksigen rendah di bawah tanah",
        "Jarak jauh antar area kerja",
        "Persyaratan peralatan tahan ledakan (explosion-proof)",
      ],
      solutions: [
        "Detektor portabel dan tetap tersertifikasi IECEx dan ATEX",
        "Program kalibrasi dan bump-testing di lokasi",
        "Tim ruang terbatas dan penyelamatan untuk shaft dan stope",
      ],
    },
    {
      slug: "marine",
      name: "Maritim",
      icon: Ship,
      short: "Sertifikasi bebas gas (gas-free) untuk ruang palka, ballast, dan tangki bunker di perairan Indonesia.",
      challenges: [
        "Izin kerja panas (hot work) di ruang tertutup",
        "Sertifikasi bebas gas kapal tanker",
        "Tekanan jadwal turnaround di pelabuhan",
      ],
      solutions: [
        "Survei bebas gas setara marine chemist tersertifikasi",
        "Sewa multi-gas portabel dengan pengiriman langsung ke pelabuhan",
        "Petugas pengawas 24/7 untuk kerja panas dan masuk tangki",
      ],
    },
    {
      slug: "manufacturing",
      name: "Manufaktur",
      icon: Wrench,
      short: "Perlindungan keselamatan proses untuk pabrik kimia, lini pelapisan, dan pergudangan.",
      challenges: [
        "Kebocoran uap pelarut dan gas beracun",
        "Pemeliharaan ruang terbatas pada tangki dan reaktor",
        "Manajemen armada detektor di berbagai lokasi",
      ],
      solutions: [
        "Desain, instalasi, dan komisioning sistem deteksi tetap",
        "Sewa terkelola dengan kalibrasi terjadwal",
        "Tim CSE siap panggil",
      ],
    },
    {
      slug: "construction",
      name: "Konstruksi",
      icon: Hammer,
      short: "Pekerjaan galian, terowongan, dan utilitas diamankan dengan pemantauan atmosfer dan penyelamatan siaga.",
      challenges: [
        "Ruang utilitas bawah tanah dan manhole",
        "Sambungan saluran pembuangan dan drainase",
        "Pekerjaan berdurasi singkat di banyak lokasi",
      ],
      solutions: [
        "Sewa detektor harian dan mingguan dengan pengiriman kurir",
        "Petugas pengawas siaga ruang terbatas",
        "Pelatihan toolbox mengenai bahaya atmosfer",
      ],
    },
    {
      slug: "energy",
      name: "Energi",
      icon: Zap,
      short: "Pembangkit listrik, panas bumi, dan energi terbarukan — keselamatan gas dan bejana secara menyeluruh.",
      challenges: [
        "Risiko SF6, H2S, dan amonia",
        "Masuk bejana selama masa pemeliharaan (outage)",
        "Kepatuhan armada di banyak lokasi",
      ],
      solutions: [
        "Deteksi khusus untuk H2S panas bumi",
        "CSE turnaround dan penyelamatan siaga",
        "Program kalibrasi terkelola",
      ],
    },
  ];
}

export function getLocalizedServices(lang: Language): Service[] {
  if (lang === "en") return services;
  return services.map((s) => {
    if (s.slug === "h2s") {
      return {
        ...s,
        title: "Layanan Keselamatan H2S",
        short: "Siaga hidrogen sulfida, pemantauan, dan tanggap darurat untuk operasi berrisiko tinggi.",
        overview:
          "Hidrogen sulfida tidak berbau di atas 100 ppm dan mematikan dalam hitungan detik. Layanan H2S kami menempatkan teknisi keselamatan tersertifikasi, susunan detektor terkalibrasi, dan dukungan udara pernapasan penuh bersama tim Anda.",
        benefits: [
          "Pemantauan atmosfer berkelanjutan dengan kesadaran arah angin",
          "Teknisi H2S tersertifikasi tersedia 24/7 di seluruh Indonesia",
          "Paket SCBA penuh dan sistem pernapasan cascade",
          "Tim dengan kemampuan penyelamatan dan ERP terdokumentasi",
        ],
      };
    }
    if (s.slug === "confined-space-entry") {
      return {
        ...s,
        title: "Pekerjaan Ruang Terbatas (CSE)",
        short: "Tim CSE siap pakai — kontrol izin kerja, pengujian atmosfer, pengawas, dan siaga penyelamatan.",
        overview:
          "Setiap tahun pekerja menghadapi risiko tinggi di dalam tangki, bejana, dan ruang tertutup. Layanan CSE kami menghadirkan kontrol penuh — izin kerja, pengujian atmosfer, pengawasan petugas, dan penyelamatan vertikal.",
        benefits: [
          "Kontrol izin kerja selaras dengan OSHA dan Permenaker",
          "Pengujian gas sebelum dan selama aktivitas di ruang terbatas",
          "Petugas pengawas tersertifikasi dan supervisor masuk",
          "Siaga penyelamatan vertikal dan ruang terbatas",
        ],
      };
    }
    if (s.slug === "gas-detector-calibration") {
      return {
        ...s,
        title: "Kalibrasi Detektor Gas",
        short: "Kalibrasi tersertifikasi dan bump testing untuk armada detektor portabel dan tetap.",
        overview:
          "Layanan kalibrasi laboratorium dan lokasi kami menjaga armada Dräger, MSA, Honeywell, RKI, dan BW Anda tetap responsif dan siap diaudit — dengan sertifikat digital terkelola.",
        benefits: [
          "Kalibrasi terdeteksi sesuai prosedur selaras ISO 17025",
          "Campuran gas dan pengatur aliran yang disetujui OEM",
          "Pilihan layanan di lokasi (on-site) maupun workshop",
          "Sertifikat digital dan pelaporan armada",
        ],
      };
    }
    return s;
  });
}

export function getLocalizedProducts(lang: Language): Product[] {
  if (lang === "en") return products;
  return products.map((p) => {
    if (p.slug === "drager-x-am-8000") {
      return { ...p, short: "Detektor portabel 1-7 gas dengan pompa untuk masuk tangki dan bejana." };
    }
    if (p.slug === "msa-altair-5x") {
      return { ...p, short: "Multi-gas tangguh dengan PID untuk pemantauan VOC." };
    }
    if (p.slug === "honeywell-bw-icon") {
      return { ...p, short: "Multi-gas disposable 2 tahun bebas perawatan." };
    }
    if (p.slug === "rki-gx-3r-pro") {
      return { ...p, short: "Monitor 5-gas ringkas dengan alarm man-down." };
    }
    if (p.slug === "drager-polytron-8900") {
      return { ...p, short: "Detektor kebocoran gas ultrasonik untuk jalur tekanan tinggi." };
    }
    if (p.slug === "msa-general-monitors-s5000") {
      return { ...p, short: "Pemancar tetap modular untuk instalasi permanen." };
    }
    return p;
  });
}

export function getLocalizedCertifications(lang: Language) {
  if (lang === "en") return certifications;
  return [
    {
      name: "ISO 9001:2015",
      body: "Sistem manajemen mutu untuk penyampaian layanan yang konsisten.",
      icon: ShieldCheck,
    },
    {
      name: "ISO 45001:2018",
      body: "Standar manajemen keselamatan dan kesehatan kerja (K3).",
      icon: HardHat,
    },
    {
      name: "ISO 14001:2015",
      body: "Penerapan manajemen lingkungan di seluruh operasional.",
      icon: Wind,
    },
    {
      name: "Tersertifikasi Migas",
      body: "Sertifikasi peralatan Kementerian Energi dan Sumber Daya Mineral.",
      icon: Fuel,
    },
    {
      name: "Terdaftar Kemnaker",
      body: "Personel dan peralatan terdaftar di Kementerian Ketenagakerjaan.",
      icon: Package,
    },
    {
      name: "IECEx / ATEX",
      body: "Portofolio deteksi berperingkat area berbahaya untuk setiap layanan.",
      icon: Gauge,
    },
  ];
}

export function getLocalizedTestimonials(lang: Language) {
  if (lang === "en") return testimonials;
  return [
    {
      quote:
        "Tim siaga H2S mereka dimobilisasi kurang dari 24 jam untuk pekerjaan well-testing di Sumatera Selatan. Dokumentasi sangat sempurna dan pekerjaan selesai lebih cepat dari jadwal.",
      author: "HSE Manager",
      company: "Operator Minyak Hulu",
    },
    {
      quote:
        "Kami mengelola 60 izin kerja bersamaan selama turnaround tanpa ada LTI. Petugas pengawas mereka adalah orang-orang paling tenang di lokasi.",
      author: "Turnaround Lead",
      company: "Kilang Nasional",
    },
    {
      quote:
        "Waktu siklus kalibrasi turun dari seminggu menjadi 48 jam setelah kami beralih ke program mereka. Kepatuhan armada akhirnya terkendali.",
      author: "Procurement Manager",
      company: "Produsen Petrokimia",
    },
    {
      quote:
        "Tim ini sangat memahami H2S panas bumi. Jaringan deteksi tetap kami telah beroperasi 99,97% sejak komisioning.",
      author: "Plant Manager",
      company: "Produsen Geothermal",
    },
  ];
}

export function getLocalizedFaqs(lang: Language) {
  if (lang === "en") return faqs;
  return [
    {
      q: "Seberapa cepat Surya Segara Hana dapat memobilisasi tim keselamatan?",
      a: "Mobilisasi standar dilakukan dalam 24 jam di seluruh Indonesia; tanggap darurat dapat dimulai dalam 6 jam di Jawa dan Kalimantan.",
    },
    {
      q: "Apakah Anda melayani lokasi lepas pantai (offshore)?",
      a: "Ya. Tim dan armada deteksi kami secara rutin ditempatkan di anjungan lepas pantai, FSO, dan rig jack-up di seluruh kepulauan Indonesia.",
    },
    {
      q: "Merek detektor gas apa saja yang Anda sewakan, jual, dan kalibrasi?",
      a: "Dräger, MSA, Honeywell / BW, RKI, Riken Keiki, GfG, Crowcon, dan Industrial Scientific — serta sistem tetap dari Dräger Polytron dan MSA General Monitors.",
    },
    {
      q: "Apakah teknisi Anda tersertifikasi?",
      a: "Setiap teknisi memegang sertifikasi H2S, CSE, dan penyelamatan yang diperbarui setiap tahun. Dokumentasi diberikan pada setiap mobilisasi.",
    },
    {
      q: "Apakah Anda dapat menangani pemeliharaan total (turnaround shutdown)?",
      a: "Ya — mulai dari satu pekerjaan masuk tangki hingga turnaround skala kilang dengan puluhan izin kerja bersamaan dan tim penyelamat penuh.",
    },
    {
      q: "Bagaimana cara kerja paket penyewaan?",
      a: "Tersedia tarif harian, mingguan, dan bulanan dengan pengiriman kurir, pra-kalibrasi, dan layanan purna-sewa. Hubungi kami untuk katalog sewa terbaru.",
    },
  ];
}
