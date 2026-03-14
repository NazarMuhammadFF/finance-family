export const metadata = {
  title: "Login | Kelola J.Family",
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Akses akun</p>
        <h1 className="text-3xl font-semibold tracking-tight">Masuk</h1>
      </div>
      <p className="text-muted-foreground">
        Form autentikasi akan ditempatkan di sini dengan Supabase Auth.
      </p>
    </main>
  );
}