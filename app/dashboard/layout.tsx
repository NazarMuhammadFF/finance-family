import Link from "next/link";
import type { ReactNode } from "react";

import { dashboardNavigation } from "@/config/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-muted/20 p-4 text-sm text-muted-foreground lg:flex">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Kelola J.Family
        </p>
        <nav className="mt-6 flex flex-1 flex-col gap-1">
          {dashboardNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              <p className="text-base font-semibold text-foreground">
                {item.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Dashboard
            </p>
            <h1 className="text-xl font-semibold">Control room</h1>
          </div>
        </header>

        <section className="flex-1 px-6 py-8">{children}</section>
      </div>
    </div>
  );
}
