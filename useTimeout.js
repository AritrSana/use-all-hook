"use strict";
exports.__esModule = true;
exports.useTimeout = void 0;
var react_1 = require("react");
function useTimeout(callback, delay) {
    var callbackRef = (0, react_1.useRef)(callback);
    var timeoutRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        callbackRef.current = callback;
    }, [callback]);
    var set = (0, react_1.useCallback)(function () {
        timeoutRef.current = setTimeout(function () { return callbackRef.current(); }, delay);
    }, [delay]);
    var clear = (0, react_1.useCallback)(function () {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);
    (0, react_1.useEffect)(function () {
        set();
        return clear;
    }, [delay, set, clear]);
    var reset = (0, react_1.useCallback)(function () {
        clear();
        set();
    }, [clear, set]);
    return { reset: reset, clear: clear };
}
exports.useTimeout = useTimeout;
