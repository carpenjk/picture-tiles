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
    images,
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
  const imgCount = images && images.length ? images.length : 0;
  const _rowHeight = getRowHeight();
  const gridTemplateColumns = `repeat(${columns}, ${getColumnWidth()})`;
  return {
    ...props,
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
  };
}

const GridContainer = ({ images, children, ...props }) => {
  const { isCompletelyLoaded } = useImageLoader();
  const calculatedProps = unwindProps({ ...props, images }).map((propsAry) =>
    calcProps(propsAry)
  );
  return (
    <StyledGrid {...windProps(calculatedProps)}>
      {children}
      <InlineSpinner isOpen={!isCompletelyLoaded} />
    </StyledGrid>
  );
};

export default GridContainer;
