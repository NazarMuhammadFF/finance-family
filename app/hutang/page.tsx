export const metadata = {
  title: "Hutang | Kelola J.Family",
};

export default function HutangPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Kewajiban</p>
        <h1 className="text-3xl font-semibold tracking-tight">Hutang</h1>
      </div>
      <p className="text-muted-foreground">
        Pantau kewajiban dan jadwal pelunasan untuk menjaga kesehatan kas.
      </p>
    </main>
  );
}