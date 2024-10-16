import image from "../../assets/image1.png";

function HomeAbout() {
  return (
    <>
      {" "}
      <div className="flex mt-5  min-h-[203px]  tablets:flex-col">
        <div className="tablets:flex flex-col flex-1  ">
          <div className="flex items-center gap-[16px] mobiles:flex-col mobiles:items-start mobiles:gap-0">
            <p className=" text-size64px font-[800] mobiles:text-size54px">
              56%
            </p>
            <p className="text-size24px font-semibold">
              of early-stage enterprises <br /> and SMBs spend{" "}
            </p>
          </div>
          <div className="flex  items-end mb-10 gap-5 relative tablets:mb-0 mobiles:flex-col mobiles:items-start mobiles:gap-0">
            <p className=" text-size64px  font-semibold mobiles:text-size54px">
              &lt;1 hr
            </p>
            <p className="text-size24px font-semibold absolute left-[9rem] bottom-4  mobiles:static ">
              a day on marketing.{" "}
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center mt-[106px] tablets:mt-4   ">
          <p className="text-size18px mr-[77px] ml-[4.8rem] font-[300] tablets:ml-[4px]  mobiles:ml-0 mobiles:mr-2">
            Why? Limited bandwidth, insufficient resources, strategic
            uncertainty, or budget constraints often hold them back. And they
            fall short on marketing.
          </p>
        </div>
      </div>
      <div className="flex mt-[66px] gap-[48px] min-h-[479px] mobiles:flex-col mobiles:gap-5 tablets:flex-col tablets:gap-5">
        <div className="w-[45%] h-[350px] bg-primary flex items-center  justify-center mobiles:w-full tablets:w-[100%]">
          <img
            src={image}
            alt="image"
            className="max-h-full max-w-full object-cover"
          />
        </div>
        <div className="w-[60%] tablets:w-full">
          <h4 className="text-size24px font-semibold">What we do</h4>
          <h4 className="text-[#757575] text-size20px">the TL’DR version</h4>
          <p className="mt-[24px] italic font-bold text-size16px mobiles:mt-3 tablets:mt-3">
            We offer fractional marketing services. <br />
            Strategic Vision. Hands-on execution.
          </p>
          <p className="text-size16px mr-[120px] tablets:mr-0 mobiles:mr-0 w-[484px] mobiles:w-full tablets:w-full">
            From acting as your CMO to delivering expertise in strategy,
            branding, digital, content, analytics, SEO, and paid campaigns— we
            seamlessly fill the gaps in your marketing function.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
