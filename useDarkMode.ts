/** @format */

import { useEffect } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { useLocalStorage } from "./useStorage";

type DarkMode = () => unknown | string;

const useDarkMode: DarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode", () => "");
  const preferDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? preferDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
};
