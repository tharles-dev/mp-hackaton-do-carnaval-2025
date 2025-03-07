import { useState } from "react";
import { Agenda } from "@/types/agenda";

export function useAgendaList(data: Agenda[]) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    "asc"
  );

  const sortedData = [...data].sort((a, b) => {
    const aDate = a.date_time ? new Date(a.date_time).getTime() : 0;
    const bDate = b.date_time ? new Date(b.date_time).getTime() : 0;
    if (sortDirection === "asc") return aDate - bDate;
    if (sortDirection === "desc") return bDate - aDate;
    return sortDirection ? aDate - bDate : 0;
  });

  const handleSort = (direction: "asc" | "desc") => {
    setSortDirection(direction === sortDirection ? null : direction);
  };

  return {
    viewMode,
    setViewMode,
    sortedData,
    sortDirection,
    handleSort,
  };
}
