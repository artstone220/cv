import React from "react"

export const ExperienceCard = ({ role, date, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-700">{role}</h4>
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  )
}
