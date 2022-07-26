"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = require("react");

var _propX = require("prop-x");

var _css = require("prop-x/css");

var _GridContainer = _interopRequireDefault(require("./GridContainer"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "onOverlayClick", "overlayButton", "gridWidth", "maxGridWidth"],
    _excluded2 = ["OverlayButton"];

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTileWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  max-width: ", ";\n  ", "\n"])), (0, _propX.getProp)('gridWidth'), (0, _propX.getProp)('maxGridWidth'), (0, _css.breakpoint)(1)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: ", ";\n    max-width: ", ";\n  "])), (0, _propX.getProp)('gridWidth'), (0, _propX.getProp)('maxGridWidth')));

var StyledButtonWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  right: ", ";\n  bottom: ", ";\n  left: ", ";\n"])), (0, _propX.getProp)('top'), (0, _propX.getProp)('right'), (0, _propX.getProp)('bottom'), (0, _propX.getProp)('left'));

StyledTileWrapper.defaultProps = {
  gridWidth: '100%'
};
StyledButtonWrapper.defaultProps = {
  bottom: '20px',
  right: '20px',
  top: 'auto',
  left: 'auto'
};

var Tiles = function Tiles(_ref) {
  var children = _ref.children,
      onOverlayClick = _ref.onOverlayClick,
      overlayButton = _ref.overlayButton,
      gridWidth = _ref.gridWidth,
      maxGridWidth = _ref.maxGridWidth,
      remGridProps = _objectWithoutProperties(_ref, _excluded);

  var _useImageLoader = (0, _ImageLoader.useImageLoader)(),
      isCompletelyLoaded = _useImageLoader.isCompletelyLoaded;

  var _ref2 = overlayButton || {},
      OverlayButton = _ref2.OverlayButton,
      buttonPosProps = _objectWithoutProperties(_ref2, _excluded2);

  var buttonWrapperRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (isCompletelyLoaded) buttonWrapperRef.current.style.visibility = 'visible';
  }, [isCompletelyLoaded]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledTileWrapper, {
    gridWidth: gridWidth,
    maxGridWidth: maxGridWidth,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_GridContainer["default"], _objectSpread(_objectSpread({
      gridWidth: gridWidth,
      maxGridWidth: maxGridWidth
    }, remGridProps), {}, {
      children: children
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledButtonWrapper, _objectSpread(_objectSpread({}, buttonPosProps), {}, {
      ref: buttonWrapperRef,
      style: {
        visibility: 'hidden'
      },
      children: OverlayButton && OverlayButton
    }))]
  });
};

var _default = Tiles;
exports["default"] = _default;