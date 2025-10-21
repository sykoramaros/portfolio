import SkillsStrapi from "@/pages/Skills/SkillsStrapi"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/portfolio/skills")({
  component: SkillsStrapi,
})
