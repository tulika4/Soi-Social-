import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Music, Map, Sword, Utensils } from "lucide-react";

const events = [
  {
    title: "Pub Crawl Thursdays",
    time: "Every Thu, 8PM",
    desc: "Bangkok's best hidden bars. First drink is on us.",
    icon: <Music className="text-primary" />,
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a34d1?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Muay Thai Class",
    time: "Mon & Wed, 5PM",
    desc: "Learn from local masters. Sweat it out.",
    icon: <Sword className="text-primary" />,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2600&auto=format&fit=crop"
  },
  {
    title: "Night Market Tour",
    time: "Tue & Sat, 7PM",
    desc: "Discover street food gems you won't find on Yelp.",
    icon: <Utensils className="text-primary" />,
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=2574&auto=format&fit=crop"
  }
];

export default function Community() {
  return (
    <section id="community" className="py-24 bg-[#111] border-b border-light/10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-label">Happening Tonight</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">THE SOCIAL <br/><span className="text-primary italic">AGENDA.</span></h2>
            <p className="text-sm opacity-50 font-light max-w-xs leading-relaxed italic">
              Led by our local creators-in-residence. No tourists allowed, only explorers.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {events.map((event, i) => (
              <Link
                key={i}
                to="/community"
                className="group flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/5 pb-8 transition-all cursor-pointer block"
              >
                <motion.div whileHover={{ x: 10 }} className="flex flex-1 items-center justify-between">
                  <div className="flex items-center gap-8 mb-4 md:mb-0">
                     <div className="text-primary text-2xl font-mono grayscale group-hover:grayscale-0 transition-all">
                       {event.time.split(',')[1]?.trim() || "LIVE"}
                     </div>
                     <div>
                       <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">{event.title}</h3>
                       <p className="text-xs opacity-50 uppercase tracking-[0.1em] mt-1">{event.desc}</p>
                     </div>
                  </div>
                  <div className="w-32 h-20 overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
                    <img src={event.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={event.title} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
