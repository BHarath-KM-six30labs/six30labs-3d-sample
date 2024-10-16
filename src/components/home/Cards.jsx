import image from "../../assets/image1.png";
import { useWindowWidth } from "../../utils/hooks/useWindowWidth";
// import useIntersectionObserver from "../../utils/hooks/useIntersectionObserver";
import { motion } from "framer-motion";

const cards = [
  {
    image: image,
    title: "Strategic Bandwidth",
    description:
      "Get strategic direction for teams overwhelmed with daily operations",
  },
  {
    image: image,
    title: "Diverse, Proven Expertise",
    description:
      "Leverage expertise across strategy, content, digital, analytics - honed at top enterprises and high-growth startups",
  },
  {
    image: image,
    title: "Seasoned Talent",
    description:
      "Startups, small businesses, or companies with marketing budget constraints can access senior-level marketing expertise",
  },
  {
    image: image,
    title: "MarTech Processes",
    description:
      "Build seamless, organic and MarTech automations to track and achieve fastest return on investment in marketing",
  },
  {
    image: image,
    title: "Analytics and Reports",
    description:
      "Key Metrics and data based decision making seamless across collaborating teams. All pointing to your true north star",
  },
  {
    image: image,
    title: "North-Star Focused Guidance",
    description:
      "Relevant growth-focused solutions & guidance for your team at high-growth startups",
  },
];


export default function Cards() {
  const windowWidth = useWindowWidth();
  // const [ref, isVisible] = useIntersectionObserver();

  return (
    <div className="grid grid-cols-3 gap-8 tablets:grid-cols-2 mobiles:grid-cols-1  ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex gap-0 smallerMobiles:flex-col ${
            windowWidth < 1150 ? "flex-col" : ""
          }  `}
        >
           {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
          > */}
          <motion.img
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1,  }} 
          exit={{ opacity: 0, }} 
          transition={{ duration: 3 }}
          viewport={{ once: true }}
            // ref={ref}
            src={card.image}
            alt={card.title}
            className=" h-32 w-28 rounded-t-lg"
            // initial={{ scale: 0 }}
            // animate={{ scale: isVisible ? 1 : 0 }}
            // transition={{ duration: 0.2, ease: "easeOut" }}
            // initial={{ scale: 0 }}
            // animate={{ scale: isVisible ? 1 : 0 }}
            // transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* </motion.div> */}
          <div className="py-4">
            <h3 className="font-bold  mb-2 tracking-wide">{card.title}</h3>
            <p className="text-gray-600 tracking-wide">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
