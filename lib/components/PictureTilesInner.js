import { useContext } from 'react';
import ImageWrapper from './ImageLoader/ImageWrapper';
import ImgButton from './ImgButton';
import { ImageLoaderContext } from './ImageLoader/ImageLoader';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

const PictureTilesInner = ({
  images,
  onPhotoClick
}) => {
  const {
    onLoad
  } = useContext(ImageLoaderContext);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: images.map((img, i) => /*#__PURE__*/_jsx(ImageWrapper, {
      id: i,
      children: /*#__PURE__*/_jsx(ImgButton, {
        type: "button",
        onLoad: () => onLoad(i),
        onClick: () => onPhotoClick(i),
        loading: "lazy",
        src: img.src,
        width: img.width,
        height: img.height,
        alt: "property"
      })
    }, i))
  });
};

export default PictureTilesInner;