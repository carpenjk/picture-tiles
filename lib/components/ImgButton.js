function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import styled from 'styled-components';
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
}) => /*#__PURE__*/React.createElement(StyledImgButton, {
  onClick: onClick,
  type: type
}, /*#__PURE__*/React.createElement("img", _extends({
  alt: alt
}, imgProps)));

export default ImgButton;