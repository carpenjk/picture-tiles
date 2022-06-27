"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themeweaver = require("themeweaver");

var _dataweaver = require("dataweaver");

var _react = require("react");

var _InlineSpinner = _interopRequireDefault(require("./inlineSpinner/InlineSpinner"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledGrid = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: ", ";\n  max-width: ", ";\n  overflow: hidden;\n\n  & button {\n    width: 100%;\n    height: 100%;\n  }\n  & button > img {\n    flex: none;\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n  }\n  ", "\n"])), (0, _dataweaver.getProp)('gridHeight'), (0, _dataweaver.getProp)('maxWidth'), (0, _themeweaver.breakpoint)(1)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: repeat(", ", 1fr);\n    justify-items: stretch;\n    align-items: stretch;\n    width: 100%;\n    height: ", ";\n    max-width: ", ";\n\n    > *:first-child {\n      grid-row: 1 / span 2;\n      grid-column: 1 / span 2;\n    }\n    > *:not(:first-child) {\n      grid-row: auto / span 1;\n      grid-column: auto / span 1;\n      max-height: ", ";\n    }\n    > *:last-child {\n      grid-row: unset;\n      grid-column: unset;\n      max-height: unset;\n    }\n"])), function (_ref) {
  var colCount = _ref.colCount;
  return colCount;
}, (0, _dataweaver.getProp)('gridHeight'), (0, _dataweaver.getProp)('maxWidth'), (0, _dataweaver.getProp)('rowHeight')));

var GridContainer = function GridContainer(_ref2) {
  var columns = _ref2.columns,
      columnWidth = _ref2.columnWidth,
      gridHeight = _ref2.gridHeight,
      images = _ref2.images,
      maxGridWidth = _ref2.maxGridWidth,
      rowHeight = _ref2.rowHeight,
      minColWidth = _ref2.minColWidth,
      rowWidth = _ref2.rowWidth,
      children = _ref2.children;

  var _useContext = (0, _react.useContext)(_ImageLoader.ImageLoaderContext),
      isCompletelyLoaded = _useContext.isCompletelyLoaded; // function normalizeAndFlattenAryProps(ary){
  //   let superProps = [];
  //   for(i===0; i< ary.length; i+=1){
  //   }
  // }


  var flattenedProps = (0, _dataweaver.flattenProps)({
    columns: columns,
    columnWidth: columnWidth,
    gridHeight: gridHeight,
    images: images,
    maxGridWidth: maxGridWidth,
    rowHeight: rowHeight,
    minColWidth: minColWidth,
    rowWidth: rowWidth
  });
  console.log('🚀 ~ file: GridContainer.jsx ~ line 81 ~ flattenedProps', flattenedProps);
  var imgCount = images && images.length ? images.length : 0;
  var rowCount = Number.isInteger(columns) ? imgCount / columns : undefined; // row count unknown if columns is auto-fill or auto-fit

  function calcRowHeightFromGrid(gridHeight) {}

  var _rowHeight = gridHeight ? (0, _dataweaver.parseSizeUnits)(gridHeight).map(function (val) {
    return "".concat(val.value ? val.value / 2 : val.whole).concat(val.unit || '');
  }) : rowHeight;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledGrid, {
    columns: columns,
    columnWidth: columnWidth,
    gridHeight: gridHeight,
    maxGridWidth: maxGridWidth,
    rowHeight: _rowHeight,
    minColWidth: minColWidth,
    rowWidth: rowWidth,
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_InlineSpinner["default"], {
      isOpen: !isCompletelyLoaded
    })]
  });
};

var _default = GridContainer;
exports["default"] = _default;