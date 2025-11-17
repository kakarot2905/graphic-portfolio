'use client'

import { useState } from 'react'
import { Menu, X, Volume2, Play } from 'lucide-react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Portfolio from '@/components/portfolio'
import Contact from '@/components/contact'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="pt-20 md:pt-0 md:ml-64">
        <Hero />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}
