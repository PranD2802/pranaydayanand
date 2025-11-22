import { Card } from "@/components/ui/card";
import { GraduationCap, Send } from "lucide-react";
import QR from "@/assets/QR.png";

const Education = () => {
  const education = [
    {
      year: "2020 – 2024",
      degree: "B.Tech Computer Science and Engineering",
      institution: "REVA University, Bengaluru",
      grade: "9.09 CGPA",
    },
    {
      year: "2018 – 2020",
      degree: "Pre-University Education, Science",
      institution: "Viveka PU College, Kota",
      grade: "91.5%",
    },
    {
      year: "2015 – 2018",
      degree: "High School Education",
      institution: "GHS, Brahmavara",
      grade: "93.75%",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-section-bg relative overflow-hidden"
    >
      {/* Paper Plane Icons */}
      <Send className="absolute top-[10%] right-[10%] w-12 h-12 text-primary/20 animate-float rotate-90" />
      <Send className="absolute top-[20%] right-[35%] w-12 h-12 text-primary/20 animate-float rotate-60" />
      <Send className="absolute top-[50%] right-[60%] w-12 h-12 text-primary/20 animate-float rotate-45" />
      <Send className="absolute bottom-32 left-16 w-10 h-10 text-primary/20 animate-float -rotate-12" />
      
      {/* Background Waves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
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

      <div className="container mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <span className="text-primary font-medium text-lg">What I have studied</span>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic milestones and personal certifications
          </p>
        </div>

        {/* MAIN LAYOUT: stack on mobile, two-column on md+ */}
        <div className="flex flex-col md:flex-row gap-10 relative items-start">
          {/* LEFT IMAGE SECTION */}
          <div className="flex-shrink-0 w-full md:w-[300px] lg:w-[320px] mt-2 md:mt-0">
            <figure className="mx-auto md:mx-0 w-full max-w-[320px]">
              <img
                src={QR}
                alt="Certificates QR"
                className="w-full h-auto object-contain block mx-auto md:ml-6"
              />
            </figure>
          </div>

          {/* TIMELINE SECTION */}
          <div className="relative flex-1 max-w-full md:max-w-4xl">
            {/* Vertical Line (center on md+, left on small screens) */}
            <div className="absolute top-0 bottom-0 md:left-1/2 left-8 transform md:-translate-x-1/2 w-[3px] bg-primary/40" />

            <div className="space-y-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-center md:gap-12"
                >
                  {/* LEFT SIDE YEAR */}
                  <div className="md:w-1/2 flex justify-start md:justify-end pr-0 md:pr-12">
                    <div className="inline-block bg-white px-6 py-2 rounded-full border border-primary text-primary font-semibold shadow-sm">
                      {edu.year}
                    </div>
                  </div>

                  {/* CENTER DOT - position responsive */}
                  <div
                    className={
                      "absolute z-10 -translate-x-1/2 " +
                      "left-8 md:left-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                    }
                  >
                    <span className="w-full h-full block rounded-full" />
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-60" />
                  </div>

                  {/* RIGHT SIDE CARD */}
                  <div className="md:w-1/2 mt-6 md:mt-0 pl-0 md:pl-12">
                    <Card
                      className="p-8 border-2 border-border bg-card rounded-3xl hover:border-primary transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl animate-fade-in"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                          <p className="text-primary font-semibold">{edu.grade}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
