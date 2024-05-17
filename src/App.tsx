import { useRef } from "react";
import Contact from "./components/contact";
import Courses from "./components/courses";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
const homeRef = useRef<HTMLDivElement | null>(null);
const coursesRef = useRef<HTMLDivElement | null>(null);
const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header homeRef={homeRef} coursesRef={coursesRef} contactRef={contactRef} />
      <Hero homeRef={homeRef} />
      <Courses coursesRef={coursesRef} />
      <Contact contactRef={contactRef}/>
      <Footer />
    </>
  );
}
