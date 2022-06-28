import { useContext } from 'react';
import ImageWrapper from './ImageLoader/ImageWrapper';
import ImgButton from './ImgButton';
import { ImageLoaderContext } from './ImageLoader/ImageLoader';
import Tile from './Tile';

const PictureTilesInner = ({ images, onPhotoClick }) => {
  const { onLoad } = useContext(ImageLoaderContext);

  return (
    <>
      {images.map((img, i) => (
        <Tile rowSpan={img.rowSpan} colSpan={img.colSpan}>
          <ImageWrapper key={i} id={i}>
            <ImgButton
              type="button"
              onLoad={() => onLoad(i)}
              onClick={() => onPhotoClick(i)}
              loading="lazy"
              src={img.src}
              width={img.width}
              height={img.height}
              alt="property"
            />
          </ImageWrapper>
        </Tile>
      ))}
    </>
  );
};

export default PictureTilesInner;
