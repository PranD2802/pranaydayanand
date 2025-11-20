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

      <div className="container mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <span className="text-primary font-medium text-lg">
              What I have studied
            </span>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic milestones and personal certifications
          </p>
        </div>

        {/* =========================== */}
        {/* MAIN LAYOUT WITH LEFT IMAGE */}
        {/* =========================== */}
        <div className="flex gap-10 relative">
          {/* LEFT IMAGE SECTION (shifted right) */}
          <div className="w-[280px] sm:w-[300px] relative ml-6 -mt-8 mb-50 flex-shrink-0">
            <figure>
            <img
              src={QR}
              alt="Certificates QR"
              className="w-full h-auto object-contain ml-20"
            />
            </figure>
          </div>

          {/* =========================== */}
          {/*     TIMELINE SECTION       */}
          {/* =========================== */}

          <div className="relative max-w-4xl -mt-6 ml-4 flex-1">
            {/* Vertical Line */}
            <div className="absolute left-[47%] md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-primary/40"></div>

            <div className="space-y-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-center md:gap-12"
                >
                  {/* LEFT SIDE YEAR */}
                  <div className="md:w-1/2 flex justify-start md:justify-end pr-6 md:pr-12">
                    <div className="inline-block bg-white px-6 py-2 rounded-full border border-primary text-primary font-semibold shadow-sm">
                      {edu.year}
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="absolute left-8 lg:left-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2 z-10 animate-pulse">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
            </div>

                  {/* RIGHT SIDE CARD */}
                  <div className="md:w-1/2 mt-8 md:mt-0 pl-6 md:pl-12">
                    <Card
                      className="p-8 border-2 border-border bg-card rounded-3xl
                hover:border-primary transition-all duration-500 hover:scale-[1.04]
                hover:shadow-2xl animate-fade-in"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-primary font-semibold">
                            {edu.grade}
                          </p>
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
