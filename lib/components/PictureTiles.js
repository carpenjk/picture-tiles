"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _dataweaver = require("dataweaver");

var _Tiles = _interopRequireDefault(require("./Tiles"));

var _PictureTilesInner = _interopRequireDefault(require("./PictureTilesInner"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _UseImageSizes = _interopRequireDefault(require("../hooks/UseImageSizes"));

var _ClientOnly = _interopRequireDefault(require("./ClientOnly"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      overlayButton = _ref.overlayButton;

  var _images = (0, _UseImageSizes["default"])(images, columnWidth || maxColWidth, rowHeight);

  var numImages = (0, _react.useMemo)(function () {
    return (0, _dataweaver.unwindProps)({
      images: images
    }).map(function (wound) {
      return wound.images.length;
    });
  }, [images]);
  console.log('🚀 ~ file: PictureTiles.jsx ~ line 31 ~ numImages', numImages);
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClientOnly["default"], {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureTilesInner["default"], {
          onPhotoClick: onPhotoClick,
          images: images
        })
      })
    })
  });
};

var _default = PictureTiles;
exports["default"] = _default;