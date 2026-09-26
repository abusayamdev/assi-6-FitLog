import Link from "next/link";

export default function EmptySaved() {
    return (
        <div className="rounded-xl border border-dashed border-white/10 bg-[#15161b]/40 px-5 py-16 text-center md:px-10">

            <p className="fitlog-eyebrow">
                NOTHING SAVED YET
            </p>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
                Save workouts from the library and come back to them later.
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