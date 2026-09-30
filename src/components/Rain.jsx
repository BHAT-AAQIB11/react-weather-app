import React, { useEffect, useRef } from "react";

const RainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions to match the window or parent container
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Configuration parameters
    const maxDrops = 100; // Number of active raindrops
    const drops = [];

    // Initialize individual raindrop properties
    for (let i = 0; i < maxDrops; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10, // Length of the drop line
        speed: Math.random() * 15 + 10, // Falling speed
        opacity: Math.random() * 0.3 + 0.1, // Slight transparency
        angle: Math.random() * 2 - 1, // Slight horizontal slant
      });
    }

    // Animation Loop
    const draw = () => {
      // Clear canvas with a transparent trail to simulate motion blur
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      for (let i = 0; i < maxDrops; i++) {
        const p = drops[i];

        // Set style for individual drop
        ctx.strokeStyle = `rgba(174, 194, 224, ${p.opacity})`; // Soft blue-grey color
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.angle, p.y + p.length);
        ctx.stroke();

        // Update positions for next frame
        p.y += p.speed;
        p.x += p.angle;

        // Reset raindrop back to top if it hits the bottom
        if (p.y > canvas.height) {
          p.y = -p.length;
          p.x = Math.random() * canvas.width;
          p.speed = Math.random() * 15 + 10;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Clean up animation frames and listeners on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Allows clicking through the rain to dashboard items
        zIndex: 1, // Puts it behind text but in front of background
      }}
    />
  );
};

export default RainEffect;
