"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = require("react");

var _GridContainer = _interopRequireDefault(require("./GridContainer"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButtonWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n"])));

var Tiles = function Tiles(_ref) {
  var children = _ref.children,
      imgCount = _ref.imgCount,
      onOverlayClick = _ref.onOverlayClick,
      _ref$gridHeight = _ref.gridHeight,
      gridHeight = _ref$gridHeight === void 0 ? ['auto', '500px'] : _ref$gridHeight,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? ['none', '1300px'] : _ref$maxWidth,
      overlaybutton = _ref.overlaybutton;

  var _useContext = (0, _react.useContext)(_ImageLoader.ImageLoaderContext),
      isCompletelyLoaded = _useContext.isCompletelyLoaded;

  var OverlayButton = useMemo(function () {
    return overlayButton;
  }, [overlaybutton]);
  var buttonRef = (0, _react.useRef)(); // const imgCount = children.length ? children.length : 0;

  var smallSquares = imgCount - 1; // Hard coded to 2 rows with first image taking up the first 2 rows and cols
  // remaining images fill the grid across rows

  var colCount = imgCount !== 1 ? smallSquares / 2 + 2 : 2;
  (0, _react.useEffect)(function () {
    if (isCompletelyLoaded) buttonRef.current.style.visibility = 'visible';
  }, [isCompletelyLoaded]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_GridContainer["default"], {
      colCount: colCount,
      gridHeight: gridHeight,
      maxWidth: maxWidth,
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledButtonWrapper, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(OverlayButton, {
        ref: buttonRef,
        style: {
          visibility: 'hidden'
        },
        onClick: onOverlayClick,
        children: "More Photos"
      })
    })]
  });
};

var _default = Tiles;
exports["default"] = _default;