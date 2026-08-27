import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Stack from "@/app/components/stack";
import Usages from "@/app/components/usages";


export default function Home() {

  return (
    <main data-bg="light" className="relative w-screen h-screen  bg-light-custom bg-linear-to-t from-green-custom/50 via-transparent to-transparent">
        <div className={"noise"}/>

        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Usages />


    </main>
  );
}