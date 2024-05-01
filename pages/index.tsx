import * as React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import useSound from "use-sound";
import { useWindowSize } from "@uidotdev/usehooks";

import Card from "./components/Card";
import cardData from "../public/cardData";
import BlankCard from "./components/BlankCard";
import FirstCard from "./components/FirstCard";
import MenuBar from "./components/MenuBar";
import select from "../public/audio/sfx/select.mp3";
import click from "../public/audio/sfx/click.mp3";
import startup from "../public/audio/sfx/startup.mp3";

export default function Home() {
  const [padding, setPadding] = React.useState("6rem");
  const [isMobile, setIsMobile] = React.useState(false);
  const size = useWindowSize();
  const delay = 0.05;

  const [selectSound, { stop: stopSelect }] = useSound(select);
  const [clickSound] = useSound(click);
  const [startupSound] = useSound(startup);

  const [music] = React.useState(new Audio("./audio/music/menu-loop.mp3"));
  const [audioPlaying, setAudioPlaying] = React.useState(false);
  const [firstPlayed, setFirstPlayed] = React.useState(false);

  music.loop = true;
  music.volume = 0.7;

  const handleAudioToggle = () => {
    if (!firstPlayed) {
      startupSound();
      setFirstPlayed(true);
    }

    if (audioPlaying) {
      music.pause();
      return setAudioPlaying(false);
    }
    music.play();
    setAudioPlaying(true);
  };

  return (
    <>
      <Head>
        <title>Andrew Z Hale</title>
      </Head>
      <button id="register" className="hidden" />
      <div
        style={{
          background:
            "repeating-linear-gradient(0deg,#E3E3E3,#E3E3E3 5px,#F5F5F5 3px,#F5F5F5 6px)",
          zoom:
            size.height && size.height > 1000
              ? "120%"
              : size.height && size.height > 800
              ? "100%"
              : size.height && size.height > 600
              ? "80%"
              : "60%",
        }}
        className="cursor-wii flex justify-center h-screen min-h-[836px] min-w-[1400px] w-screen">
        <div
          style={{ paddingTop: padding, paddingBottom: padding }}
          className="h-[832px] w-[1512px] px-auto">
          <div className="overflow-x-scroll">
            <div className="w-[1128px] p-2 grid grid-cols-4 grid-flow-row gap-4 mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: delay }}
                onMouseEnter={() => selectSound()}
                onMouseLeave={() => stopSelect()}
                onClick={() => clickSound()}>
                <FirstCard />
              </motion.div>
              {cardData.map((card, i) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: (i + 2) * delay }}
                  onMouseEnter={() => selectSound()}
                  onMouseLeave={() => stopSelect()}
                  onClick={() => clickSound()}>
                  <Card key={i} {...card} />
                </motion.div>
              ))}
              {cardData.length < 11 &&
                Array(11 - cardData.length)
                  .fill(0)
                  .map((_, i) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: (11 - cardData.length + i + 1) * delay,
                      }}
                      onMouseEnter={() => selectSound()}
                      onMouseLeave={() => stopSelect()}
                      onClick={() => clickSound()}>
                      <BlankCard key={i} />
                    </motion.div>
                  ))}
            </div>
          </div>
        </div>
        <MenuBar
          size={size}
          audioPlaying={audioPlaying}
          handleAudioToggle={handleAudioToggle}
        />
      </div>
    </>
  );
}
