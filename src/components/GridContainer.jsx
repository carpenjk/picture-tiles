import styled from 'styled-components';
import { breakpoint } from 'themeweaver';
import {
  unwindProps,
  getProp,
  mapProps,
  parseSizeUnits,
  windProps,
} from 'dataweaver';
import InlineSpinner from './inlineSpinner/InlineSpinner';
import { useImageLoader } from './ImageLoader/ImageLoader';

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
  width: ${getProp('width')};
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

    > *:last-child {
      grid-row: unset;
      grid-column: unset;
      max-height: unset;
    }
`}
`;

StyledGrid.defaultProps = {
  width: '100%',
};

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
  function getRowHeight() {
    if (gridHeight) {
      const _gridHeight = parseSizeUnits(gridHeight);
      return `${_gridHeight.value / rows}${_gridHeight.unit}`;
    }
    return rowHeight || '1fr';
  }
  function getColumnWidth() {
    const width = columnWidth || '1fr';
    if (minColWidth && maxColWidth) {
      return `minmax(${minColWidth}, ${maxColWidth})`;
    }
    if (minColWidth) {
      // do something
      return `minmax(${minColWidth}, ${width})`;
    }
    if (maxColWidth) {
      return `minmax(${width}, ?${maxColWidth})`;
    }
    return width;
  }

  const imgCount = images && images.length ? images.length : 0;
  const _rowHeight = getRowHeight();
  const gridTemplateColumns = `repeat(${columns}, ${getColumnWidth()})`;
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

const GridContainer = ({ images, children, ...props }) => {
  const { isCompletelyLoaded } = useImageLoader();
  const calculatedProps = mapProps(
    calcProps,
    unwindProps({
      ...props,
      images: [images],
    })
  );
  return (
    <StyledGrid {...windProps(calculatedProps)}>
      {children}
      <InlineSpinner isOpen={!isCompletelyLoaded} />
    </StyledGrid>
  );
};

export default GridContainer;
