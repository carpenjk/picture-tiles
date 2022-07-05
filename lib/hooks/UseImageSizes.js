"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataweaver = require("dataweaver");

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useImageSizes = function useImageSizes(images, fallbackWidth, fallbackHeight) {
  var _images = (0, _react.useMemo)(function () {
    return (0, _dataweaver.mapProps)(function (_ref) {
      var imgs = _ref.images,
          width = _ref.width,
          height = _ref.height;
      return imgs.map(function (img) {
        return _objectSpread({
          width: (0, _dataweaver.parseAndCalc)([width, img.colSpan], function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                _width = _ref3[0],
                cSpan = _ref3[1];

            return _width * cSpan;
          }),
          height: (0, _dataweaver.parseAndCalc)([height, img.rowSpan], function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                _height = _ref5[0],
                rSpan = _ref5[1];

            return _height * rSpan;
          })
        }, img);
      });
    }, (0, _dataweaver.unwindProps)({
      images: images,
      width: fallbackWidth,
      height: fallbackHeight
    }));
  }, [images, fallbackWidth, fallbackHeight]);

  var unwindImages = (0, _dataweaver.unwindProps)({
    images: images,
    width: fallbackWidth,
    height: fallbackHeight
  });
  console.log('🚀 ~ file: UseImageSizes.js ~ line 34 ~ useImageSizes ~ unwindImages', unwindImages);
  console.log('🚀 ~ file: UseImageSizes.js ~ line 28 ~ useImageSizes ~ _images', _images);
  var woundImages = (0, _dataweaver.windProps)(_images);
  console.log('🚀 ~ file: UseImageSizes.js ~ line 30 ~ useImageSizes ~ woundImages', woundImages);
  return (0, _dataweaver.windProps)(_images);
};

var _default = useImageSizes;
exports["default"] = _default;