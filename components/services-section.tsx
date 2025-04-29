"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import ServiceCard from '@/components/service-card'
import { Button } from '@/components/ui/button'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'


export default function ServicesSection() {
  const [visibleServices, setVisibleServices] = useState(6)
  const showAllServices = visibleServices >= services.length
  
  return (
    <section className="py-20 bg-[#030014] md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Our <span className="gradient-texts text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert solutions tailored to transform your business challenges into technological opportunities.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              index={index}
              icon={
                typeof LucideIcons[service.icon as keyof typeof LucideIcons] === "function"
                  ? (LucideIcons[service.icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon)
                  : LucideIcons.CircleDashed
              }
              badgeText={service.badgeText}
              Features={service?.Features}
            />
          ))}
        </div>
        
        {!showAllServices && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setVisibleServices(services.length)}
            >
              View All Services
            </Button>
          </div>
        )}
        
        {showAllServices && (
          <div className="text-center mt-12">
            <Button asChild className='bg-purple-600 hover:bg-purple-700'>
              <Link href="/services">Explore Services in Detail</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}