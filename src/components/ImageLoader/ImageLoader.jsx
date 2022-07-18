import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react';

const ImageLoaderContext = createContext();
const ImageLoader = ({ children, numImages }) => {
  const [isCompletelyLoaded, setIsCompletelyLoaded] = useState();
  const [images, setImages] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    // reset count when numImages changes
    console.log('reset count');
    setImages({});
  }, [numImages]);
  const onLoad = useCallback((id) => {
    console.log(`onload set count ${id}`);
    setImages((prev) => ({ ...prev, [id]: true }));
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (count >= numImages) {
      setIsCompletelyLoaded(true);
    }
  }, [count, numImages]);
  const value = useMemo(
    () => ({ onLoad, count, isCompletelyLoaded, images }),
    [onLoad, count, isCompletelyLoaded, images]
  );
  return (
    <ImageLoaderContext.Provider value={value}>
      {children}
    </ImageLoaderContext.Provider>
  );
};
function useImageLoader() {
  const context = useContext(ImageLoaderContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { ImageLoader, ImageLoaderContext, useImageLoader };
