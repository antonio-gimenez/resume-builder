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

  const isEnabledDark = colorScheme === "dark";

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle`}>
        <span className="hidden">{isEnabledDark ? "Enable Light Mode" : "Enable Dark Mode"}</span>
        <div className="icons">{isEnabledDark ? <MoonIcon className="moon" /> : <SunIcon className="sun" />}</div>
        <input id="toggle" name="toggle" type="checkbox" checked={isEnabledDark} onChange={toggleColorScheme} />
      </div>
    </label>
  );
}

export default ColorSwitcher;
