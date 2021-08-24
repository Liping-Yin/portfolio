import React from "react";
import numeral from "numeral";

export default function ProjectCard({
  projectNumber,
  type,
  title,
  imgUrl,
  ...props
}) {
  return (
    <div className="project-card">
      <h2 className="project__intro">
        {type} <span>{title} </span>
      </h2>
      <p className="project__number">
        {numeral(projectNumber + 1).format("00")}
      </p>
      <div className="project__image">
        <img src={imgUrl} alt="project showcase" />
      </div>
    </div>
  );
}
