// import { services } from '@/lib/data'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { ArrowLeft, Check, ChevronRight } from 'lucide-react'
// import * as Icons from 'lucide-react'
// import CTASection from '@/components/cta-section'

// // Add generateStaticParams function to generate static routes
// export async function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }))
// }

// // Dynamic icon component
// const DynamicIcon = ({ name }: { name: string }) => {
//   const LucideIcon = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1)] || Icons.CircleDashed
//   return <LucideIcon className="h-12 w-12" />
// }

// export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
//   const service = services.find(s => s.slug === params.slug)
  
//   if (!service) return null
  
//   return (
//     <>
//       <section className="pt-32 pb-20 md:pt-40 md:pb-28">
//         <div className="container mx-auto px-4">
//           <div className="mb-6">
//             <div className="flex items-center text-sm text-muted-foreground mb-8">
//               <Link href="/" className="hover:text-primary">Home</Link>
//               <ChevronRight className="h-4 w-4 mx-2" />
//               <Link href="/services" className="hover:text-primary">Services</Link>
//               <ChevronRight className="h-4 w-4 mx-2" />
//               <span className="text-foreground">{service.title}</span>
//             </div>
            
//             <div className="flex flex-col lg:flex-row lg:items-center gap-6">
//               <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
//                 <DynamicIcon name={service.icon} />
//               </div>
//               <div>
//                 <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
//                   {service.title}
//                 </h1>
//                 <p className="text-xl text-muted-foreground max-w-3xl">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 mb-16">
//             <div className="lg:col-span-2">
//               <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
//                 <Image
//                   src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
//                   alt={service.title}
//                   className="object-cover"
//                   fill
//                 />
//               </div>
              
//               <h2 className="text-2xl font-bold font-heading mb-4">Overview</h2>
//               <p className="text-muted-foreground mb-6">
//                 Our {service.title} services are designed to provide comprehensive solutions that address the unique challenges faced by businesses in today's digital landscape. We combine technical expertise, creative thinking, and industry best practices to deliver exceptional results.
//               </p>
              
//               <h2 className="text-2xl font-bold font-heading mb-4">Our Approach</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 <div className="bg-card border rounded-lg p-6">
//                   <h3 className="text-xl font-semibold font-heading mb-3">Discovery & Planning</h3>
//                   <p className="text-muted-foreground">
//                     We begin by thoroughly understanding your business goals, target audience, and specific requirements through collaborative discussions and research.
//                   </p>
//                 </div>
//                 <div className="bg-card border rounded-lg p-6">
//                   <h3 className="text-xl font-semibold font-heading mb-3">Design & Strategy</h3>
//                   <p className="text-muted-foreground">
//                     Our experts develop a comprehensive strategy and design framework that aligns with your brand identity and user experience goals.
//                   </p>
//                 </div>
//                 <div className="bg-card border rounded-lg p-6">
//                   <h3 className="text-xl font-semibold font-heading mb-3">Development & Implementation</h3>
//                   <p className="text-muted-foreground">
//                     We leverage cutting-edge technologies and best practices to build robust, scalable, and high-performance solutions.
//                   </p>
//                 </div>
//                 <div className="bg-card border rounded-lg p-6">
//                   <h3 className="text-xl font-semibold font-heading mb-3">Testing & Deployment</h3>
//                   <p className="text-muted-foreground">
//                     Rigorous testing ensures your solution meets the highest standards of quality, security, and performance before deployment.
//                   </p>
//                 </div>
//               </div>
              
//               <h2 className="text-2xl font-bold font-heading mb-4">Technologies We Use</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
//                 {Array.from({ length: 8 }, (_, i) => (
//                   <div key={i} className="bg-muted rounded-lg p-4 text-center">
//                     <div className="text-primary font-medium">Technology {i + 1}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div>
//               <div className="bg-card border rounded-xl p-6 sticky top-24">
//                 <h3 className="text-xl font-semibold font-heading mb-4">Key Benefits</h3>
//                 <ul className="space-y-4 mb-6">
//                   <li className="flex items-start">
//                     <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Customized solutions tailored to your specific needs</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Cutting-edge technology to ensure optimal performance</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Scalable design that grows with your business</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Expert team with domain-specific knowledge</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
//                     <span>Comprehensive support and maintenance</span>
//                   </li>
//                 </ul>
                
//                 <h3 className="text-xl font-semibold font-heading mb-4">Ready to get started?</h3>
//                 <p className="text-muted-foreground mb-6">
//                   Contact us today to discuss how our {service.title} can help your business grow.
//                 </p>
                
//                 <div className="space-y-3">
//                   <Button className="w-full" asChild>
//                     <Link href="/contact">Get in Touch</Link>
//                   </Button>
//                   <Button variant="outline" className="w-full" asChild>
//                     <Link href="/services">
//                       <ArrowLeft className="mr-2 h-4 w-4" />
//                       Back to Services
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