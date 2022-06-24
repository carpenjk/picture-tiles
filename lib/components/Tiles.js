import styled from 'styled-components';
import { useRef, useEffect, useContext, useMemo } from 'react';
import GridContainer from './GridContainer'; // import OverlayNavButton from '../../base/OverlayNavButton';

import { ImageLoaderContext } from './ImageLoader/ImageLoader';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
  return /*#__PURE__*/_jsxs("div", {
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/_jsx(GridContainer, {
      colCount: colCount,
      gridHeight: gridHeight,
      maxWidth: maxWidth,
      children: children
    }), /*#__PURE__*/_jsx(StyledButtonWrapper, {
      children: /*#__PURE__*/_jsx(OverlayButton, {
        ref: buttonRef,
        style: {
          visibility: 'hidden'
        },
        onClick: onOverlayClick,
        children: "More Photos"
      })
    })]
  });
};

export default Tiles;