
import logo from "@/images/logo.svg";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="flex bg-[rgb(221,206,184)] fixed p-2 z-50 md:w-full md:h-[10%] md:justify-between md:static">
      <div className="flex items-center ">
        <img src={logo} alt="" className="w-[20%] p-2 mx-2 md:w-[10%]" />
        <h1 className="text-2xl md:text-5xl">
          <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
          Academy
        </h1>
      </div>
      <Navbar />
    </header>
  );
}

{
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
}
