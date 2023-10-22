import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip); // , Tooltip, Legend

const makeData = (): { x: number; y: number; r: number }[] => {
  return Array.from({ length: 20 }, () => ({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    r: Math.floor(Math.random() * 20),
  }));
};

const blue = makeData();
const red = makeData();
const green = makeData();

const options: ChartOptions<"bubble"> = {
  scales: {
    y: {
      beginAtZero: false,
      display: true,
      grid: {
        color: "#FFFFFde",
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      beginAtZero: false,
      display: true,
      grid: {
        color: "#FFFFFde",
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      hidden: true,
      display: false,
    },
  },
} as ChartOptions<"bubble">;

const data: ChartData<"bubble"> = {
  datasets: [
    {
      label: "Red dataset",
      data: red,
      // data: Array.from({ length: 50 }, () => ({
      //   x: faker.datatype.number({ min: -100, max: 100 }),
      //   y: faker.datatype.number({ min: -100, max: 100 }),
      //   r: faker.datatype.number({ min: 5, max: 20 }),
      // })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: blue,
      // data: Array.from({ length: 50 }, () => ({
      //   x: faker.datatype.number({ min: -100, max: 100 }),
      //   y: faker.datatype.number({ min: -100, max: 100 }),
      //   r: faker.datatype.number({ min: 5, max: 20 }),
      // })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Green dataset",
      data: green,
      backgroundColor: "rgba(0, 255, 0, 0.5)",
    },
  ],
};

export const BubbleChart = ({ data, options }: any) => {
  return <Bubble data={data} options={options} />;
};
