import Link from "next/link";

export default function EmptyPlan() {
    return (
        <div className="rounded-xl border border-dashed border-white/10 bg-[#15161b]/40 px-5 py-16 text-center md:px-10">

            <p className="fitlog-eyebrow">
                NOTHING HERE YET
            </p>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/#library"
                className="fitlog-btn mt-6"
            >
                Go to workouts
            </Link>

        </div>
    );
}