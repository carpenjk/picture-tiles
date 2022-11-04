import StyledTile from './styled/StyledTile';

const Tile = ({ children, rowSpan, colSpan }) => (
  <StyledTile rowSpan={rowSpan} colSpan={colSpan}>
    {children}
  </StyledTile>
);

export default Tile;
