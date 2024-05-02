import Header from "./components/header";
import { Menu } from "lucide-react";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex justify-end relative right-8 top-16">
      <section className="flex justify-end items-center w-1/2">
      <ul className="p-2 flex flex-row justify-around w-1/2 bg-blue-500">
        <li className="">
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Our Course</a>
        </li>
        <li>
          <a href="">Gallery</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
        <button className="bg-blue-500">
          <Menu size="40px" />
        </button>
      </section>
      </div>
      <div className="mx-8">
        <img src="./hero-section.webp" alt="" className="" />
        <div className="bg-gray-200 relative bottom-[55rem] w-1/2">
          <p>
            "Our language center offers group and personal lessons in English
            and other modern languages for all ages and levels of knowledge."
          </p>
          <h1 className="text-7xl">
            Improve your <span className="text-[#0432ff]">English</span> Skills
          </h1>
        </div>
      </div>
    </>
  );
}
