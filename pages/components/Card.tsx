import Image from "next/image";
import { CardProps } from "../cardData";
import Link from "next/link";
import { TiFlash } from "react-icons/ti";
import { useState } from "react";

const Card = ({ title, description, image, link }: CardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="hover:drop-shadow-[0_0_5px_rgba(149,205,239,0.75)]">
        <div className="box-border flex relative w-full rounded-3xl overflow-hidden h-[150px] group hover:scale-[1.03] hover:border-[#95CDEF] hover:border-[6px] transition-transform bg-white border-[4px] border-[#cacaca]">
          <Link href={link} target="_blank" className="w-full">
            {title === "FlashQ" && (
              <FlashQ
                title={title}
                description={description}
                image={image}
                link={link}
              />
            )}
            {title === "Offside Tracker" && (
              <OffsideTracker
                title={title}
                description={description}
                image={image}
                link={link}
              />
            )}
            {title === "Listento.Day" && (
              <ListentoDay
                title={title}
                description={description}
                image={image}
                link={link}
              />
            )}
          </Link>
        </div>
      </div>
      {hover && (
        <div className="absolute w-full justify-center flex pt-2 z-50">
          <p className="text-gray-500 text-xl bg-white px-6 rounded-full border-[2px] border-[#cacaca]">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;

const FlashQ = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="relative flex flex-col gap-2 h-full w-full px-4 py-4">
      <div className="z-10">
        <div className="flex text-2xl items-center gap-1 font-semibold">
          <TiFlash className="text-yellow-400 text-4xl" />
          {title}
        </div>
        <p className="absolute w-full px-5 pb-2 pt-10 bg-gradient-to-t from-white to-transparent from-20% translate-y-[100px] group-hover:translate-y-0 bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-transform text-gray-400 duration-200">
          {description}
        </p>
      </div>
      <Image
        className="absolute rounded-lg right-[-100px] top-[40px] group-hover:top-[25px] group-hover: transition-all"
        src={image}
        alt={title}
        height={480}
        width={480}
      />
    </div>
  );
};

const OffsideTracker = ({ image, title, description, link }: CardProps) => {
  const [img, setImg] = useState("/static-soccer.jpg");

  return (
    <div className="absolute w-full h-full">
      <Image
        onMouseEnter={() => {
          setImg("/soccer.gif");
        }}
        onMouseLeave={() => {
          setImg("/static-soccer.jpg");
        }}
        className="absolute h-full"
        src={img}
        alt={title}
        height={480}
        width={480}
      />
    </div>
  );
};

const ListentoDay = ({ image, title, description, link }: CardProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="translate-x-[-45px] flex flex-col items-center">
        <p className=" text-black z-10 text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-600 tracking-tighter">{description}</p>
      </div>
      <Image
        className="absolute right-[-85px] group-hover:animate-spin-slow"
        src={image}
        alt={title}
        width={180}
        height={180}
      />
    </div>
  );
};
