import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full border-b border-light/10 overflow-hidden flex items-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2670&auto=format&fit=crop"
          alt="Bangkok starts here"
          className="w-full h-full object-cover scale-105 motion-safe:animate-[slow-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-10 z-10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] md:text-[10rem] font-black leading-[0.85] tracking-tighter mb-8"
          >
            BANGKOK<br />
            <span className="text-primary">STARTS</span> HERE.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="border-primary border-l-[3px] pl-6 max-w-lg mb-12"
          >
            <p className="text-lg md:text-xl font-light italic text-light/80 leading-relaxed">
              Stay social. Work remotely. Explore wildly. <br />
              A boutique urban sanctuary designed for the modern explorer.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
             <Link to="/booking" className="bg-primary text-dark px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors">
                Book Your Bed
             </Link>
             <div className="flex -space-x-4 items-center pl-6">
              <div className="flex -space-x-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-gray-500 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="explorer" />
                  </div>
                ))}
              </div>
              <div className="pl-6">
                <p className="text-label opacity-60 mb-1 text-[8px]">Joined community</p>
                <p className="text-xs font-black">+2k EXPLORERS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Structural Label */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 text-label vertical-rl hidden md:flex">
         <div className="w-[1px] h-20 bg-primary/30"></div>
         <span className="rotate-180">SOI SOCIAL 2024 COLLECTION</span>
      </div>
    </section>
  );
}
