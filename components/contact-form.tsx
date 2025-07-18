"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      e.currentTarget.reset()
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center h-96"
      >
        <GlassmorphicCard className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">Message Sent!</h3>
          <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
        </GlassmorphicCard>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <GlassmorphicCard className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">Send Me a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your Name"
                required
                className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-50 dark:focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-50 dark:focus:border-blue-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Subject
            </label>
            <Input
              id="subject"
              placeholder="What's this about?"
              required
              className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-50 dark:focus:border-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or just say hello..."
              rows={5}
              required
              className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-50 dark:focus:border-blue-400"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </GlassmorphicCard>
    </motion.div>
  )
}
