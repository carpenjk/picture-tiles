"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ImageWrapper = _interopRequireDefault(require("./ImageLoader/ImageWrapper"));

var _ImgButton = _interopRequireDefault(require("./ImgButton"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _Tile = _interopRequireDefault(require("./Tile"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PictureTilesInner = function PictureTilesInner(_ref) {
  var images = _ref.images,
      onPhotoClick = _ref.onPhotoClick;
  console.log('🚀 ~ file: PictureTilesInner.jsx ~ line 7 ~ PictureTilesInner ~ images', images);

  var _useImageLoader = (0, _ImageLoader.useImageLoader)(),
      _onLoad = _useImageLoader.onLoad;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: images.map(function (img, i) {
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