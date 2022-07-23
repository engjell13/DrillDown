import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import classnames from "classnames";
import { useContext } from "react";
import { Line } from "react-chartjs-2";
import { ThemeContext } from "../../ThemeContext";
import { useFetch } from "../Api/useFetch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement
);

const LineChart = () => {
  const theme = useContext(ThemeContext);
  const [dataUsa] = useFetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );

  /////////LIGHT MODE//////////////////////////
  const dataLight = {
    labels: dataUsa?.data.map((d) => d.Year),
    datasets: [
      {
        label: "based on numbers",
        data: dataUsa?.data.map((d) => d.Population),
        backgroundColor: "#6366f1",
        borderColor: "#6366f1",
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
          color: "#a78bfa",
        },
      },

      x: {
        ticks: {
          color: "black",
        },
        grid: {
          color: "#a78bfa",
        },
      },
    },
  };

  /////////DARK MODE////////////////////////
  const dataDark = {
    labels: dataUsa?.data.map((d) => d.Year),
    datasets: [
      {
        label: "based on numbers",
        data: dataUsa?.data.map((d) => d.Population),
        backgroundColor: ["#ea580c"],
        borderColor: "#ea580c",
        tension: 0.5,
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
    <>
      <div
        className={classnames(
          "border-2 border-violet-400 p-10 border-opacity-50 rounded-2xl",
          { "border-gray-50": theme !== "light" }
        )}
      >
        <Line
          data={theme !== "light" ? dataDark : dataLight}
          height={400}
          options={theme !== "light" ? optionsDark : optionsLight}
        />
      </div>
    </>
  );
};

export { LineChart };
