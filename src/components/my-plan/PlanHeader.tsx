export default function PlanHeader() {
    return (
        <div>
            
            {/* Page title */}
            <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl">
                MY PLAN
            </h1>

            {/* Short description */}
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/45 md:text-base">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            {/* Small lime accent */}
            <div className="mt-8 h-1.5 w-9 rounded-full bg-[#ccff00]" />
        </div>
    );
}