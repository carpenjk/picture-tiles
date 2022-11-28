import StyledImgButton from './styled/StyledImgButton';

const ImgButton = ({ onClick, type, hide, alt, ...imgProps }) => (
  <StyledImgButton
    onClick={onClick}
    type={type}
    display={hide ? 'none' : 'inline-block'}
  >
    <img alt={alt} {...imgProps} />
  </StyledImgButton>
);

export default ImgButton;
