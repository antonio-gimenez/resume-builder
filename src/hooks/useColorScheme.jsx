import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useColorScheme() {
  const [colorScheme, setColorScheme] = useLocalStorage("color-scheme");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) return;
    if (!colorScheme) {
      const colorScheme = mediaQuery.matches ? "dark" : "light";
      setColorScheme(colorScheme);
    }
  }, []);

  return { colorScheme, setColorScheme };
}

export default useColorScheme;
