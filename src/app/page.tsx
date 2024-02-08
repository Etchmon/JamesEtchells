"use client"

import { useEffect } from "react"
import Image from "next/image"

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
    <main className="lg:flex lg:gap-4 lg:justify-between  min-h-screen max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative">
      <div className="intro" id="intro">
        <h1 className="logo-header text-4xl sm:text-5xl">
          <span className="logo text-frost-2">jamesetchells</span>
          <span className="logo text-aurora-3">.com</span>
        </h1>
      </div>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 relative">
        {/* Header */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white-1">
            James Etchells
          </h1>
          <h2 className="sm:text-xl md:text-3xl  mt-3 font-medium tracking-tight text-white-2">
            Full-Stack Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-frost-3">
            I build full-stack applications, create CI/CD pipelines, and love
            linux.
          </p>
          <h3 className="mt-4 font-medium tracking-tight text-dark-4">
            Arch Linux User
          </h3>
        </div>
        <ul className="ml-1 mt-8 flex items-center text-frost-3">
          {/* Social Media Links */}
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-aurora-3"
              href="https://github.com/Etchmon"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Github (opens in a new tab)"
              title="GitHub"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              href="#"
              className="block hover:text-aurora-3"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opens in a new tab)"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              href="https://www.instagram.com/jawetchells/"
              className="block hover:text-aurora-3"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram (opens in a new tab)"
              title="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              href="/resume/jamesetchells_resume.pdf"
              className="block hover:text-aurora-3"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Resume/CV (opens in a new tab)"
              title="Resume/CV"
            >
              <svg
                className="w-8 h-8 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.3-.6-1-1-1.6-1H7.6c-.7 0-1.3.4-1.6 1M4 5h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </header>
      <article className="pt-24 lg:w-1/2 lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          {/* About */}
          <h2 className="text-xl font-bold uppercase tracking-widest  text-white-1">
            ABOUT
          </h2>
          <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
            In 2018 I was a promising cook in the heart of downtown San Diego,
            receiving an offer from Mister A's renown chef Stephan Voitzwinkler
            to become his apprentice. As much I loved the culinary arts, I had a
            passion for technology and decided to pursue a career in software
            development.
          </p>
          <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
            I enrolled in a coding bootcamp and quickly found myself immersed in
            the world of web development. I have since worked on a variety of
            projects, and professionaly for{" "}
            <a href="https://realgameathletics.com" target="_blank">
              <span className="text-white-3 hover:text-aurora-3">
                {" "}
                Real Game Athletics
              </span>
            </a>{" "}
            building his SPA website.
          </p>
          <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
            I have been continuing to build my skillset while working side jobs
            and freelance gigs, with the hope to land a full-time developer role
            where I can immerse myself in a project, ideally at a start-up with
            a close-knit team where I can make a meaningful impact and grow as a
            developer.
          </p>
          <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
            Currently I am developing the mobile app version for Real Game
            Athletics, practicing CI/CD pipelines, installing linux on every
            free device I have, and learning about the world of blockchain and
            smart contracts. I strongly believe I would be a valuable asset for
            any team, with my wide range of skills, ability to learn quickly,
            and my love for working with others.
          </p>
          <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
            When I am not at the computer, I am testing new recipes in the
            kitchen, watching movies with my girlfriend, playing soccer/rock
            climbing, or gaming with my friends on Apex/Counter-Strike.
          </p>
        </section>
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
            Design loosly based off every other portfolio website, coded in
            Visual Studio Code by me. Built with Next.js and Tailwind CSS,
            deployed via CI/CD pipeline using Github Actions and Wrangler to
            Cloudflare Pages. Fonts used are Julius Sans One and Crimson Text.
          </p>
          <Image
            src="/images/J.svg"
            alt="Placeholder"
            width={30}
            height={30}
            className="absolute animate-pulse bottom-5 right-5 md:bottom-10 md:right-10"
          ></Image>
        </footer>
      </article>
    </main>
  )
}
