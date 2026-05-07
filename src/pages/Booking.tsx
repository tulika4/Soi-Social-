import { motion } from "motion/react";
import { Calendar as CalendarIcon, Users, ChevronRight, Check } from "lucide-react";
import { useState } from "react";

const rooms = [
  { id: 1, name: "Mixed Social Dorm", price: 450, image: "https://images.unsplash.com/photo-1555854817-5b226075671f?q=80&w=800" },
  { id: 2, name: "Female Only Haven", price: 550, image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=800" },
  { id: 3, name: "Minimal Private", price: 1200, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" },
  { id: 4, name: "Rooftop Suite", price: 2500, image: "https://images.unsplash.com/photo-1582719478237-af47b7c1d33b?q=80&w=800" },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const nextStep = () => setStep(s => s + 1);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-dark">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Steps & Selection */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border ${step >= i ? 'bg-primary text-dark border-primary' : 'border-white/20'}`}>
                    {step > i ? <Check size={14} /> : i}
                  </div>
                  {i < 3 && <div className={`w-12 h-[1px] ${step > i ? 'bg-primary' : 'bg-white/10'}`} />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">SELECT <span className="text-primary italic">ROOM.</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rooms.map((room) => (
                    <div 
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`group relative aspect-[4/3] border p-2 cursor-pointer transition-all duration-500 overflow-hidden ${selectedRoom === room.id ? 'border-primary' : 'border-white/10 hover:border-white/30'}`}
                    >
                      <img src={room.image} className={`w-full h-full object-cover transition-all duration-700 ${selectedRoom === room.id ? 'scale-110 grayscale-0' : 'grayscale group-hover:grayscale-0'}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-xl font-black uppercase">{room.name}</h3>
                        <p className="text-primary font-bold">฿{room.price}<span className="text-[10px] uppercase opacity-60"> / night</span></p>
                      </div>
                      {selectedRoom === room.id && (
                        <div className="absolute top-6 right-6 w-8 h-8 bg-primary text-dark flex items-center justify-center rounded-full">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button 
                  disabled={!selectedRoom}
                  onClick={nextStep}
                  className="mt-12 w-full py-6 bg-primary text-dark font-black uppercase tracking-widest disabled:opacity-30 flex items-center justify-center gap-4 group"
                >
                  Confirm Selection <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">CHECK <span className="text-primary italic">AVAILABILITY.</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-white/10 p-10 bg-white/5 backdrop-blur-md">
                   <div className="space-y-6">
                      <label className="text-label text-primary">Check-in / Check-out</label>
                      <div className="flex items-center gap-4 bg-dark/50 border border-white/10 p-4">
                        <CalendarIcon size={20} className="text-primary" />
                        <span className="text-sm font-bold opacity-60 uppercase tracking-widest">Select Dates</span>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <label className="text-label text-primary">Guests</label>
                      <div className="flex items-center gap-4 bg-dark/50 border border-white/10 p-4 text-white">
                        <Users size={20} className="text-primary" />
                        <span className="text-sm font-bold uppercase tracking-widest">1 Explorer</span>
                      </div>
                   </div>
                </div>
                <div className="mt-12 bg-white/5 border border-white/10 p-10">
                   <h4 className="text-label mb-6">Optional Add-ons</h4>
                   <div className="space-y-4">
                      {["Airport Pickup (+฿600)", "Rooftop Party Access (฿200)", "Artisan Breakfast (฿150)"].map(opt => (
                        <div key={opt} className="flex items-center gap-4 p-4 border border-white/5 hover:border-primary/20 cursor-pointer transition-colors">
                           <div className="w-5 h-5 border border-white/20 rounded" />
                           <span className="text-sm uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100">{opt}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <button 
                  onClick={nextStep}
                  className="mt-12 w-full py-6 bg-primary text-dark font-black uppercase tracking-widest flex items-center justify-center gap-4 group"
                >
                  Proceed to Payment <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            )}
          </div>

          {/* Right Side: Summary Card */}
          <div className="lg:col-span-4 self-start sticky top-32">
            <div className="border border-white/10 p-8 glass-card">
              <h3 className="text-label text-primary mb-8 underline">Booking Summary</h3>
              {selectedRoom ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs opacity-50 uppercase mb-1">Room selected</p>
                      <p className="text-lg font-black uppercase">{rooms.find(r => r.id === selectedRoom)?.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-50 uppercase mb-1">Price</p>
                      <p className="text-lg font-black text-primary">฿{rooms.find(r => r.id === selectedRoom)?.price}</p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-white/10" />
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-60">
                      <span>Subtotal (3 Nights)</span>
                      <span>฿{rooms.find(r => r.id === selectedRoom)!.price * 3}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-60">
                      <span>Tax & Service (10%)</span>
                      <span>฿{(rooms.find(r => r.id === selectedRoom)!.price * 3) * 0.1}</span>
                    </div>
                  </div>
                  <div className="h-[1px] bg-white/10" />
                  <div className="flex justify-between items-center bg-primary text-dark p-4 -mx-8">
                     <span className="text-xs font-black uppercase tracking-widest">Total Amount</span>
                     <span className="text-2xl font-black italic underline">฿{(rooms.find(r => r.id === selectedRoom)!.price * 3 * 1.1).toFixed(0)}</span>
                  </div>
                </div>
              ) : (
                <p className="text-sm opacity-50 italic">No room selected yet.</p>
              )}
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-label opacity-40">
               <div className="h-[1px] flex-1 bg-white/10" />
               <span>Secure Transaction</span>
               <div className="h-[1px] flex-1 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
