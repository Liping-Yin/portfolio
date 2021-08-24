import React from "react";

export default function ProgressBar({
  projectNumbers,
  activeProject,
  ...props
}) {
  return (
    <div className="progress">
      {Array(projectNumbers)
        .fill()
        .map((_, number) => {
          console.log(number);
          return (
            <Bar
              key={number}
              className={`progress__bar ${
                activeProject === number ? "active" : ""
              }`}
            />
          );
        })}
    </div>
  );
}

export function Bar({ className, ...props }) {
  return <span className={className}></span>;
}
