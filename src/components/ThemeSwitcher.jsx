import React from "react";
import useTheme from "../hooks/useTheme";
import { ReactComponent as Moon } from "../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../assets/icons/sun.svg";
import { ReactComponent as System } from "../assets/icons/system.svg";
import { Dropdown } from "./ui";
function ThemeSwitcher() {
  const { theme, setTheme, remove, system } = useTheme();

  function toggleTheme(theme) {
    if (theme === "system") {
      remove();
    } else {
      setTheme(theme);
    }
  }

  // return the theme icon
  const Icon = system ? System : theme === "dark" ? Moon : Sun;
  const themes = [
    { id: 0, label: "Light", value: "light" },
    { id: 1, label: "Dark", value: "dark" },
    { id: 2, label: "System", value: "system" },
  ];

  return <Dropdown label={<Icon />} items={themes} onClick={toggleTheme} />;
}

export default ThemeSwitcher;
