"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrevious = void 0;
const react_1 = require("react");
function usePrevious(value) {
    const currentRef = (0, react_1.useRef)(value);
    const previousRef = (0, react_1.useRef)();
    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }
    return previousRef.current;
}
exports.usePrevious = usePrevious;
