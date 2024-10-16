import React from "react";
import { FaFigma, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <div className="mt-[97px] px-[14px] mobiles:px-0">
      <div className="pt-[34px] border-t ">
        <div className="ml-[32px] ">
          <p className="mb-[24px] ">
            <FaFigma size={35} />
          </p>
          <div className="grid grid-cols-4 gap-20 tablets:grid-cols-2 mobiles:grid-cols-2 ">
            <div className="flex flex-col  ">
              <span className="flex gap-4">
                <FaXTwitter size={24} />
                <IoLogoInstagram size={24} />
                <FaYoutube size={24} />
                <IoLogoLinkedin size={24} />
              </span>
            </div>
            {/* w-[262px] ml-[16px] */}
            <div className="flex flex-col  ">
              <p className="font-semibold text-size16px mb-[28px] ">Use cases</p>
              <p className=" text-size16px mb-[12px]">UI design</p>
              <p className=" text-size16px mb-[12px]">UX design </p>
              <p className=" text-size16px mb-[12px]">Wireframing</p>
              <p className=" text-size16px mb-[12px]">Diagramming</p>
              <p className=" text-size16px mb-[12px]">Brainstorming</p>{" "}
              <p className=" text-size16px mb-[12px]">Online whiteboard</p>
              <p className=" text-size16px mb-[12px]">Team collaboration</p>
            </div>
            {/* w-[262px] ml-[16px]*/}
            <div className="flex flex-col  ">
              <p className="font-semibold text-size16px mb-[28px] ">Explore</p>
              <p className=" text-size16px mb-[12px]">Design</p>
              <p className=" text-size16px mb-[12px]">Prototyping </p>
              <p className=" text-size16px mb-[12px]">Development features</p>
              <p className=" text-size16px mb-[12px]">Design systems</p>
              <p className=" text-size16px mb-[12px]">
                Collaboration features
              </p>{" "}
              <p className=" text-size16px mb-[12px] ">Design process</p>
              <p className=" text-size16px mb-[12px]">FigJam</p>
            </div>
            {/*ml-[16px] w-[262px] */}
            <div className="flex flex-col ">
              <p className="font-semibold text-size16px mb-[28px]">Resources</p>
              <p className=" text-size16px mb-[12px]">Blog</p>
              <p className=" text-size16px mb-[12px]">Best practices </p>
              <p className=" text-size16px mb-[12px]">Colors</p>
              <p className=" text-size16px mb-[12px]">Color wheel</p>
              <p className=" text-size16px mb-[12px]">Support</p>{" "}
              <p className=" text-size16px mb-[12px]">Developers</p>
              <p className=" text-size16px mb-[12px]">Resource library</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
