import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

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
