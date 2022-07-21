import { useFetch } from "./Api/useFetch";
import { BarChart } from "./charts/BarChart";

const Layout = (): JSX.Element => {
  const [dataUsa] = useFetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );

  return (
    <div className="bg-zinc-100">
      <div className="container mx-auto py-20">
        <div className=" bg-zinc-50 p-20 rounded-2xl">
          <h2 className="text-2xl mb-10">
            Population over the years in <b>United States of America</b>
          </h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export { Layout };
