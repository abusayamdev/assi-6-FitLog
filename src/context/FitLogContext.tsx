"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";
const COMPLETED_STORAGE_KEY = "fitlog-completed";

const MAX_PLAN_ITEMS = 5;

type FitLogContextType = {
    plan: string[];
    saved: string[];
    completed: string[];

    addToPlan: (id: string) => void;
    removeFromPlan: (id: string) => void;

    saveForLater: (id: string) => void;
    removeFromSaved: (id: string) => void;

    markAsDone: (id: string) => void;

    isInPlan: (id: string) => boolean;
    isSaved: (id: string) => boolean;
    isCompleted: (id: string) => boolean;

    planCount: number;
    savedCount: number;

    maxPlanItems: number;
};

const FitLogContext = createContext<FitLogContextType | undefined>(
    undefined
);

export function FitLogProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [plan, setPlan] = useState<string[]>([]);
    const [saved, setSaved] = useState<string[]>([]);
    const [completed, setCompleted] = useState<string[]>([]);

    useEffect(() => {
        const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
        const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);
        const storedCompleted = localStorage.getItem(
            COMPLETED_STORAGE_KEY
        );

        if (storedPlan) {
            setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }

        if (storedCompleted) {
            setCompleted(JSON.parse(storedCompleted));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            PLAN_STORAGE_KEY,
            JSON.stringify(plan)
        );
    }, [plan]);

    useEffect(() => {
        localStorage.setItem(
            SAVED_STORAGE_KEY,
            JSON.stringify(saved)
        );
    }, [saved]);

    useEffect(() => {
        localStorage.setItem(
            COMPLETED_STORAGE_KEY,
            JSON.stringify(completed)
        );
    }, [completed]);

    function addToPlan(id: string) {
        setPlan((current) => {
            if (current.includes(id)) {
                return current;
            }

            if (current.length >= MAX_PLAN_ITEMS) {
                return current;
            }

            return [...current, id];
        });
    }

    function removeFromPlan(id: string) {
        setPlan((current) =>
            current.filter((item) => item !== id)
        );
    }

    function saveForLater(id: string) {
        setSaved((current) => {
            if (current.includes(id)) {
                return current;
            }

            return [...current, id];
        });
    }

    function removeFromSaved(id: string) {
        setSaved((current) =>
            current.filter((item) => item !== id)
        );
    }

    function markAsDone(id: string) {
        setCompleted((current) => {
            if (current.includes(id)) {
                return current;
            }

            return [...current, id];
        });
    }

    function isInPlan(id: string) {
        return plan.includes(id);
    }

    function isSaved(id: string) {
        return saved.includes(id);
    }

    function isCompleted(id: string) {
        return completed.includes(id);
    }

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                completed,

                addToPlan,
                removeFromPlan,

                saveForLater,
                removeFromSaved,

                markAsDone,

                isInPlan,
                isSaved,
                isCompleted,

                planCount: plan.length,
                savedCount: saved.length,

                maxPlanItems: MAX_PLAN_ITEMS,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
}

export function useFitLog() {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "useFitLog must be used inside FitLogProvider"
        );
    }

    return context;
}