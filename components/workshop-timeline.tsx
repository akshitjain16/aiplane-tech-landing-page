"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function WorkshopTimeline() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null)

  const workshopDays = [
    {
      day: "Day 1",
      title: "Introduction to AI & ML",
      description: "Overview of AI concepts, machine learning fundamentals, and the AI development lifecycle.",
      topics: [
        "AI vs ML vs Deep Learning",
        "Types of Machine Learning",
        "Applications in Industry",
        "Setting up Development Environment",
      ],
    },
    {
      day: "Day 2",
      title: "Data Preparation & Analysis",
      description: "Techniques for data collection, cleaning, and preprocessing for machine learning models.",
      topics: [
        "Data Collection Methods",
        "Data Cleaning Techniques",
        "Feature Engineering",
        "Exploratory Data Analysis",
      ],
    },
    {
      day: "Day 3",
      title: "Supervised Learning",
      description: "Building and evaluating regression and classification models.",
      topics: ["Linear & Logistic Regression", "Decision Trees", "Random Forests", "Model Evaluation Metrics"],
    },
    {
      day: "Day 4",
      title: "Unsupervised Learning",
      description: "Clustering, dimensionality reduction, and anomaly detection techniques.",
      topics: ["K-means Clustering", "Hierarchical Clustering", "Principal Component Analysis", "Anomaly Detection"],
    },
    {
      day: "Day 5",
      title: "Deep Learning Fundamentals",
      description: "Neural network architecture, training, and optimization strategies.",
      topics: ["Neural Network Basics", "Activation Functions", "Backpropagation", "Optimization Algorithms"],
    },
    {
      day: "Day 6",
      title: "Computer Vision",
      description: "Image processing, object detection, and image classification using deep learning.",
      topics: ["Convolutional Neural Networks", "Transfer Learning", "Object Detection", "Image Segmentation"],
    },
    {
      day: "Day 7",
      title: "Natural Language Processing",
      description: "Text processing, sentiment analysis, and language generation techniques.",
      topics: ["Text Preprocessing", "Word Embeddings", "Recurrent Neural Networks", "Transformer Models"],
    },
    {
      day: "Day 8",
      title: "Reinforcement Learning",
      description: "Building agents that learn from interaction with environments.",
      topics: ["Markov Decision Processes", "Q-Learning", "Policy Gradients", "Deep Reinforcement Learning"],
    },
    {
      day: "Day 9",
      title: "Model Deployment",
      description: "Techniques for deploying ML models to production environments.",
      topics: ["Model Serialization", "API Development", "Containerization", "Cloud Deployment"],
    },
    {
      day: "Day 10",
      title: "Capstone Project",
      description: "Apply all learned concepts to build an end-to-end AI solution.",
      topics: ["Project Planning", "Implementation", "Testing & Evaluation", "Presentation"],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#6A1E55] to-[#A64D79] transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {workshopDays.map((day, index) => (
            <div key={index} className="relative">
              <div
                className={`
                absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#6A1E55] border-4 border-[#1A1A1D] 
                transform -translate-y-1/2 md:-translate-x-1/2 z-10
                ${expandedDay === day.day ? "shadow-[0_0_15px_rgba(166,77,121,0.7)]" : ""}
              `}
              ></div>

              <div
                className={`
                ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8 items-center
                ${index % 2 === 0 ? "md:text-right" : "md:flex md:flex-row-reverse"}
              `}
              >
                <div
                  className={`
                  bg-[#3B1C32]/20 p-6 rounded-lg shadow-lg hover:shadow-[0_8px_30px_rgba(166,77,121,0.1)]
                  transition-all duration-300 hover:translate-y-[-5px]
                  ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}
                `}
                >
                  <h3 className="text-xl font-bold text-[#A64D79] mb-1">{day.day}</h3>
                  <h4 className="text-lg font-semibold mb-2">{day.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{day.description}</p>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="topics" className="border-[#3B1C32]">
                      <AccordionTrigger className="text-sm hover:text-[#A64D79] transition-colors">
                        View Topics
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-2">
                          {day.topics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className={`hidden md:block ${index % 2 === 0 ? "" : "md:text-right"}`}>
                  <span className="text-[#A64D79] font-bold">{day.day}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Button className="bg-[#6A1E55] hover:bg-[#A64D79] transition-all duration-300">Register for Workshop</Button>
      </div>
    </div>
  )
}

