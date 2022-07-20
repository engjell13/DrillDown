import { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement } from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement);

const BarChart = () => {
  const [users, setUsers] = useState<any>(undefined);

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then((data: any) => setUsers(data));
  }, []);

  const data = {
    labels: users?.coins?.map((x: { name: any }) => x.name),
    datasets: [
      {
        label: `${users?.Nation.length} `,
        data: users?.Year,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default BarChart;
