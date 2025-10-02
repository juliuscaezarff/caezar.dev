"use client";

import React from "react";
import { CustomTooltip } from "./Tooltip";
import { cn } from "@/lib/utils";

interface ProjectItemProps {
  title: string;
  link: string;
  logo: string;
  description: string;
  preview?: string;
  className?: string;
}

interface ProjectPreviewProps {
  src: string;
  alt: string;
  className?: string;
}

interface ProjectAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  src,
  alt,
  className,
}) => {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);

  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        className={cn("w-full h-full object-cover", className)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-full object-cover", className)}
    />
  );
};

const ProjectAvatar: React.FC<ProjectAvatarProps> = ({
  src,
  alt,
  className,
}) => (
  <img
    src={src}
    alt={alt}
    className={cn(
      "w-full h-full rounded-full object-cover border border-[var(--border)]",
      className
    )}
  />
);

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  link,
  logo,
  description,
  preview = "/default.png",
  className,
}) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-start">
        <div className="w-10 h-10 mr-4 flex-shrink-0">
          <ProjectAvatar src={logo} alt={`${title} logo`} />
        </div>

        <div className="flex-1">
          <CustomTooltip
            text={title}
            href={link}
            content={
              <div className="w-full h-40 overflow-hidden rounded">
                <ProjectPreview src={preview} alt={`${title} preview`} />
              </div>
            }
            side="right"
            sideOffset={16}
          />
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
