import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import About from "@/app/components/about";


export default function Home() {
  return (
    <main className="relative w-screen h-screen bg-light-custom bg-linear-to-t from-green-custom/50 via-transparent to-transparent">
        <div className={"noise"}/>

        <Navbar />
        <Hero />
        <About />

    </main>
  );
}