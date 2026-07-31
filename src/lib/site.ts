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
  Flame,
  Activity,
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
    slug: "gas-detection-system",
    title: "Gas Detection System",
    short: "Design, supply, and installation of fixed and portable gas detection systems.",
    overview: "We provide comprehensive gas detection solutions tailored to your operational needs. Our systems ensure early warning for toxic and combustible gases to protect personnel and critical assets across industrial sites.",
    icon: ShieldCheck,
    image: "/img/hero-refinery.webp",
    benefits: [
      "Custom-engineered detection layouts for optimal coverage",
      "Integration with existing plant safety systems",
      "High reliability in harsh and hazardous environments",
      "Compliance with international safety standards"
    ],
    scope: [
      "Site survey and hazard assessment",
      "System design and engineering",
      "Equipment supply and installation",
      "Testing, commissioning, and handover"
    ],
    process: [
      { title: "Assess", body: "Evaluate site hazards and determine detector placements." },
      { title: "Design", body: "Engineer a custom fixed or portable detection solution." },
      { title: "Install", body: "Deploy and securely integrate the detection equipment." },
      { title: "Commission", body: "Test all alarms and sensors prior to handover." }
    ],
    equipment: [
      "Fixed Gas Transmitters (LEL, Toxic, O2)",
      "Controllers and Alarm Panels",
      "Portable Multi-Gas Detectors",
      "Audible and Visual Alarm Beacons"
    ],
    faqs: [
      { q: "Do you design custom systems?", a: "Yes, our engineers design layouts based on your specific site hazards and structural constraints." },
      { q: "What brands do you support?", a: "We work with top-tier brands like Industrial Scientific, Dräger, MSA, and Gastron." }
    ]
  },
  {
    slug: "gas-monitoring-system",
    title: "Gas Monitoring System",
    short: "Real-time atmospheric monitoring solutions for continuous environmental safety.",
    overview: "Continuous gas monitoring is crucial for proactive safety. We offer advanced monitoring solutions equipped with data logging, wireless telemetry, and central control stations to keep you informed of your site's atmospheric conditions 24/7.",
    icon: Activity,
    image: "/img/confined-space.webp",
    benefits: [
      "Real-time visibility into site-wide gas readings",
      "Wireless telemetry for rapid remote deployment",
      "Comprehensive data logging for compliance and auditing",
      "Automated alerts to safety managers"
    ],
    scope: [
      "Deployment of wireless area monitors",
      "Setup of central monitoring software and dashboards",
      "Network configuration for telemetry",
      "Training for control room operators"
    ],
    process: [
      { title: "Plan", body: "Identify critical zones requiring continuous monitoring." },
      { title: "Setup", body: "Deploy wireless monitors and establish network connections." },
      { title: "Connect", body: "Integrate data feeds into a central dashboard." },
      { title: "Monitor", body: "Provide ongoing data logging and real-time alerts." }
    ],
    equipment: [
      "Wireless Area Monitors (e.g., Radius BZ1)",
      "Central Monitoring Software (iNet Now)",
      "Signal Repeaters and Gateways",
      "Cloud-based Data Loggers"
    ],
    faqs: [
      { q: "Can we monitor the data remotely?", a: "Yes, our cloud-connected solutions allow safety managers to view real-time data from anywhere." }
    ]
  },
  {
    slug: "calibration-maintenance",
    title: "Calibration & Maintenance",
    short: "Certified calibration, bump testing, and lifecycle maintenance for gas detectors.",
    overview: "A detector is only reliable if properly maintained. Our certified technicians provide routine calibration, sensor replacement, and full maintenance for your fixed and portable gas detection fleets, ensuring they respond accurately when it matters most.",
    icon: Wrench,
    image: "/img/calibration-lab.webp",
    benefits: [
      "Traceable calibration to recognized standards",
      "Use of certified OEM gas mixtures",
      "Flexible options: on-site service or workshop repair",
      "Digital certificates and fleet management reporting"
    ],
    scope: [
      "Bump testing and full span calibration",
      "Sensor diagnostics and replacement",
      "Firmware updates and configuration",
      "Certificate issuance and record keeping"
    ],
    process: [
      { title: "Diagnose", body: "Function check and sensor life evaluation." },
      { title: "Calibrate", body: "Span calibration with traceable gas mixtures." },
      { title: "Repair", body: "Replacement of depleted sensors or damaged parts." },
      { title: "Certify", body: "Issue digital calibration certificates for compliance." }
    ],
    equipment: [
      "Certified Calibration Gas Cylinders",
      "OEM Docking Stations",
      "Digital Flow Regulators",
      "Diagnostic Software Tools"
    ],
    faqs: [
      { q: "How long does calibration take?", a: "Workshop turnaround is typically 24-48 hours. On-site calibration can be done the same day." },
      { q: "Do you service third-party equipment?", a: "Yes, we are equipped to calibrate and maintain major brands including Industrial Scientific, MSA, and Dräger." }
    ]
  },
  {
    slug: "h2s-safety-services",
    title: "H2S Safety Services",
    short: "Hydrogen sulfide standby, monitoring, and emergency response for high-risk operations.",
    overview: "Hydrogen sulfide (H2S) is a highly toxic, colorless gas. Our specialized H2S safety services provide trained safety technicians, continuous monitoring, and comprehensive breathing air systems to protect your crew during critical drilling and turnaround operations.",
    icon: Wind,
    image: "/img/h2s-service.webp",
    benefits: [
      "Expert H2S technicians available 24/7",
      "Continuous atmospheric monitoring",
      "Provision of complete breathing air cascade systems",
      "Documented emergency response plans (ERP)"
    ],
    scope: [
      "Site H2S risk assessment",
      "Deployment of safety technicians",
      "Setup of breathing air cascade systems and SCBAs",
      "Emergency rescue standby and drills"
    ],
    process: [
      { title: "Assess", body: "Evaluate site hazards and prepare H2S ERP." },
      { title: "Mobilize", body: "Deploy trained technicians and breathing air equipment." },
      { title: "Monitor", body: "Continuous atmospheric monitoring and crew supervision." },
      { title: "Respond", body: "Immediate action and rescue in case of gas release." }
    ],
    equipment: [
      "SCBA and Escape Sets (EEBD)",
      "High-Pressure Cascade Air Systems",
      "Portable Multi-Gas Detectors",
      "Wind Socks and Safety Signage"
    ],
    faqs: [
      { q: "Are your technicians certified?", a: "Yes, all our H2S safety technicians hold valid certifications and undergo regular emergency drills." }
    ]
  },
  {
    slug: "tank-cleaning-cse",
    title: "Tank Cleaning & Confined Space",
    short: "Turnkey confined space entry (CSE) and safe tank cleaning with rescue standby.",
    overview: "Confined space entry is one of the most hazardous industrial activities. We provide complete CSE solutions including permit-to-work management, continuous ventilation, atmospheric testing, and highly trained rescue standby teams to ensure safe tank cleaning and maintenance.",
    icon: HardHat,
    image: "/img/confined-space.webp",
    benefits: [
      "Strict adherence to OSHA and Permenaker CSE standards",
      "Pre-entry and continuous atmospheric testing",
      "Trained confined space attendants and entry supervisors",
      "Fully equipped vertical rescue standby teams"
    ],
    scope: [
      "Permit-to-work issuance and hazard isolation",
      "Forced ventilation and gas testing",
      "Supervision of tank cleaning personnel",
      "Standby confined space rescue"
    ],
    process: [
      { title: "Plan", body: "Develop JSA and rescue plans for the specific space." },
      { title: "Isolate", body: "Perform LOTO and initiate forced ventilation." },
      { title: "Test", body: "Verify safe atmospheric conditions before entry." },
      { title: "Execute", body: "Provide continuous attendant monitoring during work." }
    ],
    equipment: [
      "Tripods, Davit Arms, and Winches",
      "Explosion-proof Blowers and Ducting",
      "Full-body Harnesses and SRLs",
      "Multi-gas Sample Pumps"
    ],
    faqs: [
      { q: "Do you provide the rescue team?", a: "Yes, our service includes a fully equipped, trained standby rescue team ready for immediate extraction." }
    ]
  },
  {
    slug: "fire-alarm-system",
    title: "Fire & Alarm System",
    short: "Installation and maintenance of advanced fire detection and suppression systems.",
    overview: "Early detection of fire is critical to minimizing damage and saving lives. We provide end-to-end fire alarm system solutions, from initial layout design and equipment installation to routine testing and integration with existing safety infrastructure.",
    icon: Flame,
    image: "/img/hero-refinery.webp",
    benefits: [
      "Rapid detection of smoke, heat, and flames",
      "Compliance with NFPA and local fire safety codes",
      "Seamless integration with gas detection and shutdown systems",
      "Scalable solutions for small facilities to large plants"
    ],
    scope: [
      "Fire risk assessment and system design",
      "Installation of smoke, heat, and flame detectors",
      "Configuration of fire alarm control panels",
      "Periodic maintenance and alarm testing"
    ],
    process: [
      { title: "Design", body: "Map out detector placements according to fire codes." },
      { title: "Install", body: "Mount detectors, pull cables, and set up panels." },
      { title: "Integrate", body: "Link fire alarms with broader plant safety systems." },
      { title: "Maintain", body: "Conduct periodic testing to ensure system readiness." }
    ],
    equipment: [
      "Addressable Fire Alarm Panels",
      "Optical Smoke and Heat Detectors",
      "Triple IR (IR3) Flame Detectors",
      "Manual Call Points and Sirens"
    ],
    faqs: [
      { q: "Can your fire alarms integrate with gas detectors?", a: "Yes, we often integrate fire and gas (F&G) systems into a unified safety control panel." }
    ]
  }
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
    features: [
      "Monitors up to 5 gases simultaneously",
      "LENS Wireless for peer-to-peer alarm sharing",
      "Man-down alarm and dedicated panic button",
      "Wi-Fi, cellular, and satellite connectivity options",
      "IP68 water and dust resistant",
      "Compatible with DSX Docking Station"
    ],
    specs: [
      { label: "Dimensions", value: "104 x 58 x 36 mm" },
      { label: "Weight", value: "200 g (without pump)" },
      { label: "Sensors", value: "Catalytic Bead, Electrochemical, PID" },
      { label: "Ingress Protection", value: "IP68" },
      { label: "Battery", value: "Rechargeable Li-ion (up to 36 hours)" },
      { label: "Display", value: "Backlit LCD" }
    ]
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
    features: [
      "Detects up to four gases (LEL, CO, H2S, O2)",
      "Rugged and durable polycarbonate housing",
      "Compatible with DSX Docking Station and iNet",
      "Audible, visual, and vibrating alarms",
      "Available with or without integral pump"
    ],
    specs: [
      { label: "Dimensions", value: "103 x 58 x 30 mm" },
      { label: "Weight", value: "182 g" },
      { label: "Sensors", value: "1-4 gases" },
      { label: "Battery", value: "Rechargeable Li-ion" },
      { label: "Ingress Protection", value: "IP67" }
    ]
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
    features: [
      "Monitors up to 6 gases simultaneously",
      "Full color graphic LCD display",
      "24 interchangeable sensor options (incl. PID and IR)",
      "Rugged overmold design for harsh environments",
      "Intuitive menu-driven navigation"
    ],
    specs: [
      { label: "Dimensions", value: "135 x 77 x 43 mm" },
      { label: "Weight", value: "409 g" },
      { label: "Sensors", value: "Up to 6 gases" },
      { label: "Display", value: "Color Graphic LCD" },
      { label: "Ingress Protection", value: "IP66" }
    ]
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
    features: [
      "Detects 2 gases simultaneously with one device",
      "DualSense Technology for increased safety",
      "Guaranteed for Life™ warranty",
      "AlarmAmp™ increases audible alarm to 110 dB",
      "Ultra-compact and lightweight design"
    ],
    specs: [
      { label: "Dimensions", value: "99 x 51 x 35 mm" },
      { label: "Weight", value: "126 g" },
      { label: "Sensors", value: "2 individual sensors" },
      { label: "Battery", value: "Replaceable Lithium (2 years)" },
      { label: "Ingress Protection", value: "IP66 / IP67" }
    ]
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
    features: [
      "DualSense Technology for redundant sensing",
      "Guaranteed for Life™ warranty",
      "Always-on operation with 2-3 years runtime",
      "Polycarbonate case with rubber overmold",
      "100 dB alarm (110 dB with optional AlarmAmp™)"
    ],
    specs: [
      { label: "Dimensions", value: "99 x 51 x 35 mm" },
      { label: "Weight", value: "126 g" },
      { label: "Sensors", value: "Electrochemical (CO, H2S, NO2, SO2)" },
      { label: "Ingress Protection", value: "IP66 / IP67" },
      { label: "Battery", value: "3.6V Primary Lithium (2-3 years)" },
      { label: "Display", value: "Segment LCD" }
    ]
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
    features: [
      "Interchangeable smart sensors",
      "Guaranteed for Life™ warranty",
      "IR communications for docking and configuration",
      "Customizable alarm limits",
      "Water resistant and durable housing"
    ],
    specs: [
      { label: "Dimensions", value: "94 x 50.8 x 27.9 mm" },
      { label: "Weight", value: "85 g" },
      { label: "Sensors", value: "Single gas (Interchangeable)" },
      { label: "Battery", value: "Replaceable CR2 (1 year)" },
      { label: "Display", value: "Custom LCD with backlight" }
    ]
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
    features: [
      "Ultra-fast response time (t90 < 10 seconds)",
      "2-year continuous run time",
      "IP68 water and dust resistant",
      "Compact, robust, and reliable design",
      "Clear visual, audible, and vibrating alarms"
    ],
    specs: [
      { label: "Dimensions", value: "86 x 58 x 29 mm" },
      { label: "Weight", value: "98 g" },
      { label: "Sensors", value: "H2S or CO" },
      { label: "Battery", value: "Non-replaceable Li (2 years)" },
      { label: "Alarms", value: "95 dB audible alarm" }
    ]
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
    features: [
      "Detects up to 7 gases simultaneously",
      "DualSense Technology for redundant sensing",
      "LENS Wireless for seamless alarm sharing",
      "108 dB audible alarm & redundant LED strobes",
      "Customizable text-based alarm action messages",
      "Downward-facing sensors for all-weather accuracy"
    ],
    specs: [
      { label: "Dimensions", value: "29 x 29 x 55 cm" },
      { label: "Weight", value: "7.5 kg" },
      { label: "Sensors", value: "Up to 7 gases" },
      { label: "Ingress Protection", value: "IP66" },
      { label: "Battery Runtime", value: "Up to 7 days (168 hours)" },
      { label: "Alarms", value: "108 dB at 1m, visual strobes" }
    ]
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
    features: [
      "Automatic bump testing and calibration",
      "Cloud-based or local software (iNet) options",
      "Automatic record keeping and compliance tracking",
      "Print calibration certificates directly",
      "Auto-detects gas cylinders and expiration dates"
    ],
    specs: [
      { label: "Dimensions", value: "22.7 x 16.9 x 27.3 cm" },
      { label: "Ports", value: "3 gas ports, 1 fresh air" },
      { label: "Network", value: "10/100 Ethernet" },
      { label: "Power", value: "110-240V AC" },
      { label: "Function", value: "Calibration / Docking" }
    ]
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
    features: [
      "Catalytic combustion sensor for flammable gases",
      "Explosion-proof structure for hazardous areas",
      "Standard 4-20mA continuous output signal",
      "Built-in microprocessor for reliability",
      "Easy zero and span adjustment"
    ],
    specs: [
      { label: "Detection", value: "Flammable Gases (LEL)" },
      { label: "Response Time", value: "< 15 sec" },
      { label: "Output", value: "4-20mA DC" },
      { label: "Power", value: "24V DC" },
      { label: "Enclosure", value: "Ex d IIC T6" }
    ]
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
    features: [
      "High-precision electrochemical sensor",
      "Fast response time to toxic leaks and oxygen deficiency",
      "Explosion-proof structure (Ex d IIC T6)",
      "Standard 4-20mA analog output",
      "Easy maintenance and calibration"
    ],
    specs: [
      { label: "Detection", value: "Toxic Gases & Oxygen" },
      { label: "Output Signal", value: "4-20mA DC" },
      { label: "Accuracy", value: "±3% / Full scale" },
      { label: "Power", value: "24V DC" },
      { label: "Enclosure", value: "Ex d IIC T6" }
    ]
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
    features: [
      "Built-in microprocessor for continuous self-monitoring",
      "2x16 character backlit LCD/OLED display",
      "Non-intrusive calibration via magnetic bar",
      "2-stage alarm outputs and relay contacts",
      "Status LEDs for Normal, Alarm, and Trouble"
    ],
    specs: [
      { label: "Measuring Type", value: "Diffusion type" },
      { label: "Response Time", value: "< 15 seconds" },
      { label: "Output Signal", value: "4-20mA DC, RS-485 Modbus" },
      { label: "Operating Temp", value: "-20°C to 50°C" },
      { label: "Enclosure Rating", value: "Ex d IIC T6 (Flame-proof)" },
      { label: "Material", value: "SUS316" }
    ]
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
    features: [
      "Cost-effective flammable gas detector",
      "Explosion-proof construction for industrial use",
      "Continuous monitoring of LEL levels",
      "Standard 4-20mA output",
      "Simple installation and maintenance"
    ],
    specs: [
      { label: "Sensor", value: "Catalytic Cell" },
      { label: "Measuring Range", value: "0-100% LEL" },
      { label: "Output", value: "4-20mA" },
      { label: "Temp Range", value: "-20°C to 50°C" },
      { label: "Rating", value: "Ex d IIC T5" }
    ]
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
    features: [
      "Non-Dispersive Infrared (NDIR) technology",
      "Long sensor life (5+ years)",
      "Immune to sensor poisoning",
      "Works in oxygen-depleted environments",
      "High accuracy and fast response time"
    ],
    specs: [
      { label: "Sensor", value: "Infrared (NDIR)" },
      { label: "Detection", value: "CO2 / Hydrocarbons" },
      { label: "Response", value: "< 10 sec" },
      { label: "Output", value: "4-20mA / RS-485" },
      { label: "Rating", value: "Ex d IIC T6" }
    ]
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
    features: [
      "Monitors 4 gases (O2, CO, H2S, LEL) simultaneously",
      "Maintenance-Free up to 2 years of continuous operation",
      "Bluetooth 5.0 for mobile app integration",
      "Compatible with G-Finder Pump (GFP-10)",
      "Single-button operation with real-time display"
    ],
    specs: [
      { label: "Dimensions", value: "67 x 119 x 45 mm" },
      { label: "Weight", value: "223 g" },
      { label: "Sensors", value: "Electrochemical & Infrared" },
      { label: "Ingress Protection", value: "IP68" },
      { label: "Battery", value: "3.6V Primary Lithium (Li-SOCl2)" },
      { label: "Explosion Proof", value: "Ex ia IIC T4 Ga" }
    ]
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
    features: [
      "Detects O2, CO, or H2S reliably",
      "2-year maintenance-free operation",
      "High-visibility LCD display",
      "Rubber overmold for impact protection",
      "Loud 90dB alarm, bright LEDs, and vibration"
    ],
    specs: [
      { label: "Dimensions", value: "54 x 91 x 32 mm" },
      { label: "Weight", value: "93 g" },
      { label: "Battery", value: "Lithium (2 years)" },
      { label: "Alarms", value: "90dB / LED / Vibrate" },
      { label: "Rating", value: "IP67" }
    ]
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
    features: [
      "Motorized sampling pump for G-Finder detectors",
      "Easy slide-in attachment mechanism",
      "Enables confined space entry clearance",
      "Built-in dust and water filter",
      "Low flow alarm indicator"
    ],
    specs: [
      { label: "Flow Rate", value: "0.5 L/min" },
      { label: "Power", value: "Rechargeable Li-ion" },
      { label: "Operating Time", value: "10+ hours" },
      { label: "Weight", value: "150 g" }
    ]
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
    features: [
      "Dual UV and IR sensors for high reliability",
      "High immunity to false alarms",
      "Fast response to fires",
      "Explosion-proof housing",
      "Wide field of view"
    ],
    specs: [
      { label: "Detection", value: "UV/IR Flame" },
      { label: "Range", value: "Up to 30m" },
      { label: "Response", value: "< 5 sec" },
      { label: "Output", value: "4-20mA / Relays" },
      { label: "Rating", value: "Ex d IIC T6" }
    ]
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
    features: [
      "Advanced gas status controller",
      "Multi-channel inputs (up to 12 channels)",
      "LCD display with touch interface",
      "RS-485 network communication",
      "Visual and audible alarm indicators"
    ],
    specs: [
      { label: "Inputs", value: "4-20mA (4 to 12 CH)" },
      { label: "Outputs", value: "Relay / RS-485" },
      { label: "Display", value: "Graphic LCD" },
      { label: "Power", value: "110/220V AC" }
    ]
  },
  {
    slug: "gastron-gtl-200",
    name: "GTL-200",
    brand: "Gastron",
    type: "Fixed",
    detectorType: "Fixed System",
    gases: ["Alarm"],
    image: "/img/gastron-gtl-200.png",
    short: "Combined Explosion-Proof Sounder & Beacon for gas and flame detection systems.",
    features: [
      "Combined Explosion-Proof Sounder & Beacon",
      "Max 120 dB sound output with 64 sound sources",
      "High-intensity LED with lens-type dispersion",
      "Adjustable volume and rotation speed"
    ],
    specs: [
      { label: "Sound Output", value: "120 dB @ 1m" },
      { label: "Visual", value: "LED (Red, Green, Yellow, Blue)" },
      { label: "Ingress Protection", value: "IP66" },
      { label: "Explosion Proof", value: "Ex d IIC T4–T6" },
      { label: "Weight", value: "6.2 kg" }
    ]
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
    if (s.slug === "gas-detection-system") {
      return {
        ...s,
        title: "Sistem Deteksi Gas",
        short: "Desain, pasokan, dan instalasi sistem deteksi gas tetap dan portabel.",
        overview: "Kami menyediakan solusi deteksi gas komprehensif yang disesuaikan dengan kebutuhan operasional Anda. Sistem kami memastikan peringatan dini terhadap gas beracun dan mudah terbakar untuk melindungi personel dan aset penting.",
        benefits: ["Desain tata letak khusus untuk cakupan optimal", "Integrasi dengan sistem keselamatan pabrik", "Keandalan tinggi di lingkungan ekstrem", "Kepatuhan standar keselamatan internasional"],
        process: [
          { title: "Penilaian", body: "Mengevaluasi bahaya lokasi dan penempatan." },
          { title: "Desain", body: "Merancang solusi deteksi khusus." },
          { title: "Instalasi", body: "Memasang peralatan deteksi dengan aman." },
          { title: "Komisioning", body: "Menguji alarm sebelum serah terima." }
        ]
      };
    }
    if (s.slug === "gas-monitoring-system") {
      return {
        ...s,
        title: "Sistem Pemantauan Gas",
        short: "Solusi pemantauan atmosfer real-time untuk keselamatan berkelanjutan.",
        overview: "Pemantauan gas berkelanjutan sangat penting. Kami menawarkan solusi pemantauan dengan pencatatan data dan telemetri nirkabel untuk memberi informasi kondisi atmosfer 24/7.",
        benefits: ["Visibilitas real-time pembacaan gas", "Telemetri nirkabel yang cepat", "Pencatatan data komprehensif untuk audit", "Peringatan otomatis ke manajer keselamatan"],
        process: [
          { title: "Perencanaan", body: "Mengidentifikasi zona kritis pemantauan." },
          { title: "Persiapan", body: "Menyebarkan monitor nirkabel." },
          { title: "Koneksi", body: "Mengintegrasikan umpan data." },
          { title: "Pemantauan", body: "Menyediakan peringatan waktu nyata." }
        ]
      };
    }
    if (s.slug === "calibration-maintenance") {
      return {
        ...s,
        title: "Kalibrasi & Pemeliharaan",
        short: "Kalibrasi tersertifikasi, bump test, dan perawatan armada detektor gas.",
        overview: "Detektor butuh pemeliharaan rutin. Teknisi tersertifikasi kami menyediakan kalibrasi dan perbaikan penuh untuk armada Anda, memastikan alat responsif saat dibutuhkan.",
        benefits: ["Kalibrasi tertelusur (traceable)", "Campuran gas OEM tersertifikasi", "Opsi di lokasi (on-site) atau workshop", "Sertifikat digital"],
        process: [
          { title: "Diagnosis", body: "Pemeriksaan fungsi dan sensor." },
          { title: "Kalibrasi", body: "Kalibrasi bentang (span)." },
          { title: "Perbaikan", body: "Penggantian suku cadang rusak." },
          { title: "Sertifikasi", body: "Penerbitan sertifikat digital." }
        ]
      };
    }
    if (s.slug === "h2s-safety-services") {
      return {
        ...s,
        title: "Layanan Keselamatan H2S",
        short: "Siaga H2S, pemantauan, dan tanggap darurat operasi berrisiko tinggi.",
        overview: "H2S sangat beracun. Layanan keselamatan kami menyediakan teknisi terlatih, pemantauan terus-menerus, dan sistem udara pernapasan yang komprehensif untuk kru Anda.",
        benefits: ["Teknisi ahli tersedia 24/7", "Pemantauan atmosfer terus-menerus", "Sistem cascade udara pernapasan", "Rencana darurat terdokumentasi"],
        process: [
          { title: "Penilaian", body: "Menyusun ERP H2S khusus." },
          { title: "Mobilisasi", body: "Mengerahkan teknisi dan peralatan." },
          { title: "Pemantauan", body: "Pengawasan kru berkelanjutan." },
          { title: "Tanggapan", body: "Tindakan langsung penyelamatan." }
        ]
      };
    }
    if (s.slug === "tank-cleaning-cse") {
      return {
        ...s,
        title: "Pembersihan Tangki & Ruang Terbatas",
        short: "Solusi masuk ruang terbatas (CSE) dan pembersihan tangki aman.",
        overview: "Kami menyediakan solusi CSE lengkap termasuk manajemen izin kerja, ventilasi, pengujian atmosfer, dan tim penyelamat siaga untuk pembersihan tangki.",
        benefits: ["Kepatuhan OSHA dan Permenaker", "Pengujian gas ketat", "Petugas pengawas terlatih", "Tim siaga penyelamatan vertikal"],
        process: [
          { title: "Perencanaan", body: "Membuat JSA spesifik." },
          { title: "Isolasi", body: "Melakukan LOTO dan ventilasi." },
          { title: "Pengujian", body: "Verifikasi atmosfer aman." },
          { title: "Eksekusi", body: "Pengawasan terus-menerus." }
        ]
      };
    }
    if (s.slug === "fire-alarm-system") {
      return {
        ...s,
        title: "Sistem Alarm Kebakaran",
        short: "Instalasi dan pemeliharaan sistem pendeteksi api tingkat lanjut.",
        overview: "Deteksi dini sangat penting. Kami menyediakan solusi sistem alarm kebakaran dari desain tata letak, instalasi, hingga integrasi dengan sistem keselamatan.",
        benefits: ["Deteksi cepat api dan asap", "Kepatuhan kode kebakaran (NFPA)", "Integrasi dengan deteksi gas", "Solusi terukur untuk semua fasilitas"],
        process: [
          { title: "Desain", body: "Memetakan penempatan detektor." },
          { title: "Instalasi", body: "Memasang panel dan kabel." },
          { title: "Integrasi", body: "Menghubungkan dengan sistem keselamatan." },
          { title: "Pemeliharaan", body: "Pengujian rutin kesiapan alarm." }
        ]
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
