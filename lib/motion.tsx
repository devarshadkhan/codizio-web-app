'use client';

import React, { useEffect, useState } from 'react';

// Simple animation components for the project
// This is a lightweight alternative to framer-motion
// with just the functionality we need

interface MotionProps {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
  whileInView?: Record<string, any>;
  viewport?: {
    once?: boolean;
    margin?: string;
  }
}

export const motion = {
  div: ({ 
    children, 
    initial = {}, 
    animate = {}, 
    transition = {},
    whileInView,
    viewport
  }: MotionProps) => {
    const [style, setStyle] = useState(initial);
    const [isInView, setIsInView] = useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!whileInView) {
        const timer = setTimeout(() => {
          setStyle(animate);
        }, (transition.delay || 0) * 1000);
        
        return () => clearTimeout(timer);
      }
    }, [animate, transition.delay, whileInView]);
    
    useEffect(() => {
      if (!whileInView || !ref.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (viewport?.once) {
              observer.disconnect();
            }
          } else if (!viewport?.once) {
            setIsInView(false);
          }
        },
        {
          rootMargin: viewport?.margin || '0px',
          threshold: 0.1,
        }
      );
      
      observer.observe(ref.current);
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, whileInView, viewport]);
    
    useEffect(() => {
      if (whileInView && isInView) {
        setStyle(whileInView);
      } else if (whileInView && !isInView) {
        setStyle(initial);
      }
    }, [isInView, initial, whileInView]);

    const transitionStyle = {
      transition: `all ${transition.duration || 0.3}s ${transition.ease || 'ease-out'}`,
    };

    return (
      <div ref={ref} style={{ ...style, ...transitionStyle }}>
        {children}
      </div>
    );
  }
};