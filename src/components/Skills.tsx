import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";
import Hanging from "@/assets/Hanging.png";

const Skills = () => {
  const skillCategories = [
    { title: "Programming Languages", icon: (<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></svg>), skills: ["Java", "JavaScript", "Python Fundamentals"] },
    { title: "Automation & Testing Tools", icon: (<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>), skills: ["Selenium", "Playwright", "WebdriverIO", "Postman", "JMeter", "Maven"] },
    { title: "Frameworks", icon: (<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>), skills: ["RestAssured", "Cucumber", "Mocha", "TestNG"] },
    { title: "DevOps & CI/CD", icon: (<svg className="w-11 h-11 text-hero-blue" width="50px" height="50px" fill="currentColor" viewBox="0 0 24 24"><path d="M20.288 9.463a4.856 4.856 0 0 0-4.336-2.3 ..." /></svg>), skills: ["Azure DevOps", "Jenkins", "Git & GitHub"] },
    { title: "Cloud & Databases", icon: (<svg className="w-11 h-11 text-hero-blue" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M11.957 6h.05a2.99 2.99 0 ..." /></svg>), skills: ["Microsoft Azure", "MySQL", "MS SQL Server fundamentals"] },
    { title: "Natural Languages", icon: (<svg className="w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 14h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8l-6 5v-5h-2a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z" /></svg>), skills: ["English", "Kannada", "Hindi", "Tamil", "Tulu"] },
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-background">
      <Send className="absolute top-12 md:top-20 right-12 md:right-32 w-10 h-10 text-primary/20 rotate-60 animate-float" />
      <Send className="absolute top-[62%] right-1/4 w-10 h-10 text-primary/20 rotate-50 animate-float" />
      <Send className="absolute bottom-24 left-16 w-10 h-10 text-primary/20 rotate-45 animate-float" />

      <img src={Hanging} alt="Minion" className="absolute top-14 right-4 md:right-8 w-16 sm:w-24 md:w-32 object-contain pointer-events-none select-none" style={{ transform: "translate(-6px, 6px)" }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-5%] top-[15%] w-[420px] h-[420px] bg-primary/10 rounded-full " />
        <div className="absolute right-[1%] bottom-[1%] w-[300px] h-[300px] bg-primary/10 rounded-full" />
        <svg className="absolute right-[-1%] bottom-[-3%] w-[500px] h-[500px] opacity-[0.4]" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="120" stroke="hsl(var(--primary))" strokeWidth="2" />
          <circle cx="150" cy="150" r="80" stroke="hsl(var(--hero-blue))" strokeWidth="2" />
          <circle cx="150" cy="150" r="40" stroke="hsl(var(--primary))" strokeWidth="2" />
        </svg>
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <span className="text-primary font-medium text-lg">What I Know</span>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Skills & Expertise</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">A comprehensive toolkit for quality assurance and software testing</p>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 md:p-8 border-2 border-border bg-card rounded-3xl hover:border-primary transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl animate-fade-in" style={{ animationDelay: `${index * 0.12}s` }}>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
