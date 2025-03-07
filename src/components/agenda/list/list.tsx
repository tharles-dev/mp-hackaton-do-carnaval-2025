import { useAgendaList } from "@/hooks/agenda";
import { Agenda, Meta } from "@/types";
import { ListControls } from "./list-controls";
import { ListCard } from "./list-card";
import { Button, EmptyState } from "@/components/ui";

type Props = {
  data: Agenda[];
  meta: Meta | null;
  onLoadMore: () => void;
  isLoadingMore: boolean;
};

export function List({ data, meta, onLoadMore, isLoadingMore }: Props) {
  const { viewMode, setViewMode, sortedData, handleSort, sortDirection } =
    useAgendaList(data);

  if (sortedData.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <ListControls
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortDirection={sortDirection}
        handleSort={handleSort}
      />
      <div
        className={cn(
          "gap-6",
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col"
        )}
      >
        {sortedData.map((event, index) => (
          <ListCard key={index} event={event} viewMode={viewMode} />
        ))}
      </div>
      {/* Botão Carregar Mais */}
      {meta && meta.current_page < meta.last_page && (
        <div className="mt-6 text-center">
          <Button
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="bg-purple-900 hover:bg-purple-700 text-white"
          >
            {isLoadingMore ? "Carregando..." : "Carregar Mais"}
          </Button>
        </div>
      )}
    </section>
  );
}

function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}
