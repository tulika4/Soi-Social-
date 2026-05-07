import { motion } from "motion/react";
import { User, ShieldCheck, Zap, Waves, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const rooms = [
  {
    name: "Mixed Social Dorm",
    price: "฿450",
    image: "https://images.unsplash.com/photo-1555854817-5b226075671f?q=80&w=2670&auto=format&fit=crop",
    amenities: ["Pod beds", "Privacy curtains", "AC", "Personal locker"],
    occupancy: "8-10 People",
    icon: <User size={16} />
  },
  {
    name: "Female Only Haven",
    price: "฿550",
    image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=2574&auto=format&fit=crop",
    amenities: ["Vanity area", "Organic toiletries", "AC", "Safe floor"],
    occupancy: "6 People",
    icon: <ShieldCheck size={16} />
  },
  {
    name: "Minimal Private",
    price: "฿1,200",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
    amenities: ["Queen bed", "Smart TV", "Ensuite rain shower", "Desk"],
    occupancy: "2 People",
    icon: <Zap size={16} />
  },
  {
    name: "Rooftop Suite",
    price: "฿2,500",
    image: "https://images.unsplash.com/photo-1582719478237-af47b7c1d33b?q=80&w=2574&auto=format&fit=crop",
    amenities: ["Floor-to-ceiling windows", "Private balcony", "Mini bar", "Bathtub"],
    occupancy: "2 People",
    icon: <Waves size={16} />
  }
];

export default function RoomTypes() {
  return (
    <section id="rooms" className="py-24 bg-dark border-b border-light/10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-0 md:gap-20">
          <div className="col-span-12 lg:col-span-4 border-r border-light/10 pr-0 lg:pr-10 pb-10 lg:pb-0">
            <span className="text-label text-primary block mb-6">Where you sleep</span>
            <div className="space-y-10">
              {rooms.map((room, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`flex justify-between items-end border-b border-white/10 pb-4 transition-opacity ${i > 2 ? 'opacity-40' : ''}`}
                >
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{room.name}</h3>
                    <p className="text-[10px] opacity-60 uppercase tracking-widest mt-1">{room.occupancy}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-light">{room.price.replace('฿', '$')}</span>
                    <span className="text-[10px] opacity-50 block uppercase">/ Night</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <ArrowLeft size={16} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.slice(0, 2).map((room, i) => (
                <Link
                  key={i}
                  to="/booking"
                  className="relative aspect-video md:aspect-[4/5] border border-white/10 p-2 group overflow-hidden block"
                >
                   <motion.div whileHover={{ y: -10 }} className="h-full">
                     <img src={room.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={room.name} />
                     <div className="absolute bottom-6 left-6 bg-primary text-dark px-4 py-2 text-[10px] font-black uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all z-10">
                       View Details
                     </div>
                   </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
