/* BSTP JAVASCRIPT */
const PRODUCT_DATA = [
    // --- CATEGORY: MOTOR ---
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
        id: "elektromotor-3",
        name: "Elektromotor",
        category: "motor",
        brand: "Gear Motor / DC Motor Series",
        image: "assets/images/catalog/elektromotor3.webp",
        models: ["AC Induction Motor", "DC Gearmotor Series", "IK Series", "Z Series"],
        specs: {
            "Daya": "3W – 250W",
            "Tipe": "AC Induction / DC Gearmotor",
            "Tegangan": "220V AC / 12V – 90V DC",
            "Aplikasi": "Conveyor, Otomasi, Industri Umum"
        }
    },

    // --- CATEGORY: VIBRATOR ---
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
        id: "vibrator-2",
        name: "Vibrator Motor",
        category: "vibrator",
        brand: "ALLIANCE",
        image: "assets/images/catalog/vibrator2.webp",
        models: ["AVI Series"],
        specs: {
            "Kelas": "Heavy Duty",
            "Tipe": "Vibrator Motor",
            "Proteksi": "IP66 / Kelas Isolasi F",
            "Aplikasi": "Industri Berat, Konstruksi"
        }
    },

    // --- CATEGORY: GEARBOX (Worm Gear Reducer) ---
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
        id: "worm-gear-reducer-2",
        name: "Worm Gear Reducer",
        category: "gearbox",
        brand: "CHENTA / REVCO",
        image: "assets/images/catalog/wormgearreducer2.webp",
        models: ["WPDA 50-155", "WPDS 50-250"],
        specs: {
            "Ukuran (Sizes)": "50, 60, 70, 80, 100, 120, 135, 147, 155, 175, 200, 250",
            "Rasio Putaran (Ratio)": "1/10 ~ 1/60 (per stage)",
            "Tipe": "Double Stage Worm Gearbox",
            "Koneksi Input": "Flange Motor IEC (WPDA) / Shaft (WPDS)"
        }
    },
    {
        id: "worm-gear-reducer-3",
        name: "Worm Gear Reducer",
        category: "gearbox",
        brand: "MOTOVARIO / YUEMA",
        image: "assets/images/catalog/wormgearreducer3.webp",
        models: ["NMRV 30-150", "RV 30-150"],
        specs: {
            "Ukuran (Sizes)": "30 - 40 - 50 - 63 - 75 - 90 - 110 - 130 - 150",
            "Rasio Putaran (Ratio)": "1.3 ~ 27,001 (Kombinasi)",
            "Daya Motor (Power)": "0.12 ~ 160 kW",
            "Bahan Bodi": "Aluminium / Cast Iron"
        }
    },
    {
        id: "worm-gear-reducer-4",
        name: "Worm Gear Reducer",
        category: "gearbox",
        brand: "YUEMA / TRANSMAX",
        image: "assets/images/catalog/wormgearreducer4.webp",
        models: ["TR Series", "TRF Series", "TK Series", "TKF Series"],
        specs: {
            "Tipe": "Helical / Helical Bevel Gearbox",
            "Torsi Maksimal": "50,000 Nm",
            "Rasio Putaran (Ratio)": "1.3 ~ 32,625",
            "Daya Motor (Power)": "0.12 ~ 200 kW"
        }
    },

    // --- CATEGORY: WORM-GEAR ---
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
        id: "worm-gear-2",
        name: "Worm Gear",
        category: "worm-gear",
        brand: "CHENTA / REVCO",
        image: "assets/images/catalog/wormgear2.webp",
        models: ["WPDA Series", "WPDS Series"],
        specs: {
            "Tipe": "Double Stage Worm Gear",
            "Rasio Putaran (Ratio)": "1/10 ~ 1/60 (per stage)",
            "Aplikasi": "Rasio Reduksi Tinggi",
            "Koneksi": "IEC Flange / Shaft Input"
        }
    },
    {
        id: "worm-gear-3",
        name: "Worm Gear",
        category: "worm-gear",
        brand: "MOTOVARIO / YUEMA",
        image: "assets/images/catalog/wormgear3.webp",
        models: ["NMRV 30-150", "RV 30-150"],
        specs: {
            "Ukuran (Sizes)": "30 - 40 - 50 - 63 - 75 - 90 - 110 - 130 - 150",
            "Tipe": "NMRV Worm Gear",
            "Daya Motor (Power)": "0.12 ~ 160 kW",
            "Bahan Bodi": "Aluminium / Cast Iron"
        }
    },
    {
        id: "worm-gear-4",
        name: "Worm Gear",
        category: "worm-gear",
        brand: "Industrial Gearbox Series",
        image: "assets/images/catalog/wormgear4.webp",
        models: ["ZDY Series", "ZLY Series", "BWD Series", "XWD Series"],
        specs: {
            "Tipe": "Cycloidal / Parallel Shaft Reducer",
            "Daya (Power Range)": "0.12 - 6000 kW",
            "Rasio Transmisi (Ratio)": "1.25 - 650000",
            "Torsi Output": "Hingga 950 kNm"
        }
    },

    // --- CATEGORY: GEARMOTOR ---
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
        id: "helical-gearmotor-2",
        name: "Helical Gear Motor",
        category: "gearmotor",
        brand: "Mini Gear Motor / IEC Series",
        image: "assets/images/catalog/helicalgearmotor2.webp",
        models: ["CHCZ ... P", "CHCF ... P", "CHCZ ... HS"],
        specs: {
            "Ukuran Frame (Sizes)": "01 - 02 - 03 - 04",
            "Torsi Maksimal": "500 Nm",
            "Rasio Putaran (Ratio)": "3.66 ~ 54",
            "Daya Motor (Power)": "0.12 ~ 4 kW"
        }
    },
    {
        id: "helical-gearmotor-3",
        name: "Helical Gear Motor",
        category: "gearmotor",
        brand: "Variator / Gearhead Series",
        image: "assets/images/catalog/helicalgearmotor3.webp",
        models: ["Variable Helical", "Variator Foot Mounting", "Variator Flange Mounting", "Spiral Bevel 25W–200W"],
        specs: {
            "Kapasitas Daya": "0.18 ~ 7.5 kW",
            "Torsi Maksimal": "1,000 Nm",
            "Rasio Putaran (Ratio)": "5 (Variasi Manual)",
            "Tipe": "Helical / Spiral Bevel Gearmotor"
        }
    },


    // --- CATEGORY: PUMP (Centrifugal Pump) ---
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
        id: "centrifugal-pump-2",
        name: "Centrifugal Pump",
        category: "pump",
        brand: "CNP (Nanfang)",
        image: "assets/images/catalog/centrifugalpump2.webp",
        models: ["CHL Series", "CHLF Series", "CDL Series", "CDLF Series"],
        specs: {
            "Tipe": "Multistage Centrifugal Pump",
            "Kapasitas Alir (Q)": "Hingga 240 m³/h",
            "Head Dorong (H)": "Hingga 305 m",
            "Material": "Stainless Steel (SUS 304 / 316)"
        }
    },
    {
        id: "centrifugal-pump-3",
        name: "Centrifugal Pump",
        category: "pump",
        brand: "CNP / SPECK PUMPEN",
        image: "assets/images/catalog/centrifugalpump3.webp",
        models: ["SJ Series Deepwell", "ASK Series", "SK Series", "VH Series"],
        specs: {
            "Tipe": "Submersible / Side Channel Pump",
            "Kapasitas Alir": "Hingga 260 m³/h",
            "Head Dorong (H)": "Hingga 381 m",
            "Aplikasi": "Sumur Bor, Minyak Panas, Cairan Kimia"
        }
    },

    // --- CATEGORY: GEAR PUMP ---
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

    // --- CATEGORY: INVERTER ---
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

    // --- CATEGORY: PULLEY ---
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

/* ==========================================================================
   APP INITIALIZATION & CONTROLLERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    /* ----------------------------------------------------------------------
       BODY SCROLL LOCK (dipakai oleh: drawer menu mobile, modal produk,
       modal PDF, lightbox brosur, overlay sukses form)
       ------------------------------------------------------------------------
       RIWAYAT BUG (kenapa versi ini beda dari sebelumnya):
       Versi lama mengunci body dengan position:fixed + top:-savedScrollYpx
       (trik "body scroll lock" klasik). Di Beranda — halaman terpanjang,
       jadi savedScrollY-nya paling besar — trik itu justru membuat WebKit
       salah menghitung area sentuh yang boleh discroll pada elemen
       position:fixed BERSARANG di dalamnya (drawer .nav-menu ini sendiri).
       Efeknya persis seperti yang dilaporkan: swipe di dalam drawer tidak
       dianggap scroll sama sekali oleh browser, dan drawer cuma bisa
       digeser dengan menarik langsung scrollbar-nya (drag scrollbar tidak
       lewat jalur gesture yang sama, jadi tidak kena bug ini). Ini murni
       bug rendering iOS/WebKit terkait kombinasi fixed-di-dalam-fixed
       dengan offset negatif besar — tidak bisa diperbaiki dari sisi
       preventDefault/JS gesture handling saja, karena browser sudah salah
       menentukan area scrollable-nya SEBELUM touch event itu sendiri
       diproses.

       FIX: tidak lagi memindahkan body sama sekali (posisi TETAP position:
       static, tidak ada position:fixed + top:-scrollYpx). Body dikunci
       cukup dengan overflow:hidden (via class) di <html> & <body> — ini
       yang menghindari bug touch-scroll bersarang di atas.

       TAPI: overflow:hidden pada <html> (root scroller dokumen) TERNYATA
       tidak selalu mempertahankan scrollTop dengan andal saat di-toggle —
       beberapa browser "lupa" posisi scroll-nya begitu overflow dikunci,
       jadi saat dibuka lagi halaman kembali ke posisi paling atas (bug
       "balik ke atas sendiri" yang dilaporkan). Makanya posisi scroll
       tetap perlu disimpan & dikembalikan manual lewat JS — bedanya
       dengan trik lama, di sini body TIDAK PERNAH dipindah posisinya
       (tidak position:fixed), cuma window.scrollY-nya saja yang dicatat
       lalu dikembalikan instan (bukan animasi 'smooth') pas overlay
       ditutup. Dihitung pakai counter supaya aman kalau ada lebih dari
       satu overlay yang kebuka bersamaan. */
    let scrollLockCount = 0;
    let savedScrollY = 0;

    /* Lapisan pengaman tambahan: cegah "scroll chaining" (swipe di
       background yang bocor scroll ke body) memakai touchmove listener,
       dibatasi hanya untuk elemen yang TIDAK ditandai data-scroll-lock-allow
       (drawer menu, isi modal produk, modal PDF, lightbox tetap bebas
       discroll normal lewat CSS overscroll-behavior yang sudah ada). */
    function findScrollLockAllowedAncestor(el) {
        while (el && el !== document.body && el.nodeType === 1) {
            if (el.hasAttribute && el.hasAttribute("data-scroll-lock-allow")) {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    }

    function handleLockTouchMove(e) {
        const scrollable = findScrollLockAllowedAncestor(e.target);
        if (!scrollable) {
            e.preventDefault();
        }
    }

    function lockBodyScroll() {
        if (scrollLockCount === 0) {
            savedScrollY = window.scrollY;
            document.documentElement.classList.add("scroll-locked");
            document.body.classList.add("scroll-locked");
            document.addEventListener("touchmove", handleLockTouchMove, { passive: false });
        }
        scrollLockCount++;
    }

    function unlockBodyScroll() {
        scrollLockCount = Math.max(0, scrollLockCount - 1);
        if (scrollLockCount === 0) {
            document.removeEventListener("touchmove", handleLockTouchMove, { passive: false });
            document.documentElement.classList.remove("scroll-locked");
            document.body.classList.remove("scroll-locked");
            // "instant" supaya bukan animasi smooth-scroll kelihatan (html
            // punya scroll-behavior:smooth secara global) — ini cuma
            // mengembalikan posisi yang sempat "dilupakan" browser, bukan
            // scroll baru yang perlu dianimasikan.
            window.scrollTo({ top: savedScrollY, left: 0, behavior: "instant" });
        }
    }

    // UI Elements
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    // Drawer menu mobile harus tetap bisa discroll walau body sedang dikunci
    // (lihat handleLockTouchMove di atas)
    if (navMenu) navMenu.setAttribute("data-scroll-lock-allow", "");
    
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const filterTabs = document.getElementById("filterTabs");
    const productsGrid = document.getElementById("productsGrid");
    const noResults = document.getElementById("noResults");
    
    const productModal = document.getElementById("productModal");
    if (productModal) {
        const productModalContent = productModal.querySelector(".modal-content");
        if (productModalContent) productModalContent.setAttribute("data-scroll-lock-allow", "");
    }
    const modalClose = document.getElementById("modalClose");
    const modalImgTrigger = document.getElementById("modalImgTrigger");
    const productImgLightbox = document.getElementById("productImgLightbox");
    const productImgLightboxImg = document.getElementById("productImgLightboxImg");
    const productImgLightboxClose = document.getElementById("productImgLightboxClose");
    
    const aboutImageTrigger = document.getElementById("aboutImageTrigger");
    const pdfProfileModal = document.getElementById("pdfProfileModal");
    if (pdfProfileModal) {
        const pdfModalContent = pdfProfileModal.querySelector(".modal-content");
        if (pdfModalContent) pdfModalContent.setAttribute("data-scroll-lock-allow", "");
    }
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
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');

        const updateNavbarScrollState = () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
                if (scrollTopBtn) scrollTopBtn.classList.add("active");
                // #0e1934 = hasil "flatten" dua layer transparan navbar saat
                // scrolled (::before rgb(9 33 90/55%) blur, ditambah navbar
                // sendiri rgba(15,23,42,0.6)) di atas latar --primary-dark.
                // Ini pendekatan paling mendekati, bukan 100% identik terus-
                // menerus, karena navbar.scrolled itu KACA/BLUR sungguhan —
                // warna aslinya ikut berubah tergantung section apa yang lagi
                // discroll di baliknya. Chrome Android membaca perubahan meta
                // theme-color ini secara live jadi address bar ikut berubah
                // warna saat discroll. iOS Safari 26+ TIDAK bisa disamakan
                // secara live dengan cara apapun dari kode — warnanya diambil
                // sekali di render pertama dari elemen fixed/<body>, dan tidak
                // update lagi walau CSS/JS berubah setelahnya (batasan OS,
                // bukan bug di kode ini).
                if (themeColorMeta) themeColorMeta.setAttribute("content", "#0e1934");
            } else {
                navbar.classList.remove("scrolled");
                if (scrollTopBtn) scrollTopBtn.classList.remove("active");
                if (themeColorMeta) themeColorMeta.setAttribute("content", "#020617");
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
            // Class "reveal-section" (opacity+translateY) SENGAJA ditempel
            // ke wrapper ".container" di dalam section, BUKAN ke <section>
            // itu sendiri. <section> menyimpan background-color solid
            // (bg-white/bg-light) yang menutupi warna body (--primary-dark)
            // di baliknya — kalau <section>-nya sendiri yang di-transform/
            // opacity, kotak itu ikut tergeser/transparan sesaat dan celah
            // di posisi aslinya menampakkan warna gelap body (bug "patah-
            // patah gelap" waktu scroll). Dengan menganimasikan ".container"
            // saja, <section> tetap diam & background solidnya tetap 100%
            // menutupi area itu sepanjang waktu; yang slide+fade cuma
            // konten di dalamnya. Section tanpa ".container" langsung
            // (mis. .hero/.page-header) fallback ke section itu sendiri —
            // aman karena keduanya sama-sama gelap seperti body.
            const revealTarget = section.querySelector(":scope > .container") || section;
            revealTarget.classList.add("reveal-section");

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

    // Mobile Navbar Toggle (drawer + backdrop overlay)
    const navOverlay = document.getElementById("navOverlay");

    function openMobileMenu() {
        navMenu.classList.add("active");
        navToggle.classList.add("active");
        navToggle.setAttribute("aria-expanded", "true");
        if (navOverlay) navOverlay.classList.add("active");
        lockBodyScroll();
    }

    function closeMobileMenu() {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        if (navOverlay) navOverlay.classList.remove("active");
        unlockBodyScroll();
        // Close any open dropdown when closing menu
        document.querySelectorAll(".nav-dropdown.dropdown-open").forEach(d => d.classList.remove("dropdown-open"));
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Tap outside (on the dimmed backdrop) closes the drawer
    if (navOverlay) {
        navOverlay.addEventListener("click", closeMobileMenu);
    }

    // Close menu when clicking nav item
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Jangan tutup menu utama jika ini adalah trigger dropdown di mobile
            const isMobile = navToggle && window.getComputedStyle(navToggle).display !== "none";
            if (link.classList.contains("nav-dropdown-trigger") && isMobile) {
                return;
            }

            closeMobileMenu();
        });
    });

    /* ----------------------------------------------------------------------
       NAVBAR DROPDOWN — Mobile tap toggle
       ----------------------------------------------------------------------
       Etalase Produk sekarang tampil sebagai panel full-screen terpisah
       yang cuma dianimasikan pakai transform (slide dari kanan), bukan
       accordion max-height lagi — jadi tidak perlu lagi trik "force reflow"
       yang dulu dipakai buat mengakali timing animasi tinggi konten. */
    const navDropdowns = document.querySelectorAll(".nav-dropdown");

    navDropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector(".nav-dropdown-trigger");
        if (!trigger) return;

        // On mobile (touch devices): tap trigger toggles dropdown open/close
        trigger.addEventListener("click", (e) => {
            // Only intercept on mobile (when nav-toggle is visible)
            if (!navToggle || window.getComputedStyle(navToggle).display === "none") return;

            e.preventDefault(); // prevent navigation on tap
            const isOpen = dropdown.classList.contains("dropdown-open");

            // Close all other dropdowns first
            navDropdowns.forEach(d => d.classList.remove("dropdown-open"));

            if (!isOpen) {
                dropdown.classList.add("dropdown-open");
            }
        });

        // Tombol "back" di header panel Etalase Produk -> kembali ke list utama
        const backBtn = dropdown.querySelector("[data-dropdown-back]");
        if (backBtn) {
            backBtn.addEventListener("click", () => {
                dropdown.classList.remove("dropdown-open");
            });
        }
    });

    // Close dropdown when clicking outside (desktop)
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-dropdown")) {
            navDropdowns.forEach(d => d.classList.remove("dropdown-open"));
        }
    });

    /* ----------------------------------------------------------------------
       URL PARAM → AUTO-FILTER KATEGORI di products.html
       ---------------------------------------------------------------------- */
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");

    if (categoryParam && filterTabs) {
        const matchingBtn = filterTabs.querySelector(`.filter-btn[data-filter="${categoryParam}"]`);
        if (matchingBtn) {
            // Aktifkan filter sesuai URL param
            const activeBtn = filterTabs.querySelector(".filter-btn.active");
            if (activeBtn) activeBtn.classList.remove("active");
            matchingBtn.classList.add("active");
            currentFilter = categoryParam;

            // Render produk
            if (productsGrid) renderProducts();

            // Smooth scroll ke section produk
            const productsSection = document.getElementById("products");
            if (productsSection) {
                setTimeout(() => {
                    productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }



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
                    <div class="pick-category-icon"><i class="fa-solid fa-hand-point-left"></i></div>
                    <h3>Pilih Kategori Produk</h3>
                    <p>Klik salah satu kategori di sebelah kiri untuk melihat daftar produk yang tersedia.</p>
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
                "vibrator": "Vibrator Motor",
                "gearbox": "Worm Gear Reducer",
                "worm-gear": "Worm Gear",
                "gearmotor": "Helical Gear Motor",
                "pump": "Centrifugal Pump",
                "gear-pump": "Gear Pump",
                "lifting": "Hoist & Crane",
                "inverter": "Inverter (VFD)",
                "pulley": "Pulley",
                "inverter-compressor": "Inverter/Compressor"
            };

            const cleanCategory = categoryLabels[p.category] || "Industrial Component";

            // Build image section — slideshow if product has multiple images
            let imgBoxHTML;
            if (p.images && p.images.length > 1) {
                const slides = p.images.map((src, i) => `
                    <img src="${src}" alt="${p.name} ${i + 1}" 
                         class="product-card-img card-slide ${i === 0 ? 'active' : ''}" 
                         onerror="this.onerror=null; this.src='assets/brand/logo.png';">`
                ).join("");
                const dots = p.images.map((_, i) => `
                    <button class="slide-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
                ).join("");
                imgBoxHTML = `
                <div class="product-img-box has-slider" data-slide-index="0">
                    <span class="product-tag">${cleanCategory}</span>
                    <button class="slide-arrow slide-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
                    ${slides}
                    <button class="slide-arrow slide-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>
                    <div class="slide-dots">${dots}</div>
                </div>`;
            } else {
                imgBoxHTML = `
                <div class="product-img-box">
                    <span class="product-tag">${cleanCategory}</span>
                    <img src="${p.image}" alt="${p.name}" class="product-card-img" onerror="this.onerror=null; this.src='assets/brand/logo.png';">
                </div>`;
            }

            card.innerHTML = `
                ${imgBoxHTML}
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

            // Init slider for cards with multiple images
            if (p.images && p.images.length > 1) {
                initCardSlider(card);
            }
        });

        revealProductCards();
    }

    /* ----------------------------------------------------------------------
       CARD IMAGE SLIDER — untuk produk dengan array images
       ---------------------------------------------------------------------- */
    function initCardSlider(card) {
        const imgBox = card.querySelector(".product-img-box.has-slider");
        if (!imgBox) return;

        const slides = imgBox.querySelectorAll(".card-slide");
        const dots   = imgBox.querySelectorAll(".slide-dot");
        const prev   = imgBox.querySelector(".slide-prev");
        const next   = imgBox.querySelector(".slide-next");
        let current  = 0;
        let autoTimer;

        function goTo(idx) {
            slides[current].classList.remove("active");
            dots[current].classList.remove("active");
            current = (idx + slides.length) % slides.length;
            slides[current].classList.add("active");
            dots[current].classList.add("active");
        }

        function startAuto() {
            autoTimer = setInterval(() => goTo(current + 1), 3000);
        }
        function stopAuto() { clearInterval(autoTimer); }

        prev.addEventListener("click", (e) => { e.stopPropagation(); stopAuto(); goTo(current - 1); startAuto(); });
        next.addEventListener("click", (e) => { e.stopPropagation(); stopAuto(); goTo(current + 1); startAuto(); });
        dots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                e.stopPropagation();
                stopAuto();
                goTo(parseInt(dot.dataset.index));
                startAuto();
            });
        });

        startAuto();
    }

    /* ----------------------------------------------------------------------
       PRODUCT CARD REVEAL — animasi masuk untuk kartu produk.
       Dipicu oleh scroll (IntersectionObserver): begitu grid produk masuk
       viewport (pertama kali di-scroll, atau langsung terlihat saat user
       klik kategori sementara grid sudah berada di layar), kartu-kartu
       muncul bertahap (stagger). Arah transisi diatur lewat CSS:
       desktop dari atas ke bawah, mobile dari bawah ke atas.
       ---------------------------------------------------------------------- */
    function revealProductCards() {
        const cards = productsGrid.querySelectorAll(".product-card");
        if (!cards.length) return;

        // Fallback untuk browser lama tanpa IntersectionObserver
        if (!("IntersectionObserver" in window)) {
            cards.forEach(c => c.classList.add("card-reveal", "is-visible"));
            return;
        }

        const cardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -60px 0px"
        });

        cards.forEach((card, index) => {
            card.classList.add("card-reveal");
            card.style.setProperty("--card-reveal-delay", `${Math.min(index * 0.07, 0.5)}s`);
            cardObserver.observe(card);
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

    // Filter tab logic — sidebar selalu tampil, tidak perlu collapse
    if (filterTabs) {
        filterTabs.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const activeBtn = filterTabs.querySelector(".filter-btn.active");
                if (activeBtn) activeBtn.classList.remove("active");
                btn.classList.add("active");
                currentFilter = btn.getAttribute("data-filter");
                renderProducts();
            });
        });
    }

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
            "motor": "Elektromotor",
            "vibrator": "Vibrator Motor",
            "gearbox": "Worm Gear Reducer",
            "worm-gear": "Worm Gear",
            "gearmotor": "Helical Gear Motor",
            "pump": "Centrifugal Pump",
            "gear-pump": "Gear Pump",
            "lifting": "Electric Hoist & Crane",
            "inverter": "Inverter (VFD)",
            "pulley": "Pulley",
            "inverter-compressor": "Inverter/Compressor"
        };
        
        if (modalCategory) modalCategory.innerText = categoryLabels[product.category] || "Kategori Produk";
        if (modalTitle) modalTitle.innerText = product.name;
        if (modalBrand) modalBrand.innerText = `Brand: ${product.brand}`;
        
        // Show actual image instead of vector icons in modal body
        if (modalIcon) {
            modalIcon.innerHTML = `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='assets/brand/logo.png';">`;
        }

        // Keep image + name on the trigger so the lightbox knows what to open
        if (modalImgTrigger) {
            modalImgTrigger.dataset.fullImg = product.image;
            modalImgTrigger.dataset.fullAlt = product.name;
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
            lockBodyScroll(); // lock page scrolling
        }
    };

    function closeModal() {
        if (productModal) {
            productModal.classList.remove("active");
            unlockBodyScroll(); // unlock page scrolling
        }
        if (productImgLightbox) {
            productImgLightbox.classList.remove("active");
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
       PRODUCT IMAGE LIGHTBOX (opened from the square glass image inside modal)
       ---------------------------------------------------------------------- */
    function openProductImgLightbox() {
        if (!modalImgTrigger || !productImgLightbox || !productImgLightboxImg) return;
        const fullSrc = modalImgTrigger.dataset.fullImg;
        if (!fullSrc) return;
        productImgLightboxImg.src = fullSrc;
        productImgLightboxImg.alt = modalImgTrigger.dataset.fullAlt || "";
        productImgLightbox.classList.add("active");
    }

    function closeProductImgLightbox() {
        if (productImgLightbox) productImgLightbox.classList.remove("active");
    }

    if (modalImgTrigger) {
        modalImgTrigger.addEventListener("click", openProductImgLightbox);
        modalImgTrigger.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openProductImgLightbox();
            }
        });
    }

    if (productImgLightboxClose) {
        productImgLightboxClose.addEventListener("click", closeProductImgLightbox);
    }

    if (productImgLightbox) {
        productImgLightbox.addEventListener("click", (e) => {
            if (e.target === productImgLightbox || e.target.classList.contains("image-lightbox-stage")) {
                closeProductImgLightbox();
            }
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
        lockBodyScroll();
    }

    function closePdfModal() {
        if (!pdfProfileModal) return;
        pdfProfileModal.classList.remove("active");
        unlockBodyScroll();
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
            lockBodyScroll();
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove("active");
            unlockBodyScroll();
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
        if (productImgLightbox && productImgLightbox.classList.contains("active")) {
            if (e.key === "Escape") closeProductImgLightbox();
            return;
        }
        if (productModal && productModal.classList.contains("active")) {
            if (e.key === "Escape") closeModal();
        }
        if (navMenu && navMenu.classList.contains("active")) {
            if (e.key === "Escape") closeMobileMenu();
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
                    lockBodyScroll();
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
            unlockBodyScroll();
        });
    }
    
    if (formSuccessOverlay) {
        formSuccessOverlay.addEventListener("click", (e) => {
            if (e.target === formSuccessOverlay) {
                formSuccessOverlay.classList.remove("active");
                unlockBodyScroll();
            }
        });
    }
});