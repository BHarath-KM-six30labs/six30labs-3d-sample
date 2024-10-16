import React from "react";
import image from "../../assets/image1.png";

function Clientele() {
  return (
    <>
      <div className="">
        <h3 className="text-size48px font-semibold text-lightblack ">
          Clientele
        </h3>
      </div>
      <div className="flex  gap-10 mobiles:mt-10 mobiles:flex-col mt-[50px] ml-[138px] mobiles:ml-0 ">
        <div
          className={`w-[370px] h-[222px] bg-pimage flex items-center justify-center mobiles:w-full mobiles:h-[250px]`}
        >
          <img src={image} alt="image" className="h-32 w-32 rounded-t-lg" />
        </div>
        <div
          className={`w-[370px] h-[222px] bg-pimage flex items-center justify-center mobiles:w-full mobiles:h-[250px] `}
        >
          <img src={image} alt="image" className="h-32 w-32 rounded-t-lg" />
        </div>
      </div>
    </>
  );
}

export default Clientele;
