import { motion } from "framer-motion";
import DigitalNomad from "../components/DigitalNomad";

export default function DigitalNomads() {
  return (
    <div className="pt-20">
      <DigitalNomad />
      
      <section className="py-24 bg-dark">
         <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               <div>
                  <span className="text-label text-primary block mb-6">Lifestyle // Efficiency</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-10 italic">Work from <br/> <span className="text-white">Paradise.</span></h2>
                  <div className="space-y-12">
                     {[
                        { t: "Seamless Check-in", desc: "Arrive at 3AM? Our fiber kicks in before you even unpack." },
                        { t: "Network Events", desc: "Weekly nomad meetups to sync with other creators." },
                        { t: "Power Everywhere", desc: "Universal sockets and USB-C ports at every bed and table." }
                     ].map((item, i) => (
                        <div key={i} className="group cursor-default">
                           <div className="flex items-center gap-6 mb-4">
                              <span className="text-primary font-mono font-bold">0{i+1}</span>
                              <h3 className="text-2xl font-black uppercase tracking-tighter underline decoration-primary/30 group-hover:decoration-primary transition-all underline-offset-8">{item.t}</h3>
                           </div>
                           <p className="pl-12 text-sm opacity-50 font-light italic leading-relaxed">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-square border border-white/10 p-4">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000" className="w-full h-full object-cover grayscale" alt="Nomad life" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full flex items-center justify-center p-10 text-center animate-spin-slow">
                     <span className="text-dark font-black tracking-widest text-[9px] uppercase leading-tight">Fastest • WiFi • In • Sukhumvit • Digital • Nomads •</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
}
