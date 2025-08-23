"use client"
import type * as React from "react"
import clsx from "clsx"
import Link from "next/link"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
  NavigationMenu,
  NavigationMenuLink as NavigationMenuLinkPrimitive,
  NavigationMenuList,
  type NavigationMenuLinkProps,
} from "@radix-ui/react-navigation-menu"
import { $button, ButtonLink } from "../common/button"
import { useToggleState } from "../hooks/use-toggle-state"

const navigationLinks = [
  { id: "features", title: "Features", href: "/features" },
  { id: "blog", title: "Blog", href: "/blog" },
  { id: "changelog", title: "Changelog", href: "/changelog" },
]

const ctaButtons = [
  { id: "contact", label: "Contact", href: "/contact", type: "secondary" as const },
  { id: "get-started", label: "Get Started", href: "/get-started", type: "primary" as const },
]

// #region desktop 💻
/* -------------------------------------------------------------------------- */
/*                                   Desktop                                  */
/* -------------------------------------------------------------------------- */

export function NavigationMenuHeader({
  className,
}: {
  className?: string
}) {
  return (
    <NavigationMenu className={clsx("z-1 relative flex-col justify-center lg:flex", className)} delayDuration={50}>
      <NavigationMenuList className="flex flex-1 gap-0.5 px-4">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <NavigationMenuLink href={link.href}>{link.title}</NavigationMenuLink>
          </li>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function NavigationMenuLink({
  className,
  children,
  href,
  ...props
}: { children: React.ReactNode; href: string } & NavigationMenuLinkProps) {
  return (
    <NavigationMenuLinkPrimitive
      className={$button({
        className:
          "inline-flex h-6 shrink-0 items-center justify-center gap-1 rounded-full px-3 pb-px tracking-tight hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary] lg:h-7",
      })}
      href={href}
      {...props}
    >
      {children}
    </NavigationMenuLinkPrimitive>
  )
}

export function DesktopMenu() {
  return (
    <>
      <NavigationMenuHeader className="hidden lg:flex" />
      <div className="hidden items-center gap-2 !justify-self-end lg:flex">
        {ctaButtons.map((cta) => {
          return (
            <ButtonLink key={cta.id} className="!px-3.5" href={cta.href} intent={cta.type}>
              {cta.label}
            </ButtonLink>
          )
        })}
      </div>
    </>
  )
}

// #region mobile 📱
/* -------------------------------------------------------------------------- */
/*                                   Mobile                                   */
/* -------------------------------------------------------------------------- */

export function MobileMenu() {
  const { handleToggle, isOn, handleOff } = useToggleState()

  return (
    <>
      <button
        aria-label="Toggle Menu"
        className="col-start-3 flex items-center justify-center gap-2 !justify-self-end rounded-sm border border-[--border] bg-[--surface-secondary] p-2 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] lg:hidden lg:h-7"
        onPointerDown={handleToggle}
      >
        <HamburgerMenuIcon className="size-4" />
      </button>
      <div className="block lg:hidden">
        {isOn ? (
          <div className="fixed left-0 top-[calc(var(--header-height)+1px)] z-10 h-auto w-full bg-[--surface-primary] dark:bg-[--dark-surface-primary]">
            <div className="flex flex-col gap-8 px-6 py-8">
              <nav className="flex flex-col gap-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.id}
                    className="flex items-center gap-2 rounded-sm px-3 py-1.5"
                    href={link.href}
                    onClick={handleOff}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center justify-start gap-2">
                {ctaButtons.map((cta) => {
                  return (
                    <ButtonLink key={cta.id} href={cta.href} intent={cta.type} size="lg">
                      {cta.label}
                    </ButtonLink>
                  )
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}
