import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/types/workout";

type WorkoutCardProps = {
    workout: Workout;
};

export default function WorkoutCard({
    workout,
}: WorkoutCardProps) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block overflow-hidden rounded-xl border border-white/10 bg-[#15161b] transition hover:border-[#ccff00]/40"
        >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Muscle Groups */}
                <div className="mb-3 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#ccff00]/10 px-2.5 py-1 text-[10px] font-bold uppercase text-[#ccff00]"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-white/40">
                    {workout.equipment}
                </p>

                {/* Divider */}
                <div className="my-4 border-t border-white/10" />

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-white/50">
                    <span>{workout.duration} min</span>
                    <span>{workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                </div>

            </div>
        </Link>
    );
}