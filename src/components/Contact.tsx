import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import profile from "@/assets/Contact.jpg";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Globe,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M38.9,8.1A20.9,20.9,0,0,0,3.2,22.8,19.8,19.8,0,0,0,6,33.2L3,44l11.1-2.9a20.3,20.3,0,0,0,10,2.5A20.8,20.8,0,0,0,38.9,8.1Z" />
    <path d="M33.6,27.2A29.2,29.2,0,0,0,30,25.5c-.4-.2-.8-.3-1.1.2s-1.4,1.7-1.7,2.1a.8.8,0,0,1-1.1.1,15.2,15.2,0,0,1-4.2-2.6A15,15,0,0,1,19,21.7a.7.7,0,0,1,.2-1l.8-1a3.5,3.5,0,0,0,.5-.8.9.9,0,0,0,0-.9c-.2-.3-1.2-2.8-1.6-3.9s-.9-.9-1.2-.9h-1a1.7,1.7,0,0,0-1.4.7,5.5,5.5,0,0,0-1.8,4.3,10.4,10.4,0,0,0,2.1,5.4c.3.3,3.7,5.6,8.9,7.8a16.4,16.4,0,0,0,3,1.1,6.4,6.4,0,0,0,3.3.2c1-.1,3.1-1.2,3.5-2.4s.5-2.3.3-2.5A2.1,2.1,0,0,0,33.6,27.2Z" />
  </svg>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "pranaydpoojary@gmail.com",
      link: "mailto:pranaydpoojary@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7349428331",
      link: "tel:+917349428331",
    },
    {
      icon: Globe,
      label: "Website",
      value: "pranaydayanand.in",
      link: "https://pranaydayanand.in",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Bengaluru, Karnataka",
      link: "https://www.google.com/maps/place/Bengaluru,+Karnataka",
    },
  ];

  const socialMedia = [
    { icon: Github, name: "GitHub", link: "https://github.com/PranD2802" },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/pranayd",
    },
    { icon: WhatsAppIcon, name: "WhatsApp", link: "https://wa.me/7349428331" },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/ig_pranayd/",
    },
  ];

  /* -----------------------------------------------------
      🔥 NEW FORMSPREE SUBMISSION HANDLER
  ------------------------------------------------------ */
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("https://formspree.io/f/xdornpob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Form submission failed");

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }

    setIsSending(false);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-section-bg relative overflow-hidden"
    >
      {/* BG Waves */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <svg
            key={i}
            className="absolute w-full"
            style={{ top: `${i * 7}%` }}
            height="100"
            viewBox="0 0 2000 100"
            fill="none"
          >
            <path
              d="M0 50 Q 250 20, 500 50 T 1000 50 T 1500 50 T 2000 50"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <span className="text-primary font-medium text-lg">Who I am</span>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or opportunities
          </p>
        </div>

        {/* ==== Main Layout ==== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start -mt-[2%]">
          {/* === LEFT COLUMN === */}
          <div className="space-y-10">
            {/* Profile Circle */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  viewBox="0 0 220 220"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 110,110 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                    />
                  </defs>

                  <text
                    className="fill-primary font-semibold tracking-widest"
                    style={{ fontSize: "9.8px" }}
                  >
                    <textPath href="#circlePath">
                      CONNECT • COLLABORATE • CREATE • COMMUNICATE • COLLABORATE
                      • CONNECT • CREATE •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <img
                      src={profile}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 ml-20">
              {contactDetails.map((c, i) => (
                <a
                  key={i}
                  href={c.link}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="pt-2">
              <h3 className="text-lg font-semibold mb-8 text-center">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-4 mb-2">
                {socialMedia.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="space-y-20 mt-[15%]">
            {/* BIO */}
            <div className="relative max-w-xl ml-auto -mt-10">
              <svg
                className="absolute -top-3 -left-3 w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect width="24" height="4" />
                <rect width="4" height="24" />
              </svg>
              <svg
                className="absolute -bottom-3 -right-3 w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect y="20" width="24" height="4" />
                <rect x="20" width="4" height="24" />
              </svg>

              <div className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Beyond the Code
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  A guy from Udupi with a head full of dreams and a heart full
                  of energy, that’s me in one line. I’m competitive by nature,
                  fun to be around, and always curious about new experiences.
                  Outside work, I enjoy playing badminton, diving into books,
                  creating videos, and exploring movies, series, and sports—
                  especially Cricket, F1, and Football. Determination drives me:
                  once I decide on a goal, I stay committed until I achieve it.
                </p>
              </div>
            </div>

            {/* FORM (with Formspree) */}
            <Card className="p-8 border-2 border-border bg-card/50 backdrop-blur-sm max-w-xl ml-auto h-[80%]">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Message</Label>
                  <Textarea
                    rows={6}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full"
                  disabled={isSending}
                >
                  {isSending ? (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4 animate-bounce" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
