'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import PortfolioItem from './portfolio-item'

interface PortfolioItemType {
  id: number
  type: 'image' | 'video'
  title: string
  category: string
  src: string
}

const portfolioItems: PortfolioItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Shade Effects",
    category: "Illustration",
    src: "/image1.png",
  },
  {
    id: 2,
    type: "image",
    title: "Logo Redesign",
    category: "logo Design",
    src: "/image2.png",
  },
  {
    id: 3,
    type: "image",
    title: "Poster",
    category: "Print Design",
    src: "/image3.png",
  },
  {
    id: 4,
    type: "image",
    title: "Photo Edit",
    category: "Creative Editing",
    src: "/image4.png",
  },
  {
    id: 5,
    type: "video",
    title: "Motion Design",
    category: "Animation",
    src: "/motion1.mp4",
  },
  {
    id: 6,
    type: "video",
    title: "2D Animation",
    category: "Animation",
    src: "/motion2.mp4",
  },
  {
    id: 7,
    type: "image",
    title: "Advertisement Banner",
    category: "Branner",
    src: "/image5.png",
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-2">Selected Work</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Crafted with precision and creativity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
