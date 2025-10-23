import { isTauri } from "@tauri-apps/api/core"
import { fetch as tauriFetch } from "@tauri-apps/plugin-http"
import { baseURL, isExport } from "./utils"

let ogFetch: typeof fetch

export const overrideFetch = () => {
    if (!isExport) return
    if (typeof window === "undefined") return
    if (!ogFetch) ogFetch = window.fetch

    window.fetch = (input, init) => {
        const urlString = input.toString()

        if (
            urlString.startsWith("/_serverFn/") ||
            urlString.startsWith("/api/")
        ) {
            input = `${baseURL}${urlString}`

            if (isTauri()) {
                return tauriFetch(input, init)
            }
        }

        return ogFetch(input, init)
    }
}
