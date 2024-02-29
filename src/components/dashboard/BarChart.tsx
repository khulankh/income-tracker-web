import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => {
        return Math.random() * 3000000;
      }),
      backgroundColor: "#84CC16",
      borderRadius: "30",
    },
    {
      label: "Expense",
      data: labels.map(() => {
        return Math.random() * 3000000;
      }),
      backgroundColor: "#F97316",
      borderRadius: "30",
    },
  ],
};


function BarChart() {
  return (
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
  );
}
export default BarChart;