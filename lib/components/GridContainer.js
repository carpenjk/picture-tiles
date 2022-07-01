"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themeweaver = require("themeweaver");

var _dataweaver = require("dataweaver");

var _InlineSpinner = _interopRequireDefault(require("./inlineSpinner/InlineSpinner"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["images", "children"];

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledGrid = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: ", ";\n  max-width: ", ";\n  overflow: hidden;\n\n  & button {\n    width: 100%;\n    height: 100%;\n  }\n  & button > img {\n    flex: none;\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n  }\n  ", "\n"])), (0, _dataweaver.getProp)('gridHeight'), (0, _dataweaver.getProp)('maxGridWidth'), (0, _themeweaver.breakpoint)(1)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: grid;\n    grid-auto-flow: row dense;\n    grid-template-rows: ", ";\n    grid-auto-rows: ", ";\n    grid-template-columns: ", ";\n    justify-items: stretch;\n    align-items: stretch;\n    height: ", ";\n    width: ", ";\n    max-width: ", ";\n\n    > *:last-child {\n      grid-row: unset;\n      grid-column: unset;\n      max-height: unset;\n    }\n"])), (0, _dataweaver.getProp)('rowHeight'), (0, _dataweaver.getProp)('rowHeight'), (0, _dataweaver.getProp)('gridTemplateColumns'), (0, _dataweaver.getProp)('gridHeight'), (0, _dataweaver.getProp)('width'), (0, _dataweaver.getProp)('maxGridWidth')));

function calcProps(_ref) {
  var columns = _ref.columns,
      columnWidth = _ref.columnWidth,
      gridHeight = _ref.gridHeight,
      gridWidth = _ref.gridWidth,
      images = _ref.images,
      maxGridWidth = _ref.maxGridWidth,
      rows = _ref.rows,
      rowHeight = _ref.rowHeight,
      minColWidth = _ref.minColWidth,
      maxColWidth = _ref.maxColWidth,
      rowWidth = _ref.rowWidth;

  function getRowHeight() {
    if (gridHeight) {
      var _gridHeight = (0, _dataweaver.parseSizeUnits)(gridHeight);

      return "".concat(_gridHeight.value / rows).concat(_gridHeight.unit);
    }

    return rowHeight || '1fr';
  }

  function getColumnWidth() {
    var width = columnWidth || '1fr';

    if (minColWidth && maxColWidth) {
      return "minmax(".concat(minColWidth, ", ").concat(maxColWidth, ")");
    }

    if (minColWidth) {
      // do something
      return "minmax(".concat(minColWidth, ", ").concat(width, ")");
    }

    if (maxColWidth) {
      return "minmax(".concat(width, ", ?").concat(maxColWidth, ")");
    }

    return width;
  }

  var imgCount = images && images.length ? images.length : 0;

  var _rowHeight = getRowHeight();

  var gridTemplateColumns = "repeat(".concat(columns, ", ").concat(getColumnWidth(), ")");
  return {
    columns: columns,
    columnWidth: columnWidth,
    gridHeight: gridHeight,
    gridWidth: gridWidth,
    gridTemplateColumns: gridTemplateColumns,
    images: images,
    imgCount: imgCount,
    maxGridWidth: maxGridWidth,
    rowHeight: _rowHeight,
    rows: rows,
    minColWidth: minColWidth,
    rowWidth: rowWidth
  };
}

var GridContainer = function GridContainer(_ref2) {
  var images = _ref2.images,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded);

  var _useImageLoader = (0, _ImageLoader.useImageLoader)(),
      isCompletelyLoaded = _useImageLoader.isCompletelyLoaded;

  var calculatedProps = (0, _dataweaver.mapProps)(calcProps, (0, _dataweaver.unwindProps)(_objectSpread(_objectSpread({}, props), {}, {
    images: [images]
  })));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledGrid, _objectSpread(_objectSpread({}, (0, _dataweaver.windProps)(calculatedProps)), {}, {
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_InlineSpinner["default"], {
      isOpen: !isCompletelyLoaded
    })]
  }));
};

var _default = GridContainer;
exports["default"] = _default;