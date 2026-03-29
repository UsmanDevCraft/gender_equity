"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import metaData from "../json/meta_data.json";

interface MetaDataModalProps {
  outfitIndex: number;
}

const MetaDataModal = ({ outfitIndex }: MetaDataModalProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const data = metaData[outfitIndex - 1];

  if (!data) return null;

  return (
    <div className="absolute top-32 left-8 z-30 flex flex-col items-start pointer-events-none">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="modal"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-80 p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl relative pointer-events-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="mb-4 pr-8">
              <h2 className="text-xl font-bold text-white mb-2">
                {data.title}
              </h2>
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {data.description}
            </p>
            <div className="space-y-3 p-4 bg-white/5 rounded-2xl border border-white/5">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                Notable Figures
              </h3>
              <div className="text-xs space-y-2">
                <div>
                  <span className="text-blue-400 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">
                    Male
                  </span>
                  <span className="text-white/80">{data.examples.male}</span>
                </div>
                <div>
                  <span className="text-pink-400 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">
                    Female
                  </span>
                  <span className="text-white/80">{data.examples.female}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="pointer-events-auto"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="p-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl hover:bg-white/10 transition-colors text-white flex items-center justify-center group"
            >
              <Info className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MetaDataModal;
