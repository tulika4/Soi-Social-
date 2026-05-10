import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12 mb-10">
             <span className="text-label text-primary block mb-6">Connect with us</span>
             <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">GET IN <br/><span className="text-primary italic">TOUCH.</span></h1>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="border-b border-white/20 pb-4 focus-within:border-primary transition-colors">
                    <label className="text-label opacity-40 mb-2 block">Name</label>
                    <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent font-bold tracking-widest focus:outline-none placeholder:opacity-20" />
                 </div>
                 <div className="border-b border-white/20 pb-4 focus-within:border-primary transition-colors">
                    <label className="text-label opacity-40 mb-2 block">Email</label>
                    <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent font-bold tracking-widest focus:outline-none placeholder:opacity-20" />
                 </div>
               </div>
               <div className="border-b border-white/20 pb-4 focus-within:border-primary transition-colors">
                  <label className="text-label opacity-40 mb-2 block">Message</label>
                  <textarea rows={4} placeholder="TELL US ANYTHING" className="w-full bg-transparent font-bold tracking-widest focus:outline-none resize-none placeholder:opacity-20"></textarea>
               </div>
               <button className="px-12 py-6 bg-primary text-dark font-black uppercase tracking-widest hover:bg-white transition-colors">
                  Send Inquiry
               </button>
            </form>

            <div className="mt-24">
               <h3 className="text-label mb-10 text-primary">Frequently Asked Questions</h3>
               <div className="space-y-6">
                 {[
                   { q: "Is check-in available 24/7?", a: "Yes, our reception is staff around the clock. Please let us know if you arrive after midnight." },
                   { q: "Do you have high-speed wifi for nomads?", a: "Absolutely. We have a dedicated fiber line with 500Mbps speed across the entire building." },
                   { q: "What is your cancellation policy?", a: "Free cancellation up to 48 hours before your arrival date." }
                 ].map((faq, i) => (
                   <details key={i} className="group border border-white/10 p-6 open:bg-white/5 transition-all">
                      <summary className="list-none cursor-pointer flex justify-between items-center text-sm font-black uppercase tracking-wider">
                         {faq.q}
                         <span className="text-primary group-open:rotate-180 transition-transform">+</span>
                      </summary>
                      <p className="mt-6 text-sm opacity-60 leading-relaxed font-light italic">
                         {faq.a}
                      </p>
                   </details>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
             <div className="border border-white/10 p-10 bg-white/5 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                   <span className="text-8xl font-black italic">SOI</span>
                </div>
                <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  LIVE SUPPORT
                </h3>
                <div className="space-y-8">
                   <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                         <Mail size={18} />
                      </div>
                      <div>
                         <p className="text-label opacity-40">Email</p>
                         <p className="font-bold">hello@soisocial.bkk</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                         <Phone size={18} />
                      </div>
                      <div>
                         <p className="text-label opacity-40">Phone</p>
                         <p className="font-bold">+66 2 123 4567</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                         <MessageSquare size={18} />
                      </div>
                      <div>
                         <p className="text-label opacity-40">WhatsApp</p>
                         <p className="font-bold text-primary">Open Chat Now</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="space-y-6">
                <h4 className="text-label opacity-40">Follow our journey</h4>
                <div className="flex gap-4">
                   {[Instagram, Facebook, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                         <Icon size={20} />
                      </a>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
