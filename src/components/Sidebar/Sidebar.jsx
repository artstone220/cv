import React from "react"
import { Contacts } from "./Contacts"
import { Skills } from "./Skills"
import { Education } from "./Education"
import { Languages } from "./Languages"

export const Sidebar = () => {
  return (
    <div className="space-y-8">
      <Contacts />
      <Education />
      <Skills />
      <Languages />
    </div>
  )
}
