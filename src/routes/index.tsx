import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: IndexPage })

function IndexPage() {
    return (
        <div className="container p-4 mx-auto">
            <h1>Hello World</h1>
        </div>
    )
}
