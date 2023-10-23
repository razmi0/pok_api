import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Radar as Chart } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler);

type RadarChart = {
  data: ChartData<"radar">;
  options: ChartOptions<"radar">;
};
export const Radar = ({ data, options }: RadarChart) => {
  return (
    <>
      <style>
        {`
        .radar-ctn {
            width: 150px;
            padding: 0;
            margin: 10px;
        }
        `}
      </style>
      <div className="radar-ctn">
        <Chart data={data} options={options} />
      </div>
    </>
  );
};
