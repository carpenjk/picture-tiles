"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _react = require("react");

var _useBreakpoints = require("@carpenjk/prop-x/useBreakpoints");

var _propX = require("@carpenjk/prop-x");

var _ImageWrapper = _interopRequireDefault(require("./ImageLoader/ImageWrapper"));

var _ImgButton = _interopRequireDefault(require("./ImgButton"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _Tile = _interopRequireDefault(require("./Tile"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["rowSpan", "colSpan"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PictureTilesInner = function PictureTilesInner(_ref) {
  var images = _ref.images,
      onPhotoClick = _ref.onPhotoClick;

  var _useImageLoader = (0, _ImageLoader.useImageLoader)(),
      _onLoad = _useImageLoader.onLoad;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var br = (0, _useBreakpoints.useBreakpoints)(theme);
  var currBrIndex = (0, _propX.getPropIndex)(images, br.indexOfLower);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: images[currBrIndex].map(function (img, i) {
      var rowSpan = img.rowSpan,
          colSpan = img.colSpan,
          imgProps = _objectWithoutProperties(img, _excluded);

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tile["default"], {
        rowSpan: img.rowSpan,
        colSpan: img.colSpan,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageWrapper["default"], {
          id: i,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImgButton["default"], _objectSpread({
            type: "button",
            onLoad: function onLoad() {
              return _onLoad(i);
            },
            onClick: function onClick() {
              return onPhotoClick(i);
            },
            loading: "lazy"
          }, imgProps))
        })
      }, "".concat(currBrIndex).concat(i));
    })
  });
};

var _default = PictureTilesInner;
exports["default"] = _default;