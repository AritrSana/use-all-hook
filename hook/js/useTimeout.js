"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimeout = void 0;
const react_1 = require("react");
function useTimeout(callback, delay) {
    const callbackRef = (0, react_1.useRef)(callback);
    const timeoutRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        callbackRef.current = callback;
    }, [callback]);
    const set = (0, react_1.useCallback)(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);
    const clear = (0, react_1.useCallback)(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);
    (0, react_1.useEffect)(() => {
        set();
        return clear;
    }, [delay, set, clear]);
    const reset = (0, react_1.useCallback)(() => {
        clear();
        set();
    }, [clear, set]);
    return { reset, clear };
}
exports.useTimeout = useTimeout;
