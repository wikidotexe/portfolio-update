"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./css/loader.css";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1.5 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="loader"></div>
      </motion.div>
    </motion.div>
  );
}
