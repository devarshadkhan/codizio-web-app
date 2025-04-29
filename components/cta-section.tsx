"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, ZapIcon } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="rounded-xl p-8 md:p-12 gradient-bg backdrop-blur-sm border">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <ZapIcon className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                Ready to Transform Your Business?
              </h2>
              
              <p className="text-xl text-white/80 mb-8">
                Let's collaborate to create innovative digital solutions that drive your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/contact" className='flex gap-3'>
                  <Phone className="ml-2 h-5 w-5"  />
                    Request a Callback
                    {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                  </Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}