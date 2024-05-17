import { useRef } from "react";
import { useClickOutside } from "@react-hooks-library/core";
import { Menu } from "lucide-react";



export default function Navbar({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    
    const ref = useRef(null);
  
    useClickOutside(ref, () => {
      if (isOpen) {
        setIsOpen(false);
      }
    });
  
  
    return (
        <nav className="bg-[rgb(78,101,122)] rounded-xl md:p-2 col-start-2 col-end-3 justify-self-center 2xl:h-1/2 2xl:w-full content-center">
          <div className="w-full flex items-center justify-between">
            {/*Logo */}
            <div className="text-white text-2xl font-bold w-full">
              <div className="2xl:hidden justify-items-center">
                <button className="p-2"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <Menu size={'40px'}/>
                </button>
              </div>
    
              <ul className="hidden 2xl:flex 2xl:w-full 2xl:justify-evenly">
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
          
        </nav>
      );
}