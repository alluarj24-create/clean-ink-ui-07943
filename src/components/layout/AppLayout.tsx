import { ReactNode } from "react";
import { FloatingDock } from "./FloatingDock";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen w-full pb-24">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-center px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif text-2xl font-bold tracking-tight">
                The Chronicle
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5 hidden sm:block">
                Personal insights on tech, life, and everything between
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full">
        {children}
      </main>
      <FloatingDock />
    </div>
  );
}
