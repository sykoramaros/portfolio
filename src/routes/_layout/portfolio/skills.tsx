import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/portfolio/skills')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/portfolio/skills"!</div>
}
