import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex flex-col min-h-screen bg-gradient-to-b from-purple-800 via-yellow-600 to-green-700"
      )}
    >
      {/* Header */}
      <header className="py-6 text-center text-gray-900">
        <h1 className="text-5xl font-extrabold tracking-tight animate-pulse drop-shadow-md">
          Carnaval 2025
        </h1>
        <p className="mt-2 text-lg drop-shadow-md">
          Descubra os melhores eventos de carnaval pelo Brasil!
        </p>
      </header>

      {/* Conteúdo */}
      <main className="flex-1 text-gray-900">{children}</main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-900">
        <p className="drop-shadow-md">
          © 2025 Carnaval Brasil - Feito com 💃🎉
        </p>
      </footer>
    </div>
  );
}
