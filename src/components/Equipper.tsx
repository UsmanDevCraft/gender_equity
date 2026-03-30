"use client";

import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  RotateCw,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  OUTFITS_MALE,
  OUTFITS_FEMALE,
  BACKGROUND_IMAGES,
} from "@/src/constants/avatar_assets";
import MetaDataModal from "./MetaDataModal";
import type { MinimalAvatarProps } from "@/src/types";
import { AvatarScene } from "./Avatar/AvatarScene";
import { AvatarLoader } from "./Avatar/AvatarLoader";

export default function MinimalAvatar({
  glbAssets = {},
  preview = {},
}: MinimalAvatarProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [rotationY, setRotationY] = useState(0);
  const [outfitIndex, setOutfitIndex] = useState(1);

  const handleNextOutfit = () => {
    setOutfitIndex((prev) => (prev === 10 ? 1 : prev + 1));
  };

  const handlePrevOutfit = () => {
    setOutfitIndex((prev) => (prev === 1 ? 10 : prev - 1));
  };

  const currentBgImage =
    BACKGROUND_IMAGES[`bg${outfitIndex}`] || BACKGROUND_IMAGES.bg1;

  return (
    <div className="relative w-full h-screen flex bg-[#030712] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
          style={{ backgroundImage: `url(${currentBgImage})` }}
        />
      </AnimatePresence>

      {/* Sidebar */}

      <div className="relative flex-1 h-full">
        {/* Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />

        {/* Header */}
        <nav className="absolute top-0 left-0 right-0 z-30 px-8 py-8 flex justify-between items-center bg-gradient-to-b from-black/20 to-transparent">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Gender Equity
              </span>
            </div>
          </motion.div>
        </nav>

        <MetaDataModal outfitIndex={outfitIndex} />

        {/* Camera Controls Panel */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 p-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl"
          >
            <button
              onClick={() => setRotationY(rotationY - 45)}
              className="p-3 hover:bg-white/10 rounded-2xl transition-all text-white/50 hover:text-white"
              title="Rotate Left"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setRotationY(rotationY + 45)}
              className="p-3 hover:bg-white/10 rounded-2xl transition-all text-white/50 hover:text-white"
              title="Rotate Right"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            <div className="w-px h-6 bg-white/10 mx-1" />

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className={`p-3 rounded-2xl transition-all ${
                isZoomed
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "hover:bg-white/10 text-white/50 hover:text-white"
              }`}
              title="Toggle Zoom"
            >
              {isZoomed ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => {
                setRotationY(0);
                setIsZoomed(false);
              }}
              className="p-3 hover:bg-white/10 rounded-2xl transition-all text-white/50 hover:text-white"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Glassmorphism block encapsulating canvas & arrows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[70vh] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl z-20 pointer-events-auto overflow-hidden">
          {/* Inner Glow offset */}
          <div className="absolute inset-0 rounded-[3rem] shadow-[inset_0_0_100px_rgba(255,255,255,0.05)] pointer-events-none z-30" />

          {/* Outfit Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 pointer-events-none flex justify-center">
            <div className="w-full max-w-[700px] flex justify-between px-8">
              <button
                onClick={handlePrevOutfit}
                className="pointer-events-auto p-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:scale-110 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all text-white/70 hover:text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextOutfit}
                className="pointer-events-auto p-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:scale-110 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all text-white/70 hover:text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="absolute inset-0 z-10">
            <Canvas
              shadows
              camera={{ position: [0, 1.9, 4.5], fov: 55 }}
              gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
            >
              <ambientLight intensity={0.6} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1.5}
                castShadow
              />
              <directionalLight position={[-5, 5, -5]} intensity={0.5} />

              <Environment preset="apartment" />

              <Suspense
                fallback={
                  <AvatarLoader
                    position={[-0.4, 1.4, 0]}
                    label="Loading Male..."
                  />
                }
              >
                <group
                  position={[-0.6, 0, 0]}
                  rotation={[0, ((rotationY + 15) * Math.PI) / 180, 0]}
                >
                  <AvatarScene
                    gender="male"
                    glbAssets={glbAssets}
                    preview={{
                      ...preview,
                      outfit: OUTFITS_MALE[`outfit${outfitIndex}`],
                    }}
                  />
                </group>
              </Suspense>

              <Suspense
                fallback={
                  <AvatarLoader
                    position={[0.4, 1.4, 0]}
                    label="Loading Female..."
                  />
                }
              >
                <group
                  position={[0.6, 0, 0]}
                  rotation={[0, ((rotationY - 15) * Math.PI) / 180, 0]}
                >
                  <AvatarScene
                    gender="female"
                    glbAssets={glbAssets}
                    preview={{
                      ...preview,
                      outfit: OUTFITS_FEMALE[`outfit${outfitIndex}`],
                    }}
                  />
                </group>
              </Suspense>

              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 1.8}
                target={[0, 1.55, 0]}
                makeDefault
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
