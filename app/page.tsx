import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import ProjectsSection from '@/components/projects-section'
import TestimonialsSection from '@/components/testimonials-section'
import CTASection from '@/components/cta-section'
import { SparklesCore } from '@/components/sparkles'
import Navbar from '@/components/header'
import FAQSection from '@/components/faq-section'
import FeaturesShowcase from '@/components/features-showcase'
import WhyChooseUS from '@/components/why-choose-us'
import ReactMarquee from '@/components/react-marquee'

export default function HomePage() {
  return (
    <>
      {/* <HeroSection /> */}
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        {/* <Navbar /> */}
        <Navbar/>
        <HeroSection />
      </div>
    </main>
      <ServicesSection />
    <ReactMarquee/>
      {/* <ProjectsSection /> */}
      <FeaturesShowcase/>
      <WhyChooseUS/>
      <TestimonialsSection />
      <FAQSection/>
      <CTASection />
    </>
  )
}