export const metadata = {
  title: "Anggaran | Kelola J.Family",
};

export default function AnggaranPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Perencanaan</p>
        <h1 className="text-3xl font-semibold tracking-tight">Anggaran</h1>
      </div>
      <p className="text-muted-foreground">
        Tetapkan alokasi anggaran keluarga dan monitor realisasi.
      </p>
    </main>
  );
}