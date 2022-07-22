import { useState } from "react";
import "./App.css";
import { Layout } from "./components/layout";

function App() {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
      <div>
        <Layout />
      </div>
    </>
  );
}

export default App;
