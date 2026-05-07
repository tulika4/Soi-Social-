import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Laptop, Cpu, Coffee, Globe } from "lucide-react";

export default function DigitalNomad() {
  return (
    <section id="nomad" className="py-24 bg-primary relative overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12 mb-16">
             <span className="text-label text-dark block mb-6">Work from Bangkok // Seamlessly</span>
             <h2 className="text-6xl md:text-[10rem] font-black text-dark leading-[0.85] tracking-tighter">
              OFFICE <br/> UPGRADE.
             </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 order-2 lg:order-1">
            {[
              { icon: <Cpu />, title: "High-Speed", desc: "Dedicated fiber line (500Mbps) for uninterrupted calls." },
              { icon: <Laptop />, title: "Hot Desks", desc: "Comfortable ergonomic seating in air-con comfort." },
              { icon: <Globe />, title: "Quiet Zones", desc: "For those deep focus sessions and private calls." },
              { icon: <Coffee />, title: "Unlimited Fuel", desc: "Artisan coffee on tap, roasted in small batches." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-dark/10 group hover:bg-dark hover:text-white transition-all cursor-default">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-2">{item.title}</h4>
                <p className="text-xs opacity-60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="border-l-[3px] border-dark pl-8 italic font-light text-dark/70 text-xl leading-relaxed">
              Swap the fluorescent lights for Bangkok skylines. Our space is designed for those who don't compromise on productivity.
            </div>
            <Link to="/digital-nomads" className="mt-12 group flex items-center gap-4 text-dark text-label">
              <span>Explore Facilities</span>
              <div className="h-[2px] w-12 bg-dark group-hover:w-24 transition-all"></div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap opacity-5 select-none pointer-events-none">
        <div className="text-[25rem] font-black italic animate-marquee">
          SOI_SOCIAL_NOMAD_HUB_BANGKOK_
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: inline-block;
        }
      `}} />
    </section>
  );
}
