import { motion } from "motion/react";
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
                <h1 className="text
