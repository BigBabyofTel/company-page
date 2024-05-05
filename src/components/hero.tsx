export default function Hero() {
  return (
    <div className="border h-[600px] bg-[url('./hero.jpg')] bg-center bg-cover flex items-start justify-center flex-col">
      {/* <img src="./hero.jpg" alt="" className="w-full p-2" /> */}
      <aside className="bg-gray-400 rounded-lg p-3">
        <p className="text-xl">
          Our language center offers group and personal lessons in English and
          other modern languages for all ages and levels of knowledge.
        </p>
        <h1 className="text-6xl">
          IMPROVE YOU <span className="text-indigo-600">ENGLISH</span> SKILLS
        </h1>
      </aside>
    </div>
  );
}
