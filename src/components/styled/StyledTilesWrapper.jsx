import styled from 'styled-components';
import { getProp, breakpoint } from '@carpenjk/prop-x/css';

const StyledTilesWrapper = styled.div`
  position: relative;
  width: ${getProp('gridWidth')};
  max-width: ${getProp('maxGridWidth')};
  ${breakpoint(1)`
    width: ${getProp('gridWidth')};
    max-width: ${getProp('maxGridWidth')};
  `}
`;

StyledTilesWrapper.defaultProps = {
  gridWidth: '100%',
};

export default StyledTilesWrapper;
