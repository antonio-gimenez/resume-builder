import React from "react";
import useTheme from "../hooks/useTheme";
import { ReactComponent as Moon } from "../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../assets/icons/sun.svg";
import { Button } from "./ui";
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const activeTheme = theme === "light" ? "dark" : "light";
    setTheme(activeTheme);
  }

  const isEnabledDark = theme === "dark";

  return (
    <button type="button" onClick={toggleTheme}>
      {isEnabledDark ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeSwitcher;

//  <div className="">
//    <input type="checkbox" id="switch-theme" onChange={toggleTheme} checked={isEnabledDark} />
//    <label htmlFor="switch-theme" className="toggle">
//      <div className="satellite">
//        <div className="craters" />
//      </div>
//      <span className="cloud" />
//      <div className="stars">
//        <span />
//        <span />
//      </div>
//    </label>
//  </div>;
