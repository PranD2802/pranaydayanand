import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
  {/* Bottom Section */}
  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

    {/* LEFT — Name & Role */}
    <div className="flex items-center gap-3 order-2 sm:order-1 w-full sm:w-auto">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">PD</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background"></div>
      </div>
      <div>
        <p className="font-bold text-foreground">Pranay Dayanand</p>
        <p className="text-sm text-primary font-medium">
          Software Development Engineer in Test
        </p>
      </div>
    </div>

    {/* CENTER — Have a nice day */}
    <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-center">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-2xl sm:text-2xl font-bold mb-2">
          <span>Have a nice day</span>
          <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-red-500 text-red-500 animate-pulse" />
        </div>
        <p className="text-muted-foreground text-sm">
          Thank you for visiting my portfolio
        </p>
      </div>
    </div>

    {/* RIGHT — Copyright */}
    <div className="text-center sm:text-right order-3 w-full sm:w-auto">
      <p className="text-sm text-muted-foreground">
        © {currentYear} All rights reserved
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Crafted with passion & precision
      </p>
    </div>

  </div>
</div>

    </footer>
  );
};

export default Footer;