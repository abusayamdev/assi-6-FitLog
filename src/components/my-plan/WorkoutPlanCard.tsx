"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Check,
    Clock3,
    Flame,
    Star,
    X,
} from "lucide-react";

import type { Workout } from "@/types/workout";

type WorkoutPlanCardProps = {
    workout: Workout;
    completed: boolean;
    onDone: () => void;
    onRemove: () => void;
};

export default function WorkoutPlanCard({
    workout,
    completed,
    onDone,
    onRemove,
}: WorkoutPlanCardProps) {
    return (
        <div
            className={`rounded-xl border bg-[#15161b] p-3 transition md:p-4 ${completed
                    ? "border-[#ccff00]/30 opacity-70"
                    : "border-white/10 hover:border-white/20"
                }`}
        >
            <div className="flex flex-col gap-4 md:flex-row md:items-center">

                {/* Workout image */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-lg sm:h-52 md:h-20 md:w-32">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 128px"
                        className={`object-cover ${completed ? "grayscale" : ""
                            }`}
                    />
                </div>

                {/* Workout information */}
                <div className="min-w-0 flex-1">

                    <h2
                        className={`text-base font-black uppercase tracking-tight ${completed
                                ? "text-white/50 line-through"
                                : "text-white"
                            }`}
                    >
                        {workout.name}
                    </h2>

                    <p className="mt-1 text-xs text-white/40">
                        {workout.equipment}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/45">

                        <span className="flex items-center gap-1.5">
                            <Clock3
                                size={13}
                                className="text-[#ccff00]"
                            />
                            {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Flame
                                size={13}
                                className="text-[#ccff00]"
                            />
                            {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Star
                                size={13}
                                className="text-[#ccff00]"
                            />
                            {workout.rating}
                        </span>

                    </div>
                </div>

                {/* Actions */}
                <div className="flex w-full items-center gap-2 md:w-auto md:shrink-0">

                    {/* View details */}
                    <Link
                        href={`/workouts/${workout.id}`}
                        className="flex-1 rounded-full border border-white/15 bg-white/[0.02] px-4 py-2.5 text-center text-[11px] font-bold text-white transition hover:border-white/30 hover:bg-white/5 md:flex-none"
                    >
                        View Details
                    </Link>

                    {/* Mark as done */}
                    <button
                        type="button"
                        onClick={onDone}
                        disabled={completed}
                        className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-black transition md:flex-none ${completed
                                ? "cursor-not-allowed bg-white/10 text-white/35"
                                : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
                            }`}
                    >
                        <Check
                            size={14}
                            strokeWidth={3}
                        />

                        {completed
                            ? "DONE"
                            : "MARK AS DONE"}
                    </button>

                    {/* Remove */}
                    <button
                        type="button"
                        onClick={onRemove}
                        aria-label={`Remove ${workout.name}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
                    >
                        <X size={15} />
                    </button>

                </div>
            </div>
        </div>
    );
}