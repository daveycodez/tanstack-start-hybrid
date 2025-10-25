import handler from "@tanstack/react-start/server-entry"

export default {
    fetch(request: Request) {
        console.log("server entry!")

        // Redirect /test to / with temporary redirect
        const url = new URL(request.url)
        if (url.pathname === "/test") {
            return Response.redirect(`${url.origin}/`, 302)
        }

        return handler.fetch(request)
    }
}
