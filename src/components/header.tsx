import { MapPin, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(isOpen);

  return (
    <>
      <header className="w-full">
          <div className=" w-full border-b fixed z-50 flex items-center p-2 bg-gray-400">
            <img src="logo.svg" alt="logo" className="w-[15%] md:w-[8%]" />
            <h1 className="text-3xl md:text-5xl text-bold font-bold mr-9">
              <span className="text-[#0432ff] font-bold">Lingo</span>Academy
            </h1>
            <button className="w-[18%] sm:w-[9%] md:w-[9%] h-16 p-3 md:relative md:left-[30%] bg-blue-400" onClick={toggleMenu}>
              <Menu size={"40px"} />
            </button>
            {isOpen && (
              <ul className="w-1/2 bg-blue-400 fixed top-[60px] left-[49%] flex flex-col p-5 md:w-1/4 md:left-[72.125%] md:top-[10%] md:h-60 md:justify-between">
                <li className="text-xl hover:underline hover:underline-offset-8">
                  <a href="">Home</a>
                </li>
                <li className="text-xl hover:underline hover:underline-offset-8">
                  <a href="">Our Courses</a>
                </li>
                <li className="text-xl hover:underline hover:underline-offset-8">
                  <a href="">Gallery</a>
                </li>
                <li className="text-xl hover:underline hover:underline-offset-8">
                  <a href="">News</a>
                </li>
                <li className="text-xl hover:underline hover:underline-offset-8">
                  <a href="#contacts">Contacts</a>
                </li>
              </ul>
            )}
          </div>
          
           
          <div className="w-1/2  flex flex-col-reverse justify-end left-[76%] top-3 md:h-[50%] z-50">
            
          </div>
       </header>
       <ul className=" flex items-center justify-between mt-[20%] md:mt-[10%] ">
          <li className="flex p-5 text-sm md:text-lg">
            <MapPin className="mr-2" />9 Valley St. Brooklyn, NY 11203
          </li>
          <li className="flex p-5 text-sm md:text-lg">
            <Phone className="mr-2" />
            1-800-555-5555
          </li>
        </ul>
    </>
  );
}
