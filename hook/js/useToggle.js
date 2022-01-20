"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const react_1 = require("react");
function useToggle(defaultValue) {
    const [value, setValue] = (0, react_1.useState)(defaultValue);
    function toggleValue(value) {
        setValue((currentValue) => typeof value === "boolean" ? value : !currentValue);
    }
    return [value, toggleValue];
}
exports.useToggle = useToggle;
