"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _Tiles = _interopRequireDefault(require("./Tiles"));

var _PictureTilesInner = _interopRequireDefault(require("./PictureTilesInner"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_OPTIONS = {
  imgProps: {
    large: {
      width: 800,
      height: 533,
      fit: 'fill'
    },
    small: {
      width: 500,
      height: 333,
      fit: 'fill'
    }
  },
  numDisplayedMap: [1, 1, 3, 3, 5]
};

var PictureTiles = function PictureTiles(_ref) {
  var columns = _ref.columns,
      columnWidth = _ref.columnWidth,
      gridHeight = _ref.gridHeight,
      gridWidth = _ref.gridWidth,
      maxGridWidth = _ref.maxGridWidth,
      maxColWidth = _ref.maxColWidth,
      minColWidth = _ref.minColWidth,
      rows = _ref.rows,
      rowHeight = _ref.rowHeight,
      rowWidth = _ref.rowWidth,
      images = _ref.images,
      onOverlayClick = _ref.onOverlayClick,
      onPhotoClick = _ref.onPhotoClick,
      options = _ref.options,
      overlayButton = _ref.overlayButton;
  console.log('🚀 ~ file: PictureTiles.jsx ~ line 36 ~ images', images);

  var _images = (0, _react.useMemo)(function () {
    return images.map(function (img) {
      return _objectSpread({
        width: (maxColWidth || columnWidth) * img.colSpan,
        height: rowHeight * img.rowSpan
      }, img);
    });
  }, [images, columnWidth, maxColWidth, rowHeight]);

  console.log('🚀 ~ file: PictureTiles.jsx ~ line 48 ~ _images', _images);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageLoader.ImageLoader, {
    numImages: images && images.length ? images.length : 0,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tiles["default"], {
      columns: columns,
      columnWidth: columnWidth,
      gridHeight: gridHeight,
      gridWidth: gridWidth,
      images: _images,
      maxColWidth: maxColWidth,
      maxGridWidth: maxGridWidth,
      minColWidth: minColWidth,
      rows: rows,
      rowHeight: rowHeight,
      rowWidth: rowWidth,
      onOverlayClick: onOverlayClick,
      overlayButton: overlayButton,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureTilesInner["default"], {
        onPhotoClick: onPhotoClick,
        images: images
      })
    })
  });
};

var _default = PictureTiles;
exports["default"] = _default;