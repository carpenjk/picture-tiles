import StyledImgButton from './styled/StyledImgButton';

const ImgButton = ({ onClick, type, alt, ...imgProps }) => (
  <StyledImgButton onClick={onClick} type={type}>
    <img alt={alt} {...imgProps} />
  </StyledImgButton>
);

export default ImgButton;
