"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import ProjectCard from '@/components/project-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CTASection from '@/components/cta-section'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))]
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful digital solutions across various industries.
            </p>
          </motion.div>
          
          <div className="mb-20">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList>
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      onClick={() => setActiveFilter(category)}
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map(category => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  )
}