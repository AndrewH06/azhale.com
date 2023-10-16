import Image from "next/image";
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
            className="group-hover:rotate-180 group-hover:translate-y-[100px] transition-transform duration-1000 delay-300"
            src="/cd.png"
            alt="cd"
            width={90}
            height={90}
          />
          <div
            className="absolute group-hover:w-[120px] w-0 z-2 bg-white border-t-gray-200 border-t-[3px] bottom-0 h-[18px] duration-200"
            style={{ transitionDelay: `${delay}ms` }}
          />
        </div>
      </div>
      {hover && (
        <div className="absolute w-full justify-center flex pt-2 z-50">
          <p className="text-gray-500 text-xl bg-white px-6 rounded-full border-[2px] border-[#cacaca]">
            Profile
          </p>
        </div>
      )}
    </div>
  );
};

export default FirstCard;
