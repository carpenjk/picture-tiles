import styled from 'styled-components';
import { breakpoint, getProp } from '@carpenjk/prop-x/css';
import { MAX_BREAKPOINT } from '../../globals';

const StyledOverlayButtonWrapper = styled.div`
  position: absolute;
  ${breakpoint([0, MAX_BREAKPOINT])`
    top: ${getProp('top')};
    right: ${getProp('right')};
    bottom: ${getProp('bottom')};
    left: ${getProp('left')};  
  `}
`;

StyledOverlayButtonWrapper.defaultProps = {
  bottom: '20px',
  right: '20px',
  top: 'auto',
  left: 'auto',
};

export default StyledOverlayButtonWrapper;
