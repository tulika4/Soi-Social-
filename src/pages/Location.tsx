import { motion } from "framer-motion";
import { Train, Navigation, Coffee, ShoppingBag, MapPin } from "lucide-react";

export default function Location() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-24">
           <div className="lg:col-span-8">
              <span className="text-label text-primary block mb-6">Explore the Neighborhood</span>
              <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase">SUKHUMVIT <br/><span className="text-primary italic">SOI 11.</span></h1>
           </div>
           <div className="lg:col-span-4 border-l-[3px] border-primary pl-8 pb-4">
              <p className="text-lg font-light italic opacity-60 leading-relaxed">
                Located in the pulse of Bangkok's vibrant Sukhumvit district. Steps away from the BTS, the best street food, and hidden gems.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10">
           {/* Interactive Map Placeholder */}
           <div className="lg:col-span-8 aspect-video md:aspect-auto h-[400px] md:h-auto bg-[#111] relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=2670" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                alt="Map context"
              />
              <div className="absolute inset-0 flex items-center justify-center p-10 cursor-pointer">
                 <div className="p-10 border border-white/20 glass-card text-center group-hover:border-primary/50 transition-all">
                    <MapPin size={40} className="text-primary mx-auto mb-6" />
                    <h3 className="text-3xl font-black uppercase tracking-tighter">Open Interactive Map</h3>
                    <p className="text-label opacity-40 mt-4">123 Sukhumvit Soi 11, Bangkok, Thailand</p>
                 </div>
              </div>
              
              {/* Floating Labels */}
              <div className="absolute top-1/4 left-1/3 p-2 bg-primary text-dark font-black tracking-widest text-[8px] uppercase">Soi Social Hub</div>
              <div className="absolute bottom-1/3 right-1/4 p-2 border border-white/20 text-white font-black tracking-widest text-[8px] uppercase backdrop-blur-sm">BTS Nana Station</div>
           </div>

           <div className="lg:col-span-4 bg-white/5 p-10 md:p-16 space-y-16">
              <div>
                 <h4 className="text-label text-primary mb-10">Connectivity</h4>
                 <div className="space-y-8">
                    <div className="flex gap-6 items-start group">
                       <Train size={24} className="text-primary mt-1" />
                       <div>
                          <p className="font-black uppercase tracking-tighter text-xl">BTS Nana</p>
                          <p className="text-xs opacity-50 font-light mt-1 italic">5 mins walk (400m)</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start group">
                       <Navigation size={24} className="text-primary mt-1" />
                       <div>
                          <p className="font-black uppercase tracking-tighter text-xl">MRT Sukhumvit</p>
                          <p className="text-xs opacity-50 font-light mt-1 italic">1 stop or 15 mins walk</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div>
                 <h4 className="text-label text-primary mb-10">Pulse Check</h4>
                 <div className="space-y-8">
                    <div className="flex gap-6 items-start group">
                       <Coffee size={24} className="text-primary mt-1" />
                       <div>
                          <p className="font-black uppercase tracking-tighter text-xl">Coffee Culture</p>
                          <p className="text-xs opacity-50 font-light mt-1 italic">V8 Diner, Coffeeology, local carts</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start group">
                       <ShoppingBag size={24} className="text-primary mt-1" />
                       <div>
                          <p className="font-black uppercase tracking-tighter text-xl">Night Markets</p>
                          <p className="text-xs opacity-50 font-light mt-1 italic">Nana Night Market right outside</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
