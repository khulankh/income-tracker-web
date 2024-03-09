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
      borderRadius: 30, 
    },
    {
      label: "Expense",
      data: labels.map(() => {
        return Math.random() * 3000000;
      }),
      backgroundColor: "#F97316",
      borderRadius: 30, 
    },
  ],
};



function BarChart() {
  return (
    <div className="circle-chart-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "680px",
          height: "370px",
          borderRadius: "12px",
          border: "1px solid #E5E5E5",

        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}>
          <h3>Income - Expenses</h3>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#F5F5F5",
            height: "1px",
            margin: "10px 0",
          }}
        />

        <Bar
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          style={{ maxHeight: "256px", }}
        />

      </div>
    </div>


  );
}
export default BarChart;