import type React from "react"
import "../styles/globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import { Newsletter } from "./_sections/newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const dynamic = "force-static"
export const revalidate = 30

const staticSiteData = {
  settings: {
    theme: { mode: "dark" },
    logo: {
      dark: { url: "/femur-logo.jpg", alt: "Femur", width: 120, height: 40 },
      light: { url: "/femur-logo.jpg", alt: "Femur", width: 120, height: 40 },
    },
  },
  header: {
    navbar: {
      items: [
        { _id: "1", _title: "Features", href: "/features", sublinks: { items: [] } },
        { _id: "2", _title: "Pricing", href: "/pricing", sublinks: { items: [] } },
        { _id: "3", _title: "Blog", href: "/blog", sublinks: { items: [] } },
        { _id: "4", _title: "Changelog", href: "/changelog", sublinks: { items: [] } },
      ],
    },
    rightCtas: {
      items: [{ _id: "cta1", label: "Get Started", href: "/contact", type: "primary" }],
    },
  },
  footer: {
    newsletter: {
      title: "Stay Updated",
      description: "Get the latest updates and insights delivered to your inbox.",
      submissions: {
        ingestKey: "static",
        schema: [{ id: "email", name: "email", type: "email", label: "Email", required: true }],
      },
    },
    copyright: "© 2024 Femur. All rights reserved.",
    navbar: {
      items: [
        { _title: "Privacy Policy", url: "/privacy" },
        { _title: "Terms of Service", url: "/terms" },
        { _title: "Contact", url: "/contact" },
      ],
    },
    socialLinks: [
      { _title: "Twitter", url: "https://twitter.com/femur", icon: { url: "/twitter-icon.svg" } },
      { _title: "LinkedIn", url: "https://linkedin.com/company/femur", icon: { url: "/linkedin-icon.svg" } },
    ],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { settings, header, footer } = staticSiteData

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
        <Providers>
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
