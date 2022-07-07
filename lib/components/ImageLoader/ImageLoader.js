"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageLoaderContext = exports.ImageLoader = void 0;
exports.useImageLoader = useImageLoader;

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ImageLoaderContext = /*#__PURE__*/(0, _react.createContext)();
exports.ImageLoaderContext = ImageLoaderContext;

var ImageLoader = function ImageLoader(_ref) {
  var children = _ref.children,
      numImages = _ref.numImages;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      isCompletelyLoaded = _useState2[0],
      setIsCompletelyLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      images = _useState4[0],
      setImages = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1];

  var onLoad = (0, _react.useCallback)(function (id) {
    setImages(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, true));
    });
    setCount(function (prev) {
      return prev + 1;
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (count >= numImages) setIsCompletelyLoaded(true);
  }, [count, numImages]);
  var value = (0, _react.useMemo)(function () {
    return {
      onLoad: onLoad,
      count: count,
      isCompletelyLoaded: isCompletelyLoaded,
      images: images
    };
  }, [onLoad, count, isCompletelyLoaded, images]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ImageLoaderContext.Provider, {
    value: value,
    children: children
  });
};

exports.ImageLoader = ImageLoader;

function useImageLoader() {
  var context = (0, _react.useContext)(ImageLoaderContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
}