"use client";

import { ChevronDown } from "lucide-react";

type SortOption = "duration" | "calories" | "rating";

type SortDropdownProps = {
    value: SortOption;
    onChange: (value: SortOption) => void;
};

export default function SortDropdown({
    value,
    onChange,
}: SortDropdownProps) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(event) =>
                    onChange(event.target.value as SortOption)
                }
                className="appearance-none rounded-md border border-white/10 bg-[#15161b] px-4 py-2 pr-9 text-xs font-semibold text-white outline-none transition focus:border-[#ccff00]"
            >
                <option value="duration">
                    Duration
                </option>

                <option value="calories">
                    Calories
                </option>

                <option value="rating">
                    Rating
                </option>
            </select>

            <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50"
            />
        </div>
    );
}