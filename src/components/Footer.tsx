import Link from "next/link";
import { ArrowUpRight, Dumbbell } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0a0a0a]">
            <div className="fitlog-container">

                {/* Main footer */}
                <div className="grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end md:py-14">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#ccff00] text-black">
                                <Dumbbell
                                    size={16}
                                    strokeWidth={2.5}
                                />
                            </span>

                            <span className="text-lg font-black tracking-tight text-white">
                                FIT<span className="text-[#ccff00]">
                                    LOG
                                </span>
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                            A simple workout library for people who
                            want to train with intent and keep track
                            of the work.
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#ccff00]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                                Train with intent
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:text-right">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/30">
                            Explore
                        </p>

                        <div className="mt-4 flex flex-col gap-3 md:items-end">
                            <Link
                                href="/#library"
                                className="group flex items-center gap-1.5 text-sm font-semibold text-white/55 transition hover:text-white"
                            >
                                Workout Library

                                <ArrowUpRight
                                    size={14}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>

                            <Link
                                href="/my-plan"
                                className="group flex items-center gap-1.5 text-sm font-semibold text-white/55 transition hover:text-white"
                            >
                                My Plan

                                <ArrowUpRight
                                    size={14}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-xs md:flex-row md:items-center md:justify-between">

                    <p className="text-white/30">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                    <p className="font-bold uppercase tracking-[0.14em] text-white/20">
                        Built for consistency
                    </p>

                </div>

            </div>
        </footer>
    );
}