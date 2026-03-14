export const metadata = {
  title: "Tabungan | Kelola J.Family",
};

export default function TabunganPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Dana cadangan</p>
        <h1 className="text-3xl font-semibold tracking-tight">Tabungan</h1>
      </div>
      <p className="text-muted-foreground">
        Tempat untuk target tabungan, dana darurat, dan sinking fund.
      </p>
    </main>
  );
}
