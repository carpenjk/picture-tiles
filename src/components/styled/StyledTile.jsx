import { breakpoint, getProp } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import { MAX_BREAKPOINT } from '../../globals';

export default styled.div`
  position: relative;
  grid-row: auto / span ${getProp('rowSpan')};
  grid-column: auto / span ${getProp('colSpan')};

  > * {
    width: 100%;
    height: 100%;
  }
  ${breakpoint([0, MAX_BREAKPOINT])`
    grid-row: auto / span ${getProp('rowSpan')};
    grid-column: auto / span ${getProp('colSpan')};
  `}
`;
