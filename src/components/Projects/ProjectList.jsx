import React from "react"
import { Project } from "./Project"
import { PROJECTS } from "../../constant/projects.constant"

export const ProjectList = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-gray-800">Projects</h3>
      {PROJECTS.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  )
}
