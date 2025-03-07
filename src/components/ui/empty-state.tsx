"use client";

import { cn } from "@/lib/utils";
import { PartyPopper, Music, LucideMarsStroke } from "lucide-react";

type EmptyStateProps = {
  message?: string;
  className?: string;
};

export function EmptyState({
  message = "Nenhum evento encontrado! Que tal ajustar os filtros e curtir o carnaval?",
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-4 text-center",
        className
      )}
    >
      <div className="flex gap-4 mb-4">
        <PartyPopper className="h-12 w-12 text-white animate-bounce" />
        <LucideMarsStroke className="h-12 w-12 text-white animate-pulse" />
        <Music className="h-12 w-12 text-white animate-spin" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">
        Ops, o bloco está vazio!
      </h3>
      <p className="text-lg text-white/90 max-w-md">{message}</p>
    </div>
  );
}
