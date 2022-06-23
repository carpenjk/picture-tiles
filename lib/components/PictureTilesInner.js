"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _ImageWrapper = _interopRequireDefault(require("./ImageLoader/ImageWrapper"));

var _ImgButton = _interopRequireDefault(require("./ImgButton"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PictureTilesInner = function PictureTilesInner(_ref) {
  var images = _ref.images,
      onPhotoClick = _ref.onPhotoClick;

  var _useContext = (0, _react.useContext)(_ImageLoader.ImageLoaderContext),
      _onLoad = _useContext.onLoad;

  return /*#__PURE__*/React.createElement(React.Fragment, null, images.map(function (img, i) {
    return /*#__PURE__*/React.createElement(_ImageWrapper["default"], {
      key: i,
      id: i
    }, /*#__PURE__*/React.createElement(_ImgButton["default"], {
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
    }));
  }));
};

var _default = PictureTilesInner;
exports["default"] = _default;