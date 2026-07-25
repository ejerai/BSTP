export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  image: string;
  models: string[];
  specs: Record<string, string>;
}

export const productsData: Product[] = [
  {
    id: "elektromotor-1",
    name: "Elektromotor",
    category: "motor",
    brand: "Gear Motor / DC Motor Series",
    image: "assets/images/catalog/elektromotor1.webp",
    models: ["AC Induction Motor", "DC Gearmotor Series", "IK Series", "Z Series"],
    specs: {
      "Daya": "3W – 250W",
      "Tipe": "AC Induction / DC Gearmotor",
      "Tegangan": "220V AC / 12V – 90V DC",
      "Aplikasi": "Conveyor, Otomasi, Industri Umum"
    }
  },
  {
    id: "elektromotor-2",
    name: "Elektromotor",
    category: "motor",
    brand: "Gear Motor / DC Motor Series",
    image: "assets/images/catalog/elektromotor2.webp",
    models: ["AC Induction Motor", "DC Gearmotor Series", "IK Series", "Z Series"],
    specs: {
      "Daya": "3W – 250W",
      "Tipe": "AC Induction / DC Gearmotor",
      "Tegangan": "220V AC / 12V – 90V DC",
      "Aplikasi": "Conveyor, Otomasi, Industri Umum"
    }
  },
  {
    id: "vibrator-1",
    name: "Vibrator Motor",
    category: "vibrator",
    brand: "ITAL VIBRAS / ADK / BONZER",
    image: "assets/images/catalog/vibrator1.webp",
    models: ["VAM Series (1-Phase)", "VA Series (3-Phase)", "AF/T Series"],
    specs: {
      "Tipe": "Industrial Vibrator Motor",
      "Tegangan": "220V (1-Phase) / 220V–360V (3-Phase)",
      "Aplikasi": "Screening, Silo, Vibrating Feeder, Konstruksi Beton",
      "Kualitas": "Standard Internasional"
    }
  },
  {
    id: "worm-gear-reducer-1",
    name: "Worm Gear Reducer",
    category: "gearbox",
    brand: "CHENTA / REVCO / YUEMA",
    image: "assets/images/catalog/wormgearreducer1.webp",
    models: ["WPA 40-250", "WPS 40-250"],
    specs: {
      "Ukuran (Sizes)": "40, 50, 60, 70, 80, 100, 120, 135, 155, 175, 200, 250",
      "Rasio Putaran (Ratio)": "1/10 ~ 1/60",
      "Tipe": "Worm Gear Reducer",
      "Koneksi Input": "Solid Shaft (WPA / WPS)"
    }
  },
  {
    id: "worm-gear-1",
    name: "Worm Gear",
    category: "worm-gear",
    brand: "CHENTA / REVCO / YUEMA",
    image: "assets/images/catalog/wormgear1.webp",
    models: ["WPA Series", "WPS Series"],
    specs: {
      "Tipe": "Worm Gear Set",
      "Rasio Putaran (Ratio)": "1/10 ~ 1/60",
      "Aplikasi": "Transmisi Daya Sudut Siku",
      "Material": "Cast Iron / Bronze Worm Wheel"
    }
  },
  {
    id: "helical-gearmotor-1",
    name: "Helical Gear Motor",
    category: "gearmotor",
    brand: "Compact Gearmotor Series",
    image: "assets/images/catalog/helicalgearmotor1.webp",
    models: ["G3LM Series", "G3FM Series", "G3LS Series", "G3L Series"],
    specs: {
      "Ukuran (Sizes)": "18 - 22 - 28 - 32 mm",
      "Torsi Maksimal": "120 Nm",
      "Rasio Putaran (Ratio)": "5 ~ 200",
      "Daya Motor (Power)": "0.1 ~ 1.5 kW"
    }
  },
  {
    id: "centrifugal-pump-1",
    name: "Centrifugal Pump",
    category: "pump",
    brand: "EBARA / CNP / Fire Hydrant Series",
    image: "assets/images/catalog/centrifugalpump1.webp",
    models: ["Ebara End Suction", "Fire Hydrant Pump", "Electric Hydrant Pump"],
    specs: {
      "Tipe": "End Suction / Fire Hydrant Centrifugal Pump",
      "Aplikasi": "Transfer Air, Proteksi Kebakaran Gedung",
      "Material Impeller": "Bronze / Cast Iron",
      "Penggerak": "Motor Listrik / Mesin Diesel"
    }
  },
  {
    id: "gear-pump-1",
    name: "Gear Pump",
    category: "gear-pump",
    brand: "KOSHIN (Made in Japan) / YUEMA",
    image: "assets/images/catalog/gearpump.webp",
    models: ["GL Series", "GC Series", "GB Series", "2CY Series", "Asphalt Gear Pump"],
    specs: {
      "Koneksi Diameter": "13 mm (1/2\") hingga 50 mm (2\")",
      "Daya Motor": "0.4 kW hingga 7.5 kW",
      "Tekanan Maks": "0.5 MPa ~ 1 MPa",
      "Aplikasi Khusus": "Oli, Asphalt Cair, Cairan Kental"
    }
  },
  {
    id: "hoist-hhxg-a",
    name: "Electric Chain Hoist Type HHXG-A",
    category: "lifting",
    brand: "Hoist Crane Series",
    image: "assets/images/catalog/chain-hoist.png",
    models: ["HHXG-A-005-1S", "HHXG-A-010-1S", "HHXG-A-020-2S", "HHXG-A-030-3S"],
    specs: {
      "Kapasitas Angkat": "0.5 Ton ~ 3 Ton",
      "Tipe": "Hook Suspension Electric Hoist",
      "Rantai Beban": "Rantai Baja G80 Alloy Steel",
      "Kecepatan Angkat": "Single Speed"
    }
  },
  {
    id: "inverter-1",
    name: "Inverter (VFD)",
    category: "inverter",
    brand: "ABB / SCHNEIDER / INVT / HITACHI / CUTES",
    image: "assets/images/catalog/inverter1.webp",
    models: ["ABB VFD Drives", "Schneider Altivar VFD", "INVT Goodrive", "Hitachi VFD Series", "Cutes Inverter"],
    specs: {
      "Fungsi": "Pengatur Kecepatan Putaran Motor Induksi AC",
      "Fitur": "Soft Start/Stop, Proteksi Overload, Hemat Energi",
      "Rentang Daya": "0.37 kW hingga 500 kW",
      "Merk": "ABB / Schneider / INVT / Hitachi / Cutes"
    }
  },
  {
    id: "pulley-1",
    name: "Pulley",
    category: "pulley",
    brand: "Industrial Pulley Series",
    image: "assets/images/catalog/pulley.webp",
    models: ["V-Belt Pulley", "Timing Pulley", "Flat Belt Pulley"],
    specs: {
      "Tipe": "V-Belt / Timing / Flat Belt Pulley",
      "Material": "Cast Iron / Aluminium / Baja",
      "Aplikasi": "Transmisi Daya, Conveyor, Pompa, Kompresor",
      "Standar": "SPZ, SPA, SPB, SPC Series"
    }
  }
];

export interface CatalogItem {
  title: string;
  src: string;
}

export const catalogsData: CatalogItem[] = [
  { title: "Cover Brosur PT. BSTP", src: "/assets/brand/logo.png" },
  { title: "AC Induktion Motor & Blower", src: "/assets/images/catalog/ac-motor.png" },
  { title: "Industrial Pumps", src: "/assets/images/catalog/industrial-pump.png" },
  { title: "Koshin & Yuema Gear Pump", src: "/assets/images/catalog/gear-pump.png" },
  { title: "CNP & Speck Centrifugal Pump", src: "/assets/images/catalog/centrifugal-pump.png" },
  { title: "Helical & Bevel Gearbox", src: "/assets/images/catalog/helical-bevel-gearbox.png" },
  { title: "Worm Gearbox", src: "/assets/images/catalog/worm-gearbox.png" },
  { title: "Pararel Gear Box & Cycloidal Speed Reducer", src: "/assets/images/catalog/parallel-gearbox-catalog.png" },
  { title: "Compact, Mini Gear Motor & Variator", src: "/assets/images/catalog/compact-gear-motor-catalog.png" },
  { title: "Electric Chain Hoist & Chain Block", src: "/assets/images/catalog/chain-hoist.png" },
  { title: "Vibrator, Inverter & Air Compressor", src: "/assets/images/catalog/vibrator-inverter-compressor.png" }
];
