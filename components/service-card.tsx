// // "use client"

// // import { useState } from 'react'
// // import Link from 'next/link'
// // import { motion } from 'framer-motion'
// // import { ArrowRight } from 'lucide-react'
// // import { Button } from '@/components/ui/button'
// // import { Service } from '@/types'
// // import { cn } from '@/lib/utils'
// // import * as Icons from 'lucide-react'

// // // Dynamic icon component
// // const DynamicIcon = ({ name }: { name: string }) => {
// //   const LucideIcon = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1)] || Icons.CircleDashed
// //   return <LucideIcon className="h-10 w-10" />
// // }

// // interface ServiceCardProps {
// //   service: Service
// //   index: number
// // }

// // export default function ServiceCard({ service, index }: ServiceCardProps) {
// //   const [isHovered, setIsHovered] = useState(false)

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5, delay: index * 0.1 }}
// //       className={cn(
// //         "service-card relative rounded-lg p-6 border bg-card",
// //         isHovered ? "shadow-lg" : "shadow-md"
// //       )}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       <div className={cn(
// //         "absolute top-0 left-0 w-full h-1 bg-primary/50 rounded-t-lg transition-all duration-300",
// //         isHovered ? "h-2" : "h-1"
// //       )} />

// //       <div className="flex flex-col h-full">
// //         <div className={cn(
// //           "w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-all duration-300",
// //           isHovered ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
// //         )}>
// //           <DynamicIcon name={service.icon} />
// //         </div>

// //         <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
// //         <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>

// //         <Button
// //           variant="ghost"
// //           className="group justify-start p-0 hover:bg-transparent"
// //           asChild
// //         >
// //           <Link href={`/services/${service.slug}`}>
// //             Learn More
// //             <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //           </Link>
// //         </Button>
// //       </div>
// //     </motion.div>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import type { LucideIcon } from "lucide-react"

// interface ServiceCardProps {
//   title: string
//   description: string
//   icon: LucideIcon
//   badgeText?: string
//   index: number
// }

// export default function ServiceCard({ title, description, icon: Icon, index,  badgeText = "Service" }: ServiceCardProps) {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <Card
//       className={`relative w-full overflow-hidden transition-all duration-500 ease-out
//         bg-gradient-to-br from-gray-900 to-gray-950 border-purple-900/50 h-full
//         ${isHovered ? "transform scale-105 shadow-[0_0_30px_rgba(147,51,234,0.3)]" : "shadow-xl"}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Animated background elements */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-purple-600/20 opacity-50 transition-opacity duration-700 ${isHovered ? "opacity-80" : ""}`}
//       />
//       <div
//         className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 blur-xl opacity-0 transition-opacity duration-700 ${isHovered ? "opacity-20" : ""}`}
//       />

//       {/* Card border animation */}
//       <div
//         className={`absolute inset-0 border border-purple-500/30 rounded-lg transition-all duration-700 ${isHovered ? "border-purple-400/60 scale-[0.98] rounded-xl" : ""}`}
//       />

//       <CardHeader className="relative z-10 transition-transform duration-500 ease-out">
//         <div className="flex justify-between items-center">
//           <Badge className="bg-purple-700 hover:bg-purple-600 transition-colors">{badgeText}</Badge>
//           <Icon
//             className={`h-5 w-5 text-purple-400 transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : ""}`}
//           />
//         </div>
//         <h2
//           className={`text-2xl font-bold mt-4 text-white transition-all duration-500 ${isHovered ? "text-purple-200 translate-y-[-2px]" : ""}`}
//         >
//           {title}
//         </h2>
//       </CardHeader>

//       <CardContent className="relative z-10 pb-2">
//         <div
//           className={`h-32 rounded-lg bg-gradient-to-br from-purple-900/40 to-gray-900 mb-4 overflow-hidden transition-all duration-500 ${isHovered ? "from-purple-800/40 shadow-inner" : ""}`}
//         >
//           <div
//             className={`w-full h-full flex items-center justify-center transition-transform duration-700 ${isHovered ? "scale-105" : ""}`}
//           >
//             <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
//               <Icon className={`text-white h-8 w-8 transition-all duration-500 ${isHovered ? "scale-110" : ""}`} />
//             </div>
//           </div>
//         </div>

//         <p className="text-gray-300 transition-all duration-500 ease-out text-sm">{description}</p>
//       </CardContent>

//       <CardFooter className="relative z-10 flex justify-between pt-2">
//         <div
//           className={`text-sm text-gray-400 transition-all duration-500 ${isHovered ? "text-purple-300 translate-x-1" : ""}`}
//         >
//           Learn more
//         </div>
//         <div
//           className={`h-1 w-16 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full transition-all duration-700 ${isHovered ? "w-24 from-purple-500 to-purple-700" : ""}`}
//         />
//       </CardFooter>
//     </Card>
//   )
// }

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CircleCheck, type LucideIcon } from "lucide-react";
import Link from "next/link";
import * as Icons from 'lucide-react'
import { DynamicIcon } from "./DynamicIcon";
interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badgeText?: string;
  index: number;
  Features: Array<string>;
}

// const DynamicIcon = ({ name }: { name: string }) => {
//   const LucideIcon = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1)] || Icons.CircleDashed
//   return <LucideIcon className="h-12 w-12  " />
// }

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
  Features,
  badgeText = "Service",
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`relative w-full overflow-hidden transition-all duration-500 ease-out z-[1]
        bg-gradient-to-br from-gray-900 to-gray-950 border-purple-900/50 h-full
        ${
          isHovered
            ? "transform scale-105 shadow-[0_0_30px_rgba(147,51,234,0.3)]"
            : "shadow-xl"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-purple-600/20 opacity-50 transition-opacity duration-700 ${
          isHovered ? "opacity-80" : ""
        }`}
      />
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-900 blur-xl opacity-0 transition-opacity duration-700 ${
          isHovered ? "opacity-20" : ""
        }`}
      />

      {/* Card border animation */}
      <div
        className={`absolute inset-0 border border-purple-500/30 rounded-lg transition-all duration-700 ${
          isHovered ? "border-purple-400/60 scale-[0.98] rounded-xl" : ""
        }`}
      />

      <CardHeader className="relative z-10 transition-transform duration-500 ease-out">
        <div className="flex justify-between items-center">
       <div>
       <Badge className="bg-purple-700 hover:bg-purple-600 transition-colors">
            {badgeText}
          </Badge>
          <h2
          className={`text-2xl font-bold mt-4 text-white transition-all duration-500 ${
            isHovered ? "text-purple-200 translate-y-[-2px]" : ""
          }`}
        >
          {title}
        </h2>
       </div>
          <div className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
            <DynamicIcon name={Icon.name} />
              {/* className={`text-white h-8 w-8 transition-all duration-500 ${
                isHovered ? "scale-110" : ""
              }`}
            /> */}
          </div>
        </div>
      
      </CardHeader>

      <CardContent className="relative z-10 pb-2">
        <div
          className={`h-[300px] max-h-full p-3 rounded-lg bg-gradient-to-br from-purple-900/40 to-gray-900 mb-4 overflow-hidden transition-all duration-500 ${
            isHovered ? "from-purple-800/40 shadow-inner" : ""
          }`}
        >
          <ul>
            {Features.map((e,id) => {
              return (
                <div key={id}>
                  <li className="text-sm font-semibold my-2 flex gap-3"><CircleCheck className="h-4 w-4" />{e}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="relative z-10 flex justify-between pt-2">
        <div
          className={`text-sm text-gray-400 transition-all duration-500 ${
            isHovered ? "text-purple-300 translate-x-1" : ""
          }`}
        >
          <Link href={""} className="flex gap-2"> Learn more <ArrowRight/></Link>
        </div>
        <div
          className={`h-1 w-16 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full transition-all duration-700 ${
            isHovered ? "w-24 from-purple-500 to-purple-700" : ""
          }`}
        />
      </CardFooter>
    </Card>
  );
}
