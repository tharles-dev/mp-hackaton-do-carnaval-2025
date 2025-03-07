"use client";

import { useState, useEffect } from "react";
import { Agenda, AgendaParams, AgendaResult, Meta } from "@/types/agenda";

export function useAgenda({
  city,
  date,
  sort,
  page = 1,
}: AgendaParams): AgendaResult {
  const [data, setData] = useState<Agenda[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      setError(null);

      try {
        const url = new URL(
          "/api/agendas",
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        );

        if (city) url.searchParams.set("city", city);
        if (date) url.searchParams.set("date", date);
        if (sort) url.searchParams.set("sort", sort);

        url.searchParams.set("page", page.toString());

        console.log("Fetching URL:", url.toString());

        const res = await fetch(url.toString(), {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch events: ${res.status}`);
        }

        const response = await res.json();
        const events: Agenda[] = response.data;
        const metaData: Meta = response.meta;

        console.log("Response:", events);

        setData((prev) => (page === 1 ? events : [...prev, ...events]));
        setMeta(metaData);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Erro desconhecido ao buscar eventos";
        setError(errorMessage);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [city, date, sort, page]);

  return { data, meta, loading, error };
}
