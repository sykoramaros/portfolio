import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { BaseUrlProvider } from "./providers/BaseUrlProvider"

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const client = new ApolloClient({
  uri: "https://strapi-portfolio.marosh.uk/graphql",
  cache: new InMemoryCache(),
})

const BASE_URL = "https://strapi-portfolio.marosh.uk"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BaseUrlProvider value={BASE_URL}>
        <RouterProvider router={router} />
      </BaseUrlProvider>
    </ApolloProvider>
  </React.StrictMode>
)
