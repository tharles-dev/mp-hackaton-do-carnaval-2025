// components/agenda/LoadingState.tsx
"use client";

import { cn } from "@/lib/utils";
import { PartyPopper } from "lucide-react";

type LoadingStateProps = {
  message?: string;
  className?: string;
};

export function LoadingState({
  message = "Carregando a folia...",
  className,
}: LoadingStateProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 py-4 text-white",
        className
      )}
    >
      <PartyPopper className="h-6 w-6 animate-bounce text-yellow-400" />
      <p className="text-lg font-semibold">{message}</p>
    </div>
  );
}
