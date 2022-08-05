"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propX = require("@carpenjk/prop-x");

var _styledComponents = require("styled-components");

var _useBreakpoints = require("@carpenjk/prop-x/useBreakpoints");

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
      imageFit = _ref.imageFit,
      maxGridWidth = _ref.maxGridWidth,
      maxColWidth = _ref.maxColWidth,
      minColWidth = _ref.minColWidth,
      rows = _ref.rows,
      rowHeight = _ref.rowHeight,
      images = _ref.images,
      onOverlayClick = _ref.onOverlayClick,
      onPhotoClick = _ref.onPhotoClick,
      overlayButton = _ref.overlayButton;

  var _images = (0, _UseImageSizes["default"])(images, columnWidth || maxColWidth, rowHeight);

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var br = (0, _useBreakpoints.useBreakpoints)(theme);
  var numImages = (0, _react.useMemo)(function () {
    var valAry = (0, _propX.unwindProps)({
      images: images
    }).map(function (wound) {
      return wound.images.length;
    });
    var indexedPropValue = (0, _propX.getIndexedPropValue)(valAry, br.indexOfLower);
    return indexedPropValue;
  }, [images, br.indexOfLower]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageLoader.ImageLoader, {
    numImages: numImages,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tiles["default"], {
      columns: columns,
      columnWidth: columnWidth,
      gridHeight: gridHeight,
      gridWidth: gridWidth,
      images: _images,
      imageFit: imageFit,
      maxColWidth: maxColWidth,
      maxGridWidth: maxGridWidth,
      minColWidth: minColWidth,
      rows: rows,
      rowHeight: rowHeight,
      onOverlayClick: onOverlayClick,
      overlayButton: overlayButton,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClientOnly["default"], {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureTilesInner["default"], {
          onPhotoClick: onPhotoClick,
          images: _images
        })
      })
    })
  });
};

var _default = PictureTiles;
exports["default"] = _default;