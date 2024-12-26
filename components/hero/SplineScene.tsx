"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadSpline = async () => {
      try {
        // Create viewer with optimized settings
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', 'https://prod.spline.design/8Of0NpUSvZ50zBiI/scene.splinecode');
        viewer.setAttribute('loading-anim', 'false');
        viewer.setAttribute('pixel-ratio', '1'); // Optimize rendering resolution
        viewer.setAttribute('background-color', '0 0 0 0'); // Transparent background
        viewer.setAttribute('auto-rotate', 'false'); // Disable auto-rotation
        viewer.setAttribute('auto-play', 'true'); // Enable auto-play for smoother loading
        
        // Apply performance optimizations
        viewer.style.cssText = `
          width: 100%;
          height: 100%;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        `;

        // Load script only if needed
        if (!customElements.get('spline-viewer')) {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
          
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        await customElements.whenDefined('spline-viewer');
        
        // Clean up existing viewer
        while (containerRef.current.firstChild) {
          containerRef.current.firstChild.remove();
        }
        
        containerRef.current.appendChild(viewer);
        setIsLoaded(true);

        // Add intersection observer for performance
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.target === viewer) {
                if (!entry.isIntersecting) {
                  viewer.setAttribute('auto-play', 'false');
                } else {
                  viewer.setAttribute('auto-play', 'true');
                }
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(viewer);

        return () => observer.disconnect();
      } catch (err) {
        console.error('Error loading Spline scene:', err);
        setIsLoaded(false);
      }
    };

    loadSpline();

    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.firstChild.remove();
        }
      }
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      />
      
      {/* Optimized gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background/90 pointer-events-none"
        style={{ willChange: 'opacity' }}
      />
      
      {/* Fallback background */}
      {!isLoaded && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-background" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>
      )}
    </div>
  );
}