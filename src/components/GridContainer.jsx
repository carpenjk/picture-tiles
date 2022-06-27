import styled from 'styled-components';
import { breakpoint } from 'themeweaver';
import { flattenProps, getProp, parseSizeUnits } from 'dataweaver';
import { useContext } from 'react';
import InlineSpinner from './inlineSpinner/InlineSpinner';
import { ImageLoaderContext } from './ImageLoader/ImageLoader';

const StyledGrid = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${getProp('gridHeight')};
  max-width: ${getProp('maxWidth')};
  overflow: hidden;

  & button {
    width: 100%;
    height: 100%;
  }
  & button > img {
    flex: none;
    object-fit: cover;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  ${breakpoint(1)`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(${({ colCount }) => colCount}, 1fr);
    justify-items: stretch;
    align-items: stretch;
    width: 100%;
    height: ${getProp('gridHeight')};
    max-width: ${getProp('maxWidth')};

    > *:first-child {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;
    }
    > *:not(:first-child) {
      grid-row: auto / span 1;
      grid-column: auto / span 1;
      max-height: ${getProp('rowHeight')};
    }
    > *:last-child {
      grid-row: unset;
      grid-column: unset;
      max-height: unset;
    }
`}
`;
const GridContainer = ({
  columns,
  columnWidth,
  gridHeight,
  images,
  maxGridWidth,
  rowHeight,
  minColWidth,
  rowWidth,
  children,
}) => {
  const { isCompletelyLoaded } = useContext(ImageLoaderContext);
  // function normalizeAndFlattenAryProps(ary){
  //   let superProps = [];
  //   for(i===0; i< ary.length; i+=1){

  //   }
  // }
  const flattenedProps = flattenProps({
    columns,
    columnWidth,
    gridHeight,
    images,
    maxGridWidth,
    rowHeight,
    minColWidth,
    rowWidth,
  });
  console.log(
    '🚀 ~ file: GridContainer.jsx ~ line 81 ~ flattenedProps',
    flattenedProps
  );
  const imgCount = images.length;
  const rowCount = Number.isInteger(columns) ? imgCount / columns : undefined; // row count unknown if columns is auto-fill or auto-fit

  function calcRowHeightFromGrid(gridHeight) {}
  const _rowHeight = gridHeight
    ? parseSizeUnits(gridHeight).map(
        (val) => `${val.value ? val.value / 2 : val.whole}${val.unit || ''}`
      )
    : rowHeight;
  return (
    <StyledGrid
      columns={columns}
      columnWidth={columnWidth}
      gridHeight={gridHeight}
      maxGridWidth={maxGridWidth}
      rowHeight={_rowHeight}
      minColWidth={minColWidth}
      rowWidth={rowWidth}
    >
      {children}
      <InlineSpinner isOpen={!isCompletelyLoaded} />
    </StyledGrid>
  );
};

export default GridContainer;
