"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tiles = _interopRequireDefault(require("./Tiles"));

var _PictureTilesInner = _interopRequireDefault(require("./PictureTilesInner"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      minColWidth = _ref.minColWidth,
      rowHeight = _ref.rowHeight,
      rowWidth = _ref.rowWidth,
      images = _ref.images,
      onOverlayClick = _ref.onOverlayClick,
      onPhotoClick = _ref.onPhotoClick,
      options = _ref.options,
      overlayButton = _ref.overlayButton;
  return (
    /*#__PURE__*/
    // mapping determines how many images to display based on provided number of images
    // const { numDisplayedMap, gridHeight } = _options;
    (0, _jsxRuntime.jsx)(_ImageLoader.ImageLoader, {
      numImages: images.length,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "hello"
      })
    })
  );
};

var _default = PictureTiles;
exports["default"] = _default;