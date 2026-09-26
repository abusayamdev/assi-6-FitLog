"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isHome = pathname === "/";
    const isMyPlan = pathname === "/my-plan";

    return (
        <nav className="border-b border-white/10 bg-[#0a0a0a]">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Dumbbell
                        size={18}
                        strokeWidth={2.5}
                        className="text-[#ccff00]"
                    />

                    <span className="text-base font-black tracking-tight text-white">
                        FIT<span className="text-[#ccff00]">LOG</span>
                    </span>
                </Link>

                {/* Center Navigation */}
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">

                    <Link
                        href="/"
                        className={`rounded-full px-4 py-2 text-sm font-bold transition ${isHome
                                ? "bg-[#ccff00] text-black"
                                : "text-white/60 hover:text-white"
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-2 text-sm font-bold transition ${isMyPlan
                                ? "bg-[#ccff00] text-black"
                                : "text-white/60 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    {/* Plan */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm font-semibold text-white"
                    >
                        <span>Plan</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-xs font-bold text-black">
                            0
                        </span>
                    </Link>

                    {/* Saved */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm font-semibold text-white"
                    >
                        <span>Saved</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/20 px-1.5 text-xs font-bold text-white/70">
                            0
                        </span>
                    </Link>

                </div>
            </div>
        </nav>
    );
}