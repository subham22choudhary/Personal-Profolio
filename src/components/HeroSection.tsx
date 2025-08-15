import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Subham Choudhary
          </h1>
          
          <div className="animate-fade-in-delay-1">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4">
              Full-Stack Developer | WordPress, Shopify & HubSpot Specialist
            </h2>
            
            <p className="font-heading text-lg md:text-xl font-medium text-foreground mb-8">
              Custom Website Development
            </p>
          </div>
          
          <div className="animate-fade-in-delay-2">
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              "Building fast, clean web experiences—front to back."
            </p>
          </div>
          
          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open('mailto:subham.choudhary.fullstack@gmail.com', '_blank', 'noopener,noreferrer')}
              className="animate-glow"
            >
              Get in Touch
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="social" 
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/subhamchoudhary', '_blank', 'noopener,noreferrer')}
              >
                LinkedIn
              </Button>
              
              <Button 
                variant="social" 
                size="lg"
                onClick={() => window.open('https://github.com/subham22choudhary', '_blank', 'noopener,noreferrer')}
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};