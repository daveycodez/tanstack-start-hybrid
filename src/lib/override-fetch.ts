import { baseURL, isExport } from "./utils"

let ogFetch: typeof fetch

export const overrideFetch = () => {
    if (!isExport) return
    if (typeof window === "undefined") return

    if (!ogFetch) ogFetch = fetch

    window.fetch = (input, init) => {
        const urlString = input.toString()

        if (urlString.startsWith("/")) {
            input = new URL(`${baseURL}${urlString}`)
        }

        return ogFetch(input, init)
    }
}
