"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ImageLoader = require("./ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLoadBackground = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #ffff;\n  width: 100%;\n  height: 100%;\n  opacity: 100%;\n\n  &.isLoaded {\n    background: none;\n    z-index: 0;\n    transition: background ease-in 0.45s;\n  }\n"])));

var ImageWrapper = function ImageWrapper(_ref) {
  var children = _ref.children,
      id = _ref.id;

  var _useImageLoader = (0, _ImageLoader.useImageLoader)(),
      images = _useImageLoader.images;

  var elemRef = (0, _react.useRef)();
  var isLoaded = images[id];

  var handleTransitionEnd = function handleTransitionEnd() {
    elemRef.current.style.display = 'none';
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      position: 'relative'
    },
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledLoadBackground, {
      ref: elemRef,
      onTransitionEnd: handleTransitionEnd,
      className: isLoaded ? 'isLoaded' : ''
    })]
  });
};

var _default = ImageWrapper;
exports["default"] = _default;