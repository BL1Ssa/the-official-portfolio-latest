'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Solutions />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
