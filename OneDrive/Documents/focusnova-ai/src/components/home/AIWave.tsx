"use client";

import { useEffect, useRef } from "react";

interface Wave {
  frequency: number;
  amplitude: number;
  speed: number;
  offset: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  color: string;
}

const particleCount = 50;

function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: particleCount }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 1 + Math.random(),
    opacity: 0.15 + Math.random() * 0.2,
    speed: 0.12 + Math.random() * 0.28,
    color: index % 2 === 0 ? "#5B6AFF" : "#8B5CF6",
  }));
}

export default function AIWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { willReadFrequently: false });

    if (!context) {
      return undefined;
    }

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const waves: Wave[] = [
      {
        frequency: 0.008,
        amplitude: 40,
        speed: 0.003,
        offset: 0,
        color: "rgba(91, 106, 255, 0.18)",
      },
      {
        frequency: 0.012,
        amplitude: 28,
        speed: 0.005,
        offset: Math.PI * 0.7,
        color: "rgba(139, 92, 246, 0.12)",
      },
      {
        frequency: 0.006,
        amplitude: 55,
        speed: 0.002,
        offset: Math.PI * 1.35,
        color: "rgba(59, 130, 246, 0.08)",
      },
    ];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect() ?? canvas.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;

      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles = createParticles(width, height);
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `${particle.color}${Math.round(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        context.shadowBlur = 10;
        context.shadowColor = particle.color;
        context.fill();
        context.shadowBlur = 0;

        particle.y -= particle.speed;
        particle.x += Math.sin(particle.y * 0.01) * 0.08;

        if (particle.y + particle.radius < 0) {
          particle.y = height + particle.radius;
          particle.x = Math.random() * width;
        }
      });
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);
      drawParticles();

      waves.forEach((wave) => {
        context.beginPath();

        for (let x = 0; x <= width; x += 2) {
          const y =
            height / 2 +
            Math.sin(x * wave.frequency + wave.offset) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.5 + wave.offset * 0.8) * (wave.amplitude * 0.4);

          if (x === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        context.lineTo(width, height);
        context.lineTo(0, height);
        context.closePath();
        context.fillStyle = wave.color;
        context.fill();
        wave.offset += wave.speed;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
