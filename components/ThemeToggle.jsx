"use client";
import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
const themes = {
  lemonade: "lemonade",
  dracula: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.lemonade);
  const toggleTheme = () => {
    // check which theme is the current theme
    const newTheme =
      theme === themes.lemonade ? themes.dracula : themes.lemonade;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "lemonade" ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
