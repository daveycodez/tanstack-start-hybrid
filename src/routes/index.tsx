import { createFileRoute, Link } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { baseURL } from "@/lib/utils"

export const Route = createFileRoute("/")({ component: IndexPage })

function IndexPage() {
    const [hello, setHello] = useState<string>("")
    useEffect(() => {
        fetch(`${baseURL}/api/hello`)
            .then((res) => res.json())
            .then((data) => setHello(data.message))
    }, [])

    return (
        <main className="container mx-auto my-24">
            <h1 className="text-2xl font-bold">{hello || "Loading..."}</h1>

            <Link
                to="/posts/$postId"
                params={{ postId: `${Math.floor(Math.random() * 100)}` }}
            >
                Random Post
            </Link>
        </main>
    )
}
