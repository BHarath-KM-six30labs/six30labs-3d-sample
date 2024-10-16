import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => [setwidth(window.innerWidth)];
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, []);

  return width;
};
