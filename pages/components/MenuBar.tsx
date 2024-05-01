import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSound } from "use-sound";
import { useWindowSize } from "@uidotdev/usehooks";

import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import select from "../../public/audio/sfx/select.mp3";
import click from "../../public/audio/sfx/click.mp3";

interface Props {
  size: { width: number | null; height: number | null };
  audioPlaying: boolean;
  handleAudioToggle: () => void;
}

const MenuBar: React.FC<Props> = ({
  size,
  audioPlaying,
  handleAudioToggle,
}) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();

  const [selectSound, { stop: stopSelect }] = useSound(select);
  const [clickSound] = useSound(click);

  return (
    <div
      className="z-50 flex justify-center fixed bottom-0">
      <FillerBar />
      <div className="w-[1512px]">
        <div className="absolute w-[1512px] flex flex-col items-center lg:pt-3 pt-1">
          <h1 className="text-4xl font-mono text-gray-400">Andrew Z Hale</h1>
          <p className="lg:pt-12 pt-6 text-2xl text-gray-600 tracking-widest">
            {days[date.getDay()]} {date.getMonth() + 1}/{date.getDate()}
          </p>
        </div>
        <div className="absolute w-[1512px] h-full flex px-28 justify-between items-center">
          <div className="relative">
            <div
              className="absolute -right-12 bottom-0 hover:drop-shadow-[0_0_10px_rgba(149,205,239,0.75)]"
              onMouseEnter={() => selectSound()}
              onMouseLeave={() => stopSelect()}
              onClick={() => {
                handleAudioToggle();
                clickSound();
              }}>
              <button className="hover:cursor-wii transition-transform hover:scale-[103%] rounded-full lg:h-12 lg:w-12 h-8 w-8 bg-gray-200 border-4 border-[#95CDEF] flex items-center justify-center">
                {audioPlaying ? (
                  <HiVolumeUp className="text-gray-400 text-xl" />
                ) : (
                  <HiVolumeOff className="text-gray-400 text-xl" />
                )}
              </button>
            </div>
            <div
              className="hover:drop-shadow-[0_0_10px_rgba(149,205,239,0.75)]"
              onMouseEnter={() => selectSound()}
              onMouseLeave={() => stopSelect()}
              onClick={() => clickSound()}>
              <Link
                href="https://www.linkedin.com/in/andrew-hale6"
                target="_blank"
                className="hover:cursor-wii transition-transform hover:scale-[103%] rounded-full lg:h-32 lg:w-32 h-20 w-20 bg-gray-200 border-4 border-[#95CDEF] flex items-center justify-center">
                <BsLinkedin className="text-gray-400 lg:text-5xl text-3xl" />
              </Link>
            </div>
          </div>
          <div
            className="hover:drop-shadow-[0_0_10px_rgba(149,205,239,0.75)]"
            onMouseEnter={() => selectSound()}
            onMouseLeave={() => stopSelect()}
            onClick={() => clickSound()}>
            <Link
              href="mailto:andrew.z.hale1@gmail.com"
              target="_blank"
              className="hover:cursor-wii transition-transform hover:scale-[103%] rounded-full lg:h-32 lg:w-32 md:h-20 md:w-20 bg-gray-200 border-4 border-[#95CDEF] flex items-center justify-center">
              <IoMdMail className="text-gray-400 text-6xl" />
            </Link>
          </div>
        </div>
        <Image src="/bar.png" alt="bar" width={1512} height={0} sizes="100vw" />
      </div>
      <FillerBar />
    </div>
  );
};

const FillerBar = () => {
  const [barsNeeded, setBarsNeeded] = useState(0);
  const { height, width } = useWindowSize();

  useEffect(() => {
    if (width) {
      if (width > 1512) {
        var extraWidth = width - 1512;
        var needed = Math.floor(extraWidth / 2 / 30);
        setBarsNeeded(needed);
      }
    }
  }, [width]);

  if (barsNeeded === 0) {
    return <div />;
  }


  return (
    <div className="w-[calc((100%-1512px)/2)] h-[192px] flex translate-y-[1px]">
      {Array.from({ length: barsNeeded }).map((_, index) => (
        <Image src="/bar-pattern.png" alt="bar" width={30} height={1148} />
      ))}
    </div>
  );
};

export default MenuBar;
