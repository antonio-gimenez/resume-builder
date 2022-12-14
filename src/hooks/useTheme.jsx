import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useTheme() {
  const [storedTheme, setStoredTheme, removeStoredTheme, storedThemeExists] = useLocalStorage("theme");
  const [systemPreferredTheme, setSystemPreferredTheme] = useState(null);

  useEffect(() => {
    const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemPreferredTheme(colorSchemeMediaQuery.matches ? "dark" : "light");

    const updateSystemPreferredTheme = () => {
      setSystemPreferredTheme(colorSchemeMediaQuery.matches ? "dark" : "light");
    };

    colorSchemeMediaQuery.addEventListener("change", updateSystemPreferredTheme);
    return () => colorSchemeMediaQuery.removeEventListener("change", updateSystemPreferredTheme);
  }, []);

  return {
    theme: storedTheme || (systemPreferredTheme && !storedThemeExists() ? systemPreferredTheme : null),
    system: !storedThemeExists(),
    remove: removeStoredTheme,
    setTheme: setStoredTheme,
  };
}

export default useTheme;
