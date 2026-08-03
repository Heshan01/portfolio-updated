import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import surfora from "../assets/surfora.jpg"
import Quickshift from "../assets/Quickshift.jpg"
import GemStone from "../assets/GemStone.jpg"
import Aura from "../assets/Aura.jpg"

const glows = [
  "-top-10 -left-10 w-72 h-72 opacity-20 blur-[80px]",
  "bottom-0 right-10 w-96 h-96 opacity-15 blur-[100px]",
];

const projects = [
  {
    title: "Surfora App",
    description: "A lightweight native Android web browser inspired by Safari's clean design, featuring a bottom address bar, visual tab management, private browsing, bookmarks, history, and safe browsing features.",
    tech: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "WebView",
      "Material Design"
    ],
    github: "https://github.com/Heshan01/Surfora-Web-Browser-Mobile-app",
    live: "https://surforapp.vercel.app/",
    img: surfora,
  },
  {
    title: "Tea Leaf System",
    description: "Tea Leaf System: A React Native (Expo) monorepo featuring three dedicated mobile apps that streamline tea leaf collection, logistics, and supply chain management for admins, drivers, and suppliers.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    github: "https://github.com/Heshan01/tea-leaf-system",
    live: "https://github.com/Heshan01/tea-leaf-system",
    img: img2,
  },
  {
    title: "Offline Studio",
    description: "A 100% offline, lightning-fast desktop video compressor. Powerful conversion locally on your machine—zero cloud uploads.",
    tech: ["React", "Electron", "Python", "FFmpeg"],
    github: "https://github.com/Heshan01/Offline-Studio/tree/main",
    live: "https://offlinestudio.vercel.app/",
    img: img3,
  },
  {
    title: "QuickShift",
    description: "Hourly & part-time job marketplace connecting shift seekers and job posters across Sri Lanka.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/Heshan01/QuickShift-Web-Version-2",
    live: "https://quickshiftsigma.vercel.app/",
    img: Quickshift,
  },
  {
    title: "GemStone",
    description: "Real-time gem trading marketplace for Sri Lanka's Ratnapura community, with verified sellers and in-app chat.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Docker"],
    github: "https://github.com/Heshan01/GemStone",
    live: "https://gemstonerv.vercel.app/",
    img: GemStone,
  },
  {
    title: "Aura SoundWave",
    description: "Apple Music–styled Android MP3 player with a glassmorphism UI, 10-band equalizer, and persistent playlists.",
    tech: ["Kotlin", "Jetpack Compose", "Media3 (ExoPlayer)", "Room"],
    github: "https://github.com/Heshan01/Aura-SoundWave",
    live: "https://aurasoundwave.vercel.app/",
    img: Aura,
  },
];

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getOffset = () => {
    if (width >= 1024) return 180;
    if (width >= 640) return 120;
    return 90;
  };
  const xOffset = getOffset();

  return (
    <section id="projects" className="w-full min-h-screen relative bg-black text-white overflow-hidden py-24">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] mb-16 text-center">
          My Projects
        </h2>

        {/* Carousel Container */}
        <div
          className="relative w-full max-w-6xl h-[180px] sm:h-[320px] lg:h-[400px] flex justify-center items-center mb-2 sm:mb-8"
          style={{ perspective: "1000px" }}
        >
          {projects.map((project, index) => {
            const total = projects.length;
            let diff = index - currentIndex;

            // Adjust for circular array
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isActive = diff === 0;
            const isVisible = Math.abs(diff) <= 2;
            const zIndex = 20 - Math.abs(diff);

            return (
              <motion.div
                key={index}
                className={`absolute w-[280px] sm:w-[500px] lg:w-[650px] aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/10 ${isActive ? 'shadow-[0_0_40px_rgba(28,216,210,0.3)] border-[#1cd8d2]/50' : ''}`}
                onClick={() => {
                  if (!isActive) setCurrentIndex(index);
                }}
                initial={false}
                animate={{
                  opacity: isVisible ? (1 - Math.abs(diff) * 0.3) : 0,
                  scale: isVisible ? (1 - Math.abs(diff) * 0.15) : 0.6,
                  x: isVisible ? diff * xOffset : (diff > 0 ? 400 : -400),
                  rotateY: diff * -10, // Slight rotation for 3D feel
                  zIndex,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like easing
                style={{
                  pointerEvents: isVisible ? "auto" : "none",
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={isActive ? (e, info) => {
                  if (info.offset.x < -50) handleNext();
                  else if (info.offset.x > 50) handlePrev();
                } : undefined}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
                {!isActive && (
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 pointer-events-none" />
                )}

                {/* Active state overlay for gradient feel */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                )}
              </motion.div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-1 sm:left-10 z-30 p-2.5 sm:p-4 rounded-full bg-black/50 hover:bg-white/10 border border-white/20 backdrop-blur-md text-white transition-all hover:scale-110"
          >
            <FaChevronLeft className="text-lg sm:text-2xl" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-10 z-30 p-2.5 sm:p-4 rounded-full bg-black/50 hover:bg-white/10 border border-white/20 backdrop-blur-md text-white transition-all hover:scale-110"
          >
            <FaChevronRight className="text-lg sm:text-2xl" />
          </button>
        </div>

        {/* Project Details */}
        <div className="w-full max-w-4xl h-[280px] lg:h-[200px] relative mt-2 sm:mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{projects[currentIndex].title}</h3>
              <p className="text-white/70 mb-4 sm:mb-6 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto px-4 sm:px-8">
                {projects[currentIndex].description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-2 sm:px-4">
                {projects[currentIndex].tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10.5px] sm:text-sm bg-[#111] border border-white/20 text-white hover:border-[#1cd8d2] transition-colors px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 sm:gap-6 mt-4 sm:mt-6">
                <a
                  href={projects[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-white text-black text-sm sm:text-base font-semibold hover:bg-gray-200 transition-colors"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                <a
                  href={projects[currentIndex].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-transparent border-2 border-[#1cd8d2] text-[#1cd8d2] text-sm sm:text-base font-semibold hover:bg-[#1cd8d2] hover:text-black transition-colors"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Projects */}
        <div className="mt-4 sm:mt-8 lg:mt-30 z-10">
          <a
            href="https://github.com/Heshan01?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-sm font-semibold text-white/50 hover:text-white border-b border-transparent hover:border-white transition-all"
          >
            View More on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}