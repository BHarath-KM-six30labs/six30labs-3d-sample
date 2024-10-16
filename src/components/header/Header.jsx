import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import FlipLink from "../animation/FlipLink";
import { motion, AnimatePresence } from "framer-motion";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between px-8 items-center h-28">
        <img src={logo} alt="Logo" className="w-26 h-20" />
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center border border-black rounded py-4 px-3"
          >
            <span className="block w-4 h-[2px] bg-black mb-1"></span>
            <span className="block w-4 h-[2px] bg-black"></span>
          </button>

          <button className="contact-btn text-white border border-black ml-2 px-2 py-2 rounded bg-black  hover:text-black ">
            {/* <FlipLink
              to="/contact"
              className="text-size16px grid place-items-center "
            > */}
            Contact
            {/* </FlipLink> */}
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="w-full fixed top-0 left-0 h-screen z-50  flex flex-col bg-white"
                initial={{ scale: 0, borderRadius: "50%", opacity: 0 }}
                animate={{ scale: 1, borderRadius: "0rem", opacity: 1 }}
                exit={{ scale: 0, borderRadius: "50%", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                // initial={{ scale: 0, borderRadius: "50%", opacity: 0 }} // Start small and transparent
                // animate={{ scale: [0, 1.2, 1], borderRadius: "0%", opacity: [0, 0.5, 1] }} // Scale up and fade in
                // exit={{ scale: [1, 0], borderRadius: "50%", opacity: [1, 0] }} // Scale down and fade out
                // transition={{ duration: 0.6, ease: "easeInOut", times: [0, 0.5, 1] }} // Control timing of scale and opacity
              >
                {/* w-full fixed top-0 left-0 h-screen z-50 bg-white flex flex-col */}
                <div className="">
                  <div className="flex justify-between px-8 items-center h-28">
                    <img src={logo} alt="Logo" className="w-26 h-20" />
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="contact-btn text-white border border-black ml-2 px-2 py-2 rounded bg-black  hover:text-black"
                    >
                      {/* <span className="block w-4 h-[2px] bg-black mb-1"></span>
                  <span className="block w-4 h-[2px] bg-black"></span> */}
                      close
                    </button>
                  </div>
                  {/* flex-grow flex flex-col justify-center px-8 w-full h-svh */}
                  <div className="px-8 pt-10">
                    <ul className="space-y-3">
                      {[
                        "Home",
                        "Resources",
                        "About Us",
                        "Services",
                        "Contact Us",
                      ].map((item) => (
                        <motion.li
                          key={item}
                          className="text-xl overflow-hidden  "
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: item * 0.2,
                            ease: "easeInOut",
                          }}
                        >
                          <FlipLink
                            to={`${
                              item === "Home"
                                ? "/"
                                : item.toLowerCase().replace(" ", "-")
                            }`}
                          >
                            {item}
                          </FlipLink>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Header;
