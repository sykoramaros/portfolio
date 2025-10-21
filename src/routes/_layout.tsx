import Layout from "@/components/Layout/Layout"
import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout")({
  component: () => <MainLayout />,
})

const MainLayout = () => {
  return (
    <main>
      <Layout>
        <Outlet />
      </Layout>
    </main>
  )
}
