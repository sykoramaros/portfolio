import ContactStrapi from '@/pages/Contact/ContactStrapi'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/portfolio/contact')({
  component: ContactStrapi,
})

