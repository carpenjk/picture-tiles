import styled from 'styled-components';
import { getProp, breakpoint } from '@carpenjk/prop-x/css';
import { MAX_BREAKPOINT } from '../../globals';

const StyledTilesWrapper = styled.div`
  position: relative;
  ${breakpoint([0, MAX_BREAKPOINT])`
    width: ${getProp('gridWidth')};
    max-width: ${getProp('maxGridWidth')};
  `}
`;

StyledTilesWrapper.defaultProps = {
  gridWidth: '100%',
};

export default StyledTilesWrapper;
