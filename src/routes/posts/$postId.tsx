import { createFileRoute } from "@tanstack/react-router"

// Add this to specify which postIds to prerender
export const staticParams = () => {
    return [
        { postId: "1" },
        { postId: "2" },
        { postId: "77" }
        // Add more IDs you want to prerender
    ]
}

export const Route = createFileRoute("/posts/$postId")({
    component: RouteComponent
})

function RouteComponent() {
    const { postId } = Route.useParams()

    return (
        <main className="container mx-auto my-24">
            <h1 className="text-2xl font-bold">Post {postId}</h1>
        </main>
    )
}
