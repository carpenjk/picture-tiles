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

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    function _calc(parsedVars, fn) {
      var varValues = parsedVars.map(function (v) {
        return v.value;
      });
      console.log('🚀 ~ file: PictureTiles.jsx ~ line 44 ~ _calc ~ varValues', varValues);
      var u = parsedVars.find(function (_ref2) {
        var unit = _ref2.unit;
        return unit;
      }).unit;
      return "".concat(fn(varValues)).concat(u);
    }

    function parseAndCalc(vars, fn) {
      var parsedVars = vars.map(function (v) {
        return (0, _dataweaver.parseSizeUnits)(v);
      });
      return _calc(parsedVars, fn);
    }

    return (0, _dataweaver.mapProps)(function (_ref3) {
      var unwoundImages = _ref3.images,
          cWidth = _ref3.columnWidth,
          maxCWidth = _ref3.maxColWidth,
          rHeight = _ref3.rowHeight;
      return unwoundImages.map(function (img) {
        return _objectSpread({
          width: parseAndCalc([maxCWidth, cWidth, img.colSpan], function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 3),
                _maxCWidth = _ref5[0],
                _cWidth = _ref5[1],
                cSpan = _ref5[2];

            return maxCWidth ? _maxCWidth * cSpan : _cWidth * cSpan;
          }),
          height: rHeight * img.rowSpan
        }, img);
      });
    }, (0, _dataweaver.unwindProps)({
      images: [images],
      columnWidth: columnWidth,
      maxColWidth: maxColWidth,
      rowHeight: rowHeight
    }));
  }, [images, columnWidth, maxColWidth, rowHeight]);

  console.log('🚀 ~ file: PictureTiles.jsx ~ line 48 ~ _images', _images);
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