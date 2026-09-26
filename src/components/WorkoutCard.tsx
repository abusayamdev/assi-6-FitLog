import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";


type WorkoutCardProps = {
    workout: Workout;
};

export default function WorkoutCard({
    workout,
}: WorkoutCardProps) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block overflow-hidden rounded-lg border border-white/10 bg-[#15161b] transition hover:border-[#ccff00]/40"
        >
            {/* Workout Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-4">

                {/* Muscle Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#ccff00] px-2 py-1 text-[9px] font-black uppercase tracking-wide text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h3 className="text-base font-black uppercase tracking-tight text-white">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-1 text-xs text-white/40">
                    {workout.equipment}
                </p>

                {/* Divider */}
                <div className="my-4 border-t border-white/10" />

                {/* Stats */}
                <div className="flex items-center gap-4 text-[11px] text-white/40">
                    <span>
                        {workout.duration} min
                    </span>

                    <span>
                        {workout.caloriesBurned} kcal
                    </span>

                    <span>
                        ★ {workout.rating}
                    </span>
                </div>

            </div>
        </Link>
    );
}