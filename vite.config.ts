// import { cloudflare } from "@cloudflare/vite-plugin"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import devtoolsJson from "vite-plugin-devtools-json"
import viteTsConfigPaths from "vite-tsconfig-paths"

const isExport = process.env.IS_EXPORT === "true"

// @ts-expect-error - Cloudflare fix
globalThis.Cloudflare = { compatibilityFlags: {} }

const prerenderPages = ["/", "/test"]

const config = defineConfig({
    plugins: [
        // cloudflare({ viteEnvironment: { name: "ssr" } }),
        viteTsConfigPaths({
            projects: ["./tsconfig.json"]
        }),
        tailwindcss(),
        tanstackStart({
            prerender: {
                enabled: true
            },
            spa: {
                enabled: isExport,
                prerender: {
                    outputPath: "/index.html"
                }
            },
            pages: [
                ...prerenderPages.map((page) => ({
                    path: page,
                    prerender: { enabled: true }
                }))
            ]
        }),
        viteReact(),
        devtoolsJson()
    ]
})

export default config
