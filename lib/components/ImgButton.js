import styled from 'styled-components';
import { jsx as _jsx } from "react/jsx-runtime";
const StyledImgButton = styled.button`
  position: relative;
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
`;

const ImgButton = ({
  onClick,
  type,
  alt,
  ...imgProps
}) => /*#__PURE__*/_jsx(StyledImgButton, {
  onClick: onClick,
  type: type,
  children: /*#__PURE__*/_jsx("img", {
    alt: alt,
    ...imgProps
  })
});

export default ImgButton;