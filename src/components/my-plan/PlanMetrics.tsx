type PlanMetricsProps = {
    exercises: number;
    minutes: number;
    calories: number;
};

export default function PlanMetrics({
    exercises,
    minutes,
    calories,
}: PlanMetricsProps) {
    return (
        <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-white/10 bg-[#15161b]">
            <Metric
                label="Exercises"
                value={exercises}
            />

            <Metric
                label="Minutes"
                value={minutes}
                border
            />

            <Metric
                label="Calories"
                value={calories}
                border
            />
        </div>
    );
}

function Metric({
    label,
    value,
    border = false,
}: {
    label: string;
    value: number;
    border?: boolean;
}) {
    return (
        <div
            className={`px-4 py-5 md:px-6 md:py-6 ${border
                    ? "border-l border-white/10"
                    : ""
                }`}
        >
            <p className="text-[10px] font-bold uppercase tracking-wide text-white/35 md:text-xs">
                {label}
            </p>

            <p className="mt-2 text-2xl font-black text-white md:text-3xl">
                {value}
            </p>
        </div>
    );
}