export interface CardProps {
  title: string;
  link: string;
  description: string;
  image: string;
}

const cardData: CardProps[] = [
  {
    title: "FlashQ",
    link: "https://flashq.vercel.app",
    description: "AI generated flashcards",
    image: "/flashq.png",
  },
  {
    title: "Offside Tracker",
    link: "https://aggiesportsanalytics.com/projects/soccer-offside-tracker",
    description: "Computer vision VAR",
    image: "/static-soccer.jpg",
  },
  {
    title: "Listento.Day",
    link: "https://listentoday.vercel.app",
    description: "A new album every day",
    image: "/vinyl.png",
  },
  {
    title: "ASA X WiCS Workshop",
    link: "https://github.com/AggieSportsAnalytics/WiCS-ASA-Workshop",
    description: "Taught students machine Learning",
    image: "",
  },
  {
    title: "Coming soon...",
    link: "/",
    description: "More projects coming soon!",
    image: "",
  },
];

export default cardData;
