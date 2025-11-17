import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl">
        <p className="text-accent font-mono uppercase tracking-widest text-sm mb-4">Hey there !</p>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-pretty">
          I create beautiful, thoughtful design experiences
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          I'm a graphic designer specializing in brand identity, visual design, and creative direction. 
          I work with brands and creative teams to bring ideas to life through compelling design.
        </p>
        <a
          href="#work"
          className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          View My Work
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  )
}
