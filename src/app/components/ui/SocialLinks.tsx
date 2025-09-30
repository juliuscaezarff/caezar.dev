"use client";

import { motion } from "framer-motion";

interface SocialLinkProps {
  href: string;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, label }) => {
  return (
    <motion.a
      href={href}
      className="text-[var(--link)] text-sm hover:underline flex items-center group"
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {},
        hover: {},
      }}
    >
      {label}
      <motion.svg
        className="w-3 h-3 ml-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          initial: {
            x: 0,
            y: 0,
          },
          hover: {
            x: 2,
            y: -2,
          },
        }}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </motion.svg>
    </motion.a>
  );
};
