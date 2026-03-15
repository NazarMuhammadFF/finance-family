export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export const dashboardNavigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    description: "Overview keluarga & bisnis",
  },
  { label: "Bisnis", href: "/bisnis", description: "Kelola entitas usaha" },
  { label: "Pemasukan", href: "/pemasukan", description: "Catat pemasukan" },
  {
    label: "Pengeluaran",
    href: "/pengeluaran",
    description: "Kontrol pengeluaran",
  },
  { label: "Laporan", href: "/laporan", description: "Analitik keuangan" },
];
