"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, ZapIcon } from 'lucide-react'
import { teamMembers } from '@/lib/data'
import CTASection from '@/components/cta-section'

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              zappinZY
              </span> 
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering digital transformation through innovative technology solutions since 2021.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold font-heading mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Zappinzy Technologies was founded with a vision to bridge the gap between complex technology and business needs. What started as a small team of passionate developers has grown into a full-service digital agency with global reach.
              </p>
              <p className="text-muted-foreground mb-6">
                Our journey has been defined by continuous innovation, unwavering commitment to quality, and a deep understanding of emerging technologies that shape the digital landscape.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <p>5+ years delivering exceptional digital solutions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <p>100+ successful projects across multiple industries</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <p>Team of 50+ experts in various technology domains</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="Zappinzy team collaboration"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <ZapIcon className="h-8 w-8 mr-3" />
                  <div>
                    <p className="text-sm font-medium">FOUNDED</p>
                    <p className="text-2xl font-bold font-heading">2021</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="order-2 md:order-1 relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                    alt="Team collaboration"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg"
                    alt="Planning session"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                    alt="Coding session"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
                    alt="Design review"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold font-heading mb-6">Our Mission & Vision</h2>
              <div className="mb-6 p-6 border border-accent/30 rounded-lg bg-accent/5">
                <h3 className="text-xl font-semibold font-heading mb-3">Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses through innovative technology solutions that solve complex challenges, enhance efficiency, and drive growth in an increasingly digital world.
                </p>
              </div>
              <div className="p-6 border border-primary/30 rounded-lg bg-primary/5">
                <h3 className="text-xl font-semibold font-heading mb-3">Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading catalyst for digital transformation, recognized globally for our expertise, innovation, and commitment to delivering exceptional value to our clients.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of experts brings together the perfect blend of creativity, technical expertise, and business acumen.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                  className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-heading">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
      
      <CTASection />
    </>
  )
}