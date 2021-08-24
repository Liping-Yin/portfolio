import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ className, ...props }) {
  const [activeProject, setActiveProject] = useState(0);

  const [projects, setProjects] = useState([
    {
      intro: { type: "UI / UX", title: "Assorted Web & Interface Design" },
      imgUrl: "#",
    },
    {
      intro: { type: "UI / UX", title: "Assorted Web & Interface Design" },
      imgUrl: "#",
    },
  ]);
  // projects information
  return (
    <div className={className}>
      {Array(projects.length)
        .fill()
        .map((_, number) => {
          const { intro, imgUrl } = projects[number];
          return (
            <ProjectCard
              projectNumber={number}
              type={intro.type}
              title={intro.title}
              imgUrl={imgUrl}
            />
          );
        })}

      {/* progress bar only visible when projects intersect viewport */}
      <ProgressBar
        projectNumbers={projects.length}
        activeProject={activeProject}
      />
    </div>
  );
}
