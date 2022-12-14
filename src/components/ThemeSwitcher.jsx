import React from "react";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const activeTheme = theme === "light" ? "dark" : "light";
    setTheme(activeTheme);
  }

  const isEnabledDark = theme === "dark";

  return (
    <div className="switch-theme-container">
      <input type="checkbox" className="dn" id="dn" onChange={toggleTheme} checked={isEnabledDark} />
      <label htmlFor="dn" className="toggle">
        <div className="satellite">
          <div className="craters" />
        </div>
        <span className="cloud" />
        <div className="stars">
          <span />
          <span />
        </div>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
