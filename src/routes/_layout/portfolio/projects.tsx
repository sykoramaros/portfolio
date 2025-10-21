import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/portfolio/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/portfolio/projects"!</div>
}
