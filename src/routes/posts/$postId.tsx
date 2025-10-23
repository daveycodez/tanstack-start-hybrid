import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/posts/$postId")({
    // ISR Cache headers for Cloudflare
    headers: () => ({
        "Cache-Control":
            "public, max-age=60, s-maxage=60, stale-while-revalidate=300"
    }),
    head: ({ params }) => ({
        meta: [
            {
                title: `Post ${params.postId}`
            },
            {
                property: "og:title",
                content: `Post ${params.postId}`
            }
        ]
    }),
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
