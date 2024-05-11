export default function Hero() {
  return (
    <div  className="w-full h-[800px] bg-[url('./images/hero.jpg')] bg-center bg-cover flex items-start justify-center flex-col">
      {/* <img src="./hero.jpg" alt="" className="w-full p-2" /> */}
      <aside className="bg-[rgb(221,206,184)] rounded-lg p-3">
        <p className="text-xl">
          Our language center offers group and personal lessons in English.
        </p>
        <h1 className="text-6xl">
          IMPROVE YOUR <span className="text-[rgb(78,101,122)]">ENGLISH</span> SKILLS
        </h1>
      </aside>
    </div>
  );
}