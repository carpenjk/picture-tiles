"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataweaver = require("dataweaver");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTile = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  grid-row: auto / span ", ";\n  grid-column: auto / span ", ";\n\n  > * {\n    width: 100%;\n    height: 100%;\n  }\n"])), (0, _dataweaver.getProp)('rowSpan'), (0, _dataweaver.getProp)('colSpan'));

var Tile = function Tile(_ref) {
  var children = _ref.children,
      rowSpan = _ref.rowSpan,
      colSpan = _ref.colSpan;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledTile, {
    rowSpan: rowSpan,
    colSpan: colSpan,
    children: children
  });
};

var _default = Tile;
exports["default"] = _default;