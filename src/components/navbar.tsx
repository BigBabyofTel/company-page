import { useState, useRef } from "react";
import { useClickOutside } from "@react-hooks-library/core";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
  
    useClickOutside(ref, () => {
      if (isOpen) {
        setIsOpen(false);
      }
    });
  
    return (
        <nav className="bg-[rgb(78,101,122)] rounded-xl md:p-2 md:flex md:w-1/4 md:justify-around">
          <div className="w-full flex items-center justify-between">
            {/*Logo */}
            <div className="text-white text-2xl font-bold w-full">
              <div className="md:hidden">
                <button className="p-2"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <Menu size={'40px'}/>
                </button>
              </div>
    
              <ul className="hidden md:flex md:w-[100%] md:justify-evenly">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Courses</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Menu */}
          {isOpen ? (
            <ul className="flex flex-col items-center w-full md:hidden absolute p-3 left-0 right-0 top-[99%] bg-[rgb(221,206,184)]">
              <li className="py-2 font-bold text-[rgb(78,101,122)]">
                <a href="">Home</a>
              </li>
              <li className="py-2 font-bold text-[rgb(78,101,122)]">
                <a href="">Courses</a>
              </li>
              <li className="py-2 font-bold text-[rgb(78,101,122)]">
                <a href="">Contact</a>
              </li>
            </ul>
          ) : null}
        </nav>
      );
}