/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useRef } from "react";
import { useClickOutside } from "@react-hooks-library/core";
import { Menu } from "lucide-react";

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  homeRef: React.MutableRefObject<HTMLDivElement | null>;
  coursesRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}


const Navbar = ({isOpen, setIsOpen, homeRef, coursesRef, contactRef}: Props) => {
    
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
                  <button onClick={() => homeRef.current?.scrollIntoView({behavior: 'smooth'})} className="hover:underline hover:underline-offset-8">Home</button>
                </li>
                <li>
                  <button onClick={() => coursesRef.current?.scrollIntoView({behavior: 'smooth'})} className="hover:underline hover:underline-offset-8">Courses</button>
                </li>
                <li>
                  <button onClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth'})} className="hover:underline hover:underline-offset-8">Contact</button>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Menu */}
          
        </nav>
      );
}

export default forwardRef(Navbar) 