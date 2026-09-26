"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutLibrary() {
    
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [sortBy, setSortBy] =
        useState<SortOption>("duration");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadWorkouts() {
            try {
                const data = await getWorkouts();
                setWorkouts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadWorkouts();
    }, []);

    const sortedWorkouts = [...workouts].sort(
        (a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration;
            }

            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned;
            }

            return b.rating - a.rating;
        }
    );

    return (
        <section
            id="library"
            className="border-b border-white/10 py-16 md:py-20"
        >
            <div className="fitlog-container">

                {/* Header */}
                <div className="mb-8 flex items-end justify-between gap-6">

                    <div>
                        <p className="fitlog-eyebrow">
                            THE LIBRARY
                        </p>

                        <p className="mt-3 text-sm text-[var(--fitlog-muted)] md:text-base">
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>

                    {!loading && (
                        <SortDropdown
                            value={sortBy}
                            onChange={setSortBy}
                        />
                    )}

                </div>

                {/* Loading */}
                {loading ? (
                    <div className="py-20 text-center text-sm text-white/50">
                        Loading workouts...
                    </div>
                ) : (
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {sortedWorkouts.map((workout) => (
                            <WorkoutCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}