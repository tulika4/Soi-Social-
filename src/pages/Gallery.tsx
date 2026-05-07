import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800",
  "https://images.unsplash.com/photo-1552423075-27aa18b26a63?q=80&w=800",
  "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=800",
  "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=800",
  "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800",
  "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=800",
  "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=800",
  "https://images.unsplash.com/photo-1627843534509-f0270a647d6a?q=80&w=800",
  "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark">
      <div className="container mx-auto px-6 md:px-10">
        <header className="mb-20">
          <span className="text-label text-primary block mb-6">Visual Storytelling</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-10">THE <span className="text-primary italic">GALLERY.</span></h1>
          <div className="flex gap-4 text-xs font-bold uppercase tracking-widest opacity-60">
             <span className="text-primary underline">Rooms</span>
             <span>Rooftop</span>
             <span>Community</span>
             <span>Bangkok Nights</span>
          </div>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden group cursor-pointer border border-white/10 p-2"
            >
              <img src={src} className="w-full grayscale group-hover:grayscale-0 transition-all duration-700" alt="Gallery" />
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="bg-primary text-dark px-4 py-2 text-[10px] font-black uppercase tracking-widest">
                   Shot by Explorer
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
