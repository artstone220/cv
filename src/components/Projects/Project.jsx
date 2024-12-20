import React from "react"

export const Project = ({ title, description, tags, githubLink }) => {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-gray-700">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-teal-100 text-teal-800 py-1 px-3 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
