'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/Aboutme";
import Projects from "./components/projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
