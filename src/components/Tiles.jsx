import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { getProp } from 'prop-x';
import { breakpoint } from 'prop-x/css';
import GridContainer from './GridContainer';
import { useImageLoader } from './ImageLoader/ImageLoader';

const StyledTileWrapper = styled.div`
  position: relative;
  width: ${getProp('gridWidth')};
  max-width: ${getProp('maxGridWidth')};
  ${breakpoint(1)`
    width: ${getProp('gridWidth')};
    max-width: ${getProp('maxGridWidth')};
  `}
`;
const StyledButtonWrapper = styled.div`
  position: absolute;
  top: ${getProp('top')};
  right: ${getProp('right')};
  bottom: ${getProp('bottom')};
  left: ${getProp('left')};
`;

StyledTileWrapper.defaultProps = {
  gridWidth: '100%',
};

StyledButtonWrapper.defaultProps = {
  bottom: '20px',
  right: '20px',
  top: 'auto',
  left: 'auto',
};

const Tiles = ({
  children,
  onOverlayClick,
  overlayButton,
  gridWidth,
  maxGridWidth,
  ...remGridProps
}) => {
  const { isCompletelyLoaded } = useImageLoader();
  const { OverlayButton, ...buttonPosProps } = overlayButton || {};
  const buttonWrapperRef = useRef();

  useEffect(() => {
    if (isCompletelyLoaded)
      buttonWrapperRef.current.style.visibility = 'visible';
  }, [isCompletelyLoaded]);

  return (
    <StyledTileWrapper gridWidth={gridWidth} maxGridWidth={maxGridWidth}>
      <GridContainer
        gridWidth={gridWidth}
        maxGridWidth={maxGridWidth}
        {...remGridProps}
      >
        {children}
      </GridContainer>
      <StyledButtonWrapper
        {...buttonPosProps}
        ref={buttonWrapperRef}
        style={{ visibility: 'hidden' }}
      >
        {OverlayButton && OverlayButton}
      </StyledButtonWrapper>
    </StyledTileWrapper>
  );
};

export default Tiles;
