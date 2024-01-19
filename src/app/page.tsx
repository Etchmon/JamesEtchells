import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen-xl bg-dark-1 mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
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
        <ul className="ml-1 mt-8 flex items-center">
          {/* Social Media Links */}
          <li className="mr-5 text-xs">Icon</li>
          <li className="mr-5 text-xs">Icon</li>
          <li className="mr-5 text-xs">Icon</li>
          <li className="mr-5 text-xs">Icon</li>
        </ul>
      </header>
      <article>
        <section>{/* About */}</section>
        <section>{/* Projects */}</section>
        <section>{/* Contact */}</section>
      </article>
      <footer>{/* Footer */}</footer>
    </main>
  )
}
