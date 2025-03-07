// components/agenda/Filter.tsx
"use client";

import { cities } from "@/lib";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { CalendarIcon } from "lucide-react";
import { ChangeEvent, useRef } from "react";
import { FilterValues } from "@/types/filter";

type FilterProps = {
  initialValues: FilterValues;
  onFilterChange: (filters: FilterValues) => void;
};

export function Filter({ initialValues, onFilterChange }: FilterProps) {
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
      dateInputRef.current.showPicker();
    }
  };

  const handleCityChange = (value: string) => {
    onFilterChange({ city: value });
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ date: e.target.value });
  };

  const handleResetFilters = () => {
    onFilterChange({
      city: "",
      date: "",
    });
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* Filtro por Estado */}
        <Select
          onValueChange={handleCityChange}
          value={initialValues.city || ""}
        >
          <SelectTrigger className="w-full md:w-64 bg-white/20 font-bold border-none text-purple-800">
            <SelectValue placeholder="Selecione o Estado" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filtro por Data */}
        <div className="relative w-full md:w-64">
          <Input
            ref={dateInputRef}
            type="date"
            value={initialValues.date || ""}
            onChange={handleDateChange}
            className="w-full bg-white/20 border-none text-purple-800 font-bold placeholder-white/70 pr-10"
          />
          <CalendarIcon
            onClick={handleIconClick}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-800 cursor-pointer"
          />
        </div>

        {/* Botão de Reset */}
        <Button
          onClick={handleResetFilters}
          className="w-full md:w-auto bg-purple-900 hover:bg-purple-700 transition-all duration-300"
        >
          Limpar Filtros
        </Button>
      </div>
    </section>
  );
}
