import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useTheme() {
  const [theme, setTheme, remove, exists] = useLocalStorage("theme");
  const [systemTheme, setSystemTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)" ? "dark" : "light"));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setSystemTheme(mediaQuery ? "dark" : "light");
    console.log(theme);
  }, []);

  return {
    theme: theme || systemTheme,
    system: !exists(),
    remove: remove,
    setTheme: (theme) => {
      setTheme(theme);
    },
  };
}

export default useTheme;
