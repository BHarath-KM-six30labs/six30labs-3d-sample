import React from "react";
import { useWindowWidth } from "../../utils/hooks/useWindowWidth";
function Collabiration() {
  const width = useWindowWidth();
  // console.log(width)
  const sections = [
    {
      number: "#01",
      title: "Leadership",
      content:
        "Primary SPoC is the leadership team (Co-Founders, CEO, Product Heads, Sales Heads)",
    },
    {
      number: "#02",
      title: "Workshops, insights, plan",
      content:
        "Onboarding with product workshops, research and customer interviews. Kick off with 30-60-90 day plans & build further on revenue goals.",
    },
    {
      number: "#03",
      title: "Optimise internal resources",
      content:
        "Get the gears moving with your resources. Bring in external support as needed. Regular updates with leadership.",
    },
    {
      number: "#04",
      title: "Proof of concept",
      content:
        "Track phase wise progress on achieving pre-defined goals - short and mid term.",
    },
  ];
  return (
    <div>
      <h3 className={`text-size40px font-bold  tablets:w-full`}>
        Our collaborative approach to {width <= 620 ? "" : <br />}
        seamlessly blend with your internal team.{" "}
      </h3>

      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <div className="mt-10">
            <h3 className="text-size40px font-bold px-4">{section.number}</h3>
            <hr className="border-t border-black" />
          </div>
          <div className="flex  mt-3 mobiles:flex-col">
            <h3 className="text-size32px   w-[45%] mobiles:w-full px-4 ">
              {section.title}
            </h3>
            <p className="text-size16px w-[55%]  mr-[50px] mobiles:w-full ml-[10rem] mobiles:mx-4 tablets:mr-[0px] tablets:ml-0">
              {section.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collabiration;
