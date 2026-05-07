import { motion } from "motion/react";
import { Coffee, Wifi, Users, MapPin } from "lucide-react";

const features = [
  { icon: <Coffee />, title: "Artisan Café", desc: "Start your day with locally sourced beans." },
  { icon: <Wifi />, title: "Nomad Ready", desc: "Fiber-speed wifi in every corner." },
  { icon: <Users />, title: "Community", desc: "Dinner parties & spontaneous adventures." },
  { icon: <MapPin />, title: "Local Soul", desc: "Curated tours by people who live here." }
];

export default function About() {
  return (
    <section id="space" className="py-24 md:py-40 bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-6">Born in Bangkok // Since 2024</p>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              NOT JUST A BED. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">A SOCIAL HUB.</span>
            </h2>
            <p className="text-xl text-off-white/60 mb-12 leading-relaxed">
              Soi Social was founded on a simple idea: that travel is better when shared. 
              We've created a sanctuary for the curious, a home for the restless, and 
              a workplace for the digital wanderer. 
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="group">
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{f.title}</h4>
                  <p className="text-off-white/40 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10 border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=2573&auto=format&fit=crop" 
                alt="Soi Social Lounge"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 z-20 w-32 h-32 hidden md:block"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-primary opacity-20">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[10px] uppercase font-bold tracking-[2px]">
                  <textPath xlinkHref="#circlePath">
                    Stay Social • Explore Wildly • Bangkok Life •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
