// import Link from 'next/link'
// import Image from 'next/image'
// import { projects } from '@/lib/data'
// import { Button } from '@/components/ui/button'
// import { ArrowLeft, CheckCircle, ChevronRight, ExternalLink } from 'lucide-react'
// import CTASection from '@/components/cta-section'
// import { type PageProps } from 'next';
// // Add generateStaticParams function to generate static routes
// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }))
// }

// export default function ProjectDetailPage({ params }: PageProps<{ slug: string }>) {
//   const project = projects.find(p => p.slug === params.slug)
  
//   if (!project) return null
  
//   return (
//     <>
//       <section className="pt-32 pb-20 md:pt-40 md:pb-28">
//         <div className="container mx-auto px-4">
//           <div className="mb-6">
//             <div className="flex items-center text-sm text-muted-foreground mb-8">
//               <Link href="/" className="hover:text-primary">Home</Link>
//               <ChevronRight className="h-4 w-4 mx-2" />
//               <Link href="/projects" className="hover:text-primary">Projects</Link>
//               <ChevronRight className="h-4 w-4 mx-2" />
//               <span className="text-foreground">{project.title}</span>
//             </div>
            
//             <div>
//               <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
//                 {project.category}
//               </span>
//               <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
//                 {project.title}
//               </h1>
//               <p className="text-xl text-muted-foreground max-w-3xl">
//                 {project.description}
//               </p>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 mb-16">
//             <div className="lg:col-span-2">
//               <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover"
//                   fill
//                 />
//               </div>
              
//               <h2 className="text-2xl font-bold font-heading mb-4">The Challenge</h2>
//               <p className="text-muted-foreground mb-6">
//                 The client faced significant challenges with their existing system, including poor performance, limited scalability, and an outdated user interface that was affecting user engagement and business growth.
//               </p>
              
//               <h2 className="text-2xl font-bold font-heading mb-4">Our Solution</h2>
//               <p className="text-muted-foreground mb-6">
//                 We developed a comprehensive solution that addressed all of the client's pain points while introducing innovative features to enhance user experience and operational efficiency.
//               </p>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div className="bg-card border rounded-lg p-6">
//                   <h3 className="text-xl font-semibold font-heading mb-3">User-Centric Design</h3>
//                   <p className="text-muted-foreground">
//                     We implemented an intuitive interface with seamless navigation, enhanced accessibility, and personalized user experiences.
//                   </p>
//                 </div>
//                 <div className="bg-card border rounded-lg p-6">
//                   <h3 className="text-xl font-semibold font-heading mb-3">Performance Optimization</h3>
//                   <p className="text-muted-foreground">
//                     Significant improvements in load times, data processing, and overall system responsiveness for a smooth user experience.
//                   </p>
//                 </div>
//                 <div className="bg-card border rounded-lg p-6">
//                   <h3 className="text-xl font-semibold font-heading mb-3">Scalable Architecture</h3>
//                   <p className="text-muted-foreground">
//                     We built a flexible, microservices-based architecture capable of handling growing user numbers and expanding feature sets.
//                   </p>
//                 </div>
//                 <div className="bg-card border rounded-lg p-6">
//                   <h3 className="text-xl font-semibold font-heading mb-3">Advanced Analytics</h3>
//                   <p className="text-muted-foreground">
//                     Integrated comprehensive analytics and reporting capabilities for data-driven decision making.
//                   </p>
//                 </div>
//               </div>
              
//               <h2 className="text-2xl font-bold font-heading mb-4">Technology Stack</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
//                 {Array.from({ length: 8 }, (_, i) => (
//                   <div key={i} className="bg-muted rounded-lg p-4 text-center">
//                     <div className="text-primary font-medium">Technology {i + 1}</div>
//                   </div>
//                 ))}
//               </div>
              
//               <h2 className="text-2xl font-bold font-heading mb-4">The Results</h2>
//               <p className="text-muted-foreground mb-6">
//                 The implementation of our solution led to significant improvements across multiple business metrics and user satisfaction measures.
//               </p>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//                 <div className="bg-primary/10 rounded-lg p-6 text-center">
//                   <div className="text-4xl font-bold text-primary mb-2">45%</div>
//                   <div className="text-sm">Increase in User Engagement</div>
//                 </div>
//                 <div className="bg-accent/10 rounded-lg p-6 text-center">
//                   <div className="text-4xl font-bold text-accent mb-2">60%</div>
//                   <div className="text-sm">Faster Load Times</div>
//                 </div>
//                 <div className="bg-secondary/10 rounded-lg p-6 text-center">
//                   <div className="text-4xl font-bold text-secondary-foreground mb-2">3x</div>
//                   <div className="text-sm">Increase in Conversions</div>
//                 </div>
//                 <div className="bg-muted rounded-lg p-6 text-center">
//                   <div className="text-4xl font-bold mb-2">30%</div>
//                   <div className="text-sm">Reduction in Support Tickets</div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <div className="bg-card border rounded-xl p-6 sticky top-24">
//                 <h3 className="text-xl font-semibold font-heading mb-4">Project Overview</h3>
                
//                 <div className="space-y-4 mb-6">
//                   <div>
//                     <h4 className="text-sm font-medium text-muted-foreground">CLIENT</h4>
//                     <div>Fortune 500 Company</div>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-muted-foreground">INDUSTRY</h4>
//                     <div>{project.category}</div>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-muted-foreground">TIMELINE</h4>
//                     <div>6 months</div>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-muted-foreground">PROJECT TYPE</h4>
//                     <div>Complete redesign and development</div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-semibold font-heading mb-4">Key Achievements</h3>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Exceeded client's KPI targets by 25%</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Delivered on time and within budget</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Implemented innovative features</span>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Won industry recognition award</span>
//                   </li>
//                 </ul>
                
//                 <div className="space-y-3">
//                   <Button className="w-full" asChild>
//                     <a href="#" target="_blank" rel="noopener noreferrer">
//                       Visit Live Project
//                       <ExternalLink className="ml-2 h-4 w-4" />
//                     </a>
//                   </Button>
//                   <Button variant="outline" className="w-full" asChild>
//                     <Link href="/projects">
//                       <ArrowLeft className="mr-2 h-4 w-4" />
//                       Back to Projects
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <CTASection />
//     </>
//   )
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page