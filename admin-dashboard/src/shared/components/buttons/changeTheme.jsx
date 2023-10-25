import { useEffect, useState } from "react";

function ChangeTheme() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="dark:bg-black">
      <button
        className=" animate-fade-up bg-white-200 px-4 py-2 rounded dark:bg-black dark:text-white"
        onClick={handleChangeTheme}
      >
        Cambiar tema
      </button>
    </div>
  );
}
export default ChangeTheme;
