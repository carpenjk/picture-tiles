import styled from 'styled-components';
import { getProp } from '@carpenjk/prop-x/css';

const StyledOverlayButtonWrapper = styled.div`
  position: absolute;
  top: ${getProp('top')};
  right: ${getProp('right')};
  bottom: ${getProp('bottom')};
  left: ${getProp('left')};
`;

StyledOverlayButtonWrapper.defaultProps = {
  bottom: '20px',
  right: '20px',
  top: 'auto',
  left: 'auto',
};

export default StyledOverlayButtonWrapper;
