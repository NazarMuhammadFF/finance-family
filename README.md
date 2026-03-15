# Kelola J.Family

Fondasi Next.js (App Router) untuk manajemen keuangan keluarga & bisnis.

## Stack

- Next.js 16 + App Router + Turbopack
- TypeScript (strict) + ESLint
- Tailwind CSS v4 + shadcn/ui (Radix Nova preset)
- Supabase (PostgreSQL + Auth)
- Redis (ioredis)
- @tanstack/react-query, zod, react-hook-form, recharts

## Prasyarat

- Node.js 18+ (disarankan LTS terbaru)
- npm (terpasang via Node)

## Konfigurasi

1. Isi variabel lingkungan di `.env.local` (jangan commit nilai asli):

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- REDIS_URL

2. Instal dependensi:

```
npm install
```

3. Jalankan pengembangan:

```
npm run dev
```

4. Build produksi:

```
npm run build
```

## Struktur Utama

- app/ — rute App Router (dashboard, bisnis, pemasukan, pengeluaran, laporan, anggaran, hutang, tabungan, login, register) + API routes.
- lib/ — klien Supabase dan Redis.
- services/ — logika akses data (transactions, businesses, reports).
- types/ — kontrak TypeScript.
- components/ — shadcn/ui primitives.
- docs/ — konteks arsitektur & dokumentasi tambahan.

## Catatan Produksi

- Pastikan env di Vercel diisi sebelum deploy.
- Supabase anon key bersifat publik, tapi gunakan service role hanya di backend (tidak disimpan di klien).
- Gunakan Redis managed (Upstash/Redis Cloud) dengan koneksi TLS.
