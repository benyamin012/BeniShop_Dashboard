import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const salesData = [
  { day: "May 12", sales: 3600 },
  { day: "May 13", sales: 5200 },
  { day: "May 14", sales: 4500 },
  { day: "May 15", sales: 6200 },
  { day: "May 16", sales: 4500 },
  { day: "May 17", sales: 7000 },
  { day: "May 18", sales: 8700 },
];

const SalesOverview = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 mt-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">Sales Overview</h2>

        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="h-70 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={salesData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#e2e8f0"
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#64748b", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={40}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#2563eb"
              strokeWidth={2}
              fill="url(#salesGradient)"
              dot={{ r: 3, fill: "#2563eb" }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default SalesOverview;
