import { motion } from "framer-motion";
import CommunityEvents from "../components/Community";

export default function Community() {
  return (
    <div className="pt-20">
      <CommunityEvents />
      
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
             <div className="border border-white/10 p-12 glass-card hover:border-primary transition-all group">
                <span className="text-label text-primary block mb-8">Social Mood</span>
                <h3 className="text-3xl font-black uppercase italic mb-6 group-hover:translate-x-2 transition-transform">Rooftop Beats</h3>
                <p className="text-sm opacity-50 font-light leading-relaxed">Resident DJs playing deep house and lo-fi as the sun sets over Sukhumvit.</p>
             </div>
             <div className="border border-white/10 p-12 glass-card hover:border-primary transition-all group">
                <span className="text-label text-primary block mb-8">Local Flavor</span>
                <h3 className="text-3xl font-black uppercase italic mb-6 group-hover:translate-x-2 transition-transform">Street Feast</h3>
                <p className="text-sm opacity-50 font-light leading-relaxed">Weekly communal dinners features authentic Thai street food curated by our staff.</p>
             </div>
             <div className="border border-white/10 p-12 glass-card hover:border-primary transition-all group">
                <span className="text-label text-primary block mb-8">Creative Flow</span>
                <h3 className="text-3xl font-black uppercase italic mb-6 group-hover:translate-x-2 transition-transform">Nomad Mix</h3>
                <p className="text-sm opacity-50 font-light leading-relaxed">Networking meetups for freelancers, travelers, and creators to sync up.</p>
             </div>
          </div>

          <div className="relative aspect-[21/9] overflow-hidden border border-white/5">
             <img src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670" className="w-full h-full object-cover grayscale opacity-50" alt="community vibe" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-2xl px-6">
                   <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-none uppercase">STAY SOCIAL.<br/>EXPLORE WILDLY.</h2>
                   <button className="px-10 py-4 bg-primary text-dark font-black tracking-widest text-sm hover:scale-105 transition-transform uppercase">See full event list</button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
