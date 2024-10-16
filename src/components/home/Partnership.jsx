import React from "react";

function Partnership() {
  return (
    
    <div className="flex gap-10 relative mobiles:flex-col tablets:flex-col mobiles:gap-5 tablets:gap-2">
      <div className="w-[40%] flex items-center  mobiles:w-full tablets:w-full ">
        <h2 className="text-size48px  font-semibold  leading-[3.5rem] text-lightblack  mobiles:mr-0  ">
          Partnership solving for early growth firms to scale business.
        </h2>
      </div>
      <div className="flex items-end absolute bottom-[-3rem] w-[384px] tablets:w-full right-[80px] mobiles:static tablets:static  mobiles:w-full ">
        <p className="text-size16px tablets:text-size20px ml-[-4rem] !mr-20 w-[400px] tablets:ml-0 tablets:mr-[0px] mobiles:mx-0 tablets:w-full font-[400] mobiles:w-full">
          Our goal is simple: to create value and drive business growth through
          marketing for early stage firms.
        </p>
      </div>
    </div>
  );
}

export default Partnership;
