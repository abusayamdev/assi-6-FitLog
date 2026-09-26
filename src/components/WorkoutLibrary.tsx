import Link from "next/link";

export default function WorkoutLibrary() {
    return (
        <section
            id="library"
            className="border-b border-white/10 py-16 md:py-20"
        >
            <div className="fitlog-container">

                {/* Section Header */}
                <div className="mb-10 flex items-end justify-between gap-6">

                    <div>
                        <p className="fitlog-eyebrow">
                            THE LIBRARY
                        </p>

                        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                            Twelve lifts.
                        </h2>

                        <p className="mt-3 text-sm text-[var(--fitlog-muted)] md:text-base">
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>

                    <Link
                        href="#library"
                        className="hidden text-xs font-bold uppercase tracking-wide text-[#ccff00] md:block"
                    >
                        View all
                    </Link>

                </div>

                {/* Workout Grid */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {/* Cards will come here */}
                </div>

            </div>
        </section>
    );
}