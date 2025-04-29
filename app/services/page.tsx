"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import * as Icons from 'lucide-react'
import CTASection from '@/components/cta-section'
import { DynamicIcon, DynamicIcon1 } from '@/components/DynamicIcon'
// export async function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }))
// }

// Dynamic icon component
// const DynamicIcon = ({ name }: { name: string }) => {
//   const LucideIcon = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1)] || Icons.CircleDashed
//   return <LucideIcon className="h-12 w-12  " />
// }
// const DynamicIcon1 = ({ name }: { name: string }) => {
//   const LucideIcon = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1)] || Icons.CircleDashed
//   return <LucideIcon className="h-12 w-12 text-purple-500 " />
// }

// Dynamic icon component
// const DynamicIcon = ({ icon: Icon }: { icon: React.ElementType }) => {
//   if (!Icon) return <Icons.CircleDashed className="h-12 w-12" />
//   return <Icon className="h-12 w-12" />
// }
export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0])
  
  return (
    <>
      <img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/banner-service-bg.webp" alt="" className='w-full' />
      <div className="absolute top-0 w-full min-h-[calc(100vh-76px)] flex items-center">
      <div className="container mx-auto px-6 relative z-10 ">
        <div className="max-w-4xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
            Unlock the true potential of your business with our digital engineering services.
            </p>
          </motion.div>
         
        </div>
        </div>
      </div>
      <section className="pt-32s pb-20 md:pt-40s md:pb-28">
        <div className="container mx-auto 2xl:px-4 lg:px-20">
     
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-4">
              <div className="space-y-2 sticky top-24">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all",
                      activeService.id === service.id
                        ? "bg-white text-black"
                        : "hover:bg-gradient-to-r from-purple-600 to-purple-900"
                    )}
                  >
                    <div className="flex items-center">
                      <div className={cn(
                        "mr-3 p-2 rounded-md",
                        activeService.id === service.id
                          ? "bg-gradient-to-r from-purple-600 to-purple-900 text-white"
                          : "bg-muteds  text-white"
                      )}>
                        <DynamicIcon name={service.icon} />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold">{service.title}</h3>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="group rounded-lg border border-purple-500/10 bg-purple-500/5 p-6 transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white">
                    <DynamicIcon1 name={activeService.icon} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-heading">{activeService.title}</h2>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {activeService.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg`}
                      alt={activeService.title}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold font-heading">Key Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Customized solutions tailored to your specific needs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Cutting-edge technology to ensure optimal performance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Scalable design that grows with your business</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Expert team with domain-specific knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Comprehensive support and maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* <Button asChild>
                  <Link href={`/services/${activeService.slug}`}>
                    Learn More About {activeService.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  )
}