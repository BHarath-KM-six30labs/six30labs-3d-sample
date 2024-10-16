import { RiArrowDropRightLine } from "react-icons/ri";
import image from "../../assets/image1.png";
import { FaChevronLeft } from "react-icons/fa";
// import "./pillar.css";
const pillars = [
  {
    title: "Strategy",
    description:
      "Build executable time-bound strategies to drive product discovery, sales acceleration & account expansion for B2B SaaS.",
  },
  {
    title: "Curation",
    description:
      "Getting specific, getting clarity. Charting a detailed action plan and following up with time-bound executions.",
  },
  {
    title: "Outcomes",
    description: `Measurable results. No vanity metrics. Evaluate and evolve.`,
  },
];

function PillarCards() {
  return (
    <div className="">
      <h3 className="text-size48px font-bold">Enabled by 3 Pillars</h3>

      {pillars.map((pillar, index) => (
        <div
          key={index}
          className=" group mt-24 flex relative mobiles:flex-col mobiles:mt-10 cursor-default"
        >
          <div className="flex flex-1">
            <h2 className="text-size48px ">{pillar.title}</h2>
          </div>
          <div
            className={`absolute w-[230px] h-[320px] bg-[#E3E3E3]  transition-transform duration-500 scale-0 group-hover:scale-100 top-[-90px] left-[40%] transform -translate-x-1/2 mobiles:scale-100 mobiles:static mobiles:translate-x-0`}
          >
            <img
              src={image}
              alt={pillar.title}
              className="h-32 w-32 rounded-t-lg"
            />
          </div>
          <div className="flex flex-1 ml-36   mobiles:mx-0">
            <div className=" mobiles:mr-0 tablets:mr-0">
              <p className="text-size20px font-Hedvig ">{pillar.description}</p>
              <button className="mt-2 flex gap-2 items-center ">
                <span className=" group px-[15px] py-[17px] border border-black rounded-[5px] arrow-btn hover:text-white hover:border-white ">
                  <FaChevronLeft />
                </span>
                <span className="font-Numans text-size20px">know more</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PillarCards;
