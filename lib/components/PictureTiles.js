"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tiles = _interopRequireDefault(require("./Tiles"));

var _PictureTilesInner = _interopRequireDefault(require("./PictureTilesInner"));

var _ImageLoader = require("./ImageLoader/ImageLoader");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_OPTIONS = {
  imgProps: {
    large: {
      width: 800,
      height: 533,
      fit: 'fill'
    },
    small: {
      width: 500,
      height: 333,
      fit: 'fill'
    }
  },
  numDisplayedMap: [1, 1, 3, 3, 5]
};

var PictureTiles = function PictureTiles(_ref) {
  var images = _ref.images,
      onOverlayClick = _ref.onOverlayClick,
      onPhotoClick = _ref.onPhotoClick,
      options = _ref.options;
  console.log('🚀 ~ file: PictureTiles.js ~ line 22 ~ PictureTiles ~ overlayButton', 'hello?'); // mapping determines how many images to display based on provided number of images

  var _options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);

  var numDisplayedMap = _options.numDisplayedMap,
      gridHeight = _options.gridHeight;
  var pCountLookup = images.length > numDisplayedMap.length ? numDisplayedMap.length - 1 : images.length - 1;
  var pCount = numDisplayedMap[pCountLookup];

  function getUrl(img, defaults, i) {
    var small = defaults.small,
        large = defaults.large;

    if (i === 0) {
      return "".concat(img, "?fit=").concat(large.fit, "&w=").concat(large.width, "&h=").concat(large.height);
    }

    return "".concat(img, "?fit=").concat(small.fit, "&w=").concat(small.width, "&h=").concat(small.height);
  }

  function getImgProps() {
    // get subset of images to display in tiles
    var displayImgs = images.slice(0, pCount);
    var _options$imgProps = _options.imgProps,
        small = _options$imgProps.small,
        large = _options$imgProps.large;
    var iProps = displayImgs.map(function (img, i) {
      return {
        src: getUrl(img, _options.imgProps, i),
        width: i === 0 ? large.width : small.width,
        height: i === 0 ? large.height : small.height
      };
    });
    return iProps;
  }

  var imgProps = getImgProps();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImageLoader.ImageLoader, {
    numImages: pCount,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tiles["default"], {
      imgCount: pCount,
      onOverlayClick: onOverlayClick,
      gridHeight: gridHeight // overlayButton={overlayButton}
      ,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PictureTilesInner["default"], {
        onPhotoClick: onPhotoClick,
        images: imgProps
      })
    })
  });
};

var _default = PictureTiles;
exports["default"] = _default;