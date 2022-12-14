import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

// get the html tag
const html = document.querySelector("html");

function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme");
  const [systemTheme, setSystemTheme] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setSystemTheme(mediaQuery ? "dark" : "light");
  }, [theme]);

  return {
    theme: theme || systemTheme,
    setTheme,
  };
}

export default useTheme;
