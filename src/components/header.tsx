import { MapPin, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(isOpen);

  return (
    <header className="w-full p-3">
      <div className="w-full flex items-center justify-between p-2">
        <div className="w-1/2 p-2 flex items-center">
          <img src="logo.svg" alt="logo" className="w-[19%] md:w-[8%]" />
          <h1 className="text-3xl md:text-5xl text-bold font-bold">
            <span className="text-[#0432ff] font-bold">Lingo</span>Academy
          </h1>
        </div>
        <div className="lg:w-full">
          <button className="lg:hidden" onClick={toggleMenu}>
            <Menu size={"40px"} />
          </button>
          <ul className="hidden lg:flex lg:justify-between">
            <li className="text-xl hover:text-blue-400">
              <a href="#home">Home</a>
            </li>
            <li className="text-xl hover:text-blue-400">
              <a href="#our-courses">Our Courses</a>
            </li>
            <li className="text-xl hover:text-blue-400">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="text-xl hover:text-blue-400">
              <a href="#news">News</a>
            </li>
            <li className="text-xl hover:text-blue-400">
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center p-5">
          <li className="text-xl hover:text-blue-400">
            <a href="">Home</a>
          </li>
          <li className="text-xl hover:text-blue-400">
            <a href="">Our Courses</a>
          </li>
          <li className="text-xl hover:text-blue-400">
            <a href="">Gallery</a>
          </li>
          <li className="text-xl hover:text-blue-400">
            <a href="">News</a>
          </li>
          <li className="text-xl hover:text-blue-400">
            <a href="">Contacts</a>
          </li>
        </ul>
      )}
      <ul className=" flex items-center justify-between">
        <li className="flex p-5 text-sm md:text-lg">
          <MapPin className="mr-2" />9 Valley St. Brooklyn, NY 11203
        </li>
        <li className="flex p-5 text-sm md:text-lg">
          <Phone className="mr-2" />
          1-800-555-5555
        </li>
      </ul>
    </header>
  );
}
