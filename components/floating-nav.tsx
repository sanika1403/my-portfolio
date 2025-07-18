"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image" // Import Image component
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg dark:bg-gray-900/90 dark:border-gray-700">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur opacity-50"></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <Link href="/" className="font-bold text-lg flex items-center gap-2">
                {" "}
                {/* Added flex and gap */}
                <Image
                  src="/sanika-photo.jpg"
                  alt="Sanika Gaikwad"
                  width={32} // Adjusted size for mobile nav
                  height={32} // Adjusted size for mobile nav
                  className="rounded-full object-cover"
                />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Sanika
                </span>
              </Link>
              <div className="flex items-center gap-2">
                <ModeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-50 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="font-bold text-lg mr-6 flex items-center gap-2">
                {" "}
                {/* Added flex and gap */}
                <Image
                  src="/sanika-photo.jpg"
                  alt="Sanika Gaikwad"
                  width={32} // Adjusted size for desktop nav
                  height={32} // Adjusted size for desktop nav
                  className="rounded-full object-cover"
                />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Sanika Gaikwad
                </span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors dark:text-slate-400 dark:hover:text-slate-50 dark:hover:bg-gray-800"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                size="sm"
                className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
              <ModeToggle />
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white rounded-2xl p-8 shadow-2xl dark:bg-gray-900">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors dark:text-slate-50 dark:hover:text-blue-400"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Link href="#contact">Hire Me</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
