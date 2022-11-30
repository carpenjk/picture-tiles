import StyledImgButton from './styled/StyledImgButton';

const ImgButton = ({ onClick, type, hide, alt, ...imgProps }) => {
  const hideAry = Array.isArray(hide) ? hide : [hide];
  const display = hideAry.map((h) => (h ? 'none' : 'inline-block'));

  return (
    <StyledImgButton onClick={onClick} type={type} display={display}>
      <img alt={alt} {...imgProps} />
    </StyledImgButton>
  );
};

export default ImgButton;
