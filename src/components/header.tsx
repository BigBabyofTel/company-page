import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { MapPin, Phone, Menu } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "@/images/logo.svg"

export default function Header() {
  return (
    <header className="w-full">
      <div className=" w-full border-b fixed z-50 flex items-center justify-between p-2 bg-[rgb(221,206,184)] md:static">
        <div className="flex items-center h-full">
        <img src={logo} alt="" className="w-[20%] md:w-1/12 p-1 ml-1 mr-2" />
          <h1 className="text-3xl md:text-5xl text-bold font-bold mr-9">
            <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>Academy
          </h1>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Menu size="50px" />
              </button>
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
                <a href="#contacts">Contact</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="w-1/2"></div>

      <ul className=" flex items-end justify-between h-[150px] md:h-[75px]">
        <li id="home" className="flex p-5 text-sm md:text-lg">
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
