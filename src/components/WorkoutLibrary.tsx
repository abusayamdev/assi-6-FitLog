"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";
import { Workout } from "@/types/workout";

export default function WorkoutLibrary() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
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

    return (
        <section
            id="library"
            className="border-b border-white/10 py-16 md:py-20"
        >
            <div className="fitlog-container">

                <div className="mb-10">
                    <p className="fitlog-eyebrow">
                        THE LIBRARY
                    </p>

                    <p className="mt-3 text-sm text-[var(--fitlog-muted)] md:text-base">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {loading ? (
                    <div className="py-20 text-center text-sm text-white/50">
                        Loading workouts...
                    </div>
                ) : (
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {workouts.map((workout) => (
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