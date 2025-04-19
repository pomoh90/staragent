'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NetworkMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Node class
    class Node {
      x: number;
      y: number;
      connections: Node[];
      speed: { x: number; y: number };
      radius: number;
      glow: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.speed = {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2
        };
        this.radius = 1.5;
        this.glow = Math.random() * 0.5 + 0.5;
      }

      update() {
        if (!canvas) return;
        this.x += this.speed.x;
        this.y += this.speed.y;

        if (this.x < 0 || this.x > canvas.width) this.speed.x *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speed.y *= -1;

        this.glow = Math.sin(Date.now() / 1000 + this.x * 0.01) * 0.5 + 0.5;
      }

      draw() {
        if (!ctx) return;

        // Draw connections first
        this.connections.forEach(node => {
          const distance = Math.sqrt(
            Math.pow(this.x - node.x, 2) + Math.pow(this.y - node.y, 2)
          );
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = `rgba(125, 211, 252, ${
              (1 - distance / 150) * 0.3 * this.glow
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Draw node with glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 211, 252, ${0.3 + this.glow * 0.3})`;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = 'rgb(125, 211, 252)';
        ctx.shadowBlur = 10 * this.glow;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = 200; // Increased number of nodes

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Connect nearby nodes
    nodes.forEach(node => {
      nodes.forEach(otherNode => {
        if (node !== otherNode) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 150) {
            node.connections.push(otherNode);
          }
        }
      });
    });

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ filter: 'blur(1px)' }}
      />
    </motion.div>
  );
};

export default NetworkMap;
