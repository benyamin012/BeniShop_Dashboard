import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { lineClasses } from "@mui/x-charts/LineChart";
import { chartsAxisHighlightClasses } from "@mui/x-charts/ChartsAxisHighlight";
interface SparklineProps {
  data: number[];
  color: string;
}

const Sparkline = ({ data, color }: SparklineProps) => {
  return (
    <SparkLineChart
      data={data}
      width={50}
      height={30}
      className=" ml-auto "
      color={color}
      curve="natural"
      area
      baseline="min"
      margin={{
        top: 0,
        bottom: 0,
        left: 4,
        right: 4,
      }}
      sx={{
        [`& .${lineClasses.area}`]: {
          opacity: 0.15,
        },
        [`& .${lineClasses.line}`]: {
          strokeWidth: 1.5,
        },
        [`& .${chartsAxisHighlightClasses.root}`]: {
          stroke: "rgb(137, 86, 255)",
          strokeDasharray: "none",
          strokeWidth: 2,
        },
        slotProps: {
          lineHighlight: { r: 4 }, // Reduce the radius of the axis highlight.
        },
        clipAreaOffset: { top: 2, bottom: 2 },
        axisHighlight: { x: "line" },
      }}
    />
  );
};

export default Sparkline;
