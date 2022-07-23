import classnames from "classnames";
import { useState } from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { ThemeContext } from "./ThemeContext";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

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
          { "bg-[#0b0617]": theme !== "light" }
        )}
      >
        <button
          onClick={changeTheme}
          className={classnames(
            "mb-0 p-3 rounded-full m-10 hover:scale-125 duration-300 active:scale-50 ease-in",
            { "bg-[#120925] text-white": theme !== "light" },
            { "bg-gray-200 text-gray-800": theme === "light" }
          )}
        >
          {theme !== "dark" ? <FaMoon /> : <FaSun />}
        </button>
        <ThemeContext.Provider value={theme}>
          <Layout />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
