"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Header } from "../app/components/header"
import { About } from "../app/components/about"
import { Projects } from "../app/components/projects"

export default function Home() {
  // Splash screen animation
  useEffect(() => {
    let intro: HTMLElement | null = document.getElementById("intro")
    let logo: HTMLElement | null = document.querySelector(".logo-header")
    let logoSpan: NodeListOf<HTMLElement> = document.querySelectorAll(".logo")

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(
          () => {
            span.classList.add("active")
          },
          (idx + 1) * 400,
        )
      })

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("active")
            span.classList.add("fade")
          }),
            (idx + 1) * 50
        })
      }, 2000)

      setTimeout(() => {
        if (intro) {
          intro.style.opacity = "0"
          intro.style.zIndex = "-1"
        }
      }, 2200)
    })
  }, [])
  return (
    <div className="lg:flex lg:gap-4 lg:justify-between  min-h-screen max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative">
      <div className="intro" id="intro">
        <h1 className="logo-header text-4xl sm:text-5xl">
          <span className="logo text-frost-2">jamesetchells</span>
          <span className="logo text-aurora-3">.com</span>
        </h1>
      </div>
      <Header />
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Projects />

        {/* <section
          id="contact"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        > */}
        {/* Contact */}
        {/* <h2 className="text-sm font-bold uppercase tracking-widest  text-white-1 mb-2">
            CONTACT
          </h2> */}
        {/* <ContactForm /> */}
        {/* </section> */}
        <footer className="pb-1 md:pb-12 text-xs text-frost-3 max-w-md mx-auto">
          {/* Footer */}
          <p>
            Built with Next.js and Tailwind CSS, deployed via CI/CD pipeline
            using Github Actions and Wrangler to Cloudflare Pages. Fonts used
            are Julius Sans One and Crimson Text.
          </p>
          <Image
            src="/images/J.svg"
            alt="Placeholder"
            width={30}
            height={30}
            className="absolute animate-pulse bottom-5 right-5 md:bottom-10 md:right-10"
          ></Image>
        </footer>
      </main>
    </div>
  )
}
