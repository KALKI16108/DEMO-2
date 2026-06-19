import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="bg-zinc-900 w-full min-h-screen overflow-x-hidden font-sans">
      <Hero />
      <About />
      <Services />
      
      {/* Footer minimal spacer */}
      <div className="h-32 bg-[#f4f4f4]" />
    </div>
  );
}
