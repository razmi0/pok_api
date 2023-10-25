import { ChartOptions } from "chart.js";

export const communDataOptions = {
  hitRadius: 10,
  pointRadius: 0,
  pointHoverRadius: 3,
  tension: 0.1,
};

export const labels = ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed"];

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
        circular: false,
        color: "#ffffff2c",
      },
      ticks: {
        display: false,
      },
      pointLabels: {
        display: true,
        callback: (label) => {
          console.log(label);
          return "";
        },
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
