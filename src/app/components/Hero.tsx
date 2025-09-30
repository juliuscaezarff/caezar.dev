"use client";
import React from "react";
import { SocialLink } from "./ui/SocialLinks";
import { CustomTooltip } from "./ui/Tooltip";

const Hero: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-2 text-[var(--foreground)]">
        hey, i&apos;m julius.
      </h1>
      <div className="max-w-2xl">
        <p className=" text-base text-[var(--foreground)] mb-6">
          software enginner building ideas
        </p>

        <p className="text-base text-[var(--foreground)]">
          <CustomTooltip
            text="frontend"
            content="React, Next.js, Vite, Tailwind, TypeScript, TurboRepo"
          />
          ,{" "}
          <CustomTooltip
            text="backend"
            content="Node.js, Express, Fastify, Bun, Elisya, DrizzleORM, Prisma, MongoDB, PostgreSQL, Neon Database, Better-auth, "
          />
          ,{" "}
          <CustomTooltip
            text="ai"
            content="TensorFlow, PyTorch, LangChain, Hugging Face"
          />
          , <CustomTooltip text="libs" content="BaseUI, Bun" /> — whatever gets
          the job done.
        </p>

        <p className="mb-4 text-base text-[var(--foreground)]">
          i also launched the{" "}
          <CustomTooltip
            href="https://retroui.io"
            text="HelpMind"
            content="A retro-inspired UI component library for React applications"
          />
          . <br />
          3k downloads in 2 days. felt good.
        </p>

        <p className="text-base text-[var(--foreground)]">
          was a{" "}
          <CustomTooltip
            text="github octern"
            content="program for open source contribution and development"
          />
          . did devrel at{" "}
          <CustomTooltip
            href="#"
            text="appwrite"
            content="an open source Backend as a Service (BaaS) platform"
          />
          . <br />i participated in meetups, wrote articles, submitted projects.{" "}
        </p>

        <p className="mb-4 text-base text-[var(--foreground)]">
          also vibed with devs at{" "}
          <CustomTooltip
            text="solana fellowship"
            content={
              <span>
                A 6-week developer program focused on building projects using
                Solana blockchain technology.
              </span>
            }
          />
          .
        </p>

        <div className="my-8">
          <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
            SPECIALIZE IN:
          </div>
          <p className="text-base text-[var(--foreground)]">
            complex dashboards, auth flows.
            <br />
            and making tiny details that matter.
          </p>
        </div>

        <span className="mb-8 text-base text-[var(--foreground)]">
          offline, i play{" "}
          <CustomTooltip
            text="skate"
            content="playing since high school in competitive leagues"
            imageUrl="/projects/retroui-preview.png"
          />
          .
        </span>
      </div>
      <div className="flex gap-5 mt-8">
        <SocialLink href="https://x.com/duckwhocodes" label="X" />
        <SocialLink href="https://github.com/Dksie09" label="GitHub" />
        <SocialLink
          href="https://www.linkedin.com/in/dakshi-goel/"
          label="LinkedIn"
        />
      </div>
    </div>
  );
};

export default Hero;
