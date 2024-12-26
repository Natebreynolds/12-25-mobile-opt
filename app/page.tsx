import dynamic from 'next/dynamic';
import HeroSection from "@/components/hero/HeroSection";

// Dynamically import sections that are below the fold
const ServicesIntro = dynamic(() => import("@/components/sections/ServicesIntro"), {
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

const SolutionsSection = dynamic(() => import("@/components/sections/SolutionsSection"), {
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

const FrameworksSection = dynamic(() => import("@/components/sections/FrameworksSection"), {
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), {
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

const BlogSection = dynamic(() => import("@/components/sections/BlogSection"), {
  ssr: true,
  loading: () => <div className="min-h-screen" />
});

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ServicesIntro />
      <SolutionsSection />
      <FrameworksSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}