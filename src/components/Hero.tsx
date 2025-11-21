import { Button } from "@/components/ui/button";
import HeroBlob from "@/assets/HeroBlob.png";
import { Send } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-20 px-4 sm:px-6 lg:px-8 relative overflow-visible">
      <Send className="absolute top-[62%] right-[50%] w-12 h-12 text-primary/20 rotate-50 animate-pulse" />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left content: reduce max width so buttons won't fall too low on medium screens */}
          <div className="space-y-5 animate-slide-in max-w-xl lg:max-w-2xl">
            <div className="relative inline-block mb-2">
              <svg className="absolute -top-2 -left-2 w-4 h-4" viewBox="0 0 20 20" fill="hsl(var(--primary))">
                <rect width="20" height="4" />
                <rect width="4" height="20" />
              </svg>
              <svg className="absolute -bottom-2 -right-2 w-4 h-4" viewBox="0 0 20 20" fill="hsl(var(--primary))">
                <rect y="16" width="20" height="4" />
                <rect x="16" width="4" height="20" />
              </svg>
              <div className="px-5 py-2 border-2 border-foreground bg-background inline-block">
                <span className="text-foreground text-sm font-medium">Hello !</span>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="relative inline-block"><span className="relative z-10 square-peg-regular">Pranay Dayanand,</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-0"></span>
                </span>
              </h1>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Software Development Engineer in Test</h2>
            </div>

            <p className="text-text-muted text-lg max-w-xl">A fun-loving, curious, and motivated tester who enjoys breaking things, fixing them, and building something better every time.</p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="rounded-full px-6 py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                Hire Me
              </Button>

              <a href="/assets/Pranay_Dayanand_Resume.pdf" download="Pranay_Dayanand_Resume.pdf">
                <Button size="lg" variant="outline" className="rounded-full px-6 py-3 text-lg border-2 border-foreground hover:bg-foreground hover:text-background">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right: keep big visual image but make it responsive */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              <img src={HeroBlob} alt="Profile" className="relative z-10 w-full h-auto object-contain md:w-96 lg:w-full" />

              <div className="absolute top-[45%] left-[-12%] lg:left-[-8%] z-20 hidden md:block">
                <div className="relative rotate-[-10deg]">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium whitespace-nowrap animate-float">Quality Assurance</div>
                </div>
              </div>

              <div className="absolute bottom-[18%] right-[-5%] lg:right-[-10%] z-20 hidden md:block">
                <div className="relative rotate-[-20deg]">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium whitespace-nowrap animate-float">Software Testing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
