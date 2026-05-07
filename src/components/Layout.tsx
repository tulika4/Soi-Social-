import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-dark min-h-screen selection:bg-primary selection:text-dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative overflow-x-hidden">
        {children}
      </main>

      {/* Persistent Floating Booking Button */}
      <Link to="/booking">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="fixed bottom-10 right-10 z-[60] group cursor-pointer hidden md:block"
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* SVG circle text rotation */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
                <path id="floatingCirclePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[10px] font-black uppercase tracking-[2px]">
                  <textPath xlinkHref="#floatingCirclePath">
                    • BOOK YOUR BED • STAY SOCIAL • BANGKOK •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-dark shadow-2xl transition-transform group-hover:scale-90">
              <ArrowRight size={24} />
            </div>
          </div>
        </motion.div>
      </Link>

      <Footer />
    </div>
  );
}
