import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/Logo-2.png";
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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between w-full">

          {/* LEFT SIDE (Logo + Left Spacer for Symmetry) */}
          <div className="hidden md:flex items-center gap-2 w-36">
            <div className="w-11 h-11">
              <img src={Logo} alt="Logo" className="w-full object-contain" />
            </div>
          </div>

          {/* MOBILE LOGO */}
          <div className="md:hidden flex items-center gap-2">
            <div className="w-10 h-10">
              <img src={Logo} alt="Logo" className="w-full object-contain" />
            </div>
          </div>

          {/* CENTER NAVIGATION — ALWAYS PERFECTLY CENTERED */}
          <div className="hidden md:flex flex-1 justify-center gap-10">
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

          {/* RIGHT SIDE — Contact Button Placeholder to Keep Symmetry */}
          <div
            className={`
              hidden md:flex justify-end w-36 transition-all duration-500
              ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white"
            >
              Contact Me
            </Button>
          </div>

          {/* MOBILE MENU TOGGLE ICON */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
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

            {/* MOBILE CONTACT BUTTON (Smooth Fade In/Out) */}
            <div
              className={`
                ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}
                transition-all duration-500
              `}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="mx-4 w-[calc(100%-2rem)] rounded-full bg-primary hover:bg-primary/90 text-white"
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
