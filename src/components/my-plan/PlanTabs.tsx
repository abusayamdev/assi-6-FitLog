"use client";

type PlanTab = "plan" | "saved";

type PlanTabsProps = {
    activeTab: PlanTab;
    onChange: (tab: PlanTab) => void;
};

export default function PlanTabs({
    activeTab,
    onChange,
}: PlanTabsProps) {
    return (
        <div className="inline-flex h-8 rounded-lg border border-white/10 bg-[#15161b] p-1">
            <button
                type="button"
                onClick={() => onChange("plan")}
                className={`rounded-md px-4 text-[10px] font-medium transition ${activeTab === "plan"
                        ? "bg-[#20232b] font-bold text-white"
                        : "text-white/40 hover:text-white"
                    }`}
            >
                Today&apos;s Plan
            </button>

            <button
                type="button"
                onClick={() => onChange("saved")}
                className={`rounded-md px-4 text-[10px] font-medium transition ${activeTab === "saved"
                        ? "bg-[#20232b] font-bold text-white"
                        : "text-white/40 hover:text-white"
                    }`}
            >
                Saved
            </button>
        </div>
    );
}