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
        <title>AutoScale AI – E-commerce Automation Agency</title>
        <meta
          name="description"
          content="E-commerce brands plug our AI to cut support tickets by 60% and reclaim 10+ hours a week. Book your free 30-min automation audit today."
        />
        <meta
          name="keywords"
          content="e-commerce automation, AI chatbots, workflow automation, customer support automation, lead qualification, Zapier automation, Make automation"
        />
        <meta name="author" content="AutoScale AI" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autoscale-ai.com/" />
        <meta property="og:title" content="AutoScale AI – E-commerce Automation Agency" />
        <meta
          property="og:description"
          content="E-commerce brands plug our AI to cut support tickets by 60% and reclaim 10+ hours a week. Book your free 30-min automation audit today."
        />
        <meta property="og:image" content="https://autoscale-ai.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://autoscale-ai.com/" />
        <meta property="twitter:title" content="AutoScale AI – E-commerce Automation Agency" />
        <meta
          property="twitter:description"
          content="E-commerce brands plug our AI to cut support tickets by 60% and reclaim 10+ hours a week. Book your free 30-min automation audit today."
        />
        <meta property="twitter:image" content="https://autoscale-ai.com/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://autoscale-ai.com/" />
        <meta name="theme-color" content="#10b981" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AutoScale AI",
              description:
                "E-commerce automation agency helping brands cut support tickets by 60% and reclaim 10+ hours a week with AI-powered solutions.",
              url: "https://autoscale-ai.com",
              logo: "https://autoscale-ai.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-AUTOMATE",
                contactType: "customer service",
                email: "hello@autoscale-ai.com",
              },
              sameAs: ["https://linkedin.com/company/autoscale-ai", "https://twitter.com/autoscale_ai"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              foundingDate: "2024",
              numberOfEmployees: "10-50",
              industry: "E-commerce Automation",
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  var tidioScript = document.createElement('script');
                  tidioScript.src = '//code.tidio.co/your-tidio-key.js';
                  tidioScript.async = true;
                  document.body.appendChild(tidioScript);
                });
              `,
            }}
          />
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
