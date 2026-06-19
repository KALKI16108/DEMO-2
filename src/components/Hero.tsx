import Navbar from "./Navbar";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-zinc-900 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/20 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 to-transparent" />

      <Navbar />

      <div className="relative z-10 flex flex-col h-full px-6 pb-12 pt-24 sm:pt-32 sm:px-12 md:px-24 max-w-[1600px] mx-auto">
        <div className="flex-1 flex flex-col justify-center translate-y-[-5%] mt-8 sm:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[110px] leading-[1] sm:leading-[0.95] font-medium tracking-tight"
          >
            <span className="block">Your Smile,</span>
            <span className="block">Our Commitment</span>
            <span className="block font-serif italic text-zinc-200 mt-2">to Excellence</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col max-w-xs mt-auto"
        >
          <div className="flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/20">
            <span className="text-yellow-400 text-xs">★★★★★</span>
            <span className="text-[11px] font-bold tracking-wider uppercase">5.0 Rating (99 Reviews)</span>
          </div>
          <p className="text-sm md:text-base opacity-90 font-medium leading-relaxed mb-6">
            Professional dental care under Dr. Nidhi in Goregaon West, ensuring your comfort and radiant smile.
          </p>
          <div className="flex gap-4 items-center mb-8">
             <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black text-sm transition-colors cursor-pointer">
                &larr;
             </button>
             <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black text-sm transition-colors cursor-pointer">
                &rarr;
             </button>
          </div>
          <a href="#contact" className="inline-block text-sm md:text-base font-semibold tracking-wide hover:opacity-70 transition-opacity">
            ( Book an Appointment )
          </a>
        </motion.div>
      </div>
    </section>
  );
}
