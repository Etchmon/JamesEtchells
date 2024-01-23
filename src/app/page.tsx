"use client"

import { useEffect } from "react"
import Image from "next/image"
import ContactForm from "./contact-form"

export default function Home() {
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
      <header className="relative">
        {/* Header */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white-1">
            James Etchells
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl text-white-2">
            Full-Stack Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-frost-3">
            I build full-stack applications, design CI/CD pipelines, and love
            linux
          </p>
        </div>
        <ul className="ml-1 mt-8 flex items-center text-frost-3">
          {/* Social Media Links */}
          <li className="mr-5 text-xs">test</li>
          <li className="mr-5 text-xs">test</li>
          <li className="mr-5 text-xs">test</li>
          <li className="mr-5 text-xs">test</li>
        </ul>
      </header>
      <article className="pt-24 lg:w-1/2 lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          {/* About */}
          <h2 className="text-sm font-bold uppercase tracking-widest  text-white-1">
            ABOUT
          </h2>
          <p className="mt-4 w-full leading-normal text-frost-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            provident incidunt illum assumenda ea minima blanditiis perspiciatis
            amet aliquam corrupti, iure libero obcaecati esse! In reprehenderit
            accusamus inventore tempore similique?
          </p>
        </section>
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          {/* Projects */}
          <h2 className="text-sm font-bold uppercase tracking-widest  text-white-1 mb-2">
            PROJECTS
          </h2>
          <ul className="mt-4">
            <li className="mb-12">
              <div className="grid sm:grid-cols-8 pb-1">
                <div className="col-span-2">
                  <Image
                    src="/images/10.png"
                    alt="Placeholder"
                    width={200}
                    height={100}
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="text-sm font-bold text-white-1">Project</h3>
                  <p className="mt-2 text-frost-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat provident incidunt illum assumenda ea minima
                    blanditiis perspiciatis amet aliquam corrupti, iure libero
                    obcaecati esse! In reprehenderit accusamus inventore tempore
                    similique?
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="grid sm:grid-cols-8 pb-1">
                <div className="col-span-2">
                  <Image
                    src="/images/16.png"
                    alt="Placeholder"
                    width={200}
                    height={100}
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="text-sm font-bold text-white-1">Project</h3>
                  <p className="mt-2 text-frost-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat provident incidunt illum assumenda ea minima
                    blanditiis perspiciatis amet aliquam corrupti, iure libero
                    obcaecati esse! In reprehenderit accusamus inventore tempore
                    similique?
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="grid sm:grid-cols-8 pb-1">
                <div className="col-span-2">
                  <Image
                    src="/images/39.png"
                    alt="Placeholder"
                    width={200}
                    height={100}
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="text-sm font-bold text-white-1">Project</h3>
                  <p className="mt-2 text-frost-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat provident incidunt illum assumenda ea minima
                    blanditiis perspiciatis amet aliquam corrupti, iure libero
                    obcaecati esse! In reprehenderit accusamus inventore tempore
                    similique?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section
          id="contact"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          {/* Contact */}
          <h2 className="text-sm font-bold uppercase tracking-widest  text-white-1 mb-2">
            CONTACT
          </h2>
          <ContactForm />
        </section>
        <footer className="pb-16 sm:pb-1 text-sm text-frost-3 max-w-md">
          {/* Footer */}
          <p>
            Design loosly based off every other portfolio website, coded in
            Visual Studio Code by me. Built with Next.js and Tailwind CSS,
            deployed via CI/CD pipeline using Github Actions and Wrangler to
            Cloudflare Pages. Fonts used are Julius Sans One and Crimson Text.
          </p>
        </footer>
      </article>
    </main>
  )
}
