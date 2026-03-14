export const metadata = {
  title: "Bisnis | Kelola J.Family",
};

export default function BisnisPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Usaha keluarga</p>
        <h1 className="text-3xl font-semibold tracking-tight">Bisnis</h1>
      </div>
      <p className="text-muted-foreground">
        Kelola entitas bisnis yang terhubung dengan keluarga.
      </p>
    </main>
  );
}