import ProjectsStrapi from "@/pages/Projects/ProjectsStrapi"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/portfolio/projects")({
  component: ProjectsStrapi,
})
