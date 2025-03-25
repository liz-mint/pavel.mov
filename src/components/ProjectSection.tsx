import { PROJECTS } from "@/content/projects"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14">
      {PROJECTS.map(({ image, title, description }) => (
        <ProjectCard
          key={title}
          image={image}
          title={title}
          description={description}
        />
      ))}
    </div>
  )
}

export default ProjectSection
