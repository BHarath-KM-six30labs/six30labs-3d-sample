import React, { useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
} from "react-icons/io";

function FractionalMarketingAccordion() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  const sections = [
    {
      title: "What is fractional marketing?",
      content:
        "Fractional marketing refers to the practice of hiring part-time marketing professionals to provide strategic expertise without the commitment of a full-time role. These experts work on a contract basis, delivering their services either remotely or on-site as needed.",
    },
    {
      title: "Can Fractional Marketing be as effective as full-time marketing?",
      content: "...",
    },
    {
      title: "What services do Fractional Marketing offer?",
      content: "...",
    },
    {
      title: "Benefits of Hiring Fractional Marketing for a Company",
      content: "...",
    },
    {
      title: "Should I Hire a Fractional Marketer?",
      content: "...",
    },
    {
      title: "Who Hires Fractional Marketers?",
      content: "...",
    },
  ];

  return (
    <>
      <h2 className="text-size48px font-bold mb-3 ml-[16px] smallerMobiles:text-size28px">FAQ</h2>
      <hr className="border-t-[1px] border-black" />
      <div className="ml-[19.5px] smallerMobiles:ml-0">
        {sections.map((section, index) => (
          <div key={index} className="my-10">
            <h3
              onClick={() => handleSectionClick(index)}
              className="text-size36px smallerMobiles:text-size20px transition font-Numans flex gap-[25px] smallerMobiles:gap-2  cursor-pointer"
            >
              <p className="text-[#1D1B20] ">
                {activeSection === index ? (
                  <IoMdArrowDropdown  size={60}/>
                ) : (
                  <IoMdArrowDropright size={60}/>
                )}
              </p>
              <span className="font-semibold ">{section.title}</span>
            </h3>
            {activeSection === index && (
              <p className="text-size16px ml-[88px] mr-[80px]">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default FractionalMarketingAccordion;
