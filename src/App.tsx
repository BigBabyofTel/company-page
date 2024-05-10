import Contact from "./components/contact";
import Courses from "./components/courses";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Latestnews from "./components/latestnews";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <Latestnews />
      <Contact />
      <Footer />
    </>
  );
}
