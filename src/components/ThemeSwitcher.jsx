import React from "react";
import useTheme from "../hooks/useTheme";
import { ReactComponent as Moon } from "../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../assets/icons/sun.svg";
import { ReactComponent as System } from "../assets/icons/system.svg";
import { ReactComponent as Dim } from "../assets/icons/cloud.svg";
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

  function getIcon() {
    if (system) return System;
    if (theme === "light") return Sun;
    if (theme === "dark") return Moon;
    if (theme === "dim") return Dim;
  }

  const Icon = getIcon();

  const themes = [
    { id: 0, label: "Light", value: "light", active: theme === "light" && !system },
    { id: 1, label: "Dark", value: "dark", active: theme === "dark" && !system },
    { id: 3, label: "System", value: "system", active: system },
  ];

  return <Dropdown label={<Icon />} colorSelected items={themes} onClick={toggleTheme} />;
}

export default ThemeSwitcher;
