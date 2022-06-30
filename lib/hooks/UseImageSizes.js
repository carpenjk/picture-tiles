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
    function _calc(parsedVars, fn) {
      var varValues = parsedVars.map(function (v) {
        return v && v.value;
      });
      var u = parsedVars.find(function (_ref) {
        var unit = _ref.unit;
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

    return (0, _dataweaver.mapProps)(function (_ref2) {
      var imgs = _ref2.images,
          width = _ref2.fallbackWidth,
          height = _ref2.fallbackHeight;
      return imgs.map(function (img) {
        return _objectSpread({
          width: parseAndCalc([width, img.colSpan], function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                _width = _ref4[0],
                cSpan = _ref4[1];

            return _width * cSpan;
          }),
          height: parseAndCalc([height, img.rowSpan], function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                _height = _ref6[0],
                rSpan = _ref6[1];

            return _height * rSpan;
          })
        }, img);
      });
    }, (0, _dataweaver.unwindProps)({
      images: [images],
      fallbackWidth: fallbackWidth,
      fallbackHeight: fallbackHeight
    }));
  }, [images, fallbackWidth, fallbackHeight]);

  return _images;
};

var _default = useImageSizes;
exports["default"] = _default;