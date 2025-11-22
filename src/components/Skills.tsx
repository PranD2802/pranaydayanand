import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Send } from "lucide-react";
import Hanging from "@/assets/Hanging.png"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
      skills: ["Java", "JavaScript", "Python Fundamentals"],
      color: "primary",
      delay: "0ms",
    },

    {
      title: "Automation & Testing Tools",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      skills: [
        "Selenium",
        "Playwright",
        "WebdriverIO",
        "Postman",
        "JMeter",
        "Maven",
      ],
      color: "hero-blue",
      delay: "100ms",
    },

    {
      title: "Frameworks",
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      skills: ["RestAssured", "Cucumber", "Mocha", "TestNG"],
      color: "primary",
      delay: "200ms",
    },

    {
      title: "DevOps & CI/CD",
      icon: (
        <svg
          className="w-11 h-11 text-hero-blue"
          width="50px"
          height="50px"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.288 9.463a4.856 4.856 0 0 0-4.336-2.3 4.586 4.586 0 0 0-3.343 1.767c.071.116.148.226.212.347l.879 1.652.134-.254a2.71 2.71 0 0 1 2.206-1.519 2.845 2.845 0 1 1 0 5.686 2.708 2.708 0 0 1-2.205-1.518L13.131 12l-1.193-2.26a4.709 4.709 0 0 0-3.89-2.581 4.845 4.845 0 1 0 0 9.682 4.586 4.586 0 0 0 3.343-1.767c-.071-.116-.148-.226-.212-.347l-.879-1.656-.134.254a2.71 2.71 0 0 1-2.206 1.519 2.855 2.855 0 0 1-2.559-1.369 2.825 2.825 0 0 1 0-2.946 2.862 2.862 0 0 1 2.442-1.374h.121a2.708 2.708 0 0 1 2.205 1.518l.7 1.327 1.193 2.26a4.709 4.709 0 0 0 3.89 2.581h.209a4.846 4.846 0 0 0 4.127-7.378z" />
        </svg>
      ),
      skills: ["Azure DevOps", "Jenkins", "Git & GitHub"],
      color: "primary",
      delay: "300ms",
    },

    {
      title: "Cloud & Databases",
      icon: (
        <svg
          className="w-11 h-11 text-hero-blue"
          width="800px"
          height="800px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.957 6h.05a2.99 2.99 0 0 1 2.116.879 3.003 3.003 0 0 1 0 4.242 2.99 2.99 0 0 1-2.117.879v-.013L12 12H4.523a3.486 3.486 0 0 1-2.628-1.16 3.502 3.502 0 0 1 1.958-5.78 3.462 3.462 0 0 1 1.468.04 3.486 3.486 0 0 1 3.657-2.06A3.479 3.479 0 0 1 11.957 6zM5 11h7.01a1.994 1.994 0 0 0 1.992-2 2.002 2.002 0 0 0-1.996-2h-.914l-.123-.857a2.49 2.49 0 0 0-2.126-2.122A2.478 2.478 0 0 0 6.231 5.5l-.333.762-.809-.189A2.49 2.49 0 0 0 4.523 6c-.662 0-1.297.263-1.764.732A2.503 2.503 0 0 0 4.523 11H5z"
          />
        </svg>
      ),
      skills: ["Microsoft Azure", "MySQL", "MS SQL Server fundamentals"],
      color: "primary",
      delay: "400ms",
    },
    {
      title: "Natural Languages",
      icon: (
        <svg
          className="-left-15% w-12 h-12 flex items-center justify-center text-primary"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Clean centered speech bubble */}
          <path d="M16 14h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8l-6 5v-5h-2a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z" />
        </svg>
      ),
      skills: ["English", "Kannada", "Hindi", "Tamil", "Tulu"],
      color: "primary",
      delay: "500ms",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-background"
    >
      {/* ===== BACKGROUND DESIGN ===== */}
      <Send className="absolute top-[20%] right-[25%] w-12 h-12 text-primary/20 rotate-60 animate-float" />
      <Send className="absolute top-[62%] right-[60%] w-12 h-12 text-primary/20 rotate-50 animate-float" />
      <Send className="absolute bottom-32 left-16 w-12 h-12 text-primary/20 rotate-45 animate-float" />
      <img
          src={Hanging}
          alt="Minion"
          className="
    absolute
    top-14 right-8
    w-[130px]   /* ≈6cm */
    h-auto
    object-contain
    pointer-events-none
    select-none
    md:w-[110px]
    sm:w-[60px]
    xs:w-[30px]
  "
          style={{
            transform: "translate(-10px, 10px)",
          }}
        />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Blob */}
        <div className="absolute left-[-5%] top-[15%] w-[420px] h-[420px] bg-primary/10 rounded-full "></div>

        {/* Right Blob */}
        <div className="absolute right-[1%] bottom-[1%] w-[300px] h-[300px] bg-primary/10 rounded-full"></div>

        {/* Right Rings */}
        <svg
          className="absolute right-[-1%] bottom-[-3%] w-[500px] h-[500px] opacity-[0.4]"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle
            cx="150"
            cy="150"
            r="120"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
          <circle
            cx="150"
            cy="150"
            r="80"
            stroke="hsl(var(--hero-blue))"
            strokeWidth="2"
          />
          <circle
            cx="150"
            cy="150"
            r="40"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* ===== HEADER ===== */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <span className="text-primary font-medium text-lg">What I Know</span>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
          A comprehensive toolkit for quality assurance and software testing
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 border-2 border-border bg-card rounded-3xl
              hover:border-primary transition-all duration-500 hover:scale-[1.04]
              hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Dynamic Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5">
                {category.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </Badge>
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
