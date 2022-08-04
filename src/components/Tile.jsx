import { getProp } from '@carpenjk/prop-x/css';
import styled from 'styled-components';

const StyledTile = styled.div`
  position: relative;
  grid-row: auto / span ${getProp('rowSpan')};
  grid-column: auto / span ${getProp('colSpan')};

  > * {
    width: 100%;
    height: 100%;
  }
`;
const Tile = ({ children, rowSpan, colSpan }) => (
  <StyledTile rowSpan={rowSpan} colSpan={colSpan}>
    {children}
  </StyledTile>
);

export default Tile;
