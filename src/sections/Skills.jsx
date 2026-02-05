import React from "react";
import { motion } from "framer-motion";
import {
  SiDocker, SiKubernetes, SiTerraform, SiAnsible, SiAmazonwebservices,
  SiGooglecloud, SiJenkins, SiGithubactions, SiGitlab,
  SiCircleci, SiGit, SiPrometheus, SiGrafana, SiPython, SiGnubash,
  SiYaml, SiJavascript, SiSpringboot, SiFlutter, SiHtml5, SiCss3, SiJira
} from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiNodejsSmall } from "react-icons/di";
import { TbBrandReactNative, TbBrandCSharp, TbBrandCpp } from "react-icons/tb";

const skillCategories = [
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "AWS", icon: <SiAmazonwebservices /> },
      { name: "Azure", icon: <VscAzure /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
    ],
  },
  {
    title: "CI/CD & Version Control",
    skills: [
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "GitLab CI/CD", icon: <SiGitlab /> },
      { name: "CircleCI", icon: <SiCircleci /> },
      { name: "Git", icon: <SiGit /> },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
    ],
  },
  {
    title: "Scripting & Programming",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Bash", icon: <SiGnubash /> },
      { name: "YAML", icon: <SiYaml /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "C++", icon: <TbBrandCpp /> },
    ],
  },
  {
    title: "Web & App Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Node.js", icon: <DiNodejsSmall /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Project/Collaboration Tools",
    skills: [
      { name: "Jira", icon: <SiJira /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning DevOps, Cloud Infrastructure, and Full-Stack Development.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#1cd8d2]/30 transition-all duration-500 flex flex-col group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-6 text-[#1cd8d2] group-hover:text-white transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10"
                    title={skill.name}
                  >
                    <span className="text-2xl text-[#1cd8d2] group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
