"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechInnovate",
    content:
      "AIPlaneTech's predictive analytics solution has transformed our decision-making process. We've seen a 30% increase in operational efficiency since implementation.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    position: "Data Science Director, FinTech Global",
    content:
      "The NLP solution developed by AIPlaneTech has revolutionized how we process customer feedback. The insights generated have directly contributed to our product improvements.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Priya Sharma",
    position: "VP of Innovation, HealthTech Solutions",
    content:
      "Working with AIPlaneTech on our computer vision project was seamless. Their expertise and collaborative approach ensured we achieved our objectives ahead of schedule.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Wilson",
    position: "CEO, Retail Analytics Co.",
    content:
      "The AI workshop conducted by AIPlaneTech was transformative for our team. We now have the skills to implement AI solutions that have already improved our customer experience.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Card */}
      <div className="bg-[#3B1C32]/20 backdrop-blur-sm rounded-xl p-8 shadow-lg relative overflow-hidden">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 text-[#6A1E55]/20">
          <Quote size={80} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-lg text-gray-200 mb-6 italic">"{testimonials[currentIndex].content}"</p>

          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#6A1E55]">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-gray-400">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="bg-[#3B1C32]/20 border-[#6A1E55]/30 hover:bg-[#6A1E55]/20 hover:border-[#6A1E55]"
          onClick={() => {
            prevTestimonial()
            setIsAutoPlaying(false)
          }}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-2 h-2 rounded-full p-0 border-[#6A1E55]/30 ${
              index === currentIndex
                ? "bg-[#6A1E55] border-[#6A1E55]"
                : "bg-[#3B1C32]/20 hover:bg-[#6A1E55]/20 hover:border-[#6A1E55]"
            }`}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
            }}
          />
        ))}

        <Button
          variant="outline"
          size="icon"
          className="bg-[#3B1C32]/20 border-[#6A1E55]/30 hover:bg-[#6A1E55]/20 hover:border-[#6A1E55]"
          onClick={() => {
            nextTestimonial()
            setIsAutoPlaying(false)
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

