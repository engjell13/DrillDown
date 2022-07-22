import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import classnames from "classnames";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ThemeContext } from "../../ThemeContext";
import { useFetch } from "../Api/useFetch";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement);

const BarChart = () => {
  const theme = useContext(ThemeContext);
  const [dataUsa] = useFetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );

  console.log(dataUsa);

  const dataLight = {
    labels: dataUsa?.data.map((d) => d.Year),
    datasets: [
      {
        label: "based on numbers",
        data: dataUsa?.data.map((d) => d.Population),
        backgroundColor: ["#6366f1", "#6366f1", " #6366f1", "#6366f1"],
        borderRadius: 10,
        hoverBackgroundColor: [
          "#e0e7ff",
          "#e0e7ff",
          "#e0e7ff",
          "#e0e7ff",
          "#e0e7ff",
        ],
      },
    ],
  };

  const optionsLight = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "black",
        },
        grid: {
          color: "#818cf8",
        },
      },

      x: {
        ticks: {
          color: "black",
        },
        grid: {
          color: "#818cf8",
        },
      },
    },
  };
  const dataDark = {
    labels: dataUsa?.data.map((d) => d.Year),
    datasets: [
      {
        label: "based on numbers",
        data: dataUsa?.data.map((d) => d.Population),
        backgroundColor: [" #a5b4fc", "#a5b4fc", " #a5b4fc", " #a5b4fc"],
        borderRadius: 10,
        hoverBackgroundColor: [
          "#e0e7ff",
          "#e0e7ff",
          "#e0e7ff",
          "#e0e7ff",
          "#e0e7ff",
        ],
      },
    ],
  };

  const optionsDark = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "grey",
        },
      },

      x: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: "grey",
        },
      },
    },
  };
  return (
    <div
      className={classnames(
        "border-2 border-violet-400 p-10 border-opacity-50 rounded-2xl",
        { "border-gray-50": theme !== "light" }
      )}
    >
      <Bar
        data={theme !== "light" ? dataDark : dataLight}
        height={400}
        options={theme !== "light" ? optionsDark : optionsLight}
      />
    </div>
  );
};

export { BarChart };
