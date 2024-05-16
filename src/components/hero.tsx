import { MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="flex items-end justify-between m-3 h-[107px] md:h-[30px]">
        <aside className="flex items-center md:text-2xl">
          <MapPin size={"30px"} className="mr-1 md:w-" />
          <span className="font-bold">Yokohama, Japan</span>
        </aside>
        <aside className="flex items-center md:text-2xl">
          <Phone size={"30px"} className="mr-1" />
          <span className="font-bold">070-2668-6559</span>
        </aside>
      </section>
      <div className="w-full h-[800px] bg-[url('./images/hero2.jpg')] bg-center bg-cover flex items-start justify-center flex-col">
        <aside className="bg-[rgb(221,206,184)] rounded-lg p-3">
          <p className="text-xl">
            Our language center offers group and personal lessons in English.
          </p>
          <h1 className="text-6xl">
            IMPROVE YOUR{" "}
            <span className="text-[rgb(78,101,122)] font-bold">ENGLISH</span>{" "}
            SKILLS
          </h1>
        </aside>
      </div>
    </>
  );
}
