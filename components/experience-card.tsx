"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
  achievements: string[]
}

export function ExperienceCard({
  title,
  company,
  period,
  location,
  description,
  technologies,
  achievements,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <GlassmorphicCard className="p-8 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">{title}</h3>
            <p className="text-lg text-blue-600 font-semibold mb-2 dark:text-blue-400">{company}</p>
          </div>
          <div className="flex flex-col md:items-end text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center mb-1">
              <Calendar className="w-4 h-4 mr-1" />
              {period}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3">Key Achievements:</h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  )
}
