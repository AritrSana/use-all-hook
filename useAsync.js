"use strict";
exports.__esModule = true;
exports.useAsync = void 0;
var react_1 = require("react");
function useAsync(callback, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)(), error = _b[0], setError = _b[1];
    var _c = (0, react_1.useState)(), value = _c[0], setValue = _c[1];
    var callbackMemoized = (0, react_1.useCallback)(function () {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)["catch"](setError)["finally"](function () { return setLoading(false); });
    }, dependencies);
    (0, react_1.useEffect)(function () {
        callbackMemoized();
    }, [callbackMemoized]);
    return { loading: loading, error: error, value: value };
}
exports.useAsync = useAsync;
