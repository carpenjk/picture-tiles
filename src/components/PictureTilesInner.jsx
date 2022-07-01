import ImageWrapper from './ImageLoader/ImageWrapper';
import ImgButton from './ImgButton';
import { useImageLoader } from './ImageLoader/ImageLoader';
import Tile from './Tile';

const PictureTilesInner = ({ images, onPhotoClick }) => {
  const { onLoad } = useImageLoader();

  return (
    <>
      {images.map((img, i) => (
        <Tile key={i} rowSpan={img.rowSpan} colSpan={img.colSpan}>
          <ImageWrapper id={i}>
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
