"use client";

import React from "react";
import DashboardLayout from "../page";
import {
  Chart as ChartJS,
  RadarController,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement,
  BarController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,  // Import the RadialLinearScale
  TooltipItem,
} from "chart.js";
import { Radar, Bar, Pie } from "react-chartjs-2";

// Register necessary components
ChartJS.register(
  RadarController,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement,
  BarController,
  CategoryScale,
  LinearScale,
  RadialLinearScale // Register the RadialLinearScale
);

export default function Reports() {
  // Sample data for the radar chart
  const radarData = {
    labels: ["Dept A", "Dept B", "Dept C", "Dept D", "Dept E"],
    datasets: [
      {
        label: "Offenses",
        data: [12, 9, 5, 6, 4], // Example data for each department
        backgroundColor: "rgba(255, 165, 0, 0.2)", // Light yellow fill
        borderColor: "rgba(255, 165, 0, 1)", // Darker yellow border
        borderWidth: 1,
      },
    ],
  };

  // Options for the radar chart
  const radarOptions = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 15,
      },
    },
    plugins: {
      legend: {
        position: "top" as const, // Cast to literal type
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'radar'>) => {
            return `${context.dataset.label}: ${context.parsed.r}`;
          },
        },
      },
    },
  };

  // Sample data for the bar chart
  const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Offenses",
        data: [15, 20, 10, 25, 18], // Example data for offenses per month
        backgroundColor: "rgba(40, 167, 69, 0.6)", // Light green fill
        borderColor: "rgba(40, 167, 69, 1)", // Darker green border
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Cast to literal type
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'bar'>) => {
            return `${context.dataset.label}: ${context.parsed.y}`;
          },
        },
      },
    },
  };

  // Sample data for the pie chart
  const pieData = {
    labels: ["Type A", "Type B", "Type C", "Type D"],
    datasets: [
      {
        label: "Types of Offenses",
        data: [40, 25, 20, 15], // Example data for different types of offenses
        backgroundColor: [
          "rgba(255, 69, 0, 0.6)", // Red
          "rgba(0, 123, 255, 0.6)", // Blue
          "rgba(255, 193, 7, 0.6)", // Yellow
          "rgba(23, 162, 184, 0.6)", // Teal
        ],
        borderColor: "rgba(255, 255, 255, 1)", // White border
        borderWidth: 2,
      },
    ],
  };

  // Options for the pie chart
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Cast to literal type
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'pie'>) => {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  // Function to download reports
  const downloadReport = (format: "csv" | "pdf") => {
    // Implement your download logic here
    console.log(`Download report as ${format}`);
  };

  return (
    <>
      <DashboardLayout>
      <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>
        {/* 

        {/* Radar Chart *
        <div className="chart-container mb-6">
          <h3 className="text-lg font-semibold mb-2">Offenses by Department</h3>
          <Radar data={radarData} options={radarOptions} />
        </div>

        {/* Bar Chart 
        <div className="chart-container mb-6">
          <h3 className="text-lg font-semibold mb-2">Offenses Over Time</h3>
          <Bar data={barData} options={barOptions} />
        </div>

        {/* Pie Chart 
        <div className="chart-container mb-6">
          <h3 className="text-lg font-semibold mb-2">Types of Offenses</h3>
          <Pie data={pieData} options={pieOptions} />
        </div>

        {/* Downloadable Reports 
        <h3 className="text-lg font-semibold mb-2">Downloadable Reports</h3>
        <p>You can export the data as CSV or PDF:</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => downloadReport("csv")}
        >
          Download CSV
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => downloadReport("pdf")}
        >
          Download PDF
        </button> */}
      </DashboardLayout>
    </>
  );
}
