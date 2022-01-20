"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useFetch = void 0;
var useAsync_1 = require("./useAsync");
var DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" }
};
var useFetch = function (url, options, dependencies) {
    return (0, useAsync_1.useAsync)(function () {
        return fetch(url, __assign(__assign({}, DEFAULT_OPTIONS), options)).then(function (res) {
            if (res.ok)
                return res.json();
            return res.json().then(function (json) { return Promise.reject(json); });
        });
    }, dependencies);
};
exports.useFetch = useFetch;
