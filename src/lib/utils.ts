import { Capacitor } from "@capacitor/core"

export const isExport = Capacitor.isNativePlatform()

export const baseURL = isExport
    ? "https://tanstack-start-hybrid.daveycodez-a93.workers.dev"
    : ""
