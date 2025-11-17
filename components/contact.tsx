'use client'

import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-24 border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-2">
            Get in Touch
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's create something great together
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@alexdesign.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={20} />
                sudhakarshinde2905@gmail.com
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <span className="text-sm">Pune, MH</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Follow</h3>
            <div className="flex gap-4">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sudhakarshinde2905/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/kakarot._.kun/",
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-accent transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
