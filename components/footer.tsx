import type { DarkLightImageFragment, FooterFragment } from "@/lib/basehub/fragments"
import Link from "next/link"
import { ThemeSwitcher } from "./theme-switcher"

export const Footer = ({
  footer,
  logo,
}: {
  footer: FooterFragment
  logo: DarkLightImageFragment
}) => {
  return (
    <footer className="border-t border-[--border] bg-gray-50/50 dark:bg-gray-900/20 dark:border-[--dark-border]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-bold text-emerald-600">AutoScale AI</div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              E-commerce automation agency helping brands cut support tickets by 60% and reclaim 10+ hours a week with
              AI-powered solutions.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>200+ Brands Automated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Lead Qualification
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Case Studies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  PetJoy Success Story
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  GlowSkin Results
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  All Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="https://calendly.com/autoscale-ai/audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 AutoScale AI LLC. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="tel:+1-555-AUTOMATE" className="hover:text-emerald-600 transition-colors">
                  +1 (555) AUTO-MATE
                </a>
                <a href="mailto:hello@autoscale-ai.com" className="hover:text-emerald-600 transition-colors">
                  hello@autoscale-ai.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Theme:</span>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
