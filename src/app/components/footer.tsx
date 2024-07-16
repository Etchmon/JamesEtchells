import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="pb-1 md:pb-12 text-xs text-frost-3 max-w-md mx-auto">
      <p>
        Built with Next.js and Tailwind CSS, deployed via CI/CD pipeline using
        Github Actions and Wrangler to Cloudflare Pages. Fonts used are Julius
        Sans One and Crimson Text.
      </p>
      <Image
        src="/images/J.svg"
        alt="Placeholder"
        width={30}
        height={30}
        className="absolute animate-pulse bottom-5 right-5 md:bottom-10 md:right-10"
      ></Image>
    </footer>
  )
}
