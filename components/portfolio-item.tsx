"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface PortfolioItemProps {
  item: {
    id: number;
    type: "image" | "video";
    title: string;
    category: string;
    src: string;
  };
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group">
      <div
        className="relative h-80 bg-secondary rounded-lg overflow-hidden mb-4 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={item.src || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}

        

        {isHovered && (
          <div className="absolute inset-0 bg-black/0 flex items-end p-6">
            <div className="text-white">
              <p className="text-sm font-mono opacity-75">{item.category}</p>
            </div>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-muted-foreground">{item.category}</p>
    </div>
  );
}
