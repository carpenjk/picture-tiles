import styled from 'styled-components';
import { breakpoint } from 'themeweaver';
import {
  flattenProps,
  getProp,
  mapFlatProp,
  parseSizeUnits,
  unflattenProps,
} from 'dataweaver';
import { useContext } from 'react';
import InlineSpinner from './inlineSpinner/InlineSpinner';
import { ImageLoaderContext } from './ImageLoader/ImageLoader';

const StyledGrid = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${getProp('gridHeight')};
  max-width: ${getProp('maxGridWidth')};
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
    grid-auto-flow: row dense;
    grid-template-rows: ${getProp('rowHeight')};
    grid-auto-rows: ${getProp('rowHeight')};
    grid-template-columns: ${getProp('gridTemplateColumns')};
    justify-items: stretch;
    align-items: stretch;
    height: ${getProp('gridHeight')};
    width: ${getProp('width')};
    max-width: ${getProp('maxGridWidth')};

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

// function calcRowHeightFromGrid(gridHeight, columns, images) {
//   if (columns === 'auto-fit' || columns === 'auto-fill') {
//     // do not use gridHeight if not fixed number of columns
//     return;
//   }
//   const gridSizeUnits = parseSizeUnits(gridHeight);
//   const grid = [[]]; // [[1,1,1,...], [...]]
//   let currRow = 0;
//   // let currCol = 0;

//   function getFirstAvailableSpot() {}

//   function place([startRow, startCol], rowSpan, colSpan) {
//     const endCol = startCol + colSpan;
//     for (let i = 0; i < rowSpan; i += 1) {
//       grid[startRow + i].fill(1, startCol, endCol);
//       if (endCol === columns) {
//         currRow += 1;
//       }
//     }
//   }

//   images.forEach((img) => {
//     const { rowSpan, colSpan } = img;
//     const toBeColEnd = grid[currRow].length + colSpan;
//     const fitsInCurrRow = toBeColEnd < columns;
//     if (rowSpan === 1) {
//       if (fitsInCurrRow) {
//         grid[currRow].fill(1, currCol, toBeColEnd);
//       } else {
//         const [firstAvailRow, firstAvailCol] = getFirstAvailableSpot();
//         grid[firstAvailRow].fill(1, firstAvailCol, firstAvailCol + colSpan);
//       }
//     }
//     // spans muiltiple rows
//     place(getFirstAvaliableSpot(), rowSpan, colSpan);
//   });

//   const test = gridSizeUnits.map(
//     (val) => `${val.value ? val.value / 2 : val.whole}${val.unit || ''}`
//   );
// }

function calcProps({
  columns,
  columnWidth,
  gridHeight,
  gridWidth,
  images,
  maxGridWidth,
  rows,
  rowHeight,
  minColWidth,
  maxColWidth,
  rowWidth,
}) {
  const isFixedColumns = Number.isInteger(Number(columns));

  function getRowHeight() {
    const _gridHeight = gridHeight ? parseSizeUnits(gridHeight) : undefined;
    if (rowHeight) return rowHeight;
    return gridHeight ? `${_gridHeight.value / rows}${gridHeight.unit}` : '1fr';
  }
  function getColumnWidth() {
    if (minColWidth && maxColWidth) {
      return `minmax(${minColWidth}, ${maxColWidth})`;
    }
    if (maxColWidth) {
      return `minmax(${minColWidth || columnWidth || '1fr'}, ?${maxColWidth})`;
    }
    return columnWidth || '1fr';
  }

  const imgCount = images && images.length ? images.length : 0;

  const rowCount = Number.isInteger(columns)
    ? Math.ceil(imgCount / columns)
    : undefined; // row count unknown if columns is auto-fill or auto-fit

  // fixed columns and rows
  const _rowHeight = getRowHeight();
  // columns
  // columnWidth || min max columns

  const gridTemplateColumns = `repeat(${columns}, ${getColumnWidth()})`;
  // const gridTemplateRows = rowHeight;
  // const gridAutoRows = rowHeight;
  return {
    columns,
    columnWidth,
    gridHeight,
    gridWidth,
    gridTemplateColumns,
    images,
    imgCount,
    maxGridWidth,
    rowHeight: _rowHeight,
    rows,
    minColWidth,
    rowWidth,
  };
}

// columns (required)
// rowHeight || gridHeight (required)
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

  const unflattened = unflattenProps(calculatedProps);
  console.log(
    '🚀 ~ file: GridContainer.jsx ~ line 115 ~ GridContainer ~ unflattened',
    unflattened
  );

  return (
    <StyledGrid
      // columns={columns}
      // columnWidth={columnWidth}
      // gridHeight={gridHeight}
      // maxGridWidth={maxGridWidth}
      // rowHeight={_rowHeight}
      // minColWidth={minColWidth}
      // rowWidth={rowWidth}
      {...unflattenProps(calculatedProps)}
    >
      {children}
      <InlineSpinner isOpen={!isCompletelyLoaded} />
    </StyledGrid>
  );
};

export default GridContainer;
