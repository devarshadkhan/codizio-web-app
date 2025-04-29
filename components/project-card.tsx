"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className={cn(
            "object-cover w-full h-full transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
          width={600}
          height={340}
        />
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-70"
        )} />
        
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-full">
            {project.category}
          </span>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-xl font-heading font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className={cn(
            "text-white/80 mb-4 transition-all duration-300",
            isHovered ? "opacity-100 max-h-24" : "opacity-0 max-h-0"
          )}>
            {project.description}
          </p>
          <div className={cn(
            "transition-all duration-300",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Button asChild>
              <Link href={`/projects/${project.slug}`}>
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}