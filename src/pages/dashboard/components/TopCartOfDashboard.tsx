import type { ReactNode } from "react";
import Sparkline from "../../../components/Sparkline";

interface TopCartDashboardProps {
  icon: ReactNode;
  title: string;
  price: string | number;
  description: string;
  data: number[];
  color: string;
}

const TopCartDashboard = ({
  icon,
  title,
  price,
  description,
  data,
  color,
}: TopCartDashboardProps) => {
  return (
    <section className="w-full rounded-xl border border-slate-300 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </div>

        {/* Title & Price */}
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-slate-500">{title}</h4>

          <span className="text-2xl font-bold text-slate-800">{price}</span>
          <Sparkline data={data} color={color} />
        </div>
      </div>
      {/* Description */}
      <p className="mt-5 border-t items-center text-center border-slate-100 pt-3 text-sm text-slate-500">
        {description}
      </p>
    </section>
  );
};

export default TopCartDashboard;
