import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Send } from "lucide-react";
import Selfie from "@/assets/Selfie.png";

const Experience = () => {
  return (
    <section id="experience" className="-z-0 py-20 px-4 sm:px-6 lg:px-8 bg-section-bg/60 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <svg key={i} className="absolute w-full" style={{ top: `${i * 7}%` }} height="100" viewBox="0 0 2000 100" fill="none">
            <path d="M0 50 Q 250 20, 500 50 T 1000 50 T 1500 50 T 2000 50" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        ))}
      </div>

      <Send className="absolute top-12 right-8 w-10 h-10 text-primary/20 animate-float rotate-90" />
      <Send className="absolute top-28 right-1/4 w-10 h-10 text-primary/20 animate-float rotate-60" />
      <Send className="absolute bottom-[32%] left-4 w-8 h-8 text-primary/20 animate-float -rotate-12" />

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <span className="text-primary font-medium text-lg">What do I do</span>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">A small brief of my professional journey and work experience.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="p-6 md:p-8 border-2 border-border bg-card rounded-3xl hover:border-primary transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">SDET</h3>
                    <p className="text-xl text-foreground/80">Cognizant Technology Solutions, Bengaluru.</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                    <Calendar className="w-5 h-5" />
                    <span>Oct 2024 – Present</span>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Created and executed scalable UI and API automation frameworks, implementing data-driven, behavioral-driven and page object models to validate complex workflows. My responsibilities included continuous regression testing, integrating suites into CI/CD pipelines, and conducting performance and load testing. I also leveraged GenAI tools like <b>Github Copilot</b> to accelerate development and debugging. Key technologies: <b>Java, JavaScript, Selenium, Playwright, Cucumber, REST Assured, Postman, JMeter, Jenkins, Azure DevOps, Git/GitHub</b>
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* floating minion bottom-right (responsive) */}
        <img
          src={Selfie}
          alt="Minion"
          className="
            absolute
            bottom-4 right-4
            w-36 sm:w-44 md:w-56
            h-auto object-contain pointer-events-none select-none
          "
          style={{ transform: "translate(0px, 6px)" }}
        />
      </div>
    </section>
  );
};

export default Experience;
