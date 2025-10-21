import HomeStrapi from "@/pages/Home/HomeStrapi"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/portfolio/")({
  component: HomeStrapi,
})

// function RouteComponent() {
//   return <div>Hello "/_layout/portfolio/"!</div>
// }
