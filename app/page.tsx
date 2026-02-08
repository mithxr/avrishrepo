import { FileText, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    name: 'startup25.com',
    description: 'AI-powered toolkit that transforms menus and receipts into e-commerce sites.',
    link: 'https://startup25.com',
  },
];

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/mithxr', icon: FileText },
  { name: 'X', href: 'https://x.com/mithxr', icon: X },
  { name: 'Blog', href: '/posts', icon: FileText },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        {/* Header */}
        <header className="mb-20">
          <div className="w-16 h-16 bg-gray-900 rounded-full mb-6 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">R</span>
          </div>
          <h1 className="text-3xl font-semibold mb-4">Rishmitha Abdulrahim Valantinabanu</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Building tools that bridge physical data with digital experiences.
          </p>
        </header>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Projects</h2>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-6 px-6 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors ml-4 flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Connect</h2>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-24">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <p className="text-sm text-gray-500">
            &copy; 2025 Rishmitha Abdulrahim Valantinabanu
          </p>
        </div>
      </footer>
    </div>
  );
}
