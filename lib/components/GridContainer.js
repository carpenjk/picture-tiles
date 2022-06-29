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

var _excluded = ["images", "children"];

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledGrid = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: ", ";\n  max-width: ", ";\n  overflow: hidden;\n\n  & button {\n    width: 100%;\n    height: 100%;\n  }\n  & button > img {\n    flex: none;\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n  }\n  ", "\n"])), (0, _dataweaver.getProp)('gridHeight'), (0, _dataweaver.getProp)('maxGridWidth'), (0, _themeweaver.breakpoint)(1)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: grid;\n    grid-auto-flow: row dense;\n    grid-template-rows: ", ";\n    grid-auto-rows: ", ";\n    grid-template-columns: ", ";\n    justify-items: stretch;\n    align-items: stretch;\n    height: ", ";\n    width: ", ";\n    max-width: ", ";\n\n    > *:first-child {\n      grid-row: 1 / span 2;\n      grid-column: 1 / span 2;\n    }\n    > *:not(:first-child) {\n      grid-row: auto / span 1;\n      grid-column: auto / span 1;\n      max-height: ", ";\n    }\n    > *:last-child {\n      grid-row: unset;\n      grid-column: unset;\n      max-height: unset;\n    }\n"])), (0, _dataweaver.getProp)('rowHeight'), (0, _dataweaver.getProp)('rowHeight'), (0, _dataweaver.getProp)('gridTemplateColumns'), (0, _dataweaver.getProp)('gridHeight'), (0, _dataweaver.getProp)('width'), (0, _dataweaver.getProp)('maxGridWidth'), (0, _dataweaver.getProp)('rowHeight'))); // function calcRowHeightFromGrid(gridHeight, columns, images) {
//   if (columns === 'auto-fit' || columns === 'auto-fill') {
//     // do not use gridHeight if not fixed number of columns
//     return;
//   }
//   const gridSizeUnits = parseSizeUnits(gridHeight);
//   const grid = [[]]; // [[1,1,1,...], [...]]
//   let currRow = 0;
//   // let currCol = 0;
//   function getFirstAvailableSpot() {}
//   function place([startRow, startCol], rowSpan, colSpan) {
//     const endCol = startCol + colSpan;
//     for (let i = 0; i < rowSpan; i += 1) {
//       grid[startRow + i].fill(1, startCol, endCol);
//       if (endCol === columns) {
//         currRow += 1;
//       }
//     }
//   }
//   images.forEach((img) => {
//     const { rowSpan, colSpan } = img;
//     const toBeColEnd = grid[currRow].length + colSpan;
//     const fitsInCurrRow = toBeColEnd < columns;
//     if (rowSpan === 1) {
//       if (fitsInCurrRow) {
//         grid[currRow].fill(1, currCol, toBeColEnd);
//       } else {
//         const [firstAvailRow, firstAvailCol] = getFirstAvailableSpot();
//         grid[firstAvailRow].fill(1, firstAvailCol, firstAvailCol + colSpan);
//       }
//     }
//     // spans muiltiple rows
//     place(getFirstAvaliableSpot(), rowSpan, colSpan);
//   });
//   const test = gridSizeUnits.map(
//     (val) => `${val.value ? val.value / 2 : val.whole}${val.unit || ''}`
//   );
// }


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
  var isFixedColumns = Number.isInteger(Number(columns));

  function getRowHeight() {
    if (gridHeight) {
      var _gridHeight = (0, _dataweaver.parseSizeUnits)(gridHeight);

      console.log('🚀 ~ file: GridContainer.jsx ~ line 123 ~ getRowHeight ~ _gridHeight', _gridHeight);
      return "".concat(_gridHeight.value / rows).concat(gridHeight.unit);
    }

    return rowHeight || '1fr';
  }

  function getColumnWidth() {
    if (minColWidth && maxColWidth) {
      return "minmax(".concat(minColWidth, ", ").concat(maxColWidth, ")");
    }

    if (maxColWidth) {
      return "minmax(".concat(minColWidth || columnWidth || '1fr', ", ?").concat(maxColWidth, ")");
    }

    return columnWidth || '1fr';
  }

  var imgCount = images && images.length ? images.length : 0;
  var rowCount = Number.isInteger(columns) ? Math.ceil(imgCount / columns) : undefined; // row count unknown if columns is auto-fill or auto-fit
  // fixed columns and rows

  var _rowHeight = getRowHeight(); // columns
  // columnWidth || min max columns


  var gridTemplateColumns = "repeat(".concat(columns, ", ").concat(getColumnWidth(), ")"); // const gridTemplateRows = rowHeight;
  // const gridAutoRows = rowHeight;

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
} // columns (required)
// rowHeight || gridHeight (required)


var GridContainer = function GridContainer(_ref2) {
  var images = _ref2.images,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded);

  console.log('🚀 ~ file: GridContainer.jsx ~ line 64 ~ images', images);

  var _useContext = (0, _react.useContext)(_ImageLoader.ImageLoaderContext),
      isCompletelyLoaded = _useContext.isCompletelyLoaded; // function normalizeAndFlattenAryProps(ary){
  //   let superProps = [];
  //   for(i===0; i< ary.length; i+=1){
  //   }
  // }


  var flattenedProps = (0, _dataweaver.flattenProps)(_objectSpread(_objectSpread({}, props), {}, {
    images: [images]
  }));
  console.log('🚀 ~ file: GridContainer.jsx ~ line 81 ~ flattenedProps', flattenedProps);
  var calculatedProps = (0, _dataweaver.mapFlatProp)(calcProps, (0, _dataweaver.flattenProps)(_objectSpread(_objectSpread({}, props), {}, {
    images: [images]
  })));
  console.log('🚀 ~ file: GridContainer.jsx ~ line 109 ~ GridContainer ~ calculatedProps', calculatedProps);
  var unflattened = (0, _dataweaver.unflattenProps)(calculatedProps);
  console.log('🚀 ~ file: GridContainer.jsx ~ line 115 ~ GridContainer ~ unflattened', unflattened);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(StyledGrid // columns={columns}
  // columnWidth={columnWidth}
  // gridHeight={gridHeight}
  // maxGridWidth={maxGridWidth}
  // rowHeight={_rowHeight}
  // minColWidth={minColWidth}
  // rowWidth={rowWidth}
  , _objectSpread(_objectSpread({}, (0, _dataweaver.unflattenProps)(calculatedProps)), {}, {
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_InlineSpinner["default"], {
      isOpen: !isCompletelyLoaded
    })]
  }));
};

var _default = GridContainer;
exports["default"] = _default;