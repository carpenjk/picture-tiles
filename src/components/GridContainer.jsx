import styled from 'styled-components';
import { breakpoint } from 'themeweaver';
import { flattenProps, getProp, mapFlatProp, parseSizeUnits } from 'dataweaver';
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

function calcProps({
  columns,
  columnWidth,
  gridHeight,
  images,
  maxGridWidth,
  rowHeight,
  minColWidth,
  rowWidth,
}) {
  const imgCount = images && images.length ? images.length : 0;
  const rowCount = Number.isInteger(columns) ? imgCount / columns : undefined; // row count unknown if columns is auto-fill or auto-fit
  const _rowHeight = gridHeight
    ? parseSizeUnits(gridHeight).map(
        (val) => `${val.value ? val.value / 2 : val.whole}${val.unit || ''}`
      )
    : rowHeight;
  return {
    columns,
    columnWidth,
    gridHeight,
    images,
    imgCount,
    maxGridWidth,
    rowHeight: _rowHeight,
    rowCount,
    minColWidth,
    rowWidth,
  };
}
const GridContainer = ({ images, children, ...props }) => {
  console.log('🚀 ~ file: GridContainer.jsx ~ line 64 ~ images', images);
  const { isCompletelyLoaded } = useContext(ImageLoaderContext);
  // function normalizeAndFlattenAryProps(ary){
  //   let superProps = [];
  //   for(i===0; i< ary.length; i+=1){

  //   }
  // }
  const flattenedProps = flattenProps({
    ...props,
    images: [images],
  });
  console.log(
    '🚀 ~ file: GridContainer.jsx ~ line 81 ~ flattenedProps',
    flattenedProps
  );

  const calculatedProps = mapFlatProp(
    calcProps,
    flattenProps({
      ...props,
      images: [images],
    })
  );
  console.log(
    '🚀 ~ file: GridContainer.jsx ~ line 109 ~ GridContainer ~ calculatedProps',
    calculatedProps
  );

  function calcRowHeightFromGrid(gridHeight) {}

  return (
    <StyledGrid
    // columns={columns}
    // columnWidth={columnWidth}
    // gridHeight={gridHeight}
    // maxGridWidth={maxGridWidth}
    // rowHeight={_rowHeight}
    // minColWidth={minColWidth}
    // rowWidth={rowWidth}
    >
      {children}
      <InlineSpinner isOpen={!isCompletelyLoaded} />
    </StyledGrid>
  );
};

export default GridContainer;
