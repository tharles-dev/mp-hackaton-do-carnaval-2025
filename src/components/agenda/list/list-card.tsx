import { formatDate } from "@/lib/utils";
import { Agenda } from "@/types/agenda";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Link from "next/link";

type ListCardProps = {
  event: Agenda;
  viewMode: "grid" | "list";
};

export function ListCard({ event, viewMode }: ListCardProps) {
  return (
    <Card
      className={cn(
        "border-none hover:scale-105 transition-transform duration-300 bg-purple-700/70 text-white",
        viewMode === "grid" ? "rounded-xl shadow-lg" : "flex flex-col"
      )}
    >
      <CardHeader>
        <CardTitle className="text-yellow-400 text-xl">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-lg font-semibold text-white">
          {event.date_time ? formatDate(event.date_time) : "Data não informada"}
        </p>
        <p className="text-white">
          Cidade:{""}
          <span className="text-yellow-400 font-semibold">{event.city}</span>
        </p>
        <p className="text-white">
          Endereço:{" "}
          <span className="text-yellow-400 font-semibold">{event.address}</span>
        </p>
        <div className="flex flex-row justify-between">
          <Button className="mt-2 bg-yellow-400 text-purple-900 hover:bg-yellow-500">
            <span>{event.price}</span>
          </Button>
          <Link
            target="_blank"
            className="text-yellow-400 font-bold"
            href={event.event_url ?? "#"}
          >
            Garantir meu lugar
          </Link>
        </div>
        <p className="text-white">
          <span className="text-white/90 font-semibold">
            {event.description || "Não informado"}
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}
