import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

Chart.register(CategoryScale);

const customYLabels = {
  // Custom values for y-axis
  0: "0K",
  10: "10k",
  20: "20k",
  30: "30k",
  40: "40k",
  50: "50k",
};
const data = {
  labels: labels,

  datasets: [
    {
      label: "Current Week",
      fill: false,
      // lineTension: 0.1,
      backgroundColor: "#7C32D9",
      borderColor: "#7C32D9",
      pointStyle: false,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      tension: 0.4,
      data: [0, 15, 5, 30, 20, 5, 25],
    },
    {
      data: [15, 35, 20, 25, 25, 15, 35],
      label: "Last Week",
      fill: false,
      // lineTension: 0.5,
      borderColor: "#C9A0FF",
      backgroundColor: "#C9A0FF",

      pointHoverBorderWidth: 2,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointRadius: 1,
      pointHitRadius: 10,
      pointStyle: false,
      tension: 0.4,
    },
  ],
};

const options = {
  scales: {
    x: {
      display: true,
      // stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "rgb(191, 191, 191)",
      },
      border: {
        display: false,
      },
    },
    y: {
      display: true,
      // stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },

      ticks: {
        color: "rgb(191, 191, 191)",
        // titleFontColor:'yellow',

        callback: function (value) {
          return customYLabels[value];
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      backgroundColor: "black",
      bodyFontColor: "black", // Setting body text color
      titleFontColor: "black", // Setting title text color
      shadowColor: "rgba(0, 0, 0, 0.5)", // Add shadow color
      shadowBlur: 10, // Add shadow blur
      padding: 20,

      callbacks: {
        label: function (context) {
          const datasetLabel = context.dataset.label;
          const value = context.parsed.y;
          return `${datasetLabel}: $ ${value}k`;
        },
      },
    },
  },
  layout: {
    padding: {
      left: 10, // Adjust left padding as needed
      right: 10, // Adjust right padding as needed
      top: 10, // Adjust top padding as needed
      bottom: 10, // Adjust bottom padding as needed
    },
  },

  indexAxis: "x", // Use y-axis as the index axis
  barPercentage: 0.3, // Adjust bar width percentage (0.8 = 80% of available space)
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
