import { createContext, useEffect, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
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
  return /*#__PURE__*/_jsx(ImageLoaderContext.Provider, {
    value: {
      onLoad,
      count,
      isCompletelyLoaded,
      images
    },
    children: children
  });
};

export { ImageLoader, ImageLoaderContext };