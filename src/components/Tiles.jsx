import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { getProp } from 'dataweaver';
import GridContainer from './GridContainer';
import { useImageLoader } from './ImageLoader/ImageLoader';

const StyledTileWrapper = styled.div`
  position: relative;
  width: ${getProp('width')};
  gridwidth: ${getProp('gridWidth')};
`;
const StyledButtonWrapper = styled.div`
  position: absolute;
  top: ${getProp('top')};
  right: ${getProp('right')};
  bottom: ${getProp('bottom')};
  left: ${getProp('left')};
`;

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
  width,
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
    <StyledTileWrapper width={width} gridWidth={gridWidth}>
      <GridContainer width={width} gridWidth={gridWidth} {...remGridProps}>
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
