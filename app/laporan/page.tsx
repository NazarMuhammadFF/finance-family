export const metadata = {
  title: "Laporan | Kelola J.Family",
};

export default function LaporanPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Analisis keuangan</p>
        <h1 className="text-3xl font-semibold tracking-tight">Laporan</h1>
      </div>
      <p className="text-muted-foreground">
        Nantinya berisi laporan neraca, arus kas, dan kinerja bisnis.
      </p>
    </main>
  );
}
