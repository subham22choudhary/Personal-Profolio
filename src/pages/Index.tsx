import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { DetailsSection } from '@/components/DetailsSection';
import { CareerSection } from '@/components/CareerSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main>
        <HeroSection />
        <DetailsSection />
        <CareerSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
