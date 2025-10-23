import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/api/hello")({
    server: {
        handlers: {
            GET: async () => {
                return Response.json({ message: "Hello, World!" })
            }
        }
    }
})
