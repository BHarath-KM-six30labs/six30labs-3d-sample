import { useEffect, useState } from 'react';

export const useWindoHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWidth = () => [setHeight(window.innerHeight)];
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, []);

  return height;
};
