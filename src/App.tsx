import classnames from "classnames";
import { useState } from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
      <div
        className={classnames(
          { "bg-zinc-100": theme === "light" },
          { "bg-gray-800": theme !== "light" }
        )}
      >
        <button
          onClick={changeTheme}
          className={classnames(
            "mb-5 p-2 rounded-md m-10 hover:scale-125 duration-300 active:scale-50 ease-in",
            { "bg-white text-gray-800": theme !== "light" },
            { "bg-gray-800 text-gray-800": theme === "light" }
          )}
        ></button>
        <ThemeContext.Provider value={theme}>
          <Layout />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
