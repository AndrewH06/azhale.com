import Head from "next/head";
import { motion, stagger } from "framer-motion";

import Card from "./components/Card";
import cardData from "../public/cardData";
import BlankCard from "./components/BlankCard";
import FirstCard from "./components/FirstCard";

export default function Home() {
  const delay = 0.05;

  return (
    <>
      <Head>
        <title>Andrew Hale</title>
      </Head>
      <div
        style={{
          background:
            "repeating-linear-gradient(0deg,#E3E3E3,#E3E3E3 5px,#F5F5F5 3px,#F5F5F5 6px)",
        }}
        className="cursor-wii min-h-screen px-auto py-24">
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
        {/* <div className="">
          <div className="absolute w-full bottom-0">
            <div className="flex justify-between">
              <div className="bg-[#D0D1D5] w-[340px] h-[80px] border-t-[4px] border-t-[#95CDEF] after:content-none after:absolute after:block after:w-[100px] after:bg-red-400" />
              <div className="bg-[#D0D1D5] w-[340px] h-[80px] border-t-[4px] border-t-[#95CDEF] after:content-none after:absolute after:block after:w-[100px] after:bg-red-400" />
            </div>
            <div className="h-[120px] bg-[#D0D1D5]" />
          </div>
        </div> */}
      </div>
    </>
  );
}
