"use client";

import React from "react";
import { ProjectItem } from "./ui/ProjectItem";

const projects = [
  {
    title: "RetroUI",
    link: "https://retroui.io",
    logo: "/projects/retroui.webp",
    description: "A pixelated retro-style UI component library for websites.",
    preview: "/projects/retroui-preview.png",
  },
  {
    title: "Writingpad",
    link: "https://writingpad.me",
    logo: "/projects/writingpad.png",
    description: "Minimal docs with markdown support and no account required.",
    preview: "/projects/writingpad-preview.mov",
  },
  {
    title: "Wave Rider",
    link: "https://marketplace.visualstudio.com/items?itemName=dakshie.waverider",
    logo: "/projects/waverider.png",
    description:
      "A mini surfing game that one can play in VS Code while coding.",
    preview: "/projects/waverider-preview.mov",
  },
  {
    title: "Jobwrite",
    link: "https://github.com/Dksie09/jobwriteYT",
    logo: "/projects/jobwrite.png",
    description:
      "Smart job search assistant. scans your github and finds jobs for you.",
    preview: "/projects/jobwrite-preview.gif",
  },
  {
    title: "Docsy",
    link: "https://github.com/Dksie09/Docsy",
    logo: "/projects/docsy.png",
    description:
      "A smart extension that skims through the documentation for you, and delivers you the exact parts you were looking for.",
    preview: "/projects/docsy-preview.mp4",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
        projects
      </h1>
      <div className="max-w-2xl">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            link={project.link}
            logo={project.logo}
            description={project.description}
            preview={project.preview}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
