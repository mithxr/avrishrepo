import { FileText, ExternalLink, X, Mail, MapPin, Code, Terminal, Database } from 'lucide-react';

const experiences = [
  {
    role: 'Founder & Engineer',
    company: 'startup25.com',
    period: '2024 - Present',
    description: 'Building AI-powered tools for small businesses. Stack: Next.js, Python, PostgreSQL, Stripe APIs.',
  },
];

const projects = [
  {
    name: 'startup25.com',
    description: 'Transform menus, receipts, and maps into complete e-commerce experiences using AI.',
    tech: ['Next.js', 'AI/ML', 'Stripe', 'PostgreSQL'],
    link: 'https://startup25.com',
  },
];

const skills = {
  languages: ['TypeScript', 'Python', 'JavaScript', 'SQL', 'Swift'],
  frameworks: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Django'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'PostgreSQL', 'Redis'],
};

const contact = [
  { icon: X, label: 'X', href: 'https://x.com/mithxr' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@rishmitha.dev' },
  { icon: FileText, label: 'Blog', href: '/posts' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Rishmitha Abdulrahim Valantinabanu</h1>
              <p className="text-[#8b949e] text-lg">Software Engineer & Founder</p>
            </div>
            <div className="hidden md:block">
              <Code className="w-8 h-8 text-[#58a6ff]" />
            </div>
          </div>
          <p className="text-[#8b949e] leading-relaxed max-w-2xl">
            Building AI-driven tools that bridge physical data with digital experiences.
            Currently working on making e-commerce accessible for every small business.
          </p>
        </header>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="border-l-2 border-[#30363d] pl-6 py-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-semibold">{exp.role}</h3>
                  <span className="text-sm text-[#8b949e]">{exp.period}</span>
                </div>
                <p className="text-[#58a6ff] mb-2">{exp.company}</p>
                <p className="text-[#8b949e] text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Code className="w-4 h-4" />
            Projects
          </h2>
          <div className="grid gap-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-lg border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff] transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold group-hover:text-[#58a6ff] transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-[#8b949e] group-hover:text-[#58a6ff] transition-colors flex-shrink-0" />
                </div>
                <p className="text-[#8b949e] text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-[#21262d] text-[#58a6ff] border border-[#30363d]">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Database className="w-4 h-4" />
            Skills & Technologies
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold text-[#8b949e] uppercase mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="text-sm text-[#c9d1d9]">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#8b949e] uppercase mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="text-sm text-[#c9d1d9]">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#8b949e] uppercase mb-3">Tools & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="text-sm text-[#c9d1d9]">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Connect</h2>
          <div className="flex flex-wrap gap-4">
            {contact.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#21262d] border border-[#30363d] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#21262d]">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#8b949e]">
              &copy; 2025 Rishmitha Abdulrahim Valantinabanu
            </p>
            <p className="text-sm text-[#8b949e] flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Built with Next.js 14
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
