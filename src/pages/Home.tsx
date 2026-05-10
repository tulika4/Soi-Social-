import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import RoomTypes from "../components/RoomTypes";
import Community from "../components/Community";
import DigitalNomad from "../components/DigitalNomad";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <RoomTypes />
      <Community />
      <DigitalNomad />
      <Testimonials />
      <Gallery />
    </motion.div>
  );
}
