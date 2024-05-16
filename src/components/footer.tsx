import logo from "@/images/logo.svg";


export default function Footer() {
  return (
    <footer className="w-full h-full border">
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <section className="flex items-center justify-center w-fit pt-10">
          <img src={logo} alt="" className="w-[10%] p-1 ml-1 mr-2" />
          <h1 className="text-3xl md:text-5xl text-bold font-bold mr-9">
            <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
            Academy
          </h1>
        </section>
        <section className="flex flex-col text-center md:w-1/4 my-5">
          <h3 className="text-3xl font-bold p-3 my-5 text-[rgb(78,101,122)]">POPULAR COURSES</h3>
          <ul className="flex flex-col items-center">
            <li className="flex justify-between w-full p-2">
              <span>English for Kids</span>
              <span>¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2">
              <span>Online Learning</span>
              <span>¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2">
              <span>Personal Lessons</span>
              <span>¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2">
              <span>Group Lessons</span>
              <span>¥4,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2">
              <span>English Club</span>
              <span>¥4,000 per hour</span>
            </li>
          </ul>
        </section>
      </div>
      <section className="h-10 text-center font-medium bg-[rgb(221,206,184)]">
        <h2 className="text-xl">© 2024 LingoAcademy </h2>
        {/* 
          <div className="block sm:hidden">xs</div>
          <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
            sm
          </div>
          <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
            md
          </div>
          <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
          <div className="hidden xl:block 2xl:hidden">xl</div>
          <div className="hidden 2xl:block">2xl</div>
        */}
      </section>
    </footer>
  );
}
