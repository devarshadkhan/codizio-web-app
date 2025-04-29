"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ZapIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/1 backdrop-blur-md border-b py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 bg-purple-600 hover:bg-purple-700 rounded-md flex items-center justify-center">
            <ZapIcon className="h-5 w-5 text-white" />
            <div className="absolute inset-0 rounded-md bg-purple-600 hover:bg-purple-700blur-sm -z-10"></div>
          </div>
          <span className="font-heading font-bold text-2xl">zappinZY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
                      
            <NavLink  key={link.path} 
              href={link.path}>  {link.name}</NavLink>
            
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* <ThemeToggle /> */}
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen 
            ? "translate-x-0 bg-background/90 backdrop-blur-lg" 
            : "translate-x-full"
        )}
        style={{ top: '4rem' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 pt-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'text-2xl font-medium transition-colors hover:text-primary',
                pathname === link.path ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header


// "use client"

// import { Button } from "@/components/ui/button"
// import { Bot, Menu } from "lucide-react"
// import { motion } from "framer-motion"
// import Link from "next/link"
// import type React from "react" // Added import for React

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
//     >
//       <Link href="/" className="flex items-center space-x-2">
//         <Bot className="w-8 h-8 text-purple-500" />
//         <span className="text-white font-medium text-xl">ResearchAI</span>
//       </Link>

//       <div className="hidden md:flex items-center space-x-8">
//         <NavLink href="/features">Features</NavLink>
//         <NavLink href="/how-it-works">How it Works</NavLink>
//         <NavLink href="/examples">Examples</NavLink>
//         <NavLink href="/pricing">Pricing</NavLink>
//       </div>

//       <div className="hidden md:flex items-center space-x-4">
//         <Button variant="ghost" className="text-white hover:text-purple-400">
//           Sign In
//         </Button>
//         <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
//       </div>

//       <Button variant="ghost" size="icon" className="md:hidden text-white">
//         <Menu className="w-6 h-6" />
//       </Button>
//     </motion.nav>
//   )
// }

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  )
}
