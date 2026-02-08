'use client';

import { Github, Twitter, FileText, ExternalLink, Code, Server, Database, Cpu, Globe, Sparkles, Zap, Rocket, ArrowRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const skills = {
  frontend: [
    { name: 'React', icon: Code, level: 95 },
    { name: 'Next.js', icon: Rocket, level: 90 },
    { name: 'TypeScript', icon: Code, level: 88 },
    { name: 'Tailwind CSS', icon: Sparkles, level: 92 },
  ],
  backend: [
    { name: 'Node.js', icon: Server, level: 90 },
    { name: 'Python', icon: Zap, level: 85 },
    { name: 'PostgreSQL', icon: Database, level: 82 },
    { name: 'AI/ML', icon: Cpu, level: 80 },
  ],
  infrastructure: [
    { name: 'Vercel', icon: Globe, level: 95 },
    { name: 'Docker', icon: Server, level: 78 },
    { name: 'Git', icon: ExternalLink, level: 90 },
    { name: 'AWS', icon: Globe, level: 75 },
  ],
};

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/mithxr', icon: Github },
  { name: 'Twitter', href: 'https://x.com/mithxr', icon: Twitter },
  { name: 'Blog', href: '/posts', icon: FileText },
];

function FloatingParticle({ delay }: { delay: number }) {
  return (
    <div
      className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${15 + Math.random() * 10}s`,
      }}
    />
  );
}

function SkillBar({ level }: { level: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${level}%` : '0%' }}
      />
    </div>
  );
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.15), transparent 80%)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-32">
        {/* Hero Section */}
        <section className="mb-24 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-[2px] animate-pulse-soft">
              <div className="w-full h-full rounded-2xl bg-gray-950 flex items-center justify-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-pink-400">
                RV
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-twinkle" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
              Hey, I'm Rishmitha
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
            Building{' '}
            <span className="text-purple-400 font-semibold">AI-driven tools</span>
            {' '}that transform how small businesses operate
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://startup25.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                View startup25.com
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </section>

        {/* Featured Project */}
        <section className="mb-24">
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">startup25.com</h2>
                  <p className="text-sm text-gray-400">Featured Project</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                AI-powered small business toolkit. Transform menus, receipts, and maps into complete
                e-commerce experiences —{' '}
                <span className="text-purple-400 font-semibold">no code required</span>
              </p>

              <div className="flex gap-3 flex-wrap">
                {['Next.js', 'AI/ML', 'Stripe', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gray-800/50 rounded-lg text-sm border border-gray-700 hover:border-purple-500/50 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/5"
              >
                <h3 className="text-lg font-semibold mb-6 capitalize text-purple-400">
                  {category === 'frontend' && 'Frontend'}
                  {category === 'backend' && 'Backend / AI'}
                  {category === 'infrastructure' && 'Infrastructure'}
                </h3>

                <div className="space-y-5">
                  {items.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-gray-400 group-hover/skill:text-purple-400 transition-colors" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <SkillBar level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="flex gap-4 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative px-6 py-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3">
                  <link.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  <span className="font-medium">{link.name}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Rishmitha Abdulrahim Valantinabanu
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Built with Next.js 14 + Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          25% { transform: translateY(-100px) translateX(50px); opacity: 0.5; }
          50% { transform: translateY(-200px) translateX(-50px); opacity: 0.3; }
          75% { transform: translateY(-300px) translateX(25px); opacity: 0.4; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }

        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
