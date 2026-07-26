const PRODUCT_DATA = [
    
    {
        id: "elektromotor-1",
        name: "Elektromotor",
        category: "motor",
        brand: "Motor / DC Motor Series",
        image: "/assets/images/catalog/elektromotor1.webp",
        specs: {
            "Daya": "0.37 KW – 315 KW",
            "Tipe": "Horizontal",
        }
    },
    {
        id: "elektromotor-2",
        name: "Elektromotor",
        category: "motor",
        brand: "Motor / DC Motor Series",
        image: "/assets/images/catalog/elektromotor2.webp",
        specs: {
            "Daya": "0.37 KW – 315 KW",
            "Tipe": "Horizontal Flange",
        }
    },
    {
        id: "elektromotor-3",
        name: "Elektromotor",
        category: "motor",
        brand: "Motor / DC Motor Series",
        image: "/assets/images/catalog/elektromotor3.webp",
        specs: {
            "Daya": "0.37 KW – 315 KW",
            "Tipe": "Vertical",
        }
    },

    
    {
        id: "vibrator-1",
        name: "Vibrator Motor",
        category: "vibrator",
        image: "/assets/images/catalog/vibrator1.webp",
        specs: {
            "Available Range": "90 WATT - 14000 WATT",
            "Pole": "2P / 4P / 6p",
            "Voltage": "380V – 460V 3 Phase 50 Hz / 60 Hz",
        }
    },
    {
        id: "vibrator-2",
        name: "Vibrator Motor",
        category: "vibrator",
        image: "/assets/images/catalog/vibrator2.webp",
        specs: {
            "Available Range": "90 WATT - 14000 WATT",
            "Pole": "2P / 4P / 6p",
            "Voltage": "380V – 460V 3 Phase 50 Hz / 60 Hz",
        }
    },

    
    {
        id: "worm-gear-reducer-1",
        name: "Worm Gear Reducer",
        category: "gearbox",
        image: "/assets/images/catalog/wormgearreducer1.webp",
        models: ["WORM GEAR WPA/WPO/WPX/WPS"],
        specs: {
            "Ukuran (Sizes)": "40 - 50 - 60 - 70 - 80 - 100 - 120 - 135 - 155 - 175 - 200 - 250",
            "Rasio Putaran (Ratio)": "1/10 ~ 1/60",
            "Casing": "Cast Iron"
        }
    },
    {
        id: "worm-gear-reducer-2",
        name: "Worm Gear Reducer",
        category: "gearbox",
        image: "/assets/images/catalog/wormgearreducer2.webp",
        models: ["WORM GEAR WPA/WPO/WPX/WPS"],
        specs: {
            "Ukuran (Sizes)": "40 - 50 - 60 - 70 - 80 - 100 - 120 - 135 - 155 - 175 - 200 - 250",
            "Rasio Putaran (Ratio)": "1/10 ~ 1/60",
            "Casing": "Cast Iron"
        }
    },
    {
        id: "worm-gear-reducer-3",
        name: "Worm Gear Reducer",
        category: "gearbox",
        image: "/assets/images/catalog/wormgearreducer3.webp",
        models: ["WORM GEAR WPA/WPO/WPX/WPS"],
        specs: {
            "Ukuran (Sizes)": "40 - 50 - 60 - 70 - 80 - 100 - 120 - 135 - 155 - 175 - 200 - 250",
            "Rasio Putaran (Ratio)": "1/10 ~ 1/60",
            "Casing": "Cast Iron"
        }
    },
    {
        id: "worm-gear-reducer-4",
        name: "Worm Gear Reducer",
        category: "gearbox",
        image: "/assets/images/catalog/wormgearreducer4.webp",
        models: ["WORM GEAR WPA/WPO/WPX/WPS"],
        specs: {
            "Ukuran (Sizes)": "40 - 50 - 60 - 70 - 80 - 100 - 120 - 135 - 155 - 175 - 200 - 250",
            "Rasio Putaran (Ratio)": "1/10 ~ 1/60",
            "Casing": "Cast Iron"
        }
    },

    
    {
        id: "worm-gear-1",
        name: "Worm Gear",
        category: "worm-gear",
        image: "/assets/images/catalog/wormgear1.webp",
        models: ["Worm Gear MRV"],
        specs: {
            "Ukuran (Sizes)": "030 - 040 - 050 - 063 - 075 - 090 - 110 - 130 - 150",
            "Rasio Putaran (Ratio)": "7.5 ~ 100",
            "Power": "UP TO 7,5KW",
            "Casing": "Aluminium"
        }
    },
    {
        id: "worm-gear-2",
        name: "Worm Gear",
        category: "worm-gear",
        image: "/assets/images/catalog/wormgear2.webp",
        models: ["Worm Gear MRV"],
        specs: {
            "Ukuran (Sizes)": "030 - 040 - 050 - 063 - 075 - 090 - 110 - 130 - 150",
            "Rasio Putaran (Ratio)": "7.5 ~ 100",
            "Power": "UP TO 7,5KW",
            "Casing": "Aluminium"
        }
    },
    {
        id: "worm-gear-3",
        name: "Worm Gear",
        category: "worm-gear",
        image: "/assets/images/catalog/wormgear3.webp",
        models: ["Worm Gear MRV"],
        specs: {
            "Ukuran (Sizes)": "030 - 040 - 050 - 063 - 075 - 090 - 110 - 130 - 150",
            "Rasio Putaran (Ratio)": "7.5 ~ 100",
            "Power": "UP TO 7,5KW",
            "Casing": "Aluminium"
        }
    },
    {
        id: "worm-gear-4",
        name: "Worm Gear",
        category: "worm-gear",
        image: "/assets/images/catalog/wormgear4.webp",
        models: ["Worm Gear MRV"],
        specs: {
            "Ukuran (Sizes)": "030 - 040 - 050 - 063 - 075 - 090 - 110 - 130 - 150",
            "Rasio Putaran (Ratio)": "7.5 ~ 100",
            "Power": "UP TO 7,5KW",
            "Casing": "Aluminium"
        }
    },

    
    {
        id: "helical-gearmotor-1",
        name: "Helical Gear Motor",
        category: "gearmotor",
        brand: "Compact Gearmotor Series",
        image: "/assets/images/catalog/helicalgearmotor1.webp",
        specs: {
            "Ukuran (Sizes)": "57, 67, 77, 87, 97, 107",
            "Torsi Maksimal": "830 Nm",
            "Rasio Putaran (Ratio)": "1.3 ~ 6.45",
            "Daya Motor (Power)": "0.12 ~ 45KW"
        }
    },
    {
        id: "helical-gearmotor-2",
        name: "Helical Gear Motor",
        category: "gearmotor",
        brand: "Compact Gearmotor Series",
        image: "/assets/images/catalog/helicalgearmotor2.webp",
        specs: {
            "Ukuran (Sizes)": "27, 37, 47, 57, 67, 77, 87, 97, 107, 137, 147, 167",
            "Torsi Maksimal": "18000 Nm",
            "Rasio Putaran (Ratio)": "1.3 ~ 27001",
            "Daya Motor (Power)": "0.12 ~ 160 KW"
        }
    },
    {
        id: "helical-gearmotor-3",
        name: "Helical Gear Motor",
        category: "gearmotor",
        brand: "Compact Gearmotor Series",
        image: "/assets/images/catalog/helicalgearmotor3.webp",
        specs: {
            "Ukuran (Sizes)": "27, 37, 47, 57, 67, 77, 87, 97, 107, 137, 147, 167",
            "Torsi Maksimal": "18000 Nm",
            "Rasio Putaran (Ratio)": "1.3 ~ 27001",
            "Daya Motor (Power)": "0.12 ~ 160 KW"
        }
    },

    
    {
        id: "centrifugal-pump-1",
        name: "Centrifugal Pump",
        category: "pump",
        image: "/assets/images/catalog/centrifugalpump1.webp",
        specs: {
            "Desain": "Back Pull-out Design (Kemudahan Maintenance)",
            "Temperatur Seal": "Standard Mechanical Seal 10°C ~ 140°C",
            "Tekanan Operasional": "1.6 MPa ~ 2.4 MPa",
            "Tekanan Pengujian": "Maksimal Test Pressure 3.6 MPa"
        }
    },
    {
        id: "centrifugal-pump-2",
        name: "Centrifugal Pump",
        category: "pump",
        image: "/assets/images/catalog/centrifugalpump2.webp",
        specs: {
            "Material Impeller": "Cast Iron / Bronze / Stainless Steel",
            "Shaft Sealing & Pelumas": "Mechanical Seal / Gland Packing (Oil / Grease)",
            "Performa (Q / H)": "Flow Rate 2-1100 m³/h, Head 2-150 m",
            "Kecepatan (Speed)": "1450/2900 RPM (50Hz) | 1750/3500 RPM (60Hz)"
        }
    },
    {
        id: "centrifugal-pump-3",
        name: "Centrifugal Pump",
        category: "pump",
        image: "/assets/images/catalog/centrifugalpump3.webp",
        specs: {
            "Material Impeller": "Cast Iron / Bronze / Stainless Steel",
            "Shaft Sealing & Pelumas": "Mechanical Seal / Gland Packing (Oil / Grease)",
            "Performa (Q / H)": "Flow Rate 2-1100 m³/h, Head 2-150 m",
            "Kecepatan (Speed)": "1450/2900 RPM (50Hz) | 1750/3500 RPM (60Hz)"
        }
    },

    
    {
        id: "gear-pump-1",
        name: "Gear Pump",
        category: "gear-pump",
        image: "/assets/images/catalog/gearpump.webp",
        models: ["GL Series", "GC Series", "GB Series"],
        specs: {
            "Delivery Volume": "10 L/MIN (2 USG/MIN) hingga 56 L/MIN (14 USG/MIN)",
            "Power": "200 W hingga 750 W",
            "Pressure": "0.1 - 0.3 MPA (1 - 3 KG/CM²)",
            "Applications": "Solar, Minyak"
        }
    },

    
    {
        id: "inverter-1",
        name: "Inverter GD-10",
        category: "inverter",
        image: "/assets/images/catalog/inverter1.webp",
        specs: {
            "Rated Input Voltage (V)": "1PH 220V(-15%)~240V(+10%)",
            "Rated Input Frequency (Hz)": "50Hz or 60Hz, Permissible Range: 47~63Hz",
            "Rated Output Voltage (V)": "Equal to Input Voltage with Less Than 5% Error",
            "Rated Output Frequency (Hz)": "50Hz/60Hz, Fluctuation Range: ±5%",
            "Control Mode": "V/F Control",
        }
    },
    {
        id: "inverter-2",
        name: "Inverter GD-20",
        category: "inverter",
        image: "/assets/images/catalog/inverter2.png",
        specs: {
            "Rated Input Voltage (V)": "1PH 220V (-15%) ~ 240V (+10%)",
            "Rated Frequency (Hz)": "50Hz or 60Hz, Permissible Range: 47~63Hz",
            "Rated Output Voltage (V)": "Equal to Input Voltage with Less Than 5% Error",
            "Control Mode": "SVPWM, SVC",
        }
    },
    {
        id: "inverter-3",
        name: "Inverter VFD C",
        category: "inverter",
        image: "/assets/images/catalog/inverter3.png",
        specs: {
            "Kapasitas Daya": "0.75 ~ 400 kW",
            "Fitur PLC": "Built-in Delta PLC 10k steps & Calendar Function",
            "Komunikasi": "Built-in MODBUS & BACnet (Option: Profibus-DP, Ethernet-IP, CANopen)",
            "Proteksi & Desain": "Special PCB Coating, IP20/NEMA1 LCD Display, CE/UL Safety",
        }
    },

];

document.addEventListener("DOMContentLoaded", () => {
    
    let scrollLockCount = 0;
    let savedScrollY = 0;

    
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
            
            
            
            
            window.scrollTo({ top: savedScrollY, left: 0, behavior: "instant" });
        }
    }

    
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    
    
    if (navMenu) navMenu.setAttribute("data-scroll-lock-allow", "");
    
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const filterTabs = document.getElementById("filterTabs");
    const filterDropdownTrigger = document.getElementById("filterDropdownTrigger");
    const filterDropdownLabel = document.getElementById("filterDropdownLabel");
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
    const pdfViewerLoading = document.getElementById("pdfViewerLoading");
    const PDF_PROFILE_PATH = "/assets/KATALOG.pdf";
    
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxDownload = document.getElementById("lightboxDownload");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    
    
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    let currentFilter = null; 
    let activeCatalogIndex = 0;
    
    
    // Dibangun otomatis dari setiap .catalog-card di halaman (bukan daftar manual),
    // supaya gambar yang terbuka di lightbox SELALU sesuai dengan thumbnail yang diklik
    // dan link download-nya juga ikut benar. Urut berdasarkan data-index tiap kartu.
    const catalogImages = Array.from(document.querySelectorAll(".catalog-card"))
        .sort((a, b) => parseInt(a.dataset.index, 10) - parseInt(b.dataset.index, 10))
        .map((card) => {
            const titleEl = card.querySelector(".catalog-info h3");
            const imgEl = card.querySelector(".catalog-thumb img");
            return {
                title: titleEl ? titleEl.textContent.trim() : (imgEl ? imgEl.alt : "Brosur"),
                src: card.dataset.src || (imgEl ? imgEl.getAttribute("src") : "")
            };
        });

    
    
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

        
        
        
        updateNavbarScrollState();

        window.addEventListener("scroll", () => {
            updateNavbarScrollState();
            
            
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

    
    function initScrollReveal() {
        
        
        
        
        
        
        
        const revealSections = document.querySelectorAll("section:not(.stats)");
        if (!revealSections.length) return;

        
        
        
        
        const staggerSelector = [
            ".pillar-item", ".vision-card", ".mission-card",
            ".method-item", ".catalog-card"
        ].join(", ");

        
        
        
        
        
        
        
        
        
        const isInInitialViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        };

        revealSections.forEach(section => {
            
            
            
            
            
            
            
            
            
            
            
            
            const revealTarget = section.querySelector(":scope > .container") || section;
            if (!isInInitialViewport(revealTarget)) {
                revealTarget.classList.add("reveal-section");
            }

            const items = section.querySelectorAll(staggerSelector);
            items.forEach((item, index) => {
                if (isInInitialViewport(item)) return;
                item.classList.add("reveal-item");
                
                item.style.setProperty("--reveal-delay", `${Math.min(index * 0.08, 0.5)}s`);
            });
        });

        
        
        
        
        
        
        
        const cleanupReveal = (el) => {
            el.classList.remove("reveal-section", "reveal-item", "is-visible");
            el.style.removeProperty("--reveal-delay");
        };

        
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

    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    
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
        
        document.querySelectorAll(".nav-dropdown.dropdown-open").forEach(d => {
            d.classList.remove("dropdown-open");
            const menu = d.querySelector(".nav-dropdown-menu");
            if (menu) menu.style.maxHeight = "";
        });
        navToggle.classList.remove("nav-toggle-subpanel-open");
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

    
    if (navOverlay) {
        navOverlay.addEventListener("click", closeMobileMenu);
    }

    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            
            const isMobile = navToggle && window.getComputedStyle(navToggle).display !== "none";
            if (link.classList.contains("nav-dropdown-trigger") && isMobile) {
                return;
            }

            closeMobileMenu();
        });
    });

    
    const navDropdowns = document.querySelectorAll(".nav-dropdown");

    function openDropdownAccordion(dropdown) {
        const menu = dropdown.querySelector(".nav-dropdown-menu");
        dropdown.classList.add("dropdown-open");
        if (menu) {
            
            menu.style.maxHeight = "none";
            const fullHeight = menu.scrollHeight;
            menu.style.maxHeight = "0px";
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    menu.style.maxHeight = fullHeight + "px";
                });
            });
        }
    }

    function closeDropdownAccordion(dropdown) {
        const menu = dropdown.querySelector(".nav-dropdown-menu");
        dropdown.classList.remove("dropdown-open");
        if (menu) {
            menu.style.maxHeight = menu.scrollHeight + "px";
            requestAnimationFrame(() => {
                menu.style.maxHeight = "0px";
            });
        }
    }

    navDropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector(".nav-dropdown-trigger");
        if (!trigger) return;

        
        trigger.addEventListener("click", (e) => {
            
            if (!navToggle || window.getComputedStyle(navToggle).display === "none") return;

            e.preventDefault(); 
            const isOpen = dropdown.classList.contains("dropdown-open");

            
            navDropdowns.forEach(d => {
                if (d !== dropdown) closeDropdownAccordion(d);
            });

            if (!isOpen) {
                openDropdownAccordion(dropdown);
                if (navToggle) navToggle.classList.add("nav-toggle-subpanel-open");
            } else {
                closeDropdownAccordion(dropdown);
                if (navToggle) navToggle.classList.remove("nav-toggle-subpanel-open");
            }
        });

        
        const backBtn = dropdown.querySelector("[data-dropdown-back]");
        if (backBtn) {
            backBtn.addEventListener("click", () => {
                closeDropdownAccordion(dropdown);
                if (navToggle) navToggle.classList.remove("nav-toggle-subpanel-open");
            });
        }
    });

    
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-dropdown")) {
            navDropdowns.forEach(d => closeDropdownAccordion(d));
            if (navToggle) navToggle.classList.remove("nav-toggle-subpanel-open");
        }
    });

    // ── WA CTA Dropdown Logic ──────────────────────────────────────────
    const navCtaWA = document.getElementById("navCtaWA");
    const navCtaDropdown = document.querySelector(".nav-cta-dropdown");
    if (navCtaWA && navCtaDropdown) {
        navCtaWA.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = navCtaDropdown.classList.toggle("open");
            navCtaWA.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        document.addEventListener("click", (e) => {
            if (!e.target.closest(".nav-cta-dropdown")) {
                navCtaDropdown.classList.remove("open");
                navCtaWA.setAttribute("aria-expanded", "false");
            }
        });
    }

    
    window.addEventListener("resize", () => {
        const isMobileNow = navToggle && window.getComputedStyle(navToggle).display !== "none";

        if (!isMobileNow) {
            
            navDropdowns.forEach(dropdown => {
                dropdown.classList.remove("dropdown-open");
                const menu = dropdown.querySelector(".nav-dropdown-menu");
                if (menu) menu.style.maxHeight = "";
            });
            if (navToggle) navToggle.classList.remove("nav-toggle-subpanel-open");
            return;
        }

        navDropdowns.forEach(dropdown => {
            if (!dropdown.classList.contains("dropdown-open")) return;
            const menu = dropdown.querySelector(".nav-dropdown-menu");
            if (!menu) return;
            menu.style.maxHeight = "none";
            const fullHeight = menu.scrollHeight;
            menu.style.maxHeight = fullHeight + "px";
        });
    });

    
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");

    if (categoryParam && filterTabs) {
        const matchingBtn = filterTabs.querySelector(`.filter-btn[data-filter="${categoryParam}"]`);
        if (matchingBtn) {
            
            const activeBtn = filterTabs.querySelector(".filter-btn.active");
            if (activeBtn) activeBtn.classList.remove("active");
            matchingBtn.classList.add("active");
            currentFilter = categoryParam;
            if (filterDropdownLabel) filterDropdownLabel.textContent = matchingBtn.textContent;

            
            if (productsGrid) renderProducts();

            
            const productsSection = document.getElementById("products");
            if (productsSection) {
                setTimeout(() => {
                    productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }

    
    const statsSection = document.querySelector(".stats");
    let statsAnimated = false;
    
    function animateCounters() {
        const counters = document.querySelectorAll(".stat-number");
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const isPercent = counter.innerText.includes("%");
            const isPlus = counter.innerText.includes("+");
            let count = 0;
            const speed = target / 40; 
            
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
        
        
        const filtered = PRODUCT_DATA.filter(p => {
            const matchesCategory = (currentFilter === "all" || p.category === currentFilter);
            
            const matchesSearch = !query || 
                p.name.toLowerCase().includes(query) ||
                (p.brand?.toLowerCase().includes(query) ?? false) ||
                (p.models?.some(m => m.toLowerCase().includes(query)) ?? false) ||
                Object.values(p.specs).some(s => s.toLowerCase().includes(query));
                
            return matchesCategory && matchesSearch;
        });

        
        if (clearSearch) {
            if (query) {
                clearSearch.style.display = "block";
            } else {
                clearSearch.style.display = "none";
            }
        }

        
        if (filtered.length === 0) {
            productsGrid.style.display = "none";
            if (noResults) noResults.style.display = "block";
            return;
        }

        productsGrid.style.display = "grid";
        if (noResults) noResults.style.display = "none";

        
        filtered.forEach(p => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.setAttribute("data-id", p.id);
            
            
            let specsLi = "";
            let keys = Object.keys(p.specs).slice(0, 3); 
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
                         onerror="this.onerror=null; this.src='/assets/brand/logo.png';">`
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
                    <img src="${p.image}" alt="${p.name}" class="product-card-img" onerror="this.onerror=null; this.src='/assets/brand/logo.png';">
                </div>`;
            }

            const showBrand = p.category === "motor" || p.category === "gearmotor";
            const brandHTML = showBrand && p.brand ? `<span class="product-brand">${p.brand}</span>` : "";
            const brandMsg = p.brand ? ` (${p.brand})` : "";

            card.innerHTML = `
                ${imgBoxHTML}
                <div class="product-details-box">
                    ${brandHTML}
                    <h3 class="product-name">${p.name}</h3>
                    <ul class="product-specs-summary">
                        ${specsLi}

                    </ul>
                    <div class="product-actions-box">
                        <button class="btn btn-detail" onclick="openProductDetail('${p.id}')">
                            <i class="fa-solid fa-list-check"></i> Detail
                        </button>
                        <a href="https://wa.me/628161317107?text=${encodeURIComponent(`Halo PT. Bintang Surya Teknik Persada, saya tertarik dengan produk ${p.name}${brandMsg}. Mohon informasi penawaran harga & ketersediaan stok.`)}" 
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

    
    if (productsGrid) {
        renderProducts();
    }

    
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

    // Buka dropdown kategori (khusus tampilan mobile) - memanjang ke bawah sesuai tinggi konten asli
    function openFilterDropdown() {
        if (filterTabs) {
            filterTabs.classList.add("open");
            filterTabs.style.maxHeight = "none";
            const fullHeight = filterTabs.scrollHeight;
            filterTabs.style.maxHeight = "0px";

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    filterTabs.style.maxHeight = fullHeight + "px";
                });
            });
        }
        if (filterDropdownTrigger) {
            filterDropdownTrigger.classList.add("open");
            filterDropdownTrigger.setAttribute("aria-expanded", "true");
        }
    }

    // Tutup dropdown kategori (khusus tampilan mobile)
    function closeFilterDropdown() {
        if (filterTabs && filterTabs.classList.contains("open")) {
            filterTabs.style.maxHeight = filterTabs.scrollHeight + "px";
            requestAnimationFrame(() => {
                filterTabs.style.maxHeight = "0px";
            });
        }
        if (filterTabs) filterTabs.classList.remove("open");
        if (filterDropdownTrigger) {
            filterDropdownTrigger.classList.remove("open");
            filterDropdownTrigger.setAttribute("aria-expanded", "false");
        }
    }

    
    if (filterDropdownTrigger && filterTabs) {
        filterDropdownTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = filterTabs.classList.contains("open");
            if (isOpen) {
                closeFilterDropdown();
            } else {
                openFilterDropdown();
            }
        });

        
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".filter-sidebar")) {
                closeFilterDropdown();
            }
        });
    }

    
    if (filterTabs) {
        filterTabs.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const activeBtn = filterTabs.querySelector(".filter-btn.active");
                if (activeBtn) activeBtn.classList.remove("active");
                btn.classList.add("active");
                currentFilter = btn.getAttribute("data-filter");
                if (filterDropdownLabel) filterDropdownLabel.textContent = btn.textContent;
                renderProducts();
                closeFilterDropdown();
            });
        });
    }

    
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
        if (modalBrand) modalBrand.innerText = product.brand ? `Brand: ${product.brand}` : '';
        
        
        if (modalIcon) {
            modalIcon.innerHTML = `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='/assets/brand/logo.png';">`;
        }

        
        if (modalImgTrigger) {
            modalImgTrigger.dataset.fullImg = product.image;
            modalImgTrigger.dataset.fullAlt = product.name;
        }
        
        
        if (modalSpecsTable) {
            let tableRows = "";
            // Models row — hanya tampil kalau ada
            if (product.models && product.models.length > 0) {
                tableRows += `<tr>
                    <td class="spec-name">Tipe / Model</td>
                    <td class="spec-val">${product.models.join(", ")}</td>
                </tr>`;
            }
            
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
                           `• Brand: ${product.brand ?? '-'}\n` +
                           `• Model/Tipe: ${product.models?.[0] ?? '-'}\n\n` +
                           `Bisakah saya meminta brosur digital lengkap, informasi ketersediaan stok barang, dan surat penawaran harga resmi (Quotation)? Terima kasih.`;
                           
            modalWaBtn.href = `https://wa.me/628161317107?text=${encodeURIComponent(waText)}`;
        }
        
        
        if (productModal) {
            productModal.classList.add("active");
            lockBodyScroll(); 
        }
    };

    function closeModal() {
        if (productModal) {
            productModal.classList.remove("active");
            unlockBodyScroll(); 
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

    
    let pdfLoadTimeout = null;

    function openPdfModal() {
        if (!pdfProfileModal) return;

        if (pdfViewerFrame && pdfViewerLoading) {
            // Tampilkan spinner & sembunyikan iframe dulu setiap dibuka
            pdfViewerFrame.classList.remove("loaded");
            pdfViewerLoading.classList.remove("hidden");

            const markLoaded = () => {
                pdfViewerFrame.classList.add("loaded");
                pdfViewerLoading.classList.add("hidden");
                if (pdfLoadTimeout) clearTimeout(pdfLoadTimeout);
            };

            pdfViewerFrame.onload = markLoaded;

            // Jaga-jaga: kalau event 'load' tidak pernah terpicu (mis. PDF besar/lambat),
            // tetap tampilkan iframe setelah beberapa detik supaya tidak terlihat "nge-hang".
            if (pdfLoadTimeout) clearTimeout(pdfLoadTimeout);
            pdfLoadTimeout = setTimeout(markLoaded, 6000);

            // Selalu set ulang src setiap dibuka (browser akan pakai cache kalau file sama),
            // supaya kalau percobaan sebelumnya gagal, tetap dicoba lagi.
            pdfViewerFrame.src = PDF_PROFILE_PATH;
        }

        pdfProfileModal.classList.add("active");
        lockBodyScroll();
    }

    function closePdfModal() {
        if (!pdfProfileModal) return;
        pdfProfileModal.classList.remove("active");
        unlockBodyScroll();

        // Lepas iframe PDF supaya proses render/plugin PDF tidak terus nyangkut
        // di memori browser dan bikin halaman lag setelah modal ditutup.
        if (pdfViewerFrame) {
            pdfViewerFrame.onload = null;
            pdfViewerFrame.removeAttribute("src");
            pdfViewerFrame.classList.remove("loaded");
        }
        if (pdfViewerLoading) pdfViewerLoading.classList.remove("hidden");
        if (pdfLoadTimeout) {
            clearTimeout(pdfLoadTimeout);
            pdfLoadTimeout = null;
        }
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

    
    function openLightbox(index) {
        activeCatalogIndex = index;
        const catalog = catalogImages[activeCatalogIndex];
        
        if (lightboxImg) lightboxImg.src = catalog.src;
        if (lightboxTitle) lightboxTitle.innerText = catalog.title;
        if (lightboxDownload) {
            lightboxDownload.href = catalog.src;
            const fileExt = (catalog.src.split(".").pop() || "png").split("?")[0];
            lightboxDownload.setAttribute("download", catalog.title + "." + fileExt);
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
});