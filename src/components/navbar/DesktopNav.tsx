import Link from "next/link";

type DesktopNavProps = {
    isHome: boolean;
    isMyPlan: boolean;
};

export default function DesktopNav({
    isHome,
    isMyPlan,
}: DesktopNavProps) {
    return (
        <div className="absolute left-1/2 hidden -translate-x-1/2 -translate-x-1/2 items-center gap-1 md:flex">
            <Link
                href="/"
                className={`flex h-10 min-w-[108px] items-center justify-center rounded-full px-5 text-sm font-bold transition ${isHome
                        ? "bg-[#17240f] text-[#ccff00]"
                        : "text-white/55 hover:text-white"
                    }`}
            >
                Workouts
            </Link>

            <Link
                href="/my-plan"
                className={`flex h-10 min-w-[108px] items-center justify-center rounded-full px-5 text-sm font-bold transition ${isMyPlan
                        ? "bg-[#17240f] text-[#ccff00]"
                        : "text-white/55 hover:text-white"
                    }`}
            >
                My Plan
            </Link>
        </div>
    );
}