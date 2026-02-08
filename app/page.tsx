import { Github, Twitter, FileText, ExternalLink, Code, Server, Database, Cpu, Globe } from 'lucide-react';

const skills = {
  frontend: [
    { name: 'React', icon: Code },
    { name: 'Next.js', icon: ExternalLink },
    { name: 'TypeScript', icon: Code },
    { name: 'Tailwind CSS', icon: ExternalLink },
  ],
  backend: [
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Code },
    { name: 'PostgreSQL', icon: Database },
    { name: 'AI/ML', icon: Cpu },
  ],
  infrastructure: [
    { name: 'Vercel', icon: Globe },
    { name: 'Docker', icon: Server },
    { name: 'Git', icon: ExternalLink },
    { name: 'AWS', icon: Globe },
  ],
};

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/mithxr', icon: Github },
  { name: 'Twitter', href: 'https://x.com/mithxr', icon: Twitter },
  { name: 'Blog', href: '/posts', icon: FileText },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Bridging physical data with{' '}
            <span className="text-[var(--border-hover)]">digital tools</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--border-hover)] md:text-xl">
            Hi, I'm Rishmitha. I build AI-driven tools that transform how small businesses operate.
          </p>
        </section>

        {/* Primary Link - Startup25 */}
        <section className="mb-20">
          <a
            href="https://startup25.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-[var(--border)] p-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--muted)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">startup25.com</h2>
                <p className="mt-2 text-[var(--border-hover)]">
                  AI-powered small business toolkit. Transform menus, receipts, and maps into complete
                  e-commerce experiences — no code required.
                </p>
              </div>
              <ExternalLink className="h-5 w-5 flex-shrink-0 text-[var(--border-hover)] transition-colors group-hover:text-[var(--foreground)]" />
            </div>
          </a>
        </section>

        {/* Skills Grid */}
        <section className="mb-20">
          <h2 className="mb-8 text-xl font-semibold">Skills</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Frontend */}
            <div className="rounded-lg border border-[var(--border)] p-5">
              <h3 className="mb-4 text-sm font-medium text-[var(--border-hover)]">Frontend</h3>
              <ul className="space-y-3">
                {skills.frontend.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 text-sm">
                    <skill.icon className="h-4 w-4 text-[var(--border-hover)]" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend/AI */}
            <div className="rounded-lg border border-[var(--border)] p-5">
              <h3 className="mb-4 text-sm font-medium text-[var(--border-hover)]">Backend / AI</h3>
              <ul className="space-y-3">
                {skills.backend.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 text-sm">
                    <skill.icon className="h-4 w-4 text-[var(--border-hover)]" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="rounded-lg border border-[var(--border)] p-5">
              <h3 className="mb-4 text-sm font-medium text-[var(--border-hover)]">Infrastructure</h3>
              <ul className="space-y-3">
                {skills.infrastructure.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 text-sm">
                    <skill.icon className="h-4 w-4 text-[var(--border-hover)]" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <h2 className="mb-6 text-xl font-semibold">Connect</h2>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-3 text-sm transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--muted)]"
              >
                <link.icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer with Education */}
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <p className="text-sm text-[var(--border-hover)]">
            &copy; 2025 · Rishmitha Abdulrahim Valantinabanu · Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
