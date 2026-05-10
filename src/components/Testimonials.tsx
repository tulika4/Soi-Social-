import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Digital Nomad",
    image: "https://i.pravatar.cc/150?u=alex",
    quote: "Actually felt like a community. The rooftop movie nights were the highlight of my Bangkok trip. WiFi is legit.",
  },
  {
    name: "Sarah Chen",
    role: "Solo Traveler",
    image: "https://i.pravatar.cc/150?u=sarah",
    quote: "Safest I've felt in a dorm. The female-only floor is amazing and the staff treats you like family. 10/10 vibes.",
  },
  {
    name: "Marcus Low",
    role: "Creative Director",
    image: "https://i.pravatar.cc/150?u=marcus",
    quote: "This isn't just a hostel; it's a design experience. Every corner is Pinterest-worthy. A sanctuary in the chaos.",
  }
];

export default function Testimonials() {
  return (
    <section id="journal" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <Quote className="text-primary w-12 h-12 mb-6 opacity-50" />
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase italic tracking-tighter">Explorers <span className="text-white">Say...</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass-card rounded-[2.5rem] relative group"
            >
              <div className="mb-8 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                <Quote size={20} className="text-primary" />
              </div>
              <p className="text-lg text-off-white/80 italic mb-10 leading-relaxed font-light line-clamp-4">
                "{t.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-2xl overflow-hidden mr-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={t.image} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">{t.name}</h4>
                  <p className="text-primary text-xs font-mono">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
