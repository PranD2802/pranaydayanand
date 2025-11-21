import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Send } from "lucide-react";
import FullStackAutomation from "@/assets/Full Stack Automation.png";
import MusicRecommendation from "@/assets/Music Recommendation.jpg";
import JasperArt from "@/assets/Jasper Art.png";
import GlowControl from "@/assets/glow control.png";
import TicTacToe from "@/assets/tic tac toe.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Application Delivery Automation",
      description:
        "Comprehensive automation solution for streamlining application delivery pipelines with CI/CD integration and automated testing frameworks.",
      image: FullStackAutomation,
      link: "https://github.com/PranD2802",
    },
    {
      title: "Euphoria-FM | Mood-Based Music Recommendation",
      description:
        "Intelligent music recommendation system that analyzes user mood and preferences to deliver personalized playlists and discover new tracks.",
      image: MusicRecommendation,
      link: "https://github.com/PranD2802/EUPHORIA-FM",
    },
    {
      title: "Jasper-Art",
      description:
        "Creative digital art platform leveraging modern web technologies to provide intuitive tools for artistic expression and design.",
      image: JasperArt,
      link: "https://github.com/PranD2802/JasperArt",
    },
    {
      title: "Glow-Control",
      description:
        "Smart control system with responsive interface for managing and monitoring various parameters with real-time data visualization.",
      image: GlowControl,
      link: "https://github.com/PranD2802/Glow-Control",
    },
    {
      title: "Tic-Tac-Toe Interactive Web Game",
      description:
        "Classic game reimagined with modern web technologies, featuring smooth animations, AI opponent, and multiplayer capabilities.",
      image: TicTacToe,
      link: "https://github.com/PranD2802/TIC-TAK-TOE",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
    <Send className="absolute top-[10%] right-[20%] w-12 h-12 text-primary/20 rotate-50 animate-pulse" />

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <svg
            key={i}
            className="absolute w-full"
            style={{ top: `${i * 7}%` }}
            height="100"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 50 Q 125 20, 250 50 T 500 50 T 750 50 T 1000 50"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        ))}
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <span className="text-primary font-medium text-lg">
              What I have done
            </span>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in software
            development, testing, and automation
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-primary z-10"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-primary z-10"></div>

                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:border-primary transition-all duration-500 hover:scale-[1.04]
              hover:shadow-2xl animate-fade-in"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <Card className="p-8 border-2 border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full group/btn border-2"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
