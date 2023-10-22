import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FirstCard = () => {
  const [delay, setDelay] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div className="relative">
      <div
        className="hover:drop-shadow-[0_0_5px_rgba(149,205,239,0.75)]"
        onMouseEnter={() => {
          setHover(true);
          setDelay(1000);
        }}
        onMouseLeave={() => {
          setHover(false);
          setDelay(0);
        }}>
        <div className="box-border flex flex-col items-center justify-center relative w-full rounded-3xl overflow-hidden h-[150px] group hover:scale-[1.03] hover:border-[#95CDEF] hover:border-[6px] transition-transform bg-gradient-to-t from-white from-10% to-white to-50% via-gray-100 via-30% border-[4px] border-[#cacaca]">
          <Image
            className="group-hover:rotate-180 group-hover:translate-y-[110px] transition-transform duration-1000 delay-300"
            src="/cd.png"
            alt="cd"
            width={100}
            height={100}
          />
          <div
            className="absolute group-hover:w-[120px] w-0 z-2 bg-white border-t-gray-200 border-t-[3px] bottom-0 h-[16px] duration-200"
            style={{ transitionDelay: `${delay}ms` }}
          />
          <AnimatePresence>
            {hover && (
              <motion.div
                className="text-gray-300 font-semibold absolute tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}>
                Please insert disk
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
