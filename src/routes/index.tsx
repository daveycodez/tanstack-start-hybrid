import { createFileRoute, Link } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { useEffect, useState } from "react"

export const Route = createFileRoute("/")({ component: IndexPage })

const getServerTime = createServerFn().handler(async () => {
    // This runs only on the server
    return new Date().toISOString()
})

function IndexPage() {
    const [hello, setHello] = useState("")
    const [serverFnRes, setServerFnRes] = useState("")

    useEffect(() => {
        fetch(`/api/hello`)
            .then((res) => res.json())
            .then((data) => setHello(data.message))
    }, [])

    return (
        <main className="container mx-auto my-24 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
                {serverFnRes || hello || "Loading..."}
            </h1>

            <Link
                to="/posts/$postId"
                className="text-blue-500 underline"
                params={{ postId: `${Math.floor(Math.random() * 100)}` }}
            >
                Random Post
            </Link>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-fit cursor-pointer"
                type="button"
                onClick={() => getServerTime().then(setServerFnRes)}
            >
                Get Server Time
            </button>
        </main>
    )
}
