"use strict";
exports.__esModule = true;
exports.useSize = void 0;
var react_1 = require("react");
var react_development_1 = require("react/cjs/react.development");
function useSize(ref) {
    var _a = (0, react_1.useState)({}), size = _a[0], setSize = _a[1];
    (0, react_development_1.useEffect)(function () {
        if (ref.current == null)
            return;
        var observer = new ResizeObserver(function (_a) {
            var entry = _a[0];
            return setSize(entry.contentRect);
        });
        observer.observe(ref.current);
        return function () { return observer.disconnect(); };
    }, []);
    return size;
}
exports.useSize = useSize;
