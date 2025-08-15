import { useState, useEffect } from 'react';

export const SkillsSection = () => {
  const [visibleChips, setVisibleChips] = useState<number>(0);

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "SCSS", "Webpack"]
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Express"]
    },
    {
      category: "State Management",
      skills: ["Redux"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "APIs",
      skills: ["RESTful APIs"]
    },
    {
      category: "Cloud",
      skills: ["AWS (S3, EC2)"]
    },
    {
      category: "Version Control",
      skills: ["Git"]
    },
    {
      category: "Design Tools",
      skills: ["Figma", "Webflow"]
    },
    {
      category: "CMS & Automation",
      skills: ["WordPress", "Shopify", "HubSpot", "Salesforce (Pardot Lightning)"]
    },
    {
      category: "Testing",
      skills: ["Jest", "Enzyme"]
    },
    {
      category: "Security",
      skills: ["JWT", "Cookies", "CORS", "XSS & CSRF Protection"]
    },
    {
      category: "SEO & Accessibility",
      skills: ["Semantic HTML", "WCAG Compliance"]
    }
  ];

  // Flatten all skills for the animated display
  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({ skill, category: category.category }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skills chips with staggered delays
            allSkills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleChips(prev => Math.max(prev, index + 1));
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [allSkills.length]);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        {/* Animated Skills Cloud */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-primary mb-8 text-center">
            Technical Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skillObj, index) => (
              <div
                key={`${skillObj.category}-${skillObj.skill}`}
                className={`skill-chip transition-all duration-500 transform ${
                  index < visibleChips 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span className="inline-block bg-gradient-card hover:bg-gradient-accent hover:text-primary-foreground px-4 py-2 rounded-full font-body text-sm font-medium text-foreground border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-accent cursor-default">
                  {skillObj.skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className={`bg-gradient-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in-delay-${index % 4 + 1}`}
            >
              <h4 className="font-heading text-lg font-semibold text-primary mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {category.category}
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-block bg-secondary hover:bg-primary hover:text-primary-foreground px-3 py-1 rounded-full font-body text-xs font-medium text-secondary-foreground transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};