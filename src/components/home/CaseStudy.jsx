import React from "react";
import image from "../../assets/image1.png";

function CaseStudy() {
  return (
    <>
      <div className="relative">
        <h3 className="text-size48px font-semibold text-lightblack ">
          Case Studies
        </h3>
        <p className="absolute text-size16px bottom-0 top-[45px] left-[348px]  font-[400] right-[45px] tablets:left-[350px] tablets:top-[35px] text-lightblack mobiles:static mobiles:top-[35px]">
          Driving acquisition, improving CACs, brand reimagining, new product
          launches, International market expansion, GTM strategies, sales
          enablements , team hiring. We look at it from a overall marketing
          perspective than disparate activities.{" "}
        </p>
      </div>
      <div className="flex mt-32 ml-[178px] gap-10 mobiles:mt-10 mobiles:flex-col mobiles:ml-0 ">
        <div
          className={`w-[183px] h-[132px] bg-pimage flex items-center justify-center mobiles:w-full mobiles:h-[250px] `}
        >
          <img src={image} alt="image" className="h-32 w-32" />
        </div>
        <div
          className={`w-[183px] h-[132px] bg-pimage flex items-center justify-center mobiles:w-full mobiles:h-[250px]`}
        >
          <img src={image} alt="image" className="h-32 w-32 " />
        </div>
        <div
          className={`w-[183px] h-[132px] bg-pimage flex items-center justify-center mobiles:w-full mobiles:h-[250px] `}
        >
          <img src={image} alt="image" className="h-32 w-32 " />
        </div>
      </div>
    </>
  );
}

export default CaseStudy;
