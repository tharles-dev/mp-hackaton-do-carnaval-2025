import { OrderBy } from "./order-by";

export type Agenda = {
  id: string;
  title: string;
  description: string;
  date_time: string | null;
  address: string;
  complete_address: string;
  city: string;
  neighborhood: string;
  event_url: string | null;
  price: string;
};

export type AgendaParams = {
  city?: string;
  date?: string;
  sort?: OrderBy;
  page?: number;
};

export type AgendaResult = {
  data: Agenda[] | null;
  meta: Meta | null;
  loading: boolean;
  error: string | null;
};

export type Meta = {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
};
