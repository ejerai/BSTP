export interface SiteInfo {
  companyName: string;
  shortName: string;
  tagline: string;
  description: string;
  emails: string[];
  phoneWhatsApp: { number: string; display: string; name: string }[];
  address: string;
  city: string;
  region: string;
  postalCode: string;
  googleMapsUrl: string;
  latitude: number;
  longitude: number;
}

export const siteInfo: SiteInfo = {
  companyName: 'PT. Bintang Surya Teknik Persada',
  shortName: 'BSTP',
  tagline: 'Distributor Resmi & Supplier Peralatan Industri Terpercaya',
  description: 'Distributor resmi dan supplier peralatan industri terpercaya. Menyediakan Electro Motor, Gearbox, Pompa Industri, Inverter, Pulley, dan sparepart industri berkategori lengkap dengan garansi resmi di Tangerang Selatan.',
  emails: ['bintangteknikpersada@gmail.com', 'Sumarmobst@yahoo.com', 'Sulartobst@gmail.com'],
  phoneWhatsApp: [
    { number: '628161317107', display: '+62 816-1317-107', name: 'Sales Engineer 1' },
    { number: '6285881994889', display: '+62 858-8199-4889', name: 'Sales Engineer 2' },
  ],
  address: 'Jl. Abdurahman No.165, RW.8, Parigi Baru, Kec. Pd. Aren',
  city: 'Kota Tangerang Selatan',
  region: 'Banten',
  postalCode: '15228',
  googleMapsUrl: 'https://maps.app.goo.gl/ywgkJD4szouAUo9g8',
  latitude: -6.262553664995171,
  longitude: 106.6912459708451,
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