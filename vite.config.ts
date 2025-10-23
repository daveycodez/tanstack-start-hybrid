// import { cloudflare } from "@cloudflare/vite-plugin"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import devtoolsJson from "vite-plugin-devtools-json"
import viteTsConfigPaths from "vite-tsconfig-paths"

const isExport = process.env.IS_EXPORT === "true"

const prerenderPages = ["/", "/test", "/posts/1"]

const config = defineConfig({
    plugins: [
        viteTsConfigPaths({
            projects: ["./tsconfig.json"]
        }),
        tailwindcss(),
        tanstackStart({
            prerender: {
                enabled: true
            },
            pages: [
                ...prerenderPages.map((page) => ({
                    path: page,
                    prerender: { enabled: true }
                }))
            ],
            spa: {
                enabled: isExport,
                prerender: {
                    outputPath: "/index.html"
                }
            }
        }),
        viteReact(),
        devtoolsJson()
    ]
})

export default config
