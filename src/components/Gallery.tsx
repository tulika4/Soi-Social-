import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2670&auto=format&fit=crop", // Tuk tuk
  "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop", // Rooftop
  "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2574&auto=format&fit=crop", // Cocktail
  "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=2670&auto=format&fit=crop", // Thai food
  "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2670&auto=format&fit=crop", // Neon street
  "https://images.unsplash.com/photo-1627843534509-f0270a647d6a?q=80&w=2574&auto=format&fit=crop", // Coffee
];

export default function Gallery() {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img 
                src={src} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Soi Social Life"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="bg-dark px-6 py-2 rounded-full text-white text-xs font-bold tracking-widest">VIEW STORY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
