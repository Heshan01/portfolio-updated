import { useMemo, useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import avator from "../assets/avator.png";

const social = [
  { Icon: FaFacebook, label: "Facebook", link: "https://www.facebook.com/HeshanD.Samarasinghe?" },
  { Icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/heshan-dilhara-609049396?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { Icon: FaGithub, label: "GitHub", link: "https://github.com/Heshan01" },
  { Icon: FaYoutube, label: "YouTube", link: "https://www.youtube.com/@HDMuzic-hd" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(
    () => [
      "DevOps Engineer",
      "Youtuber Creator",
      "Automation Specialist",
      "Cloud Infrastructure Enthusiast",
      "CI/CD Pipeline Builder",
      "SRE (Site Reliability Engineering) Learner",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full min-h-screen relative bg-black overflow-x-hidden z-0 flex items-center justify-center py-20 px-4 md:px-10">
      {/* PARTICLES */}
      <ParticlesBackground className="absolute inset-0 -z-10" />

      {/* GRADIENT BACKGROUNDS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-[#302b63] via-[#00bf2f] to-[#1cd8d2] opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-[#302b63] via-[#00bf2f] to-[#1cd8d2] opacity-20 blur-[100px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* TEXT CONTENT */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <div className="max-w-[48rem]">
            {/* TYPING TEXT */}
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle" style={{ height: "1em" }}></span>
            </motion.div>

            {/* My NAME */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I'm <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Heshan Dilhara
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              As a student focusing on DevOps and Infrastructure as Code (IaC), I am passionate about building, deploying, and managing scalable applications in the cloud. I specialize in leveraging tools like Docker, Kubernetes, and Ansible.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 hover:brightness-110 transition-all"
              >
                View My Works
              </a>
              <a
                href="/Heshan_Dilhara_Profile.pdf"
                className="px-8 py-3 rounded-full font-semibold text-lg text-white border-2 border-white hover:bg-white hover:text-black transition-all"
              >
                My Resume
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-6 text-2xl md:text-3xl justify-center lg:justify-start">
              {social.map(({ Icon, label, link }) => (
                <motion.a
                  href={link}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-400 hover:text-[#1cd8d2] transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* AVATAR IMAGE */}
        <div className="hidden lg:flex flex-1 justify-center lg:justify-end order-1 lg:order-2 relative group mt-10 lg:mt-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "min(40vw, 500px)", height: "min(40vw, 500px)", borderRadius: "50%",
              filter: "blur(60px)", opacity: 0.3,
              background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)",
            }}
          />
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={avator}
              alt="Heshan Dilhara"
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-auto object-contain select-none drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
