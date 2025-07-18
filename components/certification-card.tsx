"use client"

import { motion } from "framer-motion"
import { Award, Clock } from "lucide-react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Badge } from "@/components/ui/badge"

interface CertificationCardProps {
  title: string
  issuer: string
  duration: string
  description: string
  skills: string[]
}

export function CertificationCard({ title, issuer, duration, description, skills }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <GlassmorphicCard className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4 flex-shrink-0 dark:bg-yellow-900/20">
            <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">{title}</h3>
            <p className="text-blue-600 font-medium mb-2 dark:text-blue-400">{issuer}</p>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
              <Clock className="w-4 h-4 mr-1" />
              {duration}
            </div>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{description}</p>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">Skills Covered:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 text-xs dark:bg-yellow-900/20 dark:text-yellow-400 dark:hover:bg-yellow-900/30"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  )
}
