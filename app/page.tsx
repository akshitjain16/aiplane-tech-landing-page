import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Database, LineChart, MessageSquare, Zap } from "lucide-react"
import Link from "next/link"
import WorkshopTimeline from "@/components/workshop-timeline"
import SolutionCard from "@/components/solution-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import AnimatedHero from "@/components/animated-hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1D] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1A1A1D]/80 border-b border-[#3B1C32]/30">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-[#A64D79]" />
            <span className="font-bold text-xl">AIPlaneTech</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm hover:text-[#A64D79] transition-colors">
              About
            </Link>
            <Link href="#workshop" className="text-sm hover:text-[#A64D79] transition-colors">
              Workshop
            </Link>
            <Link href="#solutions" className="text-sm hover:text-[#A64D79] transition-colors">
              Solutions
            </Link>
            <Link href="#testimonials" className="text-sm hover:text-[#A64D79] transition-colors">
              Testimonials
            </Link>
          </nav>

          <Button className="bg-[#6A1E55] hover:bg-[#A64D79] transition-all duration-300 shadow-lg hover:shadow-[#A64D79]/20 hover:shadow-xl">
            Explore Solutions
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Empowering AI & ML Solutions</h1>
                <p className="text-lg text-gray-300 max-w-lg">
                  Bringing cutting-edge machine learning models to organizations in need.
                </p>
                <Button className="bg-[#6A1E55] hover:bg-[#A64D79] transition-all duration-300 text-white px-8 py-6 text-lg shadow-lg hover:shadow-[#A64D79]/20 hover:shadow-xl group">
                  Explore Solutions
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <AnimatedHero />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1D] to-transparent z-0"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[#1A1A1D]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About AIPlaneTech</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                AIPlaneTech - AIM Jai Ho is a pioneering AI/ML solutions company dedicated to transforming businesses
                through innovative artificial intelligence technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Mission",
                  description: "To democratize AI technology and make it accessible to organizations of all sizes.",
                  icon: <Zap className="h-10 w-10 text-[#A64D79]" />,
                },
                {
                  title: "Our Expertise",
                  description:
                    "Specialized in developing custom AI solutions tailored to your unique business challenges.",
                  icon: <Code className="h-10 w-10 text-[#A64D79]" />,
                },
                {
                  title: "Our Approach",
                  description:
                    "Collaborative partnership focused on delivering measurable results and continuous innovation.",
                  icon: <MessageSquare className="h-10 w-10 text-[#A64D79]" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#3B1C32]/20 rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(166,77,121,0.1)] transition-all duration-300 hover:translate-y-[-5px] neumorphic-card"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Section */}
        <section id="workshop" className="py-20 bg-[#1A1A1D]/90">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Workshop</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our comprehensive 10-Day AI Workshop equips participants with practical skills and knowledge to
                implement AI solutions.
              </p>
            </div>

            <WorkshopTimeline />
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-[#1A1A1D]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our cutting-edge AI solutions designed to transform your business operations and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SolutionCard
                title="Predictive Analytics"
                description="Leverage historical data to forecast trends and make data-driven decisions."
                icon={<LineChart className="h-12 w-12" />}
              />
              <SolutionCard
                title="Natural Language Processing"
                description="Extract insights from text data and automate communication processes."
                icon={<MessageSquare className="h-12 w-12" />}
              />
              <SolutionCard
                title="Computer Vision"
                description="Analyze visual data to automate inspection, recognition, and classification tasks."
                icon={<Database className="h-12 w-12" />}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-[#3B1C32]/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Hear from organizations that have transformed their operations with our AI solutions.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business with AI</h2>
              <p className="text-xl text-gray-200 mb-8">
                Get started today and discover how our AI solutions can drive innovation and growth for your
                organization.
              </p>
              <Button className="bg-[#6A1E55] hover:bg-[#A64D79] transition-all duration-300 text-white px-8 py-6 text-lg shadow-lg hover:shadow-[#A64D79]/20 hover:shadow-xl animate-pulse-slow">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1D] border-t border-[#3B1C32]/30 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-[#A64D79]" />
                <span className="font-bold text-xl">AIPlaneTech</span>
              </div>
              <p className="text-gray-400 text-sm">Empowering organizations with cutting-edge AI solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    Predictive Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    Natural Language Processing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    Computer Vision
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    Custom AI Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#A64D79] transition-colors">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#3B1C32]/30 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} AIPlaneTech - AIM Jai Ho. All rights reserved.</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10">
          <div className="wave-animation"></div>
        </div>
      </footer>
    </div>
  )
}

