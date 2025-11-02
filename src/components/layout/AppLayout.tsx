import { ReactNode } from "react";
import { FloatingDock } from "./FloatingDock";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen w-full pb-24">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 lg:px-6">
          <h2 className="font-serif text-xl font-bold">The Chronicle</h2>
        </div>
      </header>
      <main className="w-full">
        {children}
      </main>
      <FloatingDock />
    </div>
  );
}
