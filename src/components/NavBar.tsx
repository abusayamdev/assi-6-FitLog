"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";

import { useFitLog } from "@/context/FitLogContext";

import DesktopNav from "@/components/navbar/DesktopNav";
import MobileNav from "@/components/navbar/MobileNav";

export default function Navbar() {
    const pathname = usePathname();

    const { planCount, savedCount } = useFitLog();

    const isHome = pathname === "/";
    const isMyPlan = pathname === "/my-plan";

    return (
        <nav className=" relative border-b border-white/10 bg-[#0a0a0a]">
            <div className="fitlog-container flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

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
                        FIT<span className="text-[#ccff00]">
                            LOG
                        </span>
                    </span>
                </Link>

                {/* Desktop navigation */}
                <DesktopNav
                    isHome={isHome}
                    isMyPlan={isMyPlan}
                />

                {/* Right side */}
                <div className="flex items-center gap-4 md:gap-5">

                    {/* Plan */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm font-bold text-white"
                    >
                        <span>Plan</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-black text-black">
                            {planCount}
                        </span>
                    </Link>

                    {/* Saved */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm font-bold text-white"
                    >
                        <span>Saved</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/20 bg-[#101114] px-1.5 text-[10px] font-bold text-white/60">
                            {savedCount}
                        </span>
                    </Link>

                    {/* Mobile menu */}
                    <MobileNav
                        isHome={isHome}
                        isMyPlan={isMyPlan}
                    />

                </div>
            </div>
        </nav>
    );
}