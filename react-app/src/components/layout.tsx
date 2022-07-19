import { useEffect, useState } from "react";

const Layout = (): JSX.Element => {
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then((data: any) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <>
      {users?.data.length &&
        users.data.map((users: any, index: number) => {
          return (
            <div key={index}>
              <h1>{users.Nation}</h1>
              <h2>{users.Year}</h2>
              <h3>{users.Population}</h3>
            </div>
          );
        })}
    </>
  );
};

export { Layout };
