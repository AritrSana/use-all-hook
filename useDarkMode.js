"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useMediaQuery_1 = require("./useMediaQuery");
const useStorage_1 = require("./useStorage");
const useDarkMode = () => {
    const [darkMode, setDarkMode] = (0, useStorage_1.useLocalStorage)("useDarkMode", () => "");
    const preferDarkMode = (0, useMediaQuery_1.useMediaQuery)("(prefers-color-scheme: dark)");
    const enabled = darkMode !== null && darkMode !== void 0 ? darkMode : preferDarkMode;
    (0, react_1.useEffect)(() => {
        document.body.classList.toggle("dark-mode", enabled);
    }, [enabled]);
    return [enabled, setDarkMode];
};
