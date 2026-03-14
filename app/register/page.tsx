export const metadata = {
  title: "Register | Kelola J.Family",
};

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col gap-4 px-6 py-12">
      <div>
        <p className="text-sm text-muted-foreground">Buat akun</p>
        <h1 className="text-3xl font-semibold tracking-tight">Daftar</h1>
      </div>
      <p className="text-muted-foreground">
        Form pendaftaran akan menggunakan Supabase Auth dan kebijakan keluarga.
      </p>
    </main>
  );
}