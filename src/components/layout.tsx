import { useFetch } from "./Api/useFetch";

const Layout = (): JSX.Element => {
  const [dataUsa] = useFetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );

  console.log(dataUsa);
  return (
    <div className="text-5xl text-center">
      <h1>asdasd</h1>
      {dataUsa?.data.map((data: any, index: number) => {
        return <h1 key={index}>{data?.Population}</h1>;
      })}
    </div>
  );
};

export { Layout };
