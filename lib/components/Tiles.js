import styled from 'styled-components';
import { useRef, useEffect, useContext, useCallback } from 'react';
import GridContainer from './GridContainer'; // import OverlayNavButton from '../../base/OverlayNavButton';

import { ImageLoaderContext } from './ImageLoader/ImageLoader';
const StyledButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const Tiles = ({
  children,
  imgCount,
  onOverlayClick,
  gridHeight = ['auto', '500px'],
  maxWidth = ['none', '1300px'],
  overlaybutton
}) => {
  const {
    isCompletelyLoaded
  } = useContext(ImageLoaderContext);
  const OverlayButton = useMemo(() => overlayButton, [overlaybutton]);
  const buttonRef = useRef(); // const imgCount = children.length ? children.length : 0;

  const smallSquares = imgCount - 1; // Hard coded to 2 rows with first image taking up the first 2 rows and cols
  // remaining images fill the grid across rows

  const colCount = imgCount !== 1 ? smallSquares / 2 + 2 : 2;
  useEffect(() => {
    if (isCompletelyLoaded) buttonRef.current.style.visibility = 'visible';
  }, [isCompletelyLoaded]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(GridContainer, {
    colCount: colCount,
    gridHeight: gridHeight,
    maxWidth: maxWidth
  }, children), /*#__PURE__*/React.createElement(StyledButtonWrapper, null, /*#__PURE__*/React.createElement(OverlayButton, {
    ref: buttonRef,
    style: {
      visibility: 'hidden'
    },
    onClick: onOverlayClick
  }, "More Photos")));
};

export default Tiles;