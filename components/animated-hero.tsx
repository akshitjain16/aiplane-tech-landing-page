"use client"

import { useEffect, useRef } from "react"

export default function AnimatedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Neural network nodes
    const nodes: { x: number; y: number; radius: number; vx: number; vy: number }[] = []
    const numNodes = 50
    const connections: { from: number; to: number; opacity: number }[] = []
    const maxConnections = 100

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    // Create connections
    for (let i = 0; i < maxConnections; i++) {
      const from = Math.floor(Math.random() * numNodes)
      const to = Math.floor(Math.random() * numNodes)
      if (from !== to) {
        connections.push({
          from,
          to,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw connections
      connections.forEach((connection) => {
        const fromNode = nodes[connection.from]
        const toNode = nodes[connection.to]

        const dx = toNode.x - fromNode.x
        const dy = toNode.y - fromNode.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < canvas.width / 3) {
          ctx.beginPath()
          ctx.moveTo(fromNode.x, fromNode.y)
          ctx.lineTo(toNode.x, toNode.y)
          ctx.strokeStyle = `rgba(166, 77, 121, ${connection.opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "#A64D79"
        ctx.fill()

        // Draw glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(node.x, node.y, node.radius, node.x, node.y, node.radius * 4)
        gradient.addColorStop(0, "rgba(166, 77, 121, 0.3)")
        gradient.addColorStop(1, "rgba(166, 77, 121, 0)")
        ctx.fillStyle = gradient
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full rounded-lg" />
}

