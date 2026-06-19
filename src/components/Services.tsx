import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const services = [
  // Placeholder images - Please replace these URLs with your specific 3D transparent PNG models.
  { id: "01", title: "Aesthetic dentistry", col: 1, row: 1, img: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=200&q=80" },
  { id: "02", title: "Veneers", col: 3, row: 1, img: "https://images.unsplash.com/photo-1598256989467-3eefa1cce3b8?auto=format&fit=crop&w=200&q=80" },
  { id: "03", title: "Wisdom tooth extraction", col: 4, row: 1, img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=200&q=80", description: "Wisdom tooth extraction is not a scary procedure at Nova Dental. Get professional help." },
  { id: "04", title: "Implantation", col: 1, row: 2, img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=200&q=80" },
  { id: "05", title: "Orthodontic treatment", col: 2, row: 2, img: "https://images.unsplash.com/photo-1536340248066-e047cde6c579?auto=format&fit=crop&w=200&q=80" },
  { id: "06", title: "Professional hygiene", col: 4, row: 2, img: "https://images.unsplash.com/photo-1520013915181-e23fadd35e23?auto=format&fit=crop&w=200&q=80" },
  { id: "07", title: "Teeth whitening", col: 2, row: 3, img: "https://images.unsplash.com/photo-1445583934509-4c3affcbd00e?auto=format&fit=crop&w=200&q=80" },
  { id: "08", title: "Surgical dentistry", col: 3, row: 3, img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=200&q=80" },
  { id: "09", title: "Braces", col: 4, row: 3, img: "https://images.unsplash.com/photo-1506544777-64cfbea7e51c?auto=format&fit=crop&w=200&q=80" },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Generate a 4x3 grid (12 cells total).
  const cells = Array.from({ length: 12 }, (_, i) => {
    const row = Math.floor(i / 4) + 1;
    const col = (i % 4) + 1;
    const service = services.find(s => s.col === col && s.row === row);
    return { row, col, service };
  });

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto bg-[#f4f4f4] text-zinc-900 rounded-[2rem] -mt-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
        <div className="w-full lg:w-1/4">
          <span className="text-xs font-semibold tracking-widest uppercase opacity-50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 block" />
            Services
          </span>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight"
          >
            Transforming Smiles <br className="hidden md:block" />
            <span className="font-serif italic text-zinc-600">with Modern Treatments</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base leading-relaxed opacity-70 max-w-lg"
          >
            Whether you're in need of a routine check-up, a cosmetic enhancement, or emergency care, we have the expertise and technology to give you the best possible care.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cells.map((cell, index) => {
          if (!cell.service) {
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                key={`empty-${index}`} 
                className="hidden lg:block min-h-[300px] rounded-2xl bg-[#e8e8e8]" 
              />
            );
          }
          
          const isHovered = hoveredId === cell.service.id;

          return (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              key={cell.service.id}
              onMouseEnter={() => setHoveredId(cell.service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "relative flex flex-col justify-between p-6 rounded-2xl min-h-[320px] transition-colors duration-500 cursor-pointer overflow-hidden group",
                isHovered ? "bg-zinc-800 text-white" : "bg-white text-zinc-900"
              )}
            >
              <div className="flex justify-between items-start w-full relative z-10">
                <div className="w-24 h-20 rounded-lg overflow-hidden mix-blend-multiply group-hover:mix-blend-normal transition-all duration-500">
                  <img 
                    src={cell.service.img} 
                    alt={cell.service.title} 
                    className="w-full h-full object-cover filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-110 origin-center" 
                  />
                </div>
                <div className="text-xs font-medium opacity-60 transition-opacity whitespace-nowrap">
                  {isHovered ? (
                    <motion.button 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-1 opacity-100 bg-white text-zinc-900 rounded-full py-1.5 px-3 -mt-1 -mr-1 text-[10px] font-semibold tracking-wide shadow-sm"
                    >
                      Book an Appointment <ArrowUpRight className="w-3 h-3 ml-0.5" />
                    </motion.button>
                  ) : (
                    <span>( + )</span>
                  )}
                </div>
              </div>
              
              <div className="relative z-10 pt-8 mt-auto flex flex-col">
                <div className="text-xs opacity-50 font-medium mb-2 tracking-wider">
                  [{cell.service.id}]
                </div>
                <h3 className="text-2xl font-medium leading-tight">
                  {cell.service.title}
                </h3>
                
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm opacity-80 leading-relaxed font-medium">
                        {cell.service.description || "Expert treatment using modern dental technology."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
