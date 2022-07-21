import { Line } from "react-chartjs-2";

const LineChart = (): JSX.Element => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", " May"],
    datasets: [
      {
        label: "sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
      },
    ],
  };
  return (
    <div className="w-96">
      <Line data={data} />
    </div>
  );
};

export { LineChart };
