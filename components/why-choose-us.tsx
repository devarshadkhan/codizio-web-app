'use client';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Award,
    BookOpen,
    CheckCircle,
    Clock, Globe, Laptop, Smartphone,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: "Years of Experience", value: "5+", icon: Clock },
  { label: "Happy Clients", value: "10+", icon: Users },
  { label: "Projects Completed", value: "20+", icon: CheckCircle },
  { label: "Team Members", value: "20+", icon: Award },
];

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Working with clients across 20+ countries around the world."
  },
  {
    icon: Laptop,
    title: "Web Expertise",
    description: "Specializing in responsive, high-performance web applications."
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Creating intuitive, feature-rich mobile experiences."
  },
  {
    icon: TrendingUp,
    title: "Growth Focus",
    description: "Designing solutions that scale with your business needs."
  },
  {
    icon: BookOpen,
    title: "Industry Knowledge",
    description: "Expertise across finance, healthcare, retail, and more."
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Efficient processes that bring your products to market faster."
  }
];

const WhyChooseUS = () => {
  // const statsRef = useRef<HTMLDivElement>(null);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!statsRef.current) return;
      
  //     const statsRect = statsRef.current.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;
      
  //     if (statsRect.top < windowHeight * 0.75) {
  //       statsRef.current.querySelectorAll('.counter-value').forEach((counter, index) => {
  //         const counterElement = counter as HTMLElement;
  //         if (counterElement.dataset.counted === 'true') return;
          
  //         const targetValue = counterElement.innerText;
  //         const duration = 2000; // 2 seconds
  //         const startTime = Date.now();
          
  //         const updateCounter = () => {
  //           const currentTime = Date.now();
  //           const elapsedTime = currentTime - startTime;
  //           const progress = Math.min(elapsedTime / duration, 1);
            
  //           // Extract the numeric part
  //           const numericPart = targetValue.replace(/\D/g, '');
  //           const targetNumber = parseInt(numericPart, 10);
            
  //           // Extract the suffix
  //           const suffix = targetValue.replace(/[0-9]/g, '');
            
  //           // Calculate current value
  //           const currentValue = Math.floor(targetNumber * progress);
            
  //           // Update the counter text
  //           counterElement.innerText = `${currentValue}${suffix}`;
            
  //           if (progress < 1) {
  //             requestAnimationFrame(updateCounter);
  //           } else {
  //             counterElement.dataset.counted = 'true';
  //             counterElement.innerText = targetValue;
  //           }
  //         };
          
  //         requestAnimationFrame(updateCounter);
  //       });
  //     }
  //   };
    
  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Run once on mount
    
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  
  return (
    <section  className="py-20 px-20  bg-[#0f0715]">
      <div className="container  mx-auto">
       
        
       {false &&  <div  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-20">
        {/* <div ref={statsRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-20"> */}
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="overflow-hidden border-white"  style={{
                background: "linear-gradient(260deg, #2a1454 0%, #8750f7 100%)",
              }}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 counter-value">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>}
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We combine technical expertise with business insight to deliver solutions
              that drive real results for our clients.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-purple-900/30 border-none"  style={{
                // background: "linear-gradient(360deg, #2a1454 0%, #8750f7 100%)",
              }}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 " />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;