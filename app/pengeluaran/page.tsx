export const metadata = {
  title: "Pengeluaran | Kelola J.Family",
};

export default function PengeluaranPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Aliran dana keluar</p>
        <h1 className="text-3xl font-semibold tracking-tight">Pengeluaran</h1>
      </div>
      <p className="text-muted-foreground">
        Dokumentasikan dan kontrol pengeluaran untuk menjaga arus kas sehat.
      </p>
    </main>
  );
}
