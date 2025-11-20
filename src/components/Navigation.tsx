import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from"@/assets/Logo.png";
import { Menu, X } from "lucide-react";


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/70 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 items-center justify-center">
              <img
                src={Logo}
                alt="Profile"
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("education")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Education
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 bg-background/80 backdrop-blur-xl rounded-xl shadow-lg">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-4 text-left text-foreground hover:text-primary text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="block px-4 text-left text-foreground hover:text-primary text-lg"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block px-4 text-left text-foreground hover:text-primary text-lg"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block px-4 text-left text-foreground hover:text-primary text-lg"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block px-4 text-left text-foreground hover:text-primary text-lg"
            >
              Projects
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="mx-4 w-[calc(100%-2rem)] rounded-full bg-primary hover:bg-primary/90"
            >
              Contact Me
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
