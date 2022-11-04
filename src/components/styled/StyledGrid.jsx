import styled from 'styled-components';
import { getProp, breakpoint } from '@carpenjk/prop-x/css';

const StyledGrid = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: row dense;
  grid-template-rows: ${getProp('rowHeight')};
  grid-auto-rows: ${getProp('rowHeight')};
  grid-template-columns: ${getProp('gridTemplateColumns')};
  justify-items: stretch;
  align-items: stretch;
  height: ${getProp('gridHeight')};
  width: ${getProp('gridWidth')};
  max-width: ${getProp('maxGridWidth')};
  overflow: hidden;

  > *:last-child {
    grid-row: unset;
    grid-column: unset;
    max-height: unset;
  }

  & button {
    width: 100%;
    height: 100%;
  }
  & button > img {
    flex: none;
    object-fit: ${getProp('imageFit')};
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  ${breakpoint(1)`
    display: grid;
    grid-auto-flow: row dense;
    grid-template-rows: ${getProp('rowHeight')};
    grid-auto-rows: ${getProp('rowHeight')};
    grid-template-columns: ${getProp('gridTemplateColumns')};
    justify-items: stretch;
    align-items: stretch;
    height: ${getProp('gridHeight')};
    width: ${getProp('gridWidth')};
    max-width: ${getProp('maxGridWidth')};
    & button > img {
      object-fit: ${getProp('imageFit')};
    }
    > *:last-child {
      grid-row: unset;
      grid-column: unset;
      max-height: unset;
    }
`}
`;

StyledGrid.defaultProps = {
  gridWidth: '100%',
};

export default StyledGrid;
