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
            content="React, Next.js, Vite, Turborepo, React Native, JavaScript, TypeScript, Tailwind, Shadcn/ui, Radix, Base UI"
          />
          ,{" "}
          <CustomTooltip
            text="backend"
            content="Node.js, Bun, NestJS, Express, Drizzle, Prisma, Supabase, MongoDB, PostgreSQL, APIs RESTful, Webhooks, OAuth, Server Actions"
          />
          ,{" "}
          <CustomTooltip
            text="tools"
            content="Git, GitHub, Docker, Vercel, Figma, Visual Studio Code, Stripe, CI/CD, Vitest, Jest"
          />
          ,{" "}
          <CustomTooltip
            text="ai"
            content="TensorFlow, PyTorch, LangChain, Hugging Face"
          />
          — whatever gets the job done.
        </p>

        <p className="mb-4 text-base text-[var(--foreground)]">
          i launched the{" "}
          <CustomTooltip
            href="https://helpmind.com.br"
            text="HelpMind"
            content="online platform for psychologists with scheduling, sessions, and insights."
          />
          . <br />
          {/* 3k downloads in 2 days. felt good. */}
        </p>

        <p className="text-base text-[var(--foreground)]">
          i’ve also won a few{" "}
          <CustomTooltip text="hackathons" imageUrl="/hackhaton-preview.png" />
          <br />
          participated in events, wrote articles, and created projects.{" "}
        </p>

        <p className="mb-4 text-base text-[var(--foreground)]">
          also coding in{" "}
          <CustomTooltip
            href="https://github.com/caezarff"
            text="caezarLabs"
            content={
              <span>my lab for creating components, animations and ideas</span>
            }
          />
          .
        </p>

        <div className="my-8">
          <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
            SPECIALIZE IN:
          </div>
          <p className="text-base text-[var(--foreground)]">
            fullstack apps, sites, dashboards
            <br />
            and making tiny details that matter.
          </p>
        </div>

        <span className="mb-8 text-base text-[var(--foreground)]">
          offline, i play{" "}
          <CustomTooltip
            text="skate"
            // content="playing skate."
            imageUrl="/skate.jpg"
          />
          .
        </span>
      </div>
      <div className="flex gap-5 mt-8">
        <SocialLink href="https://x.com/julius___C" label="X" />
        <SocialLink href="https://github.com/juliuscaezarff" label="GitHub" />
        <SocialLink
          href="https://www.linkedin.com/in/julius-caezar/"
          label="LinkedIn"
        />
      </div>
    </div>
  );
};

export default Hero;
