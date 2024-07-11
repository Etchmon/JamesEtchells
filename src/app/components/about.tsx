export const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* About */}
      <h2 className="text-xl font-bold uppercase tracking-widest  text-white-1">
        ABOUT
      </h2>
      <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
        In 2018, I was a promising cook in the heart of downtown San Diego,
        receiving an offer from Mister A's renown chef Stephan Voitzwinkler to
        become his apprentice. As much I loved the culinary arts, I had a
        passion for technology and decided to pursue a career in software
        development.
      </p>
      <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
        I enrolled in a coding bootcamp and quickly found myself immersed in the
        world of web development. I have since worked on a variety of projects,
        most notably, building an SPA for
        <a href="https://realgameathletics.com" target="_blank">
          <span className="text-white-3 hover:text-aurora-3">
            {" "}
            Real Game Athletics
          </span>
        </a>{" "}
        .
      </p>
      <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
        I have been continually expanding my skillset with the goal of landing a
        full-time developer role. Ideally, I'd like to work at a start-up with a
        close-knit team so that I can immerse myself in a project, make a
        meaningful impact, and grow with the company.
      </p>
      <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
        Currently I am developing the mobile app version for Real Game
        Athletics, practicing CI/CD pipelines, installing linux on every free
        device I have, and learning about the world of blockchain and smart
        contracts. I strongly believe I would be a valuable asset for any team,
        with my wide range of skills, ability to learn quickly, and my love for
        working with others.
      </p>
      <p className="text-sm md:text-base mt-4 w-full leading-normal text-frost-3">
        When I am not at the computer, I am testing new recipes in the kitchen,
        watching movies with my girlfriend, playing soccer/rock climbing, or
        gaming with my friends on Apex/Counter-Strike.
      </p>
    </section>
  )
}
