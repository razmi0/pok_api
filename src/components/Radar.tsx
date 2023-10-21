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

export const options: ChartOptions<"radar"> = {
  spanGaps: true,
  interaction: {
    mode: "nearest",
    // intersect: false,
    // includeInvisibleLines: false,
  },
  responsive: true,
  animations: {
    radius: {
      duration: 500,
      easing: "linear",
    },
  },
  // animation: false,
  scales: {
    r: {
      grid: {
        circular: true,
        color: "#ffffff",
      },
      ticks: {
        display: false,
      },
      pointLabels: {
        color: "#ffffff",
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler);

export const Radar = ({
  data,
  options,
}: {
  data: ChartData<"radar">;
  options: ChartOptions<"radar">;
}) => {
  return (
    <>
      <style>
        {`
        .radar-ctn {
            width: 150px;
            padding: 0;
            margin: 0;
        }
        `}
      </style>
      <div className="radar-ctn">
        <Chart data={data} options={options} />
      </div>
    </>
  );
};
