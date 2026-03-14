export default function Home() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-8 px-6 py-16">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Kelola J.Family
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Fondasi aplikasi keuangan keluarga & bisnis.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Next.js App Router, Supabase, Redis, shadcn/ui, dan arsitektur layanan
          siap dipakai untuk dashboard, pemasukan, pengeluaran, laporan, dan
          autentikasi.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase text-muted-foreground">
            API & Services
          </p>
          <h2 className="mt-2 text-xl font-semibold">Lapisan layanan siap pakai</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Supabase client, Redis client, dan service layer untuk transaksi,
            bisnis, dan laporan siap dihubungkan ke UI.
          </p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase text-muted-foreground">
            Struktur
          </p>
          <h2 className="mt-2 text-xl font-semibold">Rute dasar sudah disiapkan</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Halaman dashboard, pemasukan, pengeluaran, laporan, anggaran,
            hutang, tabungan, login, dan register sudah tersedia sebagai
            placeholder.
          </p>
        </div>
      </div>
    </main>
  );
}
