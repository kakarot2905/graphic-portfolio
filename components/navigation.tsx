'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:flex md:flex-col md:justify-between md:bg-background md:border-r md:border-border md:p-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-12">Alex Design</h1>
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>© 2025</p>
          <p>Graphic Designer</p>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-background border-b border-border p-4 z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Alex Design</h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
