import Head from "next/head";
import { motion } from "framer-motion";

import Card from "./components/Card";
import cardData from "../public/cardData";
import BlankCard from "./components/BlankCard";
import FirstCard from "./components/FirstCard";
import MenuBar from "./components/MenuBar";

export default function Home() {
  const delay = 0.05;

  return (
    <>
      <Head>
        <title>Andrew Hale</title>
      </Head>
      <div className="w-screen h-screen bg-black flex justify-center">
        <div
          style={{
            background:
              "repeating-linear-gradient(0deg,#E3E3E3,#E3E3E3 5px,#F5F5F5 3px,#F5F5F5 6px)",
          }}
          className="cursor-wii flex justify-center h-screen w-[1512px] px-auto py-24">
          <div className="overflow-x-scroll">
            <div className="w-[1128px] p-2 grid grid-cols-4 grid-flow-row gap-4 mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: delay }}>
                <FirstCard />
              </motion.div>
              {cardData.map((card, i) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: (i + 2) * delay }}>
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
                      }}>
                      <BlankCard key={i} />
                    </motion.div>
                  ))}
            </div>
          </div>
          <MenuBar />
        </div>
      </div>
    </>
  );
}
