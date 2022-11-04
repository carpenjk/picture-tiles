import { getProp } from '@carpenjk/prop-x/css';
import styled from 'styled-components';

export default styled.div`
  position: relative;
  grid-row: auto / span ${getProp('rowSpan')};
  grid-column: auto / span ${getProp('colSpan')};

  > * {
    width: 100%;
    height: 100%;
  }
`;
