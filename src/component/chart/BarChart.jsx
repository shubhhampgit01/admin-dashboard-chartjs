import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";

Chart.register(CategoryScale);
const BarChart = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
        label: "Last Week",
        backgroundColor: "#7C32D9",
        borderColor: "#7C32D9",
        // borderWidth: 2,
        data: [30, 20, 25, 40, 20, 32, 25],
      },
      {
        label: "Current Week",
        backgroundColor: "rgb(240, 240, 240)",
        borderColor: "rgb(240, 240, 240)",
        scaleLineColor: "transparent",
        data: [10, 10, 10, 10, 5, 8, 10],
      },
      // Add more datasets as needed
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        stacked: true,

        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "rgb(191, 191, 191)",
        },
      },
      y: {
        display: true,
        stacked: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "rgb(191, 191, 191)",
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
    barPercentage: 0.28, // Adjust bar width percentage (0.8 = 80% of available space)
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
