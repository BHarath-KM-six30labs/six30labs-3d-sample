import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaYoutube } from "react-icons/fa";

const ScrollAdjustedText = () => {
  const [scrollY, setScrollY] = useState(0);
  const specialSectionRef = useRef(null);
  const [specialTextPosition, setSpecialTextPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (specialSectionRef.current) {
        const rect = specialSectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;

        // Calculate the middle of the section
        const sectionMiddle = sectionHeight / 2;
        // Calculate 10% of the section height
        const tenPercent = sectionHeight * 0.17;
        //    console.log(first)
        // Start position: 10% above the middle
        const startPosition = sectionMiddle - tenPercent;
        // End position: 10% below the middle
        const endPosition = sectionMiddle + tenPercent;

        if (
          sectionTop <= viewportHeight / 2 - startPosition &&
          sectionTop >= viewportHeight / 2 - endPosition
        ) {
          setSpecialTextPosition(
            viewportHeight / 2 - sectionTop - startPosition
          );
        } else if (sectionTop > viewportHeight / 2 - startPosition) {
          setSpecialTextPosition(0);
        } else {
          setSpecialTextPosition(endPosition - startPosition);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="mx-auto">
        <section
          ref={specialSectionRef}
          className="relative bg-[#1B1212] p-6 rounded-lg shadow-md h-[700px] cursor-default select-none"
        >
          <div
            className="absolute left-6 right-6 transition-transform duration-700 ease-out"
            style={{ transform: `translateY(${specialTextPosition}px)` }}
          >
            <p className="text-7xl font-medium text-white grid place-items-center mt-[13%]">
              Six30labs
            </p>
          </div>
          <button className="bg-white z-10 absolute rounded-lg  p-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaPlay size={80} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ScrollAdjustedText;
