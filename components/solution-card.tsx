"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"

interface SolutionCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function SolutionCard({ title, description, icon }: SolutionCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative bg-gradient-to-br from-[#3B1C32]/30 to-[#3B1C32]/10 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#6A1E55]/20 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
      ></div>

      {/* Card content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        <div
          className={`
          w-16 h-16 rounded-lg flex items-center justify-center mb-6
          bg-[#3B1C32] text-[#A64D79] transition-all duration-300
          ${isHovered ? "bg-[#6A1E55] text-white shadow-[0_0_20px_rgba(166,77,121,0.3)]" : ""}
        `}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <motion.div
          className="mt-auto"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <button className="text-[#A64D79] hover:text-white transition-colors flex items-center text-sm font-medium">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

