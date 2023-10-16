import Head from "next/head";
import { Card } from "./components/Card";
import { cardData } from "./cardData";
import { BlankCard } from "./components/BlankCard";
import { FirstCard } from "./components/FirstCard";

export default function Home() {
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
        className="min-h-screen px-auto py-32">
        <div className="overflow-x-scroll">
          <div className="w-[1128px] p-2 grid grid-cols-4 grid-flow-row gap-4 mx-auto">
            <FirstCard />
            {cardData.map((card, i) => (
              <Card key={i} {...card} />
            ))}
            {cardData.length < 11 &&
              Array(11 - cardData.length)
                .fill(0)
                .map((_, i) => <BlankCard key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
}
