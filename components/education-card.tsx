"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"

interface EducationCardProps {
  degree: string
  school: string
  period: string
  location: string
  description: string
  status: "Completed" | "Pursuing"
}

export function EducationCard({ degree, school, period, location, description, status }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <GlassmorphicCard className="p-8 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex items-start mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0 dark:bg-blue-900/20">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">{degree}</h3>
              <p className="text-blue-600 font-semibold mb-2 dark:text-blue-400">{school}</p>
            </div>
          </div>

          <div className="flex flex-col md:items-end">
            <Badge
              className={`mb-2 ${
                status === "Pursuing"
                  ? "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
              }`}
            >
              {status}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {period}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
      </GlassmorphicCard>
    </motion.div>
  )
}
