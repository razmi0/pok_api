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
  normalized: true,
  spanGaps: true,
  interaction: {
    mode: "nearest",
  },
  responsive: true,
  animations: {
    radius: {
      duration: 1000,
      easing: "linear",
    },
  },
  scales: {
    r: {
      grid: {
        circular: true,
        color: "#ffffff2c",
      },
      ticks: {
        display: false,
      },
      pointLabels: {
        display: false,
      },

      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      bodyFont: {
        size: 14,
        weight: "bold",
      },
      callbacks: {
        label: (context) => {
          const { label, raw } = context;
          return `${label}: ${raw}`;
        },
        title: () => {
          return "";
        },
      },
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
