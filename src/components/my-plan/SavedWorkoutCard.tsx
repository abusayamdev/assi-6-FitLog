"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Clock3,
    Flame,
    Star,
    X,
} from "lucide-react";

import type { Workout } from "@/types/workout";

type SavedWorkoutCardProps = {
    workout: Workout;
    onRemove: () => void;
};

export default function SavedWorkoutCard({
    workout,
    onRemove,
}: SavedWorkoutCardProps) {
    return (
        <div className="rounded-xl border border-white/10 bg-[#15161b] p-3 transition hover:border-white/15 md:p-4">

            <div className="flex flex-col gap-4 md:flex-row md:items-center">

                {/* Workout image */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-56 md:h-20 md:w-32">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 128px"
                        className="object-cover"
                    />
                </div>

                {/* Workout information */}
                <div className="min-w-0 flex-1">

                    <h2 className="text-base font-black uppercase text-white">
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

                    <Link
                        href={`/workouts/${workout.id}`}
                        className="flex-1 rounded-full border border-white/15 px-4 py-2 text-center text-xs font-medium text-white transition hover:border-white/30 md:flex-none"
                    >
                        View Details
                    </Link>

                    <button
                        type="button"
                        onClick={onRemove}
                        aria-label={`Remove ${workout.name} from saved workouts`}
                        className="rounded-full p-2 text-white/35 transition hover:bg-white/5 hover:text-white"
                    >
                        <X size={16} />
                    </button>

                </div>

            </div>
        </div>
    );
}