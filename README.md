# PT. Bintang Surya Teknik Persada

Website resmi distributor dan supplier peralatan industri: electro motor, gearbox, pompa, inverter, dan sparepart.

[![Astro](https://img.shields.io/badge/Astro-4.x-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-Proprietary-red)](./LICENSE)

**Website:** https://www.ptbintangsuryateknikpersada.com

## Teknologi

- [Astro](https://astro.build) 4.x (static site)
- [Tailwind CSS](https://tailwindcss.com) 3.x
- JavaScript, PDF.js, dan Leaflet (self-hosted)
- Hosting di [Vercel](https://vercel.com)

## Menjalankan Secara Lokal

Butuh Node.js 18.17.1 atau lebih baru.

```bash
git clone https://github.com/ejerai/BSTP.git
cd BSTP
npm install
npm run dev
```

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Development server di `http://localhost:4321` |
| `npm run build` | Build produksi ke folder `dist/` |
| `npm run preview` | Pratinjau hasil build |

## Pengelolaan Konten

- **Data perusahaan** (kontak, alamat, kategori): `src/data/siteInfo.ts`
- **Data produk**: konstanta `PRODUCT_DATA` di `public/js/app.js`
- **Domain situs**: properti `site` di `astro.config.mjs`

## Hak Cipta & Lisensi

© 2026 PT. Bintang Surya Teknik Persada. Seluruh hak dilindungi.

Repositori ini adalah perangkat lunak **proprietary**, bukan open source. Penyalinan, modifikasi, distribusi, atau penggunaan ulang tanpa izin tertulis dilarang. Rincian lengkap tersedia di [LICENSE](./LICENSE).

Merek dagang, logo brand mitra, dan materi katalog pabrikan adalah milik pemiliknya masing-masing.

## Kontak

Pertanyaan atau permohonan izin penggunaan: bintangteknikpersada@gmail.com