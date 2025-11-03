import { ReactNode } from "react";
import { AdminFloatingDock } from "./AdminFloatingDock";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen w-full pb-24 bg-muted/30">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 lg:px-6">
          <h2 className="font-serif text-xl font-bold">Admin Panel</h2>
        </div>
      </header>
      <main className="w-full">
        <div className="container mx-auto p-6 md:p-8">
          {children}
        </div>
      </main>
      <AdminFloatingDock />
    </div>
  );
}
