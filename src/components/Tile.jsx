import { getProp } from 'dataweaver';
import styled from 'styled-components';

const StyledTile = styled.div`
  position: relative;
  grid-row: auto / ${getProp('rowSpan')};
  grid-column: auto / ${getProp('rowSpan')};

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
