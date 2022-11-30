import React, { useRef } from 'react';
import { useImageLoader } from './ImageLoader';
import StyledLoadBackground from './styled/StyledLoadBackground';

const ImageWrapper = ({ children, id }) => {
  const { images } = useImageLoader();
  const elemRef = useRef();
  const isLoaded = images[id];

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <StyledLoadBackground
        ref={elemRef}
        className={isLoaded ? 'isLoaded' : ''}
      />
      {children}
    </div>
  );
};

export default ImageWrapper;
