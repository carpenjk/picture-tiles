"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UseBreakpoints = require("themeweaver/lib/UseBreakpoints");

var _styledComponents = require("styled-components");

var _react = require("react");

var _ImageWrapper = _interopRequireDefault(require("./ImageLoader/ImageWrapper"));

var _ImgButton = _interopRequireDefault(require("./ImgButton"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _Tile = _interopRequireDefault(require("./Tile"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PictureTilesInner = function PictureTilesInner(_ref) {
  var images = _ref.images,
      onPhotoClick = _ref.onPhotoClick;

  var _useImageLoader = (0, _ImageLoader.useImageLoader)(),
      _onLoad = _useImageLoader.onLoad;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext);
  var br = (0, _UseBreakpoints.useBreakpoints)(theme);
  var currBrIndex = images[br.indexOfLower] ? br.indexOfLower : images.length - 1;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: images[currBrIndex].map(function (img, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tile["default"], {
        rowSpan: img.rowSpan,
        colSpan: img.colSpan,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageWrapper["default"], {
          id: i,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImgButton["default"], {
            type: "button",
            onLoad: function onLoad() {
              return _onLoad(i);
            },
            onClick: function onClick() {
              return onPhotoClick(i);
            },
            loading: "lazy",
            src: img.src,
            width: img.width,
            height: img.height,
            alt: "property"
          })
        })
      }, i);
    })
  });
};

var _default = PictureTilesInner;
exports["default"] = _default;