// import { cloudflare } from "@cloudflare/vite-plugin"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

const isExport = process.env.VITE_EXPORT === "true"

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
                { path: "/test", prerender: { enabled: true } },
                { path: "/", prerender: { enabled: true } },
                {
                    path: "/posts/1",
                    prerender: { enabled: true }
                }
            ],
            spa: {
                enabled: isExport,
                prerender: {
                    outputPath: "/index.html"
                }
            }
        }),
        viteReact()
    ]
})

export default config
