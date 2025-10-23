import { cloudflare } from "@cloudflare/vite-plugin"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

const isExport = false

const config = defineConfig({
    plugins: [
        !isExport
            ? cloudflare({ viteEnvironment: { name: "ssr" } })
            : undefined,
        // this is the plugin that enables path aliases
        viteTsConfigPaths({
            projects: ["./tsconfig.json"]
        }),
        tailwindcss(),
        tanstackStart({
            // prerender: {
            //     enabled: true
            // },
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
