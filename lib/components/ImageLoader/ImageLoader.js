import { createContext, useEffect, useState } from 'react';
const ImageLoaderContext = /*#__PURE__*/createContext();

const ImageLoader = ({
  children,
  numImages
}) => {
  const [isCompletelyLoaded, setIsCompletelyLoaded] = useState();
  const [images, setImages] = useState({});
  const [count, setCount] = useState(0);

  function onLoad(id) {
    setImages(prev => ({ ...prev,
      [id]: true
    }));
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    if (count >= numImages) setIsCompletelyLoaded(true);
  }, [count, numImages]);
  return /*#__PURE__*/React.createElement(ImageLoaderContext.Provider, {
    value: {
      onLoad,
      count,
      isCompletelyLoaded,
      images
    }
  }, children);
};

export { ImageLoader, ImageLoaderContext };