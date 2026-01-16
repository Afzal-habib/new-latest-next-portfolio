"use client"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Languages,
  Folder,
  ChevronRight,
  Smartphone,
  Database,
  Server,
  Layers,
  Zap,
  GitBranch,
  Wrench,
  Settings,
  Building,
  BriefcaseBusiness,
  ShieldCheck,
  Globe,
} from "lucide-react"
import {
  personalInfo,
  summary,
  experiences,
  education,
  certifications,
  languages,
  coreCompetencies,
  tools,
  skills,
  projects,
} from "./resume-data"
import { Button } from "@/components/common"
import Link from "next/link"
const iconMap = {
  Layers,
  Server,
  Database,
  Smartphone,
  Settings,
  GitBranch,
}

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-200 py-8 print:bg-white print:py-0">
      {/* Download Button */}
      <div className="max-w-[210mm] mx-auto px-4 mb-6 print:hidden">
        <Button
          onClick={handlePrint}
          className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg flex items-center gap-2.5 shadow-xl mx-auto font-semibold text-sm"
        >
          <Download className="w-4 h-4" />
          Download as PDF
        </Button>
      </div>

      {/* Resume Container */}
      <div className="resume-container bg-white max-w-[210mm] mx-auto shadow-2xl print:shadow-none print:max-w-none">
        {/* ==================== PAGE 1 - Profile & Experience ==================== */}
        <div className="resume-page relative overflow-hidden">
          {/* Professional Background Design */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.03] print:opacity-[0.05]">
            <div className="w-full h-full border-[40px] border-slate-900 rounded-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-[0.03] print:opacity-[0.05]">
            <div className="w-full h-full border-[30px] border-slate-900 rounded-full" />
          </div>
          <div className="absolute top-1/2 right-0 w-2 h-32 bg-slate-900 opacity-[0.08] print:opacity-[0.1]" />

          <div className="relative px-10 py-8">
            {/* Header - using personalInfo */}
            <header className="mb-5">
              <div className="flex items-start gap-5">
                <div className="w-28 h-28 rounded-xl overflow-hidden border-3 border-slate-900 shadow-lg flex-shrink-0">
                  <img
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover scale-140 object-[50%_calc(100%+40px)]"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    {personalInfo.name.toUpperCase()}
                  </h1>
                  <div className="flex justify-between">

                    <p className="text-base text-slate-700 font-bold mt-0.5 tracking-wide">{personalInfo.title}</p>
                    <Link href={`${personalInfo.portfolio}`} className="text-[12px] text-slate-700 font-bold mt-0.5 tracking-wide flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-slate-700" />
                      {personalInfo.portfolio}
                    </Link>

                  </div>

                  {/* Contact Row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-[12.5px] text-slate-800">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Phone className="w-3.5 h-3.5 text-slate-700" />
                      {personalInfo.phone}
                    </span>
                    <Link href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 font-semibold">
                      <Mail className="w-3.5 h-3.5 text-slate-700" />
                      {personalInfo.email}
                    </Link>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-slate-700" />
                      {personalInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-x-4 mt-1.5 text-[12.5px] text-slate-800">
                    <Link href={`${personalInfo.linkedin}`} className="flex items-center gap-1.5 font-semibold">
                      <Linkedin className="w-3.5 h-3.5 text-slate-700" />
                      {personalInfo.linkedin}
                    </Link>
                    <Link href={`${personalInfo.github}`} className="flex items-center gap-1.5 font-semibold">
                      <Github className="w-3.5 h-3.5 text-slate-700" />
                      {personalInfo.github}
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            {/* Thick Divider Line */}
            <div className="h-1 bg-slate-900 mb-5" />

            {/* Professional Summary */}
            <section className="mb-5">
              <p className="text-[14px] text-slate-800 leading-relaxed">
                <span className="font-black text-slate-900">Results-driven Full Stack Developer</span>{" "}
                {summary.substring(summary.indexOf("with"))}
              </p>
            </section>

            {/* Two Column Layout */}
            <div className="grid grid-cols-[1fr_210px] gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Experience */}
                <section>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center shadow-sm">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                      Professional Experience
                    </h2>
                  </div>

                  <div className="space-y-3 pl-1">
                    {experiences.map((exp, index) => (
                      <div key={index} className={`border-l-[3px] ${exp.borderColor} pl-3`}>
                        <div className="flex justify-between items-start relative">
                          <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center shadow-sm absolute -left-6.5 top-0">
                            <ShieldCheck className="w-3 h-3 text-white" />
                          </div>
                          <div className="pl-2">
                            <h3 className="font-black text-slate-900 text-[15px]">{exp.title}</h3>
                            <p className="text-[11.5px] text-slate-700 font-bold">
                              {exp.company} · {exp.location}
                            </p>
                          </div>
                          <span className="text-[12px] text-slate-900 font-bold bg-slate-200 px-2 py-0.5 rounded">
                            {exp.duration}
                          </span>
                        </div>
                        <ul className="mt-1.5 space-y-0.5 text-[13px] text-slate-800">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-1.5">
                              <ChevronRight className="w-3 h-3 text-slate-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>


              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-4 border-l-2 border-slate-200 pl-4">
                {/* Education */}
                <section>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="w-5 h-5 rounded bg-slate-900 flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                    <h2 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">Education</h2>
                  </div>
                  <div className="space-y-2.5">
                    {education.map((edu, index) => (
                      <div key={index}>
                        <h3 className="font-black text-slate-900 text-[13px]">{edu.degree}</h3>
                        <p className="text-[13px] text-slate-700 font-semibold">{edu.institution}</p>
                        <p className="text-[13px] text-slate-600 font-bold">{edu.duration}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="w-5 h-5 rounded bg-slate-900 flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                    <h2 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">Certifications</h2>
                  </div>
                  <div className="space-y-2">
                    {certifications.map((cert, index) => (
                      <div key={index}>
                        <p className="font-black text-slate-900 text-[13px]">{cert.name}</p>
                        <p className="text-[13px] text-slate-600 font-semibold">
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="w-5 h-5 rounded bg-slate-900 flex items-center justify-center">
                      <Languages className="w-3 h-3 text-white" />
                    </div>
                    <h2 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">Languages</h2>
                  </div>
                  <div className="space-y-1 text-[13px]">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-slate-800 font-bold">{lang.name}</span>
                        <span className="text-slate-600 font-semibold">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tools & Platforms */}
                <section>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="w-5 h-5 rounded bg-slate-900 flex items-center justify-center">
                      <Wrench className="w-3 h-3 text-white" />
                    </div>
                    <h2 className="text-[16px] font-black text-slate-900 uppercase tracking-wider">Tools</h2>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[13px] bg-slate-200 text-slate-900 px-1.5 py-0.5 rounded font-bold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            {/* Core Competencies */}
            <section className="mt-2">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <h2 className="text-md font-black text-slate-900 uppercase tracking-wider">Core Competencies</h2>
              </div>
              <div className="flex flex-wrap gap-1.5 pl-1">
                {coreCompetencies.map((skill) => (
                  <span key={skill} className="text-[12px] bg-slate-900 text-white px-2 py-0.5 rounded font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ==================== PAGE 2 - Technical Skills ==================== */}
        <div className="resume-page relative overflow-hidden">
          {/* Professional Background Design */}
          <div className="absolute top-0 left-0 w-[250px] h-[250px] opacity-[0.03] print:opacity-[0.05]">
            <div className="w-full h-full border-[35px] border-slate-900 rounded-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[180px] h-[180px] opacity-[0.03] print:opacity-[0.05]">
            <div className="w-full h-full border-[25px] border-slate-900 rounded-full" />
          </div>
          <div className="absolute top-1/3 left-0 w-2 h-24 bg-slate-900 opacity-[0.08] print:opacity-[0.1]" />

          <div className="relative px-10 py-7">
            {/* Mini Header */}
            <header className="flex justify-between items-center mb-4 pb-3 border-b-[3px] border-slate-900">
              <div>
                <h1 className="text-sm font-black text-slate-900 tracking-tight">{personalInfo.name.toUpperCase()}</h1>
                <p className="text-[13px] text-slate-700 font-bold tracking-wide">{personalInfo.title}</p>
              </div>
              <div className="text-right text-[12px] text-slate-700">
                <Link href={`mailto:${personalInfo.email}`} className="font-bold">{personalInfo.email}</Link>
                <p className="font-semibold flex items-center gap-1">
                  {personalInfo.phone} |
                  <Link href={`${personalInfo.portfolio}`} className="text-[12px] text-slate-700 font-bold mt-0.5 tracking-wide flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-slate-700" />
                    {personalInfo.portfolio}
                  </Link>
                </p>
              </div>
            </header>

            {/* Skills Section Title */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center shadow-sm">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider">Technical Skills</h2>
            </div>

            {/* Skills Grid - Dynamic Rendering */}
            <div className="grid grid-cols-2 gap-5">
              {Object.entries(skills).map(([key, category]) => {
                const IconComponent = iconMap[category.icon as keyof typeof iconMap]
                return (
                  <div key={key} className="space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <h3 className="text-[14px] font-black text-slate-900 uppercase tracking-wide">{category.title}</h3>
                    </div>

                    <div className="space-y-2.5 pl-1">
                      {category.items.map((item, index) => (
                        <div key={index} className={`border-l-[3px] ${item.borderColor} pl-3 bg-slate-50`}>
                          <p className="font-black text-slate-900 text-[12px]">{item.name}</p>
                          <p className="text-[12px] text-slate-900 mt-0.5">{item.technologies}</p>
                          <p className="text-[11.5px] text-slate-900 mt-0.5 italic">
                            {item.level} • {item.experience}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ==================== PAGE 3 - Projects ==================== */}
        <div className="resume-page relative overflow-hidden">
          {/* Professional Background Design */}
          <div className="absolute top-0 right-0 w-[220px] h-[220px] opacity-[0.03] print:opacity-[0.05]">
            <div className="w-full h-full border-[30px] border-slate-900 rounded-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[150px] h-[150px] opacity-[0.03] print:opacity-[0.05]">
            <div className="w-full h-full border-[20px] border-slate-900 rounded-full" />
          </div>
          <div className="absolute top-1/2 right-0 w-2 h-20 bg-slate-900 opacity-[0.08] print:opacity-[0.1]" />

          <div className="relative px-10 py-7">
            {/* Mini Header */}
            <header className="flex justify-between items-center mb-4 pb-3 border-b-[3px] border-slate-900">
              <div>
                <h1 className="text-sm font-black text-slate-900 tracking-tight">{personalInfo.name.toUpperCase()}</h1>
                <p className="text-[13px] text-slate-700 font-bold tracking-wide">{personalInfo.title}</p>
              </div>
              <div className="text-right text-[12px] text-slate-700">
                <Link href={`mailto:${personalInfo.email}`} className="font-bold">{personalInfo.email}</Link>
                <p className="font-semibold flex items-center gap-1">
                  {personalInfo.phone} |
                  <Link href={`${personalInfo.portfolio}`} className="text-[12px] text-slate-700 font-bold mt-0.5 tracking-wide flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-slate-700" />
                    {personalInfo.portfolio}
                  </Link>
                </p>              </div>
            </header>

            {/* Projects Section */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center shadow-sm">
                <Folder className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider">Key Projects</h2>
            </div>

            {/* Projects - Dynamic Rendering */}
            <div className="space-y-2">
              {projects.slice(0, 4).map((project, index) => (
                <div key={index} className={`border-l-[4px] ${project.borderColor} pl-4`}>
                  <div className="flex justify-between items-start mb-1 relative">
                    <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center shadow-sm absolute -left-7.5 top-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </div>
                    <div className="pl-1">
                      <h3 className="font-black text-slate-900 text-[15px]">{project.title}</h3>
                      <p className="text-[12.5px] text-slate-800 font-bold">{project.role}</p>
                    </div>
                    <span className="text-[11.5px] text-slate-900 font-bold bg-slate-200 px-2 py-0.5 rounded">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-[12px] text-slate-900 mb-1.5">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[12.5px] bg-slate-900 text-white px-1.5 py-0.5 rounded font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.highlights.length > 0 && (
                    <ul className="text-[12px] text-slate-900 space-y-0.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-1.5">
                          <ChevronRight className="w-2.5 h-2.5 text-slate-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== PAGE 4 - Additional Projects ==================== */}
        <div className="resume-page relative overflow-hidden">
          {/* Professional Background Design */}
          <div className="absolute top-0 left-0 w-[200px] h-[200px] opacity-[0.03] print:opacity-[0.05]">
            <div className="w-full h-full border-[28px] border-slate-900 rounded-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[160px] h-[160px] opacity-[0.03] print:opacity-[0.05]">
            <div className="w-full h-full border-[22px] border-slate-900 rounded-full" />
          </div>
          <div className="absolute top-1/3 left-0 w-2 h-16 bg-slate-900 opacity-[0.08] print:opacity-[0.1]" />

          <div className="relative px-10 py-7">
            {/* Mini Header */}
            <header className="flex justify-between items-center mb-4 pb-3 border-b-[3px] border-slate-900">
              <div>
                <h1 className="text-sm font-black text-slate-900 tracking-tight">{personalInfo.name.toUpperCase()}</h1>
                <p className="text-[13px] text-slate-700 font-bold tracking-wide">{personalInfo.title}</p>
              </div>
              <div className="text-right text-[12px] text-slate-700">
                <Link href={`mailto:${personalInfo.email}`} className="font-bold">{personalInfo.email}</Link>
                <p className="font-semibold flex items-center gap-1">
                  {personalInfo.phone} |
                  <Link href={`${personalInfo.portfolio}`} className="text-[12px] text-slate-700 font-bold mt-0.5 tracking-wide flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-slate-700" />
                    {personalInfo.portfolio}
                  </Link>
                </p>              </div>
            </header>

            {/* Additional Projects Section */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center shadow-sm">
                <Folder className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-wider">Additional Projects</h2>
            </div>

            {/* Additional Projects - Last Three */}
            <div className="space-y-4">
              {projects.slice(-3).map((project, index) => (
                <div key={index} className={`border-l-[4px] ${project.borderColor} pl-4`}>
                  <div className="flex justify-between items-start mb-1 relative">
                    <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center shadow-sm absolute -left-7.5 top-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </div>
                    <div className="pl-1">
                      <h3 className="font-black text-slate-900 text-[15px]">{project.title}</h3>
                      <p className="text-[12.5px] text-slate-600 font-bold">{project.role}</p>
                    </div>
                    <span className="text-[11.5px] text-slate-900 font-bold bg-slate-200 px-2 py-0.5 rounded">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-[12px] text-slate-700 mb-1.5">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[12.5px] bg-slate-900 text-white px-1.5 py-0.5 rounded font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.highlights.length > 0 && (
                    <ul className="text-[12px] text-slate-700 space-y-0.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-1.5">
                          <ChevronRight className="w-2.5 h-2.5 text-slate-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
