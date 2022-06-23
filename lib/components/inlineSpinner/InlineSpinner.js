"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  opacity: 75%;\n  transition: background ease-in 1s;\n  z-index: -1;\n  &.isOpen {\n    z-index: 1;\n    display: flex;\n    background: #b9bcbb;\n  }\n"])));

var StyledSpinner = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  > .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  > .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid #cef;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #cef transparent transparent transparent;\n  }\n  > .lds-ring div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  > .lds-ring div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  > .lds-ring div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])));

var InlineSpinner = function InlineSpinner(_ref) {
  var isOpen = _ref.isOpen;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledContainer, {
    className: isOpen ? 'isOpen' : '',
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledSpinner, {
      style: !isOpen ? {
        display: 'none'
      } : undefined,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "lds-ring",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {})]
      })
    })
  });
};

var _default = InlineSpinner;
exports["default"] = _default;