"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Maze Solver",
      description:
        "A robotic micromouse that uses the Flood-Fill algorithm implemented in C++, optimized for lower memory usage and faster execution speed.",
      tech: ["Python", "C++", "ESP32", "ROS2"],
      link: "https://github.com/Kapil-Mulay-1421/maze-solver",
    },
    {
      title: "Medical Imagery Augmentation",
      description:
        "A Generative Adversarial Network for generating tumor-positive brain images which can be used to augment training data for classification models.",
      tech: ["PyTorch"],
      link: "https://github.com/Kapil-Mulay-1421/brain_tumor_dataset_augmentation",
    },
    {
      title: "ZenoVerse",
      description:
        "A platform to record celestial observations that mints NFTs on the basis of the inference from a computer vision model built with EfficientNet.",
      tech: ["EfficientNet", "Web3", "Ethereum", "Next.js"],
      link: "https://github.com/software-community/ZenoVerse",
    },
    {
      title: "Prompt Forge",
      description:
        "A Multi-Agent system designed to simulate business negotiations and courtroom cases based on user-defined system prompts.",
      tech: ["SSE", "Next.js", "Prisma", "Groq"],
      link: "https://github.com/Kapil-Mulay-1421/promptforge",
    },
    {
      title: "Grabbit",
      description:
        "An e-commerce platform for all your day-to-day needs, with integrated payments and product-recommendation AI.",
      tech: ["PHP", "Webhooks", "REST API", "ML"],
      link: "https://github.com/Kapil-Mulay-1421/Grabbit_Laravel",
    },
    {
      title: "Virtual Background Detection",
      description:
        "A machine-learning pipeline to detect whether a video conferencing background is real or virtual using convolutional techniques.",
      tech: ["TensorFlow", "Scikit-Learn", "Deep Learning"],
      link: "https://github.com/Kapil-Mulay-1421/virtual_background_detection",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground px-6 md:px-12 lg:px-24 py-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I'm Kapil
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Engineering Physics undergraduate interested in Machine Learning,
            Algorithms, and building intelligent systems. I enjoy studying the 
            mathematics behind how models work. I also enjoy leading and developing
            high-impact software projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a href="mailto:krmulay@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-2xl">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            </a>
            <a href="https://github.com/Kapil-Mulay-1421/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-2xl">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            </a>

            <a href="https://www.linkedin.com/in/kapil-mulay-b16335245/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-2xl">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 rounded-2xl bg-muted shadow-xl flex items-center justify-center text-muted-foreground">
            <img className="w-72 h-72 rounded-2xl bg-muted shadow-xl flex items-center justify-center text-muted-foreground" src="/me_large.png" alt="Kapil" />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mt-24 space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="rounded-xl">
                      <ExternalLink className="h-4 w-4 mr-2" /> View Project
                  </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mt-24 space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
{
title: "Programming",
items: ["C++", "Python", "PHP", "TypeScript", "JavaScript", "Solidity"],
},
{
title: "AI / Machine Learning",
items: [
"PyTorch",
"TensorFlow",
"Scikit-Learn",
"Deep Learning",
"GANs",
"Computer Vision",
"EfficientNet",
],
},
{
title: "Web",
items: ["REST APIs", "Webhooks", "SSE", "DBMS (SQL & NoSQL)", "Next.js",  "React", "CI/CD and Deployment"],
},
{
title: "Blockchain / Web3",
items: ["Ethereum", "Web3", "IPFS Concepts", "Hardhat"],
},
{
title: "Embedded / Robotics",
items: ["ESP32", "ROS2", "Gazebo", "Control Logic", "Algorithm Optimization"],
},
{
title: "Soft Skills",
items: [
"Professional Communication",
"Presentation",
"Public Speaking",
],
},
].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
            <Card key={skill.title} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {skill.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-24 pt-12 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Kapil. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:underline" href="https://github.com/Kapil-Mulay-1421">
            GitHub
          </a>
          <a className="hover:underline" href="https://www.linkedin.com/in/kapil-mulay-b16335245/">
            LinkedIn
          </a>
          <a className="hover:underline" href="mailto:">
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
