import HobbiesStrapi from '@/pages/Hobbies/HobbiesStrapi'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/portfolio/hobbies')({
  component: HobbiesStrapi,
})