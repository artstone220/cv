import React from "react"

export const Banner = () => {
  return (
    <div className="flex flex-col gap-8 mt-12">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-5xl text-gray-800">Kozlov Artem</h1>
        <h2 className="text-3xl text-teal-600 font-medium">
          Frontend Developer
        </h2>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="w-40 shrink-0">
          <img
            src="../avatar.jpg"
            alt="Kozlov Artem"
            className="rounded-xl shadow-lg border-2 border-gray-300"
          />
        </div>
        <p className="text-gray-600 bg-gray-50 text-center p-5 rounded-lg shadow-md">
          A 2nd year student of mathematics and computer science (web design)
          with a background in software development and a strong interest in
          programming. I am looking for an internship or an initial position in
          a company where I can apply my skills and develop in the field of
          Frontend development and game development.
        </p>
      </div>
    </div>
  )
}
