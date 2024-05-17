import logo from "@/images/logo.svg";


export default function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <section className="flex items-center justify-center w-1/3 pt-10">
          <img src={logo} alt="" className="w-1/3 md:w-1/4 lg:w-1/6  p-1 ml-1 mr-2" />
          <h1 className="text-3xl md:text-4xl text-bold font-bold mr-9">
            <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
            Academy
          </h1>
        </section>
        <section className="flex flex-col text-center md:w-[25%] my-5 md:p-1">
          <h3 className="text-3xl font-bold p-3 my-5 text-[rgb(78,101,122)]">POPULAR COURSES</h3>
          <ul className="flex flex-col items-center">
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>English for Kids</span>
              <span className="text-slate-500">¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>Online Learning</span>
              <span className="text-slate-500">¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>Personal Lessons</span>
              <span className="text-slate-500">¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>Group Lessons</span>
              <span className="text-slate-500">¥4,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>English Club</span>
              <span className="text-slate-500">¥4,000 per hour</span>
            </li>
          </ul>
        </section>
      </div>
      <section className="h-10 text-center font-medium bg-[rgb(221,206,184)]">
     
        <h2 className="text-xl p-2">© 2024 LingoAcademy </h2>
        
      </section>
    </footer>
  );
}
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