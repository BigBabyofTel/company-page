/* eslint-disable react-refresh/only-export-components */
import logo from "@/images/logo.svg";
import Navbar from "./navbar";
import React, { forwardRef, useState } from "react";

interface Props {
  homeRef: React.MutableRefObject<HTMLDivElement | null>;
  coursesRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}

function Header({ homeRef, coursesRef, contactRef }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="grid gap-3 grid-col-[1fr_max-content] bg-[rgb(221,206,184)] fixed p-2 z-50 w-full md:static items-center">
      <div className="flex items-center col-start-1 col-end-2 ">
        <img src={logo} alt="" className="w-[15%] p-1 mx-2 md:w-[10%]" />
        <h1 className="text-2xl md:text-5xl">
          <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
          Academy
        </h1>
      </div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} homeRef={homeRef} coursesRef={coursesRef} contactRef={contactRef} />
      {isOpen ? (
        <ul className="flex flex-col items-start w-full 2xl:hidden p-5 left-0 right-0 md:top-[6.5%] bg-[rgb(221,206,184)] row-start-2 row-end-3">
          <li className="py-2 font-bold text-[rgb(78,101,122)]">
            <button
              onClick={() =>
                homeRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </button>
          </li>
          <li className="py-2 font-bold text-[rgb(78,101,122)]">
            <button
              onClick={() =>
                coursesRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Courses
            </button>
          </li>
          <li className="py-2 font-bold text-[rgb(78,101,122)]">
            <button
              onClick={() =>
                contactRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </button>
          </li>
        </ul>
      ) : null}
    </header>
  );
}

export default forwardRef(Header);

/*
 <div className="w-[20%] flex flex-col justify-end p-1 md:left-[79%] md:absolute md:top-[11.2%] md:flex-row">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[rgb(78,101,122)] p-3 flex items-center"
          >
            <Menu className="" size="40px" color="white" />
            <h1 className="text-white ml-1">Menu</h1>
          </button>
          {isOpen && (
            <ul
              ref={ref}
              className="flex flex-col w-1/2 md:h-20 p-2 justify-around items-center bg-[rgb(78,101,122)] absolute top-[84%] right-[3%] md:flex-row md:right-[55%] md:w-[400px] md:top-[10%]"
            >
              <li className="text-white">Home</li>
              <li className="text-white">Courses</li>
              <li className="text-white">Contact</li>
            </ul>
          )}
        </div>

*/
