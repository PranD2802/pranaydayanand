import { Button } from "@/components/ui/button";
import HeroBlob from "@/assets/HeroBlob.png";
import { GraduationCap, Send } from "lucide-react";

import BackgroundBlob from "./BackgroundBlob";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center bg-background pt-28 px-4 sm:px-6 lg:px-8 relative overflow-visible"
>

      <Send className="absolute top-[62%] right-[50%] w-12 h-12 text-primary/20 rotate-50 animate-pulse" />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-4 animate-slide-in">
            <div className="relative inline-block mb-2">
              {/* Top Left Corner */}
              <svg
                className="absolute -top-2 -left-2 w-4 h-4"
                viewBox="0 0 20 20"
                fill="hsl(var(--primary))"
              >
                <rect width="20" height="4" />
                <rect width="4" height="20" />
              </svg>

              {/* Bottom Right Corner */}
              <svg
                className="absolute -bottom-2 -right-2 w-4 h-4"
                viewBox="0 0 20 20"
                fill="hsl(var(--primary))"
              >
                <rect y="16" width="20" height="4" />
                <rect x="16" width="4" height="20" />
              </svg>

              <div className="px-6 py-2 border-2 border-foreground bg-background">
                <span className="text-foreground text-sm font-medium">
                  Hello !
                </span>
              </div>
            </div>

            {/* Main Heading (Behance Layout, YOUR content preserved) */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                I'm{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 square-peg-regular">
                    <span> </span>Pranay Dayanand,
                  </span>

                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-0"></span>
                </span>
              </h1>

              {/* Extra lines like Behance, but optional content preserved */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Software Development Engineer in Test
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                
              </h2>
            </div>

            {/* Description — kept exactly as yours */}
            <p className="text-text-muted text-lg max-w-xl">
              A fun-loving, curious, and motivated tester who enjoys breaking things, fixing them, and building something better every time.
            </p>

            {/* Buttons (Behance Style) */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
              >
                Hire Me
              </Button>

              <a
                href="/assets/Pranay_Dayanand_Resume.pdf"
                download="Pranay_Dayanand_Resume.pdf"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-2 border-foreground hover:bg-foreground hover:text-background"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Decorations */}
          {/* RIGHT SIDE HERO SECTION (Behance Replica) */}
          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Profile Image */}
            <div className="relative w-[650px] sm:w-[650px]">
              <img
                src={HeroBlob}
                alt="Profile"
                className="relative z-10 w-full h-auto object-contain"
              />

              {/* Floating Labels */}
              {/* WEB Designer Label */}
              <div className="absolute top-[45%] left-[-12%] lg:left-[-8%] z-20">
                <div className="relative rotate-[-10deg]">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium whitespace-nowrap animate-float">
                    Quality Assurance
                  </div>
                </div>
              </div>

              {/* UI/UX Designer Label */}
              <div className="absolute bottom-[18%] right-[-5%] lg:right-[-7%] z-20">
                <div className="relative rotate-[-20deg]">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium whitespace-nowrap animate-float">
                    Software Testing
                  </div>
                  <svg
                    width="100"
                    height="50"
                    viewBox="0 0 100 50"
                    className="absolute -right-16 top-1/2 -translate-y-1/2"
                  >
                    <path
                      d="M0,25 Q30,15 60,25 T100,25"
                      stroke="hsl(var(--hero-blue))"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4,4"
                    />
                  </svg>
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
