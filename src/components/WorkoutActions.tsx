"use client";

import { toast } from "react-toastify";
import { useFitLog } from "@/context/FitLogContext";

type WorkoutActionsProps = {
    workoutId: string;
};

export default function WorkoutActions({
    workoutId,
}: WorkoutActionsProps) {
    const {
        addToPlan,
        saveForLater,
        isInPlan,
        isSaved,
        planCount,
        maxPlanItems,
    } = useFitLog();

    const alreadyInPlan = isInPlan(workoutId);
    const alreadySaved = isSaved(workoutId);
    const planIsFull = planCount >= maxPlanItems;

    function handleAddToPlan() {
        // Don't add the same workout twice
        if (alreadyInPlan) {
            toast.info("Workout is already in your plan.");
            return;
        }

        // Keep today's plan limited to five workouts
        if (planIsFull) {
            toast.warning("Your plan is full.");
            return;
        }

        addToPlan(workoutId);

        toast.success("Workout added to your plan.");
    }

    function handleSaveForLater() {
        // Don't save the same workout twice
        if (alreadySaved) {
            toast.info("Workout is already saved.");
            return;
        }

        saveForLater(workoutId);

        toast.success("Workout saved for later.");
    }

    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button
                type="button"
                onClick={handleAddToPlan}
                disabled={alreadyInPlan || planIsFull}
                className={`fitlog-btn justify-center ${alreadyInPlan || planIsFull
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
            >
                {alreadyInPlan
                    ? "ADDED TO PLAN"
                    : planIsFull
                        ? "PLAN IS FULL"
                        : "ADD TO TODAY'S PLAN"}
            </button>

            <button
                type="button"
                onClick={handleSaveForLater}
                disabled={alreadySaved}
                className={`rounded-md border px-5 py-3 text-xs font-black uppercase tracking-wide transition ${alreadySaved
                        ? "cursor-not-allowed border-[#ccff00]/40 text-[#ccff00]/50"
                        : "border-white/15 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
                    }`}
            >
                {alreadySaved
                    ? "SAVED"
                    : "SAVE FOR LATER"}
            </button>

        </div>
    );
}