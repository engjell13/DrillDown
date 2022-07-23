import classnames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { BarChart } from "./charts/BarChart";
import { LineChart } from "./charts/LineChart";

const Layout = (): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classnames("bg-zinc-100", {
        "bg-[#0b0617]": theme !== "light",
      })}
    >
      <div className="container mx-auto py-20">
        <div
          className={classnames("bg-zinc-50 p-20 rounded-2xl mb-20", {
            "bg-[#120925] text-white": theme !== "light",
          })}
        >
          <h2 className="text-2xl mb-10">
            Population over the years in <b>United States of America</b> in Bar
            Chart
          </h2>
          <BarChart />
        </div>

        <div
          className={classnames("bg-zinc-50 p-20 rounded-2xl", {
            "bg-[#120925] text-white": theme !== "light",
          })}
        >
          <h2 className="text-2xl mb-10">
            Population over the years in <b>United States of America</b> in Line
            Chart
          </h2>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export { Layout };
