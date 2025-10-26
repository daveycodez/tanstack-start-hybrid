import handler from "@tanstack/react-start/server-entry"

export default {
    fetch(request: Request) {
        // I need you to log everything about this request:
        console.log("request.url", request.url) // This comes back as the full URL
        console.log("request.headers", Object.fromEntries(request.headers)) // This comes back as a Headers object
        console.log("request.body", request.body) // This comes back as a ReadableStream
        console.log("request.method", request.method) // This comes back as the HTTP method
        console.log("request.mode", request.mode) // This comes back as the request mode
        console.log("request.credentials", request.credentials) // This comes back as the request credentials
        console.log("request.cache", request.cache) // This comes back as the request cache
        console.log("request.redirect", request.redirect) // This comes back as the request redirect
        console.log("request.referrer", request.referrer) // This comes back as the request referrer
        console.log("request.referrerPolicy", request.referrerPolicy) // This comes back as the request referrer policy
        console.log("request.integrity", request.integrity) // This comes back as the request integrity
        console.log("request.keepalive", request.keepalive) // This comes back as the request keepalive
        console.log("request.signal", request.signal) // This comes back as the request signal

        // const url = new URL(request.url)
        // if (url.pathname === "/test") {
        //     return Response.redirect(`${url.origin}/`, 302)
        // }

        return handler.fetch(request)
    }
}
