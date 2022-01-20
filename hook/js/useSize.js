"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSize = void 0;
const react_1 = require("react");
function useSize(ref) {
    const [size, setSize] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        if (ref.current == null)
            return;
        const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return size;
}
exports.useSize = useSize;
