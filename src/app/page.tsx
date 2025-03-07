"use client";

import { useState } from "react";
import { useAgenda } from "@/hooks/agenda";
import { FilterValues } from "@/types/filter";
import { Filter, List } from "@/components/agenda";
import { LoadingState } from "@/components/ui";

export default function HomePage() {
  const [page, setPage] = useState<number>(1);

  const [filters, setFilters] = useState<FilterValues>({
    city: "",
    date: "",
    sort: "desc",
  });

  const { data, meta, loading, error } = useAgenda({
    city: filters.city,
    date: filters.date,
    sort: filters.sort,
    page: page,
  });

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setPage(1); // reset
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="">
      <Filter initialValues={filters} onFilterChange={handleFilterChange} />
      {loading && page === 1 && <LoadingState />}
      {error && <p className="text-center text-red-500">Erro: {error}</p>}

      <List
        data={data || []}
        meta={meta}
        onLoadMore={handleLoadMore}
        isLoadingMore={loading && page > 1}
      />
    </div>
  );
}
