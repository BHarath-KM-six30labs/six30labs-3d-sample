import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const DURATION = 0.25;
const STAGGER = 0.05;

const FlipLink = ({ children, to, className = "" }) => {
  return (
    <motion.div
      className={`relative inline-block overflow-hidden  ${
        className === ""
          ? "text-4xl whitespace-nowrap  font-black uppercase sm:text-7xl md:text-8xl lg:text-5xl mb-5"
          : className
      }`}
      initial="initial"
      whileHover="hovered"
    >
      <Link to={to} className="inline-block">
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default FlipLink;