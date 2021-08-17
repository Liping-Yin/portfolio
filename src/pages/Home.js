import React from "react";
import Socials from "../components/Socials";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import BackgroundAnimation from "../components/BackgroundAnimation";
import Projects from "./Projects";
export default function Home() {
  return (
    <div className="home container">
      <div className="home__hero ">
        <div className="home__left">
          <h1 className="home__intro">
            <span>Hi, I'm Liping&nbsp;Yin </span>Front-end developer
          </h1>
          <Button />
        </div>
        <div className="home__right">
          <BackgroundAnimation className="home__bg" />
        </div>
        <Socials />
      </div>

      <Projects className="home__projects" />
    </div>
  );
}
