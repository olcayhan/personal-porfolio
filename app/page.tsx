import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {

  return (
    <>
      <Navbar />
      <Main />
      <About/>
      <Projects />
      <Contact />
    </>
  );
}
