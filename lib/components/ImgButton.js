"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _excluded = ["onClick", "type", "alt"];

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledImgButton = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 0;\n  border: none;\n  outline: none;\n  font: inherit;\n  color: inherit;\n  background: none;\n  cursor: pointer;\n"])));

var ImgButton = function ImgButton(_ref) {
  var onClick = _ref.onClick,
      type = _ref.type,
      alt = _ref.alt,
      imgProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledImgButton, {
    onClick: onClick,
    type: type
  }, /*#__PURE__*/React.createElement("img", _extends({
    alt: alt
  }, imgProps)));
};

var _default = ImgButton;
exports["default"] = _default;