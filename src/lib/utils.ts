import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return format(date, "dd/MMM EEEE - HH:mm", { locale: ptBR });
}
