"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const useAsync_1 = require("./useAsync");
const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" },
};
const useFetch = (url, options, dependencies) => {
    return (0, useAsync_1.useAsync)(() => {
        return fetch(url, Object.assign(Object.assign({}, DEFAULT_OPTIONS), options)).then(res => {
            if (res.ok)
                return res.json();
            return res.json().then(json => Promise.reject(json));
        });
    }, dependencies);
};
exports.useFetch = useFetch;
