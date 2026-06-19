import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto bg-[#f4f4f4] text-zinc-900 rounded-[2rem] -mt-8 relative z-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="w-full lg:w-1/4">
          <span className="text-xs font-semibold tracking-widest uppercase opacity-50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 block" />
            About
          </span>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-[52px] font-medium leading-[1.1] tracking-tight"
          >
            At Dr. Nidhi's Dental Clinic . we are dedicated to providing exceptional <span className="font-serif italic text-zinc-500 font-normal tracking-wide">dental care</span> in a warm , welcoming environment in Goregaon West. Our experienced team uses the latest technology <span className="font-serif italic text-zinc-500 font-normal tracking-wide">to offer a range of treatments.</span>
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-end">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1590611936760-eeb9bc9cb885?auto=format&fit=crop&w=600&q=80" 
              alt="Happy patient smiling" 
              className="w-full md:w-1/2 rounded-xl object-cover h-[300px] sm:h-[400px] aspect-[4/5]"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-8 pb-8"
            >
              <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center">
                <span className="block w-2.5 h-2.5 rounded-full bg-zinc-900" />
              </div>
              <p className="text-sm md:text-base leading-relaxed opacity-70 max-w-sm">
                We offer top-tier dental care in a welcoming space, using advanced technology for tailored treatments that prioritize your smile.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
