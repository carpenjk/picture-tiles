import { unwindProps, parseSizeUnits, windProps } from '@carpenjk/prop-x';
import { useImageLoader } from './imageLoader/ImageLoader';
import InlineSpinner from './inlineSpinner/inlineSpinner';
import StyledGrid from './styled/StyledGrid';

function calcProps(props) {
  const {
    columns,
    columnWidth,
    gridHeight,
    gridWidth,
    maxGridWidth,
    rows,
    rowHeight,
    minColWidth,
    maxColWidth,
  } = props;

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
  const _rowHeight = getRowHeight();
  const gridTemplateColumns = `repeat(${columns}, ${getColumnWidth()})`;
  return {
    ...props,
    columns,
    columnWidth,
    gridHeight,
    gridWidth,
    gridTemplateColumns,
    maxGridWidth,
    rowHeight: _rowHeight,
    rows,
    minColWidth,
  };
}

const GridContainer = ({ images, children, ...props }) => {
  const { isCompletelyLoaded } = useImageLoader();
  const calculatedProps = unwindProps({
    ...props,
  }).map((propsAry) => calcProps(propsAry));
  return (
    <StyledGrid {...windProps(calculatedProps)}>
      {children}
      <InlineSpinner isOpen={!isCompletelyLoaded} />
    </StyledGrid>
  );
};

export default GridContainer;
