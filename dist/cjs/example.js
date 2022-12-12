"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const example_css_1 = require("./example.css");
function Example({ children }) {
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: example_css_1.huge }, { children: children }));
}
exports.Example = Example;
