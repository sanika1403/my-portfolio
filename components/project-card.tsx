"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, Star, Calendar, Code } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  projectType?: string
  completionDate?: string
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
  projectType,
  completionDate,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className={`relative h-full overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 ${
          featured ? "ring-2 ring-blue-500/20" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-blue-500 text-white">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}

        <div className="relative overflow-hidden h-48">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex-grow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{title}</h3>
            {projectType && (
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
              >
                <Code className="w-3 h-3 mr-1" />
                {projectType}
              </Badge>
            )}
          </div>

          {completionDate && (
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
              <Calendar className="w-4 h-4 mr-1" />
              {completionDate}
            </div>
          )}

          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-gray-700 dark:text-slate-300 dark:hover:bg-gray-600"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            {liveUrl && (
              <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className={`${liveUrl ? "flex-1" : "w-full"} border-slate-300 hover:bg-slate-50 bg-transparent dark:border-gray-700 dark:hover:bg-gray-700 dark:text-slate-50`}
                asChild
              >
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
