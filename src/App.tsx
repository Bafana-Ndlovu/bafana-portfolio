import type { ReactNode } from 'react'
import { featured, moreProjects, problems, profile, skills, type Project } from './content'

const year = new Date().getFullYear()

function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function Header() {
  return (
    <header className="bg-sign">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-extrabold text-ink">
          {profile.name}
        </a>
        <ul className="flex items-center gap-5 text-sm font-semibold text-ink sm:gap-7">
          <li>
            <a href="#work" className="hover:underline">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="bg-sign">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-10 pb-16 sm:px-8 md:pt-16 md:pb-24 lg:grid-cols-[1.25fr_1fr] lg:items-end">
        <div>
          <p className="font-semibold text-ink">
            {profile.role}, {profile.location}
          </p>
          <h1 className="mt-4 text-[2.6rem] font-extrabold sm:text-6xl lg:text-[4.25rem]">{profile.headline}</h1>
          <p className="mt-6 max-w-xl text-lg text-ink/80">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-ink/90">
              See my work
            </a>
            {profile.cv ? (
              <a
                href={profile.cv}
                download
                className="rounded-full border-2 border-ink px-6 py-3 font-semibold text-ink hover:bg-ink hover:text-white"
              >
                Download my CV
              </a>
            ) : (
              <a
                href="#contact"
                className="rounded-full border-2 border-ink px-6 py-3 font-semibold text-ink hover:bg-ink hover:text-white"
              >
                Get in touch
              </a>
            )}
          </div>
        </div>

        {/* The signature element: real problems, each paired with the app built for it */}
        <div className="rounded-3xl bg-ink p-6 text-white sm:p-8">
          <p className="font-display text-lg font-semibold text-sign">Problems I have built for</p>
          <ul className="mt-4 divide-y divide-white/15">
            {problems.map((item, index) => (
              <li key={item.app} className="rise-in" style={{ animationDelay: `${150 + index * 120}ms` }}>
                <a href={item.href} className="group flex items-baseline justify-between gap-4 py-4">
                  <span className="text-white/85">{item.problem}</span>
                  <span className="shrink-0 font-display font-semibold text-sign group-hover:underline">{item.app}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article id={project.id} className="grid scroll-mt-8 items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <ExternalLink
        href={project.live}
        className={`block overflow-hidden rounded-2xl border border-ink/10 bg-mist ${flip ? 'lg:order-2' : ''}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={569}
          loading="lazy"
          className="aspect-[1200/569] w-full object-cover object-top transition duration-300 hover:scale-[1.02]"
        />
      </ExternalLink>
      <div>
        <p className="font-semibold text-link">{project.kind}</p>
        <h3 className="mt-1 text-3xl font-extrabold sm:text-4xl">{project.name}</h3>
        <p className="mt-3 text-lg text-ink">{project.summary}</p>
        <dl className="mt-5 space-y-3">
          <div>
            <dt className="font-semibold text-ink">The problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">My role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tool) => (
            <li key={tool} className="rounded-full bg-mist px-3 py-1 text-sm font-medium text-ink">
              {tool}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-5 font-semibold">
          <ExternalLink href={project.live} className="text-link underline decoration-2 underline-offset-4 hover:text-ink">
            Open the live app
          </ExternalLink>
          <ExternalLink href={project.github} className="text-link underline decoration-2 underline-offset-4 hover:text-ink">
            Read the code on GitHub
          </ExternalLink>
        </div>
      </div>
    </article>
  )
}

function Work() {
  return (
    <section id="work" className="scroll-mt-4">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="max-w-2xl text-4xl font-extrabold sm:text-5xl">Projects I am proud of</h2>
        <p className="mt-4 max-w-2xl">
          Each one started with a real problem, was designed before it was built, and is live for anyone to try.
        </p>
        <div className="mt-14 space-y-20 md:space-y-28">
          {featured.map((project, index) => (
            <ProjectRow key={project.id} project={project} flip={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function More() {
  return (
    <section id="more" className="scroll-mt-4 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <h2 className="text-3xl font-extrabold">More builds</h2>
        <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {moreProjects.map((project) => (
            <li key={project.name} className="grid gap-2 py-6 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-8">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <div>
                <p className="text-ink">{project.text}</p>
                <p className="mt-1 text-sm">{project.stack}</p>
              </div>
              <ExternalLink href={project.github} className="font-semibold text-link underline decoration-2 underline-offset-4">
                Code on GitHub
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-4">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">About me</h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-xl">
              {paragraph}
            </p>
          ))}
          <p className="mt-5 max-w-xl font-semibold text-ink">{profile.lookingFor}</p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold">Skills and tools</h2>
          <dl className="mt-6 space-y-6">
            {skills.map((skill) => (
              <div key={skill.group}>
                <dt className="font-display text-lg font-semibold text-ink">{skill.group}</dt>
                <dd className="mt-1">{skill.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    profile.email && { label: profile.email, href: `mailto:${profile.email}`, external: false },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin, external: true },
    { label: 'GitHub', href: profile.github, external: true },
  ].filter((link): link is { label: string; href: string; external: boolean } => Boolean(link))

  return (
    <section id="contact" className="scroll-mt-4 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <h2 className="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
          Have a problem worth solving? Let’s talk.
        </h2>
        <p className="mt-5 max-w-xl text-white/80">{profile.lookingFor}</p>
        <ul className="mt-10 flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <ExternalLink href={link.href} className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-ink hover:bg-sign">
                  {link.label}
                </ExternalLink>
              ) : (
                <a href={link.href} className="inline-block rounded-full bg-sign px-6 py-3 font-semibold text-ink hover:bg-white">
                  {link.label}
                </a>
              )}
            </li>
          ))}
          {profile.cv && (
            <li>
              <a
                href={profile.cv}
                download
                className="inline-block rounded-full border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-ink"
              >
                Download my CV
              </a>
            </li>
          )}
        </ul>
      </div>
      <footer className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-white/60 sm:px-8">
          © {year} {profile.name}
        </p>
      </footer>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to projects
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <More />
        <About />
      </main>
      <Contact />
    </>
  )
}
