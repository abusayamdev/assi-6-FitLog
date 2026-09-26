import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

type WorkoutDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function WorkoutDetailsPage({
    params,
}: WorkoutDetailsPageProps) {
    const { id } = await params;

    const workout = await getWorkoutById(id);

    if (!workout) {
        notFound();
    }

    return (
        <main className="border-b border-white/10">
            <div className="fitlog-container py-10 md:py-16">

                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Workout image */}
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#15161b]">
                        <div className="relative aspect-square">
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Workout information */}
                    <div className="flex flex-col justify-center">

                        {/* Muscle group tags */}
                        <div className="mb-5 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Workout name */}
                        <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                            {workout.description}
                        </p>

                        {/* Key specs */}
                        <div className="mt-8">
                            <p className="fitlog-eyebrow">
                                KEY SPECS
                            </p>

                            <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">

                                <Spec
                                    label="Equipment"
                                    value={workout.equipment}
                                />

                                <Spec
                                    label="Difficulty"
                                    value={workout.difficulty}
                                />

                                <Spec
                                    label="Sets"
                                    value={String(workout.sets)}
                                />

                                <Spec
                                    label="Reps"
                                    value={workout.reps}
                                />

                                <Spec
                                    label="Duration"
                                    value={`${workout.duration} min`}
                                />

                                <Spec
                                    label="Calories"
                                    value={`${workout.caloriesBurned} kcal`}
                                />

                                <Spec
                                    label="Rating"
                                    value={`★ ${workout.rating}`}
                                />

                            </div>
                        </div>

                        {/* Add and save buttons */}
                        <WorkoutActions workoutId={workout.id} />

                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-16 border-t border-white/10 pt-10">

                    <p className="fitlog-eyebrow">
                        HOW TO PERFORM
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {workout.instructions.map(
                            (instruction, index) => (
                                <div
                                    key={instruction}
                                    className="rounded-lg border border-white/10 bg-[#15161b] p-5"
                                >
                                    <span className="text-sm font-black text-[#ccff00]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="mt-3 text-sm leading-6 text-white/60">
                                        {instruction}
                                    </p>
                                </div>
                            )
                        )}
                    </div>

                </div>

            </div>
        </main>
    );
}

function Spec({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="bg-[#15161b] p-4">
            <p className="text-[10px] font-bold uppercase tracking-wide text-white/35">
                {label}
            </p>

            <p className="mt-2 text-sm font-bold text-white">
                {value}
            </p>
        </div>
    );
}