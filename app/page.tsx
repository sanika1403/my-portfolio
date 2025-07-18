import Link from "next/link"
import Image from "next/image" // Import Image component
import { ArrowRight, Github, Linkedin, Mail, Download, Award, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { EducationCard } from "@/components/education-card"
import { CertificationCard } from "@/components/certification-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 overflow-hidden dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="relative px-4 py-2 text-sm font-medium rounded-full bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                <span className="relative z-10">Fresh Graduate • Available for Opportunities</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 animate-pulse"></span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block text-slate-900 dark:text-slate-50">Hello, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Sanika Gaikwad
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-[600px] leading-relaxed dark:text-slate-400">
                A motivated and enthusiastic Computer Engineering student with a strong interest in programming, web
                development, and cybersecurity. Eager to learn new technologies, solve real-world problems, and
                contribute effectively to team-based projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#projects" className="flex items-center">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="/resume.pdf" download="Sanika_Gaikwad_Resume.pdf" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/sanika1403" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg text-slate-600 hover:text-slate-900 transition-all duration-300 dark:bg-gray-800/80 dark:hover:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-50"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/sanika-gaikwad-1b479b213" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg text-slate-600 hover:text-slate-900 transition-all duration-300 dark:bg-gray-800/80 dark:hover:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-50"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:sanikagaikwad141023@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg text-slate-600 hover:text-slate-900 transition-all duration-300 dark:bg-gray-800/80 dark:hover:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-50"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl"></div>
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl dark:border-gray-800">
                <img
                  src="/sanika-photo.jpg"
                  alt="Sanika Gaikwad - Computer Engineering Student"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg dark:bg-gray-800">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container">
          <SectionHeading title="About Me" subtitle="Get to know me better" className="mb-16" />

          <div className="space-y-8">
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">My Journey</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed dark:text-slate-400">
                <p>
                  I'm a passionate Computer Engineering student currently pursuing my B.E. degree with a strong
                  foundation in programming and web development. My journey began with a curiosity about technology and
                  has evolved into a deep passion for creating innovative solutions.
                </p>
                <p>
                  Throughout my academic journey, I have gained hands-on experience through various projects and
                  internships, developing practical skills in Python, JavaScript, HTML/CSS, and ethical hacking. I'm
                  particularly interested in cybersecurity and web development.
                </p>
                <p>
                  I actively contribute to college tech fests and hackathons, learning through collaboration and
                  creative problem-solving. I'm eager to apply my knowledge in real-world scenarios and contribute to
                  meaningful projects that make a difference.
                </p>
              </div>
            </GlassmorphicCard>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GlassmorphicCard className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-50">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-slate-600 dark:text-slate-400">Location</span>
                    <span className="font-medium">Dombivli, Maharashtra</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-600 dark:text-slate-400">Education</span>
                    <span className="font-medium">B.E. Computer Engineering</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-600 dark:text-slate-400">CGPI</span>
                    <span className="font-medium">8.47/10</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-600 dark:text-slate-400">Status</span>
                    <span className="font-medium text-green-600">Available</span>
                  </div>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-50">Interests & Hobbies</h4>
                <div className="flex flex-col gap-2">
                  {["Web Development", "Cybersecurity", "Programming", "Dancing", "Music", "Gaming"].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm dark:bg-blue-900/20 dark:text-blue-400"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50/50 dark:bg-gray-900/50">
        <div className="container">
          <SectionHeading title="Skills & Technologies" subtitle="My technical expertise" className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Frontend</h3>
              <div className="space-y-3">
                <SkillBadge name="HTML" level={90} />
                <SkillBadge name="CSS" level={85} />
                <SkillBadge name="JavaScript" level={80} />
                <SkillBadge name="React.js" level={75} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Backend & Database</h3>
              <div className="space-y-3">
                <SkillBadge name="Python" level={85} />
                <SkillBadge name="PHP" level={70} />
                <SkillBadge name="SQL" level={80} />
                <SkillBadge name="PL/SQL" level={75} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Tools & Others</h3>
              <div className="space-y-3">
                <SkillBadge name="Git" level={75} />
                <SkillBadge name="TypeScript" level={70} />
                <SkillBadge name="Android Studio" level={65} />
                <SkillBadge name="Firebase" level={60} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Cybersecurity</h3>
              <div className="space-y-3">
                <SkillBadge name="Ethical Hacking" level={80} />
                <SkillBadge name="Network Security" level={75} />
                <SkillBadge name="Penetration Testing" level={70} />
                <SkillBadge name="Web App Security" level={75} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container">
          <SectionHeading title="Education" subtitle="My academic journey" className="mb-16" />

          <div className="space-y-8">
            <EducationCard
              degree="Bachelor of Engineering in Computer Engineering"
              school="Dilkap Research Institute of Engineering and Management Studies"
              period="November 2022 - June 2025"
              location="Neral, Maharashtra"
              description="Currently pursuing B.E. in Computer Engineering with focus on programming, web development, and cybersecurity. Active participant in college tech fests and hackathons."
              status="Pursuing"
            />

            <EducationCard
              degree="Diploma in Information Technology"
              school="G.V.Acharya Polytechnic"
              period="July 2019 - October 2022"
              location="Shelu, Maharashtra"
              description="Completed diploma with strong foundation in IT fundamentals, programming concepts, and database management."
              status="Completed"
            />

            <EducationCard
              degree="Secondary School Certificate (SSC)"
              school="Sai Trust's Secondary English School"
              period="June 2018 - June 2019"
              location="Dombivali, Maharashtra"
              description="Completed secondary education with focus on science and mathematics."
              status="Completed"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-gray-900/50">
        <div className="container">
          <SectionHeading
            title="Certifications"
            subtitle="Continuous learning and skill development"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              title="Ethical Hacking"
              issuer="Internshala Trainings"
              duration="6 weeks"
              description="Comprehensive course covering system and network vulnerabilities, penetration testing, malware analysis, and web application security."
              skills={["Penetration Testing", "Network Security", "Malware Analysis", "Web App Security"]}
            />

            <CertificationCard
              title="Python Programming"
              issuer="Last Moment Tuitions"
              duration="Course"
              description="Complete Python programming course covering fundamentals including variables, data types, control structures, functions, OOP, and file handling."
              skills={["Python Basics", "OOP", "File Handling", "Data Structures"]}
            />

            <CertificationCard
              title="Cyber Security"
              issuer="Fortinet NSE Training Institute"
              duration="Course"
              description="Core concepts of network security, firewalls, threat detection, and secure access management."
              skills={["Network Security", "Firewalls", "Threat Detection", "Secure Access"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <SectionHeading title="Featured Projects" subtitle="My academic and personal projects" className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Plagiarism Sentinel"
              description="A web-based plagiarism detection tool built with Node.js, React, and JavaScript, allowing users to check for content similarity efficiently with real-time analysis."
              image="/pl.png"
              technologies={["Node.js", "React", "JavaScript", "Web APIs"]}
              githubUrl="https://github.com/sanika1403"
              featured={true}
              projectType="Web Application"
              completionDate="April 2025"
            />

            <ProjectCard
              title="AI ChatBot"
              description="Smart chatbot application built using Android Studio with Java/Kotlin and Firebase, capable of answering FAQs and storing chat data in real-time."
              image="/ai.jpg"
              technologies={["Android Studio", "Java", "Kotlin", "Firebase"]}
              githubUrl="https://github.com/sanika1403"
              projectType="Mobile Application"
              completionDate="April 2022"
            />

            <ProjectCard
              title="Personal Portfolio Website"
              description="Fully responsive personal portfolio website designed and developed using HTML, CSS, and JavaScript to showcase projects and skills with modern UI/UX."
              image="/port.jpg"
              technologies={["HTML", "CSS", "JavaScript", "Responsive Design"]}
              githubUrl="https://github.com/sanika1403"
              liveUrl="#"
              projectType="Web Development"
            />

            <ProjectCard
              title="Python Billing System"
              description="Command-line based billing and invoicing tool for small businesses, implementing real-time calculations, data storage, and invoice generation."
              image="/bill.png"
              technologies={["Python", "File Handling", "Data Processing"]}
              githubUrl="https://github.com/sanika1403"
              projectType="Desktop Application"
            />

            <ProjectCard
              title="Automotive Shop Management System"
              description="PHP-based web application for managing vehicle services, customer data, and inventory with comprehensive dashboard and reporting features."
              image="/asms.png"
              technologies={["PHP", "MySQL", "HTML", "CSS", "JavaScript"]}
              githubUrl="https://github.com/sanika1403"
              projectType="Web Application"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-slate-50/50 dark:bg-gray-900/50">
        <div className="container">
          <SectionHeading title="Achievements" subtitle="Recognition and accomplishments" className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassmorphicCard className="p-8">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4 dark:bg-yellow-900/20">
                  <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                    Technoscript Paper Presentation
                  </h3>
                  <p className="text-blue-600 font-medium mb-2 dark:text-blue-400">CSIWIET</p>
                  <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                    Actively contributed to college tech fests and hackathons, learning through collaboration and
                    creative problem-solving. Earned certificates for participation and demonstrated technical
                    presentation skills.
                  </p>
                </div>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-8">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 dark:bg-blue-900/20">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">Academic Excellence</h3>
                  <p className="text-blue-600 font-medium mb-2 dark:text-blue-400">Consistent Performance</p>
                  <p className="text-slate-600 leading-relaxed dark:text-slate-400">
                    Maintaining a strong CGPI of 8.47/10 in Computer Engineering while actively participating in
                    extracurricular activities and project development.
                  </p>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <SectionHeading title="Get In Touch" subtitle="Let's connect and collaborate" className="mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <GlassmorphicCard className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">Let's Connect</h3>
                <p className="text-slate-600 mb-8 leading-relaxed dark:text-slate-400">
                  I'm actively seeking opportunities to start my career in software development, web development, or
                  cybersecurity. Whether you have an internship, entry-level position, or just want to connect, I'd love
                  to hear from you!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/20">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                      <div className="font-medium">sanikagaikwad141023@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/20">
                      <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</div>
                      <div className="font-medium">linkedin.com/in/sanika-gaikwad-1b479b213</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/20">
                      <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">GitHub</div>
                      <div className="font-medium">github.com/sanika1403</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-gray-700">
                  <h4 className="text-lg font-medium mb-4 text-slate-900 dark:text-slate-50">Current Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-slate-600 dark:text-slate-400">
                      Available for internships and entry-level opportunities
                    </span>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-white dark:border-gray-700 dark:bg-gray-950">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              {" "}
              {/* Added flex and gap */}
              <Image
                src="/sanika-photo.jpg"
                alt="Sanika Gaikwad"
                width={40} // Adjusted size for footer
                height={40} // Adjusted size for footer
                className="rounded-full object-cover"
              />
              <Link href="/" className="font-bold text-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Sanika Gaikwad
                </span>
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-2 md:mt-0 dark:text-slate-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <div className="flex gap-4">
              <Link href="https://github.com/sanika1403" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 dark:hover:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-50"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/sanika-gaikwad-1b479b213" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 dark:hover:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-50"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:sanikagaikwad141023@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 dark:hover:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-50"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
