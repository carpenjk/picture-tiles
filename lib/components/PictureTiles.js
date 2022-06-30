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

  var _images = (0, _UseImageSizes["default"])(images, columnWidth || maxColWidth, rowHeight); // const _images = useMemo(() => {
  //   function _calc(parsedVars, fn) {
  //     const varValues = parsedVars.map((v) => v && v.value);
  //     const u = parsedVars.find(({ unit }) => unit).unit;
  //     return `${fn(varValues)}${u}`;
  //   }
  //   function parseAndCalc(vars, fn) {
  //     const parsedVars = vars.map((v) => parseSizeUnits(v));
  //     return _calc(parsedVars, fn);
  //   }
  //   return mapProps(
  //     ({
  //       images: unwoundImages,
  //       columnWidth: cWidth,
  //       maxColWidth: maxCWidth,
  //       rowHeight: rHeight,
  //     }) =>
  //       unwoundImages.map((img) => ({
  //         width: parseAndCalc(
  //           [maxCWidth, cWidth, img.colSpan],
  //           ([_maxCWidth, _cWidth, cSpan]) =>
  //             maxCWidth ? _maxCWidth * cSpan : _cWidth * cSpan
  //         ),
  //         height: rHeight * img.rowSpan,
  //         ...img,
  //       })),
  //     unwindProps({ images: [images], columnWidth, maxColWidth, rowHeight })
  //   );
  // }, [images, columnWidth, maxColWidth, rowHeight]);


  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageLoader.ImageLoader, {
    numImages: images && images.length ? images.length : 0,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tiles["default"], {
      columns: columns,
      columnWidth: columnWidth,
      gridHeight: gridHeight,
      gridWidth: gridWidth,
      images: (0, _dataweaver.windProps)(_images),
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