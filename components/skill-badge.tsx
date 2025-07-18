"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
    >
      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-slate-900 dark:text-slate-50">{name}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">{level}%</span>
        </div>

        <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden dark:bg-gray-700">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  )
}
