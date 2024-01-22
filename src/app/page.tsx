import Image from "next/image"

export default function Home() {
  return (
    <main className="lg:flex lg:gap-4 lg:justify-between  min-h-screen max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <header>
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
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          id="about"
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
        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          {/* Projects */}
          <h2 className="text-sm font-bold uppercase tracking-widest  text-white-1 mb-2">
            PROJECTS
          </h2>
          <ul className="mt-4">
            <li className="mb-12">
              <div className="grid sm:grid-cols-8 pb-1">
                <div className="col-span-2">
                  <Image
                    src="/images/placeholder.png"
                    alt="Placeholder"
                    width={100}
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
                    src="/images/placeholder.png"
                    alt="Placeholder"
                    width={100}
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
                    src="/images/placeholder.png"
                    alt="Placeholder"
                    width={100}
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
        <section>{/* Contact */}</section>
      </article>
      <footer>{/* Footer */}</footer>
    </main>
  )
}
