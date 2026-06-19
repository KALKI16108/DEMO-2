import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#f4f4f4] w-full min-h-screen overflow-x-hidden font-sans selection:bg-zinc-800 selection:text-white">
      <Hero />
      <About />
      <Services />
      <Contact />
      
      {/* Footer minimal spacer */}
      <div className="h-32 bg-[#f4f4f4]" />
    </div>
  );
}
