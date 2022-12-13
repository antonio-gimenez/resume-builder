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
      <label for="dn" className="toggle">
        <span className="satellite">
          <span className="crater crater-1" />
          <span className="crater crater-2" />
          <span className="crater crater-3" />
        </span>
        <div className="star cloud" />
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
      </label>
    </div>
  );
}

export default DarkModeSwitcher;
