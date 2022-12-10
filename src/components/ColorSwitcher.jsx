import React from "react";
import useColorScheme from "../hooks/useColorScheme";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
function ColorSwitcher() {
  const { colorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newColorScheme = colorScheme === "light" ? "dark" : "light";
    setColorScheme(newColorScheme);
  }

  const isEnabled = colorScheme === "dark";

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "moon" : "sun"}`}>
        <span className="hidden">{isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}</span>
        <div className="icons">
          <SunIcon className="sun" />
          <MoonIcon className="moon" />
        </div>
        <input id="toggle" name="toggle" type="checkbox" checked={isEnabled} onChange={toggleColorScheme} />
      </div>
    </label>
  );
}

export default ColorSwitcher;
