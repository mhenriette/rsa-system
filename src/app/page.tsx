import Navbar from "@components/sections/NavBar";
import Hero from "@components/sections/Hero";
import About from "@components/sections/About";
import Footer from "@components/sections/Footer";
export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
