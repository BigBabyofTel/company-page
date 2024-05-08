import Contact from "./components/contact";
import Courses from "./components/courses";
import Footer from "./components/footer";
import Freelesson from "./components/freelesson";
import Header from "./components/header";
import Hero from "./components/hero";
import Latestnews from "./components/latestnews";
import Newsletter from "./components/newsletter";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Freelesson />
      <Courses />
      <Newsletter />
      <Latestnews />
      <Contact />
      <Footer />
    </>
  );
}
