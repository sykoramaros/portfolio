// import { useEffect } from "react"
// import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
// // import { I18nProvider } from "@lingui/react"
// // import { i18n } from "@lingui/core"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import "./App.css"

// import { initGA, logPageView } from "./utils/Analytics"

// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
// import { BaseUrlProvider } from "./providers/BaseUrlProvider"
// import { LanguageProvider } from "./providers/LanguageProvider"

// import Layout from "./components/Layout/Layout"

// import HomeStrapi from "./pages/Home/HomeStrapi"
// import HobbiesStrapi from "./pages/Hobbies/HobbiesStrapi"
// import SkillsStrapi from "./pages/Skills/SkillsStrapi"
// import ProjectsStrapi from "./pages/Projects/ProjectsStrapi"
// import ContactStrapi from "./pages/Contact/ContactStrapi"

// const client = new ApolloClient({
//   uri: "https://strapi-portfolio.marosh.uk/graphql",

//   cache: new InMemoryCache(),
// })
// const BASE_URL = "https://strapi-portfolio.marosh.uk"

// const AnalyticsTracker = () => {
//   const location = useLocation()
//   useEffect(() => {
//     logPageView()
//   }, [location])
//   return null
// }

// const App: React.FC = () => {
//   useEffect(() => {
//     initGA()
//   }, [])

//   return (
//     <HashRouter>
//       <LanguageProvider>
//         <ApolloProvider client={client}>
//           <BaseUrlProvider value={BASE_URL}>
//             <div className="App">
//               <AnalyticsTracker />
//               <Routes>
//                 <Route path="/" element={<Layout />}>
//                   <Route index element={<HomeStrapi />} />
//                   {/* <Route path="/home" element={<Home />} /> */}
//                   {/* <Route path="/about" element={<About />} /> */}
//                   {/* <Route path="/skills" element={<Skills />} /> */}
//                   <Route path="/skills-strapi" element={<SkillsStrapi />} />
//                   {/* <Route path="/projects" element={<Projects />} /> */}
//                   <Route path="/projects-strapi" element={<ProjectsStrapi />} />
//                   {/* <Route path="/hobbies" element={<Hobbies />} /> */}
//                   <Route path="/hobbies-strapi" element={<HobbiesStrapi />} />
//                   {/* <Route path="/contact" element={<Contact />} /> */}
//                   <Route path="/contact-strapi" element={<ContactStrapi />} />
//                   {/* <Route path="/try" element={<Try />} /> */}
//                   {/* <Route path="/test" element={<Test />} /> */}
//                   {/* <Route path="/test2" element={<Test2 />} /> */}
//                 </Route>
//               </Routes>
//             </div>
//           </BaseUrlProvider>
//         </ApolloProvider>
//       </LanguageProvider>
//     </HashRouter>
//   )
// }

// export default App
