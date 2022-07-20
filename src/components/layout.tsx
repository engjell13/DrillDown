import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const Layout = (): JSX.Element => {
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then((data: any) => setUsers(data));
  }, []);

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="text-5xl font-bold text-center">
      <h1>Doughnut Chart</h1>
    </div>
  );
};

export { Layout };
