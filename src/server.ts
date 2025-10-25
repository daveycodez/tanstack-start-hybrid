import handler from "@tanstack/react-start/server-entry"

export default {
    fetch(request: Request) {
        console.log("server entry!")
        return handler.fetch(request)
    }
}
