import React, { useEffect, useRef } from "react";

export default function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    let width = 0;
    let height = 0;

    const LAYER_COUNT = 3;
    const STARS_PER_LAYER = window.innerWidth < 768 ? 30 : 80;

    const initStars = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      stars = [];

      for (let i = 0; i < LAYER_COUNT; i++) {
        const layerSpeed = (i + 1) * 0.2;
        const baseOpacity = 0.3 + (i * 0.1);

        for (let j = 0; j < STARS_PER_LAYER; j++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 0.8 + 0.2,
            opacity: baseOpacity,
            speed: layerSpeed,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x -= star.speed;

        if (star.x < 0) {
          star.x = width;
          star.y = Math.random() * height;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      initStars();
    };

    initStars();
    render();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}