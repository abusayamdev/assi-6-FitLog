"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type MobileNavProps = {
    isHome: boolean;
    isMyPlan: boolean;
};

export default function MobileNav({
    isHome,
    isMyPlan,
}: MobileNavProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            {/* Menu button */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/20 hover:text-white"
            >
                {open ? (
                    <X size={18} />
                ) : (
                    <Menu size={18} />
                )}
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="absolute left-0 right-0 top-16 z-50 border-b border-white/10 bg-[#0a0a0a] px-4 py-4 shadow-xl">
                    <div className="flex flex-col gap-2">

                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className={`rounded-lg px-4 py-3 text-sm font-bold transition ${isHome
                                    ? "bg-[#ccff00] text-black"
                                    : "text-white/60 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setOpen(false)}
                            className={`rounded-lg px-4 py-3 text-sm font-bold transition ${isMyPlan
                                    ? "bg-[#ccff00] text-black"
                                    : "text-white/60 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            My Plan
                        </Link>

                    </div>
                </div>
            )}
        </div>
    );
}