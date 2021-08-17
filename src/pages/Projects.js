import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ className, ...props }) {
  return (
    <div className={className}>
      <ProjectCard />
    </div>
  );
}
