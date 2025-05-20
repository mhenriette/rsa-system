import Navbar from "@components/sections/NavBar";
import Hero from "@components/sections/Hero";
import About from "@components/sections/About";
import Footer from "@components/sections/Footer";
import Categories from "@/components/sections/Categories";
import RunScouts from "@/components/sections/RunScouts";
import Updates from "@/components/sections/Updates";
export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <Hero />
      <Categories />
      <About />
      <RunScouts />
      <Updates />
      <Footer />
    </main>
  );
}
