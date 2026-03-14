export const metadata = {
  title: "Pemasukan | Kelola J.Family",
};

export default function PemasukanPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Aliran dana masuk</p>
        <h1 className="text-3xl font-semibold tracking-tight">Pemasukan</h1>
      </div>
      <p className="text-muted-foreground">
        Catat dan pantau seluruh pemasukan keluarga maupun bisnis.
      </p>
    </main>
  );
}