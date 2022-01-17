"use strict";
exports.__esModule = true;
exports.usePrevious = void 0;
var react_1 = require("react");
function usePrevious(value) {
    var currentRef = (0, react_1.useRef)(value);
    var previousRef = (0, react_1.useRef)();
    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }
    return previousRef.current;
}
exports.usePrevious = usePrevious;
