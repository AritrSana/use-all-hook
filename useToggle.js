"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useToggle(defaultValue) {
    var _a = (0, react_1.useState)(defaultValue), value = _a[0], setValue = _a[1];
    function toggleValue(value) {
        setValue(function (currentValue) {
            return typeof value === "boolean" ? value : !currentValue;
        });
    }
    return [value, toggleValue];
}
exports["default"] = useToggle;
