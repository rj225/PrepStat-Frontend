import React from "react";
import { motion } from "framer-motion";
import PrepStat from "./PrepStat";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-orange-100 h-screen relative">
      <div className="text-center mb-5 gap-x-2 flex items-center text-5xl font-bold text-orange-900">
        <PrepStat />
        <span className="animate-blink-fast">.</span>
        <span className="animate-blink-slow">.</span>
        <span className="animate-blink-fast">.</span>
      </div>
      <motion.div
        className="h-[50%] w-[25%] flex justify-center bg-orange-300 border-orange-600 border-y-8 border-x-2 items-center"
        animate={{
          scale: [0.8, 0.4, 0.8],
          rotate: [0, 100, 180],
          borderRadius: ["50%", "18%", "5%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.6,
        }}
      >
        <motion.div
          className="h-[70%] w-[70%] flex justify-center bg-orange-400 border-orange-900 border-x-8 border-y-4 items-center"
          animate={{
            scale: [0.8, 0.6, 0.8],
            rotate: [0, -100, -180],
            borderRadius: ["25%", "3%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 50, 90],
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
        >
          <motion.div
            className="h-[75%] w-[55%] flex justify-center bg-orange-900 border-orange-100 border-[10px] items-center"
            animate={{
              scale: [1, 0.6, 1],
              rotate: [45, 190, 360],
              borderRadius: ["50%", "30%", "10%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.3, 0.5],
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
