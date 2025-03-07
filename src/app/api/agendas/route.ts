import { NextRequest } from "next/server";
import { AgendaResult } from "@/types/agenda";

export const revalidate = 3600; // 1 hora

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // query parameters
  const city = searchParams.get("city");
  const date = searchParams.get("date");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page") || "1";

  // URL
  const API_URL = process.env.API_URL;
  const url = new URL(`${API_URL}/agenda`);

  if (city) url.searchParams.set("city", city);
  if (date) url.searchParams.set("date", date);
  if (sort) url.searchParams.set("sort", sort);
  if (page) url.searchParams.set("page", page);

  try {
    // fetch com cache
    const response = await fetch(url.toString(), {
      next: {
        revalidate: revalidate,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const events: AgendaResult = await response.json();

    /* const events: AgendaResult = data.map((event: AgendaResult) => ({
      ...event,
      date_time: event.date_time ? new Date(event.date_time) : null,
    })); */

    return Response.json(events, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Erro ao fetch eventos:", error);
    return Response.json({ error: "Erro ao buscar eventos" }, { status: 500 });
  }
}
