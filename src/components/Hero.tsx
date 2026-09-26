import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="border-b border-white/10 bg-[#0a0a0a]">
            <div className="fitlog-container">
                <div className="grid min-h-[calc(100vh-64px)] items-center gap-10 py-12 md:gap-14 md:py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">

                    {/* Left Content */}
                    <div className="max-w-2xl">

                        {/* Eyebrow */}
                        <p className="fitlog-eyebrow">
                            WORKOUT LIBRARY
                        </p>

                        {/* Heading */}
                        <h1 className="fitlog-heading mt-5">
                            TRAIN WITH INTENT.
                            <br />
                            LOG EVERY SET.
                        </h1>

                        {/* Description */}
                        <p className="mt-7 max-w-xl text-base leading-7 text-[var(--fitlog-muted)] md:text-lg">
                            FitLog is a dark, no-nonsense gym companion:
                            pick a lift, lock it into today&apos;s plan, and watch
                            the week&apos;s work add up.
                        </p>

                        {/* CTA */}
                        <Link
                            href="#library"
                            className="fitlog-btn mt-8"
                        >
                            BROWSE WORKOUTS

                            <ArrowDownRight
                                size={18}
                                strokeWidth={2.5}
                            />
                        </Link>

                    </div>

                    {/* Right Image */}
                    <div className="relative flex items-center justify-center">

                        <div className="relative w-full max-w-[520px]">

                            {/* Lime Glow */}
                            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/10 blur-3xl" />

                            <Image
                                src="/assets/banner.png"
                                alt="FitLog workout illustration"
                                width={520}
                                height={520}
                                priority
                                className="relative z-10 mx-auto h-auto w-full max-w-[480px] object-contain"
                            />

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}