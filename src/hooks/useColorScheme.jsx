import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useColorScheme() {
  const [colorScheme, setColorScheme] = useLocalStorage("color-scheme");

  useEffect(() => {
    // if a color scheme is not set, use the browser's default
    if (!colorScheme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const colorScheme = mediaQuery.matches ? "dark" : "light";
      setColorScheme(colorScheme);
    }
  }, []);

  return { colorScheme, setColorScheme };
}

export default useColorScheme;
