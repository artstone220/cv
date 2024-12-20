import React from "react"
import { EXPERIENCES } from "../../constant/experiences.constant"
import { ExperienceCard } from "./ExperienceCard"

export const ExperienceList = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-gray-800">Experience</h3>
      {EXPERIENCES.map((experience, index) => (
        <ExperienceCard
          key={index}
          role={experience.role}
          date={experience.date}
          description={experience.description}
        />
      ))}
    </div>
  )
}
