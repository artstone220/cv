import React from "react"
import { FaTelegramPlane, FaGithub, FaEnvelope } from "react-icons/fa"

export const Contacts = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-800">Contacts</h3>
      <ul className="mt-2 ml-4 space-y-2">
        <li>
          <FaTelegramPlane className="inline mr-2 text-teal-600" />
          <a
            href="https://t.me/artstonex"
            className="text-gray-700 hover:underline"
          >
            Telegram
          </a>
        </li>
        <li>
          <FaGithub className="inline mr-2 text-teal-600" />
          <a
            href="https://github.com/artstone220"
            className="text-gray-700 hover:underline"
          >
            Github
          </a>
        </li>
        <li>
          <FaEnvelope className="inline mr-2 text-teal-600" />
          <a
            href="mailto:lomashcevich160@gmail.com"
            className="text-gray-700 hover:underline"
          >
            Gmail
          </a>
        </li>
      </ul>
    </section>
  )
}
