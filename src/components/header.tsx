import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { MapPin, Phone, Menu } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function Header() {




  return (
    <>
      <header className="w-full">
        <div className=" w-full border-b fixed z-50 flex items-center justify-between p-2 bg-gray-400 md:static">
          <div className="flex items-center">
          <img src="logo.svg" alt="logo" className="w-[15%] md:w-[8%] mr-1" />
          <h1 className="text-3xl md:text-5xl text-bold font-bold mr-9">
            <span className="text-[#0432ff] font-bold">Lingo</span>Academy
          </h1>
          </div>
          <div>
         <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button><Menu size="50px"/></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-5 relative right-5">
          <DropdownMenuItem className="text-xl">
          <a href="#home">Home</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xl">
             <a href="#courses">Courses</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xl">
            <a href="#news">News</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xl">
             <a href="">Gallery</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xl">
             <a href="#contact">Contact</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
         </DropdownMenu>
         </div>
        </div>

        <div className="w-1/2  flex flex-col-reverse justify-end left-[76%] top-3 md:h-[50%] z-50"></div>
      </header>
      <ul className=" flex items-center justify-between mt-[20%] md:mt-[1%]">
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
