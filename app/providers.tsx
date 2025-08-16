import type React from "react"
import { ThemeProvider } from "next-themes"
import { BaseHubThemeProvider } from "../context/basehub-theme-provider"
import { TooltipProvider } from "../common/tooltip"
import type { BaseHubTheme } from "../context/basehub-theme-provider"

export function Providers({ children, theme }: { children: React.ReactNode; theme: BaseHubTheme }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="dark">
      <BaseHubThemeProvider theme={theme} />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}
