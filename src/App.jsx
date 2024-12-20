import { Banner } from "./components/Banner/Banner"
import { ExperienceList } from "./components/Experience/ExperienceList"
import { ProjectList } from "./components/Projects/ProjectList"
import { Sidebar } from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div className="max-w-[1000px] mx-auto py-6 px-6 bg-gray-100 rounded-lg">
      <div className="flex flex-col gap-12">
        <Banner />
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="shrink-0 md:w-40">
            <Sidebar />
          </div>
          <div className="flex flex-col gap-8 md:gap-12">
            <ExperienceList />
            <ProjectList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
