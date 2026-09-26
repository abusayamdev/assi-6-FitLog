export default function Loading() {
    return (
        <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#0a0a0a]">
            <div className="flex flex-col items-center">

                {/* Loading spinner */}
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#ccff00]" />

                {/* Loading text */}
                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Loading workouts...
                </p>

            </div>
        </main>
    );
}