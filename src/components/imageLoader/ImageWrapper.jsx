import React, { useRef } from 'react';
import { useImageLoader } from './ImageLoader';
import StyledLoadBackground from './styled/StyledLoadBackground';

const ImageWrapper = ({ children, id }) => {
  const { images } = useImageLoader();
  const elemRef = useRef();
  const isLoaded = images[id];
  const handleTransitionEnd = () => {
    elemRef.current.style.display = 'none';
  };

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      {children}
      <StyledLoadBackground
        ref={elemRef}
        onTransitionEnd={handleTransitionEnd}
        className={isLoaded ? 'isLoaded' : ''}
      />
    </div>
  );
};

export default ImageWrapper;
