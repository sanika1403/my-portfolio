"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
}

export function GlassmorphicCard({ children, className }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 dark:bg-gray-800/80 dark:border-gray-700",
          className,
        )}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  )
}
