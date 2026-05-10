import { motion } from "framer-motion";
import RoomTypes from "../components/RoomTypes";

export default function Rooms() {
  return (
    <div className="pt-20">
      <RoomTypes />
      
      <section className="py-24 bg-dark">
         <div className="container mx-auto px-6 md:px-10">
            <header className="mb-20">
               <span className="text-label text-primary block mb-6">The Selection Grid</span>
               <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">Designed for <br/> <span className="text-white">Urban Comfort.</span></h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="border border-white/10 p-10 hover:border-primary/50 transition-colors">
                  <h3 className="text-label text-primary mb-8 underline">Standard Features</h3>
                  <div className="grid grid-cols-2 gap-6">
                     {["Fiber WiFi", "Central AC", "Keycard Entry", "Secure Lockers", "Luxury Linen", "Organic Soap", "Rain Shower", "Work Desk"].map(feat => (
                        <div key={feat} className="flex items-center gap-3 opacity-60">
                           <div className="w-1 h-1 bg-primary rounded-full" />
                           <span className="text-xs font-bold uppercase tracking-widest">{feat}</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="border border-white/10 p-10 hover:border-primary/50 transition-colors flex flex-col justify-center">
                  <p className="text-2xl font-black uppercase tracking-tight mb-6">Need something bespoke?</p>
                  <p className="text-sm opacity-50 font-light leading-relaxed italic mb-10 max-w-sm">
                    We offer long-term nomad rates and group bookings for creative retreats. Get in touch with our team for a custom quote.
                  </p>
                  <button className="w-fit text-primary border-b-2 border-primary/30 pb-1 font-black text-xs tracking-widest uppercase hover:border-primary transition-all">
                     Contact Group Sales
                  </button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
