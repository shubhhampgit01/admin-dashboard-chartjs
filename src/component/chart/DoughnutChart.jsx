import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, Legend } from "chart.js/auto";

Chart.register(CategoryScale, Legend);

const labels = ["E-commerce", "Social Media", "Affiliate", "Offline"];
const values = [25645, 8705, 5562, 3225];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["#FFF852", "#FE9E44", "#4DAAFF", "#50F19A"],
      borderColor: ["#FFF852", "#FE9E44", "#4DAAFF", "#50F19A"],
      data: values,
      cutout: "60%",
    },
  ],
};

const options = {
  plugins: {
    tooltip: {
      enabled: false,
    },

    legend: {
      display: true,
      position: "bottom",
      align: "center",
      maxheight: 10,

      margin: 10,
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        useBorderRadius: true,
        borderRadius: 6,
        textAlign: "left",
        font: {
          size: 18,
        },
        // Custom legend label content
        generateLabels: function (chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              const dataset = data.datasets[0];
              const value = dataset.data[i];
              const labelColor = dataset.backgroundColor[i]; // Color of the label
              const valueColor = "grey"; // Color of the value
              return {
                text: `${label} : $${value}`,
                fillStyle: labelColor,
                hidden: isNaN(dataset.data[i]) || dataset.data[i] === 0,
                index: i,
                // Customize font color for the value
                fontColor: valueColor,
              };
            });
          }
          return [];
        },
      },
    },
  },
};

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
