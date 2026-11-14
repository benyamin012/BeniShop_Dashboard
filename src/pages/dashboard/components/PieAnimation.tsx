import { PieChart } from "@mui/x-charts";
const PieAnimation = () => {
  return (
    <section className=" w-[48%] rounded-xl border border-slate-200 bg-white p-5 mt-5 shadow-sm">
      <PieChart
        width={300}
        height={250}
        series={[
          {
            data: [
              { id: 1, value: 50, label: "کارت بانکی" },
              { id: 2, value: 30, label: "درگاه آنلاین" },
              { id: 3, value: 20, label: "نقدی" },
            ],
            innerRadius: 60,
          },
        ]}
      />
    </section>
  );
};

export default PieAnimation;
