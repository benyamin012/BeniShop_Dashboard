import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

interface SparklineProps {
  data: number[];
  color: string;
}

const Sparkline = ({ data, color }: SparklineProps) => {
  return (
    <SparkLineChart
      className=""
      data={data}
      width={100}
      height={40}
      color={color}
      curve="natural"
      area
    />
  );
};

export default Sparkline;
