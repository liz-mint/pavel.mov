import { useEffect, useRef, useState } from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

interface ProjectLink {
  name: string
  url: string
  icon: any
}

interface ProjectCardProps {
  image: string
  title: string
  description: string
}

const ProjectCard = ({
  image,
  title,
  description,
}: ProjectCardProps) => {
  const projectRef = useRef(null)
  const [threshold, setThreshold] = useState(0.5)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            entry.target.classList.remove("opacity-0")
            entry.target.classList.remove("animate-fade-out-down")
            setThreshold(0.3)
          } else {
            entry.target.classList.remove("animate-fade-in-up")
            entry.target.classList.add("animate-fade-out-down")
            entry.target.classList.add("opacity-0")

            setThreshold(0.5)
          }
        })
      },
      {
        threshold: threshold,
        rootMargin: "0px",
      }
    )

    if (projectRef.current) {
      observer.observe(projectRef.current)
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current)
      }
    }
  }, [threshold])

  return (
    <article className="flex flex-col gap-8 w-full opacity-0" ref={projectRef}>
      <div className={"group-hover"}>
        <img
          src={image}
          alt={title}
          className="md:w-[800px] w-full rounded-3xl border border-slate-200 dark:border-slate-700"
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <h3 className="font-bold text-2xl">{title}</h3>

        <p className="max-w-[800px] text-lg">{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
