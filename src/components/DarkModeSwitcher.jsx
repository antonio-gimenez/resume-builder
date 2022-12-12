import React from "react";
import useColorScheme from "../hooks/useColorScheme";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
function DarkModeSwitcher() {
  const { colorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newColorScheme = colorScheme === "light" ? "dark" : "light";
    setColorScheme(newColorScheme);
  }

  const isEnabledDark = colorScheme === "dark";

  return (
    <label className="switcher" htmlFor="theme-switcher">
      <div className="switcher-input">
        <span className={isEnabledDark ? "darkmode" : "lightmode"}>Auto complete</span>
        <input
          type="checkbox"
          id="theme-switcher"
          checked={isEnabledDark}
          onChange={toggleColorScheme}
          className="dark-input"
        />
        <span className="slider" />
      </div>
    </label>
  );
}

export default DarkModeSwitcher;
