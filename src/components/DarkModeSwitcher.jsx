import React from "react";
import useColorScheme from "../hooks/useColorScheme";
function DarkModeSwitcher() {
  const { colorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newColorScheme = colorScheme === "light" ? "dark" : "light";
    setColorScheme(newColorScheme);
  }

  const isEnabledDark = colorScheme === "dark";

  return (
    <div className="switch-theme-container">
      <input type="checkbox" className="dn" id="dn" onChange={toggleColorScheme} checked={isEnabledDark} />
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

export default DarkModeSwitcher;
