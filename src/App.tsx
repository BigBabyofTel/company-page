import Courses from "./components/courses";
import Freelesson from "./components/freelesson";
import Header from "./components/header";
import Latestnews from "./components/latestnews";
import Newsletter from "./components/newsletter";

export default function App() {
  return (
    <>
      <Header />
      <img src="./hero.jpg" alt="" className="w-full p-2" />
      <Freelesson />
      <Courses />
      <Newsletter />
      <Latestnews />
      <>
        <footer className="h-[300px]">
          <div className="flex flex-col md:flex-row md:justify-around md:items-center">
            <section className="flex items-center justify-around w-1/6">
              <img src="logo.svg" alt="logo" className="w-1/5 md:w-[13%]" />
              <h1 className="text-3xl text-center">LingoAcademy</h1>
            </section>
            <section className="flex flex-col text-center w-1/2 mb-2">
              <h3 className="text-3xl m-3 font-bold">POPULAR COURSES</h3 >
              <ul className="flex flex-col items-center">
                <li className="flex justify-between w-1/4 p-2">
                  <span>English for Kids</span>
                  <span>$45</span>
                </li>
                <li className="flex justify-between w-1/4 p-2">
                  <span>Online Learning</span>
                  <span>$15</span>
                </li>
                <li className="flex justify-between w-1/4 p-2">
                  <span>Personal Lessons</span>
                  <span>$21</span>
                </li>
                <li className="flex justify-between w-1/4 p-2">
                  <span>Group Lessons</span>
                  <span>$35</span>
                </li>
                <li className="flex justify-between w-1/4 p-2">
                  <span>English Club</span>
                  <span>$36</span>
                </li>
              </ul>
            </section>
            <section className="w-1/6">
              <h3 className="text-3xl mb-3">Get In Touch</h3>
              <ul className="flex flex-col ">
                <li className="m-2">Send a Message</li>
                <li className="m-2">Contacts</li>
                <li className="m-2">Request a Callback</li>
              </ul>
            </section>
          </div>
          <hr />
          <section className="text-center font-bold my-2">© 2024 LingoAcademy</section>
        </footer>
      </>
    </>
  );
}
