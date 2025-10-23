import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
    appId: "com.tanstack.hybrid",
    appName: "tanstack-start-hybrid",
    webDir: "dist/client",
    plugins: {
        CapacitorHttp: {
            enabled: true
        }
    }
}

export default config
