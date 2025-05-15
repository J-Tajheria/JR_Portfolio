'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/Aboutme";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}
