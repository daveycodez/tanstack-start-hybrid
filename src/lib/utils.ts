import { Capacitor } from "@capacitor/core"
import { isTauri } from "@tauri-apps/api/core"

export const isExport =
    process.env.NODE_ENV === "production" &&
    (Capacitor.isNativePlatform() || isTauri())

export const baseURL = isExport
    ? "https://tanstack-start-hybrid.daveycodez-a93.workers.dev"
    : ""
