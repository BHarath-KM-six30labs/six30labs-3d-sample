import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);
    const hasAppeared = useRef(false); 

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAppeared.current) {
                    setIsVisible(true);
                    hasAppeared.current = true; 
                }
            });
        }, options);

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [options]);

    return [observerRef, isVisible];
};

export default useIntersectionObserver;
