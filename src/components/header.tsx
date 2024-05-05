import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { MapPin, Phone, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className=" p-2 w-full">
      <div className="m-2 flex items-center justify-evenlyw-full">
        <div className="flex items-center">
          <img src="logo.svg" alt="logo" className="w-1/5 md:w-[5%]" />
          <h1 className="text-3xl md:text-5xl text-bold w-1/2 md:mr-[600px] font-bold">
            <span className="text-[#0432ff] font-bold">Lingo</span>Academy
          </h1>
        </div>
        <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu size="50px" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-5 m-2 bg-blue-300">
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Our Courses</DropdownMenuItem>
            <DropdownMenuItem>Gallery</DropdownMenuItem>
            <DropdownMenuItem>News</DropdownMenuItem>
            <DropdownMenuItem>Contacts</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>
      <hr />
      <ul className=" flex items-center justify-between">
        <li className="flex p-5 text-sm md:text-lg">
          <MapPin />9 Valley St. Brooklyn, NY 11203
        </li>
        <li className="flex p-5 text-sm md:text-lg">
          <Phone />
          1-800-555-5555
        </li>
      </ul>
    </header>
  );
}
