import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Space", path: "/#space" },
    { name: "Rooms", path: "/rooms" },
    { name: "Community", path: "/community" },
    { name: "Nomads", path: "/digital-nomads" },
    { name: "Gallery", path: "/gallery" },
    { name: "Location", path: "/location" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-dark pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h3 className="text-5xl font-black mb-8 tracking-tighter">SOI<span className="text-primary italic">SOCIAL.</span></h3>
            <p className="text-light/40 max-w-sm mb-10 leading-relaxed font-light">
              Creative hubs for curious travelers. Born in Bangkok, exploring the world together.
            </p>
          </div>

          <div>
            <h4 className="text-label text-primary mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              {links.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-primary transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label text-primary mb-8">Newsletter</h4>
            <div className="relative border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-transparent text-sm focus:outline-none focus:placeholder-primary py-2"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-primary">
                <Mail size={16} />
              </button>
            </div>
            <p className="text-[10px] text-light/30 mt-4 uppercase tracking-widest">Join the inner circle for travel guides.</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex gap-8 text-[9px] uppercase tracking-widest opacity-40 font-bold">
            <span>Instagram: @soisocial_bkk</span>
            <span>TikTok: @travelersofsoi</span>
            <span>Spotify: Soi Sounds Vol. 04</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[9px] uppercase tracking-widest font-black">8 Beds Left for Tonight</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
            <span className="text-[9px] uppercase tracking-widest opacity-20 hidden md:block">© 2024 Soi Social Hostels Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
