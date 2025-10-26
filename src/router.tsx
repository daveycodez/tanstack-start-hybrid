import { createRouter } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"

// Create a new router instance
export const getRouter = () => {
    return createRouter({
        routeTree,
        scrollRestoration: true,
        defaultPreloadStaleTime: 0
        // rewrite: {
        //     input: ({ url }) => {
        //         if (url.pathname === "/test") {
        //             url.pathname = "/"
        //         }

        //         return url
        //     }
        // }
    })
}
