import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center border-b border-white/10">
            <div className="fitlog-container py-20">
                <div className="mx-auto max-w-xl text-center">

                    {/* Icon */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ccff00]/20 bg-[#ccff00]/10">
                        <Dumbbell
                            size={28}
                            className="text-[#ccff00]"
                        />
                    </div>

                    {/* Error code */}
                    <p className="mt-8 text-7xl font-black tracking-tighter text-white md:text-8xl">
                        404
                    </p>

                    <p className="fitlog-eyebrow mt-4">
                        WORKOUT NOT FOUND
                    </p>

                    <h1 className="mt-3 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                        This page missed the workout.
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/40">
                        The workout you are looking for does not exist
                        or may have been removed.
                    </p>

                    {/* Back button */}
                    <Link
                        href="/"
                        className="fitlog-btn mt-7"
                    >
                        <ArrowLeft size={16} />
                        Back to workouts
                    </Link>

                </div>
            </div>
        </main>
    );
}