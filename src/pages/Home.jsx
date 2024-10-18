import React, { useRef, useEffect, useState } from "react";
import cards from "./constant";
import ComponentSvg1 from "./ComponentSvg1";
import ComponentSvg2 from "./ComponentSvg2";
import Carousel from "./Carousel";
import { useWindowWidth } from "../utils/hooks/useWindowWidth";
import ScrollAdjustedText from "./ScrollAdjustedText";

const Card = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="flex bg-white shadow-md  rounded-lg overflow-hidden w-screen h-screen items-center justify-center">
      {/* <img src={imageSrc} alt={altText} className="w-1/3 h-auto object-cover" /> */}
      <ComponentSvg1 />
      <div className="p-4 w-2/3">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default function Home() {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const [scrollingProgress, setScrollingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const horizontalSection = horizontalRef.current;

      if (container && horizontalSection) {
        const { top, height } = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollableHeight = height - windowHeight;

        // Start scrolling only when the horizontal section reaches the top
        if (top <= 0 && top >= -scrollableHeight) {
          const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
          setScrollingProgress(progress);
        } else if (top > 0) {
          setScrollingProgress(0);
        } else {
          setScrollingProgress(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const width = useWindowWidth();
  console.log(width, "width");
  return (
    <div className="font-sans">
      {/* Vertical Scroll Section */}
      <section
        className={`flex    p-8 ${
          width < 1050 ? "flex-col mb-10" : "h-screen"
        }`}
      >
        <div className="flex flex-col flex-1 items-center justify-center ">
          <h2 className="text-3xl font-bold mb-4">Vertical Scroll Section</h2>
          <p className="mb-4 ">This section scrolls vertically as normal.</p>
          <p className="text-center">
            Keep scrolling down to see the horizontal section.
          </p>
        </div>
        <div
          className={`flex-col flex-1 ${
            width < 1050 ? "flex mt-20  mx-auto w-52 h-52  " : ""
          }`}
        >
          <ComponentSvg2 />
        </div>
      </section>

      {/* Horizontal Scroll Section Container */}
      {width < 1050 ? (
        <div className="mb-20">
          <Carousel />
        </div>
      ) : (
        <>
          <div
            ref={containerRef}
            style={{ height: "400vh" }}
            className="relative"
          >
            <div
              ref={horizontalRef}
              className="sticky top-0 h-screen overflow-hidden"
            >
              <div
                className="flex transition-transform duration-100 ease-out"
                style={{
                  transform: `translateX(-${scrollingProgress * 80}%)`,
                  width: "500%", // 100% * 5 sections
                }}
              >
                {cards.map((card, index) => (
                  <Card key={index} {...card} />
                ))}
                {/* {cards.map((item , index) => (
              // <div key={index} className="w-screen h-screen flex-shrink-0 bg-green-100 p-8 border border-green-300">
              //   <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
              //   <p>{item.description}</p>
              // </div>
            ))} */}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Normal Scroll Section */}
      <section className="min-h-screen  p-8">
        <h2 className="text-3xl font-bold mb-4">Normal Scroll Section</h2>
        <p className="mb-4">This section scrolls vertically again.</p>
        <p className="mb-4">You've reached the end of the page!</p>
        {[1, 2, 3, 4, 5].map((num) => (
          <p key={num} className="mb-4">
            Additional content paragraph {num}.
          </p>
        ))}
      </section>
      <section>
        <ScrollAdjustedText />
      </section>
      <section className="min-h-screen  p-8">
        <h2 className="text-3xl font-bold mb-4">Normal Scroll Section</h2>
        <p className="mb-4">This section scrolls vertically again.</p>
        <p className="mb-4">You've reached the end of the page!</p>
        {[1, 2, 3, 4, 5].map((num) => (
          <p key={num} className="mb-4">
            Additional content paragraph {num}.
          </p>
        ))}
      </section>
    </div>
  );
}
