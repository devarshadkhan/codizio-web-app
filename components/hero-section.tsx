// "use client"

// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { ArrowRight } from 'lucide-react'

// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false)
  
//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <section className="relative py-32 md:py-40 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
//       <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
//               <span className="gradient-text">Igniting Digital</span> Innovation
//             </h1>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//               We transform business challenges into technology solutions with cutting-edge expertise in web, mobile, blockchain, and AI.
//             </p> */}
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//             A dynamic, energetic and innovation tech company that delivers fast and futuristic solutions.
//             </p>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="flex flex-col sm:flex-row justify-center gap-4"
//           >
//             <Button size="lg" asChild>
//               <Link href="/contact">
//                 Get Started
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button size="lg" variant="outline" asChild>
//               <Link href="/services">Our Services</Link>
//             </Button>
//           </motion.div>
//         </div>
        
//         {/* Abstract tech elements */}
//         <div className="mt-16 md:mt-24 relative h-64 md:h-80">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.6 }}
//             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//           >
//             <div className="relative">
//               <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary/30 glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
//               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-accent/30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//               <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Sparkles } from "lucide-react"
import { RoboAnimation } from "@/components/robo-animation"
import { FloatingPaper } from "./floating-paper"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transforming Ideas Into

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Digital Excellence
              </span>
              
            </h1>
            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Transform Your Research with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                AI Power
              </span>
              
            </h1> */}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
          A dynamic, energetic and innovation tech company that delivers fast and futuristic solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              {/* <FileText className="mr-2 h-5 w-5" /> */}
              Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-black bg-white border-purple-500 hover:bg-purple-500/20">
              <Sparkles className="mr-2 h-5 w-5" />
              See Examples
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  )
}
