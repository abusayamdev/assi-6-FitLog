"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";

import { useFitLog } from "@/context/FitLogContext";

import PlanHeader from "@/components/my-plan/PlanHeader";
import PlanMetrics from "@/components/my-plan/PlanMetrics";
import PlanTabs from "@/components/my-plan/PlanTabs";
import PlanSort, {
    type PlanSortOption,
} from "@/components/my-plan/PlanSort";

import WorkoutPlanCard from "@/components/my-plan/WorkoutPlanCard";
import SavedWorkoutCard from "@/components/my-plan/SavedWorkoutCard";

import EmptyPlan from "@/components/my-plan/EmptyPlan";
import EmptySaved from "@/components/my-plan/EmptySaved";

type PlanTab = "plan" | "saved";

export default function MyPlanPage() {
    const {
        plan,
        saved,
        markAsDone,
        removeFromPlan,
        removeFromSaved,
        isCompleted,
    } = useFitLog();

    const [workouts, setWorkouts] =
        useState<Workout[]>([]);

    const [activeTab, setActiveTab] =
        useState<PlanTab>("plan");

    const [sortBy, setSortBy] =
        useState<PlanSortOption>("duration");

    const [loading, setLoading] =
        useState(true);

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

    // Match plan IDs with workout data
    const planWorkouts = useMemo(() => {
        return plan
            .map((id) =>
                workouts.find(
                    (workout) =>
                        workout.id === id
                )
            )
            .filter(
                (workout): workout is Workout =>
                    Boolean(workout)
            );
    }, [plan, workouts]);

    // Match saved IDs with workout data
    const savedWorkouts = useMemo(() => {
        return saved
            .map((id) =>
                workouts.find(
                    (workout) =>
                        workout.id === id
                )
            )
            .filter(
                (workout): workout is Workout =>
                    Boolean(workout)
            );
    }, [saved, workouts]);

    // Sort today's plan
    const sortedPlanWorkouts = useMemo(() => {
        return [...planWorkouts].sort(
            (a, b) => {
                if (sortBy === "duration") {
                    return (
                        a.duration -
                        b.duration
                    );
                }

                if (sortBy === "calories") {
                    return (
                        a.caloriesBurned -
                        b.caloriesBurned
                    );
                }

                return b.rating - a.rating;
            }
        );
    }, [planWorkouts, sortBy]);

    // Calculate today's plan summary
    const totalMinutes = planWorkouts.reduce(
        (total, workout) =>
            total + workout.duration,
        0
    );

    const totalCalories = planWorkouts.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );

    function handleDone(id: string) {
        markAsDone(id);

        toast.success(
            "Workout marked as done."
        );
    }

    function handleRemovePlan(id: string) {
        removeFromPlan(id);

        toast.info(
            "Workout removed from your plan."
        );
    }

    function handleRemoveSaved(id: string) {
        removeFromSaved(id);

        toast.info(
            "Workout removed from saved."
        );
    }

    return (
        <main className="min-h-screen border-b border-white/10">

            <div className="fitlog-container py-12 md:py-16">

                {/* Page header */}
                <PlanHeader />

                {/* Summary cards */}
                <div className="mt-10">
                    <PlanMetrics
                        exercises={planWorkouts.length}
                        minutes={totalMinutes}
                        calories={totalCalories}
                    />
                </div>

                {/* Tabs + Sort */}
                <div className="mt-10 flex items-center justify-between gap-4">
                    <PlanTabs
                        activeTab={activeTab}
                        onChange={setActiveTab}
                    />

                    <PlanSort
                        value={sortBy}
                        onChange={setSortBy}
                    />
                </div>

                {/* Workout list */}
                <div className="mt-6">

                    {loading ? (
                        <div className="py-20 text-center text-sm text-white/50">
                            Loading workouts...
                        </div>
                    ) : activeTab === "plan" ? (
                        sortedPlanWorkouts.length ===
                            0 ? (
                            <EmptyPlan />
                        ) : (
                            <div className="space-y-3">
                                {sortedPlanWorkouts.map(
                                    (workout) => (
                                        <WorkoutPlanCard
                                            key={workout.id}
                                            workout={workout}
                                            completed={isCompleted(
                                                workout.id
                                            )}
                                            onDone={() =>
                                                handleDone(
                                                    workout.id
                                                )
                                            }
                                            onRemove={() =>
                                                handleRemovePlan(
                                                    workout.id
                                                )
                                            }
                                        />
                                    )
                                )}
                            </div>
                        )
                    ) : savedWorkouts.length === 0 ? (
                        <EmptySaved />
                    ) : (
                        <div className="space-y-3">
                            {savedWorkouts.map(
                                (workout) => (
                                    <SavedWorkoutCard
                                        key={workout.id}
                                        workout={workout}
                                        onRemove={() =>
                                            handleRemoveSaved(
                                                workout.id
                                            )
                                        }
                                    />
                                )
                            )}
                        </div>
                    )}

                </div>

            </div>
        </main>
    );
}