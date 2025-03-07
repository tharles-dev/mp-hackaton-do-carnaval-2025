import { LayoutGrid, List as IconList, ArrowUp, ArrowDown } from "lucide-react";

type ListControlsProps = {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  sortDirection: "asc" | "desc" | null;
  handleSort: (direction: "asc" | "desc") => void;
};

export function ListControls({
  viewMode,
  setViewMode,
  sortDirection,
  handleSort,
}: ListControlsProps) {
  return (
    <div className="flex justify-end mb-6 gap-2">
      <div className="hidden sm:flex gap-2">
        <button
          onClick={() => setViewMode("grid")}
          className={cn(
            "p-2 rounded-lg transition-colors",
            viewMode === "grid"
              ? "bg-yellow-400 text-purple-900"
              : "bg-purple-700 text-white hover:bg-purple-600"
          )}
          aria-label="Visualização em grade"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={cn(
            "p-2 rounded-lg transition-colors",
            viewMode === "list"
              ? "bg-yellow-400 text-purple-900"
              : "bg-purple-700 text-white hover:bg-purple-600"
          )}
          aria-label="Visualização em lista"
        >
          <IconList className="h-5 w-5" />
        </button>
      </div>
      <button
        onClick={() => handleSort("asc")}
        className={cn(
          "p-2 rounded-lg transition-colors",
          sortDirection === "asc"
            ? "bg-yellow-400 text-purple-900"
            : "bg-purple-700 text-white hover:bg-purple-600"
        )}
        aria-label="Ordenar ascendente por data"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <button
        onClick={() => handleSort("desc")}
        className={cn(
          "p-2 rounded-lg transition-colors",
          sortDirection === "desc"
            ? "bg-yellow-400 text-purple-900"
            : "bg-purple-700 text-white hover:bg-purple-600"
        )}
        aria-label="Ordenar descendente por data"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </div>
  );
}

function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}
