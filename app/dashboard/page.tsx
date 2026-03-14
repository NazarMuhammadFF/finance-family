export const metadata = {
  title: "Dashboard | Kelola J.Family",
};

export default function DashboardPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Ringkasan</p>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      </div>
      <p className="text-muted-foreground">
        Ruang untuk overview keuangan keluarga dan bisnis.
      </p>
    </main>
  );
}