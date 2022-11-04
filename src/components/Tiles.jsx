import { useRef, useEffect } from 'react';
import { useImageLoader } from './imageLoader/ImageLoader';
import StyledTilesWrapper from './styled/StyledTilesWrapper';
import GridContainer from './GridContainer';
import StyledOverlayButtonWrapper from './styled/StyledOverlayButtonWrapper';

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
    <StyledTilesWrapper gridWidth={gridWidth} maxGridWidth={maxGridWidth}>
      <GridContainer
        gridWidth={gridWidth}
        maxGridWidth={maxGridWidth}
        {...remGridProps}
      >
        {children}
      </GridContainer>
      <StyledOverlayButtonWrapper
        {...buttonPosProps}
        ref={buttonWrapperRef}
        style={{ visibility: 'hidden' }}
      >
        {OverlayButton && OverlayButton}
      </StyledOverlayButtonWrapper>
    </StyledTilesWrapper>
  );
};

export default Tiles;
