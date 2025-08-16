import type React from "react"
import "../basehub.config"
import "../styles/globals.css"
import { Inter } from "next/font/google"
import { basehub } from "basehub"
import { Toolbar } from "basehub/next-toolbar"
import { Providers } from "./providers"
import { footerFragment, headerFragment } from "../lib/basehub/fragments"
import { Newsletter } from "./_sections/newsletter"
import { themeFragment } from "../context/basehub-theme-provider"
import { PlaygroundSetupModal } from "../components/playground-notification"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const dynamic = "force-static"
export const revalidate = 30

const envs: Record<string, { isValid: boolean; name: string; label: string }> = {}
const _vercel_url_env_name = "VERCEL_URL"
const isMainV0 = process.env[_vercel_url_env_name]?.startsWith("preview-marketing-website-kzmm0bsl7yb9no8k62xm")

let allValid = true
const subscribeEnv = ({
  name,
  label,
  value,
}: {
  name: string
  label: string
  value: string | undefined
}) => {
  const isValid = !!value
  if (!isValid) {
    allValid = false
  }
  envs[name] = {
    isValid,
    name,
    label,
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [
    {
      site: { footer, settings, header },
    },
  ] = await Promise.all([
    basehub().query({
      site: {
        settings: {
          theme: themeFragment,
          logo: {
            dark: {
              url: true,
              alt: true,
              width: true,
              height: true,
              aspectRatio: true,
              blurDataURL: true,
            },
            light: {
              url: true,
              alt: true,
              width: true,
              height: true,
              aspectRatio: true,
              blurDataURL: true,
            },
          },
          showUseTemplate: true,
        },
        header: headerFragment,
        footer: footerFragment,
      },
    }),
  ])

  let playgroundNotification = null

  subscribeEnv({
    name: "BASEHUB_TOKEN",
    label: "BaseHub Read Token",
    value: process.env.BASEHUB_TOKEN,
  })

  if (!isMainV0 && !allValid && process.env.NODE_ENV !== "production") {
    const playgroundData = await basehub().query({
      _sys: {
        playgroundInfo: {
          expiresAt: true,
          editUrl: true,
          claimUrl: true,
        },
      },
    })

    if (playgroundData._sys.playgroundInfo) {
      playgroundNotification = <PlaygroundSetupModal playgroundInfo={playgroundData._sys.playgroundInfo} envs={envs} />
    }
  }

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Femur – Business Growth Solutions</title>
        <meta
          name="description"
          content="Femur helps businesses grow with smart solutions and expert guidance. Get your free consultation today."
        />
        <meta
          name="keywords"
          content="business consulting, growth strategy, process optimization, business solutions, expert guidance"
        />
        <meta name="author" content="Femur" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://femur.com/" />
        <meta property="og:title" content="Femur – Business Growth Solutions" />
        <meta
          property="og:description"
          content="Femur helps businesses grow with smart solutions and expert guidance. Get your free consultation today."
        />
        <meta property="og:image" content="https://femur.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://femur.com/" />
        <meta property="twitter:title" content="Femur – Business Growth Solutions" />
        <meta
          property="twitter:description"
          content="Femur helps businesses grow with smart solutions and expert guidance. Get your free consultation today."
        />
        <meta property="twitter:image" content="https://femur.com/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://femur.com/" />
        <meta name="theme-color" content="#10b981" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Femur",
              description:
                "Business growth solutions helping companies achieve their goals with smart strategies and expert guidance.",
              url: "https://femur.com",
              logo: "https://femur.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-FEMUR",
                contactType: "customer service",
                email: "hello@femur.com",
              },
              sameAs: ["https://linkedin.com/company/femur", "https://twitter.com/femur"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              foundingDate: "2024",
              numberOfEmployees: "10-50",
              industry: "Business Consulting",
            }),
          }}
        />
      </head>
      <body className={`min-h-svh max-w-[100vw] bg-background text-foreground ${inter.variable} font-sans`}>
        <Providers theme={settings.theme}>
          {!isMainV0 && <Toolbar />}
          {playgroundNotification}
          {/* Header */}
          <Header logo={settings.logo} header={header} />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Newsletter newsletter={footer.newsletter} />
          {/* Footer */}
          <Footer footer={footer} logo={settings.logo} />
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
