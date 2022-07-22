import classnames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { useFetch } from "./Api/useFetch";
import { BarChart } from "./charts/BarChart";

const Layout = (): JSX.Element => {
  const [dataUsa] = useFetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );

  const theme = useContext(ThemeContext);

  return (
    <div
      className={classnames("bg-zinc-100", {
        "bg-gray-800": theme !== "light",
      })}
    >
      <div className="container mx-auto py-20">
        <div
          className={classnames("bg-zinc-50 p-20 rounded-2xl", {
            "bg-gray-700 text-white": theme !== "light",
          })}
        >
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
