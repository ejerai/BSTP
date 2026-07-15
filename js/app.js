/* ==========================================================================
   PRODUCT CATALOG DATABASE
   ========================================================================== */
const PRODUCT_DATA = [
    // --- CATEGORY: MOTOR ---
    {
        id: "ac-motor-3w",
        name: "AC Induction Motor 3W",
        category: "motor",
        brand: "Gear Motor",
        image: "assets/images/catalog/ac-motor.png",
        models: ["0IK3GN-B", "0IK3GN-D"],
        specs: {
            "Daya": "3 Watt",
            "Model Gearhead": "0IK3GN-B / 0IK3GN-D",
            "Tipe": "AC Induction",
            "Aplikasi": "Mesin Conveyor Kecil, Laboratorium, Otomasi Ringan"
        }
    },
    {
        id: "ac-motor-6w",
        name: "AC Induction Motor 6W",
        category: "motor",
        brand: "Gear Motor",
        image: "assets/images/catalog/ac-motor.png",
        models: ["2IK6GN-A", "2IK6GN-E", "2IK6GN-C", "2IK6GN-H", "2IK6GN-S"],
        specs: {
            "Daya": "6 Watt",
            "Model Gearhead": "2IK6GN Series",
            "Tipe": "AC Induction",
            "Fase": "1-Phase / 3-Phase"
        }
    },
    {
        id: "dc-motor-z2d6",
        name: "DC Motor Z2D6 - 6W",
        category: "motor",
        brand: "DC Motor Series",
        image: "assets/images/catalog/ac-motor.png",
        models: ["Z2D6", "Z2D10", "Z2D15", "Z3D25", "Z4D25", "Z4D40", "Z5D40", "Z5D60", "Z5D90", "Z5D120", "Z6D250", "Z55D250"],
        specs: {
            "Daya": "6W hingga 250W",
            "Tipe Motor": "DC Gearmotor",
            "Tegangan": "12V / 24V / 90V DC",
            "Rentang Kecepatan": "Pilihan gearhead bervariasi"
        }
    },
    {
        id: "vibrator-vam",
        name: "Ital Vibras VAM & VA Series",
        category: "motor",
        brand: "ITAL VIBRAS",
        image: "assets/images/catalog/vibrator-inverter-compressor.png",
        models: ["VAM Series (1-Phase)", "VA Series (3-Phase)"],
        specs: {
            "Tegangan": "220V (1-Phase) / 220V/360V (3-Phase)",
            "Aplikasi": "Screening, Silo, Vibrating Feeder",
            "Kualitas": "Standard Internasional (Made in Italy)"
        }
    },
    {
        id: "concrete-vibrator-af",
        name: "Concrete Vibrator Motor AF/T Series",
        category: "motor",
        brand: "ADK / BONZER",
        image: "assets/images/catalog/vibrator-inverter-compressor.png",
        models: ["AF/T Series"],
        specs: {
            "Tipe": "Concrete Vibrator Motor",
            "Aplikasi": "Konstruksi Beton / Pengecoran Sipil",
            "Ketahanan": "Heavy-duty dust & water splash protection"
        }
    },
    {
        id: "vibrator-avi",
        name: "Heavy Duty Vibrator Motor AVI Series",
        category: "motor",
        brand: "ALLIANCE",
        image: "assets/images/catalog/vibrator-inverter-compressor.png",
        models: ["AVI Series"],
        specs: {
            "Kelas": "Heavy Duty",
            "Tipe": "Vibrator Motor",
            "Proteksi": "IP66 / Kelas Isolasi F"
        }
    },

    // --- CATEGORY: GEARBOX ---
    {
        id: "zdy-parallel-gearbox",
        name: "ZDY Series Parallel Gearbox",
        category: "gearbox",
        brand: "Industrial Gearbox",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["ZDY Series"],
        specs: {
            "Daya (Power Range)": "1.1 - 6000 kW",
            "Rasio Transmisi (Ratio)": "1.25 - 500",
            "Torsi Output (Kn.m)": "Hingga 520 kNm",
            "Desain": "Parallel Shaft Gearbox"
        }
    },
    {
        id: "zly-parallel-gearbox",
        name: "ZLY Series Parallel Gearbox",
        category: "gearbox",
        brand: "Industrial Gearbox",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["ZLY Series"],
        specs: {
            "Daya (Power Range)": "1.1 - 6000 kW",
            "Rasio Transmisi (Ratio)": "1.25 - 500",
            "Torsi Output (Kn.m)": "Hingga 520 kNm",
            "Desain": "Parallel Shaft Gearbox"
        }
    },
    {
        id: "zsy-zfy-parallel-gearbox",
        name: "ZSY / ZFY Series Parallel Gearbox",
        category: "gearbox",
        brand: "Industrial Gearbox",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["ZSY Series", "ZFY Series"],
        specs: {
            "Daya (Power Range)": "1.1 - 6000 kW",
            "Rasio Transmisi (Ratio)": "1.25 - 500",
            "Torsi Output (Kn.m)": "Hingga 520 kNm",
            "Desain": "Parallel Shaft Gearbox"
        }
    },
    {
        id: "v-series-right-angle-gearbox",
        name: "V Series Right Angle Gearbox",
        category: "gearbox",
        brand: "Industrial Gearbox",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["V Series"],
        specs: {
            "Daya (Power Range)": "4 - 6000 kW",
            "Rasio Transmisi (Ratio)": "1.25 - 450",
            "Torsi Output (Kn.m)": "Hingga 950 kNm",
            "Tipe": "Right Angle Shaft Gearbox"
        }
    },
    {
        id: "p-series-parallel-gearbox",
        name: "P Series Parallel Gearbox",
        category: "gearbox",
        brand: "Industrial Gearbox",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["P Series"],
        specs: {
            "Daya (Power Range)": "4 - 6000 kW",
            "Rasio Transmisi (Ratio)": "1.25 - 450",
            "Torsi Output (Kn.m)": "Hingga 950 kNm",
            "Tipe": "Parallel Shaft Gearbox"
        }
    },
    {
        id: "zlyj-extruder-gearbox",
        name: "ZLYJ Extruder Gearbox",
        category: "gearbox",
        brand: "Extruder Series",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["ZLYJ Series"],
        specs: {
            "Daya (Power Range)": "5.5 - 200 kW",
            "Rasio Transmisi (Ratio)": "8 - 35",
            "Torsi Output (Kn.m)": "Hingga 42 kNm",
            "Aplikasi": "Mesin Ekstruder Plastik / Karet"
        }
    },
    {
        id: "bwd-xwd-cycloidal-reducer",
        name: "BWD / XWD Cycloidal Speed Reducer",
        category: "gearbox",
        brand: "Transcyko / Guomau / Sumitomo",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["BWD Series", "XWD Series"],
        specs: {
            "Daya (Power Range)": "0.12 - 90 kW",
            "Rasio Transmisi (Ratio)": "7 - 650000",
            "Torsi Output (Kn.m)": "Hingga 30 kNm",
            "Desain": "Cycloidal Reducer Horizontal"
        }
    },
    {
        id: "bld-xld-cycloidal-reducer",
        name: "BLD / XLD Cycloidal Speed Reducer",
        category: "gearbox",
        brand: "Transcyko / Guomau / Sumitomo",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["BLD Series", "XLD Series"],
        specs: {
            "Daya (Power Range)": "0.12 - 90 kW",
            "Rasio Transmisi (Ratio)": "7 - 650000",
            "Torsi Output (Kn.m)": "Hingga 30 kNm",
            "Desain": "Cycloidal Reducer Vertical"
        }
    },
    {
        id: "helical-gearbox-tr",
        name: "Helical Gearbox TR & TRF Series",
        category: "gearbox",
        brand: "YUEMA / TRANSMAX",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["TR 27-167", "TRF 27-167"],
        specs: {
            "Ukuran (Sizes)": "27 - 37 - 47 - 57 - 67 - 77 - 87 - 97 - 107 - 137 - 147 - 167",
            "Torsi Maksimal (M₂max)": "18,000 Nm",
            "Rasio Putaran (Ratio)": "1.3 ~ 27,001",
            "Daya Motor (Power)": "0.12 ~ 160 kW"
        }
    },
    {
        id: "bevel-gearbox-tkf",
        name: "Helical Bevel Gearbox TK & TKF Series",
        category: "gearbox",
        brand: "YUEMA / TRANSMAX",
        image: "assets/images/catalog/helical-bevel-gearbox.png",
        models: ["TK 37-187", "TKF 37-187"],
        specs: {
            "Ukuran (Sizes)": "37 - 47 - 57 - 67 - 77 - 87 - 97 - 107 - 127 - 157 - 167 - 187",
            "Torsi Maksimal (M₂max)": "50,000 Nm (TKF) / 5,000 Nm (TK)",
            "Rasio Putaran (Ratio)": "3.98 ~ 32,625",
            "Daya Motor (Power)": "0.12 ~ 200 kW"
        }
    },
    {
        id: "worm-gear-wpa",
        name: "Worm Gearbox WPA & WPS Series",
        category: "gearbox",
        brand: "CHENTA / REVCO",
        image: "assets/images/catalog/worm-gearbox.png",
        models: ["WPA 40-250", "WPS 40-250"],
        specs: {
            "Ukuran (Sizes)": "40, 50, 60, 70, 80, 100, 120, 135, 155, 175, 200, 250",
            "Rasio Putaran (Ratio)": "1/10 ~ 1/60",
            "Tipe Koneksi": "Solid Shaft Input (WPA / WPS)"
        }
    },
    {
        id: "worm-gear-wpda",
        name: "Double Stage Worm Gearbox WPDA & WPDS",
        category: "gearbox",
        brand: "CHENTA / REVCO",
        image: "assets/images/catalog/worm-gearbox.png",
        models: ["WPDA 50-155", "WPDS 50-250"],
        specs: {
            "Ukuran (Sizes)": "50, 60, 70, 80, 100, 120, 135, 147, 155, 175, 200, 250",
            "Rasio Putaran (Ratio)": "1/10 ~ 1/60 (per stage)",
            "Koneksi Input": "Flange Motor IEC (WPDA) / Shaft (WPDS)"
        }
    },
    {
        id: "worm-gearbox-nmrv",
        name: "NMRV Worm Gearbox Series",
        category: "gearbox",
        brand: "MOTOVARIO / YUEMA",
        image: "assets/images/catalog/worm-gearbox.png",
        models: ["NMRV 30-150", "RV 30-150"],
        specs: {
            "Ukuran (Sizes)": "30 - 40 - 50 - 63 - 75 - 90 - 110 - 130 - 150",
            "Rasio Putaran (Ratio)": "1.3 ~ 27,001 (Kombinasi)",
            "Daya Motor (Power)": "0.12 ~ 160 kW",
            "Bahan Bodi": "Aluminium (hingga 090), Cast Iron (110-150)"
        }
    },

    // --- CATEGORY: GEARMOTOR ---
    {
        id: "g3lm-g3fm-compact-gearmotor",
        name: "G3LM / G3FM Series Compact Gear Motor",
        category: "gearmotor",
        brand: "Compact Gearmotor Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["G3LM Series", "G3FM Series"],
        specs: {
            "Ukuran (Sizes)": "18 - 22 - 28 - 32 mm",
            "Torsi Maksimal (M₂max)": "120 Nm",
            "Rasio Putaran (Ratio)": "5 ~ 200",
            "Daya Motor (Power)": "0.1 ~ 1.5 kW"
        }
    },
    {
        id: "g3ls-compact-gearmotor",
        name: "G3LS Series Compact Gear Motor",
        category: "gearmotor",
        brand: "Compact Gearmotor Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["G3LS Series"],
        specs: {
            "Ukuran (Sizes)": "18 - 22 - 28 - 32 mm",
            "Torsi Maksimal (M₂max)": "120 Nm",
            "Rasio Putaran (Ratio)": "5 ~ 200",
            "Daya Motor (Power)": "0.1 ~ 1.5 kW"
        }
    },
    {
        id: "g3l-compact-gearmotor",
        name: "G3L Series Compact Gear Motor",
        category: "gearmotor",
        brand: "Compact Gearmotor Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["G3L Series"],
        specs: {
            "Ukuran (Sizes)": "18 - 22 - 28 - 32 mm",
            "Torsi Maksimal (M₂max)": "120 Nm",
            "Rasio Putaran (Ratio)": "5 ~ 200",
            "Daya Motor (Power)": "0.1 ~ 1.5 kW"
        }
    },
    {
        id: "chcz-p-mini-gearmotor",
        name: "CHCZ ... P (IEC) Mini Gear Motor",
        category: "gearmotor",
        brand: "Mini Gear Motor Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["CHCZ ... P"],
        specs: {
            "Ukuran Frame (Sizes)": "01 - 02 - 03 - 04",
            "Torsi Maksimal (M₂max)": "500 Nm",
            "Rasio Putaran (Ratio)": "3.66 ~ 54",
            "Daya Motor (Power)": "0.12 ~ 4 kW"
        }
    },
    {
        id: "chcf-p-mini-gearmotor",
        name: "CHCF ... P (IEC) Mini Gear Motor",
        category: "gearmotor",
        brand: "Mini Gear Motor Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["CHCF ... P"],
        specs: {
            "Ukuran Frame (Sizes)": "01 - 02 - 03 - 04",
            "Torsi Maksimal (M₂max)": "500 Nm",
            "Rasio Putaran (Ratio)": "3.66 ~ 54",
            "Daya Motor (Power)": "0.12 ~ 4 kW"
        }
    },
    {
        id: "chcz-hs-mini-gearmotor",
        name: "CHCZ ... HS Mini Gear Motor",
        category: "gearmotor",
        brand: "Mini Gear Motor Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["CHCZ ... HS"],
        specs: {
            "Ukuran Frame (Sizes)": "01 - 02 - 03 - 04",
            "Torsi Maksimal (M₂max)": "500 Nm",
            "Rasio Putaran (Ratio)": "3.66 ~ 54",
            "Daya Motor (Power)": "0.12 ~ 4 kW"
        }
    },
    {
        id: "variable-helical-gearmotor",
        name: "Variable Helical Gearmotor",
        category: "gearmotor",
        brand: "Variator Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["Variable Helical"],
        specs: {
            "Kapasitas Daya (Sizes)": "0.37-0.75-1.5 kW / 2.2-4-7.5 kW",
            "Torsi Maksimal (M₂max)": "1,000 Nm",
            "Rasio Putaran (Ratio)": "5 (Variasi Manual)",
            "Daya Motor (Power)": "0.18 ~ 4 kW"
        }
    },
    {
        id: "variator-foot-mounting",
        name: "Variator Foot Mounting",
        category: "gearmotor",
        brand: "Variator Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["Variator Foot Mounting"],
        specs: {
            "Kapasitas Daya (Sizes)": "0.37-0.75-1.5 kW / 2.2-4-7.5 kW",
            "Torsi Maksimal (M₂max)": "1,000 Nm",
            "Rasio Putaran (Ratio)": "5 (Variasi Manual)",
            "Daya Motor (Power)": "0.18 ~ 4 kW"
        }
    },
    {
        id: "variator-flange-mounting",
        name: "Variator Flange Mounting",
        category: "gearmotor",
        brand: "Variator Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["Variator Flange Mounting"],
        specs: {
            "Kapasitas Daya (Sizes)": "0.37-0.75-1.5 kW / 2.2-4-7.5 kW",
            "Torsi Maksimal (M₂max)": "1,000 Nm",
            "Rasio Putaran (Ratio)": "5 (Variasi Manual)",
            "Daya Motor (Power)": "0.18 ~ 4 kW"
        }
    },
    {
        id: "right-angle-bevel-25w",
        name: "Spiral Bevel Right Angle 25W - 200W",
        category: "gearmotor",
        brand: "Gearhead Series",
        image: "assets/images/catalog/compact-mini-gear-motor.png",
        models: ["Spiral Bevel 25W", "40W", "60W", "90W", "120W (90mm/100mm)", "140W", "200W"],
        specs: {
            "Kapasitas Daya": "25W ~ 200W",
            "Tipe Gearhead": "Right Angle Shaft",
            "Model Kecocokan": "Z4D25, Z4D40, Z5D40, Z5D60, Z5D90, Z5D120, Z6D250, Z55D250"
        }
    },


    // --- CATEGORY: PUMP ---
    {
        id: "fire-hydrant-pump",
        name: "Fire Hydrant Pump & Electric Hydrant Pump",
        category: "pump",
        brand: "Hydrant Pump Series",
        image: "assets/images/catalog/industrial-pump.png",
        models: ["Diesel Engine Hydrant", "Electric Hydrant Pump"],
        specs: {
            "Aplikasi": "Sistem Proteksi Kebakaran Gedung, Damkar",
            "Tipe Penggerak": "Mesin Diesel & Motor Listrik Heavy Duty",
            "Warna Standar": "Merah Industri (Fire Safety standard)"
        }
    },
    {
        id: "ebara-centrifugal",
        name: "Ebara Centrifugal Pump c/w Motor",
        category: "pump",
        brand: "EBARA",
        image: "assets/images/catalog/industrial-pump.png",
        models: ["Ebara End Suction Centrifugal"],
        specs: {
            "Desain": "Coupling joint dengan Motor Penggerak (c/w Motor)",
            "Aplikasi": "Transfer Air Gedung, Industri, Pengairan, Chiller",
            "Material Impeller": "Bronze / Cast Iron"
        }
    },
    {
        id: "yuema-centrifugal",
        name: "Yuema Centrifugal Pump c/w Motor",
        category: "pump",
        brand: "YUEMA",
        image: "assets/images/catalog/industrial-pump.png",
        models: ["Yuema End Suction Pump"],
        specs: {
            "Desain": "Mono-block coupling dengan Besi Baseplate",
            "Aplikasi": "Pompa Transfer Industri Umum",
            "Performa": "Ekonomis, tangguh untuk durasi operasional panjang"
        }
    },
    {
        id: "koshin-gear-pump-gl",
        name: "Koshin Gear Pump GL Series",
        category: "pump",
        brand: "KOSHIN (Made in Japan)",
        image: "assets/images/catalog/gear-pump.png",
        models: ["GL-13-5", "GL-13-10", "GL-20-5", "GL-20-10", "GL-25-5", "GL-25-10", "GL-32-5", "GL-32-10", "GL-40-5", "GL-40-10", "GL-50-5", "GL-50-10"],
        specs: {
            "Koneksi Diameter": "13 mm (1/2\") hingga 50 mm (2\")",
            "Daya Motor": "0.4 kW hingga 7.5 kW (4P/6P)",
            "Tekanan Maks (Pressure)": "0.5 MPa ~ 1 MPa",
            "Kapasitas Alir (Delivery)": "20 L/min hingga 200 L/min (pada 50Hz/60Hz)"
        }
    },
    {
        id: "koshin-gear-pump-gc",
        name: "Koshin Gear Pump GC & GB Series",
        category: "pump",
        brand: "KOSHIN",
        image: "assets/images/catalog/gear-pump.png",
        models: ["GC-13", "GB-13", "GC-20", "GB-20", "GC-25", "GB-25"],
        specs: {
            "Bahan Gear (Material)": "GC: Cast Iron (Besi Cor) / GB: Brass (Kuningan)",
            "Koneksi Diameter": "13 mm (1/2\") hingga 25 mm (1\")",
            "Daya Pulley": "200 W (GC-13) hingga 750 W (GC-25)",
            "Kapasitas Alir": "Kapasitas bervariasi bergantung pada RPM Pulley"
        }
    },
    {
        id: "yuema-asphalt-pump",
        name: "Yuema Asphalt Pump & 2CY Series",
        category: "pump",
        brand: "YUEMA",
        image: "assets/images/catalog/gear-pump.png",
        models: ["Asphalt Gear Pump", "2CY Series"],
        specs: {
            "Aplikasi Khusus": "Transfer Cairan Kental, Asphalt Cair, Minyak Berat, Oli",
            "Material Bodi": "Besi Cor Khusus Tahan Panas",
            "Kapasitas Suhu": "Hingga suhu aspal cair tinggi"
        }
    },
    {
        id: "cnp-pump-chl",
        name: "CNP CHL & CHLF Multistage Centrifugal Pump",
        category: "pump",
        brand: "CNP (Nanfang)",
        image: "assets/images/catalog/centrifugal-pump.png",
        models: ["CHL Series", "CHLF Series"],
        specs: {
            "Kapasitas Alir (Q)": "Hingga 240 m³/h",
            "Head Dorong (H)": "Hingga 305 m",
            "Kecepatan Putaran": "2900 rpm",
            "Daya Motor (Power)": "Hingga 110 kW",
            "Material": "Stainless Steel (Sus 304 / 316)"
        }
    },
    {
        id: "cnp-pump-cdl",
        name: "CNP CDL & CDLF Vertical Multistage Pump",
        category: "pump",
        brand: "CNP",
        image: "assets/images/catalog/centrifugal-pump.png",
        models: ["CDL / CDLF 1", "CDL 2", "CDL 4", "CDL 8", "CDL 12", "CDL 16", "CDL 20"],
        specs: {
            "Tipe": "Vertical Inline Multistage Pump",
            "Kapasitas Alir (Q)": "Hingga 240 m³/h",
            "Head Dorong (H)": "Hingga 305 m",
            "Daya Motor": "Hingga 110 kW"
        }
    },
    {
        id: "cnp-pump-sj",
        name: "CNP SJ Stainless Steel Submersible Borehole Pump",
        category: "pump",
        brand: "CNP",
        image: "assets/images/catalog/centrifugal-pump.png",
        models: ["SJ Series Deepwell"],
        specs: {
            "Kapasitas Alir (Q)": "Hingga 260 m³/h",
            "Head Dorong (H)": "Hingga 381 m",
            "Aplikasi": "Sumur Bor Dalam (Deepwell), Irigasi, Pengisian Tandon Gedung",
            "Material": "Full Stainless Steel anti karat"
        }
    },
    {
        id: "speck-pump-ask",
        name: "Speck Side Channel Pump ASK & SK Series",
        category: "pump",
        brand: "SPECK PUMPEN (Made in Germany)",
        image: "assets/images/catalog/centrifugal-pump.png",
        models: ["ASK Series", "SK Series", "VH Series", "VHC Series", "VG Series", "VU Series", "ES Series", "TOE-GN Series"],
        specs: {
            "Kapasitas Alir (ASK)": "Max. 180 U.S. GPM",
            "Total Head (ASK)": "Max. 1150 feet (350 meter)",
            "Putaran": "1450 rpm / 1750 rpm",
            "Suhu Operasional": "Max. 180°C (Minyak Panas / Cairan Kimia Suhu Tinggi)",
            "Mechanical Seal": "Standard Speck High-spec Seal"
        }
    },

    // --- CATEGORY: LIFTING ---
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
        id: "hoist-shh-a",
        name: "Electric Chain Hoist Type SHH-A Series",
        category: "lifting",
        brand: "Hoist Crane Series",
        image: "assets/images/catalog/chain-hoist.png",
        models: ["SHH-A-003-1D", "SHH-A-005-1D", "SHH-A-010-1D", "SHH-A-020-2D", "SHH-A-030-1D", "SHH-A-050-2D"],
        specs: {
            "Kapasitas Angkat": "0.25 Ton ~ 5 Ton",
            "Rantai Dimensi": "Φ 5 x 15 mm / Φ 11.2 x 34 mm",
            "Kelas Isolasi": "F / Proteksi IP54",
            "Kecepatan": "Pilihan Single Speed / Dual Speed"
        }
    },
    {
        id: "hoist-shh-am",
        name: "Electric Chain Hoist with Trolley Type SHH-AM",
        category: "lifting",
        brand: "Hoist Crane Series",
        image: "assets/images/catalog/chain-hoist.png",
        models: ["SHH-AM Series (c/w Motorized Trolley)"],
        specs: {
            "Kapasitas Angkat": "0.25 Ton ~ 5 Ton",
            "Tipe Trolley": "Motorized Trolley (bisa berjalan di girder)",
            "Rantai Beban": "Φ 5 x 15 mm / Φ 11.2 x 34 mm"
        }
    },
    {
        id: "chain-block-hsz",
        name: "Chain Block HSZ-A622 & Hand Lever Block HSH-A620",
        category: "lifting",
        brand: "Lifting Gear Series",
        image: "assets/images/catalog/chain-hoist.png",
        models: ["HSZ-A622 Chain Block", "HSH-A620 Hand Lever Block"],
        specs: {
            "Kapasitas Chain Block": "0.5 ~ 30 Ton (Rantai Manual)",
            "Kapasitas Lever Block": "0.75 ~ 9 Ton",
            "Panjang Rantai": "Standard 3 meter (bisa dipesan khusus)",
            "Sertifikasi": "Uji Beban Proof Load 1.5x Kapasitas Maks"
        }
    },
    {
        id: "manual-trolley-gcl",
        name: "Gear Trolley & Manual Plain Trolley GCL810",
        category: "lifting",
        brand: "Lifting Gear Series",
        image: "assets/images/catalog/chain-hoist.png",
        models: ["GCL810 Plain Trolley", "GCT810 Geared Trolley"],
        specs: {
            "Kapasitas": "0.5 ~ 10 Ton",
            "Aplikasi": "Dudukan Hoist manual/listrik pada balok I-Beam / H-Beam",
            "Proof Load": "0.625 ~ 12.5 Ton"
        }
    },

    // --- CATEGORY: INVERTER-COMPRESSOR ---
    {
        id: "inverter-abb",
        name: "Variable Frequency Inverter Drives",
        category: "inverter-compressor",
        brand: "ABB / SCHNEIDER / INVT / HITACHI / CUTES",
        image: "assets/images/catalog/vibrator-inverter-compressor.png",
        models: ["ABB VFD Drives", "Schneider Altivar VFD", "INVT Goodrive", "Hitachi VFD Series", "Cutes Inverter"],
        specs: {
            "Fungsi": "Pengatur Kecepatan Putaran Motor Induksi AC (Speed Controller)",
            "Fitur": "Soft Start/Stop, Proteksi Overload Motor, Hemat Energi listrik",
            "Rentang Daya": "0.37 kW hingga 500 kW"
        }
    },
    {
        id: "compressor-puma",
        name: "Puma & United Air Compressor Series",
        category: "inverter-compressor",
        brand: "PUMA / UNITED / BISON",
        image: "assets/images/catalog/vibrator-inverter-compressor.png",
        models: ["Puma Air Center", "United Air Compressor", "Bison Heavy Compressor"],
        specs: {
            "Tipe": "Piston / Reciprocating Air Compressor c/w Motor",
            "Kapasitas Tangki": "100 Liter hingga 500 Liter",
            "Tekanan Udara": "7 Bar hingga 12 Bar",
            "Penggerak": "Pilihan Motor Listrik / Mesin Bensin"
        }
    }
];

/* ==========================================================================
   APP INITIALIZATION & CONTROLLERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // UI Elements
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const filterTabs = document.getElementById("filterTabs");
    const productsGrid = document.getElementById("productsGrid");
    const noResults = document.getElementById("noResults");
    
    const productModal = document.getElementById("productModal");
    const modalClose = document.getElementById("modalClose");
    
    const aboutImageTrigger = document.getElementById("aboutImageTrigger");
    const pdfProfileModal = document.getElementById("pdfProfileModal");
    const pdfModalClose = document.getElementById("pdfModalClose");
    const pdfViewerFrame = document.getElementById("pdfViewerFrame");
    const PDF_PROFILE_PATH = "assets/KATALOG.pdf";
    
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxDownload = document.getElementById("lightboxDownload");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    
    
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    let currentFilter = null; // null = belum memilih kategori
    let activeCatalogIndex = 0;
    
    // List of catalog images mapping to unduh brosur section
    const catalogImages = [
        { title: "Cover Brosur PT. BSTP", src: "assets/brand/logo.png" },
        { title: "AC Induktion Motor & Blower", src: "assets/images/catalog/ac-motor.png" },
        { title: "Industrial Pumps", src: "assets/images/catalog/industrial-pump.png" },
        { title: "Koshin & Yuema Gear Pump", src: "assets/images/catalog/gear-pump.png" },
        { title: "CNP & Speck Centrifugal Pump", src: "assets/images/catalog/centrifugal-pump.png" },
        { title: "Helical & Bevel Gearbox", src: "assets/images/catalog/helical-bevel-gearbox.png" },
        { title: "Worm Gearbox", src: "assets/images/catalog/worm-gearbox.png" },
        { title: "Pararel Gear Box & Cycloidal Speed Reducer", src: "assets/images/catalog/parallel-gearbox-catalog.png" },
        { title: "Compact, Mini Gear Motor & Variator", src: "assets/images/catalog/compact-gear-motor-catalog.png" },
        { title: "Electric Chain Hoist & Chain Block", src: "assets/images/catalog/chain-hoist.png" },
        { title: "Vibrator, Inverter & Air Compressor", src: "assets/images/catalog/vibrator-inverter-compressor.png" }
    ];

    /* ----------------------------------------------------------------------
       NAVBAR & INTERACTIVITY
       ---------------------------------------------------------------------- */
    // Scroll event for shrinking & coloring navbar
    if (navbar) {
        const updateNavbarScrollState = () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
                if (scrollTopBtn) scrollTopBtn.classList.add("active");
            } else {
                navbar.classList.remove("scrolled");
                if (scrollTopBtn) scrollTopBtn.classList.remove("active");
            }
        };

        // Set the correct state immediately on page load (e.g. if the page
        // loads already scrolled via an anchor link), instead of waiting
        // for the first scroll event to fire.
        updateNavbarScrollState();

        window.addEventListener("scroll", () => {
            updateNavbarScrollState();
            
            // Only highlight sections on the Homepage
            const homeSection = document.getElementById("home");
            if (homeSection) {
                const scrollPosition = window.scrollY + 120;
                document.querySelectorAll("section, header").forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute("id");
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(link => {
                            link.classList.remove("active");
                            if (link.getAttribute("href") === `#${sectionId}` || link.getAttribute("href") === `index.html#${sectionId}`) {
                                link.classList.add("active");
                            }
                        });
                    }
                });
            }
        });
    }

    /* ----------------------------------------------------------------------
       SCROLL REVEAL — setiap <section> fade-up muncul saat masuk viewport
       ---------------------------------------------------------------------- */
    function initScrollReveal() {
        // Semua section di halaman ini otomatis dapat animasi (tanpa perlu
        // menambahkan class manual di tiap file HTML).
        // Section ".stats" DIKECUALIKAN: kartu statistiknya sengaja dibuat
        // "kaca" (backdrop-filter blur) yang menumpuk ke atas hero lewat
        // margin-top negatif, dan efek blur itu gampang rusak kalau parent-nya
        // diberi "transform" (transform pada leluhur mengubah acuan blur
        // backdrop-filter). Jadi section ini dibiarkan seperti semula.
        const revealSections = document.querySelectorAll("section:not(.stats)");
        if (!revealSections.length) return;

        // Kartu-kartu di dalam section ikut fade-up tapi dengan jeda
        // (stagger), supaya terasa lebih hidup dan tidak "nempel" bareng.
        // ".stat-card" sengaja tidak diikutkan karena alasan yang sama
        // seperti di atas (glassmorphism).
        const staggerSelector = [
            ".pillar-item", ".vision-card", ".mission-card",
            ".method-item", ".catalog-card"
        ].join(", ");

        revealSections.forEach(section => {
            section.classList.add("reveal-section");

            const items = section.querySelectorAll(staggerSelector);
            items.forEach((item, index) => {
                item.classList.add("reveal-item");
                // Delay bertahap, dibatasi maksimal 0.5s biar tidak lambat
                item.style.setProperty("--reveal-delay", `${Math.min(index * 0.08, 0.5)}s`);
            });
        });

        // Setelah elemen selesai fade-up, lepas class reveal-nya supaya
        // "transform" ikut kembali ke "none". Ini penting: transform yang
        // "menempel" (walau cuma translateY(0)) tetap membuat browser
        // membentuk containing block baru, yang bisa mengacaukan efek
        // seperti backdrop-filter/blur pada elemen turunannya. Ini juga
        // sekalian best-practice: will-change dilepas setelah tidak
        // dipakai lagi supaya lebih ringan buat browser.
        const cleanupReveal = (el) => {
            el.classList.remove("reveal-section", "reveal-item", "is-visible");
            el.style.removeProperty("--reveal-delay");
        };

        // Fallback untuk browser sangat lama yang tidak mendukung IntersectionObserver
        if (!("IntersectionObserver" in window)) {
            document.querySelectorAll(".reveal-section, .reveal-item").forEach(el => {
                cleanupReveal(el);
            });
            return;
        }

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.classList.add("is-visible");
                    observer.unobserve(el);
                    el.addEventListener("transitionend", () => cleanupReveal(el), { once: true });
                    // Jaring pengaman kalau transitionend tidak sempat terpicu
                    setTimeout(() => cleanupReveal(el), 1400);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -80px 0px"
        });

        document.querySelectorAll(".reveal-section, .reveal-item").forEach(el => {
            revealObserver.observe(el);
        });
    }

    initScrollReveal();

    // Scroll to Top click
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Mobile Navbar Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            navToggle.classList.toggle("active");
            
            const bars = navToggle.querySelectorAll(".bar");
            if (navMenu.classList.contains("active")) {
                bars[0].style.transform = "rotate(45deg) translate(6px, 6px)";
                bars[1].style.opacity = "0";
                bars[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
            } else {
                bars[0].style.transform = "none";
                bars[1].style.opacity = "1";
                bars[2].style.transform = "none";
            }
        });
    }

    // Close menu when clicking nav item
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu) navMenu.classList.remove("active");
            
            if (navToggle) {
                const bars = navToggle.querySelectorAll(".bar");
                bars[0].style.transform = "none";
                bars[1].style.opacity = "1";
                bars[2].style.transform = "none";
            }
        });
    });

    /* ----------------------------------------------------------------------
       TRUST STATS COUNTER ANIMATION
       ---------------------------------------------------------------------- */
    const statsSection = document.querySelector(".stats");
    let statsAnimated = false;
    
    function animateCounters() {
        const counters = document.querySelectorAll(".stat-number");
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const isPercent = counter.innerText.includes("%");
            const isPlus = counter.innerText.includes("+");
            let count = 0;
            const speed = target / 40; // speed multiplier
            
            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.floor(count) + (isPlus ? "+" : "") + (isPercent ? "%" : "");
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + (isPlus ? "+" : "") + (isPercent ? "%" : "");
                }
            };
            updateCount();
        });
    }

    if (statsSection) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !statsAnimated) {
                        animateCounters();
                        statsAnimated = true;
                    }
                });
            }, { threshold: 0.2 });
            observer.observe(statsSection);
        } else {
            animateCounters(); // fallback if observer not supported
        }
    }

    /* ----------------------------------------------------------------------
       PRODUCT CATALOG LOGIC
       ---------------------------------------------------------------------- */
    function renderProducts() {
        if (!productsGrid) return;
        productsGrid.innerHTML = "";
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

        // ── Belum ada kategori yang dipilih ──────────────────────────────────
        if (currentFilter === null) {
            productsGrid.style.display = "flex";
            if (noResults) noResults.style.display = "none";
            if (clearSearch) clearSearch.style.display = "none";
            productsGrid.innerHTML = `
                <div class="pick-category-prompt">
                    <div class="pick-category-icon"><i class="fa-solid fa-hand-pointer"></i></div>
                    <h3>Pilih Kategori Produk</h3>
                    <p>Silakan klik salah satu kategori di atas untuk melihat daftar produk yang tersedia.</p>
                </div>`;
            return;
        }
        
        // Filter catalog
        const filtered = PRODUCT_DATA.filter(p => {
            const matchesCategory = (currentFilter === "all" || p.category === currentFilter);
            
            const matchesSearch = !query || 
                p.name.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query) ||
                p.models.some(m => m.toLowerCase().includes(query)) ||
                Object.values(p.specs).some(s => s.toLowerCase().includes(query));
                
            return matchesCategory && matchesSearch;
        });

        // Toggle clear search button visibility
        if (clearSearch) {
            if (query) {
                clearSearch.style.display = "block";
            } else {
                clearSearch.style.display = "none";
            }
        }

        // Handle no results state
        if (filtered.length === 0) {
            productsGrid.style.display = "none";
            if (noResults) noResults.style.display = "block";
            return;
        }

        productsGrid.style.display = "grid";
        if (noResults) noResults.style.display = "none";

        // Render card layouts
        filtered.forEach(p => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.setAttribute("data-id", p.id);
            
            // Generate list of spec tags
            let specsLi = "";
            let keys = Object.keys(p.specs).slice(0, 3); // show top 3 specs on card
            keys.forEach(k => {
                let val = p.specs[k];
                if (val.length > 28) val = val.substring(0, 25) + "...";
                specsLi += `<li><span class="spec-lbl">${k}:</span> <span class="spec-val">${val}</span></li>`;
            });

            const categoryLabels = {
                "motor": "Electric Motor",
                "gearbox": "Gearbox",
                "gearmotor": "Gear Motor",
                "pump": "Industrial Pump",
                "lifting": "Hoist & Crane",
                "inverter-compressor": "Inverter/Compressor"
            };

            const cleanCategory = categoryLabels[p.category] || "Industrial Component";

            card.innerHTML = `
                <div class="product-img-box">
                    <span class="product-tag">${cleanCategory}</span>
                    <img src="${p.image}" alt="${p.name}" class="product-card-img" onerror="this.onerror=null; this.src='assets/brand/logo.png';">
                </div>
                <div class="product-details-box">
                    <span class="product-brand">${p.brand}</span>
                    <h3 class="product-name">${p.name}</h3>
                    <ul class="product-specs-summary">
                        ${specsLi}

                    </ul>
                    <div class="product-actions-box">
                        <button class="btn btn-detail" onclick="openProductDetail('${p.id}')">
                            <i class="fa-solid fa-list-check"></i> Detail
                        </button>
                        <a href="https://wa.me/628161317107?text=${encodeURIComponent(`Halo PT. Bintang Surya Teknik Persada, saya tertarik dengan produk ${p.name} (${p.brand}). Mohon informasi penawaran harga & ketersediaan stok.`)}" 
                           target="_blank" class="btn btn-quote">
                            <i class="fa-brands fa-whatsapp"></i> Minta Harga
                        </a>
                    </div>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }

    // Trigger initial render
    if (productsGrid) {
        renderProducts();
    }

    // Attach search events
    if (searchInput) {
        searchInput.addEventListener("input", renderProducts);
    }
    
    if (clearSearch) {
        clearSearch.addEventListener("click", () => {
            searchInput.value = "";
            renderProducts();
            searchInput.focus();
        });
    }

    // Filter tab logic dengan collapse setelah pilih kategori
    const categoryLabelsFilter = {
        "all":                 "Semua Produk",
        "motor":               "Motor Listrik & Vibrator",
        "gearbox":             "Helical & Worm Gearbox",
        "gearmotor":           "Gear Motor & Variator",
        "pump":                "Pompa Industri & CNP",
        "lifting":             "Hoist & Alat Angkat",
        "inverter-compressor": "Inverter & Kompresor"
    };

    // Buat tombol "Pilih Kategori Lain" yang muncul setelah filter dipilih
    const changeFilterBtn = document.createElement("button");
    changeFilterBtn.className = "btn-change-filter";
    changeFilterBtn.innerHTML = `<i class="fa-solid fa-sliders"></i> <span class="change-filter-label">Pilih Kategori Lain</span>`;
    changeFilterBtn.style.display = "none";
    if (filterTabs && filterTabs.parentNode) {
        filterTabs.parentNode.insertBefore(changeFilterBtn, filterTabs.nextSibling);
    }

    function collapseFilter() {
        if (filterTabs) filterTabs.style.display = "none";
        changeFilterBtn.style.display = "flex";
    }

    function expandFilter() {
        if (filterTabs) filterTabs.style.display = "flex";
        changeFilterBtn.style.display = "none";
    }

    if (filterTabs) {
        filterTabs.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const activeBtn = filterTabs.querySelector(".filter-btn.active");
                if (activeBtn) activeBtn.classList.remove("active");
                btn.classList.add("active");
                currentFilter = btn.getAttribute("data-filter");
                renderProducts();
                collapseFilter();
            });
        });
    }

    changeFilterBtn.addEventListener("click", () => {
        expandFilter();
    });

    /* ----------------------------------------------------------------------
       PRODUCT DETAIL MODAL CONTROLLER
       ---------------------------------------------------------------------- */
    window.openProductDetail = function(productId) {
        const product = PRODUCT_DATA.find(p => p.id === productId);
        if (!product) return;
        
        const modalCategory = document.getElementById("modalCategory");
        const modalTitle = document.getElementById("modalTitle");
        const modalBrand = document.getElementById("modalBrand");
        const modalIcon = document.getElementById("modalIcon");
        const modalSpecsTable = document.getElementById("modalSpecsTable");
        const modalWaBtn = document.getElementById("modalWaBtn");
        
        const categoryLabels = {
            "motor": "Motor Induksi & Vibrator",
            "gearbox": "Helical & Worm Gearbox",
            "gearmotor": "Gearmotor & Variator Speed",
            "pump": "Pompa Industri & Centrifugal",
            "lifting": "Electric Hoist & Lifting Crane",
            "inverter-compressor": "Inverter Controller & Compressor"
        };
        
        if (modalCategory) modalCategory.innerText = categoryLabels[product.category] || "Kategori Produk";
        if (modalTitle) modalTitle.innerText = product.name;
        if (modalBrand) modalBrand.innerText = `Brand: ${product.brand}`;
        
        // Show actual image instead of vector icons in modal body
        if (modalIcon) {
            modalIcon.innerHTML = `<img src="${product.image}" alt="${product.name}" class="product-card-img" style="max-height: 100%; object-fit: contain;" onerror="this.onerror=null; this.src='assets/brand/logo.png';">`;
        }
        
        // Generate full technical table
        if (modalSpecsTable) {
            let tableRows = "";
            // Models row
            tableRows += `<tr>
                <td class="spec-name">Tipe / Model</td>
                <td class="spec-val">${product.models.join(", ")}</td>
            </tr>`;
            
            // Custom Specs rows
            Object.entries(product.specs).forEach(([key, val]) => {
                tableRows += `<tr>
                    <td class="spec-name">${key}</td>
                    <td class="spec-val">${val}</td>
                </tr>`;
            });
            modalSpecsTable.innerHTML = tableRows;
        }
        
        // WhatsApp redirection pre-filled text
        if (modalWaBtn) {
            const waText = `Halo PT. Bintang Surya Teknik Persada,\nsaya tertarik dengan produk berikut:\n\n` +
                           `• Nama Produk: ${product.name}\n` +
                           `• Brand: ${product.brand}\n` +
                           `• Model/Tipe: ${product.models[0]}\n\n` +
                           `Bisakah saya meminta brosur digital lengkap, informasi ketersediaan stok barang, dan surat penawaran harga resmi (Quotation)? Terima kasih.`;
                           
            modalWaBtn.href = `https://wa.me/628161317107?text=${encodeURIComponent(waText)}`;
        }
        
        // Open modal
        if (productModal) {
            productModal.classList.add("active");
            document.body.style.overflow = "hidden"; // lock page scrolling
        }
    };

    function closeModal() {
        if (productModal) {
            productModal.classList.remove("active");
            document.body.style.overflow = ""; // unlock page scrolling
        }
    }

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }
    
    if (productModal) {
        productModal.addEventListener("click", (e) => {
            if (e.target === productModal) closeModal();
        });
    }

    /* ----------------------------------------------------------------------
       COMPANY PROFILE PDF MODAL
       ---------------------------------------------------------------------- */
    let pdfLoaded = false;

    function openPdfModal() {
        if (!pdfProfileModal) return;
        // Load PDF into iframe hanya saat dibuka (biar ringan di awal load)
        if (pdfViewerFrame && !pdfLoaded) {
            pdfViewerFrame.src = PDF_PROFILE_PATH;
            pdfLoaded = true;
        }
        pdfProfileModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closePdfModal() {
        if (!pdfProfileModal) return;
        pdfProfileModal.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (aboutImageTrigger) {
        aboutImageTrigger.addEventListener("click", openPdfModal);
    }

    if (pdfModalClose) {
        pdfModalClose.addEventListener("click", closePdfModal);
    }

    if (pdfProfileModal) {
        pdfProfileModal.addEventListener("click", (e) => {
            if (e.target === pdfProfileModal) closePdfModal();
        });
    }

    /* ----------------------------------------------------------------------
       LIGHTBOX BROSUR VIEWER
       ---------------------------------------------------------------------- */
    function openLightbox(index) {
        activeCatalogIndex = index;
        const catalog = catalogImages[activeCatalogIndex];
        
        if (lightboxImg) lightboxImg.src = catalog.src;
        if (lightboxTitle) lightboxTitle.innerText = catalog.title;
        if (lightboxDownload) {
            lightboxDownload.href = catalog.src;
            lightboxDownload.setAttribute("download", catalog.title + ".png");
        }
        
        if (lightbox) {
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }
    }

    function navigateLightbox(direction) {
        activeCatalogIndex += direction;
        if (activeCatalogIndex < 0) {
            activeCatalogIndex = catalogImages.length - 1;
        } else if (activeCatalogIndex >= catalogImages.length) {
            activeCatalogIndex = 0;
        }
        openLightbox(activeCatalogIndex);
    }

    // Attach click events to Unduh Brosur cards
    const catalogCards = document.querySelectorAll(".catalog-card");
    if (catalogCards.length > 0) {
        catalogCards.forEach(card => {
            card.addEventListener("click", () => {
                const index = parseInt(card.getAttribute("data-index"), 10);
                openLightbox(index);
            });
        });
    }

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
    if (lightboxNext) lightboxNext.addEventListener("click", () => navigateLightbox(1));
    
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
                closeLightbox();
            }
        });
    }

    // Keyboard support (Esc to close, Arrows to navigate)
    document.addEventListener("keydown", (e) => {
        if (lightbox && lightbox.classList.contains("active")) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") navigateLightbox(-1);
            if (e.key === "ArrowRight") navigateLightbox(1);
        }
        if (productModal && productModal.classList.contains("active")) {
            if (e.key === "Escape") closeModal();
        }
    });

    /* ----------------------------------------------------------------------
       CONTACT FORM & WHATSAPP REDIRECT GENERATOR
       ---------------------------------------------------------------------- */
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Inputs
            const name = document.getElementById("formName");
            const company = document.getElementById("formCompany");
            const email = document.getElementById("formEmail");
            const phone = document.getElementById("formPhone");
            const subject = document.getElementById("formSubject").value;
            const message = document.getElementById("formMessage");
            const btnSubmit = document.getElementById("btnSubmitForm");
            
            let isValid = true;

            // Reset error states
            document.querySelectorAll(".form-group").forEach(group => group.classList.remove("error"));

            // Validation logic
            if (!name || !name.value.trim()) {
                if (name) name.closest(".form-group").classList.add("error");
                isValid = false;
            }
            if (!company || !company.value.trim()) {
                if (company) company.closest(".form-group").classList.add("error");
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !email.value.trim() || !emailRegex.test(email.value.trim())) {
                if (email) email.closest(".form-group").classList.add("error");
                isValid = false;
            }
            
            if (!phone || !phone.value.trim()) {
                if (phone) phone.closest(".form-group").classList.add("error");
                isValid = false;
            }
            
            if (!message || !message.value.trim()) {
                if (message) message.closest(".form-group").classList.add("error");
                isValid = false;
            }

            if (!isValid) return;

            // Visual loading state
            if (btnSubmit) btnSubmit.classList.add("loading");

            // Simulate server submit delay (1.5 seconds)
            setTimeout(() => {
                if (btnSubmit) btnSubmit.classList.remove("loading");
                
                // Format WhatsApp redirect message
                const formattedMessage = `Halo PT. Bintang Surya Teknik Persada.\n` +
                                         `Saya telah mengisi formulir kontak di website Anda dengan detail sebagai berikut:\n\n` +
                                         `• Nama Lengkap: ${name.value.trim()}\n` +
                                         `• Perusahaan: ${company.value.trim()}\n` +
                                         `• Email: ${email.value.trim()}\n` +
                                         `• WhatsApp: ${phone.value.trim()}\n` +
                                         `• Topik/Subjek: ${subject}\n` +
                                         `• Detail Permintaan:\n${message.value.trim()}\n\n` +
                                         `Mohon dibantu pembuatan surat penawaran harganya. Terima kasih.`;
                
                const successWaBtn = document.getElementById("successWaBtn");
                if (successWaBtn) {
                    successWaBtn.href = `https://wa.me/628161317107?text=${encodeURIComponent(formattedMessage)}`;
                }
                
                const successSubjectEl = document.getElementById("successSubject");
                if (successSubjectEl) successSubjectEl.innerText = subject;
                
                // Open Success Overlay
                if (formSuccessOverlay) {
                    formSuccessOverlay.classList.add("active");
                    document.body.style.overflow = "hidden";
                }
                
                // Reset form fields
                contactForm.reset();
            }, 1500);
        });
    }

    // Close success overlay
    if (successCloseBtn) {
        successCloseBtn.addEventListener("click", () => {
            if (formSuccessOverlay) formSuccessOverlay.classList.remove("active");
            document.body.style.overflow = "";
        });
    }
    
    if (formSuccessOverlay) {
        formSuccessOverlay.addEventListener("click", (e) => {
            if (e.target === formSuccessOverlay) {
                formSuccessOverlay.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }
});