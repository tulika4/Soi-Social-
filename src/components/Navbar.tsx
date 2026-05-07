import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: "Space", path: "/#space" },
    { name: "Rooms", path: "/rooms" },
    { name: "Community", path: "/community" },
    { name: "Nomads", path: "/digital-nomads" },
    { name: "Gallery", path: "/gallery" },
    { name: "Location", path: "/location" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-10 md:py-6 flex justify-between items-center border-b border-light/10 bg-dark/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-10"
      >
        <Link to="/" className="text-2xl font-black tracking-tighter text-primary">
          SOI SOCIAL.
        </Link>
        
        <div className="hidden lg:flex gap-8 text-label">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`hover:text-primary transition-colors ${pathname === item.path ? 'text-primary' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="flex items-center gap-8">
        <div className="hidden md:block text-label opacity-60">
          BANGKOK 13:42 GMT+7
        </div>
        <Link to="/booking" className="bg-primary text-dark px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors">
          Book Your Bed
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-dark border-b border-white/10 p-6 flex flex-col space-y-4 lg:hidden overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-2xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
