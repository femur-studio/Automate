"use client"
 
import { useState, useEffect } from "react"
import { ButtonLink } from "@/common/button"
import { DesktopMenu, MobileMenu } from "./navigation-menu"


export const Header = () => {
  const[atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onscroll = () => {
      setAtTop(window.scrollY < 1);
    };

    window.addEventListener("scroll",onscroll);
    onscroll();
      return () => window.removeEventListener("scroll", onscroll);
  } , []);


  return (
    <header  className={`
        sticky left-0 top-0 z-[110] flex w-full flex-col
        bg-[--surface-primary] dark:bg-[--dark-surface-primary]
        ${atTop
          ? "border-b border-[--border] dark:border-[--dark-border]"
          : "border-b border-transparent"
        }
      `}
    >
      <div className="flex h-[--header-height] bg-[--surface-primary] dark:bg-[--dark-surface-primary]">
        <div className="container mx-auto grid w-full grid-cols-[1fr_max-content_1fr] place-items-center content-center items-center px-6 *:first:justify-self-start">
          <ButtonLink unstyled className="flex items-center ring-offset-2" href="/">
            <img src="/femur-logo.jpg" alt="Femur" className="h-8 w-auto" />
          </ButtonLink>
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
