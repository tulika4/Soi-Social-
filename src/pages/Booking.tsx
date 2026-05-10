import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Users, ChevronRight, Check, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

// The direct connection to your Supabase "Phone Line"
import { supabase } from "../lib/supabase"; 

const rooms = [
  { id: 1, name: "Mixed Social Dorm", price: 450, image: "https://images.unsplash.com/photo-1555854817-5b226075671f?q=80&w=800" },
  { id: 2, name: "Female Only Haven", price: 550, image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=800" },
  { id: 3, name: "Minimal Private", price: 1200, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" },
  { id: 4, name: "Rooftop Suite", price: 2500, image: "https://images.unsplash.com/photo-1582719478237-af47b7c1d33b?q=80&w=800" },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const nextStep = () => setStep(s => s + 1);

  const selectedRoomData = rooms.find(r => r.id === selectedRoom);
  const totalPrice = selectedRoomData ? (selectedRoomData.price * 3 * 1.1).toFixed(0) : 0;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedRoomData) return;

    setIsSubmitting(true);
    try {
      // We use 'supabase' directly here
      const { data, error } = await supabase
        .from('booking')
        .insert([
          {
            guest_name: customerName,
            email: customerEmail,
            room: selectedRoomData.name,
            check_in: '2026-05-12', 
            check_out: '2026-05-15', 
            guests: 1 
          }
        ])
        .select();

      if (error) throw error;
      
      // If Supabase returns the new row, we use its unique ID
      if (data && data.length > 0) {
        setBookingRef(data[0].id.toString());
      } else {
        setBookingRef('RES-' + Math.random().toString(36).substr(2, 9).toUpperCase());
      }
      
      nextStep();
    } catch (error: any) {
      console.error('Error submitting booking:', error);
      alert(`Failed to submit booking: ${error.message || 'Check connection'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-20 bg-dark relative">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
         <span className="text-[20rem] font-black italic">RESERVE</span>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 mb-16">
              {[
                { n: 1, label: "Selection" },
                { n: 2, label: "Details" },
                { n: 3, label: "Checkout" }
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-4 group">
                  <div className={`w-10 h-10 border-2 flex items-center justify-center text-[10px] font-black uppercase transition-all duration-500 ${step >= s.n ? 'border-primary bg-primary text-dark' : 'border-white/10 text-white/20'}`}>
                    {step > s.n ? <Check size={14} /> : s.n}
                  </div>
                  <span className={`text-label transition-opacity ${step === s.n ? 'opacity-100' : 'opacity-20'}`}>{s.label}</span>
                  {s.n < 3 && <div className="h-[1px] w-12 bg-white/10" />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <h1 className="text-6xl md:text-9xl font-black mb-16 tracking-[-0.07em] uppercase leading-none">
                  CHOOSE <br/> <span className="text-primary italic">YOUR POD.</span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {rooms.map((room) => (
                    <button 
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`group relative text-left border p-3 transition-all duration-700 ${selectedRoom === room.id ? 'border-primary bg-primary/[0.03]' : 'border-white/5 hover:border-white/20'}`}
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                         <img src={room.image} className={`w-full h-full object-cover transition-all duration-1000 ${selectedRoom === room.id ? 'scale-110 grayscale-0' : 'grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100'}`} />
                         <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
                      </div>
                      <div className="mt-6 flex justify-between items-end px-4 pb-4">
                         <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight italic">{room.name}</h3>
                            <p className="text-label mt-1 text-white/40">Premium Comfort</p>
                         </div>
                         <div className="text-right">
                            <span className="text-2xl font-light underline decoration-primary underline-offset-4 tracking-tighter">฿{room.price}</span>
                         </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-20 flex justify-end">
                   <button 
                    disabled={!selectedRoom}
                    onClick={nextStep}
                    className="group flex items-center gap-10 disabled:opacity-20 transition-opacity"
                   >
                     <span className="text-label text-[12px] group-hover:text-primary transition-colors">Confirm and Continue</span>
                     <div className="w-24 h-[2px] bg-primary group-hover:w-40 transition-all origin-left" />
                   </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-6xl md:text-9xl font-black mb-16 tracking-[-0.07em] uppercase leading-none">
                  SECURE <br/> <span className="text-primary italic">DATES.</span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/5">
                   <div className="bg-white/[0.02] p-12 space-y-8">
                      <label className="text-label opacity-40">Period of stay</label>
                      <div className="flex items-center gap-6 group cursor-pointer">
                         <CalendarIcon size={24} className="text-primary group-hover:scale-110 transition-transform" />
                         <div className="border-b border-white/20 pb-2 flex-1 group-hover:border-primary transition-colors">
                            <span className="text-xl font-bold uppercase tracking-widest italic">MAY 12 — MAY 15</span>
                         </div>
                      </div>
                   </div>
                   <div className="bg-white/[0.02] p-12 space-y-8">
                      <label className="text-label opacity-40">Group Size</label>
                      <div className="flex items-center gap-6 group cursor-pointer">
                         <Users size={24} className="text-primary group-hover:scale-110 transition-transform" />
                         <div className="border-b border-white/20 pb-2 flex-1 group-hover:border-primary transition-colors">
                            <span className="text-xl font-bold uppercase tracking-widest italic">1 EXPLORER</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-20 flex justify-end">
                   <button 
                    onClick={nextStep}
                    className="group flex items-center gap-10 transition-all"
                   >
                     <span className="text-label text-[12px] group-hover:text-primary transition-colors">Confirm Details</span>
                     <div className="w-24 h-[2px] bg-primary group-hover:w-40 transition-all origin-left" />
                   </button>
                </div>
              </motion.div>
            )}

            {step === 3 && !bookingRef && (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                <h1 className="text-6xl md:text-9xl font-black mb-16 tracking-[-0.07em] uppercase leading-none">
                  FINAL <br/> <span className="text-primary italic">DETAILS.</span>
                </h1>
                
                <form onSubmit={handleSubmit} className="space-y-10 max-w-xl">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="ENTER NAME"
                      className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl font-light italic uppercase focus:border-primary outline-none transition-colors" 
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="ENTER EMAIL"
                      className="w-full bg-transparent border-b border-white/20 pb-4 text-2xl font-light italic uppercase focus:border-primary outline-none transition-colors" 
                    />
                  </div>

                  <div className="pt-10">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-10 disabled:opacity-50 transition-all"
                    >
                      <span className="text-label text-[12px] group-hover:text-primary transition-colors">
                        {isSubmitting ? 'PROCESSING...' : 'COMPLETE RESERVATION'}
                      </span>
                      {isSubmitting ? (
                        <Loader2 className="animate-spin text-primary" size={20} />
                      ) : (
                        <div className="w-24 h-[2px] bg-primary group-hover:w-40 transition-all origin-left" />
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {bookingRef && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="max-w-xl py-20">
                   <div className="w-20 h-20 bg-primary/10 border border-primary/20 flex items-center justify-center mb-10">
                      <Check size={40} className="text-primary" />
                   </div>
                   <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-[-0.07em] uppercase leading-none">
                     YOU'RE <br/> <span className="text-primary italic">IN.</span>
                   </h1>
                   <p className="text-xl text-white/40 italic mb-10 max-w-sm leading-relaxed">
                     Your reservation at Soi Social BKK is confirmed.
                   </p>
                   <div className="p-8 border border-white/10 bg-white/[0.02]">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-4">Reservation ID</p>
                      <p className="text-2xl font-mono text-primary font-bold italic">#{bookingRef.toUpperCase()}</p>
                   </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-4 lg:mt-32">
             <div className="sticky top-32">
                <div className="border border-white/10 p-10 glass-card relative overflow-hidden">
                   <h3 className="text-label mb-10 underline decoration-primary underline-offset-8">Reservation Data //</h3>
                   
                   {selectedRoomData ? (
                     <div className="space-y-10">
                        <div>
                           <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Selected Suite</p>
                           <p className="text-2xl font-black italic uppercase tracking-tighter">{selectedRoomData.name}</p>
                        </div>
                        <div className="pt-10 border-t border-white/10">
                           <div className="flex justify-between items-baseline mb-1">
                              <span className="text-label">Total Est.</span>
                              <span className="text-5xl font-black italic text-primary tracking-tighter">฿{totalPrice}</span>
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="py-10 text-center border border-dashed border-white/10">
                        <p className="text-[10px] uppercase font-black tracking-widest opacity-20">Awaiting Selection</p>
                     </div>
                   )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
