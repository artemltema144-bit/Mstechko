"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [isMounted, setIsMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    // Safety timeout: if nothing happens, close splash after 10s
    const timeout = setTimeout(() => finishLoading(), 10000);
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
    >
      {/* Background Video */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          onEnded={() => finishLoading()}
          onError={() => {
            console.error("Video failed to load");
            setVideoError(true);
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/splash.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback Animation / Overlay UI */}
      <AnimatePresence>
        {(videoError || !videoLoaded) && (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 flex flex-col items-center"
          >
             <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <Image
                src="/logo.png"
                alt="MESTECHKO Logo"
                width={180}
                height={180}
                priority
                className="drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              />
              <h2 className="text-3xl font-black tracking-[0.4em] uppercase text-white mt-8 ml-[0.4em]">
                MESTECHKO
              </h2>
              <div className="flex items-center gap-4 mt-2 w-full">
                <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-cyan-500/50" />
                <p className="text-cyan-400 font-bold tracking-[0.6em] text-xs uppercase whitespace-nowrap">
                  Online
                </p>
                <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-cyan-500/50" />
              </div>

              {videoError && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => finishLoading()}
                  className="mt-12 px-8 py-3 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:border-cyan-500/50 text-white text-xs transition-all uppercase tracking-widest group"
                >
                  <span className="group-hover:text-cyan-400 transition-colors">Войти в мир</span>
                </motion.button>
              )}

              {!videoError && !videoLoaded && (
                <div className="mt-12 flex flex-col items-center gap-3">
                  <div className="w-12 h-[2px] bg-slate-800 relative overflow-hidden">
                    <motion.div
                      animate={{ x: [-48, 48] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="absolute inset-0 bg-cyan-500"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] animate-pulse">Загрузка видео...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic lines (Overlay) */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
    </motion.div>
  );
}
