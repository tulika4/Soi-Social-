import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Rooms from "./pages/Rooms";
import Community from "./pages/Community";
import DigitalNomads from "./pages/DigitalNomads";
import Gallery from "./pages/Gallery";
import LocationPage from "./pages/Location";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/community" element={<Community />} />
        <Route path="/digital-nomads" element={<DigitalNomads />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-dark flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-[2px] bg-primary mb-4"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-black tracking-tighter text-white"
              >
                SOI<span className="text-primary italic">SOCIAL</span>
              </motion.span>
            </div>
          </motion.div>
        ) : (
          <Layout>
            <AnimatedRoutes />
          </Layout>
        )}
      </AnimatePresence>
    </Router>
  );
}
