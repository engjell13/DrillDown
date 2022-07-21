import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const Layout = (): JSX.Element => {
  const [users, setUsers] = useState<ResponseApi | undefined>(undefined);

  type ResponseApi = {
    Nation: string;
    Year: number;
    Population: number;
  };

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then((data: ResponseApi) => setUsers(data));
  }, []);
  console.log(users);

  return (
    <div className="text-5xl font-bold text-center">
      <h1>Doughnut Chart</h1>
    </div>
  );
};

export { Layout };
