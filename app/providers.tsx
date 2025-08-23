import type React from "react"
import { ThemeProvider } from "next-themes"
import { TooltipProvider } from "../common/tooltip"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="dark">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}
