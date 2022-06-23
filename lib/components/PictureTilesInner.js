import { useContext } from 'react';
import ImageWrapper from './ImageLoader/ImageWrapper';
import ImgButton from './ImgButton';
import { ImageLoaderContext } from './ImageLoader/ImageLoader';

const PictureTilesInner = ({
  images,
  onPhotoClick
}) => {
  const {
    onLoad
  } = useContext(ImageLoaderContext);
  return /*#__PURE__*/React.createElement(React.Fragment, null, images.map((img, i) => /*#__PURE__*/React.createElement(ImageWrapper, {
    key: i,
    id: i
  }, /*#__PURE__*/React.createElement(ImgButton, {
    type: "button",
    onLoad: () => onLoad(i),
    onClick: () => onPhotoClick(i),
    loading: "lazy",
    src: img.src,
    width: img.width,
    height: img.height,
    alt: "property"
  }))));
};

export default PictureTilesInner;