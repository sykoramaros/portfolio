import { createFileRoute, Navigate } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
  component: Index,
})

function Index() {
  return <Navigate to="/portfolio" />
}
