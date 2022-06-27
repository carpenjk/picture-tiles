"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = require("react");

var _dataweaver = require("dataweaver");

var _GridContainer = _interopRequireDefault(require("./GridContainer"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButtonWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n"])));

var Tiles = function Tiles(_ref) {
  var children = _ref.children,
      columns = _ref.columns,
      columnWidth = _ref.columnWidth,
      gridHeight = _ref.gridHeight,
      images = _ref.images,
      maxGridWidth = _ref.maxGridWidth,
      rowHeight = _ref.rowHeight,
      minColWidth = _ref.minColWidth,
      rowWidth = _ref.rowWidth,
      onOverlayClick = _ref.onOverlayClick,
      overlayButton = _ref.overlayButton;

  var _useContext = (0, _react.useContext)(_ImageLoader.ImageLoaderContext),
      isCompletelyLoaded = _useContext.isCompletelyLoaded;

  var OverlayButton = (0, _react.useMemo)(function () {
    return overlayButton;
  }, [overlayButton]);
  var buttonRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (isCompletelyLoaded) buttonRef.current.style.visibility = 'visible';
  }, [isCompletelyLoaded]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_GridContainer["default"], {
      columns: columns,
      columnWidth: columnWidth,
      gridHeight: gridHeight,
      images: images,
      maxGridWidth: maxGridWidth,
      minColWidth: minColWidth,
      rowHeight: rowHeight,
      rowWidth: rowWidth,
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