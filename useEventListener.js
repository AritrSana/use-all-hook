"use strict";
exports.__esModule = true;
exports.useEventListener = void 0;
var react_1 = require("react");
function useEventListener(eventType, callback, element) {
    if (element === void 0) { element = window; }
    var callbackRef = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(function () {
        callbackRef.current = callback;
    }, [callback]);
    (0, react_1.useEffect)(function () {
        if (element == null)
            return;
        var handler = function (e) { return callbackRef.current(e); };
        element.addEventListener(eventType, handler);
        return function () { return element.removeEventListener(eventType, handler); };
    }, [eventType, element]);
}
exports.useEventListener = useEventListener;
