import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/$postId")({
    component: RouteComponent
})

function RouteComponent() {
    const { postId } = Route.useParams()

    return (
        <main className="container mx-auto">
            <h1 className="text-2xl font-bold">Post {postId}</h1>
        </main>
    )
}
