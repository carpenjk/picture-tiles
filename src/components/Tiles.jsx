import styled from 'styled-components';
import { useRef, useEffect, useMemo } from 'react';
import GridContainer from './GridContainer';
import { useImageLoader } from './ImageLoader/ImageLoader';

const StyledButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
const Tiles = ({ children, onOverlayClick, overlayButton, ...props }) => {
  const { isCompletelyLoaded } = useImageLoader();
  const OverlayButton = useMemo(() => overlayButton, [overlayButton]);
  const buttonRef = useRef();

  useEffect(() => {
    if (isCompletelyLoaded) buttonRef.current.style.visibility = 'visible';
  }, [isCompletelyLoaded]);

  return (
    <div style={{ position: 'relative' }}>
      <GridContainer {...props}>{children}</GridContainer>
      <StyledButtonWrapper>
        <OverlayButton
          ref={buttonRef}
          style={{ visibility: 'hidden' }}
          onClick={onOverlayClick}
        >
          More Photos
        </OverlayButton>
      </StyledButtonWrapper>
    </div>
  );
};

export default Tiles;
