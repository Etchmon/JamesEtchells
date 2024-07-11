"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Header } from "../app/components/header"
import { About } from "../app/components/about"

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
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          {/* Projects */}
          <h2 className="text-xl font-bold uppercase tracking-widest  text-white-1 mb-2">
            PROJECTS
          </h2>
          <ul className="mt-4">
            <li className="mb-12">
              <div className="relative grid sm:grid-cols-8 pb-1 gap-4 sm:gap-8 md:gap-4">
                <Image
                  src="/images/etchmon-acid.png"
                  alt="Placeholder"
                  width={200}
                  height={100}
                  className="sm:col-span-2 sm:order-1 sm:translate-y-1"
                />
                <div className="sm:col-span-6 sm:order-2">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=etchmon-dev.etchmon-acid"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Etchmon Acid (opens in a new tab)"
                    title="Etchmon Acid"
                  >
                    <h3 className="text-md font-bold text-white-1 hover:text-aurora-3 max-w-fit">
                      Etchmon Acid VS Code Theme
                    </h3>
                  </a>
                  <p className="mt-2 text-frost-3 text-sm">
                    A custom VS Code theme using high contrast colors on a dark
                    theme to emphasize readability and lessen eye strain. It is
                    available on VS Code MarketPlace and is continually being
                    worked on.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Node.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        CSS
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="relative grid sm:grid-cols-8 pb-1 gap-4 sm:gap-8 md:gap-4">
                <Image
                  src="/images/cbd.png"
                  alt="Placeholder"
                  width={200}
                  height={100}
                  className="sm:col-span-2 sm:order-1 sm:translate-y-1"
                />
                <div className="sm:col-span-6 sm:order-2">
                  <a
                    href="https://nextjs-cookbook-cngdvy0e5-etchmon.vercel.app/"
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="CookBook Digital (opens in a new tab)"
                    title="CookBook Digital"
                  >
                    <h3 className="text-md font-bold text-white-1 hover:text-aurora-3 max-w-fit">
                      CookBook Digital - Social Media Cookbook
                    </h3>
                  </a>
                  <p className="mt-2 text-frost-3 text-sm">
                    Explore and Share Recipes with this dynamic Full-Stack
                    Next.js project designed for culinary enthusiasts. With
                    Next-Auth integration, users can sign in with custom
                    credentials or Google accounts to save their favorite
                    recipes securely on MongoDB. The project serves as a
                    playground for mastering Next.js functionalities, including
                    Server-Side functions, while fostering a vibrant community
                    of food lovers.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Tailwind CSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        MongoDB
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Next-Auth
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Vercel
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Mongoose
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Node
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="relative grid sm:grid-cols-8 pb-1 gap-4 sm:gap-8 md:gap-4">
                <Image
                  src="/images/homepage.png"
                  alt="Placeholder"
                  width={200}
                  height={100}
                  className="sm:col-span-2 sm:order-1 sm:translate-y-1"
                />

                <div className="sm:col-span-6 sm:order-2">
                  <a
                    href="jamesetchells.com"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <h3 className="text-md font-bold text-white-1 hover:text-aurora-3 max-w-fit">
                      jamesetchells.com
                    </h3>
                  </a>
                  <p className="mt-2 text-frost-3 text-sm">
                    My personal website, deployed on Cloudflare Pages with DNS
                    redirects to my custom domain name. Developed using Next.js
                    and Tailwind CSS and implements a GitHub Actions CI/CD
                    pipepline that triggers on successful PR merges and deploys
                    to production using Wrangler.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Tailwind CSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Node.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Cloudflare
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        Wrangler
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                        GitHub Actions
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>
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
