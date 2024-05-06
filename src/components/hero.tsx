export default function Hero() {
  return (
    <div className="w-full h-[600px] bg-[url('./hero.jpg')] bg-center bg-cover flex items-start justify-center flex-col">
      {/* <img src="./hero.jpg" alt="" className="w-full p-2" /> */}
      <aside className="bg-gray-400 rounded-lg p-3">
        <p className="text-xl">
          Our language center offers group and personal lessons in English and
          other modern languages for all ages and levels of knowledge.
        </p>
        <h1 className="text-6xl">
          IMPROVE YOUR <span className="text-indigo-600">ENGLISH</span> SKILLS
        </h1>
      </aside>
    </div>
  );
}

/*

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

*/