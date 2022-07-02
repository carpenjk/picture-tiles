import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { getProp } from 'dataweaver';
import GridContainer from './GridContainer';
import { useImageLoader } from './ImageLoader/ImageLoader';

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

const Tiles = ({ children, onOverlayClick, overlayButton, ...props }) => {
  const { isCompletelyLoaded } = useImageLoader();
  const { OverlayButton, ...buttonPosProps } = overlayButton;
  const buttonRef = useRef();

  useEffect(() => {
    if (isCompletelyLoaded) buttonRef.current.style.visibility = 'visible';
  }, [isCompletelyLoaded]);

  return (
    <div style={{ position: 'relative' }}>
      <GridContainer {...props}>{children}</GridContainer>
      <StyledButtonWrapper {...buttonPosProps}>
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
