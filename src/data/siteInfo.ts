export interface SiteInfo {
  companyName: string;
  shortName: string;
  tagline: string;
  description: string;
  emails: string[];
  phoneWhatsApp: { number: string; display: string; name: string }[];
  address: string;
  googleMapsUrl: string;
  tokopediaUrl: string;
}

export const siteInfo: SiteInfo = {
  companyName: 'PT. Bintang Surya Teknik Persada',
  shortName: 'BSTP',
  tagline: 'Distributor Resmi & Supplier Peralatan Industri Terpercaya',
  description: 'Distributor resmi dan supplier peralatan industri terpercaya sejak 2005. Menyediakan Electro Motor, Gearbox, Pump, Inverter, Pulley, dan sparepart industri berkategori lengkap dengan garansi resmi.',
  emails: ['bintangteknikpersada@gmail.com', 'Sumarmobst@yahoo.com', 'Sulartobst@gmail.com'],
  phoneWhatsApp: [
    { number: '6281315998599', display: '+62 813-1599-8599', name: 'Pak Sumarmo' },
    { number: '628128362624', display: '+62 812-8362-624', name: 'Pak Sularto' },
  ],
  address: 'Jl. Raya Utama No. 88, Kawasan Industri, Jakarta, Indonesia',
  googleMapsUrl: 'https://maps.google.com/?q=PT+Bintang+Surya+Teknik+Persada',
  tokopediaUrl: 'https://tokopedia.com',
};

export const navCategories = [
  { name: 'Electro Motor', href: '/products?category=motor', icon: 'fa-solid fa-bolt' },
  { name: 'Gearbox & Reducer', href: '/products?category=gearbox', icon: 'fa-solid fa-gears' },
  { name: 'Worm Gear / Reducer', href: '/products?category=worm-gear', icon: 'fa-solid fa-gear' },
  { name: 'Centrifugal Pump', href: '/products?category=centrifugal-pump', icon: 'fa-solid fa-water' },
  { name: 'Gear Pump', href: '/products?category=gear-pump', icon: 'fa-solid fa-oil-can' },
  { name: 'Inverter', href: '/products?category=inverter', icon: 'fa-solid fa-microchip' },
  { name: 'Pulley & Coupling', href: '/products?category=pulley', icon: 'fa-solid fa-circle-nodes' },
];
